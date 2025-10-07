'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface MediaSectionProps {
  src: string;
  alt: string;
  type: 'image' | 'video';
  caption?: string;
  poster?: string; // Thumbnail image shown before video loads
}

/**
 * MediaSection component for displaying full-width images or videos
 *
 * Features:
 * - Full-width media display
 * - Auto-play videos when they scroll into view
 * - Pause videos when they scroll out of view
 * - Pause/play button for videos (bottom-right corner)
 * - Always-visible captions, center-aligned below media
 */
export function MediaSection({ src, alt, type, caption, poster }: MediaSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (type !== 'video' || !videoRef.current) return;

    // Set up Intersection Observer for auto-play
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in view - play it
            videoRef.current?.play().catch(() => {
              // Ignore errors (user might have blocked autoplay)
            });
            setIsPlaying(true);
          } else {
            // Video is out of view - pause it
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
      }
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, [type]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="mb-10">
      <div className="relative w-full">
        {type === 'image' ? (
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        ) : (
          <>
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              className="w-full h-auto"
              loop
              muted
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              {alt}
            </video>

            {/* Pause/Play button - bottom-right corner */}
            <button
              onClick={togglePlayPause}
              className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                // Pause icon
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="3" width="3" height="10" fill="currentColor" />
                  <rect x="9" y="3" width="3" height="10" fill="currentColor" />
                </svg>
              ) : (
                // Play icon
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3L13 8L5 13V3Z" fill="currentColor" />
                </svg>
              )}
            </button>
          </>
        )}
      </div>

      {/* Caption - always visible, center-aligned below media */}
      {caption && (
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          {caption}
        </p>
      )}
    </div>
  );
}
