---
name: Vectolift Alpha
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#494454'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#7b7486'
  outline-variant: '#cbc3d7'
  surface-tint: '#6d3bd7'
  primary: '#6b38d4'
  on-primary: '#ffffff'
  primary-container: '#8455ef'
  on-primary-container: '#fffbff'
  inverse-primary: '#d0bcff'
  secondary: '#555f6f'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f3'
  on-secondary-container: '#596373'
  tertiary: '#855000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a76500'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#d9e3f6'
  secondary-fixed-dim: '#bdc7d9'
  on-secondary-fixed: '#121c2a'
  on-secondary-fixed-variant: '#3d4756'
  tertiary-fixed: '#ffdcbb'
  tertiary-fixed-dim: '#ffb869'
  on-tertiary-fixed: '#2c1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  container-max-width: 1280px
---

## Brand & Style

The design system is engineered for professional authority and psychological comfort, tailored specifically for the Australian business landscape. It moves away from the typical "neon-glow" AI aesthetic, opting instead for a **High-End Minimalist** style that feels bespoke and institutional. 

The brand mark (the V-chevron) informs the visual language: sharp, upward-moving, and precise. The interface evokes the feeling of a premium consultancy rather than a tech startup. We achieve this through expansive white space, razor-sharp typography, and a "less is more" approach to color application. The emotional response is one of reliability, technical mastery, and calm efficiency.

## Colors

The palette is anchored by an **Off-White (#F9F9FB)** foundation to reduce eye strain and provide a gallery-like backdrop for content. 

- **Primary Purple (#8B5CF6):** Used sparingly for high-intent actions and critical brand signifiers. It represents the "intelligence" layer of the service.
- **Deep Charcoal (#1F2937):** Used for all primary text and the brand mark to ensure maximum legibility and a grounded, serious tone.
- **Surface Accents:** We use a very light purple tint (#F5F3FF) for subtle grouping of related information without breaking the minimalist flow.

## Typography

This design system utilizes a dual-sans-serif pairing to balance technical precision with human readability.

- **Geist** is used for headlines and labels. Its slightly condensed, monospaced-influenced geometry reinforces the "AI/Engineering" backbone of the agency while remaining sophisticated.
- **Inter** is used for all body copy to provide a neutral, highly legible experience for long-form content and data.

Large display type should use tighter letter-spacing to feel "locked-in" and architectural. Labels use uppercase styling with increased tracking for a premium, navigational feel.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a curated, editorial feel, transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid with 24px gutters. Content is often center-aligned with generous outer margins to focus the user's attention.
- **Rhythm:** We use an 8px base scaling system (derived from the 4px unit).
- **Desktop:** 80px side margins to create a "letterbox" effect that feels premium and intentional.
- **Mobile:** Margins shrink to 20px, and the 12-column grid collapses to a single column. Vertical spacing between sections should remain high (min 64px) to preserve the minimalist aesthetic.

## Elevation & Depth

This design system avoids heavy shadows. Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Base):** #F9F9FB.
- **Level 1 (Cards/Containers):** Pure White (#FFFFFF) with a 1px border of #E5E7EB. 
- **Interactive Depth:** When an element is hovered, we apply a very soft, diffused ambient shadow (8% opacity Charcoal, 20px blur) to suggest "lift" without looking dated.
- **The "Glass" Exception:** For navigation bars only, use a backdrop blur (20px) with 80% opacity White to maintain context of the content underneath as the user scrolls.

## Shapes

To mirror the sharp angles of the Vectolift logo, the shape language is **Soft (0.25rem)**. This provides a professional "workhorse" feel that isn't as aggressive as sharp corners but avoids the playfulness of fully rounded "pill" designs.

- **Standard Elements:** 4px (0.25rem) radius for inputs and small buttons.
- **Containers:** 8px (0.5rem) for cards and modals to provide a clear frame.
- **Exceptions:** The brand chevron should always retain its native sharp terminals as seen in the logo.

## Components

### Buttons
- **Primary:** Deep Charcoal background with White text. This creates an immediate "high-contrast" focal point. 4px radius.
- **Secondary:** Transparent background with 1px Charcoal border.
- **Tertiary (Action):** Premium Purple text only, used for "Learn More" or text links within a flow.

### Input Fields
- White background, 1px light gray border (#D1D5DB). On focus, the border transitions to Premium Purple with a 2px outer glow of the same color at 10% opacity.

### Cards
- Pure white background, 1px border (#E5E7EB). No shadow by default. Internal padding should be generous (min 32px) to allow the content to breathe.

### Chips & Badges
- Used for status or categories. Use a light purple tint (#F5F3FF) with Purple text (#8B5CF6). Font should be Geist Medium, 12px.

### Voice Visualizers
- For the AI aspect, use subtle, monochromatic wave patterns in Charcoal rather than glowing colors. This keeps the aesthetic grounded in professional audio/telephony rather than sci-fi.