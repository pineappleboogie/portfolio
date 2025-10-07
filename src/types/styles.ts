/**
 * Style System Type Definitions
 *
 * This file defines all the types for the dynamic style system that powers
 * the AI restyle feature. Each type represents configurable visual options
 * for different components in the portfolio.
 */

/**
 * Navigation Component Styles
 * Controls the appearance and position of the main navigation bar
 */
export type NavigationStyle = 'minimal' | 'bold' | 'ghost';
export type NavigationPosition = 'top' | 'side' | 'bottom';

export interface NavigationConfig {
  style: NavigationStyle;
  position: NavigationPosition;
  showIcons?: boolean;
  sticky?: boolean;
}

/**
 * Case Study Card Variants
 * Different layouts for displaying case study previews
 */
export type CaseStudyCardVariant = 'grid' | 'list' | 'minimal' | 'image-focused';

export interface CaseStudyConfig {
  cardVariant: CaseStudyCardVariant;
  columns?: 1 | 2 | 3 | 4;
  showDescription?: boolean;
  imageAspectRatio?: 'square' | 'wide' | 'portrait';
}

/**
 * Gallery/Fun Section Layouts
 * Different ways to display gallery items
 */
export type GalleryLayout = 'grid' | 'masonry' | 'carousel';

export interface GalleryConfig {
  layout: GalleryLayout;
  columns?: 2 | 3 | 4 | 5;
  gap?: 'sm' | 'md' | 'lg';
  showCaptions?: boolean;
}

/**
 * Theme Configuration
 * Global theme settings (colors, typography, spacing)
 */
export interface ThemeConfig {
  // Color scheme
  primaryColor?: string;
  accentColor?: string;

  // Typography
  headingFont?: 'sans' | 'serif' | 'mono';
  bodyFont?: 'sans' | 'serif' | 'mono';

  // Spacing & sizing
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  spacing?: 'compact' | 'normal' | 'relaxed';

  // Visual effects
  shadowIntensity?: 'none' | 'subtle' | 'normal' | 'strong';
  animationSpeed?: 'slow' | 'normal' | 'fast';
}

/**
 * Master Style Configuration
 * The complete style state for the entire application
 */
export interface StyleConfig {
  navigation: NavigationConfig;
  caseStudy: CaseStudyConfig;
  gallery: GalleryConfig;
  theme: ThemeConfig;
}

/**
 * Default style configuration
 * This is the initial state when the app loads or when styles are reset
 */
export const DEFAULT_STYLE_CONFIG: StyleConfig = {
  navigation: {
    style: 'minimal',
    position: 'top',
    showIcons: false,
    sticky: true,
  },
  caseStudy: {
    cardVariant: 'grid',
    columns: 2,
    showDescription: true,
    imageAspectRatio: 'wide',
  },
  gallery: {
    layout: 'grid',
    columns: 3,
    gap: 'md',
    showCaptions: true,
  },
  theme: {
    primaryColor: undefined, // Uses CSS custom properties by default
    accentColor: undefined,
    headingFont: 'sans',
    bodyFont: 'sans',
    borderRadius: 'md',
    spacing: 'normal',
    shadowIntensity: 'normal',
    animationSpeed: 'normal',
  },
};

/**
 * Type guard to check if a style config is valid
 */
export function isValidStyleConfig(config: unknown): config is StyleConfig {
  if (!config || typeof config !== 'object') return false;

  const c = config as Partial<StyleConfig>;

  return !!(
    c.navigation &&
    c.caseStudy &&
    c.gallery &&
    c.theme
  );
}
