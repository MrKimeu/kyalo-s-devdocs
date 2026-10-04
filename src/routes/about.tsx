import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/portfolio/page-frame";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Kyalo Isaac Kimeu" },
      { name: "description", content: "Learn more about Nairobi-based web developer Kyalo Isaac Kimeu." },
      { property: "og:title", content: "About | Kyalo Isaac Kimeu" },
      { property: "og:description", content: "Learn more about Nairobi-based web developer Kyalo Isaac Kimeu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageFrame
      title="About Kimeu"
      tagline="More than just a title, let's dive deeper!"
      previous={{ label: "Introduction", path: "/" }}
      next={{ label: "Projects", path: "/projects" }}
    >
      <div className="space-y-7">
        {profile.about.map((paragraph, index) => (
          <p key={index} className="text-[17px] leading-[1.58] font-normal text-foreground md:text-[19px]">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Career Objective from CV */}
      <section className="mt-10 rounded-xl border border-border bg-card p-6 shadow-xs">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
          Career Objective
        </h2>
        <p className="mt-2 text-base leading-relaxed text-foreground md:text-[17px]">
          {profile.careerObjective}
        </p>
      </section>

      {/* Technical Achievements from CV */}
      <section className="mt-8 space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Core Technical Achievements
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {profile.technicalAchievements.map((achievement, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm font-medium text-foreground shadow-xs"
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {idx + 1}
              </span>
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

