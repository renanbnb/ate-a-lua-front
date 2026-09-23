---
name: Obsidian Orbit
colors:
  surface: '#131316'
  surface-dim: '#131316'
  surface-bright: '#39393c'
  surface-container-lowest: '#0e0e11'
  surface-container-low: '#1b1b1e'
  surface-container: '#1f1f22'
  surface-container-high: '#2a2a2d'
  surface-container-highest: '#353438'
  on-surface: '#e5e1e6'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e5e1e6'
  inverse-on-surface: '#303033'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#c9bfff'
  on-secondary: '#30236f'
  secondary-container: '#473b87'
  on-secondary-container: '#b7abff'
  tertiary: '#4ae176'
  on-tertiary: '#003915'
  tertiary-container: '#00a74b'
  on-tertiary-container: '#003111'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#e5deff'
  secondary-fixed-dim: '#c9bfff'
  on-secondary-fixed: '#1a075a'
  on-secondary-fixed-variant: '#473b87'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#131316'
  on-background: '#e5e1e6'
  surface-variant: '#353438'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
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
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
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
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system establishes a high-tier personal wealth ecosystem focused on precision, calm authority, and frictionless financial intelligence. Catering to affluent operators, crypto-native investors, and modern professionals, the aesthetic removes all visual clutter in favor of an immersive deep-space canvas that communicates stability and absolute security.

The visual direction merges **Minimalism** with ultra-subtle **Glassmorphism**. Layers of low-luminance obsidian surfaces (`#0D0D10` through `#222228`) ground the interface, while precise strikes of electric violet (`#8B5CF6`) and soft lilac (`#AB9FF2`) focus user attention on high-leverage actions and progress metrics. The emotional response is one of controlled clarity, elite discretion, and quiet digital sophistication.

## Colors

The color system is calibrated for deep dark mode readability with high-fidelity contrast tiers:

- **Primary Canvas & Surfaces**:
  - `canvas-base`: `#0D0D10` — The foundational dark backdrop.
  - `surface-subtle`: `#16161A` — Inactive track backgrounds, section group wrappers.
  - `surface-card`: `#1A1A1E` — Primary elevation for metrics, transaction lists, and wallets.
  - `surface-card-elevated`: `#222228` — Modals, popovers, active selection states, and interactive cards.
  - `surface-border`: `rgba(255, 255, 255, 0.06)` — Hairline structural separation.

- **Brand Accents**:
  - `accent-primary`: `#8B5CF6` — Anchor actions, key metrics, active toggles, chart focus points.
  - `accent-secondary`: `#AB9FF2` — Badges, secondary emphasis, pill fills, hover illuminations.
  - `accent-glow`: `rgba(139, 92, 246, 0.15)` — Micro-glow behind primary CTAs and active states.

- **Financial Telemetry (Semantic)**:
  - `success-emerald`: `#22C55E` — Yields, deposits, positive equity movements, cleared states.
  - `danger-soft`: `#EF4444` — Debits, outflow transactions, debt obligations, critical warnings.
  - `warning-amber`: `#F59E0B` — Pending settlement, escrow locks, verification alerts.

- **Typography & Content Hierarchy**:
  - `text-primary`: `#FFFFFF` — High-contrast headlines, monetary balance figures.
  - `text-secondary`: `rgba(255, 255, 255, 0.65)` — Labels, descriptions, secondary values.
  - `text-muted`: `rgba(255, 255, 255, 0.38)` — Timestamps, metadata, inactive icons.

## Typography

The type scale relies exclusively on `Inter`, leveraging its pristine horizontal metrics, tabular lining numbers for currency representations (`font-feature-settings: 'tnum' on, 'cv05' on`), and high-legibility aperture.

Large balance summaries use `display-lg` with tight negative tracking (`-0.03em`) to anchor numerical impact without visual splay. Micro-labels, asset tickers, and transactional status indicators utilize uppercase variants of `label-sm` with wider tracking (`0.04em`) to ensure instant scanning under dim lighting conditions.

## Layout & Spacing

The layout is built on a responsive 4-to-12 column fluid architecture keyed to an 8-point base rhythm, supplemented by 4px sub-increments for compact telemetry displays:

- **Mobile (< 768px)**: 4-column system, 16px (`1rem`) outer canvas margins, 16px gutters. Edge-to-edge full width cards with compact `space-md` internal paddings.
- **Tablet (768px – 1024px)**: 8-column layout, 32px (`2rem`) outer margins, 20px gutters. Dual-pane presentation for balance totals and list feeds.
- **Desktop (> 1024px)**: 12-column layout, 48px (`3rem`) outer margins, 24px (`1.5rem`) gutters, with a capped content wrapper max-width of `1280px` centered horizontally.

All spacing values define strictly empty dimensional rhythm between modules and parent containers.

## Elevation & Depth

Visual depth avoids muddy standard drop shadows, relying instead on structural luminance grading and translucent obsidian layering:

- **Tier 0 (Base Canvas)**: `#0D0D10` absolute background.
- **Tier 1 (Resting Container)**: `#1A1A1E` with a hairline top-stroke (`rgba(255, 255, 255, 0.05)`) and inset perimeter border (`1px solid rgba(255, 255, 255, 0.04)`).
- **Tier 2 (Floating & Interactive)**: `#222228` with subtle backdrop-filter blur (`16px`) when overlaid, reinforced with a soft directional glow: `box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.65), 0 0 1px 1px rgba(255, 255, 255, 0.08)`.
- **Primary CTA Elevation**: Buttons and active indicator badges receive a targeted micro-glow using the primary hue: `box-shadow: 0 8px 24px -4px rgba(139, 92, 246, 0.28)`.

## Shapes

The design system adopts a sophisticated rounded geometry. Component corners stay within an intentional range of 8px (`0.5rem`) up to 24px (`1.5rem`), aligning directly with modern high-end mobile OS standards:

- **Small Components (Chips, Badges, Micro-toggles)**: `rounded` (8px / `0.5rem`).
- **Form Controls & Action Buttons**: `rounded-lg` (16px / `1rem`).
- **Cards, Sheets & Overlays**: `rounded-xl` (24px / `1.5rem`).
- **Avatars & Pure Status Bullets**: Fully pill-shaped (`9999px`).

## Components

- **Buttons**:
  - *Primary*: Background `#8B5CF6`, text `#FFFFFF`, radius `rounded-lg` (16px), height 48px, subtle violet glow on hover/active states.
  - *Secondary*: Background `#222228`, border `1px solid rgba(255, 255, 255, 0.08)`, text `#AB9FF2`, radius `rounded-lg`.
  - *Ghost / Tertiary*: Flat transparent surface, text `rgba(255, 255, 255, 0.65)`, hover text `#FFFFFF`.

- **Cards**:
  - Constructed on `#1A1A1E` with corner radius `rounded-xl` (24px).
  - Outlined with an exact `1px solid rgba(255, 255, 255, 0.06)` border.
  - Padded with `space-lg` (24px) internally. Interactive cards elevate to `#222228` on pointer hover or touch depression.

- **Chips & Badges**:
  - Height 28px, corner radius `rounded` (8px), padding `0 10px`.
  - Financial trends use semantic variants: Green chips utilize `rgba(34, 197, 94, 0.12)` fill with `#22C55E` text; red chips utilize `rgba(239, 68, 68, 0.12)` fill with `#EF4444` text.
  - Category filters utilize `#222228` with `#AB9FF2` text when active.

- **Input Fields**:
  - Background `#16161A`, border `1px solid rgba(255, 255, 255, 0.08)`, height 52px, radius `rounded-lg` (16px), text `#FFFFFF`.
  - Focus state: border color `#8B5CF6`, halo `0 0 0 1px #8B5CF6`.

- **Lists & Transaction Rows**:
  - Borderless horizontal entries separated by dynamic spacing or faint dividers (`1px solid rgba(255, 255, 255, 0.04)`).
  - Left slot holds a 40px rounded icon container (`#222228`) with fine 1.5px stroke iconography.
  - Right slot houses monetary values in tabular figures: Emerald (`#22C55E`) prepended with `+` for inflows, Crisp White (`#FFFFFF`) with `-` for outflows.

- **Checkboxes & Segmented Controls**:
  - Checkboxes: 20px squares with 6px border radius, border `rgba(255, 255, 255, 0.2)`, filling to `#8B5CF6` with a white checkmark when selected.
  - Segmented Track: Background `#16161A`, active sliding segment `#222228`, radius `rounded-lg` (16px).