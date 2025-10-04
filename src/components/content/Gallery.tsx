/**
 * Gallery Component
 *
 * Displays a collection of fun/creative work items in a responsive grid.
 * Features:
 * - Supports both images and videos
 * - Responsive grid layout
 * - Optional click to expand/view full content
 * - Will support multiple layout variants in Phase 4
 */

import Image from 'next/image';
import type { FunItem } from '@/types/content';

interface GalleryProps {
  items: FunItem[];
  layout?: 'grid' | 'masonry' | 'carousel'; // Layout variants for Phase 4
}

export default function Gallery({ items, layout: _layout = 'grid' }: GalleryProps) {
  // No items to display
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          No gallery items to display.
        </p>
      </div>
    );
  }

  // For now, we'll implement the grid layout
  // Masonry and carousel will be added in Phase 4
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <GalleryItem key={item.slug} item={item} />
      ))}
    </div>
  );
}

/**
 * Individual gallery item component
 */
function GalleryItem({ item }: { item: FunItem }) {
  const { title, description, mediaType, mediaUrl, thumbnailUrl, tags } = item;

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
      {/* Media */}
      <div className="relative aspect-square bg-gray-100 dark:bg-gray-800">
        {mediaType === 'image' ? (
          <Image
            src={mediaUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Video - show thumbnail if available, otherwise show video
          <>
            {thumbnailUrl ? (
              <div className="relative w-full h-full">
                <Image
                  src={thumbnailUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <video
                src={mediaUrl}
                className="w-full h-full object-cover"
                controls
              />
            )}
          </>
        )}
      </div>

      {/* Content overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-white/90 text-sm line-clamp-2 mb-3">{description}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-white/20 text-white rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
