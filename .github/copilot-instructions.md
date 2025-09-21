<!-- GitHub Copilot instructions for AI coding agents working on this repo -->

# Guidance for AI coding agents: react-portfolio

This file captures concise, repository-specific knowledge to help an AI agent be productive immediately.

- **Project Type**: React single-page portfolio app scaffolded for Vite + TailwindCSS. Key files: `package.json`, `vite.config.js`, `tailwind.config.js`.
- **How to run locally**: use the npm scripts in `package.json`:`npm run dev` (start Vite dev server), `npm run build`, `npm run preview`.

- **Testing**: tests run with `vitest` (`npm run test`). Test environment is configured in `vite.config.js` and `src/setupTests.js` (jsdom + globals).

- **Code layout / big picture**:
  - `src/` contains simple presentational React components.
  - `src/components/` holds UI pieces: `Navbar` (present in `App.jsx`), `Hero.jsx`, `Projects.jsx`, `ProjectCard.jsx`, `Footer.jsx`.
  - `src/data/projects.js` is the small data source used by `Projects.jsx` to render project cards — modify this file to add or change projects.
  - Static assets live in `src/assets/` (e.g. `react.svg`, `vite.svg`) and are imported directly in components.

- **Styling**: Tailwind utility classes are used inline in JSX (no styled-components). `App.css` / `index.css` and `tailwind.config.js` control Tailwind setup. Avoid introducing global CSS unless necessary — prefer Tailwind utilities.

- **Patterns & conventions to follow**:
  - Components are small and file-per-component (default export). Keep components presentational and prop-driven (see `ProjectCard.jsx`).
  - Data-driven UIs: use plain JS files under `src/data/` to feed components (see `projects.js`). When adding sample data, follow the object shape `{ id, title, description, tech, link }`.
  - Accessibility: links that open in new tabs include `rel="noopener noreferrer"` (see `ProjectCard.jsx`). Keep using this pattern.
  - Navigation: `App.jsx` contains a fixed top nav — layout depends on `pt-20` padding to avoid overlap. When changing nav height, update the page padding accordingly.

- **Build / CI notes (discoverable from this repo)**:
  - CI badges and GitHub Actions are referenced in `README.md` (deploy + CodeQL). No extra agent actions required — avoid modifying workflow files unless asked.

- **Linting / formatting**:
  - ESLint is configured via top-level `eslint.config.js` and scripts use `npm run lint`. Follow existing rule set; do not add conflicting ESLint rules without updating `eslint.config.js`.

- **Tests & test-helpers**:
  - Test setup file: `src/setupTests.js`. Tests under `src/__tests__/` use Testing Library + Vitest.
  - Keep tests focused on presentational output and user interactions (see `App.test.jsx`). Use `@testing-library/react` utilities and `vitest` global helpers.

- **When editing files**:
  - Prefer minimal, focused changes. Preserve existing export shapes (default exports for components) and existing CSS utility usage.
  - If adding new components, place them in `src/components/` and export default. Update `src/components/index` only if explicitly added (none currently).

- **Common quick fixes** (examples to apply when relevant):
  - If a component import fails, check relative path under `src/components/` and ensure filename-case matches (Linux filesystem is case-sensitive).
  - If layout is obscured by the fixed nav, increase the top padding class on the main container in `App.jsx` (currently `pt-20`).

- **Files to inspect for context before editing**:
  - `src/App.jsx` — app shell and nav + layout decisions
  - `src/components/*` — component patterns and props
  - `src/data/projects.js` — canonical data shape for project cards
  - `vite.config.js` and `package.json` — scripts, test config
  - `tailwind.config.js` and `postcss.config.js` — styling pipeline

If anything is missing or you want me to expand an area (tests, CI, or workflow commands), tell me which section to elaborate and I'll update this file.
