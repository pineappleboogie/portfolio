/**
 * CaseStudyGrid Component
 *
 * Renders a responsive grid of case study cards.
 * Features:
 * - Responsive grid layout (1 column on mobile, 2-3 on desktop)
 * - Optional filtering to show only featured items
 * - Maps through case studies and renders CaseStudyCard components
 */

import CaseStudyCard from './CaseStudyCard';
import type { CaseStudy } from '@/types/content';

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
  featuredOnly?: boolean; // If true, only show featured case studies
  columns?: 2 | 3; // Number of columns on desktop
}

export default function CaseStudyGrid({
  caseStudies,
  featuredOnly = false,
  columns = 3,
}: CaseStudyGridProps) {
  // Filter case studies if featuredOnly is true
  const displayedCaseStudies = featuredOnly
    ? caseStudies.filter((cs) => cs.featured)
    : caseStudies;

  // No case studies to display
  if (displayedCaseStudies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          No case studies to display.
        </p>
      </div>
    );
  }

  // Tailwind grid column classes based on columns prop
  const gridColumns = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
  };

  return (
    <>
      {displayedCaseStudies.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
      ))}
    </>
  );
}
