/**
 * SectionHeading Component
 *
 * A reusable component for large section headings.
 * Used for major sections like "Work", "About", etc.
 *
 * Features:
 * - Large, bold typography for visual hierarchy
 * - Consistent styling across all sections
 * - Proper spacing and responsive sizing
 */

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] ${className}`}>
      {children}
    </h2>
  );
}
