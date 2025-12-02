# CollegeKenya

A small web application built with Vite, React (TypeScript) and a lightweight Node server. This repository contains a client (frontend), a simple server, and shared schema/types used by both. The project appears to be a marketing/site for a college with pages for programs, admissions, contact, and more.

## Table of contents

- Project overview
- Tech stack
- Quick start (development)
- Build / Production
- Project structure
- Important files
- Contributing / Next steps
- License

## Project overview

This project contains a React + TypeScript frontend served by Vite in `client/` and a Node-based server in `server/`. The `shared/` folder contains a schema used by both sides (likely TypeScript types or zod schema). The UI uses Tailwind and a set of small, reusable UI components.

The app provides common marketing site pages:
- Home
- Programs
- Admissions
- Contact
- About

There are UI components and example components for quick development and a set of design assets in `attached_assets/`.

## Tech stack

- Frontend: Vite + React + TypeScript
- Styling: Tailwind CSS (configured by `tailwind.config.ts` and `postcss.config.js`)
- Server: Node (TypeScript) — simple server code in `server/`
- Tooling: Drizzle (drizzle.config.ts present), likely used for DB or ORM related work

## Quick start (development)

These commands assume you're on Windows using PowerShell (the workspace default).

1) Install dependencies

```powershell
# from project root
npm install
```

2) Start the dev server(s)

- To run the frontend (Vite):

```powershell
npm run dev --workspace client
# or if there's a root dev script that handles the monorepo, just:
npm run dev
```

- To run the node server (if available):

```powershell
# from project root
npm run start:server
# or if the server uses ts-node / nodemon, a script like:
npm run dev:server
```

Note: Exact npm scripts depend on `package.json` (open it to confirm script names). If scripts are missing, run `node` or `ts-node` on `server/index.ts` as appropriate.

## Build / Production

To build the frontend for production:

```powershell
npm run build
```

This typically outputs a `dist/` folder for the frontend. The server can be configured to serve that `dist/` folder in production; check `server/` code for static serving.

### Deploying to Vercel

Vercel can host the built React app as a static site. The Express server inside `server/` is primarily for local development; in production we only need the contents of `dist/public`.

1. Run `npm run build` locally at least once to confirm the build succeeds. The command creates `dist/public` (Vite assets) and `dist/index.js` (Node server bundle).
2. In the Vercel dashboard, import this repository and select **Other** for the Framework preset.
3. Set the build settings exactly as follows:
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
4. (Optional) Add any environment variables your app needs under **Settings → Environment Variables**.
5. Deploy. Vercel will upload only the static assets from `dist/public`, so visiting your deployment will now serve the compiled React app instead of the Node server bundle that appears if you point Vercel at `dist/`.

If you ever need to run the Node server (for custom APIs) on Vercel you would have to convert it into a Serverless Function, but for the current site the static deployment above is sufficient.

## Project structure

Top-level files and folders (high-level):

- `client/` — Frontend app (Vite + React + TS)
  - `index.html` — Vite entry
  - `src/` — React source
    - `App.tsx`, `main.tsx` — app entry points
    - `components/` — app components and `ui/` primitives
    - `pages/` — page routes (Home, Programs, Admissions, Contact, About, not-found)
    - `hooks/`, `lib/` — utilities and hooks
- `server/` — Node server (TypeScript)
  - `index.ts` — server entry
  - `routes.ts`, `storage.ts`, `vite.ts` — server helpers
- `shared/` — shared schema/types between client and server (`schema.ts`)
- `attached_assets/` — generated images and assets
- `components.json`, `design_guidelines.md` — design metadata and guidelines
- `drizzle.config.ts` — Drizzle configuration (DB/ORM)
- `tailwind.config.ts`, `postcss.config.js` — styling config

## Important files

- `client/src/main.tsx` — Frontend app bootstrap
- `client/src/App.tsx` — Top-level React component with routing
- `client/src/pages/` — All React pages
- `client/src/components/ui/` — Reusable UI primitives (buttons, inputs, dialogs, etc.)
- `server/index.ts` — Server startup
- `shared/schema.ts` — Shared types/schema between client and server
- `package.json` — Root project scripts and dependencies (confirm exact scripts here)

## Contributing / Next steps

If you plan to contribute or run locally, recommended steps:

- Open `package.json` to confirm scripts and tweak the "dev" scripts for running client and server concurrently (e.g., via `concurrently` or separate terminals).
- Ensure environment variables (if any) are defined locally. The server may expect a DB or other secrets — check `server/` and `drizzle.config.ts`.
- Add an `.env.example` file listing required env vars.
- Add basic unit or integration tests for critical parts (server routes, shared schema validations, and a couple of React component tests).

Edge cases to watch for:
- Missing or different npm scripts — adjust Quick Start accordingly.
- If the server expects a DB (Drizzle), a local dev DB may be needed.
- If TypeScript build is required for server, use `ts-node` or prebuild step.

## License

Add a LICENSE file if you intend to open source. If you have an internal/company license, place it at the repo root.

---

If you'd like, I can:
- Inspect `package.json` and update this README with exact scripts and commands.
- Add an `.env.example` and sample `npm` scripts to run client and server concurrently.
- Create a short `README` section that shows how to run the server and client in separate PowerShell terminals.

Tell me if you want me to (1) insert exact npm commands from `package.json` into this README, or (2) add convenience scripts and an `.env.example`. I can proceed and update the todo list accordingly.
