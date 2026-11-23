# 🚀 GETTING STARTED — Guide complet

Bienvenue ! Tu es ici parce que tu veux apprendre React. **Tu es au bon endroit.**

Ce guide va t'accompagner étape par étape, depuis ton premier setup jusqu'à ta première quête complétée. Pas de magie, pas de suppositions. Juste du code qui marche.

**Durée estimée :** environ 1 h pour l'installation et le premier projet, puis le Chapitre 1 (30-40 min) et la Quête 1 (3-4 h).

---

## 📋 Table des matières

1. [Prérequis (5 min)](#-prérequis)
2. [Installation (10 min)](#-installation)
3. [Setup du premier projet (15 min)](#-setup-du-premier-projet)
4. [Lire le cours (30-40 min)](#-lire-le-cours)
5. [Faire ta première quête (3-4 h)](#-faire-ta-première-quête)
6. [Troubleshooting](#-troubleshooting)

---

## ✅ Prérequis

### Tu as besoin de :

- **Un ordinateur** (Windows, Mac, ou Linux)
- **Un éditeur de code** (gratuit)
- **Internet**
- **Node.js** (gratuit)
- **30-45 min de temps sans distractions**

### Tu n'as PAS besoin de :

- ❌ Savoir programmer en JavaScript : le Chapitre 1 l'enseigne depuis zéro
- ❌ Connaître React : c'est tout l'objet du cours

### Tu dois seulement savoir :

- ✅ Ouvrir un terminal (ou l'invite de commande) et y taper une commande : on te dit exactement lesquelles
- ✅ Naviguer sur un site web comme GitHub

**Si tu n'es pas sûr :** pas de souci, suis le guide pas à pas.

---

# 🔧 Installation

## Étape 1 : Installer Node.js (5-10 min)

Node.js est un outil qui te permet d'exécuter du JavaScript en dehors du navigateur. Tu en auras besoin pour React.

### Windows

1. Va sur **https://nodejs.org/**
2. Clique sur le gros bouton **"LTS"** (Long Term Support)
   ```
   ┌─────────────────────────────────┐
   │  Node.js                         │
   │                                 │
   │  [ LTS ]  [ Current ]           │
   │   ↑ CLIQUE ICI                  │
   └─────────────────────────────────┘
   ```
3. Attends que ça télécharge (un fichier `node-vXX.X.X-x64.msi`)
4. Double-clique sur le fichier
5. Clique "Next" → "I Agree" → "Next" → ... → "Finish"

### Mac

```bash
# Option 1 : Avec Homebrew (plus facile)
brew install node

# Si tu n'as pas Homebrew, va sur https://brew.sh
# Copie la commande, colle-la dans Terminal
```

Ou visite **https://nodejs.org/** et télécharge l'installeur Mac.

### Linux

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Fedora
sudo dnf install nodejs npm

# Arch
sudo pacman -S nodejs npm
```

> ⚠️ Sur Linux, la version proposée par ta distribution est parfois ancienne. Si `node --version` (ci-dessous) affiche moins que `v20.19`, installe plutôt la version **LTS** depuis https://nodejs.org/.

### ✅ Vérifier que ça marche

Ouvre un terminal/invite de commande et tape :

```bash
node --version
npm --version
```

Tu devrais voir :

```
v22.12.0   (ou plus récent : il faut au minimum v20.19)
10.9.0     (ou une version similaire)
```

**Si tu vois les versions :** ✅ C'est bon ! Passe à l'étape 2.

**Si tu vois une erreur :** Voir [Troubleshooting](#-troubleshooting)

---

## Étape 2 : Installer un éditeur de code (5 min)

Tu as besoin d'un endroit pour écrire du code.

### Option 1 : VS Code (recommandé, gratuit)

1. Va sur **https://code.visualstudio.com/**
2. Télécharge la version pour ton OS
3. Installe-le
4. Ouvre-le

```
┌─────────────────────────────────┐
│  Welcome to VS Code             │
│                                 │
│  Get Started  Extensions  etc   │
└─────────────────────────────────┘
```

**Extensions recommandées** (optionnel) :
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- Thunder Client (pour tester les APIs)

### Option 2 : Cursor (gratuit, amélioré)

```
Visite https://www.cursor.com/
C'est VS Code + IA intégrée
Meilleur si tu veux de l'aide pendant le codage
```

### Option 3 : Autres

Sublime Text, Vim, Neovim, etc. Peu importe tant que tu peux écrire du code.

**Je recommande VS Code ou Cursor pour débuter.**

---

## Étape 3 : Cloner le cours (5 min)

Le cours est sur GitHub. Tu dois le télécharger sur ton ordi.

### Avec Git (recommandé)

```bash
# Ouvre ton terminal
# Change de dossier vers où tu veux le cours
cd ~/Documents

# Clône le dépôt
git clone https://github.com/bu7ch/react-vania-chronic_adventures.git

# Entre dans le dossier du cours
cd react-vania-chronic_adventures/aventuriers
```

Tu devrais voir (`ls`) :

```
README.md
GETTING_STARTED.md
STRUCTURE.md
chapitres/
```

### Sans Git (alternative)

1. Va sur https://github.com/bu7ch/react-vania-chronic_adventures
2. Clique sur le bouton vert **"Code"**
3. Clique sur **"Download ZIP"**
4. Dézippe le fichier sur ton ordi

Puis ouvre le sous-dossier `aventuriers` dans VS Code.

> ℹ️ Le ZIP ne contient que la branche `main`, donc **pas les solutions** (elles sont sur des branches séparées). Pour les consulter sans Git, utilise le sélecteur de branche sur la page GitHub du dépôt (voir [Vérifier tes réponses](#-vérifier-tes-réponses)).

---

# 💻 Setup du premier projet

## Étape 4 : Créer un projet React (10-15 min)

Tu vas créer un projet neuf où tu pourras faire les quêtes du cours à partir du Chapitre 2. (Le Chapitre 1 et la Quête 1 sont du JavaScript pur : tu peux créer ce projet maintenant ou juste avant le Chapitre 2.)

### Avec Vite (super rapide, recommandé)

```bash
# Depuis ton terminal, va dans un dossier où tu veux travailler
cd ~/Documents

# Crée un nouveau projet React
npm create vite@latest mon-aventure-react -- --template react

# Attends que ça télécharge (peut prendre 1-2 min)
```

Tu verras :

```
✔ packages in X.XXs

Done. Now run:

  cd mon-aventure-react
  npm install
  npm run dev
```

### Continuer...

```bash
# Entre dans le dossier
cd mon-aventure-react

# Installe les dépendances
npm install

# Lance le serveur de développement
npm run dev
```

Tu verras :

```
  VITE v8.x.x  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Ouvrir dans le navigateur

Clique sur le lien : **http://localhost:5173/**

Tu devrais voir une page React basique :

```
┌─────────────────────────────────────┐
│  Get started                       │
│  Edit src/App.jsx and save to      │
│  test HMR                          │
│                                    │
│  [ Count is 0 ]                    │
│                                    │
└─────────────────────────────────────┘
```

**Si tu vois ça :** ✅ Bravo ! Ton projet marche !

**Si tu vois une erreur :** Voir [Troubleshooting](#-troubleshooting)

---

## Étape 5 : Ouvrir le projet dans VS Code

```bash
# Depuis le terminal, dans le dossier du projet
code .

# VS Code s'ouvre avec ton projet
```

Tu devrais voir :

```
mon-aventure-react/
├── src/
│   ├── App.jsx          ← On va modifier ça
│   ├── App.css
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js
└── index.html
```

**Garde le terminal ouvert !** (avec `npm run dev` qui tourne)

Dès que tu sauvegardes un fichier, le navigateur se met à jour tout seul. C'est la magie de Vite.

---

# 📚 Lire le cours

## Étape 6 : Lire le Chapitre 1

### Option A : Sur GitHub (dans le navigateur)

1. Va sur https://github.com/bu7ch/react-vania-chronic_adventures/tree/main/aventuriers
2. Clique sur le dossier `chapitres/`
3. Ouvre `01-royaume-javascript/`
4. Clique sur `README.md`
5. Lis le contenu

### Option B : En local (plus confortable)

Depuis le dossier `aventuriers/` que tu as cloné :

```bash
# Ouvre le dossier du chapitre 1
cd chapitres/01-royaume-javascript/

# Ouvre le README dans VS Code
code README.md

# Ou dans un éditeur Markdown
# (VS Code affiche le Markdown joliment avec "Ctrl+K, V")
```

### Qu'est-ce que tu vas lire ?

Le Chapitre 1 couvre :

- **Les variables** : `const`, `let`, quand les utiliser
- **Les fonctions** : comment les créer, arrow functions
- **Les objets** : grouper des données
- **Le destructuring** : extraire des propriétés
- **Quelques outils de base** : les phrases avec variables, les conditions, `this`

**Temps de lecture :** 30-40 min

**Ce que tu dois faire :**

```
✅ Lis chaque section
✅ Teste les exemples : dans un fichier `.js` lancé avec `node mon-fichier.js`, ou dans la console du navigateur (F12)
✅ N'hésite pas à relire si c'est confus
❌ Ne panique pas si c'est pas clair au premier coup
```

---

# 🎮 Faire ta première quête

## Étape 7 : Ouvrir la Quête 1

Depuis `chapitres/01-royaume-javascript/`, ouvre le fichier `quete-1.md`

Tu verras :

```
🗡️ Quête 1 : Crée et analyse un système de personnage

PHASE 1 : CREATE (Créer)
PHASE 2 : ANALYZE (Analyser)
PHASE 3 : EVALUATE (Évaluer)
PHASE 4 : CREATE libre (Défi)
```

### Phase 1 : CREATE — Crée ton objet Hero

**Lis l'énoncé :**

> Crée un objet nommé hero avec les propriétés : name, health, mana, level
> Ajoute une méthode attack() qui retourne un nombre aléatoire entre 5 et 15
> ...

**Pas de React pour cette quête : c'est du JavaScript pur.**

Crée un fichier `hero.js` (où tu veux, par exemple à côté de tes notes) et écris dedans :

```javascript
const hero = {
  name: "Aragorn",
  health: 100,
  mana: 50,
  level: 1,
  // À toi de compléter : attack(), heal(), levelUp()...
};

console.log(hero);
```

Lance-le dans le terminal :

```bash
node hero.js
```

Chaque fois que tu modifies `hero.js`, relance la commande. C'est ici que tu testes ton objet : une fois `attack()` écrite, ajoute `console.log(hero.attack());` en bas du fichier, relance, et regarde le résultat.

### Phase 2 : ANALYZE — Réponds aux questions

La quête te pose plusieurs questions (voir `quete-1.md`, Phase 2). Par exemple :

> Pourquoi utiliser `this.property` au lieu de `hero.property` ?

**Réponds par écrit** (Markdown file, Google Doc, peu importe) :

```markdown
# Réponses Phase 2 - Chapitre 1

## Question 1 : Pourquoi `this.property` ?

Parce que... [ta réponse]

## Question 2 : ...

...
```

Garde tes réponses. Tu les compareras avec les solutions plus tard.

### Phase 3 : EVALUATE — Compare les approches

Tu dois analyser 3 façons différentes de créer un personnage :

```javascript
// Approche A : Objet avec méthodes
const hero = { ... }

// Approche B : Factory function
function createHero(name) { ... }

// Approche C : Classe
class Hero { ... }
```

**Remplis la grille de comparaison** de `quete-1.md` (Phase 3) : note toi-même chaque approche, sans chercher la « bonne » réponse. Il n'y en a pas de unique, l'important est de justifier tes notes.

**Quelle approche tu choisirais pour un jeu ?** Argumente.

### Phase 4 : CREATE libre — Le défi

C'est le vrai test. La quête te dit :

> Crée un système où tu peux créer des héros avec deux rôles :
> - Guerrier : attack() = 20 dégâts, heal() = 15 PV
> - Mage : attack() = 10 dégâts (consomme mana), heal() = 25 PV (coûte mana)
> 
> Pas de duplication de code (DRY)

**À toi de décider la structure !**

Quelques pistes, sans solution toute faite : une fonction qui *fabrique* des héros, et quelque chose qui range ce qui change d'un rôle à l'autre. `quete-1.md` détaille les contraintes à respecter et propose des indices progressifs. Ta solution n'a pas besoin d'être la même que celle du dépôt : plusieurs approches sont valables.

---

# ✅ Vérifier tes réponses

## Voir les solutions

Après avoir fait la Quête 1, tu peux vérifier.

Pour ne pas gâcher la quête, les solutions ne sont **pas** sur `main` : elles sont sur une branche dédiée par chapitre, nommée `solutions-chN-phase2` (elle contient les solutions de toutes les phases du chapitre qui en ont une : la Phase 3 est une question d'opinion, elle n'a pas de solution unique).

```bash
# Depuis le dossier aventuriers
git fetch origin
git checkout solutions-ch1-phase2

# Regarde les solutions
cat chapitres/01-royaume-javascript/solutions/phase2-analyze.md   # Réponses Phase 2
cat chapitres/01-royaume-javascript/solutions/phase4-create.js    # Défi Phase 4

# Reviens au code principal
git checkout main
```

> 💡 Si tu as des modifications non enregistrées dans le dépôt, mets-les de côté avant de changer de branche (ou travaille dans un dossier séparé du dépôt, comme conseillé plus haut). **Sans Git :** sur la page GitHub du dépôt, ouvre le menu de branches (en haut à gauche) et choisis `solutions-ch1-phase2`.

**Comment utiliser les solutions :**

1. D'abord, CODE TOI-MÊME
2. Puis, COMPARE avec la solution
3. Note les DIFFÉRENCES
4. Comprends POURQUOI tu aurais pu faire mieux
5. Refais l'exercice en intégrant ce que tu as appris

---

# 📝 Test rapide

À la fin de chaque chapitre, un fichier `test-rapide.md` te propose 6 questions à choix multiples, un défi bonus et les solutions (15-20 min). Pour le Chapitre 1, ouvre `chapitres/01-royaume-javascript/test-rapide.md`.

Le barème est sur 120 points : à partir de 90, passe au chapitre suivant ; entre 75 et 89, relis les passages douteux ; en dessous de 75, relis le chapitre.

**Fais ce test** pour savoir si tu as vraiment compris.

---

# 🚀 Passer au Chapitre 2

Une fois que tu as fini le Chapitre 1 ET la Quête 1 :

```bash
# Va au Chapitre 2 (depuis chapitres/01-royaume-javascript/)
cd ../02-react-vania/

# Lis le contenu
code README.md

# Puis la Quête 2
code quete-2.md
```

Le Chapitre 2, c'est l'introduction à React : tu y utiliseras le projet Vite créé plus haut.

---

# 🆘 Troubleshooting

## Problème : "npm: command not found"

**Symptôme :**

```bash
$ npm --version
bash: npm: command not found
```

**Solution :**

Node.js n'est pas installé correctement.

1. Vérifie sur https://nodejs.org/ que tu as bien téléchargé
2. Réinstalle en suivant les instructions officielles
3. **Redémarrage requis** : Après l'installation, redémarre ton ordi
4. Ouvre un NOUVEAU terminal et retente

---

## Problème : "npm install" est très lent

**Symptôme :**

```bash
$ npm install
added X packages... [5+ minutes]
```

**Solution :**

C'est normal la première fois. Laisse faire. Ça peut prendre 5-10 min.

Si ça prend > 20 min :

```bash
# Annule (Ctrl+C)
# Puis essaye :
npm install --prefer-offline
```

---

## Problème : "port 5173 is already in use"

**Symptôme :**

```bash
$ npm run dev
Error: Port 5173 is already in use
```

**Solution :**

Un autre processus utilise ce port.

Option A (facile) :

```bash
# Utilise un autre port
npm run dev -- --port 5174
```

Option B (plus propre) :

```bash
# Ferme les autres projets React
# Ou redémarre ton ordi
```

---

## Problème : "Cannot find module 'react'"

**Symptôme :**

```
Error: Cannot find module 'react'
```

**Solution :**

Tu as oublié de faire `npm install`.

```bash
# Vérifie que tu es dans le bon dossier
pwd  # Doit afficher : .../mon-aventure-react

# Installe les dépendances
npm install

# Relance
npm run dev
```

---

## Problème : une erreur parle de « JSX » ou « Unexpected token < »

**Symptôme :** Vite affiche une erreur du genre :

```
Unexpected JSX expression
JSX syntax is disabled and should be enabled via the parser options
```

**Solution :**

Tu as écrit du JSX (des balises comme `<div>`) dans un fichier `.js`. Renomme-le en `.jsx` et corrige l'`import` correspondant (`./Hero.js` devient `./Hero.jsx`).

Vérifie aussi que toutes tes balises sont bien fermées (`<img ... />`).

---

## Problème : mon composant n'affiche rien (page vide)

**Symptôme :** pas d'erreur, mais la page reste blanche.

**Solution :**

Regarde si ton `return` est suivi d'un saut de ligne avant le JSX :

```javascript
// ❌ FAUX : JavaScript termine l'instruction après "return", le JSX est ignoré
return
  <div>Hello</div>

// ✅ CORRECT
return (
  <div>Hello</div>
)
```

Ouvre aussi la console du navigateur (`F12`) : elle indique presque toujours la cause.

---

## Problème : "Git not found"

**Symptôme :**

```bash
$ git clone https://...
bash: git: command not found
```

**Solution :**

Tu peux aussi télécharger le ZIP :

1. Va sur https://github.com/bu7ch/react-vania-chronic_adventures
2. Clique "Code" → "Download ZIP"
3. Dézippe le fichier
4. Ouvre le dossier

Pas besoin de Git pour ça.

---

## Problème : "EACCES: permission denied"

**Symptôme :**

```
EACCES: permission denied, mkdir '/usr/local/lib/node_modules'
```

**Solution :**

Problème de permissions Linux/Mac.

```bash
# Option 1 : Utilise sudo
sudo npm install -g

# Option 2 (mieux) : Répare npm
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH

# Puis relance
npm install
```

---

## Si tu es vraiment bloqué

### Demande de l'aide

1. **GitHub Discussions** : pose ta question
   - Indique : chapitre, erreur exacte, ce que tu as essayé

2. **GitHub Issues** : Crée une issue
   - Template : "Help wanted: [ton problème]"
   - Attache : ton code, ton erreur, ton OS

3. **Un moteur de recherche** ou StackOverflow : cherche l'erreur exacte
   - Ex : "npm EACCES permission denied"
   - 99% du temps quelqu'un a eu le même souci

---

# 🎊 Félicitations !

Tu as :

- ✅ Installé Node.js
- ✅ Créé un projet React
- ✅ Cloné le cours
- ✅ Fini le Chapitre 1 et la Quête 1

**Tu es prêt à entrer dans React-vania !** 🎮⚔️

---

# 📚 Prochaines étapes

1. **Chapitre 2** : Bienvenue à React-vania (1-2 h de lecture + quête 3-4 h)
2. **Chapitre 3** : Composants et listes (2 h de lecture + quête 4-5 h)
3. **Chapitre 4** : L'état *(à venir)*
4. **Chapitre 4.5** : La forge du réactomancien *(à venir)*
5. **Projets complets** : construire pour de vrai *(à venir)*

**Rythme :** 1 chapitre par semaine environ.

---

# 🔗 Ressources utiles

| Ressource | URL |
|-----------|-----|
| **React Docs** | https://react.dev |
| **MDN JavaScript** | https://developer.mozilla.org |
| **Vite Docs** | https://vitejs.dev |
| **StackBlitz** (tester en ligne) | https://stackblitz.com |

---

# 💬 Questions ? Suggestions ?

- **Bug dans le cours ?** → GitHub Issues
- **Question sur le contenu ?** → GitHub Discussions
- **Idée d'amélioration ?** → GitHub Discussions
- **Veux contribuer ?** → [CONTRIBUTE.md](./CONTRIBUTE.md)

---

**Bon courage dans ta quête, aventurier ! ⚔️**

*Créé avec ❤️ pour les développeurs qui veulent vraiment comprendre React*

**Last updated :** Novembre 2026
