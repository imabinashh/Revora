# Product Requirements Document (PRD)
**Project Name:** Revora
**Business Category:** Premium Automotive Detailing & Service Platform
**Document Version:** 1.0

---

## 1. Executive Summary
**Product Vision:** Revora is the modern operating system for car care. It serves as a premium, digital-first marketplace that connects car owners with highly vetted automotive detailing and service specialists.
**The Core Problem:** The local automotive service industry is heavily fragmented. Car owners face a lack of transparent pricing, tedious booking processes (calling multiple garages), and anxiety over trust and quality. 
**Primary Business Value:** Revora solves this by providing a unified, trustworthy platform to discover, compare, and schedule premium automotive services. By combining the aesthetic of a luxury car configurator with the frictionless booking flow of a modern SaaS application, Revora will drive high-value local appointments, capture subscription leads (Revora Care), and build immense brand authority in the automotive care space.

---

## 2. Target Personas

**Persona 1: The "Time-Starved" Professional (Convenience Seeker)**
*   **Demographics:** 30-50 years old, high disposable income, drives a premium daily commuter (e.g., BMW 3 Series, Audi A4).
*   **Pain Points:** Doesn't have time to wait at a mechanic or detailer. Hates the back-and-forth of phone calls to check availability.
*   **Digital Behaviors:** Expects frictionless digital experiences (Uber, Airbnb). Relies heavily on mobile booking, instant confirmations, and mobile detailing services ("We come to you").

**Persona 2: The "Enthusiast" (Trust & Quality Seeker)**
*   **Demographics:** 25-45 years old, passionate about cars, drives a sports car or heavily modified vehicle.
*   **Pain Points:** Highly skeptical of generic "local garages." Fears paint damage from cheap detailing. Needs to know exactly what products (e.g., specific ceramic coating brands) are being used.
*   **Digital Behaviors:** Reads technical specs, relies on visual proof (before/after galleries), and heavily scrutinizes Google Reviews and detailed service matrices before booking.

---

## 3. User Stories
*   **As a busy professional**, I want to filter service centers by "Mobile Detailing" or "Pickup & Drop" so that I don't have to leave my office to get my car serviced.
*   **As a car enthusiast**, I want to view a side-by-side comparison of detailing packages (Essential vs. Signature vs. Ultimate) so that I understand exactly what treatments my vehicle will receive.
*   **As a prospective user**, I want to interact with a before/after slider on the Ceramic Coating page so that I can visually verify the quality of the service.
*   **As a new customer**, I want to see Google Reviews, Trust Badges, and staff bios for local service centers so that I feel confident handing over my keys.
*   **As a returning user**, I want to save my vehicle details (Make, Model, Year, Mileage) in "My Garage" so that I receive smart service reminders and can book future appointments in under 3 clicks.
*   **As a mobile user**, I want a sticky "WhatsApp Us" button so that I can quickly ask a question about scratch removal without filling out a long form.

---

## 4. Sitemap & Information Architecture

**Main Navigation:**
*   **Home** (Hero booking widget, featured categories, trust elements)
*   **Services** (Mega-menu: Routine, Diagnostics, Detailing, Protection, Interior)
*   **Packages** (Tiered pricing comparisons)
*   **Service Centers** (Local directory with map UI)
*   **How It Works**
*   **Revora Care** (Membership/Subscription)

**User Portal:**
*   **My Garage** (Saved vehicles, service history, recommended maintenance)

**Footer:**
*   **Company Info** (About, Contact, Careers)
*   **Local SEO Pages** (e.g., "Ceramic Coating in [City]", "Mobile Detailing in [City]")
*   **Legal** (Terms, Privacy)
*   **NAP Data** (Revora HQ Name, Address, Phone, Operating Hours)

---

## 5. Functional Requirements

### 5.1 The Booking Engine (Core Feature)
*   **Multi-Step UI:** A frictionless, wizard-style booking flow:
    1.  *Select Vehicle* (Manual entry or select from "My Garage").
    2.  *Choose Service* (Dropdown or visual cards).
    3.  *Select Location* (Choose preferred partner garage or mobile service).
    4.  *Select Date & Time* (Integration with available calendar slots).
    5.  *Confirm & Pay* (Total estimate, deposit collection).

### 5.2 Package Comparison & Visual Proof
*   **Tiered Comparison Cards:** Feature "Essential", "Signature", and "Ultimate" packages using sticky table headers on desktop and collapsible accordions on mobile.
*   **Before/After Image Sliders:** Interactive sliders using a touch-friendly component (e.g., `react-compare-slider`) on service pages (Paint Correction, Headlight Restoration) to visually demonstrate value.

### 5.3 Local Business Conversion Elements (CRITICAL)
*   **NAP & Contact:** Global header and footer must feature strict NAP (Name, Address, Phone) formatting for Local SEO. Click-to-call functionality (`tel:` links) enabled on all phone numbers for mobile users.
*   **Interactive Maps:** The "Service Centers" page must feature an embedded, interactive Google Map displaying pins of partner garages, complete with their specific Operating Hours and distance from the user's location.
*   **Sticky CTA & Routing:** A sticky bottom bar on mobile devices containing "Book Service" and "WhatsApp Chat" buttons. WhatsApp API routing pre-fills the user's current page URL for context.
*   **Frictionless Lead Forms:** Inquiry forms (e.g., "Request Custom Quote") restricted to a maximum of 3 fields: Name, Phone Number, and Vehicle Model.
*   **Trust Architecture:** 
    *   Live Google Reviews API widget integration on the homepage and specific garage pages.
    *   "Certified Specialist" bios on garage detail pages.
    *   Trust Badges (e.g., "Gyeon Certified", "3M Authorized") prominently displayed.
*   **Localized Content:** Dedicated service pages (e.g., `revora.com/services/ceramic-coating`) containing Localized FAQs using Schema markup.

---

## 6. Non-Functional Requirements

### 6.1 Performance
*   **Framework:** Next.js (React) using Static Site Generation (SSG) for marketing pages and Server-Side Rendering (SSR) for the Service Center directory.
*   **Metrics:** Sub-3-second Largest Contentful Paint (LCP) and 100/100 Lighthouse Performance score.
*   **Assets:** Heavy use of `next/image` for automatic WebP/AVIF compression of high-res automotive photography.

### 6.2 Technical SEO
*   **Schema Markup:** Strict implementation of JSON-LD for:
    *   `LocalBusiness` and `AutoRepair` (for partner garages).
    *   `Service` (for detailing packages).
    *   `FAQPage` (for localized FAQs).
*   **Semantic HTML:** Proper hierarchy of `<h1>`, `<h2>`, `<article>`, and `<nav>` tags. 

### 6.3 Accessibility & Responsiveness
*   **Mobile-First:** The UI must be optimized for smartphones first, utilizing bottom-sheet modals for filters and selections to accommodate one-handed use.
*   **Accessibility (a11y):** WCAG 2.1 AA compliance. Ensure contrast ratios in the "Dark Mode" theme meet readability standards. All form inputs must have explicit `<label>` tags.

---

## 7. Design & UI/UX Guidelines

*   **Vibe:** Premium, modern, automotive, trustworthy. Think *Porsche Configurator meets Premium SaaS*.
*   **Color Palette:**
    *   *Backgrounds:* Deep Charcoal (`#0A0A0A`) to near-black (`#121212`).
    *   *Typography:* Off-white (`#F5F5F5`) for primary text, muted slate (`#888888`) for secondary text.
    *   *Accents:* Metallic Silver (`#E0E0E0`) for borders; Electric Lime (`#CCFF00`) or Racing Blue (`#0055FF`) for primary CTAs and active states.
*   **Typography:** A technical, geometric sans-serif (e.g., `Space Grotesk` for headers, `Inter` for body copy).
*   **UI Components:**
    *   *Glassmorphism:* Use `backdrop-blur-md` and semi-transparent white/grey backgrounds (`bg-white/5`) for floating cards and navigation bars.
    *   *Borders:* Hairline borders (`border-gray-800`) to separate sections without cluttering the UI.
    *   *Spacing:* Generous use of whitespace (CSS Grid gaps) to let large automotive photography breathe.

---

## 8. Future Scope (v2.0)

1.  **AI Damage Assessment:** Allow users to upload a photo of a scratch or dent; utilize a vision API to provide an instant, automated repair estimate and recommend the correct paint correction package.
2.  **Partner SaaS Dashboard:** Build out a dedicated portal for the automotive specialists to manage their incoming Revora bookings, adjust availability, and track revenue.
3.  **Revora Care Subscription Rollout:** Fully launch the ₹799/month subscription model, integrating automated recurring billing (Stripe) and push notifications for monthly premium washes and priority booking access.