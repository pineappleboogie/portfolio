/**
 * FunItemGrid Component
 *
 * Renders a responsive grid of fun/playground items.
 * Features:
 * - Responsive grid layout (1 column on mobile, 2 on desktop)
 * - Maps through fun items and renders FunItemCard components
 */

import FunItemCard from './FunItemCard';
import type { FunItem } from '@/types/content';

interface FunItemGridProps {
  funItems: FunItem[];
}

export default function FunItemGrid({ funItems }: FunItemGridProps) {
  // No fun items to display
  if (funItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          No playground items to display.
        </p>
      </div>
    );
  }

  return (
    <>
      {funItems.map((funItem) => (
        <FunItemCard key={funItem.slug} funItem={funItem} />
      ))}
    </>
  );
}
