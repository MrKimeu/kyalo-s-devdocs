import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Menu, Moon, Music2, Search, Sun } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from "@/components/ui/command";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { sections, type SectionPath } from "@/data/profile";
import { ThreeBackground } from "@/components/portfolio/three-background";
import { cn } from "@/lib/utils";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => { const id = window.setInterval(() => setSeconds((value) => value + 1), 1000); return () => window.clearInterval(id); }, []);
  const value = [Math.floor(seconds / 3600), Math.floor((seconds % 3600) / 60), seconds % 60].map((unit) => String(unit).padStart(2, "0")).join(":");
  return <div aria-label={`Session time ${value}`} className="hidden h-8 items-center gap-2 rounded-full border border-border px-3 text-xs font-medium tabular-nums text-foreground sm:flex"><span className="size-2 animate-pulse rounded-full bg-status" />{value}</div>;
}

function SectionLinks({ close = false }: { close?: boolean }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <nav className="flex flex-col gap-1" aria-label="Portfolio sections">{sections.map((section) => {
    const link = <Link key={section.path} to={section.path} preload="intent" className={cn("flex h-9 items-center rounded-lg px-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground", pathname === section.path && "bg-accent font-semibold text-foreground")}>{section.label}</Link>;
    return close ? <SheetClose key={section.path} asChild>{link}</SheetClose> : link;
  })}</nav>;
}

export function PortfolioShell({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("kimeu-theme");
    const shouldDark = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(shouldDark); document.documentElement.classList.toggle("dark", shouldDark);
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setPaletteOpen((open) => !open); return; }
      const target = event.target as HTMLElement | null;
      if (target?.matches("input, textarea, [contenteditable='true']")) return;
      const index = sections.findIndex((section) => section.path === pathname);
      const previous = sections[index - 1];
      const next = sections[index + 1];
      if (event.key === "ArrowLeft" && previous) navigate({ to: previous.path });
      if (event.key === "ArrowRight" && next) navigate({ to: next.path });
    };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [navigate, pathname]);

  const toggleTheme = () => { const next = !dark; setDark(next); document.documentElement.classList.toggle("dark", next); window.localStorage.setItem("kimeu-theme", next ? "dark" : "light"); };
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        if (!audio.src) {
          audio.src = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3";
        }
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };
  const go = (path: SectionPath) => { setPaletteOpen(false); navigate({ to: path }); };

  return <TooltipProvider delayDuration={250}>
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-cyan-500/20 selection:text-cyan-400">
      <ThreeBackground />
      <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="flex h-full items-center gap-3 px-4 md:px-7">
          <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu"><Menu className="size-5" /></Button></SheetTrigger><SheetContent side="left" className="w-[290px] p-6"><SheetHeader><SheetTitle className="flex items-center gap-2"><ArrowUpRight className="size-[22px]" />kimeu dev</SheetTitle></SheetHeader><div className="mt-8"><p className="mb-3 text-lg font-semibold">Sections</p><SectionLinks close /></div><div className="mt-8 flex flex-col gap-2 border-t border-border pt-6"><SheetClose asChild><Link to="/" preload="intent" className="mobile-nav-link">Home</Link></SheetClose><a className="mobile-nav-link" href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink /></a><a className="mobile-nav-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <ExternalLink /></a></div></SheetContent></Sheet>
          <Link to="/" preload="intent" className="flex shrink-0 items-center gap-2 text-[17px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ArrowUpRight className="size-[22px]" />kimeu dev</Link>
          <nav className="ml-5 hidden items-center gap-6 text-[15px] md:flex"><Link to="/" preload="intent" className="font-medium text-foreground">Home</Link><a className="nav-external" href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink /></a><a className="nav-external" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <ExternalLink /></a></nav>
          <div className="ml-auto flex items-center gap-1.5">
            <Button variant="outline" className="hidden h-9 w-[280px] justify-start bg-search px-3 font-normal text-muted-foreground lg:flex" onClick={() => setPaletteOpen(true)}><Search className="size-4" /><span>Search sections…</span><kbd className="ml-auto rounded border border-border bg-background px-1.5 py-0.5 text-[11px]">⌘ K</kbd></Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex lg:hidden" onClick={() => setPaletteOpen(true)} aria-label="Search sections"><Search /></Button>
            <Timer />
            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" onClick={toggleMusic} aria-label={playing ? "Pause music" : "Play music"}><Music2 className={cn("size-5", playing && "text-primary")} /></Button></TooltipTrigger><TooltipContent>{playing ? "Pause ambient music" : "Play ambient music"}</TooltipContent></Tooltip>
            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun className="size-5" /> : <Moon className="size-5" />}</Button></TooltipTrigger><TooltipContent>{dark ? "Light theme" : "Dark theme"}</TooltipContent></Tooltip>
            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" asChild><a href="https://github.com/MrKimeu" target="_blank" rel="noreferrer" aria-label="Kyalo on GitHub"><FaGithub className="size-[22px]" /></a></Button></TooltipTrigger><TooltipContent>GitHub profile</TooltipContent></Tooltip>
          </div>
        </div>
      </header>
      <aside className="fixed bottom-0 left-0 top-16 hidden w-[220px] border-r border-dashed border-border/80 bg-background/50 backdrop-blur-[2px] px-6 py-10 md:block lg:w-[265px] lg:px-7"><h2 className="mb-3 text-xl font-semibold">Sections</h2><SectionLinks /></aside>
      <main className="relative z-10 min-h-screen px-4 pb-12 pt-[96px] md:ml-[220px] md:px-10 md:pt-[104px] lg:ml-[265px] lg:px-11">{children}</main>
      <audio ref={audioRef} loop preload="none" />
      <CommandDialog open={paletteOpen} onOpenChange={setPaletteOpen}><CommandInput placeholder="Search sections…" /><CommandList><CommandEmpty>No section found.</CommandEmpty><CommandGroup heading="Sections">{sections.map((section, index) => <CommandItem key={section.path} value={section.label} onSelect={() => go(section.path)}>{section.label}<CommandShortcut>{index + 1}</CommandShortcut></CommandItem>)}</CommandGroup></CommandList></CommandDialog>
    </div>
  </TooltipProvider>;
}
