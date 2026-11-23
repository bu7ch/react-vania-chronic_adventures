# React.js pour les aventuriers 🎮⚔️

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/bu7ch/react-vania-chronic_adventures?style=social)](https://github.com/bu7ch/react-vania-chronic_adventures)

> **Un voyage immersif dans l'univers React — Du débutant au créateur de jeux**

Bienvenue dans React-vania Chronicle Adventures ! Ce n'est pas un manuel technique ennuyeux. C'est une **quête initiatique** où chaque concept React devient une mécanique de jeu, chaque exercice une bataille.

**Langue :** Français | **Dernière mise à jour :** Novembre 2026

> 🚧 **État du cours :** les chapitres 1 à 4 sont disponibles. Le chapitre 4.5 est en cours d'écriture ; le reste est à venir (voir la [feuille de route](./ROADMAP.md)).

---

## 🎯 Pourquoi ce cours ?

| Aspect | Ce cours | Epic React | Scrimba | freeCodeCamp |
|--------|----------|-----------|---------|--------------|
| **Accessibilité** | Gratuit + €20 | $300 | €159 | Gratuit |
| **Pédagogie** | Analyze/Evaluate/Create | Expert | Débutant | Basique |
| **Métaphore immersive** | ✅ RPG | ❌ Non | ❌ Non | ❌ Non |
| **Chapitre technique** | ✅ Ch 4.5 (à venir) | Oui | Non | Non |
| **Dépôt public** | ✅ Solutions commentées | Non | Paywall | Oui |
| **Temps d'apprentissage** | 30-40h | 50h+ | 20h | 50h+ |

**TL;DR :** Meilleur apprentissage pour le prix. Formation réelle, pas juste du code.

---

## 📚 Structure du cours

```
PARTIE 1 : FONDATIONS (Chapitres 1-3)
├── Ch 1 : Le Royaume de JavaScript
│   └─ Variables, fonctions, objets, destructuring
├── Ch 2 : Bienvenue à React-vania
│   └─ Setup Vite, premier composant, JSX
└── Ch 3 : Les Composants + Listes
    └─ Props, listes, .map(), clés

PARTIE 2 : LOGIQUE (Chapitres 4-4.5, en cours d'écriture)
├── Ch 4 : L'État = Ta Barre de Santé
│   └─ useState, états multiples
└── Ch 4.5 : La forge du réactomancien
    └─ DOM virtuel, batching, clés, hooks

PARTIE 3 : PROJETS (Chapitres 5-6+)
├── Ch 5 : Patterns composants avancés (à venir)
├── Ch 6 : useEffect & side effects (à venir)
└── Ch 7+ : Construire un jeu RPG complet (à venir)
```

---

## 🚀 Démarrage rapide

### **1. Lire le cours (gratuit)**

```bash
# Clone le repo
git clone https://github.com/bu7ch/react-vania-chronic_adventures.git
cd react-vania-chronic_adventures/aventuriers

# Ouvre le premier chapitre
cat ./chapitres/01-royaume-javascript/README.md

# Ou lis directement sur GitHub
# → aventuriers > chapitres > 01-royaume-javascript > README.md
```

### **2. Faire les quêtes (exercices)**

Chaque chapitre a **4 phases** :

```
🗡️  Phase 1 : CREATE        (code le projet)
🔍 Phase 2 : ANALYZE       (réponds aux questions)
⚖️  Phase 3 : EVALUATE      (compare les approches)
🏆 Phase 4 : CREATE libre  (résous le défi)
```

### **3. Vérifier tes réponses (solutions)**

Les solutions sont sur des branches, une par chapitre (`solutions-chN-phase2`), qui regroupent les solutions des phases 2 et 4 (la Phase 3 est une question d'opinion) :

```bash
# Voir les solutions du Ch 1
git fetch origin
git checkout solutions-ch1-phase2

# Revenir au code principal
git checkout main
```

---

## 📂 Structure du dépôt

> 🚧 Ce plan montre la structure **cible**. Aujourd'hui existent : `README.md`, `GETTING_STARTED.md`, `STRUCTURE.md`, `CONTRIBUTE.md`, `ROADMAP.md`, `CHANGELOG.md`, `LICENSE` et `chapitres/` (chapitres 1 à 3). Les autres dossiers sont à venir. Les dossiers `solutions/` vivent sur des branches (voir plus bas).

```
aventuriers/
│
├── 📄 README.md (ce fichier)
├── 📄 GETTING_STARTED.md (guide détaillé)
├── 📄 STRUCTURE.md (explication de l'arborescence)
├── 📄 CONTRIBUTE.md (comment contribuer)
│
├── 📁 chapitres/                    ← Contenu du cours
│   ├── 01-royaume-javascript/
│   │   ├── README.md               ← Contenu du chapitre
│   │   ├── quete-1.md              ← Énoncé de la quête
│   │   ├── mini-exos/              ← Exercices rapides
│   │   │   ├── exo-variables.js
│   │   │   ├── exo-fonctions.js
│   │   │   ├── exo-objets.js
│   │   │   └── exo-destructuring.js
│   │   ├── solutions/              ← Sur la branche solutions-ch1-phase2
│   │   │   ├── phase2-analyze.md   ← Réponses aux questions
│   │   │   └── phase4-create.js    ← Solution du défi
│   │   └── test-rapide.md          ← Auto-évaluation
│   │
│   ├── 02-react-vania/
│   │   ├── README.md
│   │   ├── quete-2.md
│   │   ├── code-demo/
│   │   │   ├── App.jsx             ← Exemple complet
│   │   │   └── index.css           ← Thème du cours (« console arcanique »)
│   │   └── test-rapide.md
│   │
│   ├── 03-composants-listes/
│   │   ├── README.md
│   │   ├── quete-3.md
│   │   ├── projets-exemples/
│   │   │   ├── hero-gallery/       ← App, HeroGallery, HeroCard, App.css
│   │   │   └── item-list/          ← App, Panel, ItemRow
│   │   └── test-rapide.md
│   │
│   ├── 04-etat/
│   │   ├── README.md
│   │   ├── quete-4.md
│   │   ├── projets-exemples/
│   │   │   └── tavern-vivante/     ← App, HeroGallery, HeroCard, AddHeroForm, App.css
│   │   └── test-rapide.md
│   │
│   └── 04-5-forge-reactomancien/   (à venir)
│       ├── README.md
│       ├── concepts/
│       │   ├── dom-virtuel.md
│       │   ├── batching.md
│       │   ├── cles.md
│       │   └── hooks-rules.md
│       ├── mini-exos/
│       │   ├── exo1-observer-rerender.jsx
│       │   ├── exo2-piege-batching.jsx
│       │   ├── exo3-batching-timeout.jsx
│       │   ├── exo4-bug-cles.jsx
│       │   ├── exo5-cles-stables.jsx
│       │   └── exo6-hook-order.jsx
│       ├── ateliers-comparatifs/
│       │   ├── react-vs-vanilla.md
│       │   └── usestate-vs-usereducer.md
│       └── test-rapide.md
│
├── 📁 ateliers-comparatifs/        ← Exercices de comparaison
│   ├── grille-composants.md
│   ├── grille-state.md
│   ├── grille-performance.md
│   └── solutions-debat.md
│
├── 📁 projets-complets/            ← Projets du début à la fin
│   ├── 01-hero-gallery/
│   │   ├── README.md
│   │   ├── starter/
│   │   │   └── App.jsx
│   │   ├── solution/
│   │   │   ├── App.jsx
│   │   │   ├── HeroCard.jsx
│   │   │   └── App.css
│   │   └── variantes/
│   │       ├── avec-api.jsx
│   │       └── avec-filtrage.jsx
│   │
│   ├── 02-quest-system/
│   │   ├── README.md
│   │   ├── starter/
│   │   ├── solution/
│   │   └── bonus/
│   │
│   └── 03-battle-simulator/
│       ├── README.md
│       ├── starter/
│       ├── solution/
│       └── extensions/
│
├── 📁 bonus/                       ← Contenu optionnel
│   ├── typescript-intro.md
│   ├── testing-intro.md
│   ├── performance-tips.md
│   ├── design-patterns.md
│   └── erreurs-courantes.md
│
├── 📁 ressources/                  ← Outils & références
│   ├── cheat-sheets/
│   │   ├── hooks-cheatsheet.md
│   │   ├── jsx-cheatsheet.md
│   │   └── react-patterns.md
│   │
│   ├── outils/
│   │   ├── vite-setup.sh
│   │   ├── test-runner.js
│   │   └── benchmark.js
│   │
│   └── references/
│       ├── react-docs-links.md
│       ├── videos-recommandees.md
│       └── livres-a-lire.md
│
├── 📁 community/                   ← Communauté
│   ├── DISCORD.md
│   ├── FAQ.md
│   ├── TESTIMONIALS.md
│   └── success-stories.md
│
├── 📁 .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug.md
│   │   ├── question.md
│   │   └── suggestion.md
│   │
│   ├── workflows/
│   │   ├── lint-code.yml
│   │   └── check-links.yml
│   │
│   └── pull_request_template.md
│
├── 📄 ROADMAP.md                   ← Feuille de route
├── 📄 CHANGELOG.md                 ← Historique des versions
├── 📄 LICENSE                      ← CC BY-NC-SA 4.0
└── .gitignore
```

---

## 🌿 Les branches du dépôt

```
main/                           ← Code principal (ce que tu lis)
├── solutions-ch1-phase2        ← Solutions du Ch 1 (phases 2 et 4)
├── solutions-ch2-phase2        ← à venir
├── solutions-ch3-phase2        ← à venir
├── solutions-ch4-phase2        ← à venir
└── solutions-ch45-mini-exos    ← à venir (les 6 mini-exos du Ch 4.5)
```

La convention : **une branche de solutions par chapitre**, nommée `solutions-chN-phase2`. Elle regroupe les solutions de toutes les phases du chapitre qui en ont une (les Phases 2 et 4). La Phase 3 (Evaluate) n'a pas de « bonne » réponse unique.

**Comment utiliser :**

```bash
# Tu codes et tu bloques sur le Ch 1
git fetch origin
git checkout solutions-ch1-phase2

# Tu vois la solution, tu analyses
# Puis tu reviens à main pour continuer
git checkout main
```

---

## 📖 Comment lire le cours

### **Option 1 : Sur GitHub (recommandé)**

1. Va sur [`chapitres/`](./chapitres/)
2. Ouvre un chapitre → `README.md`
3. Lis le contenu
4. Fais la quête dans `quete-X.md`
5. Code en parallèle
6. Consulte la branche de solutions du chapitre si besoin

### **Option 2 : En local avec VS Code**

```bash
git clone https://github.com/bu7ch/react-vania-chronic_adventures.git
cd react-vania-chronic_adventures/aventuriers
code .

# Ouvre Markdown Preview Enhanced (extension VS Code)
# Ctrl+K, V (ou Cmd+K, V sur Mac)
```

---

## 🎓 Progressions recommandées

### **Pour un débutant complet**

```
Semaine 1 : Chapitre 1 (JavaScript) + Mini-exos
Semaine 2 : Chapitre 2 (React setup)
Semaine 3 : Chapitre 3 (Composants)
Semaine 4 : Chapitre 4 (État) + Chapitre 4.5 (Forge, à venir)
Semaine 5 : Projets pratiques                               (à venir)
Semaine 6-7 : Projet final : construire un jeu              (à venir)
```

**Tempo :** 1 chapitre/semaine, 5-6h/semaine

### **Pour un dev avec notions de JS**

```
Jour 1 : Survole Ch 1-2
Jour 2-3 : Ch 3 (Composants + Listes) en détail
Jour 4-5 : Ch 4 + 4.5 (État + technique)
Jour 6-7 : Projets
```

**Tempo :** 1 week, 20-25h total

### **Pour progresser au-delà**

```
Chapitres 5-6+ (à venir)
Bonus : TypeScript, Testing, Patterns avancés
Dépôt communauté : voir les variantes de projets
```

---

## 🚀 Setup rapide (pour coder les quêtes)

### **Créer un projet React pour suivre le cours**

```bash
# Avec Vite (recommandé)
npm create vite@latest mon-aventure-react -- --template react
cd mon-aventure-react
npm install
npm run dev

# Visite http://localhost:5173
```

### **Où mettre tes fichiers ?**

- **Chapitre 1 et Quête 1 :** pas de projet React. Écris du JavaScript pur dans un fichier (par exemple `hero.js`) et lance-le avec `node hero.js`.
- **Chapitre 2 :** tu remplaces le contenu de `src/App.jsx` de ton projet Vite (voir le chapitre).
- **Chapitre 3 :** tu ajoutes tes composants à plat dans `src/` (`HeroCard.jsx`, `StatBar.jsx`, `HeroGallery.jsx`...) et `App.jsx` les importe.

Astuce : fais un `git commit` à la fin de chaque quête (ou copie ton projet) pour garder une trace de ta progression.

---

## ❓ FAQ

### **"Je bloque sur une quête, où chercher de l'aide ?"**

```
1. Relis la section du chapitre et refais le mini-exo similaire (quand il y en a)
2. Vérifie la solution correspondante (branche solutions-chN-phase2)
3. Ouvre une issue GitHub ("Help wanted: Ch 3, Phase 2")
4. Pose ta question dans les GitHub Discussions (lien ci-dessous)
```

### **"Comment je sais si mes réponses sont bonnes ?"**

```
- Phase 2 (Analyze) : Réponses sur la branche solutions-chN-phase2
- Phase 3 (Evaluate) : Aucune "bonne" réponse, c'est une opinion
- Phase 4 (Create libre) : Vérifie sur la même branche, il y a des variantes
- Test rapide : Auto-évaluation à la fin du chapitre
```

### **"Puis-je contribuer ?"**

**OUI ! Consulte [`CONTRIBUTE.md`](./CONTRIBUTE.md) pour :**
- Signaler une erreur/typo
- Ajouter une variante de solution
- Proposer un exercice bonus
- Traduire en autre langue

### **"C'est gratuit ?"**

```
✅ Les chapitres 1-3 : gratuit (toujours)
✅ Les solutions (GitHub) : gratuit
⚠️  Les chapitres 4-6 (complets) + bonus : version payante en préparation
```

Actuellement : **tout est gratuit pendant la phase bêta**. Les acheteurs payants auront accès plus tôt + contenu bonus.

### **"J'ai une meilleure explication pour un concept ?"**

Super ! Ouvre une issue avec :
```markdown
Chapitre: 3
Concept: Les clés
Suggestion: [ta meilleure explication]
```

Ton nom sera dans les crédits ! 🙌

---

## 🎯 Objectifs du projet

- 🎯 Former 50K+ débutants en React
- 🎯 Créer un standard pédagogique (Higher Order Learning)
- 🎯 Construire une communauté francophone/anglophone
- 🎯 Prouver qu'un cours gratuit peut rivaliser avec du payant
- 🚀 Lancer des formations avancées (sur la base de ce contenu)

---

## 📊 Progression du projet

```
✅ Chapitres 1, 2, 3, 4 : écrits (README, quête, test rapide, exemples)
🔄 Chapitre 4.5 (forge) : en cours d'écriture
🔜 Chapitres 5-6 (patterns, useEffect) : à venir
🔜 Projets complets, bonus, ressources : à venir
```

Le détail et l'ordre prévu sont dans la [feuille de route](./ROADMAP.md).

---

## 🏆 Reconnaissances

**Inspirations pédagogiques :**
- Kent C. Dodds (Epic React)
- The Net Ninja (clarté didactique)
- Wes Bos (approche pratique)

---

## 📜 Licence

**Creative Commons BY-NC-SA 4.0**

```
Libre de partager & modifier, tant que tu :
- ✅ Crédites l'auteur original
- ✅ Ne l'utilises pas commercialement
- ✅ Partages tes modifications sous la même licence
```

**Cas d'usage OK :**
- ✅ Enseigner dans une école/bootcamp gratuitement
- ✅ Repartager sur GitHub/Medium/Blog
- ✅ Traduire en autre langue
- ✅ Créer des variantes pour apprentissage

**Cas d'usage NON-OK :**
- ❌ Vendre ce contenu (sauf accord)
- ❌ Utiliser la marque/logos commercialement
- ❌ Copier sans mention d'origine

---

## 🔗 Liens importants

| Ressource | Lien |
|-----------|------|
| **Discussions GitHub** | [Pose une question](https://github.com/bu7ch/react-vania-chronic_adventures/discussions) |
| **Feuille de route** | [`ROADMAP.md`](./ROADMAP.md) |
| **Changelog** | [`CHANGELOG.md`](./CHANGELOG.md) |
| **Contribuer** | [`CONTRIBUTE.md`](./CONTRIBUTE.md) |

---

## 💡 Pro Tips

### **Avant de coder une quête**

1. ✅ Lis le chapitre entièrement
2. ✅ Fais les mini-exos (rapides)
3. ✅ Puis la Phase 1 (Create) sans regarder la solution
4. ✅ Puis les Phases 2-3 (Analyze/Evaluate)
5. ✅ Enfin la Phase 4 (Create libre) — c'est là tu apprendras vraiment

### **Si tu bloques**

```
Escalade :
1️⃣  Relire la section du chapitre
2️⃣  Consulter le mini-exo similaire
3️⃣  Vérifier la solution (apprendre comment ça marche)
4️⃣  Ouvrir une issue GitHub
5️⃣  Poser ta question dans les GitHub Discussions
```

Ne reste pas bloqué > 30 min. C'est normal de consulter les solutions !

---

## 🎊 Bienvenue dans React-vania !

Tu as tout ce qu'il te faut pour devenir un maître du React. Suis les chapitres, fais les quêtes, et bientôt tu construiras des interfaces web complexes sans transpirer.

**Première étape ?** Lis [`chapitres/01-royaume-javascript/README.md`](./chapitres/01-royaume-javascript/README.md)

**Questions ?** Ouvre une [Discussion](https://github.com/bu7ch/react-vania-chronic_adventures/discussions) ou un [Issue](https://github.com/bu7ch/react-vania-chronic_adventures/issues).

**À bientôt dans les Discussions ! ⚔️**

---

*"Un apprenant aujourd'hui, un créateur demain."* — bu7ch

**Dernière mise à jour :** Novembre 2026 | **Mainteneur :** [@bu7ch](https://github.com/bu7ch)
