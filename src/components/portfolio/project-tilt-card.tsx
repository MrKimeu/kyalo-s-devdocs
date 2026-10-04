import { useRef, useState } from "react";
import { ExternalLink, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ProjectItem } from "@/data/projects";

interface ProjectTiltCardProps {
  project: ProjectItem;
}

export function ProjectTiltCard({ project }: ProjectTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 0, y: 0, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({ x, y, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 0, y: 0, opacity: 0 });
  };

  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    project.searchQuery || `${project.title} software system`
  )}`;

  return (
    <Dialog>
      <div
        style={{ perspective: "1000px" }}
        className="w-full transition-transform duration-200"
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: isHovered
              ? `rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg) translateZ(8px) scale3d(1.015, 1.015, 1.015)`
              : "rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)",
            transition: isHovered
              ? "transform 0.1s ease-out, border-color 0.25s ease, box-shadow 0.25s ease"
              : "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease",
          }}
          className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 text-foreground backdrop-blur-md transition-all duration-300 ${
            isHovered
              ? "border-cyan-400/80 shadow-[0_12px_35px_rgba(6,182,212,0.18)] dark:shadow-[0_12px_45px_rgba(6,182,212,0.25)]"
              : "border-border/70 shadow-sm hover:border-cyan-500/40"
          } bg-card/95 dark:bg-[#0c121e]/90`}
        >
          {/* Dynamic Glare Reflection */}
          <div
            className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle at ${glare.x}px ${glare.y}px, rgba(6,182,212,0.14), transparent 65%)`,
            }}
          />

          {/* Top subtle ambient accent line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Card Body */}
          <div className="relative z-20 flex flex-col">
            {/* Header: Counter & Status */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground/80">
                {project.number}
              </span>
              {project.status === "Live" ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-emerald-400">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Live
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-zinc-400">
                  Private
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-3.5 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-cyan-400 dark:text-zinc-100">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-3 min-h-[4rem] text-[14px] leading-relaxed text-muted-foreground/90">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border/80 bg-muted/60 px-2.5 py-1 text-[11px] font-medium text-foreground/85 transition-colors hover:border-cyan-500/40 dark:border-zinc-800 dark:bg-[#161d2d] dark:text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="relative z-20 mt-6 pt-4 border-t border-border/50">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-[12px] font-medium text-muted-foreground">
                  {project.role}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 gap-1 rounded-lg text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    <Layers className="size-3.5" />
                    <span>Details</span>
                  </Button>
                </DialogTrigger>

                {project.searchQuery && (
                  <a
                    href={googleSearchUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-3 text-xs font-semibold text-white shadow-sm shadow-cyan-500/20 transition-all duration-200 hover:from-blue-500 hover:to-cyan-400 hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  >
                    <span>Google Search</span>
                    <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <DialogContent className="max-w-2xl border-border/80 bg-background/95 backdrop-blur-xl sm:rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-xs">
              {project.number}
            </Badge>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                project.status === "Live"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                  : "bg-zinc-800 text-zinc-400 border border-zinc-700"
              }`}
            >
              {project.status}
            </span>
          </div>
          <DialogTitle className="mt-2 text-2xl font-bold tracking-tight text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm font-medium text-primary">
            Role: {project.role}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <Sparkles className="size-4 text-cyan-500" />
              Executive Overview
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">
              {project.details.overview}
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <CheckCircle2 className="size-4 text-emerald-500" />
              Key Technical Achievements
            </h4>
            <ul className="mt-2 space-y-2">
              {project.details.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <Layers className="size-4 text-purple-500" />
              System Architecture & Infrastructure
            </h4>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.details.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-border/60 bg-muted/30 p-2.5 text-xs font-medium text-muted-foreground"
                >
                  {arch}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-xs font-mono text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3.5 text-xs font-semibold text-white shadow hover:bg-primary/90"
                >
                  <span>Visit Platform</span>
                  <ExternalLink className="size-3.5" />
                </a>
              )}
              {project.searchQuery && (
                <a
                  href={googleSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-3.5 text-xs font-semibold text-white shadow-sm hover:from-blue-500 hover:to-cyan-400"
                >
                  <span>Google Search</span>
                  <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
