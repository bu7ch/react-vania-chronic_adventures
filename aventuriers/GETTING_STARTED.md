# 🚀 GETTING STARTED — Guide complet

Bienvenue ! Tu es ici parce que tu veux apprendre React. **Tu es au bon endroit.**

Ce guide va t'accompagner étape par étape, depuis ton premier setup jusqu'à ta première quête complétée. Pas de magie, pas de suppositions. Juste du code qui marche.

**Durée estimée :** 1-2 heures (première fois)

---

## 📋 Table des matières

1. [Prérequis (5 min)](#prérequis)
2. [Installation (10 min)](#installation)
3. [Setup du premier projet (15 min)](#setup-du-premier-projet)
4. [Lire le cours (30-60 min)](#lire-le-cours)
5. [Faire ta première quête (60-90 min)](#faire-ta-première-quête)
6. [Troubleshooting](#troubleshooting)

---

## ✅ Prérequis

### Tu as besoin de :

- **Un ordinateur** (Windows, Mac, ou Linux)
- **Un éditeur de code** (gratuit)
- **Internet**
- **Node.js** (gratuit)
- **30-45 min de temps sans distractions**

### Tu dois avoir :**

- ✅ Notion basique de JavaScript (variables, fonctions)
- ✅ Savoir utiliser un terminal/invite de commande
- ✅ Savoir naviguer sur GitHub

**Si tu n'es pas sûr :** Pas de souci ! Lis d'abord la Chapitre 1 du cours. Reviens ici après.

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
3. Attends que ça télécharge (`node-v20.X.X-x64.msi`)
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

### ✅ Vérifier que ça marche

Ouvre un terminal/invite de commande et tape :

```bash
node --version
npm --version
```

Tu devrais voir :

```
v20.10.0   (ou une version similaire)
10.2.4     (ou une version similaire)
```

**Si tu vois les versions :** ✅ C'est bon ! Passe à l'étape 2.

**Si tu vois une erreur :** Voir [Troubleshooting](#troubleshooting)

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
git clone https://github.com/react-vania/aventuriers.git

# Entre dans le dossier
cd aventuriers
```

Tu devrais voir :

```
aventuriers/
├── README.md
├── GETTING_STARTED.md
├── chapitres/
├── projets-complets/
└── ...
```

### Sans Git (alternative)

1. Va sur https://github.com/react-vania/aventuriers
2. Clique sur le bouton vert **"Code"**
3. Clique sur **"Download ZIP"**
4. Dézippe le fichier sur ton ordi

Puis ouvre le dossier dans VS Code.

---

# 💻 Setup du premier projet

## Étape 4 : Créer un projet React (10-15 min)

Tu vas créer un projet neuf où tu pourras faire les quêtes du cours.

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
  VITE v4.5.0  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Ouvrir dans le navigateur

Clique sur le lien : **http://localhost:5173/**

Tu devrais voir une page React basique :

```
┌─────────────────────────────────────┐
│  ⚛️  React + Vite                    │
│                                    │
│  [Count: 0]                        │
│  [Edit src/App.jsx and save]       │
│                                    │
└─────────────────────────────────────┘
```

**Si tu vois ça :** ✅ Bravo ! Ton projet marche !

**Si tu vois une erreur :** Voir [Troubleshooting](#troubleshooting)

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

1. Va sur https://github.com/react-vania/aventuriers
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

**Temps de lecture :** 30-45 min

**Ce que tu dois faire :**

```
✅ Lis chaque section
✅ Teste les exemples dans la console du navigateur (F12)
✅ N'hésite pas à relire si c'est confus
❌ Ne panique pas si c'est pas clair au premier coup
```

---

# 🗡️ Faire ta première quête

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

**Ouvre le fichier `src/App.jsx` dans VS Code**

Remplace le contenu par :

```javascript
export default function App() {
  // Crée ton objet hero ici
  const hero = {
    name: "Aragorn",
    health: 100,
    mana: 50,
    level: 1,
    // À toi de compléter...
  };

  // Test dans la console du navigateur
  console.log(hero);

  return (
    <div>
      <h1>Mon héro : {hero.name}</h1>
      <p>Santé : {hero.health}</p>
    </div>
  );
}
```

Sauvegarde (`Ctrl+S` ou `Cmd+S`)

Le navigateur se met à jour tout seul. Regarde la console du navigateur (`F12` → onglet "Console")

**C'est ici que tu vas tester ton objet :**

```javascript
hero.attack()     // Affiche les dégâts
hero.heal()       // Restaure la santé
console.log(hero) // Affiche l'objet entier
```

### Phase 2 : ANALYZE — Réponds aux questions

La quête te pose des questions :

> Pourquoi utiliser `this.property` au lieu de `hero.property` ?

**Réponds par écrit** (Markdown file, Google Doc, peu importe) :

```markdown
# Réponses Phase 2 - Chapitre 1

## Question 1 : Pourquoi `this.property` ?

Parce que... [ta réponse]

## Question 2 : Qu'est-ce que Math.min() fait ?

...
```

Garde tes réponses. Tu les revérifieras avec les solutions plus tard.

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

**Crée une grille :**

```markdown
| Critère | Approche A | Approche B | Approche C |
|---------|-----------|-----------|-----------|
| Répétition de code | Beaucoup | Peu | Peu |
| Facilité de modification | Faible | Moyenne | Haute |
| Compréhension (débutant) | Facile | Moyenne | Difficile |
| Meilleur pour 100 héros ? | ❌ | ⚠️ | ✅ |
```

**Quelle approche tu choisirais pour un jeu ?** Argumente.

### Phase 4 : CREATE libre — Le défi

C'est le vrai test. La quête te dit :

> Crée un système où tu peux créer des héros avec deux rôles :
> - Guerrier : attack() = 20 dégâts, heal() = 15 PV
> - Mage : attack() = 10 dégâts (consomme mana), heal() = 25 PV (coûte mana)
> 
> Pas de duplication de code (DRY)

**À toi de décider la structure !**

Voici une approche possible :

```javascript
// Crée une "factory" qui génère des héros
function createHero(name, role) {
  const baseHero = {
    name,
    health: 100,
    mana: 50,
    level: 1
  };

  if (role === "warrior") {
    return {
      ...baseHero,
      attack() { return 20; },
      heal() { this.health = Math.min(100, this.health + 15); }
    };
  } else if (role === "mage") {
    return {
      ...baseHero,
      attack() { 
        this.mana -= 10;
        return 10; 
      },
      heal() { 
        this.mana -= 15;
        this.health = Math.min(100, this.health + 25); 
      }
    };
  }
}

// Teste
const warrior = createHero("Aragorn", "warrior");
const mage = createHero("Gandalf", "mage");

warrior.attack();  // 20
mage.attack();     // 10 (et mana - 10)
```

**Mais ce n'est qu'une approche !** Toi tu peux en trouver une meilleure.

---

# ✅ Vérifier tes réponses

## Voir les solutions

Après avoir fait la Quête 1, tu peux vérifier.

### Phase 2 & 3 : Solutions dans le dépôt

```bash
# Dans le dossier aventuriers que tu as cloné
cd chapitres/01-royaume-javascript/solutions/

# Ouvre les fichiers
cat phase2-analyze.md      # Réponses Phase 2
cat phase3-evaluate.md     # Réponses Phase 3
```

### Phase 4 : Voir la solution sur une branche spéciale

```bash
# Depuis le dossier aventuriers
git checkout solutions-ch1-phase4

# Regarde la solution
cat chapitres/01-royaume-javascript/solutions/phase4-create.js

# Reviens au code principal
git checkout main
```

**Comment utiliser les solutions :**

1. D'abord, CODE TOI-MÊME
2. Puis, COMPARE avec la solution
3. Note les DIFFÉRENCES
4. Comprends POURQUOI tu aurais pu faire mieux
5. Refais l'exercice en intégrant ce que tu as appris

---

# 📝 Test rapide

À la fin du Chapitre 1, il y a un "Test rapide" :

```
✅ Test rapide du chapitre 1

Question 1 : Crée un objet `player` avec `name` et `health`. 
Ajoute une méthode `takeDamage(amount)` qui réduit la santé 
sans passer en dessous de 0.

Question 2 : Pourquoi `const` ne permet pas de réaffecter 
une variable, mais autorise à modifier un objet ?
```

**Fais ce test** pour savoir si tu as vraiment compris.

---

# 🚀 Passer au Chapitre 2

Une fois que tu as fini le Chapitre 1 ET la Quête 1 :

```bash
# Va au Chapitre 2
cd ../../02-react-vania/

# Lis le contenu
code README.md

# Puis la Quête 2
code quete-2.md
```

Le Chapitre 2 c'est l'introduction à React. C'est là que tout devient magique.

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

## Problème : "Unexpected token <" en console

**Symptôme :**

```
SyntaxError: Unexpected token <
```

**Solution :**

Tu as probablement une erreur de syntaxe JSX.

Exemple :

```javascript
// ❌ FAUX
return
  <div>Hello</div>

// ✅ CORRECT
return (
  <div>Hello</div>
)
```

Vérifie que :
- Tous les `<` ont un `>`
- Tu retournes du JSX avec des parenthèses `(` `)` si sur plusieurs lignes

---

## Problème : "Git not found"

**Symptôme :**

```bash
$ git clone https://...
bash: git: command not found
```

**Solution :**

Tu peux aussi télécharger le ZIP :

1. Va sur https://github.com/react-vania/aventuriers
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

1. **Discord** : Rejoins la communauté
   - Pose ta question avec : dossier, erreur exacte, ce que tu as essayé

2. **GitHub Issues** : Crée une issue
   - Template : "Help wanted: [ton problème]"
   - Attache : ton code, ton erreur, ton OS

3. **StackOverflow** : Cherche l'erreur exacte
   - Ex : "npm EACCES permission denied"
   - 99% du temps quelqu'un a eu le même souci

---

# 🎊 Félicitations !

Tu as :

- ✅ Installé Node.js
- ✅ Créé un projet React
- ✅ Cloné le cours
- ✅ Fini le Chapitre 1 et la Quête 1

**Tu es maintenant un développeur React qui débute !** 🎮⚔️

---

# 📚 Prochaines étapes

1. **Chapitre 2** : Comprendre React (2-3h)
2. **Chapitre 3** : Composants + Listes (3-4h)
3. **Chapitre 4** : État (2-3h)
4. **Chapitre 4.5** : La technique derrière (2h)
5. **Projets** : Construire pour de vrai (5-10h)

**Rythme :** 1 chapitre par semaine = 6 semaines pour tout.

---

# 🔗 Ressources utiles

| Ressource | URL |
|-----------|-----|
| **React Docs** | https://react.dev |
| **MDN JavaScript** | https://developer.mozilla.org |
| **Vite Docs** | https://vitejs.dev |
| **StackBlitz** (tester en ligne) | https://stackblitz.com |
| **Discord React-vania** | https://discord.gg/YOUR_INVITE |

---

# 💬 Questions ? Suggestions ?

- **Bug dans le cours ?** → GitHub Issues
- **Question sur le contenu ?** → Discord
- **Idée d'amélioration ?** → GitHub Discussions
- **Veux contribuer ?** → CONTRIBUTE.md

---

**Bon courage dans ta quête, aventurier ! ⚔️**

*Créé avec ❤️ pour les développeurs qui veulent vraiment comprendre React*

**Last updated :** Mai 2026
