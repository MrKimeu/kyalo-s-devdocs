import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/portfolio/page-frame";
import { Timeline } from "@/components/portfolio/timeline";
import { experience } from "@/data/experience";

export const Route = createFileRoute("/experience")({
  head: () => ({ meta: [
    { title: "Experience | Kyalo Isaac Kimeu" }, { name: "description", content: "Kyalo Isaac Kimeu's web development, software internship, and client delivery experience." },
    { property: "og:title", content: "Experience | Kyalo Isaac Kimeu" }, { property: "og:description", content: "Kyalo Isaac Kimeu's web development, software internship, and client delivery experience." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ExperiencePage,
});
function ExperiencePage() {
  return <PageFrame title="Experience" tagline="You need it to get the job, but the job's what gives it!" previous={{ label: "Skills & Tools", path: "/skills" }} next={{ label: "Education", path: "/education" }}>
    <p className="text-[17px] leading-[1.58] text-foreground md:text-[19px]">From freelancing for clients to a software internship at an internet infrastructure company, my experience has been a mix of structured learning and spontaneous problem-solving. Each role has sharpened my ability to write clean code, collaborate effectively and ship work that real users depend on.</p>
    <Timeline entries={experience} />
  </PageFrame>;
}
