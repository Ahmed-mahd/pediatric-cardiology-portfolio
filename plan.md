# Professor Portfolio Refresh — Plan

## Product direction
A single-page academic medical portfolio for Prof. Sahar Shaker Sheta, designed to make clinical expertise, research credibility, and contact pathways immediately legible on desktop and mobile.

## Design
Three possible directions considered: **clinical signal interface** (0.06), **editorial medical journal** (0.08), **warm institutional archive** (0.05). Chosen: **clinical signal interface**.

- **Design movement:** near-future clinical instrumentation, softened with human editorial typography.
- **Core principles:** calm precision, evidence made scannable, human warmth, progressive disclosure.
- **Color philosophy:** deep navy creates trust and focus; electric cyan signals clarity and technology; coral provides a human pulse and highlights action.
- **Layout paradigm:** asymmetric editorial panels and horizontal signal bands rather than a conventional centered card grid.
- **Signature elements:** ECG line, orbital rings, indexed publication rows.
- **Interaction philosophy:** motion communicates system status; hover states are short, tactile, and never distracting.
- **Animation:** slow orbital movement, scanline, heartbeat trace, animated impact counters; all disabled/reduced through `prefers-reduced-motion`.
- **Typography:** Space Grotesk for confident headings, Manrope for readable body copy, DM Mono for clinical metadata.
- **Brand essence:** pediatric cardiac expertise that turns rigorous evidence into compassionate action. Personality: precise, humane, forward-looking.
- **Brand voice:** direct, calm, optimistic. Example lines: “Where precision meets compassion.” “Knowledge that moves medicine forward.”
- **Wordmark:** SHETA paired with a circular heart/pulse mark.
- **Signature brand color:** electric cyan `#75e3dc`.

## Implementation
- Keep the existing Next.js App Router structure and data source in `src/app/data.ts`.
- Use a client homepage only where interaction is needed: mobile nav, publication filters, load-more behavior, counters, and scroll state.
- Use local portrait assets via `next/image` with stable responsive dimensions.
- Keep styling dependency-free in `src/app/globals.css`.
- Add `public/manus-routes.json` for route discovery.
- Scope Next.js output tracing to the project root to avoid parent-directory permission scanning during production builds.

## Project structure
- `src/app/page.tsx`: interactive one-page portfolio UI.
- `src/app/globals.css`: design tokens, layout, responsive breakpoints, motion, accessibility fallbacks.
- `src/app/data.ts`: editable professional content and metadata.
- `src/app/layout.tsx`: root metadata and document shell.
- `public/`: portrait assets and route manifest.
- `deployment-plan.md`: GitHub + Vercel publishing instructions and costs.
