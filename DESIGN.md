---
# gstack: design-md-format=spec
name: Global Society of Young Physicists
description: Editorial physics education with precise typography, restrained color, and people-first research storytelling.
colors:
  primary: "#0b6e99"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-muted: "#f1f1ef"
  text: "#37352f"
  text-muted: "#9b9a97"
  accent: "#d9730d"
  success: "#0f7b6c"
  warning: "#dfab01"
  error: "#e03e3e"
typography:
  display:
    fontFamily: Lora
    fontWeight: 400 700
    fontSize: clamp(2.5rem, 8vw, 6rem)
    letterSpacing: -0.025em
  body:
    fontFamily: Roboto
    fontSize: 1rem
    lineHeight: 1.625
  label:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    letterSpacing: 0.1em
  mono:
    fontFamily: JetBrains Mono
    fontFeature: tnum
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 10px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
  button-primary-hover:
    backgroundColor: "#c2690b"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "#d8d8d3"
    rounded: "{rounded.none}"
  nav-link:
    textColor: "{colors.text-muted}"
    hoverTextColor: "{colors.text}"
---

# Global Society of Young Physicists

## Overview

**Creative North Star:** Make university-level physics feel approachable through editorial clarity, authentic people, and disciplined presentation.
**Product context:** A student-led physics research and publishing organisation for high-school students, university mentors, and prospective volunteers.
**Mode per surface:** Homepage and programme: Persuade; staff and mentor directory: Read and Operate; privacy and magazine archive: Read.
**Reference sites:** None.
**Key characteristics:**
- Serif headlines and structured editorial hierarchy.
- Generous white space with thin rules instead of heavy decoration.
- Blue for identity and orange for important actions.
- Real people, research imagery, and specific programme content.
- Square-edged controls and cards with clear interactive states.

## Colors

**Strategy:** Restrained — neutral surfaces carry long-form content while brand colors identify GSYP and guide action.
**Light or dark:** Light surfaces are the default for reading. Deep blue is used for focused heroes and closing calls to action rather than a full dark theme.
Use orange sparingly for primary actions. Use blue for links, labels, hero surfaces, and selected states. Muted text supports secondary information but body copy must remain readable.

## Typography

Lora is the editorial display face. Roboto handles biographies, descriptions, controls, and general reading. JetBrains Mono handles compact uppercase labels, years, and metadata. Local font files are the source of truth; preserve the existing `next/font/local` setup and font-display swap behavior.

Use display sizes for page heroes and section headings, not routine card titles. Keep body text at 16px or larger and allow headings and biographies to wrap naturally.

## Layout

Use a centered container with a maximum width of 1400px and responsive horizontal padding. Desktop profiles use three columns, tablet profiles use two, and mobile profiles use one. Long directories should provide a year selector that replaces the visible cohort rather than rendering every year at once.

Keep section spacing generous but avoid large empty regions between repeated content. Borders and alignment define structure more than nested containers.

## Elevation & Depth

Use thin borders for structure. Shadows are reserved for temporary overlays and navigation sheets, not ordinary content cards. Avoid glows and decorative elevation.

## Shapes

Cards, buttons, and most controls are square-edged. Rounded geometry belongs to orbital decoration and exceptional UI patterns, not the default card system. Nested shapes should not introduce decorative borders inside cards.

## Components

- **Buttons:** Use orange for the main application action and blue for secondary navigation actions. Provide a minimum 44px touch target and visible hover and focus states.
- **Profile cards:** Use real portraits when supplied and initials otherwise. Keep name, role, biography, and subject in a consistent reading order.
- **Year selector:** Buttons expose the selected year with `aria-pressed`, replace the visible cohort, and retain keyboard access and horizontal scrolling on narrow screens.
- **Navigation:** Route navigation marks the current page with `aria-current="page"`. Homepage anchors use root-relative URLs so they work from standalone routes.
- **Images:** Use `next/image`, meaningful alt text, responsive `sizes`, and priority loading only for likely above-the-fold images.

## Do's and Don'ts

- Do keep the complete supplied names, roles, biographies, and cohort information accurate.
- Do make application actions specific and link them to their real external forms.
- Do use authentic GSYP research and people imagery.
- Do preserve readable line lengths and test long biographies on mobile.
- Don't introduce generic dashboard cards, gradients, stock imagery, decorative blobs, or invented metrics.
- Don't hide all mentor cohorts behind a long page of repeated sections; show only the selected year.
- Don't rely on hover alone to expose important information.

## Motion

- **Approach:** Minimal-functional.
- **Easing:** Enter with ease-out, exit with ease-in, and move with ease-in-out.
- **Duration:** Micro 50–100ms, short 150–250ms, medium 250–400ms, long 400–700ms.
- **The one authored moment:** The homepage rotating research verb; other pages should favor immediate content and simple state transitions.
- Respect `prefers-reduced-motion` and never delay core content behind animation.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-10-26 | Initial design system created from the implemented site | Records the established GSYP interface and the approved Staff and Mentors People gallery. |
| 2026-10-26 | Staff and Mentors uses a single selected cohort | Keeps the archive short and cleaner while preserving access to every year. |
