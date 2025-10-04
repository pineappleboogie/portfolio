/**
 * MDX Content Utilities
 *
 * Functions to read, parse, and process MDX files from the content directory.
 * Uses gray-matter to extract frontmatter (metadata) and fs to read files.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { CaseStudy, FunItem } from '@/types/content';

// Define the base content directory path
const CONTENT_DIR = path.join(process.cwd(), 'content');
const CASE_STUDIES_DIR = path.join(CONTENT_DIR, 'case-studies');
const FUN_DIR = path.join(CONTENT_DIR, 'fun');

/**
 * Get all case studies from the content/case-studies directory.
 * Reads all .mdx files, parses frontmatter, and returns an array of CaseStudy objects.
 *
 * @returns Array of case studies sorted by date (newest first)
 */
export function getAllCaseStudies(): CaseStudy[] {
  // Check if directory exists
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    console.warn('Case studies directory not found:', CASE_STUDIES_DIR);
    return [];
  }

  // Read all files in the case-studies directory
  const files = fs.readdirSync(CASE_STUDIES_DIR);

  // Filter for .mdx files only and parse each one
  const caseStudies = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(CASE_STUDIES_DIR, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // Parse frontmatter from MDX file
      const { data } = matter(fileContents);

      // Extract slug from filename (remove .mdx extension)
      const slug = file.replace(/\.mdx$/, '');

      return {
        ...data,
        slug,
      } as CaseStudy;
    })
    // Sort by date, newest first
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return caseStudies;
}

/**
 * Get a single case study by its slug.
 * Returns both the frontmatter and the MDX content.
 *
 * @param slug - The URL-friendly identifier (filename without .mdx)
 * @returns Object with frontmatter and content, or null if not found
 */
export function getCaseStudyBySlug(slug: string): {
  frontmatter: CaseStudy;
  content: string;
} | null {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.warn('Case study not found:', filePath);
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter and content
  const { data, content } = matter(fileContents);

  return {
    frontmatter: {
      ...data,
      slug,
    } as CaseStudy,
    content,
  };
}

/**
 * Get all fun/gallery items from the content/fun directory.
 * Reads all .mdx files, parses frontmatter, and returns an array of FunItem objects.
 *
 * @returns Array of fun items sorted by date (newest first)
 */
export function getAllFunItems(): FunItem[] {
  // Check if directory exists
  if (!fs.existsSync(FUN_DIR)) {
    console.warn('Fun directory not found:', FUN_DIR);
    return [];
  }

  // Read all files in the fun directory
  const files = fs.readdirSync(FUN_DIR);

  // Filter for .mdx files only and parse each one
  const funItems = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(FUN_DIR, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // Parse frontmatter from MDX file
      const { data } = matter(fileContents);

      // Extract slug from filename
      const slug = file.replace(/\.mdx$/, '');

      return {
        ...data,
        slug,
      } as FunItem;
    })
    // Sort by date, newest first
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return funItems;
}

/**
 * Get a single fun item by its slug.
 * Returns both the frontmatter and the MDX content.
 *
 * @param slug - The URL-friendly identifier (filename without .mdx)
 * @returns Object with frontmatter and content, or null if not found
 */
export function getFunItemBySlug(slug: string): {
  frontmatter: FunItem;
  content: string;
} | null {
  const filePath = path.join(FUN_DIR, `${slug}.mdx`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.warn('Fun item not found:', filePath);
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter and content
  const { data, content } = matter(fileContents);

  return {
    frontmatter: {
      ...data,
      slug,
    } as FunItem,
    content,
  };
}
