# CGBS first 2026

A React + Vite + Tailwind CSS marketing site for Canopus GBS — same *page model*
as the CloudifyOps reference (animated hero, 3-pillar section, services grid,
products showcase, testimonials, insights, case studies, final CTA) rebuilt
with its own distinct navy/gold visual identity and your exact navigation
structure.

## Open in VS Code

1. Unzip this folder and open it in VS Code (`File → Open Folder…`).
2. Open a terminal (`` Ctrl+` ``) and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local URL it prints (usually `http://localhost:5173`).

## Navigation

```
Home
SAP
  ├─ SAP Solutions
  └─ SAP Managed Services
Digital Services
  ├─ Digital Infrastructure / Cloud
  ├─ Cybersecurity / Digital Trust
  ├─ Data, Analytics / AI
  └─ Digital Workplace / Automation
Innovation & Products
  ├─ CarinAI
  ├─ VegAI
  └─ SmartOps
About Us
Resources
  ├─ Blogs / FAQ
  └─ Case Studies
```

Logo sits on the left of the nav bar. Every dropdown link scrolls straight to
its matching section/card on the page (they're plain in-page anchors — swap
them for real routes later if you split this into multiple pages).

## What's inside

```
CGBS-first-2026/
├── index.html
├── package.json
├── tailwind.config.js      # navy/gold color tokens + hero animation keyframes
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Assembles every section, in page order
    ├── index.css           # Tailwind directives + small shared utility classes
    ├── data.js             # ALL copy text + nav structure in one file
    ├── assets/
    │   └── canopus-logo-landscape.png
    └── components/
        ├── Navbar.jsx / .css       # Logo left, mega-menu dropdowns, mobile menu
        ├── Hero.jsx / .css         # Animated gradient blobs + drifting grid + particles
        ├── Pillars.jsx / .css      # 3-pillar section (Transform / Modernize / Automate)
        ├── Services.jsx / .css     # Digital Services grid
        ├── Products.jsx / .css     # CarinAI / VegAI / SmartOps showcase
        ├── ImpactStats.jsx / .css  # 60% / 40% / 99.9% / 3x impact numbers
        ├── About.jsx / .css        # About Us section
        ├── Testimonials.jsx / .css # Customer Speaks carousel
        ├── Blogs.jsx / .css        # Insights / blog cards
        ├── CaseStudies.jsx / .css  # Case study cards
        ├── FAQ.jsx / .css          # Accordion FAQ
        ├── CTA.jsx / .css          # Final call-to-action banner
        └── Footer.jsx / .css       # Footer with link columns + legal
```

## Editing content

Everything text-based — nav labels, hero copy, pillar bullets, service
descriptions, product taglines, stats, testimonials, blog posts, case
studies, FAQs, footer links — lives in **`src/data.js`**. Change it there
and it flows through automatically; you shouldn't need to touch the
component files just to update copy.

## Editing colors / theme

All brand colors and the hero's animation keyframes are defined once in
**`tailwind.config.js`** (`colors.navy`, `colors.gold`, `animation.float1/2/3`,
`animation.drift`). Change a hex value there and it updates everywhere it's
used.

## Notes

- Hero background reproduces the "same moving animation" style from the
  reference site — floating blurred gradient blobs, a slowly drifting grid
  overlay, and floating particle dots — done in pure CSS keyframes (no extra
  animation library).
- Fully responsive: Navbar collapses to a hamburger + accordion mobile menu
  under 900px; grids stack on smaller screens.
- No backend — all CTAs point at in-page anchors (`#contact`, etc.) ready for
  you to wire up to a real form or routing later.
