import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, BrainCircuit, Cpu, Database } from "lucide-react";
import { SiCplusplus, SiCss3, SiDocker, SiGit, SiGithub, SiHtml5, SiJavascript, SiMysql, SiPhp, SiPython, SiTailwindcss } from "react-icons/si";
import { PageFrame } from "@/components/portfolio/page-frame";
import { skills } from "@/data/skills";

const icons = [SiHtml5, SiCss3, SiJavascript, SiPhp, SiTailwindcss, SiPython, SiCplusplus, SiMysql, Database, SiDocker, SiGit, SiGithub, BrainCircuit, BarChart3, Cpu];
const colors = ["text-[#E34F26]", "text-[#1572B6]", "text-[#F7DF1E]", "text-[#777BB4]", "text-[#06B6D4]", "text-[#3776AB]", "text-[#659AD2]", "text-[#4479A1]", "text-[#CC2927]", "text-[#2496ED]", "text-[#F05032]", "text-white", "text-[#A78BFA]", "text-[#60A5FA]", "text-[#34D399]"];

export const Route = createFileRoute("/skills")({
  head: () => ({ meta: [
    { title: "Skills & Tools | Kyalo Isaac Kimeu" }, { name: "description", content: "The web, database, DevOps, and algorithmic tools Kyalo Isaac Kimeu uses." },
    { property: "og:title", content: "Skills & Tools | Kyalo Isaac Kimeu" }, { property: "og:description", content: "The web, database, DevOps, and algorithmic tools Kyalo Isaac Kimeu uses." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: SkillsPage,
});
function SkillsPage() {
  return <PageFrame title="Skills & Tools" tagline="Learned by coding all night and debugging all day!" previous={{ label: "Projects", path: "/projects" }} next={{ label: "Experience", path: "/experience" }}>
    <p className="text-[17px] leading-[1.58] text-foreground md:text-[19px]">As a web developer with an algorithmic mindset, I build responsive, data-driven web applications and I am growing into Python and C++ for high-performance work. I also use Docker and AI/ML integration to create efficient, maintainable, robust solutions.</p>
    <div className="mt-5 flex flex-wrap justify-center gap-3">{skills.map((skill, index) => { const Icon = icons[index]; return <span key={skill} className="flex h-[34px] items-center gap-2 rounded-lg border border-skill-border bg-skill px-3.5 text-sm font-medium text-skill-foreground transition-transform hover:scale-[1.04]"><Icon className={`size-4 ${colors[index]}`} />{skill}</span>; })}</div>
  </PageFrame>;
}
