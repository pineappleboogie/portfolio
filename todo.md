# Portfolio Implementation Todo

**Last Updated**: 2025-10-04
**Total Estimated Time**: ~5.5 hours

---

## Phase 1: Foundation Setup
**Estimated Duration**: 30 minutes
**Status**: In Progress

### Dependencies & Configuration
- [ ] Install MDX dependencies (~5 min)
  - [ ] `@next/mdx`
  - [ ] `@mdx-js/loader`
  - [ ] `@mdx-js/react`
  - [ ] `gray-matter`
  - [ ] `remark-gfm`
  - [ ] `rehype-highlight`

  **Notes/Blockers**:

---

- [ ] Install AI SDK dependencies (~3 min)
  - [ ] `ai` (Vercel AI SDK)
  - [ ] `@anthropic-ai/sdk`

  **Notes/Blockers**:

---

- [ ] Install state management & utilities (~3 min)
  - [ ] `zustand`
  - [ ] `tailwind-merge`
  - [ ] `clsx`

  **Notes/Blockers**:

---

- [ ] Configure Next.js for MDX (~5 min)
  - [ ] Update `next.config.js` with MDX configuration
  - [ ] Configure MDX plugins (remark-gfm, rehype-highlight)

  **Notes/Blockers**:

---

- [ ] Set up environment variables (~5 min)
  - [ ] Create `.env.local` file
  - [ ] Add `ANTHROPIC_API_KEY` placeholder
  - [ ] Update `.gitignore` to exclude `.env.local`

  **Notes/Blockers**:

---

- [ ] Create folder structure (~10 min)
  - [ ] `content/case-studies/`
  - [ ] `content/fun/`
  - [ ] `public/images/about/`
  - [ ] `public/images/case-studies/`
  - [ ] `public/images/fun/`
  - [ ] `src/components/layout/`
  - [ ] `src/components/content/`
  - [ ] `src/components/restyle/`
  - [ ] `src/components/mdx/`
  - [ ] `src/lib/`
  - [ ] `src/store/`
  - [ ] `src/types/`

  **Notes/Blockers**:

---

**Phase 1 Deliverable**: ✅ Project configured and ready for development

---

## Phase 2: Content System
**Estimated Duration**: 45 minutes
**Status**: Not Started

### Type Definitions
- [ ] Create content types (`src/types/content.ts`) (~10 min)
  - [ ] `CaseStudy` interface
  - [ ] `FunItem` interface
  - [ ] `Frontmatter` base type
  - [ ] Export all content types

  **Notes/Blockers**:

---

### MDX Utilities
- [ ] Build MDX parsing utilities (`src/lib/mdx.ts`) (~15 min)
  - [ ] `getAllCaseStudies()` function
  - [ ] `getCaseStudyBySlug()` function
  - [ ] `getAllFunItems()` function
  - [ ] Frontmatter parsing with gray-matter
  - [ ] MDX compilation setup

  **Notes/Blockers**:

---

### Sample Content
- [ ] Create case study MDX files (~15 min)
  - [ ] `content/case-studies/project-alpha.mdx`
  - [ ] `content/case-studies/project-beta.mdx`
  - [ ] Add proper frontmatter (title, description, featured, etc.)
  - [ ] Write placeholder content with images

  **Notes/Blockers**:

---

- [ ] Create fun/gallery MDX files (~5 min)
  - [ ] `content/fun/experiment-1.mdx`
  - [ ] `content/fun/design-exploration.mdx`
  - [ ] `content/fun/creative-project.mdx`
  - [ ] Add media references (images/videos)

  **Notes/Blockers**:

---

**Phase 2 Deliverable**: ✅ Working content management system

---

## Phase 3: Core Pages & Components
**Estimated Duration**: 90 minutes
**Status**: Not Started

### Layout Components
- [ ] Build Navigation component (`src/components/layout/Navigation.tsx`) (~15 min)
  - [ ] Logo/name
  - [ ] Links: Home, Work, Fun
  - [ ] Anchor scroll to About section
  - [ ] Basic minimal style
  - [ ] Mobile responsive (hamburger menu optional)

  **Notes/Blockers**:

---

- [ ] Create Footer component (`src/components/layout/Footer.tsx`) (~10 min)
  - [ ] Copyright notice
  - [ ] Social links (optional)
  - [ ] Simple minimal design

  **Notes/Blockers**:

---

- [ ] Build Container component (`src/components/layout/Container.tsx`) (~5 min)
  - [ ] Max-width wrapper
  - [ ] Responsive padding
  - [ ] Reusable layout utility

  **Notes/Blockers**:

---

### Home Page
- [ ] Create Hero section (`src/app/page.tsx`) (~15 min)
  - [ ] Personal introduction
  - [ ] Name and title
  - [ ] Brief tagline
  - [ ] Scroll indicator to featured work

  **Notes/Blockers**:

---

- [ ] Build CaseStudyCard component (`src/components/content/CaseStudyCard.tsx`) (~15 min)
  - [ ] Image with Next.js Image component
  - [ ] Title and description
  - [ ] Link to detail page
  - [ ] Grid variant (default)
  - [ ] Hover states

  **Notes/Blockers**:

---

- [ ] Build CaseStudyGrid component (`src/components/content/CaseStudyGrid.tsx`) (~10 min)
  - [ ] Map case studies to cards
  - [ ] Responsive grid (1 col mobile, 2-3 desktop)
  - [ ] Filter featured items

  **Notes/Blockers**:

---

- [ ] Create About section (~15 min)
  - [ ] Section with `id="about"` for anchor scroll
  - [ ] Heading "About Me"
  - [ ] Bio paragraph(s)
  - [ ] Image gallery (2-3 photos)

  **Notes/Blockers**:

---

### Case Study Detail Pages
- [ ] Create dynamic route (`src/app/work/[slug]/page.tsx`) (~10 min)
  - [ ] Fetch case study by slug
  - [ ] Render MDX content
  - [ ] Back navigation button
  - [ ] generateStaticParams for SSG

  **Notes/Blockers**:

---

- [ ] Build MDX components (`src/components/mdx/MDXComponents.tsx`) (~10 min)
  - [ ] Custom heading styles
  - [ ] Custom paragraph styles
  - [ ] Image component wrapper
  - [ ] Code block styling

  **Notes/Blockers**:

---

### Fun/Gallery Page
- [ ] Create gallery page (`src/app/fun/page.tsx`) (~10 min)
  - [ ] Fetch all fun items
  - [ ] Render Gallery component
  - [ ] Page heading and intro

  **Notes/Blockers**:

---

- [ ] Build Gallery component (`src/components/content/Gallery.tsx`) (~15 min)
  - [ ] Grid layout (default)
  - [ ] Image items with Next.js Image
  - [ ] Video embed support
  - [ ] Responsive grid

  **Notes/Blockers**:

---

**Phase 3 Deliverable**: ✅ Functional website with all pages

---

## Phase 4: Style System
**Estimated Duration**: 45 minutes
**Status**: Not Started

### Type Definitions
- [ ] Create style types (`src/types/styles.ts`) (~15 min)
  - [ ] `StyleConfig` interface
  - [ ] Navigation style types
  - [ ] Case study layout types
  - [ ] Gallery layout types
  - [ ] Theme configuration types
  - [ ] Export all style types

  **Notes/Blockers**:

---

### State Management
- [ ] Create Zustand store (`src/store/styleStore.ts`) (~15 min)
  - [ ] Define initial state with defaults
  - [ ] Actions: `updateNavigation()`, `updateCaseStudies()`, etc.
  - [ ] `resetStyles()` action
  - [ ] `loadFromLocalStorage()` helper
  - [ ] `saveToLocalStorage()` helper

  **Notes/Blockers**:

---

### Component Variants
- [ ] Implement CaseStudyCard variants (~10 min)
  - [ ] Grid variant (default)
  - [ ] List variant (horizontal)
  - [ ] Minimal variant
  - [ ] Image-focused variant
  - [ ] Connect to Zustand store

  **Notes/Blockers**:

---

- [ ] Implement Gallery layout variants (~10 min)
  - [ ] Grid layout
  - [ ] Masonry layout
  - [ ] Carousel layout
  - [ ] Connect to Zustand store

  **Notes/Blockers**:

---

- [ ] Implement Navigation variants (~10 min)
  - [ ] Minimal style
  - [ ] Bold style
  - [ ] Ghost style
  - [ ] Position variants (top/side/bottom)
  - [ ] Connect to Zustand store

  **Notes/Blockers**:

---

- [ ] Set up localStorage persistence (~5 min)
  - [ ] Load styles on app mount
  - [ ] Save styles on updates
  - [ ] Handle hydration properly

  **Notes/Blockers**:

---

**Phase 4 Deliverable**: ✅ Dynamic style system ready for AI

---

## Phase 5: AI Restyle Feature
**Estimated Duration**: 90 minutes
**Status**: Not Started

### API Route
- [ ] Create API route (`src/app/api/restyle/route.ts`) (~20 min)
  - [ ] Set up POST handler
  - [ ] Initialize Anthropic SDK client
  - [ ] Parse request body (user message + current config)
  - [ ] Error handling
  - [ ] Return JSON response

  **Notes/Blockers**:

---

### AI Integration
- [ ] Design AI prompt engineering (`src/lib/ai.ts`) (~30 min)
  - [ ] Create system prompt with:
    - Available component variants
    - Design constraints
    - JSON response format
  - [ ] Include current style config in context
  - [ ] Parse user's natural language request
  - [ ] Construct Claude API request
  - [ ] Validate AI response structure
  - [ ] Return updated style config

  **Notes/Blockers**:

---

### UI Components
- [ ] Build RestyleButton component (`src/components/restyle/RestyleButton.tsx`) (~10 min)
  - [ ] Floating button (bottom-right)
  - [ ] Palette/sparkle icon
  - [ ] Pulse animation
  - [ ] Opens chat modal
  - [ ] Keyboard accessible

  **Notes/Blockers**:

---

- [ ] Build RestyleChat component (`src/components/restyle/RestyleChat.tsx`) (~30 min)
  - [ ] Modal or drawer UI
  - [ ] Chat input field
  - [ ] Conversation history display
  - [ ] Loading indicator
  - [ ] Example prompt suggestions
  - [ ] Send message to API
  - [ ] Display AI response
  - [ ] Apply/Reset buttons

  **Notes/Blockers**:

---

### Integration
- [ ] Connect AI response to style updates (~15 min)
  - [ ] Parse AI JSON response
  - [ ] Update Zustand store with new config
  - [ ] Trigger re-render of components
  - [ ] Show success feedback

  **Notes/Blockers**:

---

- [ ] Add preview and apply functionality (~10 min)
  - [ ] Preview mode (temporary styles)
  - [ ] Apply button (save to store)
  - [ ] Reset button (revert to defaults)
  - [ ] Visual feedback during transitions

  **Notes/Blockers**:

---

**Phase 5 Deliverable**: ✅ Full AI restyle feature working

---

## Phase 6: Polish & Optimization
**Estimated Duration**: 45 minutes
**Status**: Not Started

### Responsive Design
- [ ] Test and fix mobile layouts (~10 min)
  - [ ] Navigation mobile menu
  - [ ] Case study cards on small screens
  - [ ] Gallery on mobile
  - [ ] Touch-friendly buttons (min 44x44px)

  **Notes/Blockers**:

---

### Animations & Transitions
- [ ] Add smooth transitions (~10 min)
  - [ ] Page transitions
  - [ ] Card hover effects
  - [ ] Modal open/close animations
  - [ ] Scroll animations (optional)

  **Notes/Blockers**:

---

### Image Optimization
- [ ] Optimize all images (~10 min)
  - [ ] Use Next.js Image component everywhere
  - [ ] Add blur placeholders
  - [ ] Set proper sizes and srcset
  - [ ] Lazy loading

  **Notes/Blockers**:

---

### Error Handling & Loading States
- [ ] Add error boundaries (~5 min)
  - [ ] Error boundary component
  - [ ] Wrap app in error boundary
  - [ ] User-friendly error messages

  **Notes/Blockers**:

---

- [ ] Add loading states (~5 min)
  - [ ] Page loading indicators
  - [ ] Image loading skeletons
  - [ ] API request loading states

  **Notes/Blockers**:

---

### SEO & Accessibility
- [ ] Add SEO metadata (~10 min)
  - [ ] Update `layout.tsx` with metadata
  - [ ] Page-specific metadata
  - [ ] Open Graph tags
  - [ ] Twitter Card tags
  - [ ] Canonical URLs

  **Notes/Blockers**:

---

- [ ] Accessibility audit (~10 min)
  - [ ] Keyboard navigation testing
  - [ ] ARIA labels where needed
  - [ ] Focus indicators
  - [ ] Screen reader testing
  - [ ] Color contrast check

  **Notes/Blockers**:

---

### Testing
- [ ] Cross-browser testing (~10 min)
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
  - [ ] Fix any compatibility issues

  **Notes/Blockers**:

---

- [ ] Performance audit (~5 min)
  - [ ] Run Lighthouse audit
  - [ ] Check Core Web Vitals
  - [ ] Optimize any issues
  - [ ] Verify no console errors

  **Notes/Blockers**:

---

**Phase 6 Deliverable**: ✅ Production-ready portfolio website

---

## Deployment Checklist
**Status**: Not Started

- [ ] Get Anthropic API key
  - [ ] Sign up at https://console.anthropic.com
  - [ ] Create API key
  - [ ] Add to `.env.local` for local testing

  **Notes/Blockers**:

---

- [ ] Deploy to Vercel (~10 min)
  - [ ] Connect GitHub repository
  - [ ] Add `ANTHROPIC_API_KEY` to environment variables
  - [ ] Configure deployment settings
  - [ ] Deploy production build

  **Notes/Blockers**:

---

- [ ] Post-deployment verification (~5 min)
  - [ ] Test all pages on production
  - [ ] Verify AI restyle works
  - [ ] Check performance on production
  - [ ] Confirm analytics (if added)

  **Notes/Blockers**:

---

## Success Criteria

- [ ] All pages render correctly and are responsive
- [ ] MDX content displays with proper formatting
- [ ] AI restyle feature works with natural language input
- [ ] Component variants apply correctly
- [ ] Styles persist across page refreshes
- [ ] Images are optimized and load quickly
- [ ] Site is accessible (keyboard navigation, screen readers)
- [ ] SEO metadata is complete
- [ ] No console errors or warnings
- [ ] Cross-browser compatibility verified

---

## Notes & Learnings

### General Notes:


### Blockers & Solutions:


### Performance Optimizations:


### Future Improvements:
- Blog/writing functionality
- Case study filtering and search
- Dark mode toggle
- Analytics integration
- Contact form
- Custom style sharing feature

---

**Progress Tracker**
- Phase 1: ⏳ In Progress
- Phase 2: ⬜ Not Started
- Phase 3: ⬜ Not Started
- Phase 4: ⬜ Not Started
- Phase 5: ⬜ Not Started
- Phase 6: ⬜ Not Started
