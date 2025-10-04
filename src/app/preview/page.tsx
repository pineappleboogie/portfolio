/**
 * Content Preview Page
 *
 * This page displays all your MDX content for preview and testing.
 * You can see the frontmatter data that's being parsed from your MDX files.
 */

import { getAllCaseStudies, getAllFunItems } from '@/lib/mdx';

export default function PreviewPage() {
  // Fetch all content using our utility functions
  const caseStudies = getAllCaseStudies();
  const funItems = getAllFunItems();

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Content Preview</h1>

        {/* Case Studies Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">
            Case Studies ({caseStudies.length})
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.slug}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{study.title}</h3>
                  {study.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-4">{study.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="font-medium">Slug:</span>
                    <code className="bg-gray-100 px-2 py-0.5 rounded">{study.slug}</code>
                  </div>

                  <div className="flex gap-2">
                    <span className="font-medium">Date:</span>
                    <span>{study.date}</span>
                  </div>

                  {study.client && (
                    <div className="flex gap-2">
                      <span className="font-medium">Client:</span>
                      <span>{study.client}</span>
                    </div>
                  )}

                  {study.role && (
                    <div className="flex gap-2">
                      <span className="font-medium">Role:</span>
                      <span>{study.role}</span>
                    </div>
                  )}

                  {study.tags && study.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap mt-3">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fun/Gallery Items Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-purple-600">
            Fun/Gallery Items ({funItems.length})
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {funItems.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.mediaType === 'video'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {item.mediaType}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="font-medium">Slug:</span>
                    <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">{item.slug}</code>
                  </div>

                  <div className="flex gap-2">
                    <span className="font-medium">Date:</span>
                    <span>{item.date}</span>
                  </div>

                  <div className="flex gap-2">
                    <span className="font-medium">Media:</span>
                    <code className="bg-gray-100 px-2 py-0.5 rounded text-xs break-all">
                      {item.mediaUrl}
                    </code>
                  </div>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap mt-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Debug Information */}
        <section className="mt-12 p-6 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Debug Info</h3>
          <div className="space-y-2 text-sm font-mono">
            <div>Total Case Studies: {caseStudies.length}</div>
            <div>Total Fun Items: {funItems.length}</div>
            <div>Featured Case Studies: {caseStudies.filter(s => s.featured).length}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
