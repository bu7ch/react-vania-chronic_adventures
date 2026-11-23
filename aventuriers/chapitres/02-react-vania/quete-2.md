# 🗡️ Quête 2 : La Taverne de React-vania

## Objectif global

Construire la page d'accueil d'une taverne : un en-tête, la fiche d'un aventurier avec sa barre de vie, un pied de page. Puis analyser ce qui peut mal tourner, comparer plusieurs façons d'organiser ton code, et enfin affronter seul un défi qui te fera sentir pourquoi les **props** (Chapitre 3) existent.

**Durée estimée :** 2-3 heures
**Difficulté :** Facile → Moyen → Moyen → Difficile
**Prérequis :** avoir lu le [Chapitre 2](./README.md) et fait le « ménage » dans ton projet Vite (`src/App.jsx` minimal, `src/index.css` remplacé).

> 🎯 **Règle d'or :** tape le code toi-même. Ne copie pas [`code-demo/App.jsx`](./code-demo/App.jsx) avant d'avoir fini la Phase 1.

---

## Phase 1 : CREATE (Créer) — 45-60 min

### Étape 1 : Le terrain de jeu

Vérifie que ton `src/App.jsx` ressemble à ceci, et que la page affiche bien ton titre :

```jsx
function App() {
  return <h1>Bienvenue à React-vania ⚔️</h1>;
}

export default App;
```

**Comment tester :** `npm run dev` tourne, la page montre le titre. Sinon, relis le [Chapitre 2, section 3](./README.md#3-faire-le-ménage).

### Étape 2 : Le composant `Header`

Crée, **au-dessus** de `App` dans le même fichier, un composant `Header` qui renvoie :

- un élément `<header>` contenant
- un `<h1>` : « 🍺 La Taverne de React-vania »
- un `<p>` avec la classe CSS `subtitle` : une phrase d'accueil de ton choix.

Puis remplace le contenu de `App` pour qu'il affiche `<Header />`.

**Rappels :** nom en majuscule · balises fermées · `className` (pas `class`).

**Comment tester :** le titre et la phrase s'affichent, le sous-titre est en gris clair.

### Étape 3 : Les données du héros

Au-dessus des composants, déclare la fiche de ton aventurier (Chapitre 1 !) :

```jsx
const hero = {
  name: "Aragorn",      // ← Choisis ton héros préféré
  title: "Rôdeur du Nord",
  level: 5,
  health: 25,
  maxHealth: 100,
  weapon: "Anduril",
};
```

### Étape 4 : Le composant `HeroSheet`

Crée `HeroSheet`. Il renvoie une `<section className="card">` qui contient :

1. un `<h2>` : `Aragorn, Rôdeur du Nord` (le nom et le titre **viennent de l'objet**, pas écrits en dur) ;
2. un `<p>` : `Niveau 5 · Arme : Anduril` ;
3. un `<p>` : `Santé : 25 / 100`.

**Astuce :** quand une phrase mêle du texte et des données, on alterne les deux :
`<p>Niveau {hero.level} · Arme : {hero.weapon}</p>`.

**Comment tester :** change `hero.name` dans l'objet, sauvegarde : la page change toute seule, sans que tu touches au JSX.

### Étape 5 : La barre de vie

Sous le texte de santé, ajoute :

```jsx
<div className="bar">
  <div className="bar-fill" style={{ width: "25%" }} />
</div>
```

La barre s'affiche, mais le `25%` est écrit en dur. Calcule le pourcentage à partir de `hero.health` et `hero.maxHealth` **avant** le `return`, dans une variable `healthPercent`, puis utilise-le dans ``style={{ width: `${healthPercent}%` }}``.

**Comment tester :** mets `health: 80` dans l'objet : la barre se remplit à 80 %.

### Étape 6 : L'état du héros (conditions)

Toujours dans `HeroSheet`, ajoute :

1. Un **ternaire** : `<p>État : ...</p>` qui affiche « En pleine forme 💪 » si `healthPercent` dépasse 50, sinon « Blessé 🩹 ».
2. Un **`&&`** : un paragraphe `<p className="warning">⚠️ Santé critique !</p>` qui n'apparaît **que** si `healthPercent` est inférieur ou égal à 30.

**Comment tester :**

| `health` | État affiché | Avertissement |
|----------|--------------|---------------|
| 80 | En pleine forme | non |
| 40 | Blessé | non |
| 25 | Blessé | oui |

### Étape 7 : Le pied de page et l'assemblage

Crée un composant `Footer` (une balise `<footer>` avec un `<p>` de ton choix). Puis écris `App` pour qu'il assemble les trois composants. Comme il y en a trois, il te faut un **Fragment** `<>...</>`.

```jsx
function App() {
  return (
    <>
      <Header />
      <HeroSheet />
      <Footer />
    </>
  );
}
```

**Comment tester :** tu vois l'en-tête, la fiche, le pied de page. La console du navigateur (F12 → Console) ne montre **aucune** erreur ni avertissement en rouge ou en jaune.

Une fois fini, compare avec [`code-demo/App.jsx`](./code-demo/App.jsx).

---

## Phase 2 : ANALYZE (Analyser) — 45-60 min

Un bon développeur ne sait pas seulement écrire du code qui marche : il **reconnaît instantanément ce qui ne marchera pas**. Voici huit extraits cassés. Pour chacun, **avant** de le tester :

1. **Prédis** ce qui va se passer : erreur qui bloque la page ? avertissement dans la console ? affichage bizarre ?
2. **Explique** pourquoi, avec les règles du chapitre.
3. **Corrige**.

Ensuite, vérifie en collant l'extrait dans ton `App.jsx`.

### Bug 1

```jsx
function HeroSheet() {
  return (
    <h2>Aragorn</h2>
    <p>Niveau 5</p>
  );
}
```

### Bug 2

```jsx
function HeroSheet() {
  return <div class="card">Aragorn</div>;
}
```

### Bug 3

```jsx
function HeroSheet() {
  return (
    <div>
      <img src="/hero.png" alt="Aragorn">
      <p>Aragorn</p>
    </div>
  );
}
```

### Bug 4

```jsx
function heroCard() {
  return <p>Aragorn</p>;
}

function App() {
  return <div><heroCard /></div>;
}
```

### Bug 5

```jsx
const hero = { health: 20 };

function HeroSheet() {
  return (
    <div>
      {if (hero.health < 30) { <p>Blessé</p> }}
    </div>
  );
}
```

### Bug 6

```jsx
function HeroSheet() {
  return <div style="color: red">Aragorn</div>;
}
```

### Bug 7

```jsx
const hero = { name: "Aragorn", level: 5 };

function HeroSheet() {
  return <p>Nom : {hero}</p>;
}
```

### Bug 8

```jsx
const potions = 0;

function Inventory() {
  return <div>{potions && <p>Tu as des potions</p>}</div>;
}
```

### Questions de compréhension

**Q1.** Pourquoi un composant doit-il commencer par une majuscule ? Que se passe-t-il sinon ?

**Q2.** Quelle est la différence entre `<div>...</div>` et `<>...</>` comme parent ? Dans quel cas préférer le second ?

**Q3.** Qu'est-ce que le navigateur reçoit réellement : du JSX ou autre chose ? Qui fait la conversion ?

**Q4.** Dans `style={{ width: "25%" }}`, que représente chaque paire d'accolades ?

**Q5.** Pourquoi ne peut-on pas écrire un `if` entre accolades dans le JSX ? Quelles sont les deux alternatives ?

> ✍️ Réponds par écrit, avec tes mots. Les solutions sont sur la branche `solutions-ch2-phase2` (à consulter **après** avoir essayé).

---

## Phase 3 : EVALUATE (Évaluer) — 45-60 min

Il n'y a pas une seule façon d'organiser ton code. Voici **trois** manières d'écrire la même page.

### Approche A : tout dans `App`

```jsx
function App() {
  return (
    <>
      <header>
        <h1>🍺 La Taverne de React-vania</h1>
      </header>
      <section className="card">
        <h2>{hero.name}</h2>
        <p>Santé : {hero.health} / {hero.maxHealth}</p>
      </section>
      <footer>
        <p>Taverne de React-vania</p>
      </footer>
    </>
  );
}
```

### Approche B : plusieurs composants, un seul fichier

C'est ce que tu as fait en Phase 1 : `Header`, `HeroSheet`, `Footer` et `App` dans `App.jsx`.

### Approche C : un fichier par composant

```jsx
// src/HeroSheet.jsx
const hero = { name: "Aragorn", health: 25, maxHealth: 100 };

function HeroSheet() {
  return (
    <section className="card">
      <h2>{hero.name}</h2>
      <p>Santé : {hero.health} / {hero.maxHealth}</p>
    </section>
  );
}

export default HeroSheet;
```

```jsx
// src/App.jsx
import Header from "./Header.jsx";
import HeroSheet from "./HeroSheet.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroSheet />
      <Footer />
    </>
  );
}

export default App;
```

> 📦 **Rappel `export` / `import` :** `export default X` met `X` à disposition des autres fichiers, `import X from "./X.jsx"` va le chercher. Un fichier = un « module ». Le chemin commence par `./` pour dire « dans le même dossier ».

### Grille d'évaluation

Note chaque approche de **1 (mauvais) à 5 (excellent)**, puis justifie en une phrase.

| Critère | A | B | C |
|---------|---|---|---|
| Lisibilité d'`App` d'un coup d'œil | | | |
| Facilité à retrouver un bug (« où est le code de la fiche ? ») | | | |
| Facilité à réutiliser un morceau ailleurs | | | |
| Confort à plusieurs (deux personnes qui modifient en même temps) | | | |
| Simplicité pour un débutant (moins de fichiers à gérer) | | | |
| **Total** | | | |

### Débat

1. Dans quelle situation l'approche A est-elle suffisante ? À partir de quand devient-elle un problème ?
2. Un fichier avec 10 petits composants (B) est-il forcément mauvais ? Et 10 fichiers de 5 lignes (C) ?
3. Quelle approche choisirais-tu pour un jeu de 50 écrans ? Pour un prototype jetable de 20 minutes ?

**Il n'y a pas de bonne réponse unique.** Ce qui compte, c'est que tu saches défendre ton choix avec des critères.

---

## Phase 4 : CREATE libre (Défi) — 60-90 min

### Le Bestiaire des héros

Tu as la fiche d'Aragorn. La taverne accueille aussi **Gandalf** (mage, niveau 10) et **Legolas** (archer, niveau 7).

**Ton défi :** affiche **les trois fiches** sur la même page, avec **uniquement ce que tu as appris aux Chapitres 1 et 2** : pas de props, pas d'état, pas de `.map()`.

**Contraintes :**

- au moins **3 composants** (en plus de `App`) ;
- au moins **un ternaire** et **un `&&`** ;
- au moins **un `style={{ ... }}`** calculé à partir des données ;
- **un Fragment** quelque part ;
- zéro avertissement dans la console.

**Idées de libertés :** une couleur de barre différente selon le héros, un emoji de classe (⚔️ guerrier, 🔮 mage, 🏹 archer) choisi par une condition, une mention « 🌟 Légende » au-dessus du niveau 9.

### Et maintenant, le vrai travail

Quand ça marche, **relis ton code** et réponds par écrit :

1. Combien de lignes sont **quasi identiques** d'une fiche à l'autre ?
2. Si tu devais ajouter un 4e héros, que devrais-tu faire ? Et un 20e ?
3. Si tu devais changer la mise en page de **toutes** les fiches (par exemple mettre le niveau avant le nom), combien d'endroits modifier ?
4. Qu'aimerais-tu pouvoir faire pour ne pas te répéter ?

**Ce que tu ressens à cette étape, c'est exactement le problème que résolvent les props.** Garde tes réponses : tu les relis au début du Chapitre 3.

### Bonus (optionnel)

- Sépare chaque composant dans son propre fichier (approche C) et branche-les avec `import`.
- Ajoute une 4e fiche pour un monstre (Gollum ?) avec un style différent.

---

## Validation finale

Tu as fini la Quête 2 quand :

- ✅ Phase 1 : la Taverne s'affiche, sans erreur ni avertissement dans la console
- ✅ Phase 2 : les 8 bugs prédits, expliqués et corrigés, les 5 questions répondues par écrit
- ✅ Phase 3 : grille d'évaluation remplie, avec une justification pour chaque note
- ✅ Phase 4 : trois fiches affichées, contraintes respectées, 4 questions de relecture répondues

**Bravo, aventurier : tu lis maintenant le JSX comme un livre de sorts.** Direction le Chapitre 3.
