import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageFrame } from "@/components/portfolio/page-frame";
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
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <CardContent className="p-0">
              <h2 className="text-[18px] font-semibold leading-snug text-foreground">
                {project.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
            <div className="mt-6 flex items-center gap-1 text-[14px] font-medium text-muted-foreground transition-colors group-hover:text-primary">
              <span>Learn More…</span>
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Card>
        ))}
      </div>
    </PageFrame>
  );
}

