# Implementation Plan - Typography, About, Navbar & Footer Redesign

This plan outlines a complete redesign of the typography, About page, Navbar, and Footer layouts to establish a cohesive, high-end editorial aesthetic with excellent contrast.

## User Review Required

> [!IMPORTANT]
> - **Font Overhaul**: Switching the global type system to **Montserrat** (bold, geometric, institutional headers) and **DM Sans** (clean, warm, highly legible body copy).
> - **Navbar Layout Overhaul**: Replacing the dual-tier bar with a **Single-Tier Minimalist Navigation Header**. It will feature a transparent-to-custard (`#FAF7E6`) sticky background, clean letter-spaced uppercase links, and a sharp CTA.
> - **Footer Layout Overhaul**: Replacing the heavy dark charcoal footer with a **warm, light-themed Custard Ivory Footer (`bg-[#FAF7E6]`)** that coordinates with the site. All text will be deep charcoal (`text-slate-900`) for absolute high contrast, and elements will be separated by thin borders.
> - **About Page Layout & Hero**: Redesigning the About page to feature a cinematic, full-bleed dark image hero with white overlay text (opposite contrast) and reorganizing the cards into structured white blocks sitting on the custard background.

## Proposed Changes

### 1. Typography & Global Styles
#### [MODIFY] [globals.css](file:///home/suman/Desktop/foundation/app/globals.css)
- Bind `--font-montserrat` to `.font-display` and `--font-dm-sans` to `.font-sans-modern` and default body text.
- Configure global text selections and scrollbar paths to conform to the custard theme.

#### [MODIFY] [layout.tsx](file:///home/suman/Desktop/foundation/app/layout.tsx)
- Load `Montserrat` and `DM_Sans` from Google Fonts.

### 2. Navigation & Footer
#### [MODIFY] [Navbar.tsx](file:///home/suman/Desktop/foundation/components/layout/Navbar.tsx)
- Implement the single-tier, header navbar. Use transparent base background transitioning to sticky `#FAF7E6`/95 on scroll.
- Apply uppercase Montserrat links with letter-spacing.

#### [MODIFY] [Footer.tsx](file:///home/suman/Desktop/foundation/components/layout/Footer.tsx)
- Overhaul layout into a warm light-ivory background (`bg-[#FAF7E6]`), dark slate text, thin border dividing lines (`border-slate-200/80`), and a minimal email sign-up bar.

### 3. About Page
#### [MODIFY] [about/page.tsx](file:///home/suman/Desktop/foundation/app/about/page.tsx)
- Build a full-screen, high-contrast dark image hero section.
- Redesign story and values grids using high-contrast cards.

### 4. Page & Route Styling Aligments
#### [MODIFY] [page.tsx](file:///home/suman/Desktop/foundation/app/page.tsx), [programs/page.tsx](file:///home/suman/Desktop/foundation/app/programs/page.tsx), [team/page.tsx](file:///home/suman/Desktop/foundation/app/team/page.tsx), [advisory-board/page.tsx](file:///home/suman/Desktop/foundation/app/advisory-board/page.tsx), [contact/page.tsx](file:///home/suman/Desktop/foundation/app/contact/page.tsx)
- Update font bindings and adjust styles to integrate with the new navbar, footer, and typography hierarchy.

## Verification Plan

### Automated Tests
- Run `npm run build` to confirm compilation and route generation.
