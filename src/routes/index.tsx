import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, ExternalLink, Mail, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  return (
    <PageFrame title={profile.name} tagline="Building clever systems, one algorithm at a time!" next={{ label: "About Me", path: "/about" }}>
      <p className="max-w-none text-[17px] leading-[1.58] font-normal text-foreground md:text-[19px]">{profile.introduction}</p>
      
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button className="h-10 rounded-lg px-4" asChild>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Get Resume <ExternalLink className="size-4" /></a>
        </Button>
        <Button variant="ghost" className="h-10 rounded-lg px-4" asChild>
          <a href={`mailto:${profile.email}`}><Mail className="size-4" />Send Mail</a>
        </Button>
      </div>

      {/* Mini View & Executive Summary */}
      <section aria-labelledby="mini-view-heading" className="mt-12 space-y-8 border-t border-border pt-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5" />
            <span>Executive Summary</span>
          </div>
          <h2 id="mini-view-heading" className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Portfolio at a Glance
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            A quick mini-view of core qualifications, recent experience, and key sections.
          </p>
        </div>

        {/* Snapshot highlights grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.summaryHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-transparent bg-card p-4 shadow-none backdrop-blur-sm transition-colors hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <CheckCircle2 className="size-3.5 text-primary" />
                <span>{item.label}</span>
              </div>
              <p className="mt-1.5 text-sm font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Mini Section Previews Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Section Previews</h3>
            <span className="text-xs text-muted-foreground">Hover to preload · Click to jump</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.sectionPreviews.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                preload="intent"
                className="group relative block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-xl"
              >
                <Card className="h-full rounded-xl border border-transparent bg-card p-5 shadow-none transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-white/[0.05] backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="outline" className="border-transparent bg-muted/40 dark:bg-white/[0.04] text-xs font-medium text-muted-foreground">
                        {section.tag}
                      </Badge>
                      <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <h4 className="mt-3 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {section.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                      <span>View section</span>
                      <ChevronRight className="size-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
