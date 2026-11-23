# Chapitre 3 : Les Composants et les Listes

À la fin du Chapitre 2, tu as copié-collé trois fois la même fiche de héros en changeant quelques mots. Tu as senti la douleur : *« et s'il y en avait vingt ? »*. Ce chapitre est le remède. Tu vas apprendre à **passer des données à un composant** (les props) et à **fabriquer une liste entière de composants à partir d'un tableau** (`.map()`).

**Durée :** 2 h de lecture et de pratique, puis la quête (4-5 h).
**Prérequis :** le [Chapitre 2](../02-react-vania/README.md) (composants, JSX, accolades) et ton projet Vite.

---

## 1. Les props : donner des ordres à un composant

Jusqu'ici, ton `HeroSheet` lisait un objet global :

```jsx
const hero = { name: "Aragorn", health: 25 };

function HeroSheet() {
  return <p>{hero.name} : {hero.health} PV</p>;   // toujours Aragorn
}
```

Ce composant ne peut afficher qu'un seul héros, puisqu'il ne reçoit rien de l'extérieur. Une fonction normale, elle, reçoit des **paramètres** (Chapitre 1) : `castFireball(25)`. Un composant fait pareil, mais avec une syntaxe de balise :

```jsx
function HeroSheet({ name, health }) {
  return <p>{name} : {health} PV</p>;
}

function App() {
  return (
    <>
      <HeroSheet name="Aragorn" health={25} />
      <HeroSheet name="Gandalf" health={90} />
    </>
  );
}
```

Voilà : **un composant, deux héros.** Ce que tu écris comme des attributs (`name="Aragorn"`) s'appelle des **props** (de *properties*).

### Comment ça marche vraiment

Quand React rencontre `<HeroSheet name="Aragorn" health={25} />`, il appelle ta fonction en lui passant **un seul argument : un objet** contenant toutes les props :

```jsx
HeroSheet({ name: "Aragorn", health: 25 });
```

Tu reconnais le Chapitre 1 : la signature `function HeroSheet({ name, health })` est simplement du **destructuring** appliqué à cet objet. On aurait pu écrire :

```jsx
function HeroSheet(props) {
  return <p>{props.name} : {props.health} PV</p>;
}
```

Les deux marchent. La version dépliée est la plus répandue, parce qu'on voit tout de suite quelles props le composant attend.

### Texte ou JavaScript ? Les guillemets et les accolades

Dans le passage d'une prop, deux écritures :

```jsx
<HeroSheet name="Aragorn" health={25} />
```

- `name="Aragorn"` : des **guillemets** pour une chaîne de caractères littérale.
- `health={25}` : des **accolades** pour tout le reste (nombres, variables, expressions, tableaux, objets, fonctions).

Ce n'est pas qu'une question de style. Compare :

```jsx
function Level({ level }) {
  return <p>{level + 1}</p>;
}

<Level level="5" />    // affiche 51 : "5" est du texte, "5" + 1 donne "51"
<Level level={5} />    // affiche 6 : 5 est un nombre
```

Règle simple : **si ce n'est pas du texte, mets des accolades.**

### Valeur par défaut

Que se passe-t-il si on oublie une prop ? Elle vaut `undefined`, et React n'affiche rien à cet endroit :

```jsx
function HeroCard({ name, level }) {
  return <p>{name} ({level})</p>;
}

<HeroCard name="Aragorn" />   // affiche : Aragorn ()
```

Pour prévoir ce cas, utilise une **valeur par défaut** du destructuring (Chapitre 1) :

```jsx
function HeroCard({ name, level = 1, weapon = "Poings" }) { ... }
```

### Les props sont en lecture seule

Un composant **ne modifie jamais ses props**. C'est une règle d'or, et React la fait respecter :

```jsx
function Card(props) {
  props.name = "Hacked";   // ❌ TypeError: Cannot assign to read only property 'name'
  return <p>{props.name}</p>;
}
```

Pense à une commande passée à la taverne : tu peux la lire, mais pas la réécrire. Si un composant a besoin de changer une donnée au fil du temps, ce sera le rôle de l'**état** (Chapitre 4).

### Passer des éléments : la prop `children`

Une prop très spéciale existe : `children`. C'est **tout ce que tu écris entre la balise ouvrante et la balise fermante** :

```jsx
function Panel({ title, children }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <Panel title="Inventaire">
      <p>3 potions</p>
      <p>1 épée</p>
    </Panel>
  );
}
```

`Panel` ne sait pas ce qu'on va mettre dedans. Elle fournit le cadre, tu fournis le contenu. C'est le principe de la composition, version avancée : tu t'en serviras énormément.

### Le raccourci `{...hero}`

Quand les propriétés d'un objet portent **exactement** le nom des props attendues, tu peux les passer d'un coup avec l'opérateur de décomposition `...` :

```jsx
const hero = { name: "Aragorn", level: 5 };

<HeroCard name={hero.name} level={hero.level} />   // explicite
<HeroCard {...hero} />                              // équivalent, plus court
```

C'est pratique, mais moins lisible : on ne voit plus quelles props sont passées. Au début, préfère la version explicite.

---

## 2. Détour JavaScript : les tableaux et leurs méthodes

Pour afficher une liste, il te faut un **tableau** : une collection ordonnée de valeurs. Ici, des objets (Chapitre 1) rangés dans des crochets `[ ]`.

```javascript
const heroes = [
  { id: 1, name: "Aragorn", level: 5 },
  { id: 2, name: "Gandalf", level: 10 },
  { id: 3, name: "Frodon", level: 2 },
];

console.log(heroes.length);   // 3
console.log(heroes[0].name);  // "Aragorn" (on compte à partir de 0)
```

Trois méthodes de tableau reviennent tout le temps en React. `map` et `filter` prennent une **fonction** (souvent une arrow function, Chapitre 1) et **renvoient un nouveau tableau** sans toucher à l'original. `join`, elle, prend un séparateur (du texte) et renvoie un texte.

```javascript
// map : transforme chaque élément
heroes.map((hero) => hero.name);
// ["Aragorn", "Gandalf", "Frodon"]

// filter : garde seulement ceux qui passent le test
heroes.filter((hero) => hero.level >= 5);
// [{ id: 1, ... Aragorn }, { id: 2, ... Gandalf }]

// join : colle les éléments d'un tableau de textes en un seul texte
heroes.map((hero) => hero.name).join(", ");
// "Aragorn, Gandalf, Frodon"
```

> 💡 **Teste-les** dans la console du navigateur (F12) ou avec Node (`node` dans un terminal) avant de continuer. Comprendre `.map()` en JavaScript pur, c'est 90 % du travail.

---

## 3. Afficher une liste avec `.map()`

Le JSX accepte les **tableaux d'éléments**. Si tu lui donnes un tableau de `<li>`, il les affiche tous. Il suffit donc de **transformer** ton tableau de données en tableau d'éléments, ce que fait `.map()` :

```jsx
function HeroList() {
  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.name} (niveau {hero.level})</li>
      ))}
    </ul>
  );
}
```

Lis-le à voix haute : *« pour chaque héros, fabrique un `<li>` »*. Ajoute un héros au tableau, il apparaît dans la page, sans que tu touches au JSX.

Avec ton composant du début de chapitre, c'est encore plus puissant :

```jsx
{heroes.map((hero) => (
  <HeroCard
    key={hero.id}
    name={hero.name}
    title={hero.title}
    level={hero.level}
  />
))}
```

**Une donnée, un composant.** Tu avais 3 fiches copiées-collées au Chapitre 2 : tu en as maintenant une seule, appelée autant de fois qu'il y a de héros.

### La prop `key` : le tampon d'identité

Tu as remarqué `key={hero.id}`. **Elle est obligatoire** pour chaque élément produit par un `.map()`. Si tu l'oublies, la console te le dit :

```
Each child in a list should have a unique "key" prop.
```

À quoi sert-elle ? Quand ta liste change (ajout, suppression, réorganisation), React doit comprendre **quel élément est quel héros** pour ne mettre à jour que ce qui a changé. La clé est le tampon d'identité de chaque élément.

Une bonne clé est :

- **unique** parmi ses frères (deux héros ne partagent pas la même) ;
- **stable** : elle ne change pas d'un affichage à l'autre. Un `id` qui vient de tes données est idéal. Un `Math.random()` est une très mauvaise idée, car il change à chaque rendu.

Tu peux utiliser l'indice du tableau (`key={index}`) dans un cas précis : la liste ne change jamais d'ordre et ne perd jamais d'éléments. Dans tous les autres cas, c'est une source de bugs subtils. Nous y reviendrons en détail au Chapitre 4.5 (« La forge du réactomancien »). Pour l'instant : **donne un `id` à tes données, et utilise-le.**

La `key` reste une propriété spéciale de React : ton composant `HeroCard` ne la reçoit **pas** dans ses props.

### Les deux erreurs classiques du `.map()`

**1. Oublier le `return` quand on utilise des accolades.**

```jsx
// ❌ Les accolades { } ouvrent un bloc de code : il faut un return explicite
{heroes.map((hero) => {
  <li key={hero.id}>{hero.name}</li>;
})}
// Résultat : rien ne s'affiche (la fonction ne renvoie rien)

// ✅ Avec des parenthèses ( ), le résultat est renvoyé automatiquement
{heroes.map((hero) => (
  <li key={hero.id}>{hero.name}</li>
))}

// ✅ Ou avec des accolades ET un return
{heroes.map((hero) => {
  return <li key={hero.id}>{hero.name}</li>;
})}
```

**2. Mettre la `key` au mauvais endroit.** La clé va sur l'**élément le plus extérieur** renvoyé par le `.map()`, pas sur un enfant, et pas à l'intérieur de `HeroCard`. On écrit `<HeroCard key={hero.id} ... />`, jamais `key` dans la définition de `HeroCard`.

---

## 4. Filtrer et trier avant d'afficher

Comme `.filter()` et `.map()` renvoient des tableaux, on peut les enchaîner :

```jsx
function StrongHeroes() {
  const strong = heroes.filter((hero) => hero.level >= 5);

  return (
    <ul>
      {strong.map((hero) => (
        <li key={hero.id}>{hero.name}</li>
      ))}
    </ul>
  );
}
```

On prépare la donnée **avant** le `return` (en JavaScript « normal »), puis on l'affiche. Pour trier :

```jsx
const sorted = [...heroes].sort((a, b) => b.level - a.level);
```

Le `[...heroes]` est important : `.sort()` **modifie le tableau** sur lequel on l'appelle, contrairement à `.map()` et `.filter()`. En copiant d'abord avec `[...heroes]`, on trie la copie et on laisse l'original intact.

La fonction passée à `.sort()` compare deux éléments `a` et `b`. Si elle renvoie un nombre **négatif**, `a` passe avant `b` ; **positif**, `b` passe avant `a`. Avec `b.level - a.level`, le héros de plus haut niveau donne un résultat positif quand il est en `b` : il remonte devant. Pour trier du plus petit au plus grand, inverse : `a.level - b.level`.

### Et si la liste est vide ?

Une liste vide n'affiche... rien, ce qui peut dérouter un utilisateur. Prévois ce cas :

```jsx
function HeroGallery({ heroes }) {
  if (heroes.length === 0) {
    return <p>La taverne est vide. Aucun aventurier ce soir.</p>;
  }

  return (
    <section>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </section>
  );
}
```

Ici, le `if` est **avant** le `return`, donc c'est autorisé. C'est la bonne technique quand deux cas donnent deux affichages complètement différents. Tu peux aussi utiliser `&&` ou un ternaire à l'intérieur du JSX (Chapitre 2).

---

## 5. Assembler : la Galerie de héros

Tu as maintenant tout ce qu'il faut pour la version « propre » de la taverne. Elle est décomposée en trois rôles clairs :

```
App           ← possède les DONNÉES (le tableau de héros)
 └─ HeroGallery   ← reçoit le tableau, fait le .map()
     └─ HeroCard      ← reçoit UN héros, l'affiche
         └─ StatBar       ← reçoit une valeur et un max, dessine la barre
```

Les données **descendent** de parent en enfant, par les props. Un enfant ne modifie jamais directement les données de son parent : on appelle cela le **flux de données à sens unique**. Tu verras au Chapitre 4 pourquoi cette contrainte est une force, pas une limite.

Le code complet est dans [`projets-exemples/hero-gallery/`](./projets-exemples/hero-gallery/) :

| Fichier | Rôle |
|---------|------|
| [`App.jsx`](./projets-exemples/hero-gallery/App.jsx) | Les données (3 héros) et la mise en page |
| [`HeroGallery.jsx`](./projets-exemples/hero-gallery/HeroGallery.jsx) | Le `.map()`, la `key`, le cas « liste vide » |
| [`HeroCard.jsx`](./projets-exemples/hero-gallery/HeroCard.jsx) | La carte (props, valeur par défaut, `StatBar`) |
| [`App.css`](./projets-exemples/hero-gallery/App.css) | Le style de la grille |

Pour l'essayer, garde le `src/index.css` du Chapitre 2 et copie les quatre fichiers dans `src/`.

Un second exemple, plus petit, montre `children` et le cas « liste vide » : [`projets-exemples/item-list/`](./projets-exemples/item-list/) (un inventaire).

---

## 🧠 Encadré « Sans métaphore »

- **Props** = les arguments d'un composant, rassemblés dans un objet. Ils descendent du parent vers l'enfant et sont en lecture seule.
- **`children`** = la prop qui contient ce qu'on écrit entre les balises ouvrante et fermante d'un composant.
- **`.map()`** = une méthode de tableau qui renvoie un nouveau tableau, élément par élément transformé. En React, elle sert à transformer des données en éléments JSX.
- **`key`** = un identifiant que React utilise pour suivre chaque élément d'une liste d'un affichage à l'autre. Il doit être unique et stable.
- **Flux de données à sens unique** = les données descendent des parents vers les enfants, jamais l'inverse.

Une confusion fréquente à lever : **`props` et « état » sont deux choses différentes.** Les props viennent de l'extérieur et ne changent pas du point de vue du composant. L'état appartient au composant et peut évoluer. Le Chapitre 4 est consacré à celui-ci.

---

## Résumé du chapitre

- Les **props** rendent un composant réutilisable : `<HeroCard name="Aragorn" level={5} />`.
- Les props arrivent dans **un objet**, qu'on déplie dans la signature : `function HeroCard({ name, level = 1 })`.
- **Guillemets** pour du texte, **accolades** pour tout le reste. Les props sont **en lecture seule**.
- `children` représente le contenu placé entre les balises d'un composant.
- **`.map()`** transforme un tableau de données en liste d'éléments ; `.filter()` et `[...tableau].sort()` préparent la liste avant l'affichage.
- Chaque élément d'une liste a une **`key`** unique et stable (un `id`), placée sur l'élément extérieur du `.map()`.
- Les données descendent de parent en enfant : `App` → `HeroGallery` → `HeroCard`.

---

## Ton plan d'attaque

1. **Lis ce chapitre** en testant chaque exemple dans ton projet (1 h 15).
2. **Fais tourner la démo** [`hero-gallery`](./projets-exemples/hero-gallery/) : ajoute un héros au tableau, retire sa `key` pour voir l'avertissement, retire son `weapon` pour voir la valeur par défaut (30 min).
3. **Fais la Quête 3** dans [`quete-3.md`](./quete-3.md) (4-5 h, 4 phases).
4. **Passe le [test rapide](./test-rapide.md)** (20 min).

## Prochaines étapes

Tes composants sont réutilisables et tes listes sont dynamiques. Mais la page reste **figée** : si le héros prend un coup, rien ne change à l'écran. Au **Chapitre 4**, tu donnes une mémoire à tes composants avec `useState`, et ta taverne devient vivante : barres de santé qui bougent, boutons qui réagissent.

👉 Chapitre 4 : L'État, ta barre de santé *(à venir)*
