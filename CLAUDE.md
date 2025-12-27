# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (eslint-config-next with TypeScript + Core Web Vitals)
```

## Architecture

This is a Next.js 16 project using the App Router with React 19 and Tailwind CSS 4.

**Key files:**
- `app/layout.tsx` - Root layout with Geist font configuration
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles and Tailwind imports

**Path alias:** `@/*` maps to project root (e.g., `@/app/page`)