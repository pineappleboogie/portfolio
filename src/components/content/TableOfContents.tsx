'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  /** The content container selector to scan for headings */
  containerSelector?: string
}

/**
 * TableOfContents Component
 *
 * A collapsible sidebar that displays a navigation menu based on the page's
 * heading structure. Features:
 * - Extracts headings from the page content automatically
 * - Highlights active section based on scroll position
 * - Smooth anchor scrolling to sections
 * - Collapsible on mobile and desktop
 * - Fixed position on desktop, overlay on mobile
 */
export default function TableOfContents({
  containerSelector = '.prose'
}: TableOfContentsProps) {
  const [items, setItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // Extract headings from the content on mount
  useEffect(() => {
    const extractHeadings = () => {
      // Look for all sections with IDs (created by TextSection eyebrow)
      const sections = document.querySelectorAll('[id]')
      const tocItems: TOCItem[] = []

      sections.forEach((section) => {
        const id = section.getAttribute('id')
        if (!id || id === 'work' || id === 'about') return // Skip nav sections

        // Try to find eyebrow text (the label that was used to create the ID)
        const eyebrow = section.querySelector('[data-eyebrow]')
        if (eyebrow) {
          tocItems.push({
            id,
            text: eyebrow.textContent || '',
            level: 1
          })
        }
      })

      setItems(tocItems)
    }

    // Wait a bit for MDX content to render
    const timer = setTimeout(extractHeadings, 100)
    return () => clearTimeout(timer)
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    if (items.length === 0) return

    const sectionVisibility = new Map<string, number>()

    // Pre-initialize with known sections
    items.forEach(item => {
      sectionVisibility.set(item.id, 0)
    })

    const updateActiveSection = () => {
      // Find the section with highest visibility ratio that's above threshold
      let maxRatio = 0
      let mostVisibleId = ''

      sectionVisibility.forEach((ratio, id) => {
        if (ratio > maxRatio && ratio > 0.1) { // Only consider sections with >10% visibility
          maxRatio = ratio
          mostVisibleId = id
        }
      })

      // Only update if we found a visible section
      if (mostVisibleId) {
        setActiveId(mostVisibleId)
      }
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id')
        if (id) {
          sectionVisibility.set(id, entry.intersectionRatio)
        }
      })
      updateActiveSection()
    }

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-120px 0px -40% 0px', // Account for nav and focus on upper portion
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
    })

    // Observe all sections
    items.forEach(item => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
        // Get initial visibility
        const rect = element.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0))
        const ratio = rect.height > 0 ? visibleHeight / rect.height : 0
        sectionVisibility.set(item.id, ratio)
      }
    })

    updateActiveSection()

    return () => observer.disconnect()
  }, [items])

  // Handle anchor scroll
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 80 // Height of fixed navigation
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - navHeight - 24

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      setActiveId(id)
    }
  }

  // Don't render if no items
  if (items.length === 0) return null

  return (
    <aside
      className="
        hidden md:block
        sticky z-30
        top-24 h-[calc(100vh-6rem)] w-

      "
    >
      <nav className="h-full overflow-y-auto py-6">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`
                  block text-sm py-1 px-2 transition-colors
                  ${activeId === item.id
                    ? 'text-foreground font-medium'
                    : 'text-foreground/60 hover:text-foreground'
                  }
                `}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
