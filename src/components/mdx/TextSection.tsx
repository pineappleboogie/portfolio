/**
 * TextSection Component
 *
 * A flexible text component for case study MDX content that supports:
 * - Three text types: eyebrow (small label), headline (large title), body (paragraph)
 * - Two layout modes: centered or two-column (left/right aligned)
 * - Automatic ID generation from eyebrow for Table of Contents anchoring
 * - Optimal readability with max-width of 640px
 */

interface TextSectionProps {
  eyebrow?: string; // Small label text (e.g., "The Challenge", "Solution")
  headline?: string; // Large heading text
  body?: string; // Paragraph content
  align?: 'center' | 'left' | 'right'; // Text alignment
  column?: 'left' | 'right'; // Two-column layout positioning
  id?: string; // Custom ID for anchoring (auto-generated from eyebrow if not provided)
}

/**
 * Converts text to URL-friendly slug for anchor IDs
 * Example: "The Challenge" -> "the-challenge"
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function TextSection({
  eyebrow,
  headline,
  body,
  align = 'left',
  column,
  id,
}: TextSectionProps) {
  // Generate ID from eyebrow text if no custom ID provided
  const sectionId = id || (eyebrow ? slugify(eyebrow) : undefined);

  // Determine layout classes based on column prop
  const layoutClasses = column
    ? 'md:grid md:grid-cols-2 gap-6' // Two-column layout
    : 'flex justify-center'; // Centered layout

  // Text alignment classes
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  }[align];

  // Content wrapper with max-width for readability
  const contentClasses = `max-w-[640px] ${alignClasses}`;

  return (
    <section
      id={sectionId}
      className={`mb-10 ${layoutClasses}`}
    >
      {/* Empty left column for two-column layout when content is on the right */}
      {column === 'right' && <div />}

      <div className={column ? '' : contentClasses}>
        {/* Eyebrow text - small label */}
        {eyebrow && (
          <p
            data-eyebrow
            className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3"
          >
            {eyebrow}
          </p>
        )}

        {/* Headline - large heading */}
        {headline && (
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {headline}
          </h2>
        )}

        {/* Body text - paragraph content */}
        {body && (
          <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {body}
          </p>
        )}
      </div>

      {/* Empty right column for two-column layout when content is on the left */}
      {column === 'left' && <div />}
    </section>
  );
}
