# The Hominians - Landing Page

The Hominians is a social impact organization dedicated to elevating the lives of others and supporting underserved communities. This website showcases our mission and introduces our flagship product, **TasteMap**.

## About

The Hominians focuses on creating meaningful social impact through innovative solutions. Our flagship project, TasteMap, connects tourists with authentic local Thai markets, bridging the gap between visitors and traditional Thai culture while supporting local vendors and communities.

## Technology Stack

- **Framework**: [Astro](https://astro.build) 5.1.10
- **Deployment**: [Vercel](https://vercel.com) (Static Site)
- **Package Manager**: pnpm
- **TypeScript**: Strict mode enabled
- **Styling**: Custom CSS with responsive design

## Project Structure

```
/
├── public/                    # Static assets
│   ├── fonts/                 # TT Norms Pro font family
│   ├── Partners/              # Partner organization logos (12 partners)
│   ├── team/                  # Team member profile images
│   ├── heading-photo.png      # Hero section image
│   └── mockups.svg            # TasteMap app mockups
├── src/
│   ├── components/            # Reusable Astro components
│   │   ├── Navbar.astro       # Responsive navigation bar
│   │   └── Welcome.astro      # Main landing page content
│   ├── layouts/
│   │   └── Layout.astro       # Base page layout template
│   └── pages/
│       └── index.astro        # Home page
├── astro.config.mjs           # Astro configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Project metadata & scripts
```

## Features

### Website Sections

1. **Hero Section**: Introduction to The Hominians with mission statement
2. **Solution Section**: Showcase of TasteMap and our partnerships
3. **Team Section**: Meet our 6-member team
4. **Contact Section**: Get in touch via email or social media

### Interactive Elements

- Responsive navigation with mobile hamburger menu
- Smooth scrolling anchor navigation
- "Back to Top" button with smooth scroll animation
- Fully responsive design (desktop, tablet, mobile)

### Partnerships

We collaborate with 12 organizations including:

- APEC
- ETDA (Electronic Transactions Development Agency)
- Chulalongkorn University
- UNDP
- And more...

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (preferred) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd TheHominians-Landing
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Start the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## Available Commands

All commands are run from the root of the project:

| Command        | Action                                      |
| -------------- | ------------------------------------------- |
| `pnpm install` | Installs dependencies                       |
| `pnpm dev`     | Starts local dev server at `localhost:4321` |
| `pnpm build`   | Builds production site to `./dist/`         |
| `pnpm preview` | Preview production build locally            |
| `pnpm astro`   | Run Astro CLI commands                      |

> Note: You can replace `pnpm` with `npm` if preferred.

## Deployment

This project is configured for deployment on Vercel using the static adapter:

1. The site is automatically deployed on push to the main branch
2. Build output is generated as static HTML in the `./dist/` directory
3. Vercel configuration is managed via `astro.config.mjs`

### Manual Deployment

```bash
pnpm build
# Deploy the ./dist/ directory to your hosting provider
```

## Team

- Airada Songpatthanayuth
- Benedict Boisclair
- Neeranut Panthumas
- Kawisara Saikaew
- Tanatat Khuttapan
- Suwapat Kongchan

## Contact

**Email**: airadasongpat@gmail.com

**Social Media**:

- [Facebook](https://www.facebook.com/thehominians/)
- [Instagram](https://www.instagram.com/thehominians/)
- [LinkedIn](https://www.linkedin.com/company/the-hominians/)

## License

Copyright © 2025 The Hominians Limited Co. All rights reserved.

## About TasteMap

TasteMap is our flagship product that aims to connect tourists with authentic local Thai markets. By bridging the gap between visitors and traditional Thai culture, we help support local vendors while providing tourists with genuine cultural experiences.
