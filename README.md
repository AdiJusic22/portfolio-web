# Portfolio modernization

Changes are delivered one phase at a time so each phase can be reviewed and pushed separately.

1. **Foundation (pushed):** fix invalid CSS and font loading; remove duplicate animation dependencies; provide a static developer heading; improve keyboard navigation, mobile menu behavior, motion preferences, metadata and contact form behavior.
2. **Visual redesign (ready for review):** typography, colors, layout, responsive project cards and subtle interactions.
3. **Content and real projects:** refine biography, replace placeholder links and descriptions, connect a supplied CV, and feature actual project screenshots.
4. **Vite + TypeScript:** introduce the build setup, typed interactions and documented development/build commands.

## Preview the current version

Open `index.html` in a browser or use your editor's Live Server. No build or package installation is needed.

Check navigation at desktop and mobile widths, close the mobile menu with Escape, navigate with Tab, and submit the contact form with valid fields. The form opens an email app; it does not send messages through a server. Work cards currently lead to the GitHub profile. Individual project destinations, screenshots and a supplied CV will be addressed in phase 3.

## Suggested commit for phase 1

`fix: clean up portfolio foundation and improve accessibility`

## Phase 2: visual redesign

Graphite and sage color palette, Manrope/DM Sans typography, a framed portrait, direct work/contact actions, editorial section headings, always-visible work descriptions and a responsive contact layout. The existing JavaScript interactions and email-app contact workflow are retained.

Open the page with Live Server and review widths around 375px, 768px and 1440px. Check mobile navigation, keyboard focus, readable project descriptions and reduced-motion settings. Browser rendering has not been automatically verified in this environment.

Suggested commit: `feat: redesign portfolio with responsive modern layout`
