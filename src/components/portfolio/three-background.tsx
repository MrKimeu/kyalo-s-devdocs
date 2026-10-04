import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Detect WebGL capability safely
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return; // WebGL unavailable, gracefully degrade
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1500
    );
    camera.position.z = 400;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Color definitions for light/dark modes
    const getColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        pointColor: isDark ? 0x06b6d4 : 0x8b4dff,
        lineColor: isDark ? 0x0891b2 : 0xa78bfa,
        wireColor: isDark ? 0x8b4dff : 0x06b6d4,
        lineOpacity: isDark ? 0.16 : 0.09,
        pointOpacity: isDark ? 0.55 : 0.35,
      };
    };

    let colors = getColors();

    // 1. Subtle, gentle particle constellation (calm & non-distracting)
    const particleCount = 65;
    const maxDistance = 100;
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const bounds = { x: 380, y: 280, z: 220 };

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * bounds.x * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * bounds.y * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * bounds.z * 2;

      // Slow, relaxing drift
      velocities.push({
        x: (Math.random() - 0.5) * 0.18,
        y: (Math.random() - 0.5) * 0.18,
        z: (Math.random() - 0.5) * 0.12,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: colors.pointColor,
      size: 3,
      transparent: true,
      opacity: colors.pointOpacity,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 2. Dynamic Connection Lines
    const maxLines = (particleCount * (particleCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: colors.lineColor,
      transparent: true,
      opacity: colors.lineOpacity,
      blending: THREE.AdditiveBlending,
    });

    const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSystem);

    // 3. Ambient Floating Geometric Nodes (slow wireframe icosahedrons)
    const polyGeo = new THREE.IcosahedronGeometry(20, 0);
    const polyMat = new THREE.MeshBasicMaterial({
      color: colors.wireColor,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });

    const poly1 = new THREE.Mesh(polyGeo, polyMat);
    poly1.position.set(-260, 110, -60);
    scene.add(poly1);

    const poly2 = new THREE.Mesh(polyGeo, polyMat);
    poly2.position.set(280, -90, -90);
    poly2.scale.set(0.75, 0.75, 0.75);
    scene.add(poly2);

    // Gentle cursor tracking with smooth dampening
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const halfWidth = window.innerWidth / 2;
      const halfHeight = window.innerHeight / 2;
      targetX = ((event.clientX - halfWidth) / halfWidth) * 20;
      targetY = (-(event.clientY - halfHeight) / halfHeight) * 16;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize, { passive: true });

    // React to theme changes
    const observer = new MutationObserver(() => {
      colors = getColors();
      particleMaterial.color.setHex(colors.pointColor);
      particleMaterial.opacity = colors.pointOpacity;
      lineMaterial.color.setHex(colors.lineColor);
      lineMaterial.opacity = colors.lineOpacity;
      polyMat.color.setHex(colors.wireColor);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Animation loop
    let animationFrameId: number;
    let isVisible = true;

    const onVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const animate = () => {
      if (isVisible) {
        // Smooth camera tilt
        mouseX += (targetX - mouseX) * 0.04;
        mouseY += (targetY - mouseY) * 0.04;
        camera.position.x = mouseX;
        camera.position.y = mouseY;
        camera.lookAt(scene.position);

        if (!prefersReducedMotion) {
          let lineIndex = 0;

          for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const vel = velocities[i];
            if (!vel) continue;

            const px = (positions[i3] ?? 0) + vel.x;
            const py = (positions[i3 + 1] ?? 0) + vel.y;
            const pz = (positions[i3 + 2] ?? 0) + vel.z;

            // Soft bounce boundaries
            if (px < -bounds.x || px > bounds.x) vel.x *= -1;
            if (py < -bounds.y || py > bounds.y) vel.y *= -1;
            if (pz < -bounds.z || pz > bounds.z) vel.z *= -1;

            positions[i3] = px;
            positions[i3 + 1] = py;
            positions[i3 + 2] = pz;

            // Calculate connections
            for (let j = i + 1; j < particleCount; j++) {
              const j3 = j * 3;
              const pjx = positions[j3] ?? 0;
              const pjy = positions[j3 + 1] ?? 0;
              const pjz = positions[j3 + 2] ?? 0;

              const dx = px - pjx;
              const dy = py - pjy;
              const dz = pz - pjz;
              const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

              if (dist < maxDistance && lineIndex + 5 < linePositions.length) {
                linePositions[lineIndex++] = px;
                linePositions[lineIndex++] = py;
                linePositions[lineIndex++] = pz;

                linePositions[lineIndex++] = pjx;
                linePositions[lineIndex++] = pjy;
                linePositions[lineIndex++] = pjz;
              }
            }
          }

          const particleAttr = particleGeometry.getAttribute("position");
          if (particleAttr) {
            particleAttr.needsUpdate = true;
          }

          lineGeometry.setDrawRange(0, Math.floor(lineIndex / 3));
          const lineAttr = lineGeometry.getAttribute("position");
          if (lineAttr) {
            lineAttr.needsUpdate = true;
          }

          // Slow, peaceful wireframe rotation
          poly1.rotation.x += 0.002;
          poly1.rotation.y += 0.003;
          poly2.rotation.x -= 0.0025;
          poly2.rotation.y -= 0.002;
        }

        renderer.render(scene, camera);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      polyGeo.dispose();
      polyMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-45 transition-opacity duration-700 dark:opacity-75"
    />
  );
}
