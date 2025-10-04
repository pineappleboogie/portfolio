/**
 * Fun/Gallery Page
 *
 * Displays creative experiments, side projects, and fun work.
 * Features:
 * - Page header with introduction
 * - Gallery component with all fun items
 * - Responsive layout
 */

import Container from '@/components/layout/Container';
import Gallery from '@/components/content/Gallery';
import { getAllFunItems } from '@/lib/mdx';

export const metadata = {
  title: 'Fun - Portfolio',
  description: 'Creative experiments, side projects, and explorations',
};

export default function FunPage() {
  // Fetch all fun items - runs on server at build time
  const funItems = getAllFunItems();

  return (
    <div className="py-12">
      <Container>
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-4">
            Fun & Experiments
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            A collection of creative explorations, side projects, and
            experiments. This is where I play with new ideas, tools, and
            techniques outside of client work.
          </p>
        </div>

        {/* Gallery */}
        <Gallery items={funItems} />
      </Container>
    </div>
  );
}
