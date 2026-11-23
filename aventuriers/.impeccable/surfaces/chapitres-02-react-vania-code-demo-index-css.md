---
version: 1
slug: "chapitres-02-react-vania-code-demo-index-css"
primary_target: "chapitres/02-react-vania/code-demo/index.css"
related_targets: ["chapitres/03-composants-listes/projets-exemples/hero-gallery/App.css","chapitres/04-etat/projets-exemples/tavern-vivante/App.css"]
---

# Surface brief: course demo theme (La Taverne de React-vania)

## Scope and mode
Mode: Operate. The shared theme `chapitres/02-react-vania/code-demo/index.css` plus the per-demo `App.css` files of chapters 3 and 4. CSS only; the JSX of every demo stays exactly as the course quotes it.

## Audience, task, constraints
Francophone beginners copy the CSS next to the demo JSX and run it; they read the state shown (health, K.O., counter) to understand props and state. Plain CSS, Google Fonts `@import` allowed, no build step. Class names fixed by the JSX: card, hero-card, ko, bar, bar-fill, subtitle, warning, gallery, actions, add-hero-form.

## Direction contract
THESIS: The tavern becomes a sci-fantasy codex console: each hero is an arcane readout, health is counted in cyan cells, runes are gold. It refuses both the violet-and-gold parchment fantasy card and the neon-glow dashboard.
OWN-WORLD: Ink-blue ground (#070d17), opaque slate panels (#101e33) cut at two corners, cyan hairlines, rune gold (#e6b84a) only for headings and the primary action, ember (#ff8f7a) reserved for alert states, ivory-white text. Cinzel capitals for titles, Rajdhani for everything else, tabular figures. Buttons are parallelograms; health cells are slanted.
STORY: A learner reads state at a glance: lit cells are health, a K.O. hero has no lit cell, an ember alert and a struck-through disabled Blesser. Hover or focus lights one hero while the others recede. Every action is a standard button.
FIRST VIEWPORT: Chapter 4 at desktop: gold Cinzel title top-left, subtitle with the derived count, a form panel (label, cyan-underlined input, gold Ajouter), then hero panels in a two-column grid (one column under 720px); Soigner is the gold primary, Blesser the quiet cyan outline.
FORM: La console arcanique, a grounded candidate from the user-steered safer round (neo-futuristic with the fantasy clichés kept), seed:525abe7c39c93702.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved decisions
None blocking. Open: whether the repository README gets a banner in the same world.
