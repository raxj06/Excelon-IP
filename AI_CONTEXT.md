# AI Context for Excelon IP Homepage Redesign

## Project Overview
- **Purpose**: Redesign the homepage (including header and footer) of Excelon IP (`https://excelonip.com/`) with premium aesthetics, modern typography, seamless interactions, responsive styling, and custom animations.
- **Tech Stack**: HTML5, Vanilla CSS, Vanilla JavaScript.
- **Architecture**: Single-page structure with clean grid/flex layouts, scroll-linked reveal animations, and interactive client-side widgets (IP Matchmaker, Case Studies Explorer).

## Current State
- **Version**: 1.5.0
- **Status**: Production-Ready / Maintenance
- **Last Updated**: 2026-05-27

## File Structure
```
d:\Boostify Corp\Exelon IP/
├── AI_CONTEXT.md                             # This project context and documentation file
├── CHANGELOG.md                              # Tracked version history and changes
├── index.html                                # Redesigned main page (header, hero, sections, footer)
├── index_single.html                         # Self-contained bundled single HTML file for main page
├── about.html                                # About Us subpage detailing founder bio & mentorship
├── about_single.html                         # Self-contained bundled HTML for About Us
├── services.html                             # Services dashboard page with a premium three-column category grid
├── services_single.html                       # Self-contained bundled HTML for Services overview
├── contact.html                              # Contact page with physical offices and consultation form
├── contact_single.html                       # Self-contained bundled HTML for Contact
├── careers.html                              # Careers page with vacancies list & horizontal grid form
├── careers_single.html                       # Self-contained bundled HTML for Careers
├── intellectual-property-services.html        # Category landing page listing all 5 core IPR areas
├── intellectual-property-services_single.html   # Self-contained bundled HTML for IP Services landing
├── patent-services.html                      # Detailed subpage for Patent filing, searches, and oppositions
├── patent-services_single.html               # Self-contained bundled HTML for Patent Services
├── trademark-services.html                   # Detailed subpage for Trademark, classifications, and Madrid path
├── trademark-services_single.html            # Self-contained bundled HTML for Trademark Services
├── copyright-services.html                   # Detailed subpage for Copyright, codebase filing, and licensing
├── copyright-services_single.html            # Self-contained bundled HTML for Copyright Services
├── design-service.html                       # Detailed subpage for Industrial Design shapes, Locarno rules
├── design-service_single.html                # Self-contained bundled HTML for Design Services
├── geographical-indication.html              # Detailed subpage for GI community rights and Chennai Registry
├── geographical-indication_single.html       # Self-contained bundled HTML for GI Services
├── intellectual-property-consulting.html      # Category landing page listing all 4 consulting areas
├── intellectual-property-consulting_single.html # Self-contained bundled HTML for IP Consulting
├── ip-strategy.html                          # Detailed subpage for IP Strategy, dynamic management & ANDA plans
├── ip-strategy_single.html                   # Self-contained bundled HTML for IP Strategy
├── ip-analytics.html                         # Detailed subpage for Patent Search, Novelty, FTO & whitespace audits
├── ip-analytics_single.html                  # Self-contained bundled HTML for IP Search & Analytics
├── ip-valuation.html                         # Detailed subpage for Cost, Market, and Income valuation models
├── ip-valuation_single.html                  # Self-contained bundled HTML for IP Valuation
├── ip-commercialization.html                 # Detailed subpage for assignments, transfer options, and monetization
├── ip-commercialization_single.html          # Self-contained bundled HTML for IP Commercialization
├── legal-support-service.html                # Category landing page for eDiscovery & Commercial Agreements
├── legal-support-service_single.html         # Self-contained bundled HTML for Legal Support Services
├── ediscovery.html                           # Detailed subpage for legal holds, deduplication & custodian logs
├── ediscovery_single.html                    # Self-contained bundled HTML for eDiscovery Service
├── commercial-agreement.html                 # Detailed subpage for 13 contract types drafting and covenants
├── commercial-agreement_single.html          # Self-contained bundled HTML for Commercial Agreements
├── case-study.html                           # Landing page for 8 sector case studies
├── case-study_single.html                    # Self-contained bundled HTML for Case Studies Landing
├── agrichemical-engineering.html             # Detailed subpage for Agrichemical Engineering Case Study
├── agrichemical-engineering_single.html      # Self-contained bundled HTML for Agrichemical case study
├── mechanical-engineering.html               # Detailed subpage for Mechanical Engineering Case Study
├── mechanical-engineering_single.html        # Self-contained bundled HTML for Mechanical case study
├── internet-of-things-iot-computer-aiden-inventions-cad.html # Detailed subpage for IoT & CAD Inventions Case Study
├── internet-of-things-iot-computer-aiden-inventions-cad_single.html # Self-contained bundled HTML for IoT case study
├── electrical-engineering.html               # Detailed subpage for Electrical Engineering Case Study
├── electrical-engineering_single.html        # Self-contained bundled HTML for Electrical case study
├── nutraceutical-industry.html               # Detailed subpage for Nutraceutical Industry Case Study
├── nutraceutical-industry_single.html        # Self-contained bundled HTML for Nutraceutical case study
├── dye-pigment-industry.html                 # Detailed subpage for Dye & Pigment Industry Case Study
├── dye-pigment-industry_single.html          # Self-contained bundled HTML for Dye & Pigment case study
├── chemical-industry.html                    # Detailed subpage for Chemical Industry Case Study (Multi-case study)
├── chemical-industry_single.html             # Self-contained bundled HTML for Chemical case study
├── pharma-biotech.html                       # Detailed subpage for Pharma & Biotech Case Study (Multi-case study)
├── pharma-biotech_single.html                # Self-contained bundled HTML for Pharma & Biotech case study
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
- None (New project initialization).

## Future Improvements
- Multi-language support.
- Fully automated chatbot helper integration.
- Live blog API integration.
