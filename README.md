# HavenCraft Home Improvement

A premium, conversion-focused home renovation web application built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Inspired by the high-efficiency customer acquisition model of top US home remodeling companies, featuring an original visual identity, multi-step lead generation engine, atomic server-side persistence, and comprehensive technical & local SEO.

---

## 🌟 Key Features

### 1. Brand Identity & Design System
- **Custom Color Palette:** Deep Forest Green (`#173D35`), Warm Sand (`#F3D8A0`), Soft Ivory (`#F7F6F1`), Charcoal (`#242824`).
- **Typography:** Inter sans-serif loaded with zero layout shift via `next/font/google`.
- **Honest Truth in Advertising:** Central configuration with zero fake reviews, false urgency countdowns, or unverified claims.

### 2. High-Converting User Journey
- **Ordered Homepage Flow:** Announcement bar, responsive header with services dropdown, split-hero with in-hero estimate request, 6-category interactive quick project selector, trust commitments, service grid, before/after comparison gallery, 4-step process timeline, operational differentiators, verified service pledge, interactive local service area map with ZIP checker, 5 educational guides, 8-question FAQ accordion, and final conversion section.
- **Global Estimate Modal:** Accessible anywhere across the site with prefilled service context.

### 3. Lead Capture & Persistence Engine
- **Server-Side API (`/api/leads`):** Real backend endpoint with strict server-side validation.
- **Atomic File Storage:** Persists leads to `data/leads.jsonl` (never isolated to browser storage).
- **Spam Defense:** Hidden honeypot field (`_company_hp`) traps automated bots while in-memory rate limiting prevents submission flooding.
- **UTM Attribution:** Automatically records `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, and referral source page.
- **TCPA Compliant:** Explicit, non-bundled consent checkboxes for consultation and promotional updates.
- **Outgoing Webhooks:** Ready for CRM ingestion (Zapier, HubSpot, Slack) via `LEAD_NOTIFICATION_WEBHOOK_URL`.

### 4. Technical & Local SEO
- **27 Prerendered Pages:**
  - Dedicated service pages: `/services/bathroom-remodeling`, `/services/kitchen-remodeling`, `/services/window-replacement`, `/services/door-installation`, `/services/flooring-installation`.
  - Educational guides: `/resources/how-to-plan-a-bathroom-remodel`, `/resources/what-affects-the-cost-of-kitchen-remodeling`, `/resources/signs-your-windows-may-need-replacing`, etc.
  - Core pages: `/projects`, `/about`, `/service-areas`, `/contact`, `/privacy-policy`, `/terms`.
- **Dynamic XML Sitemap:** Automatically generated at `/sitemap.xml`.
- **Robots Directives:** `/robots.txt` indexing public routes while protecting `/api/`.
- **Structured Data:** Full Schema.org JSON-LD (`HomeAndConstructionBusiness`, `PostalAddress`, `Service`, `Article`).

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ (Node 24 tested)
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/havencraft.git
cd havencraft

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build
```bash
# Compile and optimize production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```text
├── data/
│   └── leads.jsonl               # Physical server-side lead persistence
├── public/                       # Static public assets
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── leads/            # POST/GET lead submission API
│   │   │   └── service-check/    # ZIP availability API
│   │   ├── about/                # About company & Accessibility statement
│   │   ├── contact/              # Contact desk & consultation form
│   │   ├── privacy-policy/       # TCPA-compliant Privacy Policy
│   │   ├── projects/             # Renovation gallery & before/after stories
│   │   ├── resources/            # Homeowner guide directory & [slug] articles
│   │   ├── service-areas/        # Regional territory map & county list
│   │   ├── services/             # Services directory & [slug] service pages
│   │   ├── terms/                # Terms of use & estimate policies
│   │   ├── globals.css           # Tailwind CSS 4 theme & color tokens
│   │   ├── layout.tsx            # Root layout with font & JSON-LD schema
│   │   ├── page.tsx              # Homepage assembling all 15 sections
│   │   ├── robots.ts             # Dynamic robots.txt
│   │   └── sitemap.ts            # Dynamic sitemap.xml
│   ├── components/               # Modular UI components (Hero, Form, Modal, Gallery, FAQ)
│   ├── config/
│   │   └── siteConfig.ts         # Central configuration for brand, phone, hours, services
│   └── lib/
│       ├── analytics.ts          # Privacy-conscious GA4/GTM event tracking
│       └── leadStorage.ts        # Atomic file lead persistence & stats
├── .env.example                  # Environment variables template
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies & scripts
└── tsconfig.json                 # TypeScript strict configuration
```

---

## ⚙️ Configuration & Environment Variables

Copy `.env.example` to `.env.local` to configure optional production integrations:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical website domain (e.g. `https://www.havencrafthome.com`) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GTM_CONTAINER_ID` | Optional Google Tag Manager ID (`GTM-XXXXXXX`) |
| `LEAD_NOTIFICATION_WEBHOOK_URL` | Outgoing CRM webhook URL (e.g. Zapier, HubSpot, Slack) |
| `RESEND_API_KEY` | Optional transactional email key for instant confirmations |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Optional Google Maps API key for dynamic street view/routing |

All company details (phone numbers, office hubs, service regions, business hours, and services) can be updated anytime in [`src/config/siteConfig.ts`](src/config/siteConfig.ts).

---

## 📄 License
This project is licensed under the MIT License.
