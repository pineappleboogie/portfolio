# Portfolio Implementation Todo

**Last Updated**: 2025-10-07 (Phase 3.2 Completed)
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
**Status**: ✅ Completed
**Goal**: Implement 2-column grid layout system with split navigation and proper section structure

### Global Layout Setup
- [x] Add 24px horizontal margins to page (~5 min)
  - [x] Apply `px-6` (24px) to main container
  - [x] Ensure consistent spacing across all sections
  - [x] Test responsive behavior on mobile

  **Notes/Blockers**: Applied px-6 to main layout, navigation, and footer for consistent 24px horizontal margins.

---

### Navigation Restructure
- [x] Implement split navigation layout (~20 min)
  - [x] Create 2-column grid for navigation (50/50 split)
  - [x] Position nav links in right column, aligned left
  - [x] Rename "Fun" link to "Playground"
  - [x] Ensure mobile responsiveness
  - [x] Test navigation functionality with new layout

  **Notes/Blockers**: Navigation restructured with 2-column grid (gap-6 for 24px spacing). Mobile menu button positioned absolutely for proper mobile stacking.

---

### Homepage Section Restructure
- [x] Implement 2-column grid system (~15 min)
  - [x] Set up base 2-column grid with proper gap spacing
  - [x] Apply grid to all major sections
  - [x] Test responsive collapse to single column on mobile

  **Notes/Blockers**: All sections use `md:grid md:grid-cols-2 gap-6` pattern. On mobile, grids don't apply and content stacks vertically naturally.

---

- [x] Create reusable SectionHeading component (~10 min)
  - [x] Large heading text component for section labels
  - [x] Proper typography hierarchy
  - [x] Consistent spacing and styling
  - [x] Use for "Work", "About", etc.

  **Notes/Blockers**: Created SectionHeading component but ultimately used inline headings with tertiary color (gray-400/600) positioned in right column.

---

### Work Section
- [x] Restructure Work section (~15 min)
  - [x] Add large "Work" section heading at top
  - [x] Position CaseStudyGrid in 2-column layout
  - [x] Ensure cards work within grid system
  - [x] Proper spacing between heading and grid

  **Notes/Blockers**: Work section uses 2-column grid with heading in right column. White background (removed gray-50). Case studies span full width and display metadata before images.

---

### About Section
- [x] Restructure About section (~20 min)
  - [x] Add large "About" section heading
  - [x] Move profile content to left column (image, name, bio)
  - [x] Right column ready for additional content
  - [x] Maintain 2-column grid consistency
  - [x] Update section ID for navigation

  **Notes/Blockers**: About section follows 2-column grid with images in left column, text (heading, name, bio) in right column. Heading appears at top on mobile, in right column on desktop.

---

### Footer
- [x] Position footer in layout (~10 min)
  - [x] Place footer at bottom of page
  - [x] Ensure proper spacing from last section
  - [x] Verify footer content and styling
  - [x] Test responsive behavior

  **Notes/Blockers**: Footer updated with px-6 for edge-to-edge layout with 24px margins.

---

### Component Cleanup
- [x] Update CaseStudyCard for grid system (~5 min)
  - [x] Ensure cards work properly in new 2-column grid
  - [x] Verify image aspect ratios and sizing
  - [x] Test hover states within new layout

  **Notes/Blockers**: CaseStudyCard restructured to show metadata (CASE STUDY label, title, client/year) before image. Removed border/shadow for cleaner look. Updated spacing to mb-6 for consistency.

---

- [x] Create reusable Container/Section wrappers (~5 min)
  - [x] Consistent section spacing utilities
  - [x] Proper semantic HTML structure
  - [x] Reusable grid layout components

  **Notes/Blockers**: Created Section component wrapper. Removed Container max-width constraints to achieve edge-to-edge layout as per design requirements.

---

### Testing & Refinement
- [x] Test complete layout (~10 min)
  - [x] Run dev server and verify all sections
  - [x] Check navigation functionality
  - [x] Test responsive behavior (mobile, tablet, desktop)
  - [x] Verify 24px margins throughout
  - [x] Ensure 2-column grid consistency

  **Notes/Blockers**: All sections tested and verified. Dev server running successfully at localhost:3002.

---

### Additional Improvements
- [x] Added 80x80 circular profile image above hero heading
  - [x] Placeholder ready for actual profile photo
  - [x] 24px margin below for consistent spacing

- [x] Consistent 24px spacing throughout
  - [x] All grids use gap-6 (24px) for both horizontal and vertical gaps
  - [x] Section headings use mb-6 (24px)
  - [x] Case study cards use mb-6 (24px) between items
  - [x] Navigation grid uses gap-6 (24px)

- [x] Mobile responsive improvements
  - [x] Grids only apply on desktop (md:grid)
  - [x] Content stacks vertically on mobile without grid
  - [x] No unnecessary spacing on mobile
  - [x] Clean, simple vertical flow

**Phase 3.2 Deliverable**: ✅ Homepage with 2-column grid system, split navigation, proper section structure, edge-to-edge layout, and consistent 24px spacing throughout

---

## Phase 3.3: Case Study Page Restructure
**Estimated Duration**: 150 minutes
**Status**: Not Started
**Goal**: Implement custom case study page layout with flexible MDX components, collapsible TOC sidebar, and rich content presentation optimized for recruiters and hiring managers

### Type System Updates
- [x] Extend CaseStudy interface (~5 min)
  - [x] Add `featureName?: string` field for breadcrumb (e.g., "Magic Ads")
  - [x] Add `heroImage?: string` field (separate from coverImage)
  - [x] Add flexible metadata structure: `metadata?: Array<{label: string, value: string | string[]}>`
  - [x] Metadata examples: Role, Collaborators, Timeline, Skills, Duration, etc.
  - [x] Timeline format support: "Jun - Jul 2025" as value, with duration like "5 weeks" on separate line
  - [x] Update types in `src/types/content.ts`

  **Notes/Blockers**: Created MetadataItem interface with flexible label/value structure. Added featureName, heroImage, and metadata fields to CaseStudy interface. All fields are optional for backward compatibility.

---

### Custom MDX Components
- [ ] Create TextSection component (~25 min)
  - [ ] Support 3 text types: eyebrow (small), headline (large), body (normal)
  - [ ] Two layout modes: centered or two-column (left/right aligned)
  - [ ] Max-width: 640px for readability (optimal for 16px font)
  - [ ] Props: `eyebrow?`, `headline?`, `body?`, `align?: 'center' | 'left' | 'right'`, `column?: 'left' | 'right'`, `id?`
  - [ ] Add `id` attribute to section based on eyebrow text (for TOC anchoring)
  - [ ] 40px vertical spacing between sections (mb-10)
  - [ ] Create file: `src/components/mdx/TextSection.tsx`

  **Notes/Blockers**:

---

- [ ] Create MediaSection component (~30 min)
  - [ ] Full-width image or video display
  - [ ] Support both `<Image>` and `<video>` elements
  - [ ] Video auto-play on scroll using Intersection Observer
  - [ ] Pause video when out of view
  - [ ] Add pause/play button (bottom-right corner) for videos
  - [ ] Image captions: always visible, center-aligned below image
  - [ ] 40px vertical spacing (mb-10)
  - [ ] Props: `src`, `alt`, `type: 'image' | 'video'`, `caption?`
  - [ ] Create file: `src/components/mdx/MediaSection.tsx`

  **Notes/Blockers**:

---

- [ ] Create MediaGrid component (~20 min)
  - [ ] Two-column grid layout for images/videos (desktop)
  - [ ] Stack vertically on mobile
  - [ ] Support multiple media items
  - [ ] Auto-play videos when in viewport
  - [ ] Add pause/play button (bottom-right) for each video
  - [ ] Captions: always visible, center-aligned below each item
  - [ ] 40px vertical spacing (mb-10)
  - [ ] Props: `items: Array<{src, alt, type, caption?}>`
  - [ ] Create file: `src/components/mdx/MediaGrid.tsx`

  **Notes/Blockers**:

---

- [ ] Create CenteredText component (~10 min)
  - [ ] Large, centered highlight text for key statements
  - [ ] Max-width: 640px for readability
  - [ ] Distinct typography styling (larger, bolder)
  - [ ] 40px vertical spacing (mb-10)
  - [ ] Props: `children` (text content)
  - [ ] Create file: `src/components/mdx/CenteredText.tsx`

  **Notes/Blockers**:

---

### Table of Contents Sidebar
- [ ] Create TableOfContents component (~25 min)
  - [ ] Collapsible left sidebar (fixed position on desktop)
  - [ ] Extract eyebrow text from TextSection components to build TOC
  - [ ] Anchor scroll to sections when clicked
  - [ ] Highlight active section based on scroll position
  - [ ] Mobile: collapsed by default, expandable via button
  - [ ] Desktop: visible by default, collapsible
  - [ ] Smooth scroll behavior
  - [ ] Create file: `src/components/content/TableOfContents.tsx`

  **Notes/Blockers**:

---

### Case Study Page Layout
- [ ] Update case study detail page header (~30 min)
  - [ ] Add back arrow + "Back" link to /work (always)
  - [ ] Breadcrumb format: `{client} • {featureName}`
  - [ ] Display title (large heading)
  - [ ] Flexible metadata grid: dynamically render columns based on metadata array
  - [ ] Each metadata item shows label (small font) and value (regular font)
  - [ ] Support multi-line values (e.g., Timeline: "Jun - Jul 2025" with "5 weeks" below)
  - [ ] Metadata grid: responsive grid on desktop, stacked on mobile
  - [ ] Display hero image full-width (use heroImage field, fallback to coverImage)
  - [ ] Update file: `src/app/work/[slug]/page.tsx`

  **Notes/Blockers**:

---

- [ ] Configure MDX component mapping (~15 min)
  - [ ] Create `mdx-components.tsx` exports for custom components
  - [ ] Map components: `TextSection`, `MediaSection`, `MediaGrid`, `CenteredText`
  - [ ] Pass to `<MDXRemote components={...} />`
  - [ ] Remove default prose styling constraints
  - [ ] Update file: `src/app/work/[slug]/page.tsx`

  **Notes/Blockers**:

---

- [ ] Implement full-width content container (~10 min)
  - [ ] Remove max-width constraints from content area
  - [ ] Let MDX components control their own widths
  - [ ] Add horizontal padding (24px) to match homepage
  - [ ] Ensure consistent 40px vertical spacing between sections
  - [ ] Integrate TableOfContents component into layout

  **Notes/Blockers**:

---

### Video Auto-Play Implementation
- [ ] Build Intersection Observer hook (~15 min)
  - [ ] Create `useIntersectionObserver` hook for reusability
  - [ ] Trigger callback when element is 50% visible
  - [ ] Clean up observer on unmount
  - [ ] Create file: `src/hooks/useIntersectionObserver.ts` (if needed)
  - [ ] Or implement directly in MediaSection/MediaGrid components

  **Notes/Blockers**:

---

### Sample Content Update
- [ ] Update project-alpha.mdx with new components (~15 min)
  - [ ] Add `featureName` to frontmatter
  - [ ] Add flexible `metadata` array with Role, Collaborators, Timeline (with duration)
  - [ ] Example: `metadata: [{label: "Timeline", value: ["Jun - Jul 2025", "5 weeks"]}, ...]`
  - [ ] Replace standard markdown with custom MDX components
  - [ ] Demonstrate different text layouts (centered, two-column)
  - [ ] Add sample media sections (full-width and grid)
  - [ ] Include centered highlight text examples
  - [ ] Update file: `content/case-studies/project-alpha.mdx`

  **Notes/Blockers**:

---

### Testing & Refinement
- [ ] Test case study page layout (~15 min)
  - [ ] Run dev server and view case study detail page
  - [ ] Test all MDX component variations
  - [ ] Verify video auto-play on scroll and pause/play buttons
  - [ ] Test TOC: anchor scrolling, active highlighting, collapse/expand
  - [ ] Check responsive behavior (mobile, tablet, desktop)
  - [ ] Verify metadata grid: desktop vs mobile layout
  - [ ] Ensure consistent 40px vertical spacing between sections
  - [ ] Test back navigation (always goes to /work)
  - [ ] Verify image captions display correctly

  **Notes/Blockers**:

---

**Phase 3.3 Deliverable**: ✅ Rich case study pages with flexible metadata, collapsible TOC sidebar, custom MDX components, video controls, and content optimized for recruiters/hiring managers

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
- Phase 3.2: ✅ Completed (Homepage Layout Restructure)
- Phase 3.5: ⬜ Not Started (Real Content Integration)
- Phase 4: ⬜ Not Started (Style System - Optional based on decision point)
- Phase 5: ⬜ Not Started (AI Restyle - Optional based on decision point)
- Phase 6: ⬜ Not Started (Polish & Optimization)
