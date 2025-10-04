/**
 * Home Page
 *
 * The main landing page featuring:
 * - Hero section with introduction
 * - Featured work showcase
 * - About section with bio and images
 */

import Container from '@/components/layout/Container';
import CaseStudyGrid from '@/components/content/CaseStudyGrid';
import { getAllCaseStudies } from '@/lib/mdx';

export default function Home() {
  // Fetch all case studies - this runs on the server at build time
  const caseStudies = getAllCaseStudies();

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-foreground)] mb-6">
              Hi, I&apos;m{' '}
              <span className="text-gray-600 dark:text-gray-400">
                Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              A designer crafting thoughtful digital experiences. I focus on
              user-centered design, prototyping, and bringing ideas to life.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-4">
              Featured Work
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              A selection of projects showcasing my design process, problem-solving
              approach, and attention to detail.
            </p>
          </div>

          <CaseStudyGrid caseStudies={caseStudies} featuredOnly={true} />
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I&apos;m a designer passionate about creating meaningful digital
                  experiences. With a background in both visual design and user
                  research, I bring a holistic approach to every project.
                </p>
                <p>
                  When I&apos;m not designing, you&apos;ll find me exploring new creative
                  tools, sketching ideas, or working on personal projects that
                  push the boundaries of what&apos;s possible.
                </p>
                <p>
                  I believe great design is a blend of empathy, craft, and
                  continuous learning. Let&apos;s create something amazing together.
                </p>
              </div>
            </div>

            {/* Image Gallery - Placeholder for now */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <p className="text-sm">Image 1</p>
                </div>
              </div>
              <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <p className="text-sm">Image 2</p>
                </div>
              </div>
              <div className="col-span-2 aspect-[2/1] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <p className="text-sm">Image 3</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
