# ec3l.ai - ChangeOps Platform

## Overview
Agentic ChangeOps platform frontend for automated code changes, workspace management, and PR generation. This is a React-based single-page application.

## Project Architecture
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3 with shadcn/ui components
- **Routing**: wouter
- **State Management**: @tanstack/react-query
- **Forms**: react-hook-form + zod validation
- **Icons**: lucide-react

## Project Structure
```
client/              # Frontend application
  index.html         # Entry HTML
  src/
    App.tsx          # Root component with routing
    main.tsx         # React entry point
    index.css        # Tailwind + custom CSS
    components/      # Reusable UI components
      ui/            # shadcn/ui component library
    hooks/           # Custom React hooks
    lib/             # Utility functions & query client
    pages/           # Page components
shared/
  schema.ts          # Shared TypeScript types and Zod schemas
```

## Key Pages
- Dashboard: Overview with project/change stats
- Projects: GitHub project management
- Changes: Change record lifecycle (Draft -> Merged)
- Skills: Agent skill catalog
- Runner: API endpoint reference
- Form Studio: Dynamic form builder
- Admin: Tenant, module, override, workflow management
- Workflow Monitor: Execution intent monitoring
- Records: Record instance and SLA tracking

## Development
- Dev server: `npm run dev` (port 5000)
- Build: `npm run build` (output to `dist/`)
- Deployment: Static site deployment from `dist/`

## Recent Changes
- 2026-02-19: Initial Replit setup - created package.json, vite.config.ts, tsconfig.json, tailwind.config.ts, postcss.config.js, shared/schema.ts
- 2026-02-19: Added graceful fallback for tenant bootstrap when API is unavailable
