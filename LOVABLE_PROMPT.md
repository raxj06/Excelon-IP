# Lovable Prompt — Excelon IP Website (Current State + Next Steps)

Copy everything below into Lovable as your project brief.

---

## 1. What this project is

Excelon IP is an Intellectual Property (IPR) law firm based in India (offices in Ahmedabad HQ, Mumbai, New Delhi) offering patent, trademark, copyright, design, GI, IP consulting, and legal/litigation support services. This is a **marketing + informational website** (not a client portal or SaaS product) — its job is to explain services, build trust, and drive consultation requests via phone, WhatsApp, and contact forms.

Rebuild/continue this as a **React + Tailwind CSS** project (Lovable's default stack), replicating the current design system, page inventory, and interactions described below, then be ready to extend it further.

## 2. Current tech stack (what you're migrating FROM)

- **Stack**: Static HTML5 + vanilla CSS + vanilla JavaScript. No build step, no framework, no bundler.
- **Files**: 56 standalone `.html` pages, one shared `style.css` (~3,900 lines), one shared `main.js` (~1,150 lines), plus `locations-data.js` for a city-data-driven template page.
- **Hosting**: Vercel, with `vercel.json` using `cleanUrls: true` (strips `.html` from URLs).
- **No backend**: All forms (`newsletter`, `contact`, `careers`, `consultation modal`) are client-side validation only with a mocked success message — nothing currently posts to a real API or database.

When rebuilding in React, convert the shared header/footer/nav into layout components, convert the 56 pages into routed pages (React Router or Lovable's routing), and convert `style.css` custom properties into a Tailwind theme config (see Section 4 for exact token values).

## 3. Full page inventory (56 pages)

### Core pages
- `index.html` — Homepage (see Section 6 for full section breakdown)
- `about.html` — About Us: founder bio, team roster
- `services.html` — Services dashboard, 3-column category grid
- `contact.html` — Physical offices + consultation form
- `careers.html` — Job vacancies list + accordion + application form
- `case-study.html` — Landing page linking to 8 sector case studies
- `associates.html` — Partner network grid (16 institution logos)
- `achievement.html` — Accolades/events photo gallery (~62 images), split into "Seminars/Events" and "Certificates" sections with distinct styling
- `terms-and-conditions.html`, `privacy-policy.html` — Legal copy pages

### IP Services category (hub + sub-service pages)
- `intellectual-property-services.html` — category landing page (5 core IPR areas)
- `patent-services.html` (hub) → `patent-search-services.html`, `patent-drafting-services.html`, `patent-filing-services.html`, `patent-prosecution-services.html`, `patent-opposition-services.html`, `patent-licensing-services.html`, `patent-valuation-services.html`, `patent-analytics-services.html`, `pct-patent-filing.html` (9 sub-pages)
- `trademark-services.html` (hub) → `trademark-search-services.html`, `trademark-filing-services.html`, `trademark-prosecution-services.html`, `trademark-watch-tm-monitoring.html`, `trademark-opposition-search.html`, `trademark-licensing-services.html`, `trademark-valuation-services.html` (7 sub-pages)
- `copyright-services.html` (hub) → `copyright-filing-service.html`, `copyright-enforcement-services.html`, `copyright-commercialization-services.html` (3 sub-pages)
- `design-service.html` (hub) → `design-filing-services.html`, `design-protection-opposition.html`, `design-commercialization-valuation.html` (3 sub-pages)
- `geographical-indication.html` — standalone GI detail page

### IP Consulting category
- `intellectual-property-consulting.html` — category landing page (4 areas)
- `ip-strategy.html`, `ip-analytics.html`, `ip-valuation.html`, `ip-commercialization.html`

### Legal Support category
- `legal-support-service.html` — category landing page
- `legal-litigation-support.html`, `ediscovery.html`, `commercial-agreement.html`

### Case study sector detail pages (8)
`agrichemical-engineering.html`, `mechanical-engineering.html`, `internet-of-things-iot-computer-aiden-inventions-cad.html`, `electrical-engineering.html`, `nutraceutical-industry.html`, `dye-pigment-industry.html`, `chemical-industry.html`, `pharma-biotech.html`

### City coverage template
- `ip-locations.html` + `locations-data.js` — a single client-rendered template covering 21 Gujarat city SEO pages via `?city=<slug>` query param (defaults to Ahmedabad). Data-driven: an array of city objects fills `data-city-name` spans and a sidebar city-chip list.

### Sub-service page layout pattern
Every sub-service page (patent/trademark/copyright/design sub-pages, IP consulting pages, legal support pages) uses the same **30/70 split layout**: a sticky left sidebar with a table-of-contents anchor menu (auto-highlights the active section on scroll), and a 70%-width right column with legal copy, bullet checklists, and highlight callout boxes. Each sub-page links back to its parent hub, and hub pages link down into sub-services via a "Sub-service quick links" block.

### External / not rebuilt
- The header nav "Blog" item and footer "Blog" link point to the live external blog at `https://excelonip.com/blog/` — blog posts are NOT statically rebuilt.

## 4. Design system (current tokens — replicate exactly, then feel free to propose refinements)

```css
/* Brand colors */
--color-primary:        #0b7d91;   /* Deep Teal — core brand color */
--color-primary-hover:  #096777;
--color-primary-deep:   #075363;
--color-navy:           #0f2b3d;   /* Ink Navy — authority/trust accent, used for footer bg, featured tiles */
--color-gold:           #c99a4b;   /* Muted Gold — premium/trust highlight accent, badges, hover states */

/* Neutrals */
--color-bg-main:    #ffffff;
--color-bg-offset:  #f6f8f9;       /* section alternating background */
--color-text-main:  #10222b;       /* tinted near-black, not pure slate/black */
--color-text-muted: #4c626b;
--color-text-light: #93a5ac;
--color-border:     #e3e9eb;

/* Fonts */
--font-primary: 'Inter', sans-serif;      /* body text */
--font-heading: 'Outfit', sans-serif;     /* headings, display */

/* Shadows — tinted toward navy, NOT neutral black */
--shadow-sm: 0 1px 2px 0 rgba(15, 43, 61, 0.06);
--shadow-md: 0 4px 10px -2px rgba(15, 43, 61, 0.08), 0 2px 4px -2px rgba(15, 43, 61, 0.05);
--shadow-lg: 0 12px 24px -8px rgba(15, 43, 61, 0.10), 0 4px 8px -4px rgba(15, 43, 61, 0.06);
--shadow-xl: 0 24px 48px -12px rgba(15, 43, 61, 0.14), 0 8px 16px -6px rgba(15, 43, 61, 0.08);
--shadow-hover: 0 30px 60px -15px rgba(11, 125, 145, 0.18);

/* Shape */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 24px;
--radius-full: 9999px;   /* pills — used for ALL buttons, badges, nav chips */

/* Layout */
--container-max-width: 1200px;
--header-height: 80px;             /* 70px when scrolled/"stuck" */

/* Motion */
--transition-fast:   150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-normal:  250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow:    400ms cubic-bezier(0.4, 0, 0.2, 1);
```

**Design language rules to preserve:**
- One accent hue family (teal) plus navy for authority and gold for premium/trust — never introduce a 4th unrelated color.
- All buttons are full-pill shaped (`border-radius: full`). Primary = solid teal, outline = teal border on white, outline-inverse = white border on dark hero, gold = solid gold with navy text (used in footer/sticky bar).
- Cards use tinted (navy-hued) shadows, never flat black shadows.
- The footer is intentionally dark navy (with a radial teal glow accent) — the only deliberate light→dark theme break on the site, everything else stays light/white.
- Practice-area / feature grids are NOT plain 3-equal-column layouts — the homepage uses a bento-style grid: one larger "featured" tile with a navy gradient + gold top-border, flanked by smaller tiles with a staggered vertical offset, each with a distinct top-border color (teal / navy / gold) to echo the palette.
- Section headers on the homepage are intentionally asymmetric — most are left-aligned with a max-width constraint (not centered), except where noted otherwise below.

## 5. Global layout components (present on every page)

### Header
Fixed/sticky header, transparent over hero content, turns white with blur + a subtle teal→navy→gold gradient hairline underline when scrolled ("stuck" state). Contains:
- Logo (SVG, links home)
- Desktop nav with multi-level flyout dropdowns (hover-triggered, side-by-side category → sub-link flyouts): **Services** (3 categories: Intellectual Property Services, Intellectual Property Consulting, Legal Support Service, each expanding to their sub-pages), **About**, **Case Study** (dropdown of the 8 sector pages), **Associates**, **Blog** (external link), **Careers**, **Accolades**, **Contact**
- Header action chips: phone number (`tel:` link) and email (`mailto:` link), pill-shaped, gold-hover on transparent header / navy-hover on scrolled header
- Mobile hamburger → slide-in drawer with click-triggered accordion sub-menus and mobile contact buttons pinned to the bottom

### Footer
Dark navy background with a radial teal gradient glow. Contains:
- Company blurb + logo (inverted to white) + social icon row (Facebook, Instagram, Twitter/X, LinkedIn) — icons turn gold on hover
- "Practice Categories" quick-links column
- Newsletter signup form (email + optional phone, client-validated, gold submit button, dark-themed inputs)
- Bottom bar: copyright + Privacy Policy / Terms & Conditions links

### Site-wide floating widgets
- **WhatsApp floating button** — bottom-right, brand green, pre-filled message link
- **Back-to-top button** — bottom-left, appears after 300px scroll
- **Sticky consultation bar** — fixed to the bottom edge, navy/teal gradient background, appears after 400px scroll. Contains a short trust message ("Protect your idea before someone else files it."), a phone link, and a gold "Book Free Consultation" button. Hides its text label on mobile, keeps the actions.
- **Consultation modal** — a lead-capture popup, triggered ONCE per browser session by either: (a) scrolling past ~55% of the page's total height, or (b) desktop exit-intent (mouse moves off the top edge of the viewport). Two-column card: left side is a navy-gradient panel with an eyebrow label, headline, short pitch, and a WhatsApp fallback link; right side is a name/phone/email form with the same validation pattern as other forms. Closable via X button, backdrop click, or Escape key — never traps the user. When visible, the floating WhatsApp/back-to-top buttons shift upward so nothing overlaps.

These two components (sticky bar + modal) are currently injected **globally via JavaScript** (`initEngagementCTA()` in `main.js`, called on every page's `DOMContentLoaded`) rather than duplicated in every page's HTML — replicate this as a single shared layout-level component in React (e.g. rendered once in the root App/Layout, not per-page).

## 6. Homepage (`index.html`) — full section breakdown

1. **Hero** — full-viewport video background (`https://excelonip.com/wp-content/uploads/2020/10/E-IP_10Seconder.mp4`), diagonal dark-to-teal gradient overlay (not a flat dark scrim), content left-aligned (not centered) with a small gold eyebrow tag, large display headline "You Create, We Protect", supporting paragraph, two CTAs ("Find Your Solution" primary, "Explore Services" outline-inverse), scroll-down indicator. Collapses to centered/stacked on mobile.
2. **Introduction** — split-screen: left = headline + lead paragraph ("Leading the Way in IPR Protection"), right = a 2x2 bento grid of stat tiles (1200+ Patents & Trademarks Filed — featured navy tile spanning full width, 21 Cities Covered, 15+ Years of Practice — gold-tinted tile).
3. **Interactive IP Matchmaker** — asymmetric left-aligned heading, then a two-step selector card: Step 1 "Who are you?" (Startup/Founder, SME/Growing Brand, Enterprise/MNC, Individual Inventor buttons), Step 2 "What is your primary objective?" (Protect an Invention, Secure a Brand/Logo, Protect Creative Code/Artwork, Formulate IP Strategy & Valuation). Selecting both reveals a result box with a tailored recommendation title/description and a "Book Consultation" CTA. Pure client-side JS logic mapping org+goal combinations to recommendation copy.
4. **Core Practice Areas** — left-aligned heading, then a 3-column bento grid: Column 1 "IP Services" is the FEATURED tile (navy gradient background, gold top border, white text) listing Patent Registration / Trademark Protection / Copyright filings / Industrial Design Models with icon rows. Column 2 "IP Consulting" (IP Strategy Moats, IP Analytics & Landscaping, Financial Valuation, Commercialization licensing) sits at normal position. Column 3 "Legal Support" (Litigation Support, Commercial Agreements, eDiscovery Services) is vertically staggered downward for visual asymmetry.
5. **Interactive IP Journey Stepper** — a toggle switch between "Patent Lifecycle" and "Trademark Lifecycle", each rendering a horizontal timeline of 6 clickable step bubbles (Disclosure → Search → Drafting → Filing → Prosecution → Grant for patents; equivalent stages for trademarks). Clicking or scrolling auto-advances a details panel showing a duration badge, step description, a required-documents checklist, and an "Excelon IP Strategy Tip" callout. The timeline auto-advances as the user scrolls through a pinned/sticky section (scroll-linked, not just click-driven).
6. **Case Studies & Precedents** — left-aligned heading, tab bar (Apple vs. Masimo, Bayer vs. Natco, Novartis vs. Natco, Zerodor's Revolution), each tab reveals a card with an icon, a category tag (Infringement / Pharma Patent / Patent Moat / Shark Tank), title, excerpt, a two-item conflict/outcome summary, and a "Read Full Analysis" link out to the live blog.
7. **Office Locations** — left-aligned heading, 3-column asymmetric grid: Ahmedabad is the FEATURED tile (navy gradient, gold "Headquarters" badge, wider column), Mumbai and New Delhi are standard white cards with address + map-pin icon.
8. **Footer** — as described in Section 5.

## 7. Interactive behaviors / JS logic to replicate

- Sticky header state toggle on scroll (adds `.stuck` class past 30px)
- Mobile menu open/close with body scroll-lock, click-outside-to-close, nested category accordions
- IP Matchmaker: button group selection state + lookup table mapping (org type × goal) → recommendation copy
- Case Studies tab switching (button active state + corresponding card show/hide)
- Scroll-reveal-on-view animations for most sections (`IntersectionObserver`-driven fade+slide-up, staggered per grid item)
- Newsletter form + Contact form + Careers form: client-side validation (required fields, email regex, phone regex `^\+?[0-9]{10,13}$`), inline success/error messages (no `window.alert`), loading-spinner button state
- Back-to-top visibility toggle + smooth scroll
- Accordion open/close for service sub-page FAQs and career vacancy listings (only one open at a time per group)
- Sticky sub-page sidebar table-of-contents: highlights the active section link as the user scrolls through content anchors
- IP Journey stepper: scroll-position-driven auto-advance through steps while the section is pinned, synced with manual click-to-jump
- City template page (`ip-locations.html`): reads `?city=<slug>` query param, looks up the city in `locations-data.js`, and fills in `data-city-name` placeholders + builds a sidebar chip list of all 21 cities
- Engagement layer (Section 5): session-scoped (`sessionStorage`) one-time modal trigger via scroll-depth threshold OR exit-intent mouse tracking; sticky bar visibility toggle via scroll threshold

## 8. Content/business facts to use verbatim

- **Brand name**: Excelon IP
- **Tagline**: "Intellectual Capital Defenders" / "You Create, We Protect"
- **Phone**: +91-9512332604
- **Email**: ipr@excelonip.com
- **Offices**:
  - Ahmedabad (HQ) — 1007, Onyx, Beside Navkar Institute, CG Road, Navrangpura, Ahmedabad - 380009
  - Mumbai — Level 2, Raheja Centre, Free Press Journal Marg, Nariman Point, Mumbai - 400021
  - New Delhi — C-40, Institutional Area, Sector 62, Noida, Delhi NCR - 201301
- **Social**: Facebook (`facebook.com/excelonip`), Instagram (`instagram.com/excelon_ip`), Twitter/X (`twitter.com/ExcelonIp`), LinkedIn (`linkedin.com/company/excelonip`)
- **Service verticals**: Patent (9 sub-services), Trademark (7 sub-services), Copyright (3 sub-services), Design (3 sub-services), Geographical Indication, IP Consulting (Strategy/Analytics/Valuation/Commercialization), Legal Support (Litigation, eDiscovery, Commercial Agreements)
- **Case studies referenced**: Apple vs. Masimo, Bayer vs. Natco Pharma, Novartis vs. Natco Pharma, Zerodor's Waterless Urinal (Shark Tank India)
- **Coverage**: 21 Gujarat cities via the location template, defaulting to Ahmedabad

## 9. Known gaps / things to fix or decide on when continuing

- **No real backend**: every form (newsletter, contact, careers, consultation modal) only validates client-side and shows a mock success message. Nothing is persisted or emailed. If you want real lead capture, wire these to a real endpoint (Lovable + Supabase, or a form service) — this is a functional gap, not a design one.
- **City SEO tradeoff**: the 21-city coverage is currently one client-rendered URL (`ip-locations.html?city=slug`) instead of 21 separate static/server-rendered routes, which is weaker for per-city SEO. If rebuilding in React, consider real per-city routes (`/locations/ahmedabad`, etc.) with server-side rendering or static generation instead of query-param client rendering.
- **Blog is external**: no blog CMS/content exists in this project; nav just links out to `excelonip.com/blog/`. Decide whether to build a real blog inside the new project or keep linking out.
- **No authentication/admin**: this is a fully public marketing site with no logged-in areas, no admin dashboard, and no user accounts. Keep it that way unless a new requirement is given.
- **Video hero asset and logo SVG are currently hotlinked** from the old WordPress site (`excelonip.com/wp-content/uploads/...`) — these should be re-hosted as project assets during migration rather than continuing to hotlink a third-party domain.

## 10. What to do with this brief

Use everything above as the ground-truth current state. Once the React/Tailwind rebuild matches this spec, we can layer on further improvements — e.g., real backend form handling, per-city SEO routes, a CMS-backed blog, or new visual variants (there is also a separate in-progress "Editorial Legal Authority" direction — warm paper background, oxblood/ink/bronze palette, serif display type — that exists only as local uncommitted work and is NOT part of this current spec; ask before adopting it).
