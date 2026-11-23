# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Existing codebase. The course demos are small Vite + React 19 apps in plain CSS (no CSS framework, no runtime dependency beyond React). Learners copy a demo's CSS and JSX files into their own Vite project (`npm create vite@latest ... --template react`).

## Users
Francophone beginners learning React, following the course chapter by chapter. They read the Markdown course, then copy the demo files (`code-demo/`, `projets-exemples/`) into their own Vite project and run `npm run dev` in a browser on localhost. They read the JSX; they are told explicitly that the CSS is not something they need to understand ("Tu n'as RIEN à comprendre ici").

## Product Purpose
"React.js pour les aventuriers" teaches React through an RPG metaphor: each concept is a game mechanic, each exercise a battle, each chapter a quest in four phases (CREATE, ANALYZE, EVALUATE, CREATE libre). The demos show the result of each chapter. Success: a learner understands the concept the demo illustrates (props, lists, state) and is motivated to continue, not distracted or blocked by the demo's presentation.

## Positioning
A free, public, French-language course where the fiction never replaces the real technical term (every chapter has a "Sans métaphore" box) and every code sample has been run before being published.

## Operating Context
The demos are a single scene: "La Taverne de React-vania", a list of adventurer cards (name, title, level, health bar, status) with actions (hit, heal, dismiss, add, reset). Chapter 2 shows one hero sheet; Chapter 3 a gallery and an inventory; Chapter 4 adds interaction (buttons, form, K.O. state, derived counter). Demo data is synthetic (Aragorn, Gandalf, Legolas, Frodon).

## Capabilities and Constraints
- Surfaces in scope (confirmed): the demos of chapters 2, 3 and 4: `chapitres/02-react-vania/code-demo/` (App.jsx, index.css), `chapitres/03-composants-listes/projets-exemples/hero-gallery/` and `item-list/`, `chapitres/04-etat/projets-exemples/tavern-vivante/`.
- Restyle is CSS-only (confirmed): JSX is frozen, because the course text and quests quote it verbatim. Class names consumed by the JSX must keep working: `card`, `hero-card`, `ko`, `bar`, `bar-fill`, `subtitle`, `warning`, `gallery`, `actions`, `add-hero-form`, plus bare `h1`, `h2`, `header`, `footer`, `button`, `input`, `ul`, `em`.
- Fonts (confirmed): Google Fonts via `@import` at the top of the CSS is allowed.
- The CSS must be copy-paste friendly: one shared theme file plus one small CSS file per demo that needs it. No build step, no preprocessor, no new dependency.
- Not decided: whether the README / repository gets a banner or illustration.

## Brand Commitments
French, informal "tu", RPG metaphor, emoji in headings (🍺 ⚔️ 🔮 🏹 💀). The visual world the user asked for in the redesign brief is **heroic fantasy** ("mode héroïque fantasy"), later steered to "dans un style néo-futuriste mais qui garde les clichés" (the user's words, binding): fantasy clichés kept inside a neo-futuristic treatment. The user chose the "console arcanique" direction (dark panels, cyan hairlines, gold runes, cut corners) from the decision page.

## Evidence on Hand
Working demos and their CSS at the paths above, verified by tests and a running dev server. No logo, brand guide or illustration assets exist. Synthetic demo data only; no real customers, testimonials or metrics.

## Product Principles
1. The CSS never becomes a lesson: it must be trivial to copy and must not compete with the code the course teaches.
2. The theme serves the concept being taught: state changes (health bar, K.O., disabled buttons, derived counter) must be unmistakable at a glance.
3. The JSX shown in the course stays exact; the look adapts to the markup, not the reverse.
4. Fiction supports comprehension and never hides function: every control reads as what it does.
5. One shared visual world across chapters 2-4, so the demos feel like one game.

## Accessibility & Inclusion
Readable contrast for body text and controls (WCAG AA), visible keyboard focus, no information carried by color alone (the K.O. state already has text and an icon), and reduced-motion respected for any motion.
