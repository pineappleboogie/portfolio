import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure MDX file extensions to be treated as pages
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // Turbopack configuration for MDX
  turbopack: {
    rules: {
      '*.mdx': {
        loaders: ['@mdx-js/loader'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
