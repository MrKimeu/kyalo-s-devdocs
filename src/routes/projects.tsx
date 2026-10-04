import { createFileRoute } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import { PageFrame } from "@/components/portfolio/page-frame";
import { ProjectTiltCard } from "@/components/portfolio/project-tilt-card";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Kyalo Isaac Kimeu" },
      { name: "description", content: "Selected web, data, AI, and deployment work by Kyalo Isaac Kimeu." },
      { property: "og:title", content: "Projects | Kyalo Isaac Kimeu" },
      { property: "og:description", content: "Selected web, data, AI, and deployment work by Kyalo Isaac Kimeu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageFrame
      title="Projects"
      tagline="A lot of ideas, but some are still under construction!"
      previous={{ label: "About Me", path: "/about" }}
      next={{ label: "Skills & Tools", path: "/skills" }}
    >
      {/* High-tech Sub-bar */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/60 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Terminal className="size-4 text-cyan-400" />
          <span className="font-mono font-medium text-foreground">
            SYSTEM_REGISTRY // 07 Production & Algorithmic Deployments
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            5 Live Platforms
          </span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <span className="size-2 rounded-full bg-zinc-500" />
            2 Enterprise Systems
          </span>
        </div>
      </div>

      {/* 3D Tilt Card Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectTiltCard key={project.id} project={project} />
        ))}
      </div>
    </PageFrame>
  );
}
