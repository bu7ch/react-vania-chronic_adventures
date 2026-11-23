# Chapitre 2 : Bienvenue à React-vania

Tu as traversé le royaume de JavaScript. Devant toi se dresse maintenant la porte de React-vania. Dans ce chapitre, tu l'ouvres : tu allumes la forge (Vite), tu comprends ce qu'elle a fabriqué, et tu écris **ton premier composant**.

**Durée :** 1-2 h de lecture et de pratique, puis la quête (3-4 h).
**Prérequis :** le Chapitre 1 (objets, fonctions, arrow functions, destructuring) et un projet Vite qui tourne ([GETTING_STARTED](../../GETTING_STARTED.md#étape-4--créer-un-projet-react-10-15-min)).

---

## React en une phrase

> **React est une bibliothèque JavaScript pour décrire une interface sous forme de petites briques réutilisables : les composants.**

Au lieu de dire au navigateur *comment* modifier la page étape par étape (« trouve ce bouton, change son texte, ajoute cette ligne »), tu décris *ce que la page doit montrer*, et React s'occupe du reste. Tu écris des fonctions qui renvoient de l'interface. C'est tout. Le reste du cours n'est qu'une longue exploration de cette idée.

---

## 1. Allumer la forge

Si ce n'est pas déjà fait, crée ton projet :

```bash
npm create vite@latest mon-aventure-react -- --template react
cd mon-aventure-react
npm install
npm run dev
```

Ouvre l'adresse affichée dans le terminal (en général `http://localhost:5173/`). Tu vois une page « Get started » avec un compteur. **Laisse le terminal ouvert** : à chaque sauvegarde, la page se met à jour toute seule.

> 💡 Les numéros de version changent vite. Si ton terminal affiche une autre version de Vite que celles montrées dans ce cours, ce n'est pas grave : les fichiers de ce chapitre sont les mêmes.

---

## 2. Anatomie du projet : trois fichiers qui comptent

Ouvre le dossier dans ton éditeur. Il contient beaucoup de choses, mais **seuls trois fichiers t'intéressent** :

```
mon-aventure-react/
├── index.html          ← La page web. Presque vide.
└── src/
    ├── main.jsx        ← Le point d'entrée : « branche React sur la page »
    └── App.jsx         ← TON composant racine : c'est ici que tu travailles
```

Regarde-les dans l'ordre.

### `index.html` : la scène vide

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

La page ne contient qu'une `<div id="root">` vide et un script. Tout ce que tu vois à l'écran est **dessiné par React dans cette div**.

### `src/main.jsx` : l'allumage

Avant de le lire, un mot sur `import` et `export`. Chaque fichier JavaScript est un **module** : ses variables lui sont privées. Pour partager quelque chose avec un autre fichier, on l'**exporte** (`export default App;` met `App` à disposition) et l'autre fichier l'**importe** (`import App from './App.jsx'` va le chercher). Un chemin qui commence par `./` signifie « dans le même dossier ». Les accolades, comme dans `import { StrictMode } from 'react'`, servent à importer un élément précis d'une bibliothèque, et `import './index.css'` charge simplement un fichier de style.

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Traduction : « Trouve la div `root`, et dessine dedans le composant `App`. » Tu n'auras presque jamais à toucher ce fichier. (`StrictMode` est un garde-fou qui t'avertit des erreurs courantes en développement. Garde-le.)

### `src/App.jsx` : ton royaume

C'est le composant racine. Tout ton jeu sera, de près ou de loin, enfant de `App`. Aujourd'hui il contient la page de démonstration de Vite. On va le vider.

---

## 3. Faire le ménage

Remplace **tout** le contenu de `src/App.jsx` par :

```jsx
function App() {
  return <h1>Bienvenue à React-vania ⚔️</h1>;
}

export default App;
```

Sauvegarde. La page change instantanément : c'est ton premier composant en marche.

Deux petites retouches pour partir sur de bonnes bases :

1. Ton nouveau `App.jsx` n'importe plus `App.css` (l'ancien le faisait). Tu peux donc supprimer le fichier `src/App.css` et le dossier `src/assets/`, qui ne servent plus.
2. Remplace le contenu de `src/index.css` par [`code-demo/index.css`](./code-demo/index.css). C'est la feuille de style du cours : fond sombre, cartes, barre de vie. Tu n'as rien à y comprendre.

---

## 4. Ton premier composant

Regarde ce que tu viens d'écrire :

```jsx
function App() {
  return <h1>Bienvenue à React-vania ⚔️</h1>;
}
```

**Un composant React est une fonction JavaScript qui renvoie du JSX.** Rien de plus. Tu connais déjà les fonctions (Chapitre 1) : la seule nouveauté est ce qu'elle renvoie.

### Créer un deuxième composant

```jsx
function Header() {
  return (
    <header>
      <h1>🍺 La Taverne de React-vania</h1>
      <p className="subtitle">Ici, chaque aventurier laisse sa fiche.</p>
    </header>
  );
}

function App() {
  return <Header />;
}

export default App;
```

Remarque : pour **utiliser** `Header`, on l'écrit comme une balise : `<Header />`. C'est ça, composer : un composant en contient d'autres.

### La règle de la majuscule

Un composant **commence toujours par une majuscule** : `Header`, `HeroSheet`, `Footer`.

Pourquoi ? Pour que React fasse la différence entre :

- `<header>` (minuscule) : une vraie balise HTML ;
- `<Header />` (majuscule) : **ton** composant.

Si tu écris `<header />` en pensant appeler ton composant, tu obtiens la balise HTML, pas ta fonction. Et inversement, `<heroCard />` ne sera jamais pris pour un composant.

---

## 5. Le JSX en 6 règles

Ce qui ressemble à du HTML dans `return (...)` s'appelle du **JSX**. Ce n'est pas du HTML : c'est du JavaScript déguisé. Le navigateur ne le comprend pas, c'est Vite qui le transforme avant de l'envoyer. Mais il ressemble assez au HTML pour qu'on puisse l'écrire presque comme lui, **avec 6 règles à retenir**.

### Règle 1 : un seul parent

Un composant ne peut renvoyer **qu'un seul élément racine**.

```jsx
// ❌ Erreur : deux éléments côte à côte
return (
  <h2>Aragorn</h2>
  <p>Niveau 5</p>
);

// ✅ Un parent <div>...
return (
  <div>
    <h2>Aragorn</h2>
    <p>Niveau 5</p>
  </div>
);

// ✅ ...ou un Fragment : un parent invisible, qui n'ajoute rien à la page
return (
  <>
    <h2>Aragorn</h2>
    <p>Niveau 5</p>
  </>
);
```

Les parenthèses autour du `return (...)` servent juste à pouvoir écrire le JSX sur plusieurs lignes.

### Règle 2 : toutes les balises se ferment

```jsx
<img src="/hero.png" alt="Aragorn" />   // ✅ auto-fermante
<br />                                    // ✅
<Header />                                // ✅ tes composants aussi
```

En HTML, `<img src="...">` sans fermeture passe. En JSX, c'est une erreur.

### Règle 3 : `className`, pas `class`

`class` est déjà un mot réservé en JavaScript (les classes). En JSX, on écrit donc :

```jsx
<div className="card">...</div>
```

Si tu écris `class`, ça fonctionne quand même, mais la console te prévient : « Invalid DOM property `class`. Did you mean `className`? ». Écoute-la.

### Règle 4 : `{ }` ouvre une fenêtre vers JavaScript

Dans le JSX, tout ce qui est entre accolades est du **JavaScript**. C'est la règle la plus importante : c'est elle qui relie tes données à ton interface.

```jsx
const hero = { name: "Aragorn", level: 5, health: 25, maxHealth: 100 };

function HeroSheet() {
  return (
    <section className="card">
      <h2>{hero.name}</h2>
      <p>Niveau {hero.level}</p>
      <p>Prochain niveau : {hero.level + 1}</p>
      <p>Santé : {Math.round((hero.health / hero.maxHealth) * 100)} %</p>
    </section>
  );
}
```

Tu peux mettre dans les accolades n'importe quelle **expression** (quelque chose qui produit une valeur) : une variable, un calcul, un appel de fonction, un accès à une propriété d'objet. Tu reconnais le Chapitre 1 : c'est ton objet `hero`, affiché.

Attention : React sait afficher du **texte**, des **nombres** et des **éléments JSX**. Les valeurs `true`, `false`, `null` et `undefined` n'affichent rien. En revanche, un **objet** (`{hero}`) fait planter la page : React ne sait pas comment dessiner un objet entier. Affiche ses propriétés une par une (`{hero.name}`).

Enfin, un commentaire dans le JSX s'écrit `{/* mon commentaire */}` : c'est une expression vide avec un commentaire JavaScript dedans.

### Règle 5 : pas de `if` dans les accolades, mais deux alternatives

Une accolade accepte une **expression**, pas une **instruction**. `if (...) { ... }` est une instruction : elle est donc interdite. Voici les deux outils à utiliser à la place.

```jsx
// Le ternaire : choisir entre DEUX affichages
<p>État : {hero.health > 50 ? "En pleine forme 💪" : "Blessé 🩹"}</p>

// && : afficher quelque chose OU rien du tout
{hero.health <= 30 && <p className="warning">⚠️ Santé critique !</p>}
```

Lis `a && b` comme « si `a`, alors `b` ». Si `a` est faux, React n'affiche rien.

> ⚠️ **Piège classique avec `&&`** : si la partie gauche vaut `0`, React affiche... `0`. Avec `{potions && <p>Tu as des potions</p>}` et `potions` égal à `0`, la page montre un « 0 » orphelin. Écris plutôt `{potions > 0 && <p>...</p>}`.

### Règle 6 : les attributs s'écrivent en camelCase, et `style` prend un objet

Les attributs composés prennent une majuscule : `onClick` (et pas `onclick`), `tabIndex`, `htmlFor`... Et l'attribut `style` ne prend **pas** une chaîne mais un **objet JavaScript**, d'où les doubles accolades :

```jsx
//   ┌── 1res accolades : « je passe en JavaScript »
//   │┌─ 2es accolades : « voici un objet »
<div style={{ width: "25%", backgroundColor: "red" }} />
```

Le premier jeu d'accolades ouvre la fenêtre JavaScript, le second est simplement la syntaxe d'un objet (Chapitre 1). Les propriétés CSS à tiret deviennent du camelCase : `background-color` s'écrit `backgroundColor`. Et `style="color: red"` (une chaîne) fait planter React.

---

## 6. Composer : assembler ta taverne

Un vrai composant racine ne contient presque plus de détails : il **assemble** d'autres composants, chacun responsable d'une seule chose.

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

On lit `App` comme un plan : « une taverne, c'est un en-tête, une fiche de héros et un pied de page ». Pour savoir comment s'affiche la fiche, on va voir `HeroSheet`. C'est la grande force de React : **on découpe l'interface comme on découpe un problème**.

Le fichier [`code-demo/App.jsx`](./code-demo/App.jsx) contient la taverne complète, abondamment commentée. Copie-le dans ton `src/App.jsx`, regarde le résultat dans le navigateur, puis amuse-toi à modifier l'objet `hero` (passe la santé à 80, retire le niveau, renomme le héros) et observe ce qui change.

### Une limite qui va bientôt te frustrer

Regarde `HeroSheet` : elle affiche **toujours** `Aragorn`, car elle lit l'objet `hero` global. Pour afficher un deuxième héros, il faudrait copier-coller tout le composant. Cette frustration est voulue : la réponse s'appelle les **props**, et c'est le sujet du Chapitre 3.

---

## 🧠 Encadré « Sans métaphore »

- **Composant** = une fonction dont le nom commence par une majuscule et qui renvoie du JSX.
- **JSX** = une syntaxe qui permet d'écrire des éléments d'interface dans du JavaScript. Vite la convertit en appels de fonctions JavaScript classiques avant le navigateur : le navigateur ne voit jamais de JSX.
- **Rendu** (*render*) = le moment où React appelle ton composant pour savoir ce qu'il doit afficher.
- **Fragment** (`<>...</>`) = un conteneur qui ne produit aucun élément dans la page.
- **Composition** = construire un composant en en assemblant d'autres.
- **Point d'entrée** = `main.jsx`, qui accroche `App` sur la `<div id="root">`.

Une chose que React ne fait pas : il ne modifie pas ton fichier HTML. Il construit la page en JavaScript, dans la div `root`. C'est pour cela que ton `index.html` est presque vide.

---

## Résumé du chapitre

- Un projet Vite a trois fichiers clés : `index.html` (la scène), `main.jsx` (l'allumage), `App.jsx` (ton composant racine).
- Un composant est une fonction qui renvoie du JSX, et dont le nom commence par une **majuscule**.
- Les 6 règles du JSX : un seul parent (ou Fragment) · balises toujours fermées · `className` · `{ }` pour le JavaScript · ternaire et `&&` à la place de `if` · attributs en camelCase et `style` en objet.
- On compose en assemblant des composants dans d'autres composants.
- Pour l'instant, tes composants lisent des données globales : ils ne sont pas encore réutilisables. C'est le rôle des props (Chapitre 3).

---

## Ton plan d'attaque

1. **Lis ce chapitre** en tapant le code toi-même, sans copier-coller (45 min).
2. **Copie la démo** [`code-demo/App.jsx`](./code-demo/App.jsx), lance-la, et modifie les données (15 min).
3. **Fais la Quête 2** dans [`quete-2.md`](./quete-2.md) (3-4 h, 4 phases).
4. **Passe le [test rapide](./test-rapide.md)** (15 min).

## Prochaines étapes

Tu sais afficher des données avec des composants. Mais ils ne sont pas encore réutilisables : un composant, un seul héros. Au **Chapitre 3**, tu apprends à leur passer des données (les props) et à afficher des listes entières d'aventuriers.

👉 [Chapitre 3 : Les Composants et les Listes](../03-composants-listes/README.md)
