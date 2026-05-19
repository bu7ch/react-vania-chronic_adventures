# React.js pour les aventuriers 🎮⚔️

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/bu7ch/react-vania-chronic_adventures?style=social)](https://github.com/react-vania/react-vania-chronic_adventures
)
[![Discord](https://img.shields.io/discord/YOUR_DISCORD_ID?label=Discord&logo=discord)](https://discord.gg/YOUR_INVITE)

> **Un voyage immersif dans l'univers React — Du débutant au créateur de jeux**

Bienvenue dans React-vania Chronicle Adventures ! Ce n'est pas un manuel technique ennuyeux. C'est une **quête initiatique** où chaque concept React devient une mécanique de jeu, chaque exercice une bataille.

**Traduit en :** Français, Anglais | **Dernière mise à jour :** Mai 2026

---

## 🎯 Pourquoi ce cours ?

| Aspect | Ce cours | Epic React | Scrimba | freeCodeCamp |
|--------|----------|-----------|---------|--------------|
| **Accessibilité** | Gratuit + €20 | $300 | €159 | Gratuit |
| **Pédagogie** | Analyze/Evaluate/Create | Expert | Débutant | Basique |
| **Métaphore immersive** | ✅ RPG | ❌ Non | ❌ Non | ❌ Non |
| **Chapitre technique** | ✅ Ch 4.5 | Oui | Non | Non |
| **Dépôt public** | ✅ Solutions commentées | Non | Paywall | Oui |
| **Temps d'apprentissage** | 30-40h | 50h+ | 20h | 50h+ |

**TL;DR :** Meilleur apprentissage pour le prix. Formation réelle, pas juste du code.

---

## 📚 Structure du cours

```
PARTIE 1 : FONDATIONS (Chapitres 1-3)
├── Ch 1 : Le Royaume de JavaScript
│   └─ Variables, fonctions, objets
├── Ch 2 : Bienvenue à React-vania
│   └─ Setup Vite, premier composant
└── Ch 3 : Les Composants + Listes
    └─ Props, JSX, .map(), clés

PARTIE 2 : LOGIQUE (Chapitres 4-4.5)
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
git clone https://github.com/bu7ch/react-vania-chronic_adventures
.git
cd aventuriers

# Ouvre le fichier Markdown du cours
cat ./chapitres/01-royaume-javascript.md

# Ou lit directement sur GitHub
# → Chapitres > Ch 1 > README.md
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

Les solutions sont sur des branches :

```bash
# Voir la solution de la Phase 2 (Analyze) du Ch 1
git checkout solutions-ch1-phase2

# Voir la solution de la Phase 4 (Create libre) du Ch 3
git checkout solutions-ch3-phase4

# Revenir au code principal
git checkout main
```

---

## 📂 Structure du dépôt

```
react-vania/aventuriers/
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
│   │   │   ├── exo-objets.js
│   │   │   └── exo-destructuring.js
│   │   ├── solutions/
│   │   │   ├── phase2-analyze.js   ← Réponses aux questions
│   │   │   └── phase4-create.js    ← Solution du défi
│   │   └── test-rapide.md          ← Auto-évaluation
│   │
│   ├── 02-react-vania/
│   │   ├── README.md
│   │   ├── quete-2.md
│   │   ├── code-demo/
│   │   │   └── App.jsx             ← Exemple complet
│   │   ├── solutions/
│   │   └── test-rapide.md
│   │
│   ├── 03-composants-listes/
│   │   ├── README.md
│   │   ├── quete-3.md
│   │   ├── projets-exemples/
│   │   │   ├── hero-gallery/
│   │   │   │   ├── App.jsx
│   │   │   │   ├── HeroCard.jsx
│   │   │   │   └── App.css
│   │   │   └── item-list/
│   │   ├── solutions/
│   │   │   ├── phase2-analyze.md
│   │   │   ├── phase3-evaluate.md
│   │   │   └── phase4-create.jsx
│   │   └── test-rapide.md
│   │
│   ├── 04-etat/
│   │   ├── README.md
│   │   ├── quete-4.md
│   │   ├── ateliers-comparatifs/
│   │   │   ├── useState-vs-multiple.md
│   │   │   └── grille-evaluation.csv
│   │   ├── solutions/
│   │   └── test-rapide.md
│   │
│   └── 04-5-forge-reactomancien/
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

```bash
main/                           ← Code principal (ce que tu lis)
├── solutions-ch1-phase2/       ← Solutions Phase 2 (Analyze) Ch 1
├── solutions-ch1-phase4/       ← Solutions Phase 4 (Create) Ch 1
├── solutions-ch2-phase2/
├── solutions-ch2-phase4/
├── solutions-ch3-phase2/
├── solutions-ch3-phase4/
├── solutions-ch4-phase4/       ← (Phase 2-3 pas de défi)
├── solutions-ch45-mini-exos/   ← 6 mini-exos testables
├── bonus-advanced/             ← Contenu avancé (React 18+)
└── community-projects/         ← Projets de la communauté
```

**Comment utiliser :**

```bash
# Tu codes et tu bloques sur le Ch 1, Phase 2
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
6. Consulte `solutions/` si besoin

### **Option 2 : En local avec VS Code**

```bash
git clone https://github.com/react-vania/aventuriers.git
cd aventuriers
code .

# Ouvre Markdown Preview Enhanced (extension VS Code)
# Ctrl+K, V (ou Cmd+K, V sur Mac)
```

### **Option 3 : Comme un eBook**

```bash
# Installe mdbook
npm install -g mdbook

# Génère le site statique
mdbook serve

# Visite http://localhost:3000
```

---

## 🎓 Progressions recommandées

### **Pour un débutant complet**

```
Semaine 1 : Chapitre 1 (JavaScript) + Mini-exos
Semaine 2 : Chapitre 2 (React setup)
Semaine 3 : Chapitre 3 (Composants)
Semaine 4 : Chapitre 4 (État) + Chapitre 4.5 (Forge)
Semaine 5 : Projets pratiques
Semaine 6-7 : Projet final : construire un jeu
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

### **Structure suggérée pour tes fichiers**

```
mon-aventure-react/
├── src/
│   ├── ch1-quete/
│   │   └── Hero.jsx
│   ├── ch2-quete/
│   │   └── App.jsx
│   ├── ch3-quete/
│   │   ├── HeroCard.jsx
│   │   ├── HeroGallery.jsx
│   │   └── App.jsx
│   ├── ch4-quete/
│   │   ├── ExperienceTracker.jsx
│   │   └── App.jsx
│   └── App.css
└── README.md (documenter ta progression)
```

---

## ❓ FAQ

### **"Je bloque sur une quête, où chercher de l'aide ?"**

```
1. Consulte les mini-exos (exo1-observer-rerender.jsx, etc)
2. Vérifies la solution correspondante (solutions-chX-phaseY)
3. Ouvre une issue GitHub ("Help wanted: Ch 3, Phase 2")
4. Demande sur Discord (lien ci-dessous)
```

### **"Comment je sais si mes réponses sont bonnes ?"**

```
- Phase 2 (Analyze) : Réponses dans solutions-chX-phase2/
- Phase 3 (Evaluate) : Aucune "bonne" réponse, c'est une opinion
- Phase 4 (Create libre) : Vérifie sur solutions-chX-phase4/, il y a variantes
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

- ✅ Former 50K+ débutants en React
- ✅ Créer un standard pédagogique (Higher Order Learning)
- ✅ Construire une communauté francophone/anglophone
- ✅ Prouver qu'un cours gratuit peut rivaliser avec du payant
- 🚀 Lancer des formations avancées (sur la base de ce contenu)

---

## 📊 Progression du projet

```
Juin 2026   : ✅ Ch 1-4.5 terminés
Juillet     : ✅ Solutions Ch 1-4.5 + Discord lancé
Août        : 🔄 Ch 5-6 en écriture
Sept        : ✅ Projets complets (Hero Gallery, Quest System)
Oct         : ✅ Bonus (TypeScript, Testing, Patterns)
Nov-Déc     : 🚀 Version payante lancée
```

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
5️⃣  Demander sur Discord
```

Ne reste pas bloqué > 30 min. C'est normal de consulter les solutions !

---

## 🎊 Bienvenue dans React-vania !

Tu as tout ce qu'il te faut pour devenir un maître du React. Suis les chapitres, fais les quêtes, et bientôt tu construiras des interfaces web complexes sans transpirer.

**Première étape ?** Lis [`chapitres/01-royaume-javascript/README.md`](./chapitres/01-royaume-javascript/README.md)

**Questions ?** Ouvre une [Discussion](https://github.com/bu7ch/react-vania-chronic_adventures/discussions) ou un [Issue](https://github.com/bu7ch//react-vania-chronic_adventures/issues).

**À bientôt sur le Discord ! ⚔️**

---

*"Un apprenant aujourd'hui, un créateur demain."* — bu7ch

**Dernière mise à jour :** Mai 2026 | **Mainteneur :** [@react-vania](https://github.com/bu7ch)
