import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import type { SectionPath } from "@/data/profile";

type PageFrameProps = {
  title: string;
  tagline?: string;
  children: ReactNode;
  previous?: { label: string; path: SectionPath };
  next?: { label: string; path: SectionPath };
};

export function PageFrame({ title, tagline, children, previous, next }: PageFrameProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
      className="w-full max-w-[1010px]"
    >
      <header>
        <h1 className="text-[30px] leading-[1.08] font-bold tracking-tight text-foreground md:text-[40px]">{title}</h1>
        {tagline ? <p className="mt-1 text-[30px] leading-[1.12] font-bold tracking-tight text-muted-foreground md:text-[40px]">{tagline}</p> : null}
      </header>
      <div className="mt-6">{children}</div>
      <nav aria-label="Section navigation" className="mt-14 flex min-h-10 items-center justify-between border-t border-border pt-6">
        {previous ? (
          <Link to={previous.path} preload="intent" className="group inline-flex items-center gap-1 text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <ChevronLeft className="size-5 transition-transform group-hover:-translate-x-0.5" />{previous.label}
          </Link>
        ) : <span />}
        {next ? (
          <Link to={next.path} preload="intent" className="group inline-flex items-center gap-1 text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {next.label}<ChevronRight className="size-5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : null}
      </nav>
    </motion.article>
  );
}
