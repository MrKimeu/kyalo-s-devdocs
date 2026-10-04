import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame } from "@/components/portfolio/page-frame";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Kyalo Isaac Kimeu | Web Developer" },
    { name: "description", content: "Web developer focused on algorithmic systems, data analysis and AI/ML integration, based in Nairobi, Kenya." },
    { property: "og:title", content: "Kyalo Isaac Kimeu | Web Developer" },
    { property: "og:description", content: "Web developer focused on algorithmic systems, data analysis and AI/ML integration, based in Nairobi, Kenya." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Introduction,
});

function Introduction() {
  return <PageFrame title={profile.name} tagline="Building clever systems, one algorithm at a time!" next={{ label: "About Me", path: "/about" }}>
    <p className="max-w-none text-[17px] leading-[1.58] font-normal text-foreground md:text-[19px]">{profile.introduction}</p>
    <div className="mt-6 flex flex-wrap items-center gap-2">
      <Button className="h-10 rounded-lg px-4" asChild><a href="/resume.pdf" target="_blank" rel="noreferrer">Get Resume <ExternalLink /></a></Button>
      <Button variant="ghost" className="h-10 rounded-lg px-4" asChild><a href={`mailto:${profile.email}`}><Mail />Send Mail</a></Button>
    </div>
  </PageFrame>;
}
