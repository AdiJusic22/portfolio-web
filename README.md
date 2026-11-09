# Portfolio modernization

Changes are delivered one phase at a time so each phase can be reviewed and pushed separately.

1. **Foundation (ready for review):** fix invalid CSS and font loading; remove duplicate animation dependencies; provide a static developer heading; improve keyboard navigation, mobile menu behavior, motion preferences, metadata and contact form behavior.
2. **Visual redesign:** typography, colors, layout, responsive project cards and subtle interactions.
3. **Content and real projects:** refine biography, replace placeholder links and descriptions, connect a supplied CV, and feature actual project screenshots.
4. **Vite + TypeScript:** introduce the build setup, typed interactions and documented development/build commands.

## Preview phase 1

Open `index.html` in a browser or use your editor's Live Server. No build or package installation is needed.

Check navigation at desktop and mobile widths, close the mobile menu with Escape, navigate with Tab, and submit the contact form with valid fields. The form opens an email app; it does not send messages through a server. Project and CV placeholder links will be addressed in phase 3 when their destinations are available.

## Suggested commit for phase 1

`fix: clean up portfolio foundation and improve accessibility`
