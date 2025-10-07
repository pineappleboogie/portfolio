/**
 * FunItemCard Component
 *
 * Displays a single playground/fun item as a card with:
 * - Media (image or video)
 * - Title and description
 * - Hover effects for interactivity
 * - Link to the detail page
 */

import Image from 'next/image';
import Link from 'next/link';
import type { FunItem } from '@/types/content';

interface FunItemCardProps {
  funItem: FunItem;
}

export default function FunItemCard({ funItem }: FunItemCardProps) {
  const { slug, title, mediaType, mediaUrl, thumbnailUrl } = funItem;

  return (
    <Link
      href={`/playground/${slug}`}
      className="group block mb-6"
    >
      {/* Metadata Section - appears before media */}
      <div className="mb-4">
        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
          {mediaType === 'video' ? 'VIDEO' : 'IMAGE'}
        </p>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
          {title}
        </h3>
      </div>

      {/* Media - full width */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg">
        {mediaType === 'image' ? (
          <Image
            src={mediaUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        ) : (
          // For video, show thumbnail if available, otherwise show a play icon overlay
          <>
            {thumbnailUrl ? (
              <Image
                src={thumbnailUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </>
        )}
      </div>
    </Link>
  );
}
