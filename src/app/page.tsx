/**
 * Home Page
 *
 * The main landing page featuring:
 * - Hero section with introduction
 * - Featured work showcase
 * - About section with bio and images
 */

import Image from 'next/image';
import CaseStudyGrid from '@/components/content/CaseStudyGrid';
import { getAllCaseStudies } from '@/lib/mdx';

export default function Home() {
  // Fetch all case studies - this runs on the server at build time
  const caseStudies = getAllCaseStudies();

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Profile Image - 80x80 */}
          <div className="w-20 h-20 mb-6 rounded-full overflow-hidden">
            <Image
              src="/images/about/gabriel-profile.jpg"
              alt="Gabriel Chen profile photo"
              width={80}
              height={80}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="pb-1 text-xl md:text-2xl font-bold text-[var(--color-foreground)]">
            Gabriel Chen
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl">
          I'm a designer and maker of things. I believe design shapes relationships of people and software, so I do it with intention, care, and craft.
          </p>
        </div>
      </section>

      {/* Work Section - 2 Column Grid Layout */}
      <section id="work" className="py-20">
        {/* Mobile: stack vertically, Desktop: 2-column grid with 24px gap */}
        <div className="md:grid md:grid-cols-2 gap-6">
          {/* Left Column - Empty on desktop, hidden on mobile */}
          <div className="hidden md:block"></div>

          {/* Right Column - Section Heading */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 dark:text-gray-600">
              Work
            </h2>
          </div>

          {/* Case Studies - each takes full width of its column */}
          <CaseStudyGrid caseStudies={caseStudies} featuredOnly={true} />
        </div>
      </section>

      {/* About Section - 2 Column Grid Layout */}
      <section id="about" className="py-20">
        {/* Section Heading - Standalone, above the grid */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 dark:text-gray-600">
            About
          </h2>
        </div>

        {/* 2-column grid: Text first on mobile, Images (left) and Text (right) on desktop */}
        <div className="md:grid md:grid-cols-2 gap-6">
          {/* Text Content - Shows first on mobile, right side on desktop */}
          <div className="mb-6 md:mb-0 md:order-2">
            {/* Bio */}
            <div className="space-y-4 text-gray-600 dark:text-gray-400 max-w-lg">
              <p>
                I&apos;m a designer passionate about creating meaningful digital
                experiences. With a background in both visual design and user
                research, I bring a holistic approach to every project.

                Hello, I&apos;m Gabriel, a product designer who turn ideas into reality.
                I chase the flow where design feels like play: approaching problems with curiosity 
                while holding myself to a high standard of craft.
                I thrive in ambiguity and love distilling complexity into clarity for the people around me.
                Currently I lead design at Nas.io.
              </p>
              <p>
                I am drawn to any medium that lets me create—design, dance, LEGOs and currently code.
                I love seeing systems in things, recombining building blocks, and drawing unexpected connections.
              </p>
              <p>
              Outside of design you can find me dancing, 
              logging the days with my trusty Sony ZV1, 
              and hunting for delicious food and coffee.
              </p>
            </div>
          </div>

          {/* Image Gallery - Shows second on mobile, left side on desktop */}
          <div className="md:order-1">
            {/* Mobile: Single column stack */}
            <div className="flex flex-col gap-2 md:hidden">
              {/* 1. Main profile photo */}
              <div className="aspect-[3/4] overflow-hiddeng">
                <Image
                  src="/images/about/gabriel-about.jpeg"
                  alt="Gabriel Chen portrait"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 2. Baby photo */}
              <div className="aspect-square overflow-hiddeng">
                <Image
                  src="/images/about/gabriel-boy-computer.jpg"
                  alt="Gabriel as a child at a computer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 3. YouTube video embed */}
              <div>
                <div className="aspect-video overflow-hiddeng bg-black">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/l9NQt3Qz86M?modestbranding=1&rel=0&controls=1&showinfo=0"
                    title="A little dancing"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                  A little dancing
                </p>
              </div>
            </div>

            {/* Desktop: Masonry two-column layout */}
            <div className="hidden md:flex gap-2">
              {/* Left column of masonry */}
              <div className="flex-1 flex flex-col gap-2">
                {/* Baby photo - square */}
                <div className="aspect-square overflow-hiddeng">
                  <Image
                    src="/images/about/gabriel-boy-computer.jpg"
                    alt="Gabriel as a child at a computer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Travel photo - auto height */}
                <div className="overflow-hiddeng">
                  <Image
                    src="/images/about/gabriel-travel.jpeg"
                    alt="Gabriel traveling"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right column of masonry */}
              <div className="flex-1 flex flex-col gap-2">
                {/* Main profile photo - portrait */}
                <div className="aspect-[3/4] overflow-hiddeng">
                  <Image
                    src="/images/about/gabriel-about.jpeg"
                    alt="Gabriel Chen portrait"
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* YouTube video embed */}
                <div>
                  <div className="aspect-video overflow-hiddeng bg-black">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/l9NQt3Qz86M?modestbranding=1&rel=0&controls=1&showinfo=0"
                      title="A little dancing"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                    A little dancing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
