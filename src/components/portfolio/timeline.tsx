import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { TimelineEntry } from "@/data/experience";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="mt-10">
      {entries.map((entry, index) => (
        <li key={`${entry.title}-${entry.date}`} className="relative grid grid-cols-[28px_1fr] gap-4 pb-9 last:pb-0">
          {index < entries.length - 1 ? <span aria-hidden className="absolute left-[13px] top-7 h-full w-px bg-border" /> : null}
          <span className="relative z-10 flex size-7 items-center justify-center rounded-full bg-timeline text-timeline-foreground">
            <CalendarDays className="size-3.5" />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-foreground">{entry.title} · {entry.organization}</h2>
              {entry.latest ? <Badge className="rounded-md border-0 bg-timeline px-2 py-0.5 text-sm font-medium text-timeline-foreground hover:bg-timeline">Latest</Badge> : null}
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span>{entry.date}</span><span className="inline-flex items-center gap-1"><MapPin className="size-3.5" />{entry.location}</span>
            </div>
            <p className="mt-3 text-base leading-[1.6] text-muted-foreground">{entry.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
