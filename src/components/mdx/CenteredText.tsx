interface CenteredTextProps {
  children: React.ReactNode;
}

/**
 * CenteredText component for displaying large, centered highlight text
 *
 * Use this for key statements, pull quotes, or important callouts in case studies.
 * Creates visual emphasis and breaks up dense content sections.
 *
 * Features:
 * - Large, bold typography for emphasis
 * - Center-aligned text
 * - Max-width 640px for optimal readability
 * - 40px vertical spacing (mb-10)
 *
 * Example usage in MDX:
 * <CenteredText>
 *   "This design reduced user errors by 60%"
 * </CenteredText>
 */
export function CenteredText({ children }: CenteredTextProps) {
  return (
    <div className="mb-10 flex justify-center">
      <p className="text-2xl md:text-3xl font-bold text-center max-w-[640px] leading-tight">
        {children}
      </p>
    </div>
  );
}
