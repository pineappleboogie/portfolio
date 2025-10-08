/**
 * Case Study Detail Page
 *
 * Dynamic route that displays individual case studies.
 * The [slug] in the folder name creates a dynamic route parameter.
 *
 * For example:
 * - /work/project-alpha -> slug = "project-alpha"
 * - /work/project-beta -> slug = "project-beta"
 *
 * This page is statically generated at build time using generateStaticParams.
 */

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/mdx';
import { TextSection } from '@/components/mdx/TextSection';
import { MediaSection } from '@/components/mdx/MediaSection';
import { MediaGrid } from '@/components/mdx/MediaGrid';
import { CenteredText } from '@/components/mdx/CenteredText';
import { HeroImage } from '@/components/mdx/HeroImage';
import TableOfContents from '@/components/content/TableOfContents';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

// This tells Next.js which pages to generate at build time
// It returns an array of all possible slug values
export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

// Generate metadata for each page (for SEO)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.frontmatter.title} - Portfolio`,
    description: caseStudy.frontmatter.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  // If case study doesn't exist, show 404
  if (!caseStudy) {
    notFound();
  }

  const { frontmatter, content } = caseStudy;

  // MDX components for custom case study elements
  const components = {
    TextSection,
    MediaSection,
    MediaGrid,
    CenteredText,
  };

  return (
    <div className="md:flex md:gap-0">
      {/* Table of Contents Sidebar */}
      <TableOfContents />

      <article className="flex-1 px-6 py-12">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[var(--color-foreground)] transition-colors mb-6"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Link>

          {/* Breadcrumb: Client • Feature Name */}
          {(frontmatter.client || frontmatter.featureName) && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {frontmatter.client}
              {frontmatter.client && frontmatter.featureName && ' • '}
              {frontmatter.featureName}
            </p>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] mb-8">
            {frontmatter.title}
          </h1>

          {/* Flexible Metadata Grid */}
          {frontmatter.metadata && frontmatter.metadata.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {frontmatter.metadata.map((item, index) => (
                <div key={index}>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  {Array.isArray(item.value) ? (
                    item.value.map((val, i) => (
                      <p key={i} className="text-sm text-[var(--color-foreground)]">
                        {val}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-[var(--color-foreground)]">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hero Image (full-width) */}
        {(frontmatter.heroImage || frontmatter.coverImage) && (
          <HeroImage
            src={frontmatter.heroImage || frontmatter.coverImage}
            alt={frontmatter.title}
          />
        )}

        {/* MDX Content - Full Width */}
        <div className="max-w-full">
          <MDXRemote
            source={content}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}
