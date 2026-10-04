# Project Memory & Operational Guide

## Project Identity
- **Owner**: Kyalo Isaac Kimeu (`MrKimeu`)
- **Email**: `ikyalokimeu@gmail.com`
- **Portfolio Title**: Kyalo's DevDocs (`kimeu dev`)
- **Live Deployment URL**: [https://kyalo-s-devdocs.vercel.app/](https://kyalo-s-devdocs.vercel.app/)
- **Primary Repositories**:
  - Portfolio Web App: [https://github.com/MrKimeu/kyalo-s-devdocs](https://github.com/MrKimeu/kyalo-s-devdocs)
  - GitHub Profile Configuration: [https://github.com/MrKimeu/MrKimeu](https://github.com/MrKimeu/MrKimeu)

## Architectural Guidelines
- **Framework & Routing**: React 18, Vite, TanStack Router (file routes under `src/routes/`), Tailwind CSS, Radix UI.
- **Data Layer**: All portfolio copy, background facts, and resume details reside in typed data files under `src/data/` (`profile.ts`, `education.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `stats.ts`, `contact.ts`). Do not hardcode content into presentation components.
- **Navigation Model**: Single main column docs-style shell with Previous / Next navigation, sidebar section switching, and Cmd+K command palette.
- **3D & Visual Architecture**:
  - `ThreeBackground.tsx`: Three.js WebGL canvas rendering a calm particle constellation and floating geometric nodes. Calibrated with gentle motion, dynamic theme color shifting, and reduced motion safety.
  - `ProjectTiltCard.tsx`: Interactive 3D mouse perspective tilt with glare reflections, glowing cyan cyber borders, and architecture breakdown dialog.
- **Privacy Standard**: Never display phone numbers or referee contact info anywhere in code, markdown, or public deployments.

## Git & Commits
- When committing changes, always use:
  - `user.name`: `"Kyalo Isaac Kimeu"`
  - `user.email`: `"ikyalokimeu@gmail.com"`
- Repositories are strictly pushed to `MrKimeu/<repo>` (never `pgwiz`).
