# Pratap.dev Portfolio

A responsive, animated developer portfolio built with React and Vite. The interface uses a dark futuristic theme to showcase products, technical services, freelance client work, and contact details.

## Features

- Responsive desktop, tablet, and mobile layouts
- Product showcases for HostelMint and CodeWithMe
- Freelance project gallery with client logos
- Scroll-triggered section and staggered card reveals
- Pointer-based 3D card tilt and interactive lighting
- Animated hero artwork, stars, neon borders, progress bar, and wireframe cube
- Active-section navigation and smooth scrolling
- Reduced-motion support for accessibility

## Tech stack

- React
- Vite
- Lucide React icons
- Modern CSS animations and responsive layouts

## Local development

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Vite will print the local development URL, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The optimized output is generated in `dist/`.

## Project structure

```text
portfolio/
├── public/
│   ├── client-logos/       # Freelance project branding
│   └── reference.png       # Hero visual source
├── src/
│   ├── App.jsx             # Page content, components, and interactions
│   ├── main.jsx            # React entry point
│   └── styles.css          # Layout, theme, responsive rules, and animation
├── index.html
├── package.json
└── vite.config.js
```

## Customization

- Edit portfolio content, project names, links, and client data in `src/App.jsx`.
- Update colors, spacing, breakpoints, and animation timing in `src/styles.css`.
- Place new client logos in `public/client-logos/` and add them to the `freelanceProjects` array.
- Replace the placeholder GitHub, LinkedIn, email, and résumé links before deployment.

## Animation accessibility

The site respects the operating system's `prefers-reduced-motion` setting. Continuous motion, scroll reveals, 3D tilt, and decorative effects are disabled when reduced motion is requested.
