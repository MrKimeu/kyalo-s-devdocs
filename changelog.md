# Changelog

All notable changes to the Kyalo Isaac Kimeu Developer Portfolio project are documented in this file.

## [1.2.0] - 2026-10-04

### Added
- **Live Deployment Links**: Embedded `https://kyalo-s-devdocs.vercel.app/` across profile badges, About Me sections, and repository documentation.
- **GitHub Repository Metadata**: Configured repository descriptions, homepages, and topical tags for both `MrKimeu/kyalo-s-devdocs` and `MrKimeu/MrKimeu`.
- **Self-Hosted Vector Headers & Footers**: Created crisp, zero-latency SVGs (`assets/header.svg` and `assets/footer.svg`) for GitHub profile viewports.

### Changed
- **Profile Header Refinement**: Removed redundant tagline pill from header SVG per visual feedback.
- **Responsive Typing SVG**: Configured responsive parameters (`width=650&height=42&size=19`) to prevent mobile view clipping.

## [1.1.0] - 2026-10-04

### Added
- **Curriculum Vitae Content Integration**: Verbatim details from Kyalo's CV integrated into:
  - `src/data/profile.ts`: Career objective, bio, and introductory summary.
  - `src/data/education.ts`: Ol'Lessos National Polytechnic, St. Charles Lwanga Boys High School, and Divine Mercy Catholic Junior School.
  - `src/data/skills.ts`: Categorized competencies spanning languages, databases, web technologies, DevOps, and algorithmic modeling.
  - `src/data/contact.ts`: Contact channels and privacy-preserving metadata.
  - `src/data/stats.ts`: GitHub live stats integration and portfolio analytics.
- **Mini-View Executive Summary**: Structured quick-glance competencies and credentials card on the Introduction screen.

### Changed
- **Rebranding**: Standardized brand identifier from `kimeu.is-dev` to `kimeu dev`.
- **Performance Optimization**:
  - Preloading set to `intent` across all navigation links.
  - React Query cache TTL configured to 10 minutes (`staleTime: 10 * 60 * 1000`).
  - Added DNS prefetch and preconnect hints for Google Fonts and GitHub assets.
  - Deferred ambient audio initialization to conserve initial bundle resources.

## [1.0.0] - 2026-10-04

### Added
- Initial project import and setup with Vite, React, TypeScript, TanStack Router, and Tailwind CSS.
- Fully interactive docs-style portfolio navigation with keyboard shortcuts (`Cmd+K`, Arrow keys).
