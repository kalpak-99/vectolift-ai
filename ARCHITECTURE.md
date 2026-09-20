# ARCHITECTURE.md

## Overview

This app is the Vectolift marketing site. It began from a generated static Next.js App Router export and now contains Vectolift-specific pages, assets, SEO metadata, crawler files, and structured data.

## Structure

- `src/app/layout.tsx`: root App Router layout, language, metadata, viewport, JSON-LD, and shared shell.
- `src/app/page.tsx` and nested route `page.tsx` files: generated route bodies.
- `src/app/globals.css`: reset, font faces, design tokens, and global page base.
- `src/app/ditto.css`: generated route or page fidelity CSS.
- `src/app/content.ts`: editable data layer when repeated regions were promoted.
- `src/app/components/`, `src/app/sections/`, `src/app/svgs/`: generated JSX modules.
- `src/app/ditto/`: runtime helpers for interaction and motion recipes.
- `public/assets/cloned/`: materialized source assets.

## Styling

The generator uses Tailwind classes for declarations that can be represented as stable utilities. Some styles remain in `ditto.css` because they are route-scoped, pseudo-element based, keyframe based, interaction-state based, or too specific to translate safely without changing the rendered result.

## Anchors

`data-ditto-id` exists in delivered apps where runtime utilities or generated CSS still need a stable DOM anchor. Validation-only capture ids are stripped from production output and should not be reintroduced.

## Recipes And Runtime

Recipes identify higher-level patterns such as repeated cards, logo clouds, navigation, disclosures, accordions, tabs, carousels, and motion. Sections and components provide editable structure, SVG modules preserve source artwork, and `src/app/ditto` applies the small runtime behaviors that were captured safely. Runtime utilities emitted for this clone: DropdownMenu.

## Clone Metadata

- routes: 1
- extracted components: 8
- section modules: 7
- SVG modules: 11
- content module: yes
- component extraction requested: yes

## Routes

- / - Vectolift - Never Miss Another Call

## Tradeoffs

The site prioritizes deterministic static rendering, accessible markup, local asset materialization, and stable SEO output. It may keep measured CSS where inferred layout intent is uncertain. External services, live personalization, payments, auth, and complex client app state are only added when implemented directly for Vectolift.
