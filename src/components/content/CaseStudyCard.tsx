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
      className="group block mb-6"
    >
      {/* Metadata Section - appears before image */}
      <div className="mb-4">
        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
          CASE STUDY
        </p>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
          {title}
        </h3>

        {/* Client/Year metadata */}
        {(client || year) && (
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            {client && <span>{client}</span>}
            {client && year && <span>•</span>}
            {year && <span>{year}</span>}
          </div>
        )}
      </div>

      {/* Cover Image - full width */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
    </Link>
  );
}
