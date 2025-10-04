/**
 * CaseStudyCard Component
 *
 * Displays a single case study as a card with:
 * - Cover image
 * - Title and description
 * - Hover effects for interactivity
 * - Link to the detail page
 *
 * This component will later support multiple variants (grid, list, minimal)
 * when the style system is implemented in Phase 4.
 */

import Image from 'next/image';
import Link from 'next/link';
import type { CaseStudy } from '@/types/content';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  variant?: 'grid' | 'list' | 'minimal'; // Variant support for Phase 4
}

export default function CaseStudyCard({
  caseStudy,
  variant: _variant = 'grid',
}: CaseStudyCardProps) {
  const { slug, title, description, coverImage, tags, client, year } =
    caseStudy;

  // For now, we'll implement the grid variant
  // List and minimal variants will be added in Phase 4
  return (
    <Link
      href={`/work/${slug}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Client/Year metadata */}
        {(client || year) && (
          <div className="flex items-center gap-2 mb-2 text-xs text-gray-500 dark:text-gray-400">
            {client && <span>{client}</span>}
            {client && year && <span>•</span>}
            {year && <span>{year}</span>}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
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
    </Link>
  );
}
