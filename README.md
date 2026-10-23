# Pacific West Home Builders - Astro Platform

High-performance, modern Astro web platform for **Pacific West Home Builders** (Southern California).

## Project Structure & Versions

This project houses both presentation versions for the client:

- **Option 1 (ADU Landing Page - v5):** Route `/`
  - High-conversion ADU landing page with interactive calculator, process timeline, custom mobile 2-column layout, and direct consultation CTA.
- **Option 2 (Corporate & Main Website - v6):** Route `/v6/` and `/v2/`
  - Comprehensive architectural home builder website featuring interactive ADU type accordion, sticky photo process scrollspy (with infinite auto-carousel on mobile), single-project mobile portfolio slider, client reviews with verified Yelp/Google badges, and lead capture form.
- **Thank You Page:** Route `/thank-you/`

## Tech Stack

- **Framework:** [Astro 4.x](https://astro.build/)
- **UI Components:** React 18 (`@astrojs/react`)
- **Styling:** Tailwind CSS + Design System Tokens (CSS Variables)
- **Deployment Ready:** Cloudflare Pages / Vercel / Netlify / Cloudways (PHP lead webhook proxy included in `public/api/submit-lead.php`)

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Lead Capture Endpoints

- **PHP Proxy:** `public/api/submit-lead.php`
- **Cloudflare Functions:** `functions/api/submit-lead.js`
