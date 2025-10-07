# Portfolio Implementation Todo

**Last Updated**: 2025-10-04 (Phase 3 Completed)
**Total Estimated Time**: ~5.5 hours

---

## Phase 1: Foundation Setup
**Estimated Duration**: 30 minutes
**Status**: ✅ Completed

### Dependencies & Configuration
- [x] Install MDX dependencies (~5 min)
  - [x] `@next/mdx`
  - [x] `@mdx-js/loader`
  - [x] `@mdx-js/react`
  - [x] `gray-matter`
  - [x] `remark-gfm`
  - [x] `rehype-highlight`

  **Notes/Blockers**: All MDX packages installed successfully with no vulnerabilities.

---

- [x] Install AI SDK dependencies (~3 min)
  - [x] `ai` (Vercel AI SDK)
  - [x] `@anthropic-ai/sdk`

  **Notes/Blockers**: AI packages installed for restyle feature.

---

- [x] Install state management & utilities (~3 min)
  - [x] `zustand`
  - [x] `tailwind-merge`
  - [x] `clsx`

  **Notes/Blockers**: State management and utility libraries installed.

---

- [x] Configure Next.js for MDX (~5 min)
  - [x] Update `next.config.ts` with MDX configuration
  - [x] Configure MDX plugins (remark-gfm, rehype-highlight)

  **Notes/Blockers**: Configured for Turbopack compatibility. Created mdx-components.tsx for custom MDX components.

---

- [x] Set up environment variables (~5 min)
  - [x] Create `.env.local` file
  - [x] Add `ANTHROPIC_API_KEY` placeholder
  - [x] Update `.gitignore` to exclude `.env.local`

  **Notes/Blockers**: .env.local created with API key placeholder. .gitignore already included .env* files.

---

- [x] Create folder structure (~10 min)
  - [x] `content/case-studies/`
  - [x] `content/fun/`
  - [x] `public/images/about/`
  - [x] `public/images/case-studies/`
  - [x] `public/images/fun/`
  - [x] `src/components/layout/`
  - [x] `src/components/content/`
  - [x] `src/components/restyle/`
  - [x] `src/components/mdx/`
  - [x] `src/lib/`
  - [x] `src/store/`
  - [x] `src/types/`

  **Notes/Blockers**: Complete folder structure created and verified.

---

**Phase 1 Deliverable**: ✅ Project configured and ready for development

---

## Phase 2: Content System
**Estimated Duration**: 45 minutes
**Status**: ✅ Completed

### Type Definitions
- [x] Create content types (`src/types/content.ts`) (~10 min)
  - [x] `CaseStudy` interface
  - [x] `FunItem` interface
  - [x] `Frontmatter` base type
  - [x] Export all content types

  **Notes/Blockers**: Created comprehensive TypeScript interfaces with detailed comments explaining each field.

---

### MDX Utilities
- [x] Build MDX parsing utilities (`src/lib/mdx.ts`) (~15 min)
  - [x] `getAllCaseStudies()` function
  - [x] `getCaseStudyBySlug()` function
  - [x] `getAllFunItems()` function
  - [x] Frontmatter parsing with gray-matter
  - [x] MDX compilation setup

  **Notes/Blockers**: All utility functions implemented with error handling and sorting by date.

---

### Sample Content
- [x] Create case study MDX files (~15 min)
  - [x] `content/case-studies/project-alpha.mdx`
  - [x] `content/case-studies/project-beta.mdx`
  - [x] Add proper frontmatter (title, description, featured, etc.)
  - [x] Write placeholder content with images

  **Notes/Blockers**: Created detailed sample case studies with complete frontmatter. Note: Images need to be added to public/images/ directories.

---

- [x] Create fun/gallery MDX files (~5 min)
  - [x] `content/fun/experiment-1.mdx`
  - [x] `content/fun/design-exploration.mdx`
  - [x] `content/fun/creative-project.mdx`
  - [x] Add media references (images/videos)

  **Notes/Blockers**: Sample gallery items created. Image/video files need to be added.

---

**Phase 2 Deliverable**: ✅ Working content management system

---

## Phase 3: Core Pages & Components
**Estimated Duration**: 90 minutes
**Status**: ✅ Completed

### Layout Components
- [x] Build Navigation component (`src/components/layout/Navigation.tsx`) (~15 min)
  - [x] Logo/name
  - [x] Links: Home, Work, Fun
  - [x] Anchor scroll to About section
  - [x] Basic minimal style
  - [x] Mobile responsive (hamburger menu optional)

  **Notes/Blockers**: Built sticky navigation with mobile hamburger menu, active link highlighting, and smooth scroll support.

---

- [x] Fix Navigation active link detection (~20 min)
  - [x] Remove complex/broken Intersection Observer implementation
  - [x] Implement elegant Intersection Observer with Map-based state tracking
  - [x] Use multiple thresholds [0, 0.25, 0.5, 0.75, 1] for accurate visibility detection
  - [x] Track all section visibility in Map (id → intersection ratio)
  - [x] Set section with highest ratio as active
  - [x] Handle edge cases: short sections, tall sections, first/last sections
  - [x] Remove all debug console.logs
  - [x] Test all 3 cases: page load, click navigation, scroll navigation

  **Notes/Blockers**: Fixed race conditions and edge cases with robust implementation:
  - Pre-initialized Map with known sections to prevent update failures
  - Explicit section targeting via getElementById (more maintainable)
  - Initial visibility check handles page load at any scroll position (bookmarks, back button)
  - Simplified rootMargin to just account for nav height (-80px)
  - Observer fires at multiple thresholds for accurate ratios
  - Always selects most visible section, handles all edge cases (short/tall sections, transitions)
  - Clean implementation in ~75 lines with comprehensive edge case handling.

---

- [x] Create Footer component (`src/components/layout/Footer.tsx`) (~10 min)
  - [x] Copyright notice
  - [x] Social links (optional)
  - [x] Simple minimal design

  **Notes/Blockers**: Created footer with social links (LinkedIn, GitHub, Email) - customize links as needed.

---

- [x] Build Container component (`src/components/layout/Container.tsx`) (~5 min)
  - [x] Max-width wrapper
  - [x] Responsive padding
  - [x] Reusable layout utility

  **Notes/Blockers**: Built Container with size variants (sm, md, lg, xl) for different content widths.

---

### Home Page
- [x] Create Hero section (`src/app/page.tsx`) (~15 min)
  - [x] Personal introduction
  - [x] Name and title
  - [x] Brief tagline
  - [x] Scroll indicator to featured work

  **Notes/Blockers**: Hero section complete with animated scroll indicator linking to work section.

---

- [x] Build CaseStudyCard component (`src/components/content/CaseStudyCard.tsx`) (~15 min)
  - [x] Image with Next.js Image component
  - [x] Title and description
  - [x] Link to detail page
  - [x] Grid variant (default)
  - [x] Hover states

  **Notes/Blockers**: Card includes hover effects (scale, shadow, border) and supports variant prop for Phase 4.

---

- [x] Build CaseStudyGrid component (`src/components/content/CaseStudyGrid.tsx`) (~10 min)
  - [x] Map case studies to cards
  - [x] Responsive grid (1 col mobile, 2-3 desktop)
  - [x] Filter featured items

  **Notes/Blockers**: Responsive grid with featuredOnly filter and configurable columns.

---

- [x] Create About section (~15 min)
  - [x] Section with `id="about"` for anchor scroll
  - [x] Heading "About Me"
  - [x] Bio paragraph(s)
  - [x] Image gallery (2-3 photos)

  **Notes/Blockers**: About section with placeholder images - add real images to public/images/about/.

---

### Case Study Detail Pages
- [x] Create dynamic route (`src/app/work/[slug]/page.tsx`) (~10 min)
  - [x] Fetch case study by slug
  - [x] Render MDX content
  - [x] Back navigation button
  - [x] generateStaticParams for SSG

  **Notes/Blockers**: Dynamic route with SSG, metadata generation, and MDXRemote for content rendering.

---

- [x] Build MDX components (`src/components/mdx/MDXComponents.tsx`) (~10 min)
  - [x] Custom heading styles
  - [x] Custom paragraph styles
  - [x] Image component wrapper
  - [x] Code block styling

  **Notes/Blockers**: Using Tailwind Typography (prose) plugin for automatic MDX styling. Installed @tailwindcss/typography.

---

### Fun/Gallery Page
- [x] Create gallery page (`src/app/fun/page.tsx`) (~10 min)
  - [x] Fetch all fun items
  - [x] Render Gallery component
  - [x] Page heading and intro

  **Notes/Blockers**: Gallery page complete with server-side data fetching.

---

- [x] Build Gallery component (`src/components/content/Gallery.tsx`) (~15 min)
  - [x] Grid layout (default)
  - [x] Image items with Next.js Image
  - [x] Video embed support
  - [x] Responsive grid

  **Notes/Blockers**: Gallery with hover overlay, image/video support, and layout variants ready for Phase 4.

---

**Phase 3 Deliverable**: ✅ Functional website with all pages

---

## Phase 3.2: Homepage Layout Restructure
**Estimated Duration**: 90 minutes
**Status**: Not Started
**Goal**: Implement 2-column grid layout system with split navigation and proper section structure

### Global Layout Setup
- [ ] Add 24px horizontal margins to page (~5 min)
  - [ ] Apply `px-6` (24px) to main container
  - [ ] Ensure consistent spacing across all sections
  - [ ] Test responsive behavior on mobile

  **Notes/Blockers**:

---

### Navigation Restructure
- [ ] Implement split navigation layout (~20 min)
  - [ ] Create 2-column grid for navigation (50/50 split)
  - [ ] Position nav links in right column, aligned left
  - [ ] Rename "Fun" link to "Playground"
  - [ ] Ensure mobile responsiveness
  - [ ] Test navigation functionality with new layout

  **Notes/Blockers**:

---

### Homepage Section Restructure
- [ ] Implement 2-column grid system (~15 min)
  - [ ] Set up base 2-column grid with proper gap spacing
  - [ ] Apply grid to all major sections
  - [ ] Test responsive collapse to single column on mobile

  **Notes/Blockers**:

---

- [ ] Create reusable SectionHeading component (~10 min)
  - [ ] Large heading text component for section labels
  - [ ] Proper typography hierarchy
  - [ ] Consistent spacing and styling
  - [ ] Use for "Work", "About", etc.

  **Notes/Blockers**:

---

### Work Section
- [ ] Restructure Work section (~15 min)
  - [ ] Add large "Work" section heading at top
  - [ ] Position CaseStudyGrid in 2-column layout
  - [ ] Ensure cards work within grid system
  - [ ] Proper spacing between heading and grid

  **Notes/Blockers**:

---

### About Section
- [ ] Restructure About section (~20 min)
  - [ ] Add large "About" section heading
  - [ ] Move profile content to left column (image, name, bio)
  - [ ] Right column ready for additional content
  - [ ] Maintain 2-column grid consistency
  - [ ] Update section ID for navigation

  **Notes/Blockers**:

---

### Footer
- [ ] Position footer in layout (~10 min)
  - [ ] Place footer at bottom of page
  - [ ] Ensure proper spacing from last section
  - [ ] Verify footer content and styling
  - [ ] Test responsive behavior

  **Notes/Blockers**:

---

### Component Cleanup
- [ ] Update CaseStudyCard for grid system (~5 min)
  - [ ] Ensure cards work properly in new 2-column grid
  - [ ] Verify image aspect ratios and sizing
  - [ ] Test hover states within new layout

  **Notes/Blockers**:

---

- [ ] Create reusable Container/Section wrappers (~5 min)
  - [ ] Consistent section spacing utilities
  - [ ] Proper semantic HTML structure
  - [ ] Reusable grid layout components

  **Notes/Blockers**:

---

### Testing & Refinement
- [ ] Test complete layout (~10 min)
  - [ ] Run dev server and verify all sections
  - [ ] Check navigation functionality
  - [ ] Test responsive behavior (mobile, tablet, desktop)
  - [ ] Verify 24px margins throughout
  - [ ] Ensure 2-column grid consistency

  **Notes/Blockers**:

---

**Phase 3.2 Deliverable**: ✅ Homepage with 2-column grid system, split navigation, and proper section structure

---

## Phase 3.5: Real Content Integration
**Estimated Duration**: 3-5 hours (depending on content readiness)
**Status**: Not Started
**Goal**: Replace all placeholder content with your real work and authentic voice

### Homepage Personal Content
- [ ] Update hero section with real name and introduction (~5 min)
  - [ ] Replace "Your Name" with actual name
  - [ ] Write authentic tagline/introduction
  - [ ] Review tone and voice

  **Notes/Blockers**:

---

- [ ] Write real "About Me" bio (~15 min)
  - [ ] Craft 3 authentic paragraphs about your background
  - [ ] Include design philosophy and approach
  - [ ] Add personal touch (what drives you, interests, etc.)
  - [ ] Ensure it connects with your target audience

  **Notes/Blockers**:

---

- [ ] Add personal photos to About section (~15 min)
  - [ ] Select 2-3 professional photos of yourself
  - [ ] Add images to `/public/images/about/`
  - [ ] Update page.tsx to reference real images
  - [ ] Ensure images are web-optimized (resize if needed)

  **Notes/Blockers**:

---

### Case Study Content
- [ ] Identify which projects to showcase (~10 min)
  - [ ] Choose 3-5 of your best/most relevant projects
  - [ ] Decide which 2-3 should be featured on homepage
  - [ ] Gather existing documentation/assets for each

  **Notes/Blockers**:

---

- [ ] Write Case Study #1 (~60-90 min)
  - [ ] Create/update MDX file in `content/case-studies/`
  - [ ] Write complete case study following structure:
    - Overview and challenge
    - Your role and responsibilities
    - Research and discovery process
    - Design solution and key decisions
    - Results and impact
    - Key learnings
  - [ ] Update frontmatter (title, description, tags, client, year, role, featured, slug)
  - [ ] Add project images to `/public/images/case-studies/[project-name]/`
  - [ ] Reference images in MDX content

  **Notes/Blockers**:

---

- [ ] Write Case Study #2 (~60-90 min)
  - [ ] Create/update MDX file in `content/case-studies/`
  - [ ] Write complete case study following same structure as #1
  - [ ] Update frontmatter with project details
  - [ ] Add project images and reference in MDX

  **Notes/Blockers**:

---

- [ ] Write Case Study #3 (~60-90 min)
  - [ ] Create/update MDX file in `content/case-studies/`
  - [ ] Write complete case study following same structure as #1
  - [ ] Update frontmatter with project details
  - [ ] Add project images and reference in MDX

  **Notes/Blockers**:

---

- [ ] (Optional) Write additional case studies
  - [ ] Repeat process for remaining projects as needed

  **Notes/Blockers**:

---

### Gallery/Fun Content
- [ ] Replace placeholder fun items (~30 min)
  - [ ] Select 5-8 creative/experimental projects to showcase
  - [ ] Create MDX files for each in `content/fun/`
  - [ ] Write short descriptions and context
  - [ ] Add images/videos to `/public/images/fun/`
  - [ ] Update frontmatter (title, description, mediaType, mediaUrl)

  **Notes/Blockers**:

---

- [ ] Remove placeholder case studies (~5 min)
  - [ ] Delete `project-alpha.mdx`, `project-beta.mdx`, `project-charlie.mdx`
  - [ ] Clean up any unused placeholder images

  **Notes/Blockers**:

---

### Content Review & Critical Fixes
- [ ] Test site with real content (~10 min)
  - [ ] Run dev server: `npm run dev`
  - [ ] Review all pages (Home, Work detail pages, Fun)
  - [ ] Check mobile responsiveness
  - [ ] Verify all images load correctly
  - [ ] Test navigation and links

  **Notes/Blockers**:

---

- [ ] Fix only layout-breaking issues (~15 min)
  - [ ] Fix any content that overflows or breaks layout
  - [ ] Adjust image aspect ratios if needed
  - [ ] Fix any critical responsive issues
  - [ ] Note (don't fix yet) polish ideas for later

  **Notes/Blockers**:

---

**Phase 3.5 Deliverable**: ✅ Authentic portfolio with real content, ready for layout refinement

---

**[DECISION POINT]**
After Phase 3.5, review your site and choose:
- **Path A**: Simple polish and launch (Phase 6 subset: ~1-2 hours)
- **Path B**: Full style system + AI restyle (Phase 4 → 5 → 6: ~3-4 hours)

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
- Phase 1: ✅ Completed
- Phase 2: ✅ Completed
- Phase 3: ✅ Completed
- Phase 3.5: ⬜ Not Started (Real Content Integration)
- Phase 4: ⬜ Not Started (Style System - Optional based on decision point)
- Phase 5: ⬜ Not Started (AI Restyle - Optional based on decision point)
- Phase 6: ⬜ Not Started (Polish & Optimization)
