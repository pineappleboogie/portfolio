/**
 * Section Component
 *
 * A reusable wrapper for page sections that provides:
 * - Consistent vertical spacing
 * - Optional background colors
 * - Semantic HTML structure with section tags
 * - ID support for anchor navigation
 *
 * Usage:
 * <Section id="work" background="alternate">
 *   <YourContent />
 * </Section>
 */

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string; // For anchor navigation
  className?: string; // Additional custom classes
  background?: 'default' | 'alternate'; // Background color variants
}

export default function Section({
  children,
  id,
  className = '',
  background = 'default',
}: SectionProps) {
  // Map background variants to Tailwind classes
  const backgroundClasses = {
    default: '',
    alternate: 'bg-gray-50 dark:bg-gray-900/50',
  };

  return (
    <section
      id={id}
      className={`py-20 ${backgroundClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
