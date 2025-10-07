# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio application built with:
- **Next.js 15.5.4** with App Router and Turbopack for fast development
- **React 19** (latest version)
- **TypeScript** with strict mode enabled
- **Tailwind CSS 4** using the new @theme inline syntax
- **Geist fonts** (Sans and Mono) via next/font/google

## todo.md
The `tasks/todo.md` file contains your project task list. Please read the file and follow the instructions.

- Complete each task, then update this file with:  
  - [x] Mark task as done  
  - Add a short note on what you did  
- After finishing a section of tasks, commit your changes with a clear message.  

## Development Commands

### Running the Application
```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build production bundle with Turbopack
npm start        # Start production server
npm run lint     # Run ESLint
```

The dev server runs at http://localhost:3000 by default.

### Turbopack Usage
This project uses Turbopack for both development and production builds. All build commands include the `--turbopack` flag. This provides faster builds and hot module replacement compared to the standard webpack bundler.

## Architecture & Structure

### File-based Routing (App Router)
The project uses Next.js App Router with TypeScript. All routes live in `src/app/`:
- `src/app/layout.tsx` - Root layout with font configuration and global metadata
- `src/app/page.tsx` - Homepage component
- `src/app/globals.css` - Global styles with Tailwind CSS and theme configuration

### Import Paths
TypeScript is configured with path aliases:
- `@/*` maps to `./src/*` - use this for importing from the src directory
- Example: `import Component from '@/components/Component'`

### Styling Approach
- **Tailwind CSS 4** with the new inline @theme syntax (not using tailwind.config.ts)
- Custom CSS properties defined in `globals.css` using the `@theme inline` directive
- Dark mode support via CSS media queries (`prefers-color-scheme: dark`)
- Color tokens: `--color-background` and `--color-foreground` adapt to light/dark mode
- Font variables: `--font-geist-sans` and `--font-geist-mono` applied via className

### Font Management
Fonts are loaded in the root layout using next/font/google:
- Geist Sans and Geist Mono are optimized and loaded with the "latin" subset
- Font CSS variables are injected via className on the body element
- Variables are mapped to Tailwind utilities through @theme inline configuration

## TypeScript Configuration

- **Target:** ES2017
- **Module resolution:** Bundler mode (optimized for Next.js)
- **Strict mode:** Enabled
- **JSX:** Preserve (handled by Next.js)
- Path aliases configured in tsconfig.json

## Linting

ESLint is configured using the flat config format (eslint.config.mjs) with:
- `next/core-web-vitals` preset
- `next/typescript` preset for TypeScript-specific rules
- Ignores: node_modules, .next, out, build directories

## Learning Documentation

**IMPORTANT**: The developer maintains a LEARNING.md file to document their learning journey from design to development.

**Your role**:
- **NUDGE, don't write**: When important concepts come up, remind the developer to document them in LEARNING.md
- **Point out learning moments**: Identify concepts worth documenting (technical concepts, design→code translations, solutions to problems)
- **Never auto-fill**: Do not write learning entries for them - they want to take ownership of their learning
- **Session reminders**: At the end of significant work sessions, remind them if there were concepts worth documenting

**Examples of good nudges**:
- "This concept of [X] would be great to add to your LEARNING.md"
- "You might want to document this solution - it's something you'll encounter again"
- "That's a nice design→code connection worth noting in your log!"

## Teaching After Task Completion

**IMPORTANT**: After completing any subtask or significant piece of work, use the `/teach` slash command to explain what was done.

**When to use `/teach`**:
- ✅ After completing a subtask from todo.md
- ✅ After implementing a new feature or component
- ✅ After making architectural decisions
- ✅ After fixing bugs or solving problems
- ✅ When the user asks "what did you just do?"

**How to use it**:
Simply invoke the slash command: `/teach`

This will activate teaching mode where you'll explain:
- What was accomplished (the outcome)
- Key concepts involved (strategic understanding)
- Why it was built this way (decision-making knowledge)
- What the user needs to know vs. what's just syntax (must-know vs. nice-to-know)

**Goal**: Help the user build strategic technical literacy to understand, discuss, and guide technical work - not necessarily write code by hand.
