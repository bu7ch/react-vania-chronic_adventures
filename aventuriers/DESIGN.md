---
name: React.js pour les aventuriers (demos)
description: La console arcanique, a sci-fantasy codex console for the course demos: ink-blue ground, slate panels with cut corners, cyan hairlines, rune gold for headings and the primary action.
colors:
  ink: "#070d17"
  ink-lower: "#0a1424"
  panel: "#101e33"
  panel-raised: "#172b47"
  field: "#0a1626"
  cyan: "#5ad2e6"
  cyan-dim: "#2f7f93"
  gold: "#e6b84a"
  gold-hover: "#f2c963"
  gold-ink: "#1a1405"
  ember: "#ff8f7a"
  text: "#e6f1f7"
  muted: "#8fb4c6"
  placeholder: "#7da0b2"
  slate: "#4a5b6b"
  scrollbar: "#2b4a66"
typography:
  display:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "clamp(1.9rem, 5vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.04em"
  headline:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.55rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.03em"
  body:
    fontFamily: "Rajdhani, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 500
    lineHeight: 1.45
  label:
    fontFamily: "Rajdhani, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    letterSpacing: "0.02em"
  footnote:
    fontFamily: "Rajdhani, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.45
rounded:
  none: "0px"
spacing:
  xs: "0.45rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2.5rem"
  cut: "16px"
components:
  card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "1.25rem 1.5rem 1.35rem"
  card-active:
    backgroundColor: "{colors.panel}"
  card-ko:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.muted}"
  button:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.cyan}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.95rem"
  button-hover:
    backgroundColor: "{colors.panel-raised}"
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.gold-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.95rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-hover}"
  button-disabled:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.muted}"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.7rem"
  health-bar:
    backgroundColor: "{colors.cyan}"
    height: "18px"
---

# Design System: React.js pour les aventuriers (demos)

## Overview

**Creative North Star: "La console arcanique"**

The Taverne de React-vania is rendered as a sci-fantasy codex console: every hero is an arcane readout on an opaque slate panel, health is counted in slanted cyan cells, and runes are gold. The system is neo-futuristic with the fantasy clichés kept (Cinzel capitals, rune gold, K.O. states) rather than the parchment-and-violet card or a neon-glow dashboard. Depth comes from cut geometry and one dark drop shadow; the only warm light is a faint gold wash at the top of the page, never a glowing element.

It is deliberately quiet infrastructure for a lesson. Learners are told the CSS is not theirs to understand, so the visual job is to make state legible at a glance: lit cells are health, a K.O. hero has none, an ember line is an alert, a struck-through button is unavailable. Every interactive element is a standard button or field.

The ground is a dotted ink-blue grid under a faint gold radial wash at the top (ellipse 900px by 380px, 13% gold); content sits in a single centered column (max 1040px). The world is dark only (`color-scheme: dark`).

**Key Characteristics:**
- Ink-blue ground with a faint cyan dot grid (34px) and a soft gold wash at the top, opaque slate panels on top.
- A gold hairline-and-diamond ornament under the page title.
- Two diagonal cut corners (16px) on every panel; parallelogram buttons; slanted health cells.
- Cyan is the structural color (hairlines, cells, secondary actions); gold is reserved for headings and the single primary action; ember is reserved for alerts.
- Cinzel for titles only; Rajdhani for everything else, tabular figures throughout.
- State is never carried by color alone: alerts carry text, disabled buttons are struck through, K.O. dims the heading and drops the cells.

## Colors

A cold ink-and-cyan field with one warm voice: rune gold, and one alarm: ember.

### Primary
- **Rune Gold** (#e6b84a): h1/h2 headings, the title ornament, the primary button fill, text selection, the input caret, focus rings, and the active-card hairline on hover. Hover fill steps to Lit Gold (#f2c963). Text on gold is Gold Ink (#1a1405).

### Secondary
- **Console Cyan** (#5ad2e6): button outlines and labels, health-bar cells, input underline, list markers, `accent-color`, the dot grid (at 12% alpha). Its dimmed form, Cyan Dim (#2f7f93), is the resting panel hairline and the footer rule.

### Tertiary
- **Ember** (#ff8f7a): alerts only. The `.warning` text and the health-bar fill of a card containing a warning.

### Neutral
- **Ink** (#070d17) page ground, fading to Ink Lower (#0a1424) in the body gradient.
- **Slate Panel** (#101e33): card and button interiors. **Raised Panel** (#172b47): button hover.
- **Field** (#0a1626): input and select fill.
- **Console White** (#e6f1f7): body text. **Muted Cyan-Grey** (#8fb4c6): subtitles, `em`, K.O. headings, disabled labels, footer. **Placeholder** (#7da0b2).
- **Dead Slate** (#4a5b6b): the K.O. hairline and disabled button outline. **Scrollbar** (#2b4a66).

### Named Rules
**The Gold Is Scarce Rule.** Gold appears on headings, the title ornament that belongs to the h1, the top-of-page wash, and the one primary action per context (Soigner in a card, any submit button). Hover or focus within a card may borrow gold for its hairline. Gold decoration is limited to that one title-bound ornament and the ambient wash; never use gold for other decoration or secondary buttons. A disabled primary leaves gold entirely.

**The Ember Means Alert Rule.** Ember is used only with an accompanying text alert. It is never a brand accent.

## Typography

**Display Font:** Cinzel (Georgia, serif), weight 700 (the only weight loaded)
**Body Font:** Rajdhani (system-ui, sans-serif), weights 500 and 700 (the only weights loaded)
**Label/Mono Font:** none distinct; tabular figures via `font-variant-numeric: tabular-nums` on the root.

**Character:** Cinzel's inscriptional capitals give the codex its fantasy voice; Rajdhani's squared, technical forms give it the console. Both load from Google Fonts via `@import` (needs Internet on first load).

### Hierarchy
- **Display** (700, clamp(1.9rem, 5vw, 3.1rem), 1.1, +0.04em): the page `h1`, gold, followed by the title ornament.
- **Headline** (700, 1.55rem, 1.2, +0.03em): hero names and panel titles (`h2`), gold; muted on K.O.
- **Body** (500, 1.15rem, 1.45): all running text, capped at 70ch.
- **Label** (700, 1.15rem, +0.02em): buttons and form labels.
- **Footnote** (500, 1rem): footer.

### Named Rules
**The Titles Only Rule.** Cinzel is for h1 and h2. Everything the learner reads or clicks is Rajdhani.

## Layout

A single centered column, `min(1040px, 100%)`, padded `clamp(1.25rem, 4vw, 2.5rem)` vertically and `clamp(1rem, 4vw, 1.5rem)` horizontally, 3rem bottom. Hero panels sit in a CSS grid, `repeat(auto-fit, minmax(min(100%, 22rem), 1fr))` with a 1.25rem gap: two columns at desktop, one on narrow screens, no breakpoint needed. Standalone panels have 1.25rem vertical margin; in the grid it is zero. Action rows and the add-hero form are wrapping flex rows (gap 0.6rem and 0.75rem); action buttons stretch to share the line, the form input grows from a 12rem basis. Footer sits 2.5rem below content.

## Elevation & Depth

Depth is one soft, dark drop shadow plus geometry; the page wash is ambient light on the ground, not an elevation cue. Panels carry `filter: drop-shadow(0 10px 14px rgba(0,0,0,0.45))` (a filter, so the shadow follows the cut corners). Buttons and fields are flat. There is no glow on elements and no hard offset shadow.

### Named Rules
**The Shadow Follows The Cut Rule.** Panel shadow is a `filter: drop-shadow`, never `box-shadow`, so cut corners stay honest. Interaction changes the hairline color and neighbours' opacity, not elevation.

## Shapes

Zero border radius everywhere. The form language is the diagonal: panels are hexagon-like polygons with two opposite 16px cut corners (top-left and bottom-right), with a 1px hairline drawn by stacking a hairline-colored pseudo-element under a panel-colored one inset by 1px (inner cut reduced by 0.59px to keep diagonal thickness even). Buttons are parallelograms (10px lean) built the same way. Health cells are 18px-high bars skewed -20deg and masked into ten cells with 4px gaps. Inputs are square with a 2px cyan underline only.

## Components

### Buttons
- **Shape:** parallelogram, 10px lean, 1px cyan hairline.
- **Default:** cyan label on slate panel fill (#101e33), padding 0.45rem 0.95rem, bold, nowrap. Hover raises the fill to #172b47; active nudges 1px down.
- **Primary:** gold fill, Gold Ink text. Applied to `button[type="submit"]` and to the second child of `.actions` (Soigner). Hover lightens to #f2c963.
- **Disabled:** muted label, struck through (2px line), slate hairline, panel face, not-allowed cursor. The primary button retreats the same way when disabled (muted text, slate edge, panel face), so it never stays gold.
- **Focus:** 2px gold outline, 4px offset.

### Cards / Containers
- Slate panel, cyan-dim hairline, two cut corners, padding 1.25rem 1.5rem 1.35rem, drop shadow per Elevation. Hover or focus-within sets the hairline to gold and fades sibling cards to 70% opacity. A `.ko` card turns the hairline Dead Slate and the title muted. Panel opacity and filter transition at 0.4s.

### Health Bar
- Ten slanted cells, 18px high, on a 16% cyan track; fill cyan, width animates 0.6s and the cells light left to right (`cells-in`) when a card appears. If the card contains a `.warning`, the fill turns ember. At zero, no cell is lit.

### Inputs / Fields
- Field fill (#0a1626), square, 2px cyan underline, no other border; padding 0.45rem 0.7rem. Focus moves the underline to gold and adds the gold 2px outline. Placeholder #7da0b2. Labels bold.

### Title Ornament
- A gold hairline (12px tall, `min(100%, 26rem)` wide, 0.7rem below the h1) with a centred diamond (12px half-width), drawn by `h1::after` with a clip-path. Decoration tied to the title only; do not reuse it on other headings.

### Motion
- One easing, `cubic-bezier(0.16, 1, 0.3, 1)`, for every transition (0.2s buttons, 0.4s panel opacity and shadow, 0.6s health width). One authored moment: `.bar-fill` runs `cells-in`, a 0.9s left-to-right clip-path reveal, when a card appears. Transitions and animation are both disabled under `prefers-reduced-motion`.

### Footer
- 1px cyan-dim top rule, muted 1rem centered text.

## Do's and Don'ts

### Do:
- **Do** keep gold for headings and one primary action per context.
- **Do** pair every ember or disabled state with a text or strikethrough cue.
- **Do** build new panels from the cut-corner polygon (16px) and new buttons from the parallelogram recipe.
- **Do** show state through the cell count, K.O. hairline, and heading dimming.
- **Do** use `drop-shadow` filter for panel shadow and respect `prefers-reduced-motion` (transitions and animation off).
- **Do** retreat a disabled primary to the muted, slate-edged look; a disabled control must never read as active.

### Don't:
- **Don't** use rounded corners, glowing elements, or neon blur; the world is hard-cut, opaque, and dark.
- **Don't** use the violet-and-gold parchment fantasy card or a neon dashboard look.
- **Don't** use gold or ember as decoration beyond the title ornament and page wash, or for secondary actions.
- **Don't** use Cinzel for body, labels or buttons.
- **Don't** let color alone carry state.
