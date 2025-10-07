/**
 * Playground Page
 *
 * Displays all fun/playground items in a 2-column grid layout.
 * Features:
 * - Section heading with descriptive text
 * - Full-width 2-column grid matching the Work section layout
 * - Displays all fun items sorted by date
 */

import FunItemGrid from '@/components/content/FunItemGrid';
import { getAllFunItems } from '@/lib/mdx';

export default function PlaygroundPage() {
  // Fetch all fun items - this runs on the server at build time
  const funItems = getAllFunItems();

  return (
    <>
      {/* Playground Section */}
      <section className="py-20">
        {/* Section Heading - Left aligned on desktop */}
        <div className="md:grid md:grid-cols-2 gap-6 mb-8">
          {/* Left Column - Heading and description */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 dark:text-gray-600 mb-4">
              Playground
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              A collection of experiments, explorations, and creative side projects.
              This is where I play with new ideas, tools, and techniques.
            </p>
          </div>

          {/* Right Column - Empty */}
          <div></div>
        </div>

        {/* Fun Items Grid - Full width 2-column grid */}
        <div className="md:grid md:grid-cols-2 gap-6">
          <FunItemGrid funItems={funItems} />
        </div>
      </section>
    </>
  );
}
