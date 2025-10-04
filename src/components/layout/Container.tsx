/**
 * Container Component
 *
 * A reusable layout wrapper that provides consistent max-width and padding
 * across the application. This ensures content doesn't stretch too wide on
 * large screens and maintains proper spacing on all devices.
 *
 * Usage:
 * <Container>
 *   <YourContent />
 * </Container>
 */

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string; // Allow additional custom classes
  size?: 'sm' | 'md' | 'lg' | 'xl'; // Different max-width options
}

export default function Container({
  children,
  className = '',
  size = 'xl',
}: ContainerProps) {
  // Map size to Tailwind max-width classes
  const sizeClasses = {
    sm: 'max-w-3xl', // ~768px - good for blog posts or narrow content
    md: 'max-w-5xl', // ~1024px - good for medium layouts
    lg: 'max-w-6xl', // ~1152px - good for wider layouts
    xl: 'max-w-7xl', // ~1280px - default, matches nav/footer width
  };

  return (
    <div
      className={`${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
