# Chapitre 4 : L'État, ta barre de santé

À la fin du Chapitre 3, tu as ajouté un bouton « Terminer » qui s'affichait, réagissait au clic... et ne changeait rien à l'écran. Ta taverne est jolie, mais **figée** : elle montre des données, elle ne sait pas les faire évoluer. Dans ce chapitre, tu lui donnes une **mémoire**. C'est le chapitre qui transforme une page en application.

**Durée :** 2 h de lecture et de pratique, puis la quête (4-5 h).
**Prérequis :** le [Chapitre 3](../03-composants-listes/README.md) (props, `.map()`, `key`) et ton projet Vite.

---

## 1. Pourquoi une variable ordinaire ne suffit pas

Essayons l'idée la plus naturelle : une variable que le bouton modifie.

```jsx
function Hero() {
  let health = 25;

  function hit() {
    health = health - 10;
    console.log(health); // 15, puis 5, puis -5...
  }

  return (
    <div>
      <p>Santé : {health}</p>
      <button onClick={hit}>Blesser</button>
    </div>
  );
}
```

Clique sur le bouton : la console affiche bien `15`, mais **l'écran reste à 25**. Deux raisons :

1. **React ne regarde pas tes variables.** Il ne sait pas que `health` a changé, donc il ne redessine rien.
2. **Même s'il redessinait**, il rappellerait la fonction `Hero` depuis le début, et `let health = 25` remettrait la valeur à 25.

Il nous faut donc un endroit où ranger une donnée qui :
- **survit** d'un affichage à l'autre ;
- **prévient React** quand elle change, pour qu'il redessine la page.

Cet endroit s'appelle l'**état** (*state*), et on y accède avec le hook `useState`.

---

## 2. Réagir aux clics : les événements

Avant l'état, un mot sur le bouton. Tu as déjà vu `onClick` dans le chapitre précédent, sans l'étudier. Voici comment ça marche.

```jsx
<button onClick={hit}>Blesser</button>
```

`onClick` est une prop spéciale : tu lui donnes **une fonction**, et React la rappelle **quand l'utilisateur clique**. Il existe un `on...` pour chaque événement : `onChange` (saisie dans un champ), `onSubmit` (envoi d'un formulaire), `onMouseEnter`...

### La règle qui évite 90 % des bugs : une fonction, pas un appel

Tu te souviens du Chapitre 1 : `castFireball` désigne le sort, `castFireball(25)` le **lance**. Ici, c'est vital :

```jsx
<button onClick={hit}>          // ✅ on donne la fonction : React l'appellera au clic
<button onClick={() => hit()}>  // ✅ une arrow function qui appellera hit au clic
<button onClick={hit()}>        // ❌ on appelle hit TOUT DE SUITE, au rendu
```

La dernière forme exécute `hit()` pendant que React dessine la page, et donne son **résultat** (souvent `undefined`) à `onClick`. Si `hit` modifie l'état, tu obtiens même l'erreur `Too many re-renders` (React détecte une boucle infinie de rendus).

Quand tu dois **passer un argument**, enveloppe l'appel dans une arrow function :

```jsx
<button onClick={() => hit(hero.id)}>Blesser</button>   // ✅
<button onClick={hit(hero.id)}>Blesser</button>          // ❌ appel immédiat
```

### L'objet « événement »

React passe à ta fonction un objet qui décrit ce qui s'est passé. Tu en auras besoin dans les formulaires :

```jsx
<input onChange={(event) => console.log(event.target.value)} />
```

`event.target` est l'élément HTML concerné, et `event.target.value` le texte qu'il contient.

---

## 3. `useState` : donner une mémoire à un composant

Voici le même composant, cette fois avec de l'état :

```jsx
import { useState } from "react";

function Hero() {
  const [health, setHealth] = useState(25);

  function hit() {
    setHealth(health - 10);
  }

  return (
    <div>
      <p>Santé : {health}</p>
      <button onClick={hit}>Blesser</button>
    </div>
  );
}
```

Clique : l'écran passe à 15, puis 5, puis -5. Décortiquons.

### Le destructuring de tableau

`useState(25)` renvoie **un tableau de deux éléments** : la valeur actuelle et une fonction pour la changer. On les déplie avec le **destructuring de tableau**, cousin de celui du Chapitre 1 (mais avec des crochets, car on déplie un tableau et non un objet) :

```javascript
const pair = ["Aragorn", 100];

const [name, health] = pair;   // name vaut "Aragorn", health vaut 100
```

Les noms sont libres, mais la convention est `[truc, setTruc]` : `[health, setHealth]`, `[heroes, setHeroes]`, `[name, setName]`.

### Ce qui se passe quand tu appelles `setHealth`

1. React **mémorise la nouvelle valeur** (à part, hors de ta fonction).
2. Il **rappelle ton composant** : la fonction `Hero` s'exécute à nouveau, de haut en bas. C'est ce qu'on appelle un **nouveau rendu** (*re-render*).
3. Cette fois, `useState(25)` ne repart pas de 25 : React lui renvoie la valeur mémorisée.
4. Le JSX retourné remplace l'ancien à l'écran. Seuls les morceaux qui ont changé sont réellement mis à jour.

Retiens cette image : **un composant est une fonction que React rappelle à chaque changement d'état**, et `useState` lui rend à chaque fois sa mémoire.

### Chaque instance a son état

Si tu utilises un composant deux fois, chaque copie a **son propre état**, indépendant de l'autre :

```jsx
<Counter />   // clique ici : seul ce compteur change
<Counter />   // celui-ci reste à 0
```

### L'état est un instantané

C'est le point qui surprend le plus. Pendant un rendu, `health` **ne change pas** : c'est une photo de la valeur au moment du rendu. Appeler `setHealth` ne modifie pas la variable `health` de l'exécution en cours : il demande un **prochain** rendu avec la nouvelle valeur.

```jsx
function hit() {
  setHealth(health - 10);
  console.log(health);   // affiche encore l'ANCIENNE valeur (25), pas 15
}
```

Dans ce même gestionnaire, `health` vaut 25 du début à la fin. La nouvelle valeur n'existera qu'au rendu suivant.

### Quand le nouvel état dépend de l'ancien : passe une fonction

Une conséquence directe :

```jsx
function hitTwice() {
  setHealth(health - 10);
  setHealth(health - 10);   // health vaut toujours 25 ici : on demande 15 deux fois
}
// Résultat : 15, et non 5.
```

Pour enchaîner plusieurs changements qui dépendent du précédent, donne à `setHealth` **une fonction** au lieu d'une valeur. React la rappelle avec la valeur la plus à jour :

```jsx
function hitTwice() {
  setHealth((current) => current - 10);
  setHealth((current) => current - 10);   // 25 → 15 → 5 ✅
}
```

Règle pratique : **si ton nouvel état se calcule à partir de l'ancien, utilise la forme fonction** (`(current) => ...`). Tu comprendras en détail pourquoi au Chapitre 4.5 (« La forge du réactomancien »).

---

## 4. Les formulaires : des champs « contrôlés »

Un champ de saisie a lui aussi une valeur qui change. En React, on la range dans l'état, et on dit que le champ est **contrôlé** :

```jsx
function AddHeroForm({ onAdd }) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();        // empêche le navigateur de recharger la page
    onAdd(name.trim());
    setName("");                   // on vide le champ
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
```

Le cycle : tu tapes une lettre → `onChange` se déclenche → `setName` met à jour l'état → le composant se redessine → l'`input` affiche la nouvelle valeur. **L'état est la source de vérité**, le champ n'est qu'un reflet.

Si tu donnes une `value` à un champ **sans** `onChange`, il devient figé (impossible de taper) et la console te prévient : « You provided a `value` prop to a form field without an `onChange` handler ».

Autre détail : `event.preventDefault()`. Sans lui, envoyer un formulaire recharge la page entière, et ton état disparaît.

Enfin, un `<button>` placé dans un `<form>` **envoie** le formulaire par défaut. Pour un bouton qui ne doit pas l'envoyer (comme « Blesser » dans une carte qui serait dans un formulaire), écris `type="button"` ; pour celui qui doit l'envoyer, `type="submit"`. Par prudence, la démo précise toujours le `type`.

---

## 5. La règle d'or : ne modifie jamais l'état en place

Voici la règle la plus importante du chapitre :

> **Tu ne modifies jamais directement une valeur d'état. Tu en crées une nouvelle, que tu donnes au setter.**

Avec un nombre ou un texte, c'est naturel. Avec un **objet** ou un **tableau**, la tentation est grande de modifier la valeur existante :

```jsx
const [hero, setHero] = useState({ name: "Aragorn", health: 25 });

function hit() {
  hero.health = hero.health - 10;   // ❌ on MODIFIE l'objet existant
  setHero(hero);                    // ...et on redonne le MÊME objet
}
```

Résultat : **rien ne change à l'écran**, alors que la donnée, elle, a bien été modifiée en coulisse (au clic suivant, la page « saute » de deux valeurs d'un coup !). Pourquoi ? React compare l'ancienne et la nouvelle valeur pour décider s'il doit redessiner. Si tu lui redonnes **le même objet**, il conclut « rien n'a changé ».

La bonne façon : fabriquer une **copie** avec le spread (`...`), tu l'as vu au Chapitre 3.

### Objets : copier puis surcharger

```jsx
function hit() {
  setHero({ ...hero, health: hero.health - 10 });   // ✅ nouvel objet
}
```

`{ ...hero, health: ... }` signifie : « un nouvel objet avec toutes les propriétés de `hero`, sauf `health` que je remplace ».

### Tableaux : trois recettes à connaître par cœur

Un tableau d'état se met à jour **sans jamais utiliser** `push`, `splice` ou l'affectation `items[0] = ...` (qui modifient sur place). On utilise des méthodes qui **renvoient un nouveau tableau** :

```jsx
const [heroes, setHeroes] = useState(initialHeroes);

// ➕ Ajouter : un nouveau tableau avec l'élément en plus
setHeroes([...heroes, newHero]);

// 🗑️ Retirer : filter garde tout sauf l'élément visé
setHeroes(heroes.filter((hero) => hero.id !== idToRemove));

// ✏️ Modifier un élément : map remplace UN élément, garde les autres
setHeroes(
  heroes.map((hero) =>
    hero.id === idToHit ? { ...hero, health: hero.health - 20 } : hero
  )
);
```

Ces trois recettes (ajouter avec `[...liste, x]`, retirer avec `filter`, modifier avec `map`) couvrent l'immense majorité de tes besoins. Prends le temps de les apprendre : tu les écriras des centaines de fois.

> 💡 **Dans un gestionnaire, privilégie la forme fonction** quand l'état précédent compte : `setHeroes((current) => current.filter(...))`. C'est ce que fait la démo.

---

## 6. Un état, ou plusieurs ?

Que faire quand un composant a plusieurs informations à retenir ? Deux options :

```jsx
// Option A : plusieurs états séparés
const [name, setName] = useState("");
const [health, setHealth] = useState(100);
const [level, setLevel] = useState(1);

// Option B : un seul état, un objet
const [hero, setHero] = useState({ name: "", health: 100, level: 1 });
```

Pas de règle absolue, mais deux repères :

- **Des données indépendantes** (le texte d'un champ et la liste des héros) : des états séparés. Ils changent pour des raisons différentes.
- **Des données qui changent toujours ensemble** (les coordonnées `x` et `y` d'un héros) : un seul objet, pour ne pas oublier d'en mettre un à jour.

Avec l'option B, rappelle-toi la règle d'or : `setHero({ ...hero, level: hero.level + 1 })`, jamais `hero.level += 1`. Tu compareras les deux dans la quête.

---

## 7. Ne stocke pas ce que tu peux calculer

Un piège classique : ranger dans l'état une valeur qui se déduit d'une autre.

```jsx
// ❌ Deux états à garder synchronisés... et on finira par oublier
const [heroes, setHeroes] = useState(initialHeroes);
const [aliveCount, setAliveCount] = useState(3);

// ✅ Un seul état, et le reste se calcule à chaque rendu
const [heroes, setHeroes] = useState(initialHeroes);
const aliveCount = heroes.filter((hero) => hero.health > 0).length;
```

Un composant est rappelé à chaque changement : calculer `aliveCount` à ce moment-là ne coûte presque rien, et il est **toujours juste**. Ce qui se calcule se calcule. L'état est réservé à ce que tu ne peux pas déduire d'autre chose.

Variante du même piège : **copier une prop dans l'état**.

```jsx
function HeroCard({ health }) {
  const [h] = useState(health);   // ❌ h garde la PREMIÈRE valeur de health
  return <p>{h}</p>;              //    et ne suivra plus les changements de la prop
}
```

`useState` n'utilise sa valeur de départ qu'**une seule fois**, au premier rendu. Si le parent envoie ensuite une nouvelle `health`, le composant continue d'afficher l'ancienne. Utilise la prop directement : `<p>{health}</p>`.

Copier une prop dans l'état n'est légitime que si c'est **voulu** : la prop ne sert alors que de point de départ, et on la nomme en conséquence (`initialHealth`), pour que personne ne s'attende à ce qu'elle reste synchronisée. C'est ce que tu feras à l'étape 2 de la quête, avant de remonter l'état à l'étape 3.

---

## 8. Où ranger l'état ? Remonter l'état

Question de conception : si **deux composants** ont besoin de la même donnée, où la mettre ?

Reprenons la taverne. `App` affiche « 2 aventuriers sur 3 en état de se battre », et chaque `HeroCard` affiche la santé de son héros. Les deux ont besoin de la liste des héros. L'état doit donc vivre dans leur **parent commun** : `App`. On parle de **remonter l'état** (*lifting state up*).

Mais comment une `HeroCard` (enfant) prévient-elle `App` (parent) qu'on a cliqué sur « Blesser » ? Tu te souviens : **les props descendent, et un enfant ne modifie jamais les données du parent**. La solution : le parent passe à l'enfant **une fonction**, et l'enfant l'appelle.

```jsx
// Dans App : la fonction qui MODIFIE l'état, et c'est elle qui est transmise
function changeHealth(id, delta) { /* ... setHeroes(...) ... */ }

<HeroCard
  name={hero.name}
  health={hero.health}
  onHit={() => changeHealth(hero.id, -20)}
/>

// Dans HeroCard : il se contente d'APPELER la fonction reçue
<button onClick={onHit}>Blesser</button>
```

Le schéma complet :

```
        App            ← POSSÈDE l'état (heroes) et les fonctions qui le modifient
         │
   données ↓  ↑ événements (appels de fonctions)
         │
     HeroGallery
         │
      HeroCard         ← AFFICHE les données, APPELLE les fonctions reçues
```

On résume : **les données descendent par les props, les événements remontent par des fonctions**. Par convention, une prop qui reçoit une fonction commence par `on` (`onHit`, `onAdd`, `onRemove`), et la fonction du parent qui la fournit s'appelle `handle...` ou décrit l'action (`changeHealth`).

Règle de placement : **mets l'état dans le plus petit composant qui est parent de tous ceux qui en ont besoin**. Dans la démo, le texte en cours de saisie du formulaire n'intéresse personne d'autre : il reste local à `AddHeroForm`. La liste des héros intéresse plusieurs composants : elle remonte dans `App`.

---

## 9. Les règles des hooks (aperçu)

`useState` est un **hook** : une fonction spéciale de React dont le nom commence par `use`. Deux règles à respecter, que le linter vérifie pour toi :

1. **Appelle les hooks uniquement dans un composant** (ou un autre hook), pas dans une fonction ordinaire.
2. **Appelle-les toujours au niveau le plus haut du composant** : jamais dans un `if`, une boucle ou après un `return`.

```jsx
function Hero({ show }) {
  if (show) {
    const [count, setCount] = useState(0);   // ❌ appelé parfois, parfois pas
  }
  // ...
}
```

React retrouve ton état grâce à l'**ordre** dans lequel tu appelles les hooks. Si cet ordre change d'un rendu à l'autre, il s'y perd et affiche : « Rendered more hooks than during the previous render ». Le Chapitre 4.5 explique ce mécanisme en détail.

---

## 10. Assembler : la Taverne vivante

La démo [`projets-exemples/tavern-vivante/`](./projets-exemples/tavern-vivante/) reprend la galerie du Chapitre 3 et la rend vivante :

| Fichier | Rôle |
|---------|------|
| [`App.jsx`](./projets-exemples/tavern-vivante/App.jsx) | **Possède l'état** (la liste des héros) et les fonctions qui le modifient |
| [`HeroGallery.jsx`](./projets-exemples/tavern-vivante/HeroGallery.jsx) | Transmet la liste et les fonctions à chaque carte |
| [`HeroCard.jsx`](./projets-exemples/tavern-vivante/HeroCard.jsx) | Affiche un héros, appelle `onHit`, `onHeal`, `onRemove` |
| [`AddHeroForm.jsx`](./projets-exemples/tavern-vivante/AddHeroForm.jsx) | Formulaire avec **son propre état local** (le texte saisi) |
| [`App.css`](./projets-exemples/tavern-vivante/App.css) | Style de la grille, de la rangée d'actions et du formulaire (les boutons et les champs eux-mêmes sont déjà dans `index.css`) |

Pour l'essayer, garde le `src/index.css` du Chapitre 2 et copie les cinq fichiers dans `src/`. Puis expérimente :

- Blesse un héros jusqu'à 0 : que se passe-t-il à l'écran ? (La santé ne descend jamais sous 0, le bouton se désactive.)
- Remplace dans `changeHealth` le `.map(...)` par une modification directe (`hero.health += delta`) : que constates-tu ?
- Retire le `event.preventDefault()` : que se passe-t-il quand tu ajoutes un héros ?

---

## 🧠 Encadré « Sans métaphore »

- **État** (*state*) = une donnée **mémorisée par React** pour un composant, qui survit entre les rendus et qui, en changeant, déclenche un nouveau rendu.
- **Hook** = une fonction spéciale de React (`useState`...), appelée dans un composant, dont le nom commence par `use`.
- **Rendu** (*render*) = un appel de ta fonction composant. Un changement d'état provoque un nouveau rendu.
- **Setter** = la fonction renvoyée par `useState` (`setHealth`) pour remplacer la valeur.
- **Immutabilité** = ne jamais modifier une valeur existante, mais en créer une nouvelle (copie avec spread, `map`, `filter`).
- **État dérivé** = une valeur qu'on calcule à partir d'un état existant au lieu de la stocker.
- **Composant contrôlé** = un champ de formulaire dont la valeur vient de l'état.
- **Remonter l'état** (*lifting state up*) = placer l'état dans le parent commun de plusieurs composants.

Une confusion à lever : **props et état sont deux choses différentes.** Les props viennent *d'en haut* et le composant ne les modifie jamais. L'état appartient *au composant*, qui peut le changer (via son setter). Une prop d'un enfant peut très bien être l'état de son parent.

---

## Résumé du chapitre

- Une variable ordinaire ne redessine pas la page. L'**état** (`useState`) si.
- `const [valeur, setValeur] = useState(départ)` : la valeur actuelle et son setter. Un changement d'état **rappelle le composant** (nouveau rendu).
- Les événements : `onClick={fonction}` donne **la fonction**, pas son appel. Avec un argument : `onClick={() => agir(id)}`.
- L'état est un **instantané** : `setX` ne change pas la valeur du rendu en cours. Si le nouvel état dépend de l'ancien : `setX((current) => ...)`.
- **Ne modifie jamais l'état en place** : copie avec `{ ...objet, cle: valeur }`, `[...liste, x]`, `.filter(...)`, `.map(...)`.
- Un champ contrôlé a `value` (venant de l'état) et `onChange` (qui met l'état à jour).
- Ne stocke pas ce qui se calcule ; ne copie pas une prop dans l'état.
- L'état vit dans le plus petit parent commun. Les données descendent par les props, les événements remontent par des fonctions (`onHit`, `onAdd`...).
- Les hooks s'appellent au niveau supérieur du composant, jamais dans un `if` ou une boucle.

---

## Ton plan d'attaque

1. **Lis ce chapitre** en testant chaque exemple dans ton projet (1 h 15).
2. **Fais tourner la démo** [`tavern-vivante`](./projets-exemples/tavern-vivante/) et fais les trois expériences de la section 10 (30 min).
3. **Fais la Quête 4** dans [`quete-4.md`](./quete-4.md) (4-5 h, 4 phases).
4. **Passe le [test rapide](./test-rapide.md)** (20 min).

## Prochaines étapes

Tu sais maintenant faire vivre une interface. Mais plusieurs choses ont été annoncées sans être expliquées : pourquoi React redessine « seulement ce qui a changé » ? Pourquoi deux `setX(x + 1)` d'affilée n'ajoutent qu'un ? À quoi sert réellement la `key` ? Au **Chapitre 4.5**, on soulève le capot : DOM virtuel, regroupement des mises à jour, clés et règles des hooks.

👉 Chapitre 4.5 : La forge du réactomancien *(à venir)*
