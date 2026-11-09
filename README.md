# Adi Jusic - Portfolio

A personal portfolio built with HTML, custom CSS, TypeScript and Vite.

## Development

Use Node.js 22.12+ or Node.js 24 LTS and npm. From the project directory:

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal. Vite handles TypeScript and live updates; opening `index.html` directly or using Live Server no longer runs the app correctly. On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

## Check and build

```bash
npm run check
npm run build
npm run preview
```

`build` first runs strict TypeScript checking and then creates a static site in `dist/`. `preview` serves that production build locally. The relative asset base supports deployment under a repository subpath such as `/portfolio-web/`.

Publish the **contents of `dist/`** to static hosting. A GitHub push stores source code; GitHub Pages must use a build/deployment workflow for Vite rather than serving the source branch directly. No deployment workflow or hosting settings were changed in these phases.

## Files

- `index.html`: content, project descriptions and semantic page structure.
- `style.css`: theme, layouts, responsive styles and reduced-motion support.
- `src/main.ts`: typed navigation, mobile menu, social links and email composition.
- `vite.config.ts`: relative base for static hosting.
- `tsconfig.json`: strict TypeScript configuration.

## Content

The page uses one compact portrait. Project cards link directly to the public repositories for ValveeApp, Railway Accident ML, Personal Recommender Agent and this portfolio. Descriptions for the ML and recommendation projects were checked against their public READMEs; ValveeApp's hardware description comes from the original portfolio. The IoT diagram is a decorative illustration, not an application screenshot. Old unused photos remain in `Images/` but are not included in the production build.

No CV PDF was supplied: **Request my CV** opens an email request. To offer a download later, add the actual PDF under `public/` and update that link. The contact form composes a message in the visitor's email application; it does not send through a backend. Fonts and icons require access to Google Fonts and the Boxicons CDN.

## Delivery phases

1. Foundation: CSS fixes, accessible navigation, email-app contact workflow.
2. Visual redesign: graphite/sage palette, typography and responsive layout.
3. Content: one smaller portrait, revised biography and toolkit, real project cards and repository links.
4. Tooling: Vite, strict TypeScript, lockfile, production build and development commands.

Phases 3 and 4 are delivered together as requested. Suggested commit:

```text
feat: showcase real projects and migrate portfolio to TypeScript
```

## Review checklist

Check desktop and mobile layouts, navigation with Tab/Escape, repository links, contact form validation and reduced-motion preferences. Run the production build before pushing. Commit `package-lock.json`; keep `node_modules/` and `dist/` out of Git.

## Verified for phases 3 and 4

- Strict TypeScript checking and production build pass.
- Development and production versions checked in headless Microsoft Edge at 320, 375, 768 and 1440px: no horizontal overflow; one loaded portrait; four project cards.
- Mobile menu, Escape focus return and required contact fields pass; no JavaScript runtime exceptions observed.
- Internal anchor targets, local assets and absence of placeholder links checked.

Tooling references: [Vite guide](https://vite.dev/guide/) and [TypeScript configuration](https://www.typescriptlang.org/tsconfig/).
