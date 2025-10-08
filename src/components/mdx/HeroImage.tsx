'use client';

import Image from 'next/image';

interface HeroImageProps {
  src: string;
  alt: string;
}

/**
 * HeroImage component for case study hero images
 * Client component to handle image loading errors with placeholder
 */
export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="relative w-full aspect-[16/9] mb-16 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        onError={(e) => {
          // Hide broken image and show placeholder
          e.currentTarget.style.display = 'none';
        }}
      />
      {/* Placeholder text shown if image fails to load */}
      <span className="absolute text-gray-400 dark:text-gray-600 text-sm">
        {alt}
      </span>
    </div>
  );
}
