/**
 * Content Type Definitions
 *
 * These types define the structure of content in the portfolio,
 * including case studies and fun/gallery items.
 */

/**
 * Base frontmatter properties shared by all content types.
 * Frontmatter is the metadata at the top of MDX files between --- markers.
 */
export interface Frontmatter {
  title: string;
  description: string;
  date: string; // ISO date string (e.g., "2024-03-15")
  slug: string; // URL-friendly identifier (e.g., "project-alpha")
}

/**
 * Metadata item for case study detail pages.
 * Supports flexible key-value pairs for any project information.
 */
export interface MetadataItem {
  label: string; // Display label (e.g., "Role", "Timeline", "Collaborators")
  value: string | string[]; // Single value or array for multi-line display
}

/**
 * Case Study content structure.
 * Represents a portfolio work item with detailed project information.
 */
export interface CaseStudy extends Frontmatter {
  featured: boolean; // Whether to display on homepage
  coverImage: string; // Path to cover image (e.g., "/images/case-studies/project.jpg")
  tags?: string[]; // Optional project tags (e.g., ["UX Design", "Prototyping"])
  client?: string; // Optional client name
  year?: string; // Project year (e.g., "2024")
  role?: string[]; // Your role in the project (e.g., ["Lead Designer", "Sole Designer", "Design QA"])
  featureName?: string; // Feature name for breadcrumb (e.g., "Magic Ads")
  heroImage?: string; // Separate hero image for detail page (fallback to coverImage if not provided)
  metadata?: MetadataItem[]; // Flexible metadata array for detail page header
}

/**
 * Fun/Gallery item structure.
 * Represents creative experiments, designs, or media for the gallery.
 */
export interface FunItem extends Frontmatter {
  mediaType: 'image' | 'video'; // Type of media to display
  mediaUrl: string; // Path to image or video (e.g., "/images/fun/experiment.jpg")
  thumbnailUrl?: string; // Optional thumbnail for videos
  tags?: string[]; // Optional tags for filtering
}

/**
 * Content with parsed MDX.
 * Generic type that wraps frontmatter with the compiled MDX content.
 */
export interface ContentWithMDX<T extends Frontmatter> {
  frontmatter: T;
  content: string; // The MDX content as a string
}
