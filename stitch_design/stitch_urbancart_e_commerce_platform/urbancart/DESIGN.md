---
name: UrbanCart
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#434656'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#0044b7'
  on-tertiary: '#ffffff'
  tertiary-container: '#165be3'
  on-tertiary-container: '#dee3ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.005em
  price-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  price-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-sm: 0.75rem
  margin: 1rem
  margin-md: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes an architectural, editorial e-commerce experience engineered for discerning shoppers who prioritize curate-first discovery, typographic clarity, and effortless execution. Drawing inspiration from modern digital flagships and luxury apparel retailers, the visual language balances stark European editorial restraint with Apple-grade product precision.

### Design Movement & Ethos
- **Curated High-Contrast Minimalism**: Content and product photography lead every layout. Interfaces function as museum plinths—understated, highly considered, and mathematically disciplined.
- **Electric Precision**: Dynamic moments, checkouts, and transactional elements break through monochrome restraint with singular, concentrated bursts of vivid electric blue.
- **Tactility & Micro-Delight**: Interactive elements feature responsive micro-transitions, crisp borders, and subtle physical response cues without resorting to skeuomorphic clutter.

## Colors

The palette relies on pure optical whites, layered architectural charcoals, and fine neutral greys to establish deep spatial clarity. The electric blue serves strictly as an intentional signal—reserved exclusively for active interactive states, conversion hooks, and key informational badges.

### Palette Architecture
- **Base Canvas (`#FFFFFF`)**: Pure pristine white providing maximum luminescence and high-contrast separation for studio photography.
- **Surface Elevation Layers**:
  - `Surface Low` (`#F7F7F8`): Soft grey field used for secondary module backgrounds, input shells, and screen-wide section splitters.
  - `Surface Mid` (`#EFEFF1`): Inset backgrounds, disabled states, and skeleton loaders.
  - `Border Subtle` (`#E2E2E6`): Single-pixel hairline dividers separating inventory items without visual noise.
- **Typography & Monochrome Accents**:
  - `Text Primary` (`#121212`): High-density charcoal-black for headlines, primary navigation labels, and critical numbers.
  - `Text Secondary` (`#71717A`): Balanced zinc neutral for microcopy, product metadata, attributes, and secondary ratings.
  - `Surface Inverted` (`#1E1E1E`): Dark charcoal treatment used for primary high-impact call-to-action buttons and system toasts.
- **Interactive Electric Primary (`#0052FF`)**:
  - High-chroma cobalt blue applied strictly to focal points: final purchase CTAs, selected filter pills, notification dots, verified authenticity tags, and live step markers.

## Typography

The type scale combines the editorial poise of **Plus Jakarta Sans** for titles and collection headings with the mechanical readability of **Inter** for all UI surfaces, descriptive copy, and tabular datasets.

### Numerical & Tabular Conventions
- All numerical price presentations (e.g., `₹4,999`) mandate `font-feature-settings: "tnum" 1, "cv05" 1` to guarantee rigid vertical alignment across checkout receipts, bag drawers, and product matrices.
- Currency symbols are tracked identically to the numeric values they precede, remaining unstyled from the core figure to preserve editorial weight integrity.
- Uppercase styling is reserved strictly for `label-sm` metadata tags, badges, and contextual system alerts.

## Layout & Spacing

Layout geometry follows an 8-point spatial system optimized for handheld ergonomics on ~390px mobile viewports, scaling up to structured multi-column fluid desktop configurations.

### Grid & Viewport Adaptability
- **Mobile (Base ~390px)**:
  - Outer screen edge margin: `margin` (`16px`).
  - Gutter between 2-up product discovery grids: `gutter-sm` (`12px`).
  - Strict 48px baseline touch targets for all primary interaction hitboxes.
- **Tablet / Expanded Viewport (768px - 1024px)**:
  - 6-column layout with 24px margins and 16px gutters.
- **Desktop (1024px+)**:
  - Max container constraint of 1280px, 12-column layout with 32px gutters and centered margins.

### Vertical Cadence
- Content sections inside screens separate at `space-xl` (`32px`).
- Form elements and related metadata stack with `space-sm` (`8px`) or `space-md` (`16px`).
- In-card elements (title, price, brand marker) conform tightly with `space-xs` (`4px`) and `space-sm` (`8px`).

## Elevation & Depth

Spatial layering rejects heavy drop shadows in favor of precise tonal surfaces, razor-thin outlines, and translucent frosted backdrops.

### Surface Tiers & Overlays
1. **Level 0 (Base Canvas)**: Static, crisp white (`#FFFFFF`) foundation.
2. **Level 1 (Structured Cards & Inputs)**: Flat placement atop canvas defined strictly through a 1px border of `#E2E2E6`. No shadow used in default resting states.
3. **Level 2 (Floating Action Bars & Elevated Filters)**: Utilizes ultra-fine ambient diffusion: `0 4px 20px -2px rgba(18, 18, 18, 0.05)`, encased by a 1px border of `#EFEFF1`.
4. **Level 3 (Modal Sheets, Flyouts & Bottom Navigation)**: Frosted glass finish using background `rgba(255, 255, 255, 0.88)` backed by `backdrop-filter: blur(20px)` and framed with a 1px top border of `#E2E2E6`.
5. **Level 4 (Hover / Active Product Lift)**: Micro-elevation on interactive cards using `0 12px 28px -4px rgba(18, 18, 18, 0.08)` to present physical tactile feedback.

## Shapes

The geometry uses calibrated curvature (`roundedness: 2`), delivering a modern, friendly, yet architectural silhouette without drifting into toy-like softness.

### Corner Radius Distribution
- **Cards, Modals & Base Panels (`rounded`, 8px)**: Standard corner applied to product media containers, checkout cards, modal dialogue frames, and sheet containers.
- **Large Drawers & Banners (`rounded-lg`, 16px)**: Applied to top corners of bottom-sliding checkout sheets and promotional banners.
- **Interactive Controls & System Badges (`Pill`, 9999px)**: Full pill geometry is assigned to utility filter chips, status badges, quantity controllers, and global search bars to reinforce swift thumb navigation.

## Components

### Buttons & Tactile CTAs
- **Primary CTA**: Solid `#121212` background, white label, 52px height on mobile with 12px corner radius or full pill shape. Active press scale transition: `scale(0.98)` with 150ms ease-out.
- **Accent Conversion CTA**: Solid `#0052FF` background with pure white typography, used exclusively for primary bag additions and checkout actions.
- **Secondary / Ghost**: Transparent fill with a 1px solid `#E2E2E6` stroke, defaulting to `#121212` text. Hover shifts to `#F7F7F8` fill.

### Search Bar
- 44px height pill-shaped shell filled with `#F7F7F8` and bordered with 1px `#E2E2E6`.
- Prefaced by a 18px stroke icon in `#71717A`.
- Placeholder styled in `Inter 14px regular` using `#71717A`.
- Active focus transitions the border to `#0052FF` with a subtle 2px outer glow (`rgba(0, 82, 255, 0.15)`).

### Product Cards
- **Media Frame**: Strict 3:4 aspect ratio container, `#F7F7F8` background, corner radius of 8px, overflow hidden. Contains a floating 32px circular pill bookmark/wishlist icon button at top-right.
- **Information Stack**: 8px margin-top below image. Includes `label-sm` uppercase brand category in `#71717A`, followed by a 1-line truncated title in `headline-sm` (`#121212`), ending with `price-md` in `#121212` with tabular rupee values.
- **Outlines**: 1px perimeter border of `#E2E2E6` maintaining spatial order across dense grid arrangements.

### Bottom Navigation
- 64px height bar anchored above mobile home indicator with `rgba(255, 255, 255, 0.9)` background and 24px backdrop blur.
- Minimal hairline top divider (`1px solid #E2E2E6`).
- 4 to 5 icon items with active states highlighted in `#0052FF` accompanied by a 4px dot indicator; inactive icons resting in `#71717A`.

### Badges & Filter Chips
- **Status Badges**: Pill-shaped 22px height containers.
  - New / Editorial: `#121212` fill, `#FFFFFF` text.
  - Verified / Fast Delivery: `#0052FF` fill with `#FFFFFF` text or tint `rgba(0, 82, 255, 0.08)` with `#0052FF` text.
- **Interactive Filter Chips**: Height 36px, pill-shaped. Resting state: `#FFFFFF` fill with 1px `#E2E2E6` border. Active state: `#121212` fill with white text and borderless transition.

### Quantity Stepper
- Compact horizontal pill container (36px height) with `#F7F7F8` surface fill and 1px `#E2E2E6` outline.
- Minimalist `-` and `+` touch icons with fixed 32px touch widths flanking centered tabular numerical count in `Inter 14px semi-bold`.

### Order Stepper
- Horizontal progress track with 2px stroke lines connecting circular 24px node rings.
- Completed and active steps utilize `#0052FF` fill with crisp white check marks or current dot indicators; upcoming steps remain neutral `#E2E2E6` with `#71717A` typography.

### Empty & Loading States
- **Loading Skeleton**: Shimmer gradient translating smoothly from `#F7F7F8` through `#EFEFF1` to `#F7F7F8` with a 1.5s infinite sweep across cards and headers.
- **Empty States**: Centered 64px monochrome line illustrations, 8px vertical spacing between bold short titles and helpful guidance copy, paired with a single 44px primary action button.