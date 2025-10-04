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
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/mdx';
import Container from '@/components/layout/Container';
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

  return (
    <article className="py-12">
      {/* Header */}
      <Container size="lg">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[var(--color-foreground)] transition-colors mb-8"
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
          Back to home
        </Link>

        <div className="mb-8">
          {/* Metadata */}
          <div className="flex items-center gap-3 mb-4 text-sm text-gray-600 dark:text-gray-400">
            {frontmatter.client && <span>{frontmatter.client}</span>}
            {frontmatter.client && frontmatter.year && <span>•</span>}
            {frontmatter.year && <span>{frontmatter.year}</span>}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-4">
            {frontmatter.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {frontmatter.description}
          </p>

          {/* Role & Tags */}
          <div className="flex flex-wrap gap-4">
            {frontmatter.role && frontmatter.role.length > 0 && (
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">
                  Role:
                </span>
                {frontmatter.role.map((r, i) => (
                  <span
                    key={r}
                    className="text-sm text-[var(--color-foreground)]"
                  >
                    {r}
                    {i < frontmatter.role!.length - 1 && ', '}
                  </span>
                ))}
              </div>
            )}

            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-12">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>

      {/* MDX Content */}
      <Container size="md">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        </div>
      </Container>
    </article>
  );
}
