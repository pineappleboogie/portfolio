# Portfolio Website Specification

## Project Overview

A personal portfolio website showcasing design and development work through case studies and a creative digital garden. Features an innovative AI-powered restyle system that allows visitors to customize the website's appearance and layout through natural language.

### Goals
- Showcase featured case studies and professional work
- Present personal information and creative explorations
- Provide an interactive, AI-powered customization experience
- Create a foundation for future digital garden expansion

---

## Requirements

### Functional Requirements

**Home Page**
- Hero section with introduction
- Featured case studies section (grid of cards)
- About section with bio and image gallery
- Smooth anchor scroll navigation to about section
- Responsive layout for mobile and desktop

**Case Studies**
- Individual case study detail pages (`/work/[slug]`)
- MDX-based content with rich formatting
- Back navigation to home
- Support for images, videos, and custom layouts

**Fun/Digital Garden**
- Gallery page (`/fun`) for creative projects
- Support for images and video embeds
- Multiple layout variants (grid, masonry, carousel)
- Foundation for future blog/writing features

**AI Restyle Feature**
- Floating chat button to trigger interface
- Natural language input for style changes
- Real-time preview of changes
- Ability to modify:
  - Colors and typography
  - Component layouts (grid/list/masonry)
  - Navigation position and style
  - Spacing and sizing
  - Component variants
- Persistence of custom styles
- Reset to default option

### Technical Requirements

- Server-side rendering (SSR) and static generation (SSG) where appropriate
- TypeScript for type safety
- Responsive design (mobile-first approach)
- Optimized images using Next.js Image component
- Smooth transitions and animations
- Error boundaries and loading states
- SEO optimization with proper metadata

### Content Requirements

- 2-3 placeholder case studies (MDX format)
- About section content with placeholder images
- 4-6 fun/gallery items (mix of images and videos)
- Structured frontmatter for metadata

---

## Tech Stack

### Core Framework
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.x** - Type safety

### Styling
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **tailwind-merge** - Dynamic class merging
- **clsx** - Conditional class names

### Content Management
- **@next/mdx** - MDX support for Next.js
- **next-mdx-remote** - Remote MDX rendering
- **gray-matter** - Frontmatter parsing
- **remark-gfm** - GitHub Flavored Markdown
- **rehype-highlight** - Code syntax highlighting

### AI Integration
- **ai** (Vercel AI SDK) - AI integration utilities
- **@anthropic-ai/sdk** - Anthropic Claude API client

### State Management
- **Zustand** - Lightweight state management for style configuration
- React Context (alternative/supplementary)

### Development Tools
- **Turbopack** - Fast build tool
- **ESLint** - Code linting
- **PostCSS** - CSS processing

---

## Architecture

### Folder Structure

```
portfolio/
├── content/
│   ├── case-studies/          # Case study MDX files
│   │   ├── project-alpha.mdx
│   │   ├── project-beta.mdx
│   │   └── project-gamma.mdx
│   └── fun/                   # Digital garden MDX files
│       ├── experiment-1.mdx
│       └── design-exploration.mdx
│
├── public/
│   └── images/
│       ├── about/             # Personal photos
│       ├── case-studies/      # Project images
│       └── fun/               # Gallery images
│
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page (work + about)
│   │   ├── work/
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Case study detail
│   │   ├── fun/
│   │   │   └── page.tsx       # Digital garden gallery
│   │   └── api/
│   │       └── restyle/
│   │           └── route.ts   # AI restyle endpoint
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── content/
│   │   │   ├── CaseStudyCard.tsx
│   │   │   ├── CaseStudyGrid.tsx
│   │   │   ├── Gallery.tsx
│   │   │   └── AboutSection.tsx
│   │   ├── restyle/
│   │   │   ├── RestyleButton.tsx
│   │   │   ├── RestyleChat.tsx
│   │   │   └── StylePreview.tsx
│   │   └── mdx/
│   │       ├── MDXComponents.tsx
│   │       ├── ImageGallery.tsx
│   │       └── VideoEmbed.tsx
│   │
│   ├── lib/
│   │   ├── mdx.ts            # MDX parsing utilities
│   │   ├── ai.ts             # AI integration
│   │   └── styles.ts         # Style management
│   │
│   ├── store/
│   │   └── styleStore.ts     # Zustand style state
│   │
│   └── types/
│       ├── content.ts        # Content type definitions
│       └── styles.ts         # Style config types
│
├── spec.md                    # This file
├── .env.local                # Environment variables
└── [config files]
```

### Routing Strategy

- **`/`** - Home page (hero + featured work + about)
- **`/work/[slug]`** - Individual case study pages (dynamic)
- **`/fun`** - Digital garden gallery
- **`/api/restyle`** - AI restyle API endpoint

Navigation uses anchor scrolling for about section on home page.

### Component Hierarchy

```
RootLayout
└── StyleProvider (Zustand/Context)
    ├── Navigation
    ├── Page Content
    │   ├── Home
    │   │   ├── HeroSection
    │   │   ├── CaseStudyGrid
    │   │   │   └── CaseStudyCard (x3)
    │   │   └── AboutSection
    │   ├── CaseStudyDetail
    │   │   └── MDXContent
    │   └── FunGallery
    │       └── Gallery
    ├── Footer
    └── RestyleButton
        └── RestyleChat (modal)
```

### Data Flow

1. **Build Time**: MDX files are read from `content/` folder
2. **Parsing**: Frontmatter extracted, content parsed
3. **Static Generation**: Pages pre-rendered with content
4. **Runtime**: User interactions trigger AI requests
5. **AI Flow**: User input → API → Claude → Style config → Apply to components

### AI Restyle System Architecture

**Configuration-Driven Design**

```typescript
interface StyleConfig {
  navigation: {
    position: 'top' | 'side' | 'bottom';
    style: 'minimal' | 'bold' | 'ghost';
  };
  caseStudies: {
    layout: 'grid' | 'list' | 'masonry';
    cardVariant: 'minimal' | 'detailed' | 'image-focused';
    columns: 1 | 2 | 3 | 4;
  };
  about: {
    imagePosition: 'left' | 'right' | 'top' | 'grid';
    layout: 'single-column' | 'two-column' | 'split';
  };
  funGallery: {
    layout: 'grid' | 'masonry' | 'carousel';
    itemSize: 'small' | 'medium' | 'large' | 'mixed';
  };
  theme: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
    fontHeading: string;
    fontBody: string;
    spacing: 'compact' | 'normal' | 'spacious';
  };
}
```

**AI Request Flow**

1. User types natural language request
2. Frontend sends request to `/api/restyle` with:
   - User message
   - Current style configuration
   - Component structure metadata
3. API constructs prompt for Claude with:
   - Available variants for each component
   - Current configuration
   - Design constraints
   - User request
4. Claude returns structured JSON with config updates
5. Frontend validates and applies changes
6. Config saved to localStorage for persistence

---

## Design Guidelines

### Design Direction

**Primary Aesthetic**: Simple, minimal, clean, elegant

**Principles**
- White space is a feature, not empty space
- Typography hierarchy for clear content structure
- Subtle transitions and micro-interactions
- Mobile-first responsive design
- Accessibility as a priority

### Component Variants

**CaseStudyCard**
- `grid` - Default: Image on top, content below (card style)
- `list` - Horizontal: Image left, content right (row style)
- `minimal` - Compact: Small thumbnail, title/subtitle only
- `image-focused` - Large image, minimal text overlay

**Gallery (Fun Page)**
- `grid` - Uniform grid with equal-sized items
- `masonry` - Pinterest-style staggered layout
- `carousel` - Slideshow with navigation
- `scattered` - Artistic scattered positioning (future)

**Navigation**
- `minimal` - Logo + text links, transparent background
- `bold` - Solid background, larger text
- `ghost` - Borderless, subtle hover states

### Responsive Behavior

**Breakpoints** (Tailwind defaults)
- `sm`: 640px - Small tablets
- `md`: 768px - Tablets
- `lg`: 1024px - Laptops
- `xl`: 1280px - Desktops
- `2xl`: 1536px - Large screens

**Mobile Strategy**
- Single column layouts on mobile
- Hamburger menu for navigation (if needed)
- Touch-friendly target sizes (min 44x44px)
- Optimized images for mobile bandwidth

### Typography

**Default Fonts**
- Headings: Geist Sans (already configured)
- Body: Geist Sans (already configured)
- Code: Geist Mono (already configured)

**Scale**
- Hero/H1: text-5xl md:text-6xl
- H2: text-3xl md:text-4xl
- H3: text-2xl md:text-3xl
- Body: text-base md:text-lg
- Small: text-sm

### Spacing Principles

**Spacing Scale** (Tailwind spacing units)
- Component padding: 4-8 (16-32px)
- Section gaps: 12-16 (48-64px)
- Element margins: 2-4 (8-16px)

**Variants**
- `compact`: Reduced spacing for dense layouts
- `normal`: Default comfortable spacing
- `spacious`: Generous white space for luxury feel

---

## Features Breakdown

### 1. Home Page

**Hero Section**
- Personal introduction
- Name and role/title
- Brief tagline or description
- Subtle call-to-action to scroll

**Featured Work Section**
- Grid of 3-6 case study cards
- Each card shows:
  - Project image
  - Title
  - Brief description
  - Link to detail page
- Responsive: 1 column mobile, 2-3 columns desktop

**About Section** (id="about")
- Heading: "About Me"
- Bio paragraph(s)
- Image gallery below (2-3 photos)
- Contact links (optional)

### 2. Case Study System

**List/Grid View** (on home page)
- CaseStudyCard component
- Filterable by category (future feature)
- Hover states and transitions

**Detail Pages** (`/work/[slug]`)
- Full MDX content rendering
- Custom components available:
  - ImageGallery - Multi-image displays
  - VideoEmbed - Embedded videos
  - TwoColumn - Side-by-side layouts
  - Callout - Highlighted text blocks
- Navigation: Back to home
- Next/Previous case study links (future)

**MDX Frontmatter Schema**
```yaml
title: Project Title
description: Brief project description
featured: true
coverImage: /images/case-studies/project.jpg
date: 2024-03-15
category: Web Design
tags: [UX, Branding, Development]

title: "Project Title"
slug: "project-slug"
company: "Company Name"
description: "One-line description"
hero_image: "/images/project-hero.jpg"
featured: true
role: "Feature Lead, Sole Designer, Design QA"
skills: "Product Design, Conversational UX Design, System Prompt Engineering"
collaborators: "Founder/CEO, 2 Engineers, Marketing team"
timeline: "May-Jun 2025"
duration: "5 Weeks"
tags: ["Product Design", "UX Research", "AI"]
sections:
  - "Overview"
  - "Background"
  - "Discovery & Insights"
  - "Vision"
  - "Strategy"
  - "Explorations"
  - "Solution"
  - "Impact"
```

### 3. Fun/Digital Garden

**Gallery Page** (`/fun`)
- Grid/Masonry layout of items
- Support for:
  - Static images
  - Video embeds (YouTube, Vimeo)
  - Animated GIFs
- Click to expand/view details (optional)
- Filter by type (future feature)

**MDX Frontmatter Schema**
```yaml
title: Experiment Name
type: image | video
thumbnail: /images/fun/thumb.jpg
media: /images/fun/item.jpg or https://youtube.com/...
date: 2024-03-15
description: Optional description
```

### 4. AI Restyle Feature

**Trigger Button**
- Floating button (bottom-right corner)
- Icon: Palette or sparkle icon
- Subtle pulse animation
- Accessible (keyboard navigable)

**Chat Interface**
- Modal or slide-in drawer
- Chat input field
- Conversation history
- Loading indicator during AI processing
- Example prompts for guidance:
  - "Make it more spacious"
  - "Show case studies in a list"
  - "Use a dark color scheme"
  - "Make the navigation minimal"

**Style Application**
- Instant preview of changes
- "Apply" button to confirm
- "Reset" button to restore defaults
- Visual feedback during transitions

**Capabilities**
- Change layout variants (grid → list, etc.)
- Modify colors and typography
- Adjust spacing (compact → spacious)
- Reposition components
- Change navigation style
- Customize card appearances

---

## Phases & Milestones

### Phase 1: Foundation Setup
**Duration**: ~30 min
**Tasks**:
- ✅ Create spec.md documentation
- Install MDX dependencies
- Install AI SDK and Anthropic SDK
- Configure Next.js for MDX
- Set up environment variables
- Create folder structure

**Deliverable**: Project configured and ready for development

---

### Phase 2: Content System
**Duration**: ~45 min
**Tasks**:
- Create TypeScript types for content
- Build MDX parsing utilities (`lib/mdx.ts`)
- Set up frontmatter schemas
- Create sample MDX files (2 case studies, 3 fun items)
- Test MDX rendering

**Deliverable**: Working content management system

---

### Phase 3: Core Pages & Components
**Duration**: ~90 min
**Tasks**:
- Build Navigation component
- Create home page structure:
  - Hero section
  - Featured work grid
  - About section with anchor scroll
- Build CaseStudyCard component (grid variant)
- Create case study detail pages (`/work/[slug]`)
- Build fun/gallery page (`/fun`)
- Create Footer component

**Deliverable**: Functional website with all pages

---

### Phase 4: Style System
**Duration**: ~45 min
**Tasks**:
- Define StyleConfig TypeScript types
- Create Zustand store for style state
- Implement variant system for components:
  - CaseStudyCard variants
  - Gallery layout variants
  - Navigation variants
- Set up localStorage persistence
- Create default minimal/clean theme

**Deliverable**: Dynamic style system ready for AI

---

### Phase 5: AI Restyle Feature
**Duration**: ~90 min
**Tasks**:
- Create API route (`/api/restyle/route.ts`)
- Integrate Anthropic Claude SDK
- Design AI prompt engineering:
  - Include component structure
  - Define available variants
  - Parse natural language requests
- Build RestyleButton component
- Build RestyleChat interface
- Connect AI response to style updates
- Add preview and apply functionality

**Deliverable**: Full AI restyle feature working

---

### Phase 6: Polish & Optimization
**Duration**: ~45 min
**Tasks**:
- Responsive design testing and fixes
- Add smooth transitions and animations
- Optimize images with Next.js Image
- Add loading states and error boundaries
- SEO metadata for all pages
- Accessibility audit (keyboard nav, ARIA labels)
- Cross-browser testing

**Deliverable**: Production-ready portfolio website

---

## Environment Setup

### Environment Variables

Create `.env.local` file:

```bash
# Anthropic API Key (required for AI restyle feature)
ANTHROPIC_API_KEY=your_api_key_here

# Optional: Configuration
NODE_ENV=development
```

### Getting Anthropic API Key

1. Sign up at https://console.anthropic.com
2. Navigate to API Keys section
3. Create a new API key
4. Add to `.env.local` file (never commit this file!)

### Development Scripts

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Deployment

**Recommended Platform**: Vercel (optimized for Next.js)

1. Connect GitHub repository to Vercel
2. Add `ANTHROPIC_API_KEY` to environment variables
3. Deploy automatically on push to main branch

**Environment Variable in Vercel**:
- Dashboard → Project → Settings → Environment Variables
- Add `ANTHROPIC_API_KEY` with your key
- Apply to Production, Preview, and Development

---

## Future Enhancements

- Blog/writing functionality for digital garden
- Case study filtering and search
- Project categories and tags
- Dark mode toggle (separate from AI restyle)
- Analytics integration
- Contact form
- RSS feed for blog posts
- Share functionality for custom styles
- Admin panel for content management (CMS)

---

## Success Criteria

✅ All pages render correctly and are responsive
✅ MDX content displays with proper formatting
✅ AI restyle feature works with natural language input
✅ Component variants apply correctly
✅ Styles persist across page refreshes
✅ Images are optimized and load quickly
✅ Site is accessible (keyboard navigation, screen readers)
✅ SEO metadata is complete
✅ No console errors or warnings
✅ Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

---

**Last Updated**: 2025-10-04
**Version**: 1.0
