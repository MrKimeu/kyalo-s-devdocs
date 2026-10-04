import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/portfolio/page-frame";
import { Timeline } from "@/components/portfolio/timeline";
import { education, educationIntro } from "@/data/education";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education | Kyalo Isaac Kimeu" },
      { name: "description", content: "Kyalo Isaac Kimeu's computer science education and qualifications." },
      { property: "og:title", content: "Education | Kyalo Isaac Kimeu" },
      { property: "og:description", content: "Kyalo Isaac Kimeu's computer science education and qualifications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <PageFrame
      title="Education"
      tagline="I learned a lot, but the real learning happens in the code editor!"
      previous={{ label: "Experience", path: "/experience" }}
      next={{ label: "Contact", path: "/contact" }}
    >
      <div className="space-y-6">
        {educationIntro.map((paragraph, index) => (
          <p key={index} className="text-[17px] leading-[1.58] font-normal text-foreground md:text-[19px]">
            {paragraph}
          </p>
        ))}
      </div>
      <Timeline entries={education} />
    </PageFrame>
  );
}

