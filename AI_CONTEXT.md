# AI Context for Excelon IP Homepage Redesign

## Project Overview
- **Purpose**: Redesign the homepage (including header and footer) of Excelon IP (`https://excelonip.com/`) with premium aesthetics, modern typography, seamless interactions, responsive styling, and custom animations.
- **Tech Stack**: HTML5, Vanilla CSS, Vanilla JavaScript.
- **Architecture**: Single-page structure with clean grid/flex layouts, scroll-linked reveal animations, and interactive client-side widgets (IP Matchmaker, Case Studies Explorer).

## Current State
- **Version**: 1.7.0
- **Status**: Full Site Coverage / Production
- **Last Updated**: 2026-08-26

## File Structure
```
d:\Boostify Corp\Exelon IP/
├── AI_CONTEXT.md                             # This project context and documentation file
├── CHANGELOG.md                              # Tracked version history and changes
├── index.html                                # Redesigned main page (header, hero, sections, footer)
├── about.html                                # About Us subpage detailing founder bio & team roster
├── services.html                             # Services dashboard page with a premium three-column category grid
├── contact.html                              # Contact page with physical offices and consultation form
├── careers.html                              # Careers page with vacancies list & horizontal grid form
├── intellectual-property-services.html        # Category landing page listing all 5 core IPR areas
├── patent-services.html                      # Detailed subpage + links to 9 patent sub-services
├── patent-search-services.html               # Sub-service: prior-art / patentability searches
├── patent-drafting-services.html             # Sub-service: specification drafting
├── patent-filing-services.html               # Sub-service: IN / convention filing
├── patent-prosecution-services.html          # Sub-service: examination response handling
├── patent-opposition-services.html           # Sub-service: pre/post-grant oppositions
├── patent-licensing-services.html            # Sub-service: licensing strategy
├── patent-valuation-services.html            # Sub-service: patent valuation models
├── patent-analytics-services.html            # Sub-service: landscaping / analytics
├── pct-patent-filing.html                    # Sub-service: PCT international route
├── trademark-services.html                   # Detailed subpage + links to 7 trademark sub-services
├── trademark-search-services.html            # Sub-service: TM availability searches
├── trademark-filing-services.html            # Sub-service: TM-A filing
├── trademark-prosecution-services.html       # Sub-service: examination / show-cause hearings
├── trademark-watch-tm-monitoring.html        # Sub-service: watch & monitoring
├── trademark-opposition-search.html          # Sub-service: opposition handling
├── trademark-licensing-services.html         # Sub-service: TM licensing / registered user
├── trademark-valuation-services.html         # Sub-service: brand valuation
├── copyright-services.html                   # Detailed subpage + links to 3 copyright sub-services
├── copyright-filing-service.html             # Sub-service: copyright registration
├── copyright-enforcement-services.html       # Sub-service: anti-piracy enforcement
├── copyright-commercialization-services.html # Sub-service: royalty / assignment monetization
├── design-service.html                       # Detailed subpage + links to 3 design sub-services
├── design-filing-services.html               # Sub-service: Design Act 2000 filings
├── design-protection-opposition.html         # Sub-service: design protection & opposition
├── design-commercialization-valuation.html   # Sub-service: design monetization
├── geographical-indication.html              # Detailed subpage for GI community rights and Chennai Registry
├── intellectual-property-consulting.html      # Category landing page listing all 4 consulting areas
├── ip-strategy.html                          # Detailed subpage for IP Strategy, dynamic management & ANDA plans
├── ip-analytics.html                         # Detailed subpage for Patent Search, Novelty, FTO & whitespace audits
├── ip-valuation.html                         # Detailed subpage for Cost, Market, and Income valuation models
├── ip-commercialization.html                 # Detailed subpage for assignments, transfer options, and monetization
├── legal-support-service.html                # Category landing page for Legal/Litigation Support services
├── legal-litigation-support.html             # Detailed subpage for litigation support workflows (new on live site 2026)
├── ediscovery.html                           # Detailed subpage for legal holds, deduplication & custodian logs
├── commercial-agreement.html                 # Detailed subpage for 13 contract types drafting and covenants
├── case-study.html                           # Landing page for 8 sector case studies
├── agrichemical-engineering.html             # Case study subpages (8 sectors: agrichemical, mechanical,
├── mechanical-engineering.html               #   IoT/CAD, electrical, nutraceutical, dye & pigment,
├── internet-of-things-iot-computer-aiden-inventions-cad.html #   chemical x2, pharma & biotech x2)
├── electrical-engineering.html
├── nutraceutical-industry.html
├── dye-pigment-industry.html
├── chemical-industry.html
├── pharma-biotech.html
├── associates.html                           # Partner network logo grid (16 institutions)
├── achievement.html                          # Accolades/events photo gallery (~62 photos, hotlinked from client CDN)
├── terms-and-conditions.html                 # Legal copy from live site
├── privacy-policy.html                       # Legal copy from live site
├── ip-locations.html                         # City coverage template (?city=<slug>), client-side rendered
├── locations-data.js                         # Data array of 21 Gujarat cities + city-page renderer
├── style.css                                 # Clean modern CSS custom design system and transitions
└── main.js                                   # Interactive logic, scroll anims, matchmaker, sidebar scroll active states
```

## Key Components
### Header / Navigation
- **Location**: All HTML files (Header)
- **Purpose**: Sticky header containing the brand SVG logo, multi-level hover menus, contact links, and a call-to-action button. Includes mobile hamburger trigger. Features a compact hierarchical flyout dropdown menu on desktop (revealing subpages via side hover transitions) and click-triggered subcategory accordions inside the mobile navigation drawer.

### IP Services Dashboard & Detailed Pages
- **Location**: `intellectual-property-services.html` (landing dashboard), `*-services.html` and `design-service.html` (detailed subpages).
- **Purpose**: Dashboard features a clean cards layout grid showing the 5 areas of IPR. Subpages present full legal copy organized into a 30/70 side-by-side layout: a sticky table-of-contents anchor menu on the left, and detail blocks with custom highlights and bullet checkmarks on the right.

### IP Matchmaker Widget
- **Location**: `index.html` (Section), `main.js` (logic)
- **Purpose**: A user experience improvement where prospective clients (Startups, SMEs, MNCs) choose their entity type and select their business goals to instantly get recommended IP services.

### Interactive IP Journey Stepper
- **Location**: `index.html` (Section), `style.css` (layout & transition rules), `main.js` (step toggle data & progress indicators)
- **Purpose**: Interactive stepper visualization showcasing the step-by-step lifecycle workflow of securing Patents and Trademarks, including duration badges, required checklists, and legal strategy tips. Renders as a side-by-side vertical grid on desktop, and stacks vertically on mobile screens `<= 768px`.

### Case Studies Explorer & Detailed Sector Pages
- **Location**: `index.html` (Section), `case-study.html` (Landing dashboard), `*-engineering.html`, `*-industry.html`, `internet-of-things-*.html` (Detailed subpages).
- **Purpose**: Homepage explorer highlights key global disputes. The main Case Studies landing page displays cards for 8 business/technical sectors using custom SVGs and animations. The detailed subpages present industrial challenges, Excelon IP solutions, and business impacts in a 30/70 split layout (multi-case study pages use a stacked layout for Case Study 1 and Case Study 2).

### Footer
- **Location**: All HTML files (Footer), `main.js` (validation logic)
- **Purpose**: Contact details, trust indicators, quick links, and a validation-rich newsletter sign-up form.

### Sub-Service Pages (Micro-Services)
- **Location**: `patent-*-services.html`, `pct-patent-filing.html`, `trademark-*-services.html`, `trademark-watch-tm-monitoring.html`, `trademark-opposition-search.html`, `copyright-*.html`, `design-*.html` (22 pages)
- **Purpose**: Short, focused sub-service pages mirroring the live site's micro-pages. Each uses the same 30/70 sticky-sidebar layout and links back to its parent service hub. Parent hubs link down into sub-services via a "Sub-service quick links" block at the end of the content.

### City Coverage Template
- **Location**: `ip-locations.html` + `locations-data.js`
- **Purpose**: Single client-side rendered template covering 21 Gujarat city SEO pages from the live site (`?city=<slug>`, defaults to Ahmedabad). `locations-data.js` holds the city array and fills `data-city-name` spans plus the sidebar city chips. Trade-off: one URL instead of 21 per-city URLs.

### Company Pages
- **associates.html**: Partner network grid hotlinking 16 institution logos from the client CDN.
- **achievement.html**: Accolades/events photo gallery (~62 images) hotlinked with WordPress `-280x280` thumbnail variants.
- **terms-and-conditions.html** / **privacy-policy.html**: Legal copy mirrored locally; footer bottom links now point to these local pages.

### Blog Policy
- Blog posts are NOT rebuilt statically. The header nav "Blog" item and footer quick link point to the live `https://excelonip.com/blog/`.

## Configuration
- **Primary Color (Accent)**: `#0a9fb6` (Teal/Cyan)
- **Background Palette**: White theme (`#ffffff` panels, `#f5f7fb` section offsets)
- **Fonts**: Roboto / Inter / Outfit (Headings)
- **Video Hero Asset**: `https://excelonip.com/wp-content/uploads/2020/10/E-IP_10Seconder.mp4`
- **Logo SVG**: `https://excelonip.com/wp-content/uploads/2022/01/logo-1.svg`

## Custom Animations
- **Nav Draw-Underline**: Left-to-right underline slide-in on hover for desktop nav-links (`@media (min-width: 1201px)`).
- **Journey Bubble Pulsing Ripple**: Infinite radial keyframe ripple (`@keyframes bubbleRipple`) scaling and fading behind the active step bubble.
- **Scroll-Driven Journey Auto-Animation**: Real-time viewport scroll depth tracking to automatically advance Patent and Trademark steps as the user scrolls, synced with a tap-to-scroll bubble interaction.
- **Sticky Sidebar Scroll-Highlight**: Side navigation table-of-contents in service subpages automatically highlights links in green/teal as the user scrolls into the corresponding section blocks, using a viewport trigger range.
- **Card Float & Glow**: Smooth, custom bezier scaling/float transforms (`cubic-bezier(0.16, 1, 0.3, 1)`) and border color/drop-shadow transitions on card hover.

## Known Issues
- City pages are client-side rendered (single URL) — weaker per-city SEO than the live site's 21 static URLs.
- `bundle.py` / `verify_links.py` from earlier versions are gone; `_single.html` bundles were removed in v1.7.0 by decision. Link integrity is checked with an ad-hoc PowerShell scan.

## Future Improvements
- Multi-language support.
- Fully automated chatbot helper integration.
- Live blog API integration.
