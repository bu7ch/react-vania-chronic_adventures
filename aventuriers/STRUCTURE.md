# 📂 STRUCTURE — Anatomie du projet

Ce document explique **chaque dossier et chaque fichier** du repo `bu7ch/react-vania-chronic_adventures
`. 

**Objectif :** Que tu comprennes où trouver quoi et pourquoi c'est organisé comme ça.

---

## 📋 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Racine du projet](#racine-du-projet)
3. [Dossier `chapitres/`](#dossier-chapitres)
4. [Dossier `projets-complets/`](#dossier-projets-complets)
5. [Dossier `ateliers-comparatifs/`](#dossier-ateliers-comparatifs)
6. [Dossier `bonus/`](#dossier-bonus)
7. [Dossier `ressources/`](#dossier-ressources)
8. [Dossier `community/`](#dossier-community)
9. [Dossier `.github/`](#dossier-github)
10. [Convention de nommage](#conventions-de-nommage)

---

## 🎯 Vue d'ensemble

```
react-vania/aventuriers/                 ← Racine du projet
│
├── 📄 README.md                         ← Point d'entrée (landing page)
├── 📄 GETTING_STARTED.md                ← Guide "comment débuter"
├── 📄 STRUCTURE.md                      ← Ce fichier
├── 📄 CONTRIBUTE.md                     ← Comment contribuer
├── 📄 ROADMAP.md                        ← Feuille de route
├── 📄 CHANGELOG.md                      ← Historique des versions
├── 📄 CODE_OF_CONDUCT.md                ← Code de conduite (optionnel)
├── 📄 LICENSE                           ← CC BY-NC-SA 4.0
│
├── 📁 chapitres/                        ← ⭐ CŒUR du cours
│   ├── 01-royaume-javascript/
│   ├── 02-react-vania/
│   ├── 03-composants-listes/
│   ├── 04-etat/
│   ├── 04-5-forge-reactomancien/
│   └── [05-*, 06-*, etc.]
│
├── 📁 projets-complets/                 ← Projets du début à la fin
│   ├── 01-hero-gallery/
│   ├── 02-quest-system/
│   └── 03-battle-simulator/
│
├── 📁 ateliers-comparatifs/             ← Exercices de pensée
│   ├── grille-composants.md
│   ├── grille-state.md
│   └── ...
│
├── 📁 bonus/                            ← Contenu optionnel
│   ├── typescript-intro.md
│   ├── testing-intro.md
│   └── ...
│
├── 📁 ressources/                       ← Outils & références
│   ├── cheat-sheets/
│   ├── outils/
│   └── references/
│
├── 📁 community/                        ← Communauté
│   ├── DISCORD.md
│   ├── FAQ.md
│   └── TESTIMONIALS.md
│
├── 📁 .github/                          ← Automatisations GitHub
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── pull_request_template.md
│
└── 📄 .gitignore                        ← Fichiers à ignorer par Git
```

---

# 📄 Racine du projet

## Fichiers principaux

### `README.md`
**Qu'est-ce que c'est :** La première chose que les gens voient sur GitHub

**Contient :**
- Badge de licence & stars
- Pitch du cours (pourquoi?)
- Comparaison vs concurrence
- Liens de démarrage rapide
- FAQ
- Licence

**Comment l'utiliser :**
```
Quelqu'un visite github.com/react-vania/aventuriers
↓ Il lit README.md d'abord
↓ Si intéressé → clique sur "GETTING_STARTED.md"
```

**Qui modifie :** Mainteneurs seulement (très rarement)

---

### `GETTING_STARTED.md`
**Qu'est-ce que c'est :** Le guide ultra-détaillé pour débuter

**Contient :**
- Installation de Node.js (étape par étape)
- Setup du premier projet React
- Commandes à lancer
- Comment lire le cours
- Comment faire la première quête
- Troubleshooting

**Temps :** Quelqu'un suit ce guide = 1-2h et son premier projet marche

**Qui lit :** Les débutants complets

---

### `STRUCTURE.md`
**Qu'est-ce que c'est :** Ce document ! Explique l'arborescence

**Pour qui :** 
- Les contributeurs (où ajouter du contenu ?)
- Les curieux (que contient ce dossier ?)
- Les mainteneurs (organisation logique)

---

### `CONTRIBUTE.md`
**Qu'est-ce que c'est :** Guide pour contribuer au projet

**Contient :**
- Types de contributions (typos, exos, traductions)
- Processus détaillé (fork → branch → PR)
- Template de PR
- Code de conduite

**Qui l'utilise :** Quelqu'un qui veut améliorer le cours

---

### `ROADMAP.md`
**Qu'est-ce que c'est :** Feuille de route du projet

**Contient :**
- Phases du développement (Phase 1-5)
- Chapitres prévus
- Dates estimées
- Métriques de succès
- Tâches immédiates

**Qui l'utilise :** 
- Contributeurs (savoir ce qui vient)
- Mainteneurs (planning)
- Community (transparence)

---

### `CHANGELOG.md`
**Qu'est-ce que c'est :** Historique des versions

**Format :**
```markdown
## [v1.0.0] - 2026-06-15
### Added
- Chapitres 1-4 finalisés
- Solutions GitHub
- Discord community

### Fixed
- Typo Ch 2, ligne 45
- Lien cassé dans ressources

### Changed
- Réorganisé Ch 3 & 5
```

**Qui met à jour :** Mainteneurs (à chaque version)

---

### `LICENSE`
**Qu'est-ce que c'est :** Licence du projet

**Contenu :** CC BY-NC-SA 4.0

Signifie :
- ✅ Libre de partager & modifier
- ✅ Utiliser en bootcamp gratuit
- ✅ Traduire
- ❌ Pas d'utilisation commerciale
- ❌ Doit créditer l'original

---

### `.gitignore`
**Qu'est-ce que c'est :** Dit à Git quels fichiers ne pas sauvegarder

**Exemple :**
```
node_modules/      # Trop volumineux
.DS_Store          # Fichiers Mac
.env               # Secrets
*.log              # Logs
```

**Tu dois le modifier ?** Rarement. Sauf si tu ajoutes des dossiers à ignorer.

---

# 📁 Dossier `chapitres/`

**C'EST LE CŒUR DU PROJET**

Chaque chapitre = un dossier numéroté + nommé

```
chapitres/
├── 01-royaume-javascript/
├── 02-react-vania/
├── 03-composants-listes/
├── 04-etat/
├── 04-5-forge-reactomancien/
├── 05-patterns-avances/          (à venir)
├── 06-useeffect-sideeffects/     (à venir)
└── ...
```

## Structure d'un chapitre (exemple : Ch 1)

```
01-royaume-javascript/
│
├── 📄 README.md                     ← CONTENU PRINCIPAL du chapitre
│                                      (tout ce qu'il faut apprendre)
│
├── 📄 quete-1.md                    ← Énoncé de la quête (4 phases)
│
├── 📄 test-rapide.md                ← Auto-évaluation
│
├── 📁 mini-exos/                    ← Exercices rapides (5-10 min chacun)
│   ├── exo-variables.js
│   ├── exo-objets.js
│   ├── exo-destructuring.js
│   └── exo-arrow-functions.js
│
├── 📁 solutions/                    ← Réponses & code complet
│   ├── phase1-create-starter.js     ← Code de départ (fourni)
│   ├── phase2-analyze.md            ← Réponses aux questions
│   ├── phase3-evaluate.md           ← Analyse comparative
│   └── phase4-create-free.js        ← Solution du défi open-ended
│
└── 📁 variantes/                    ← Approches alternatives (bonus)
    ├── avec-classes.js
    ├── avec-factory-pattern.js
    └── explications.md
```

### Détail : le fichier `README.md`

**C'est le contenu principal du chapitre**

Structure typique :

```markdown
# Chapitre 1 : Le Royaume de JavaScript

## Intro
Bienvenue dans le chapitre 1...

## Section 1 : Les variables
Explications + exemples

## Section 2 : Les fonctions
Explications + exemples

## Section 3 : Les objets
Explications + exemples

## Encadré "Sans métaphore"
Clarifications techniques

## Résumé du chapitre
Points clés à retenir

## Prochaines étapes
Voir le ROADMAP pour continuer
```

**Qui l'utilise :** Apprenants (lecture directe)

**Comment :** 
- Sur GitHub : clique sur le dossier du chapitre → README.md
- En local : `code chapitres/01-royaume-javascript/README.md`
- Markdown preview : `Ctrl+K, V` dans VS Code

---

### Détail : le fichier `quete-X.md`

**C'est l'énoncé de la quête (les exercices)**

Structure :

```markdown
# 🗡️ Quête 1 : Crée et analyse un système de personnage

**Objectif :** Créer un objet hero et le tester

## Phase 1 : CREATE (Créer)
Code le projet selon ces instructions...

## Phase 2 : ANALYZE (Analyser)
Réponds à ces questions...

## Phase 3 : EVALUATE (Évaluer)
Compare 3 approches différentes...

## Phase 4 : CREATE libre (Défi)
Crée un système sans guide...
```

**Qui l'utilise :** Apprenants (exercices)

**Tempo :** 1-3h par quête

---

### Détail : dossier `mini-exos/`

**Ce sont des exercices rapides & isolés**

Exemple : `exo-variables.js`

```javascript
// Mini-exo : Comprendre const vs let

// Exercice 1
const x = 5;
x = 10;  // Qu'est-ce qui se passe ?

// Exercice 2
let y = 5;
y = 10;  // Et là ?

// Exercice 3
const obj = { name: "hero" };
obj.name = "villain";  // Et ici ?
```

**Utilité :** Tester rapidement avant de faire la quête complète

**Tempo :** 5-10 min par exo

---

### Détail : dossier `solutions/`

**Réponses & code complet pour chaque phase**

#### `phase1-create-starter.js`
Code de départ fourni à l'apprenant pour commencer

#### `phase2-analyze.md`
Réponses aux questions de la Phase 2

Exemple :
```markdown
## Réponses Phase 2 - Chapitre 1

### Q1 : Pourquoi utiliser `this.property` ?

**Réponse :**
Parce que `this` se réfère toujours au contexte actuel.
Si tu renommes la variable `hero` en `player`, 
la méthode continue de marcher avec `this.property`.

Si tu avais écrit `hero.property`, ça casse.

**Exemple :**
```javascript
const warrior = hero;  // Alias
warrior.attack();      // Marche ? Oui, avec `this`
```
```

#### `phase3-evaluate.md`
Grille de comparaison + analyse

Exemple :
```markdown
## Comparaison : 3 façons de créer un hero

| Critère | Approche A | Approche B | Approche C |
|---------|-----------|-----------|-----------|
| Répétition | Énorme | Moyen | Faible |
| Modifiabilité | Faible | Moyenne | Haute |

### Conclusion
Pour 100 héros, Approche C est meilleure parce que...
```

#### `phase4-create-free.js`
**UNE** solution possible au défi (pas LA SEULE)

Important : on montre UNE approche parmi plusieurs.

---

### Détail : dossier `variantes/`

**Approches alternatives pour aller plus loin**

Exemple : `avec-classes.js`

```javascript
// Même défi que Phase 4, mais avec ES6 classes

class Hero {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  attack() {
    return Math.random() * 15;
  }
}
```

**Utilité :** Montrer qu'il y a toujours plusieurs façons de faire

---

# 📁 Dossier `projets-complets/`

**Projets réels du début à la fin**

Exemple : `hero-gallery`

```
projets-complets/
├── 01-hero-gallery/
│   ├── README.md                ← Énoncé du projet
│   ├── starter/                 ← Code incomplet
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.html
│   ├── solution/                ← Correction complète
│   │   ├── App.jsx
│   │   ├── HeroCard.jsx
│   │   ├── HeroGallery.jsx
│   │   └── App.css
│   ├── bonus/                   ← Extensions
│   │   ├── avec-api.jsx          (fetch depuis une API)
│   │   ├── avec-filtrage.jsx     (ajouter du filtrage)
│   │   └── avec-pagination.jsx   (pagination)
│   └── architecture/
│       ├── decisions.md          (pourquoi cette structure ?)
│       ├── dataflow.md           (comment les données circulent)
│       └── improvements.md       (comment aller plus loin)
│
├── 02-quest-system/
│   ├── README.md
│   ├── starter/
│   ├── solution/
│   └── bonus/
│
└── 03-battle-simulator/
    ├── README.md
    ├── starter/
    ├── solution/
    └── bonus/
```

## Qu'est-ce que c'est ?

**Des projets complets et réalistes** qu'un apprenant peut faire du début à la fin.

Pas comme les quêtes (isolées). C'est un **vrai petit jeu/app**.

## Comment les utiliser ?

```
Apprenant :
1. Lit la README du projet
2. Ouvre le dossier `starter/`
3. Code en suivant les instructions
4. Quand il bloque → consulte `solution/`
5. Veut aller plus loin ? → `bonus/`
6. Curieux ? → `architecture/`
```

## Différence vs Quêtes

| Aspect | Quêtes (Ch 1-4) | Projets complets |
|--------|-----------------|------------------|
| **Longueur** | 1-3h | 5-10h |
| **Contexte** | Isolé (un concept) | Complet (plusieurs concepts) |
| **Réalisme** | Introductif | Vrai projet |
| **Guidage** | Beaucoup | Moins |
| **Output** | Un objet JS | Une app React |

---

# 📁 Dossier `ateliers-comparatifs/`

**Exercices qui apprennent à PENSER, pas juste à coder**

Exemple : `grille-composants.md`

```markdown
# Atelier : Afficher 100 héros (3 approches)

## Problème
Tu dois afficher 100 personnages dans une interface React.

## Approche A : Inline (directement dans le JSX)
```jsx
{heroes.map(hero => (
  <div key={hero.id}>
    <h2>{hero.name}</h2>
    <input defaultValue={hero.name} />
  </div>
))}
```

## Approche B : Composant simple
```jsx
{heroes.map(hero => (
  <HeroCard key={hero.id} hero={hero} />
))}
```

## Approche C : Avec Custom Hook
[Code...]

## Grille d'évaluation

| Critère | A | B | C |
|---------|---|---|---|
| Lisibilité | 3 | 5 | 4 |
| Réutilisabilité | 2 | 4 | 5 |
| Performance | 3 | 4 | 5 |

## Débat
Laquelle choisir ? Pourquoi ?
(Pas une seule bonne réponse)
```

**Utilité :** Entraîner à faire des choix architecturaux

**Audience :** Intermédiaires+ (après Ch 3-4)

---

# 📁 Dossier `bonus/`

**Contenu optionnel & avancé**

```
bonus/
├── typescript-intro.md           ← TypeScript basics
├── testing-intro.md              ← Vitest + React Testing Library
├── performance-tips.md           ← Optimisations React
├── design-patterns.md            ← Patterns avancés
├── common-mistakes.md            ← Les pièges à éviter
├── react-18-features.md          ← Nouveautés React 18
└── contributing-guide.md         ← Guide pour contribuer au code
```

**Qui utilise :** Apprenants qui veulent aller plus loin

**Prérequis :** Au moins Ch 1-4 complétés

---

# 📁 Dossier `ressources/`

**Outils, références, aide-mémoires**

```
ressources/
│
├── 📁 cheat-sheets/
│   ├── hooks-cheatsheet.md       ← useState, useEffect, custom
│   ├── jsx-cheatsheet.md         ← Syntaxe JSX
│   ├── react-patterns.md         ← Common patterns
│   └── javascript-quick-ref.md   ← JS essentials
│
├── 📁 outils/
│   ├── vite-setup.sh             ← Script setup Vite automatisé
│   ├── test-runner.js            ← Tester les exercices auto
│   ├── benchmark.js              ← Mesurer la performance
│   └── code-formatter.config.js  ← Configuration Prettier
│
└── 📁 references/
    ├── react-docs-links.md       ← Liens officiels React
    ├── videos-recommandees.md    ← Vidéos YouTube
    ├── livres-a-lire.md          ← Livres recommandés
    └── autres-ressources.md      ← Podcasts, blogs, etc
```

**Utilité :** Aide rapide pendant le coding

**Quand utiliser :** "Comment déjà...? Je me rappelle plus"

---

# 📁 Dossier `community/`

**Communauté & support**

```
community/
├── DISCORD.md                    ← Rejoindre Discord
├── FAQ.md                        ← Questions fréquentes
├── TESTIMONIALS.md               ← Témoignages d'apprenants
├── success-stories.md            ← "J'ai créé X grâce au cours"
└── contributors.md               ← Merci à qui ?
```

**Utilité :** Construire une communauté

**Exemples :**

**FAQ.md :**
```markdown
## Q : Je bloque sur le Ch 3, Phase 4
A : Consulte d'abord la solution sur `solutions-ch3-phase4`...

## Q : Puis-je traduire le cours en espagnol ?
A : Oui ! Voir CONTRIBUTE.md pour le processus...

## Q : Y a-t-il une version vidéo ?
A : Pas encore, mais c'est dans le ROADMAP pour 2027...
```

**TESTIMONIALS.md :**
```markdown
> "Ce cours m'a fait comprendre React en 4 semaines. 
> Les quêtes et la métaphore RPG rendent l'apprentissage fun."
> — Marie, développeuse juniors

> "Je l'ai utilisé pour former 30 étudiants. 
> C'est le meilleur cours gratuit que j'ai trouvé."
> — Luc, formateur
```

---

# 📁 Dossier `.github/`

**Automatisations & templates GitHub**

```
.github/
│
├── 📁 ISSUE_TEMPLATE/
│   ├── bug.md                    ← Template pour signaler un bug
│   │   ```markdown
│   │   **Chapitre :** [Ch X]
│   │   **Problème :** [Description]
│   │   **Pas à pas pour reproduire :**
│   │   **Résultat attendu :** [Quoi]
│   │   **Résultat actuel :** [Qu'est-ce qu'il se passe]
│   │   ```
│   │
│   ├── question.md               ← Template pour poser une question
│   │   ```markdown
│   │   **Question :** [Ton question]
│   │   **Contexte :** [Où ? Dans quel chapitre ?]
│   │   **Ce que j'ai essayé :** [...]
│   │   ```
│   │
│   └── suggestion.md             ← Template pour une suggestion
│       ```markdown
│       **Suggestion :** [Idée d'amélioration]
│       **Pourquoi :** [Justification]
│       **Exemple :** [Cas d'usage]
│       ```
│
├── 📁 workflows/
│   ├── lint-markdown.yml         ← Auto-lint le Markdown
│   ├── check-links.yml           ← Vérifie les liens cassés
│   └── run-tests.yml             ← Lance les tests (optionnel)
│
└── pull_request_template.md      ← Template pour les PRs
    ```markdown
    ## Type de contribution
    - [ ] Typo
    - [ ] Contenu
    - [ ] Traduction
    
    ## Changement
    [Description]
    
    ## Chapitres affectés
    Ch 1, Ch 3
    
    ## Checklist
    - [ ] J'ai lu CONTRIBUTE.md
    - [ ] Mes commits sont explicites
    - [ ] Pas d'erreurs Markdown
    ```
```

**Utilité :** Automatiser la qualité & guide les contributeurs

**Exemple workflow :**

Quelqu'un ouvre une Issue :
1. GitHub affiche le template `bug.md`
2. Personne remplit le template
3. Si elle ouvre une PR, template `pull_request_template.md` s'affiche
4. Lors du push, `lint-markdown.yml` vérifie la syntaxe auto

---

# 🔤 Conventions de nommage

## Chapitres

```
01-royaume-javascript/          (2 chiffres + slugs)
02-react-vania/
03-composants-listes/
04-etat/
04-5-forge-reactomancien/       (4.5 pour les chapitre intermédiaires)
```

**Format :** `{NN}-{slug-kebab-case}/`

---

## Fichiers Markdown

```
README.md                        (contenu principal)
quete-1.md                       (énoncé de quête)
quete-1-phase1.md               (chaque phase séparée, optionnel)
test-rapide.md                  (auto-évaluation)
```

---

## Fichiers JavaScript/JSX

```
exo-variables.js                (mini-exo)
hero.jsx                        (composant)
hero.test.jsx                   (tests)
useHero.js                      (custom hook)
```

**Conventions :**
- camelCase pour tout sauf les dossiers
- .jsx pour les composants React
- .js pour la logique pure
- .test.js pour les tests

---

## Dossiers

```
01-royaume-javascript/          (numéroté, kebab-case)
mini-exos/                      (kebab-case)
solutions/                      (kebab-case)
```

---

## Branches Git

```
main                            (code stable)
solutions-ch1-phase2            (solutions d'un chapitre/phase)
solutions-ch1-phase4
solutions-ch2-phase4
solutions-ch45-mini-exos        (tous les mini-exos)

feat/new-chapter-5              (nouvelles features)
fix/typo-ch1                    (corrections)
docs/improve-readme             (améliorations doc)
i18n/spanish-ch1                (internationalisation)
```

**Format :** `{type}/{description-kebab-case}`

---

# 🗺️ Parcours de l'apprenant

```
Je visite le repo
  ↓
Je lis README.md (pitch)
  ↓
Ça m'intéresse → je clique GETTING_STARTED.md
  ↓
J'installe tout
  ↓
Je vais dans chapitres/01-royaume-javascript/
  ↓
Je lis README.md (le contenu)
  ↓
Je teste les mini-exos/
  ↓
Je fais quete-1.md (4 phases)
  ↓
Je vérifies mes réponses (solutions/)
  ↓
Je passe au Chapitre 2
  ↓
... (Chapitres 3-4)
  ↓
Je fais un projet complet (projets-complets/hero-gallery/)
  ↓
Je veux contribuer → je lis CONTRIBUTE.md
```

---

# 📊 Résumé : Qui utilise quoi ?

| Personne | Fichiers importants |
|----------|-------------------|
| **Apprenant débutant** | GETTING_STARTED.md → chapitres/ → quete-X.md |
| **Apprenant intermédiaire** | chapitres/ → projets-complets/ → bonus/ |
| **Contributeur** | CONTRIBUTE.md → STRUCTURE.md → fork → PR |
| **Formateur** | projets-complets/ + ateliers-comparatifs/ |
| **Mainteneur** | ROADMAP.md + CHANGELOG.md + workflows/ |

---

# 🎯 Résumé : Ajouter du contenu

### "Je veux ajouter un exercice"

```
1. Décide : quel chapitre ?
2. C'est un mini-exo (rapide) ou quête (long) ?
3. Ajoute dans : chapitres/{num}-{nom}/
4. Crée : exo-{nom}.js ou quete-{num}.md
5. Ouvre une PR (voir CONTRIBUTE.md)
```

### "Je veux traduire Ch 1"

```
1. Fork le repo
2. Crée branche : i18n/spanish-ch1
3. Copie : chapitres/01-royaume-javascript/README.md
4. Renomme : README.es.md
5. Traduis
6. Ouvre une PR
```

### "Je veux ajouter un projet"

```
1. Crée dossier : projets-complets/0X-{nom}/
2. Ajoute : README.md, starter/, solution/, bonus/
3. Teste que ça marche
4. Ouvre une PR
```

---

# 📝 Notes finales

## Évite

❌ Ajouter des fichiers en vrac sans structure
❌ Dossiers avec des noms génériques ("test", "examples")
❌ Mélanger plusieurs concepts dans un seul fichier

## Préfère

✅ Structure claire et prévisible
✅ Noms explicites (même si longs)
✅ Un concept = un fichier
✅ Solutions commentées

## Maintenance

- **CHANGELOG.md** : mise à jour à chaque version
- **ROADMAP.md** : mise à jour mensuellement
- **Solutions/** : revérifier régulièrement (React updates)

---

# 🚀 Pour débuter

Tu dois créer :

```bash
# Structure minimale pour lancer

chapitres/
├── 01-royaume-javascript/
│   ├── README.md
│   ├── quete-1.md
│   ├── test-rapide.md
│   ├── mini-exos/
│   └── solutions/

+ README.md, GETTING_STARTED.md, CONTRIBUTE.md, ROADMAP.md
```

Les autres dossiers peuvent être ajoutés progressivement.

---

**Dernière mise à jour :** Mai 2026
**Questions ?** Ouvre une issue ou une discussion sur GitHub
