# Changelog

All notable changes to this project will be documented in this file.

Format: [Date] - [Version] - [Type]

---

## [1.5.0] - 2026-05-27

### Added
- **Case Studies Landing Page (`case-study.html`)**: Overview dashboard showcasing the 8 case study sectors (Agrichemical, Mechanical, IoT & CAD, Electrical, Nutraceutical, Dye & Pigment, Chemical, Pharma & Biotech) using custom SVGs and card hover animations.
- **Detailed Subpages for Case Studies**: Created 8 detailed sector case study subpages with 100% legal copy preservation and side-by-side sticky sidebars.
  - **Agrichemical Engineering (`agrichemical-engineering.html`)**: Details fertilizer formulation risk assessment, patent landscapes, and provisional/PCT filing strategies.
  - **Mechanical Engineering (`mechanical-engineering.html`)**: Details wood cutting machinery prior-art landscaping and utility patent filings.
  - **IoT & CAD Inventions (`internet-of-things-iot-computer-aiden-inventions-cad.html`)**: Details hardware-software combined patenting, design registration, and trademarking.
  - **Electrical Engineering (`electrical-engineering.html`)**: Details rapid 5-day prior-art search and patent drafting for industrial automation components.
  - **Nutraceutical Industry (`nutraceutical-industry.html`)**: Details herbal formulation patenting, active ingredient extraction processes, container design, and trademark filings.
  - **Dye & Pigment Industry (`dye-pigment-industry.html`)**: Details chemical manufacturing, competitor patent infringement defense, and non-infringement rebuttals.
  - **Chemical Industry (`chemical-industry.html`)**: Multi-case study page covering API synthesis impurity resolution (Case 1) and diagnostic kit patent strategies (Case 2).
  - **Pharma & Biotech (`pharma-biotech.html`)**: Multi-case study page covering generic ANDA market entry portfolio strategy (Case 1) and T-cell therapy process patenting/funding (Case 2).

### Changed
- **Global Header Dropdown Menus**: Expanded the main header navigation across all HTML source files with a dedicated "Case Studies" dropdown menu, including all 8 subpages.
- **Global Footer Links**: Added "Case Studies" reference to the footer quick links across all HTML files.
- **Extended Bundler and Verification**: Updated `bundle.py` and `verify_links.py` to compile the 9 new templates into single-page builds (`*_single.html`) and check link integrity.

---

## [1.4.0] - 2026-05-27

### Added
- **Intellectual Property Consulting Landing Page (`intellectual-property-consulting.html`)**: Category landing page showcasing the 4 consulting service cards: IP Strategy, IP Search & Analytics, IP Valuation, and IP Commercialization. Designed using an adaptive cards grid layout with premium scale transitions and custom SVG icons.
- **Legal Support Service Landing Page (`legal-support-service.html`)**: Category landing page showcasing the 2 litigation and legal support service cards: eDiscovery Service and Commercial Agreement.
- **Detailed Subpages for Consulting and Legal Support Services**: Created 6 comprehensive content-rich subpages with 100% legal copy preservation, organized in a modern 30/70 split grid layout with sticky sidebar table-of-contents navigation:
  - **IP Strategy (`ip-strategy.html`)**: Details strategic roadmap planning, proactive asset protection, lifecycle management, and pharmaceutical ANDA regulatory workflows.
  - **IP Analytics (`ip-analytics.html`)**: Details patentability, novelty, infringement, Freedom-to-Operate (FTO), chemical Markush structure searches, and whitespace audits.
  - **IP Valuation (`ip-valuation.html`)**: Details Cost, Market, and Income financial models for asset evaluation.
  - **IP Commercialization (`ip-commercialization.html`)**: Details licensing, mergers & acquisitions, assignments, and mentorship networks.
  - **eDiscovery (`ediscovery.html`)**: Details litigation holds, custodian mapping, deduplication in ANDA lawsuits, and cost-saving keyword filters.
  - **Commercial Agreement (`commercial-agreement.html`)**: Details 13 corporate and operational business contract drafting categories with custom card layouts.
  - **Services Dashboard Overview (`services.html`)**: Rebuilt the main services index page as a premium three-column dashboard layout (Intellectual Property Services, Intellectual Property Consulting, Legal/Litigation Support) featuring vector-drawn hover item buttons matching the live site aesthetics.

### Changed
- **Services Main Navigation Routing**: Updated the main "Services" header link across all 19 HTML source files to route directly to `services.html` (instead of `intellectual-property-services.html`), enabling visitors to access the full services dashboard when clicking the main menu item.
- **Hierarchical Flyout Dropdown Navigation**: Redesigned the main global dropdown across all 19 HTML source files into a compact, multi-level hover flyout menu. The main dropdown shows only the 3 top-level practice categories with caret indicators, expanding their respective detailed subpages on hover to save visual space on desktop viewports.
- **Mobile Dropdown Accordion Integration**: Added click event listeners in `main.js` and responsive `.dropdown-submenu` styling in `style.css` so that on mobile screens (`<= 1200px`), tapping a category title toggles the active subcategory accordion instead of navigating, providing full access to subpages on touch viewports.
- **Reusable CSS Styles for Agreements**: Appended `.agreement-grid` and `.agreement-item-card` styling rules to `style.css` to manage layout, hover float, and border transitions via the stylesheet instead of inline attributes.
- **Extended Bundler Script**: Updated `bundle.py` to inline styles and script modules into the 8 new pages and rewrite internal routes for standalone offline releases (`*_single.html`).
- **Synchronized Bundle Outputs**: Generated updated inline single-page versions for all 19 HTML files.

---

## [1.3.0] - 2026-05-27

### Added
- **Intellectual Property Services Dashboard (`intellectual-property-services.html`)**: Category landing page showcasing the 5 core areas of IPR. Designed using an adaptive cards grid layout with premium scale transitions and custom SVG icons mapping directly to detailed service subpages.
- **Detailed IPR Service Subpages**: Created 5 comprehensive content-rich subpages with 100% legal copy preservation, organized in a modern 30/70 split grid:
  - **Patent Services (`patent-services.html`)**: Details search clearance, IN/US/EP drafting, provisional specifications, PCT filings, pre/post-grant oppositions, and IP valuation.
  - **Trademark Services (`trademark-services.html`)**: Details Nice classifications (classes 1-45), TM-A filing, Madrid international filings, watch/monitoring, and pharmaceutical trademark sound-alike safety checks.
  - **Copyright Services (`copyright-services.html`)**: Details literary, artistic, musical protection, software codebase filings, and Berne/TRIPS international compliance.
  - **Design Services (`design-service.html`)**: Details shape/aesthetic protection, Locarno classifications, and Design Act 2000 filings.
  - **Geographical Indication (`geographical-indication.html`)**: Details community origin rights, differences from trademarks, and the Chennai GI Registry.

### Changed
- **Sticky Table-of-Contents Sidebars**: Extended `style.css` with sticky navigation panels (`.sticky-sidebar`) on detailed subpages that pivot to horizontal scrollbars on mobile layout sizes.
- **TOC Active Highlight Script**: Added `initSubpageSidebar()` in `main.js` which dynamically checks viewport visibility range and highlights the active TOC links in teal.
- **Header Navbar Dropdown update**: Structured multi-level navigation dropdown for IPR subdirectories across all HTML source files.
- **Compiler Anchors Routing**: Updated `bundle.py` to support partial string matching for inlined routes to handle links with hash anchors correctly (e.g. `services.html#strategic-advisory` -> `services_single.html#strategic-advisory`).
- **Synchronized Bundle Outputs**: Compiled all service landing pages and detail files into standalone single-page releases (`*_single.html`).

---

## [1.2.1] - 2026-05-27

### Changed
- **Careers Page Layout Separation**: Separated the Active Openings vacancies list and the Apply Online application form into distinct vertical sections. The openings list is centered inside a 900px container for a cleaner visual flow.
- **Horizontal Form Grid Layout**: Configured the application form (`.careers-form-card`) with a 3-column grid structure on desktop viewports (`>= 992px`) to maximize visual balance and utilize side spacing.
- **Horizontal File Upload drop-zone**: Styled the drag-and-drop resume upload zone into a low-profile horizontal slot on desktop, featuring a micro-animation that slides the icon upwards by 4px on hover.
- **Compile Single-Page Builds**: Re-ran the compiler script to update all bundled single-page outputs (`*_single.html`).

---

## [1.2.0] - 2026-05-27

### Added
- **About Us Page (`about.html`)**: Details the firm's history, mission, leadership biography (Mr. Sanjaykumar Patel), core startup values, and global compliance network.
- **Services Page (`services.html`)**: Expandable accordion panels detailing Patents, Trademarks, Copyrights & Designs, Strategic Advisory, and Legal Support Services.
- **Contact Us Page (`contact.html`)**: Physical office details (Ahmedabad, Mumbai, New Delhi) with Google Maps routing links and an interactive consulting request form.
- **Careers Page (`careers.html`)**: Recruitment portal featuring company culture values, vacancies accordions, and a drag-and-drop simulated file upload resume widget. Configured as a side-by-side sticky grid on desktop/laptop viewports to maximize spacing efficiency.
- **Multi-Page Bundler Compiler**: Updated `bundle.py` to compile all source HTML files in the workspace into standalone bundled formats (`*_single.html`) and dynamically adjust internal menu link routes for offline cross-page navigation.

### Changed
- **Cross-Linking Navigation**: Re-configured the global header navbar and footer quick links across all HTML files to support seamless subpage transitions and return routing.
- **Extended CSS Layouts**: Extended `style.css` with biography grids, forms, accordions, file-upload widgets, and corresponding mobile media queries.
- **Interactive Script Behaviors**: Extended `main.js` with accordion handlers, hash-based auto-routing triggers, drag-and-drop file upload event states, and validated callbacks.

---

## [1.1.5] - 2026-05-23

### Changed
- **Header Logo Sizing (Further Reduction)**: Reduced the header logo image height even further in the navbar for both desktop and mobile/scrolled states (from 24px to 18px in default view, and from 20px to 15px in stuck/scrolled or menu-open views) to achieve an ultra-sleek, minimalist aesthetic.
- **Synchronized Bundle Output**: Re-bundled project files into the single-page release `index_single.html`.

---

## [1.1.4] - 2026-05-23

### Changed
- **Header Logo Sizing**: Reduced the header logo image height in the navbar on both desktop and mobile views to make it more compact and premium (from 32px to 24px in default view, and from 26px to 20px in stuck/scrolled or menu-open views).
- **Synchronized Bundle Output**: Re-bundled project files with the updated logo styling.

---

## [1.1.3] - 2026-05-23

### Fixed
- **Strategy Tip Alignment & Icon Stretching**: Fixed the layout issue where the lightbulb tip icon in `.strategy-card` was stretched and pushed to the bottom of the card. Cleaned up style rules by removing vertical `flex-grow` behaviors on the card container and enforcing top-left flex alignment (`align-items: flex-start` with `.tip-icon { margin-top: 2px; }`).
- **Synchronized Bundle Output**: Re-compiled all project CSS and JS components into the self-contained `index_single.html` release.

---

## [1.1.2] - 2026-05-23

### Changed
- **Stretched Details Card Height**: Refactored the desktop IP Journey stepper grid layout to set `.journey-stepper-card` grid items to `align-items: stretch`. Added `height: 100%`, `display: flex`, and `flex-direction: column` to `.journey-details-box`, ensuring the details card background matches the timeline height and eliminating blank space below it.
- **Enhanced Spacing & Readability**: Increased margins, list gaps, and text line-heights inside the details card for a premium, spacious layout (e.g., `line-height: 1.6` for description and strategy tips, `gap: 16px` for checklists).
- **Concise Lifecycle Data**: Shortened Patent and Trademark step descriptions, checklist items, and strategy tips in `main.js` to 1-2 punchy, readable sentences.

### Fixed
- **Runtime Safety**: Added defensive null checks for DOM updates inside `updateDetails()` in `main.js` to prevent JavaScript errors from breaking transitions if elements are absent.
- **Synchronized Bundle Output**: Compiled all modifications into the self-contained single-page bundle `index_single.html`.

---

## [1.1.1] - 2026-05-23

### Fixed
- **Stepper Desktop Layout Cascade Override**: Fixed a CSS cascade overriding issue where general/mobile stepper container styles defined at the end of the file took precedence over media queries, causing the details box to stack below the timeline. By reorganizing the stylesheet order (placing default rules before desktop media queries), the stepper correctly renders side-by-side on desktop screens (`>= 769px`), utilizing the blank right-hand space for the dynamic details card.
- **Synchronized Bundle Output**: Re-ran the bundler script to ensure `index_single.html` contains the corrected CSS layout order.

---

## [1.1.0] - 2026-05-23

### Added
- **Single-File Distribution Bundle**: Created `index_single.html`, a self-contained single HTML distribution file that bundles all custom CSS layout stylings and interactive JavaScript engine logic inline, making it extremely easy to share and preview the entire website in a single file.

### Changed
- **Side-by-Side Stepper Layout**: Redesigned the desktop layout of the IP Journey stepper to position the vertical timeline track on the left and the active step details card on the right inside a side-by-side grid configuration. This layout reduces the vertical height by ~250px, ensuring the entire widget is 100% visible on smaller laptop/desktop screens during sticky scroll pinning.
- **Short-Height Adaptive Stepper**: Tuned the height-based media query (`@media (min-width: 769px) and (max-height: 800px)`) to shrink timeline columns, step bubbles (from 54px to 44px), spacing, and font sizes in the new vertical side-by-side layout.
- **Mobile Stepper Styling**: Cleaned up duplicate vertical styles from the mobile media query, leaving a clean stacking layout override.

---

## [1.0.9] - 2026-05-23

### Fixed
- **Strategy Tip Text Collapsing**: Added `flex: 1` and `min-width: 0` to `.strategy-card p` to resolve the flexbox text collapsing issue and restore visibility of the legal tips inside the details card.
- **Stepper Height Clipping**: Created a height-based media query (`@media (min-width: 769px) and (max-height: 800px)`) that scales down margins, paddings, gaps, and timeline bubble sizes of the IP Journey widget to prevent layout cutoff on short viewports.

---

## [1.0.8] - 2026-05-23

### Changed
- **Sticky Scroll Pinning Alignment**: Synchronized the JavaScript progress tracking math with the exact sticky viewport boundaries of `.journey-pin-container` to lock/pin the screen until all steps are completed.
- **Compact View Layout**: Reduced vertical paddings, gaps, and margins on desktop to prevent the stepper card from cutting off at the top and bottom of the screen.
- **Concise Copy Editing**: Shortened descriptions, checklists, and tip content of Patent and Trademark lifecycles to fit compactly in any viewport height.
- **Mobile Navigation Safety**: Disabled scroll-driven auto-advances on screens <= 768px to avoid flashing details text while reading, relying on bubble clicks for navigation.

---

## [1.0.7] - 2026-05-23

### Added
- **Scroll-Driven Journey Auto-Animation**: Integrated viewport scroll position tracking to automatically transition Patent and Trademark journey steps as the user scrolls.
- **Dual-Sync Step Navigation**: Tapping a timeline bubble now smoothly scrolls the window to the exact position corresponding to that step.
- **Input Overlap Debouncing**: Implemented an update timeout clean-up to prevent stuttering/flicker and race conditions during rapid scrolling.

---

## [1.0.6] - 2026-05-23

### Added
- **Animated Nav Underline**: Desktop hover draw-underline transition effect on navigation links.
- **Active Step Pulsing Glow**: Infinite radial keyframe ripple glow behind active IP Journey step bubbles.
- **Staggered Scroll-Reveal**: Individual grid reveals for Practice Area columns and Office Location cards with incremental delays (100ms - 400ms) on entering viewport.
- **Interactive Card Float**: Custom cubic-bezier transition curves on grid columns/cards, creating a premium hover scale, translate float, and accent border color glow.
- **Matchmaker Result Reveal**: Dynamic scale-fade transition and drop shadow glow when Matchmaker widget results update.

---

## [1.0.5] - 2026-05-23

### Added
- **Interactive IP Journey Stepper**: Added a visual lifecycle timeline stepper for Patents (6 steps) and Trademarks (5 steps).
- **Smooth Switch Animation**: Implemented pill shape toggle button animations and opacity card fades when shifting steps/journeys.
- **Responsive Timeline Layout**: Configured CSS queries to transition the stepper track from horizontal flexbox lines on laptops/desktops to a vertical timeline path with absolute left alignments on tablets and mobile screens (`<= 768px`).
- **Keyboard Accessibility**: Programmed focus visible outlines on step bubble selectors.

---

## [1.0.4] - 2026-05-23

### Added
- **Mobile Contact Actions**: Added direct tap call and email actions inside the mobile navigation drawer to maintain contact accessibility on narrow viewports.

### Changed
- **Right-Aligned Drawer**: Aligned the navigation drawer to slide in from the right rather than the left to match the hamburger button placement.
- **Scroll Lock**: Configured script to toggle a body scroll lock (`.no-scroll`) when the mobile drawer navigation is open.
- **Touch Targets**: Expanded hamburger button click target dimensions to conform to accessibility standards.
- **Responsive Sizing & Details**:
  - Compressed the WhatsApp floating button to a clean circle on screens `<= 480px`.
  - Stacked hero buttons and Case Studies details vertically on small screen viewports.
  - Reduced horizontal container margin offsets and card paddings on narrow viewports to expand reading space.

---

## [1.0.3] - 2026-05-23

### Changed
- **Logo Size**: Reduced the header logo image height to `32px` before scroll and `26px` after scroll to align it with the compact design of the live website header.

---

## [1.0.2] - 2026-05-23

### Changed
- **Logo Style**: Removed CSS brightness and invert filters from the navigation logo on the homepage before scrolling, keeping the brand's original corporate colors visible against the transparent header.

---

## [1.0.1] - 2026-05-23

### Fixed
- **Navigation Bar Layout**: Widened header width container to `.header-container` (1400px max-width), decreased item spacing, and shifted the mobile drawer breakpoint to `1024px` to eliminate overlaps on tablets and smaller laptop screens.
- **Nav Link Contrast**: Implemented scroll-linked visibility styles where header links appear in white against the dark video background at the top, transitioning smoothly to dark slate when scrolled (`.stuck`).
- **Dynamic Logo Branding**: Added a CSS brightness/invert filter to the header logo to display it in white over the dark transparent hero banner, returning to its default branding colors on scrolling.
- **Hero Video Graphics Dimming**: Increased the hero banner background overlay opacity to 72% to dim the busy vector animations inside the background video, making the overlaid texts extremely readable.
- **Hero Typography & Text Shadows**: Shortened the hero introduction description for a punchier look and added text-shadow elevations to make the title, tagline, and description text stand out.

---

## [1.0.0] - 2026-05-23

### Added
- Redesigned homepage structure layout ([index.html](file:///d:/Boostify%20Corp/Exelon%20IP/index.html)).
- Styling design system with custom properties ([style.css](file:///d:/Boostify%20Corp/Exelon%20IP/style.css)).
- Dynamic script file for mobile menu, scroll animations, case studies tab, and IP Matchmaker ([main.js](file:///d:/Boostify%20Corp/Exelon%20IP/main.js)).

### Technical Details
- Preserved brand accent color `#0a9fb6` and primary fonts.
- Implemented responsive mobile navbar toggling.
- Added client-side recommendation engine for the Matchmaker widget.
- Configured a tab-switched panel for high-profile legal case studies with custom SVGs.
- Styled clean address blocks for location offices in Ahmedabad, Mumbai, and New Delhi.

---

## [0.1.0] - 2026-05-23

### Added
- Project initialization.
- Scraped raw homepage reference file (`original_homepage.html`).
- AI context documentation (`AI_CONTEXT.md`) mapping out design colors, assets, and structural layout.
- Initialized blank changelog.

### Design Decisions
- Preserve core brand identity colors (`#0a9fb6`) as a single accent color.
- Adopt a clean white theme background layout with `#f5f7fb` section offsets, following modern minimalist standards.
- Build clean custom vector shapes/SVGs for service icons to avoid pixelation and speed up page load.
- Design an **Interactive IP Matchmaker** to allow custom recommendation mappings instead of static practice listings.
