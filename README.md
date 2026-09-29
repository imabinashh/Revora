# REVORA — Automotive Care, Refined

> An editorial luxury automotive preservation and detailing platform designed with digital simplicity and microscopic precision.

---

## ✦ Overview

**REVORA** re-engineers automotive preservation into a seamless, high-end digital journey. Built with bespoke design tokens, fluid typography, dark glassmorphism, and micro-interactions, the platform enables vehicle collectors and enthusiasts to explore ceramic coatings, microscopic paint correction, certified cleanroom atelier directories, and mobile doorstep detailing.

---

## ✦ Key Features

* **Interactive Hero Spotlight Reveal:** Custom dynamic radial mask following cursor movements to reveal the refined, illuminated vehicle state with chromatic aura rings.
* **Cinematic Scroll-Driven Storytelling:** Smooth expansion of a 4K resolution scene from a compact 9:16 portrait frame into an immersive full-screen panorama with floating editorial metadata.
* **Interactive Certified Service Centers:** Multi-tab interactive directory showcasing cleanroom ateliers with live bay capacity, dust-free ISO ratings, and specialist certifications.
* **Autonomous Mobile Detailing Rig:** Dedicated showcase for on-site concourse detailing units equipped with reverse osmosis water and silent power.
* **My Garage Digital Twin Telemetry:** Live ceramic shield health tracking (94% Gyeon Infinite), service countdowns, and quick appointment booking.
* **REVORA Care Club (VIP Black Tier):** Exclusive monthly membership pass with transparent perks, priority scheduling, and doorstep concierge.
* **Editorial Dark Aesthetic:** Fine-tuned typography (`Clash Display`, `Outfit`, `JetBrains Mono`), obsidian glass panels, sub-micron tolerance callouts, and pure monochrome luxury palette.

---

## ✦ Tech Stack

* **Markup:** Semantic HTML5 with accessible ARIA tags and optimized meta attributes
* **Styling:** Modern Vanilla CSS3
  * Custom Design Tokens (HSL/RGB variables)
  * CSS Grid & Subgrid Layouts
  * Backdrop filters, radial lighting, and glassmorphism
  * Fluid typography with `clamp()`
* **Logic:** Modular Modern Vanilla JavaScript (ES6 Modules)
  * Scroll-driven timeline interpolation (Lerp / quadratic ease)
  * Cursor-tracking dynamic CSS custom properties
  * Tabbed media state switches
* **Tooling:** [Vite](https://vitejs.dev/) for lightning-fast HMR and production bundling

---

## ✦ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/revora.git
   cd revora
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## ✦ Project Structure

```text
Revora/
├── Assets/                        # High-resolution media, photography & assets
│   ├── Base-Image.png             # Hero baseline car layer (2198x1236)
│   ├── Reveal-Image.png           # Hero spotlight reveal layer (2198x1236)
│   ├── story-supra-4k.jpg         # 4K scroll-driven exhibition asset (3840x2143)
│   ├── garage-porsche-gt3.jpg     # My Garage Porsche 911 GT3 preview
│   ├── membership-care-club.jpg   # VIP Black Tier Member Card
│   ├── mobile-detailing-van.jpg   # Mobile detailing sprinter unit
│   └── service-*.jpg              # Curated service category imagery
├── index.html                     # Main application entry point
├── style.css                      # Core design system, tokens, and components
├── main.js                        # Interactions, scroll math, and tab switching
├── package.json                   # Project metadata and build scripts
└── README.md                      # Documentation
```

---

## ✦ Author

Designed with 🤍 by **Abinash**
