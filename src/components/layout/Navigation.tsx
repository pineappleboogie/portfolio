/**
 * Navigation Component
 *
 * The main navigation header that appears on all pages.
 * Features:
 * - Logo/name on the left
 * - Navigation links (Home, Work, Fun)
 * - Responsive design with mobile hamburger menu
 * - Smooth scroll to About section
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track which section is currently in view
  const [activeSection, setActiveSection] = useState<'work' | 'about'>('work');

  // Intersection Observer to track section visibility
  useEffect(() => {
    // Only run on homepage where sections exist
    if (pathname !== '/') return;

    // Get nav height from CSS custom property
    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
    );

    // Map to track visibility of all sections - initialize with known sections
    const sectionVisibility = new Map<string, number>();
    ['work', 'about'].forEach(id => sectionVisibility.set(id, 0));

    // Helper to find and set the most visible section
    const updateActiveSection = () => {
      let maxRatio = -1; // Start at -1 to detect if nothing is visible
      let mostVisibleId: 'work' | 'about' = 'work'; // Fallback to work

      sectionVisibility.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleId = id as 'work' | 'about';
        }
      });

      setActiveSection(mostVisibleId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Update visibility map with current intersection ratios
        entries.forEach(entry => {
          sectionVisibility.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        });

        updateActiveSection();
      },
      {
        // Check intersection at multiple visibility levels for accuracy
        threshold: [0, 0.25, 0.5, 0.75, 1],
        // Account for sticky nav height - use dynamic value from CSS
        rootMargin: `-${navHeight}px 0px 0px 0px`
      }
    );

    // Observe specific sections
    const workSection = document.getElementById('work');
    const aboutSection = document.getElementById('about');

    if (workSection) observer.observe(workSection);
    if (aboutSection) observer.observe(aboutSection);

    // Initial visibility check - handles page load at any scroll position
    const checkInitialVisibility = () => {
      [workSection, aboutSection].forEach(section => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate visible portion of section
        const visibleTop = Math.max(rect.top, navHeight);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const sectionHeight = rect.height;
        const ratio = sectionHeight > 0 ? visibleHeight / sectionHeight : 0;

        sectionVisibility.set(section.id, ratio);
      });

      updateActiveSection();
    };

    // Run initial check immediately (handles bookmarks, back button, etc.)
    checkInitialVisibility();

    // Cleanup when component unmounts or pathname changes
    return () => observer.disconnect();
  }, [pathname]);

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    // For page routes (/fun), check pathname first
    if (path === '/fun' || path === '/preview') {
      return pathname.startsWith(path);
    }

    // For anchor links (/#work, /#about), only check if we're on homepage
    if (path.includes('#')) {
      if (pathname !== '/') return false; // Not on homepage, so anchor links aren't active
      const sectionId = path.split('#')[1];
      return activeSection === sectionId;
    }

    return false;
  };

  // Handle anchor link clicks - native CSS smooth scrolling handles the rest
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle anchor links on the same page
    if (!href.includes('#')) return;

    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  // Navigation links configuration
  const navLinks = [
    { href: '/#work', label: 'Work' },
    { href: '/#about', label: 'About' },
    { href: '/fun', label: 'Fun' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link
            href="/"
            className="text-xl font-semibold text-[var(--color-foreground)] hover:opacity-70 transition-opacity"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${
                  isActive(link.href)
                    ? 'text-orange-500'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // Close icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-orange-50 dark:bg-orange-950 text-orange-500'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
