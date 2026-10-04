# Kyalo's DevDocs

<div align="center">

[![Live Portfolio](https://img.shields.io/badge/LIVE_PORTFOLIO-kyalo--s--devdocs.vercel.app-8B4DFF?style=for-the-badge&logo=vercel&logoColor=white)](https://kyalo-s-devdocs.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GITHUB-MrKimeu%2Fkyalo--s--devdocs-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MrKimeu/kyalo-s-devdocs)

**🌐 Live Demo & Deployment:** [https://kyalo-s-devdocs.vercel.app/](https://kyalo-s-devdocs.vercel.app/)

</div>

---

Build a personal developer portfolio website for Kyalo Isaac Kimeu. Refer to the attached Kyalo Isaac Kimeu CV docx as the source of truth for all facts, experience, education, skills, and background details. It must be a pixel-faithful recreation of a specific minimal "docs-style" portfolio design that I describe in detail below: a fixed top navbar, a left "Sections" sidebar, and a single main content column that shows ONE section at a time with Previous / Next navigation at the bottom. Follow the layout, spacing, typography and component details exactly. Do not add a hero image, gradients, glassmorphism, or anything decorative that is not described here. The look is clean, white, airy, typographic, with one purple accent color.

1. Tech stack
React + Vite + TypeScript + Tailwind CSS + shadcn/ui (Button, Card, Badge, Input, Textarea, Command/CommandDialog, Tooltip, Sonner toast)
lucide-react for icons, react-icons (si / fa sets) for tech logos
Framer Motion for subtle fade/slide transitions between sections
React Router with hash-style section routes: / (Introduction), /about, /projects, /skills, /experience, /education, /contact, /stats
Dark mode via the class strategy with a toggle that persists in localStorage
Fully responsive (details in section 12)

2. Design tokens (exact)
Font: "Geist" or "Inter" via Google Fonts (use Geist if available, fall back to Inter). Headings use weight 700 with tight tracking (tracking-tight, about -0.03em). Body weight 400–500.
Colors (light):
background #FFFFFF
foreground (headings, nav, active text) #0A0A0A
muted text (subtitles, inactive nav, card descriptions) #6B6B76
border #E5E5E8
sidebar active pill background #F4F4F5
primary / accent purple #8B4DFF (used for the primary button, the "Total Views" number, the Love button, and the eye icon)
pink/red #FF2D55 (Appreciation count number and heart icon)
green status dot #22C55E
"Latest" badge: bg #DBEAFE, text #1D4ED8
timeline icon circle: bg #DBEAFE, icon #1D4ED8
skill chip: bg #18181B, text white, border #3F3F46, radius 8px
"Hireable: Yes" tile background #CCF2DD
Colors (dark): background #0A0A0A, foreground #FAFAFA, muted #A1A1AA, border #27272A, active pill #18181B, skill chips #27272A, same purple accent.
Radius: cards rounded-xl (12px), buttons rounded-lg (8px), the Love button fully rounded pill, the timer pill fully rounded.
Shadows: cards use shadow-sm with a 1px border. Nothing heavier.

3. Global layout
Navbar: fixed top, height 64px, white background, 1px bottom border. Content padded 28px on the left and right (full width, not centered in a narrow container).
Below the navbar: a two-column layout.
Left sidebar: width 265px, sticky, with a 1px dotted vertical divider on its right edge (very light gray). Padding about 28px left.
Main content: starts at about 310px from the left edge of the screen, with 40px top padding, and a max content width of about 1010px. Body text is allowed to run the full column width.
Sections are NOT scrolled through on one long page. The sidebar and Prev/Next buttons switch the visible section (with a short 200ms fade and 8px upward slide). The URL updates for each section.

4. Navbar (left to right)
Logo: a small diagonal arrow icon ↗ (lucide ArrowUpRight, 22px, stroke 2) followed by the brand text kimeu dev in semibold 17px, foreground color.
Nav links, gap 24px, 15px text:
Home (active = foreground color, inactive = muted)
LinkedIn with a small external-link icon (opens LinkedIn in a new tab, use https://www.linkedin.com/in/ as a placeholder URL I will replace)
Resume with a small external-link icon (links to /resume.pdf in public/, opens in a new tab)
Spacer, then on the right:
Search box: 280px wide, 36px tall, rounded-lg, 1px border, light gray fill (#F7F7F8), placeholder "Search sections…", and on the right a small keyboard hint chip showing ⌘ K. Clicking it or pressing Cmd/Ctrl+K opens a shadcn CommandDialog that lists all 8 sections and navigates on select.
Session timer pill: rounded-full, 1px border, height 32px, containing a pulsing green dot and a live MM:SS style timer counting up from the moment the page was opened, formatted HH:MM:SS (for example 00:13:37). Use tabular-nums.
Music icon button (lucide Music2, 20px). Clicking toggles a quiet ambient lo-fi audio loop on and off (use a royalty-free placeholder URL and handle autoplay restrictions gracefully). The icon gets the accent color while playing.
Theme toggle (lucide Moon / Sun).
GitHub icon (filled GitHub mark, 22px) linking to https://github.com/MrKimeu.
Icon buttons are 36px square, no border, hover shows a faint gray background.

5. Sidebar
Heading "Sections" at the top, semibold 20px, foreground color, margin-bottom 12px.
Vertical list of items, each 14px text, medium weight, 36px tall, padding px-2.5, rounded-lg:
Introduction
About Me
Projects
Skills & Tools
Experience
Education
Contact
Stats
Active item has the #F4F4F5 pill background and a slightly bolder weight. Inactive items have no background; hover shows a very light gray.

6. Page header pattern (used on every section)
Every section starts with the same two-line header, no icons above it:
Line 1: H1, 40px, weight 700, tight tracking, color foreground.
Line 2: a witty tagline directly under it at the same size and weight (40px bold) but in the muted gray #6B6B76. It may wrap onto two lines.
Then 24px of space, then the body copy.
Body copy: 19–20px, line-height about 1.55, foreground color, full column width. Paragraphs separated by about 28px.

7. Section content (all content comes from Kyalo's CV; do not invent facts)
7.1 Introduction (/)
H1: Kyalo Isaac Kimeu
Tagline: Building clever systems, one algorithm at a time!
Body: "I am a results-driven Web Developer focused on algorithmic systems and data analysis. I enjoy building responsive web applications with HTML5, CSS3, Tailwind CSS, JavaScript and PHP, backed by MySQL and T-SQL, while integrating AI/ML models and deploying with Docker. I am currently deepening my expertise in Python and C++ to deliver production-grade, data-centric solutions."
Two buttons in a row, 24px below the paragraph:
Get Resume with an external-link icon: solid purple #8B4DFF, white text, rounded-lg, height 40px, px 16px
Send Mail with a mail icon: ghost button, no border, foreground text, opens mailto:ikyalokimeu@gmail.com
Bottom-right: a Next link reading "About Me ›" (semibold 16px, chevron-right icon). This is the Next navigation described in section 8.

7.2 About Me (/about)
H1: About Kimeu
Tagline: More than just a title, let's dive deeper!
Three paragraphs:
"I am a software developer based in Nairobi, Kenya, with a strong focus on high-frequency algorithms, data analysis and decision-making systems. I have been building for clients since 2021, from responsive web apps to real-time and geolocation-powered features."
"My experience spans web application development, network-adjacent software, and AI/ML model integration. I design relational database schemas optimized for query performance and data integrity, and I ship containerized applications with Docker."
"I am currently advancing my Python and C++ skills while finishing my Diploma in Computer Science. I am immediately available and open to remote, hybrid or on-site roles, and I want to contribute to high-performance engineering teams that turn complex data trends into measurable improvements."
Bottom: Prev "‹ Introduction" on the left, Next "Projects ›" on the right.

7.3 Projects (/projects)
H1: Projects
Tagline: A lot of ideas, but some are still under construction!
A 3-column grid (2 on tablet, 1 on mobile) with 24px gap, starting 32px below the tagline. Each card: white, 1px border, rounded-xl, shadow-sm, padding 24px, a title (semibold 18px, two lines allowed), a 2–3 line muted description (15px), and a muted "Learn More…" text link at the bottom. Hover lifts the card slightly (-translate-y-0.5) and strengthens the shadow.
The CV lists no named projects, so create these 5 clearly editable placeholder cards based on the CV's real experience, kept in a single projects.ts data file so I can easily replace them:
Client Web Apps | Responsive Business Sites: "Responsive websites and web applications designed and delivered end to end for diverse clients since 2021."
GeoTrack | Mapping and Real-Time Features: "A web app with geolocation, live maps and real-time updates built to enhance user experience."
AI Model Integration | Smart Web App: "A live application that integrates a trained ML model, bridging data science and software engineering."
Dockerized Deployment | Containerized Web Stack: "A containerized web application deployed with Docker, showing modern DevOps practices."
Relational DB Design | Optimized Schemas: "Complex relational database schemas in MySQL and T-SQL tuned for query performance and data integrity."
Bottom: Prev "‹ About Me", Next "Skills & Tools ›".

7.4 Skills & Tools (/skills)
H1: Skills & Tools
Tagline: Learned by coding all night and debugging all day!
Intro paragraph: "As a web developer with an algorithmic mindset, I build responsive, data-driven web applications and I am growing into Python and C++ for high-performance work. I also use Docker and AI/ML integration to create efficient, maintainable, robust solutions."
Below it, 16px gap, a centered, wrapping flex row of dark pill chips (gap 12px). Each chip: bg #18181B, white 14px medium text, height 34px, px 14px, rounded-lg, 1px #3F3F46 border, brand-colored icon (16px) on the left, 8px gap. Tiny hover scale to 1.04. Chips in this order, using the brand-colored logo from react-icons/si: HTML5, CSS3, JavaScript, PHP, Tailwind CSS, Python, C++, MySQL, T-SQL (use a database icon), Docker, Git, GitHub, AI/ML Integration (use a sparkles or brain icon), Data Analysis (bar-chart icon), Algorithmic Modeling (cpu icon).
Bottom: Prev "‹ Projects", Next "Experience ›".

7.5 Experience (/experience)
H1: Experience
Tagline: You need it to get the job, but the job's what gives it!
Intro: "From freelancing for clients to a software internship at an internet infrastructure company, my experience has been a mix of structured learning and spontaneous problem-solving. Each role has sharpened my ability to write clean code, collaborate effectively and ship work that real users depend on."
Vertical timeline (see section 9) with these entries, newest first:
Swap Executive · Flexi Personel — badge Latest — Aug. 2026 – Present — "Supporting the battery swapping process for Spiro under Flexi Personnel and helping clients whenever needed." (Location: Nairobi, Kenya)
Software Developer Intern · Fluid Intelligence Networks — May 2025 – Aug. 2025 (Thika, Kenya) — "Supported delivery of high-speed internet infrastructure projects through network configuration and performance monitoring. Assisted in designing and developing responsive client websites, and collaborated with senior engineers on web-based systems in production environments."
Self-Employed Web Developer · Freelance — 2021 – Present (Nairobi, Kenya) — "Designed and developed responsive web applications for diverse clients, implemented geolocation, mapping and real-time features, and managed full project lifecycles from requirements gathering through deployment and client handover."
No Prev/Next needed to be visible until the bottom of the content; place them below the timeline (Prev "‹ Skills & Tools", Next "Education ›").

7.6 Education (/education)
H1: Education
Tagline: I learned a lot, but the real learning happens in the code editor! (this wraps to two lines)
Two paragraphs: "Education has always been the cornerstone of my journey into the tech world. I am pursuing a Diploma in Computer Science at The Ol'Lessos National Polytechnic, focusing on web technologies and AI/ML fundamentals." and "My academic journey has been complemented by hands-on client work and an industry internship, which let me build practical skills and a deep understanding of modern technology."
Timeline entries (same component as Experience):
Diploma in Computer Science · The Ol'Lessos National Polytechnic · Nandi, Kenya — 2023 – 2026 (Expected) — "Focus: Web Technologies, AI/ML Fundamentals."
Kenya Certificate of Secondary Education (KCSE) · St. Charles Lwanga Boys High School — 2019 – 2022 — "Mean Grade: B−."
Kenya Certificate of Primary Education (KCPE) · Divine Mercy Catholic Junior School — 2011 – 2018 — "Mean Score: 392."
Bottom: Prev "‹ Experience", Next "Contact ›".

7.7 Contact (/contact)
H1: Contact
Tagline: Get in touch before I write another line of code!
A full-width form (no card around it), 20px gap between fields, directly under the tagline (about 16px):
Label Name + red asterisk (#E11D48); input height 52px, rounded-lg, 1px border, placeholder "Your name, your fame"
Label Email + red asterisk; input, placeholder "Where can I reach you back?"; helper text underneath in muted 14px: "Temporary emails are also accepted, unless you wish to hear back 😉"
Label Message + red asterisk; textarea about 72px tall, resizable vertically, placeholder "Your words, my inbox."
Full-width Submit button: purple #8B4DFF, white text, height 52px, rounded-lg
Validate with zod + react-hook-form. On submit, send via mailto fallback to ikyalokimeu@gmail.com, show a Sonner success toast and reset the form.
Below the form, a small muted row with: Email ikyalokimeu@gmail.com, Location Nairobi, Kenya, GitHub github.com/MrKimeu.

7.8 Stats (/stats) — this page is long and scrolls
H1: About this portfolio. NO gray tagline here; instead a single plain paragraph below: "Insights and metrics about this portfolio website".
Two equal cards side by side (stack on mobile), 24px gap, each ~180px tall, centered content with a thin divider under the card title:
Total Views card: purple Eye icon + title, giant number in purple (56px, weight 800), muted caption "Unique page visits since Oct-2026". Store visitor count in localStorage/state.
Appreciation Count card: pink Heart icon + title, giant pink number, then a pill button "♡ Love this portfolio" (purple bg, white text, fully rounded). Clicking increments the count with optimistic update, a heart burst micro-animation, and prevents spam beyond a few clicks per session.
Second heading GitHub Stats (H1 size 40px bold) with the muted line "Insights and metrics about my GitHub profile".
Contribution heatmap card: bordered rounded-xl card showing the GitHub contribution graph for username MrKimeu (fetch from a public contributions API such as github-contributions-api.jogruber.de/v4/MrKimeu). Month labels across the top, "Mon / Wed / Fri" labels at left, 11–12px rounded squares with 3px gap, using GitHub's 5 green shades (#EBEDF0, #9BE9A8, #40C463, #30A14E, #216E39), footer text "N contributions in the last year" on the left and a "Less ▢▢▢▢▢ More" legend on the right.
Below it, a 3-column grid of stat tiles (bordered rounded-xl, padding 24px, muted label on top, huge 48px bold value below), fed live from the GitHub REST API for MrKimeu:
Hireable (tile has the green #CCF2DD background) — value "Yes"
Total Public Repositories
Followers
Following
Current Company — value "Flexi Personel"
Location — value "Nairobi, Kenya" Make long values wrap or truncate so they never overlap neighboring tiles.
Bottom: Prev "‹ Contact" only.

8. Prev / Next navigation component
A flex row at the bottom of the content (margin-top 56px) with justify-between.
Each button: no border, no background, 16px semibold foreground text with a chevron icon (ChevronLeft before "Prev" label, ChevronRight after "Next" label). Hover: the chevron nudges 2px in its direction.
The first section shows only Next, the last shows only Prev.
Keyboard: Left and Right arrow keys move between sections when focus is not in an input.

9. Timeline component (Experience and Education)
Each entry has a 28px circle at the left (bg #DBEAFE, centered Calendar/CalendarDays icon 14px in #1D4ED8).
A 1px vertical line (#E5E5E8) runs down from beneath each circle through the entry's content to the next entry.
To the right of the circle: the title in semibold 18px (role/degree · organization). On the same line, the Latest badge for the newest item (small rounded-md pill, #DBEAFE bg, #1D4ED8 text, 14px medium).
Under the title: the date range in muted 14px.
Under that, 12px gap, the description in muted 16px with line-height 1.6.
Entries separated by about 36px.

10. Interactions and polish
Active section highlight in the sidebar syncs with the route.
Command palette (Cmd/Ctrl+K) searches section names and navigates.
Smooth page transitions via Framer Motion (opacity 0 to 1, y 8 to 0, 200ms).
Respect prefers-reduced-motion.
Focus rings visible on all interactive elements (purple, 2px).
Dark mode flips every token listed in section 2 and persists.

11. Data and SEO
Keep all copy in typed data files (/src/data/profile.ts, projects.ts, experience.ts, education.ts, skills.ts) so I can edit text without touching components.
Page <title>: "Kyalo Isaac Kimeu | Web Developer". Meta description: "Web developer focused on algorithmic systems, data analysis and AI/ML integration, based in Nairobi, Kenya." Add Open Graph tags and a favicon using the ↗ arrow glyph in purple.
Do NOT display phone numbers or referee contact details anywhere on the site.

12. Responsive behavior
Desktop (≥1024px): layout exactly as described.
Tablet (768–1023px): sidebar narrows to 220px, project grid becomes 2 columns, search box shrinks to an icon button.
Mobile (<768px): sidebar is hidden and replaced by a hamburger button in the navbar that opens a slide-in Sheet with the same "Sections" list; nav links (Home, LinkedIn, Resume) collapse into that sheet; the timer pill and music button stay if space allows, otherwise move into the sheet. H1 and tagline scale to 30px, body text to 17px, content padding 16px, project grid and stat tiles become 1 column, Skills chips stay centered and wrap.

13. Acceptance checklist
The overall look matches a minimalist white "docs" portfolio: black bold titles, gray bold taglines, one purple accent, dark skill chips, bordered rounded cards.
Only one section shows at a time, with working Prev/Next, sidebar and Cmd+K navigation.
The navbar contains: brand, Home, LinkedIn, Resume, search with ⌘K, live timer pill, music, theme toggle and GitHub icon.
All text matches the CV facts above, with no invented employers, degrees or numbers.
Live GitHub stats and heatmap work for MrKimeu.
Dark mode and mobile layouts work.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/73aed7f5-084e-4466-8a21-5258f3958445).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
