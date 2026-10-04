import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { Eye, Heart } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageFrame } from "@/components/portfolio/page-frame";
import { statsConfig, type ContributionResponse, type GitHubUserStats } from "@/data/stats";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Portfolio Stats | Kyalo Isaac Kimeu" },
      { name: "description", content: "Portfolio and public GitHub statistics for Kyalo Isaac Kimeu." },
      { property: "og:title", content: "Portfolio Stats | Kyalo Isaac Kimeu" },
      { property: "og:description", content: "Portfolio and public GitHub statistics for Kyalo Isaac Kimeu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StatsPage,
});

function StatsPage() {
  // Visitor views counter (persisted in localStorage)
  const [views, setViews] = useState(statsConfig.initialViews);
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("kimeu_portfolio_views");
      const current = stored ? parseInt(stored, 10) : statsConfig.initialViews;
      const next = current + 1;
      setViews(next);
      window.localStorage.setItem("kimeu_portfolio_views", String(next));
    } catch {
      setViews(statsConfig.initialViews + 1);
    }
  }, []);

  // Appreciation counter with local session limit
  const [appreciations, setAppreciations] = useState(statsConfig.initialAppreciation);
  const [sessionLikes, setSessionLikes] = useState(0);
  const [bursting, setBursting] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("kimeu_portfolio_appreciations");
      if (stored) {
        setAppreciations(parseInt(stored, 10));
      }
    } catch {
      // fallback to initial
    }
  }, []);

  const handleLove = () => {
    if (sessionLikes >= 10) {
      toast.info("Thank you! You have reached the appreciation limit for this session.");
      return;
    }

    const next = appreciations + 1;
    setAppreciations(next);
    setSessionLikes((prev) => prev + 1);
    setBursting(true);
    setTimeout(() => setBursting(false), 700);

    try {
      window.localStorage.setItem("kimeu_portfolio_appreciations", String(next));
    } catch {
      // ignore
    }

    toast.success("Thank you for loving this portfolio! ❤️");
  };

  // Live GitHub Profile stats query
  const { data: userData } = useQuery<GitHubUserStats>({
    queryKey: ["github-user", statsConfig.githubUsername],
    queryFn: async () => {
      const res = await fetch(`https://api.github.com/users/${statsConfig.githubUsername}`);
      if (!res.ok) return statsConfig.fallbackUserStats;
      return res.json();
    },
    staleTime: 1000 * 60 * 15,
  });

  // Live GitHub Contributions query
  const { data: contributionsData } = useQuery<ContributionResponse>({
    queryKey: ["github-contributions", statsConfig.githubUsername],
    queryFn: async () => {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${statsConfig.githubUsername}?y=last`
      );
      if (!res.ok) throw new Error("Could not fetch contributions");
      return res.json();
    },
    staleTime: 1000 * 60 * 15,
  });

  // Build heatmap columns (weeks) from contribution data
  const { weeks, monthLabels, totalContributions } = useMemo(() => {
    const rawDays = contributionsData?.contributions ?? [];
    const total = contributionsData?.total?.lastYear ?? 5;

    // Group into 7-day columns
    const cols: { date: string; count: number; level: number }[][] = [];
    let currentWeek: { date: string; count: number; level: number }[] = [];

    // Fallback grid of 52 weeks if data isn't loaded yet
    if (rawDays.length === 0) {
      for (let w = 0; w < 52; w++) {
        const dummyWeek = Array.from({ length: 7 }, () => ({
          date: "",
          count: 0,
          level: 0,
        }));
        cols.push(dummyWeek);
      }
      return { weeks: cols, monthLabels: [], totalContributions: total };
    }

    rawDays.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        cols.push(currentWeek);
        currentWeek = [];
      }
    });
    if (currentWeek.length > 0) {
      cols.push(currentWeek);
    }

    // Determine month headers
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const labels: { month: string; colIndex: number }[] = [];
    let lastMonth = -1;

    cols.forEach((week, colIndex) => {
      const firstDayWithDate = week.find((d) => d.date);
      if (firstDayWithDate) {
        const m = new Date(firstDayWithDate.date).getMonth();
        if (m !== lastMonth && months[m]) {
          labels.push({ month: months[m]!, colIndex });
          lastMonth = m;
        }
      }
    });

    return { weeks: cols, monthLabels: labels, totalContributions: total };
  }, [contributionsData]);

  // Color mapping for contribution levels
  const levelColors = [
    "bg-[#EBEDF0] dark:bg-[#27272A]", // 0
    "bg-[#9BE9A8]", // 1
    "bg-[#40C463]", // 2
    "bg-[#30A14E]", // 3
    "bg-[#216E39]", // 4
  ];

  return (
    <PageFrame title="About this portfolio." previous={{ label: "Contact", path: "/contact" }}>
      <p className="text-[17px] leading-[1.58] text-muted-foreground md:text-[19px]">
        Insights and metrics about this portfolio website
      </p>

      {/* Top 2 Cards: Total Views & Appreciation */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Total Views Card */}
        <Card className="flex flex-col items-center justify-center rounded-xl border border-transparent bg-card p-6 text-center shadow-none min-h-[180px] backdrop-blur-sm">
          <CardContent className="flex w-full flex-col items-center p-0">
            <div className="flex items-center gap-2 text-base font-semibold text-foreground">
              <Eye className="size-5 text-primary" />
              <span>Total Views</span>
            </div>
            <div className="my-3 w-full border-t border-border/40" />
            <span className="text-[56px] font-extrabold leading-none text-primary">
              {views}
            </span>
            <span className="mt-2 text-xs text-muted-foreground">
              Unique page visits since {statsConfig.sinceDate}
            </span>
          </CardContent>
        </Card>

        {/* Appreciation Count Card */}
        <Card className="flex flex-col items-center justify-center rounded-xl border border-transparent bg-card p-6 text-center shadow-none min-h-[180px] relative overflow-hidden backdrop-blur-sm">
          <CardContent className="flex w-full flex-col items-center p-0">
            <div className="flex items-center gap-2 text-base font-semibold text-foreground">
              <Heart className="size-5 text-[#FF2D55] fill-[#FF2D55]" />
              <span>Appreciation Count</span>
            </div>
            <div className="my-3 w-full border-t border-border" />
            <div className="relative">
              <span className="text-[56px] font-extrabold leading-none text-[#FF2D55]">
                {appreciations}
              </span>
              <AnimatePresence>
                {bursting && (
                  <motion.div
                    initial={{ scale: 0, opacity: 1, y: 0 }}
                    animate={{ scale: 1.8, opacity: 0, y: -28 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 text-2xl"
                  >
                    ❤️
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Button
              type="button"
              onClick={handleLove}
              className="mt-3 h-8 rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring"
            >
              ♡ Love this portfolio
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* GitHub Stats Heading */}
      <section className="mt-14 space-y-6">
        <div>
          <h2 className="text-[30px] font-bold tracking-tight text-foreground md:text-[40px]">
            GitHub Stats
          </h2>
          <p className="mt-1 text-[17px] leading-[1.58] text-muted-foreground md:text-[19px]">
            Insights and metrics about my GitHub profile
          </p>
        </div>

        {/* Contribution Heatmap Card */}
        <Card className="rounded-xl border border-transparent bg-card p-6 shadow-none backdrop-blur-sm">
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[680px]">
              {/* Month Labels */}
              <div className="flex h-5 text-[11px] text-muted-foreground pl-8">
                {weeks.map((_, index) => {
                  const label = monthLabels.find((l) => l.colIndex === index);
                  return (
                    <div key={index} className="w-[14px] shrink-0 text-left">
                      {label ? label.month : ""}
                    </div>
                  );
                })}
              </div>

              {/* Grid: Day labels + Heatmap columns */}
              <div className="flex gap-2">
                <div className="flex flex-col justify-between text-[10px] text-muted-foreground h-[95px] pr-1 py-1">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                <div className="flex gap-[3px]">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3px]">
                      {week.map((day, dIdx) => {
                        const levelClass = levelColors[day.level] ?? levelColors[0];
                        return (
                          <div
                            key={dIdx}
                            title={
                              day.date ? `${day.count} contributions on ${day.date}` : undefined
                            }
                            className={`size-[11px] rounded-[2px] transition-transform hover:scale-125 ${levelClass}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Heatmap Footer: Total on left, Legend on right */}
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                <span>{totalContributions} contributions in the last year</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {levelColors.map((colorClass, idx) => (
                      <span key={idx} className={`size-3 rounded-[2px] ${colorClass}`} />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 3-Column Grid of Stat Tiles */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Hireable Tile */}
          <div className="rounded-xl border border-transparent bg-[#CCF2DD]/40 p-6 shadow-none dark:bg-emerald-950/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-emerald-900 dark:text-emerald-300">
              Hireable
            </span>
            <div className="mt-2 text-[48px] font-bold leading-none text-emerald-950 dark:text-emerald-100">
              {statsConfig.hireableDefault}
            </div>
          </div>

          {/* Total Public Repositories */}
          <Card className="rounded-xl border border-transparent bg-card p-6 shadow-none backdrop-blur-sm">
            <span className="text-sm font-medium text-muted-foreground">
              Total Public Repositories
            </span>
            <div className="mt-2 text-[48px] font-bold leading-none text-foreground">
              {userData?.public_repos ?? statsConfig.fallbackUserStats.public_repos}
            </div>
          </Card>

          {/* Followers */}
          <Card className="rounded-xl border border-transparent bg-card p-6 shadow-none backdrop-blur-sm">
            <span className="text-sm font-medium text-muted-foreground">
              Followers
            </span>
            <div className="mt-2 text-[48px] font-bold leading-none text-foreground">
              {userData?.followers ?? statsConfig.fallbackUserStats.followers}
            </div>
          </Card>

          {/* Following */}
          <Card className="rounded-xl border border-transparent bg-card p-6 shadow-none backdrop-blur-sm">
            <span className="text-sm font-medium text-muted-foreground">
              Following
            </span>
            <div className="mt-2 text-[48px] font-bold leading-none text-foreground">
              {userData?.following ?? statsConfig.fallbackUserStats.following}
            </div>
          </Card>

          {/* Current Company */}
          <Card className="rounded-xl border border-transparent bg-card p-6 shadow-none backdrop-blur-sm">
            <span className="text-sm font-medium text-muted-foreground">
              Current Company
            </span>
            <div className="mt-2 truncate text-[32px] sm:text-[38px] lg:text-[40px] font-bold leading-tight text-foreground">
              {statsConfig.companyDefault}
            </div>
          </Card>

          {/* Location */}
          <Card className="rounded-xl border border-transparent bg-card p-6 shadow-none backdrop-blur-sm">
            <span className="text-sm font-medium text-muted-foreground">
              Location
            </span>
            <div className="mt-2 truncate text-[32px] sm:text-[38px] lg:text-[40px] font-bold leading-tight text-foreground">
              {statsConfig.locationDefault}
            </div>
          </Card>
        </div>
      </section>
    </PageFrame>
  );
}

