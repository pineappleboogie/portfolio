# Images Directory

This directory should contain all images for your portfolio.

## Expected Structure

```
images/
├── about/           # Images for About section (personal photos, etc.)
├── case-studies/    # Cover images and screenshots for case studies
└── fun/            # Images and thumbnails for fun/gallery items
```

## Adding Images

1. Place your images in the appropriate subdirectory
2. Reference them in MDX files using absolute paths starting with `/images/`
3. Example: `/images/case-studies/project-alpha-cover.jpg`

## Image Requirements

- **Case Study Covers**: Recommended 1600x900px (16:9 ratio)
- **Gallery Items**: Recommended 1200x1200px (square)
- **About Photos**: Flexible, but keep under 2MB for optimal performance

## Image Optimization

Next.js automatically optimizes images when you use the `<Image>` component. It will:
- Resize images for different screen sizes
- Convert to modern formats (WebP/AVIF)
- Lazy load images as users scroll
- Blur up low-quality placeholders while loading
