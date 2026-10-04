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
    </PageFrame>
  );
}

