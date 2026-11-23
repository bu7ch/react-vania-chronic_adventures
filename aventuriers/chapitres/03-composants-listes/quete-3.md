# 🗡️ Quête 3 : La Galerie des aventuriers

## Objectif global

Transformer tes trois fiches copiées-collées (Quête 2) en **un seul composant réutilisable** alimenté par un tableau de données. Puis analyser les pièges des props et des listes, comparer plusieurs façons de concevoir un composant, et enfin construire seul un tableau de quêtes complet.

**Durée estimée :** 4-5 heures
**Difficulté :** Facile → Moyen → Moyen → Difficile
**Prérequis :** avoir lu le [Chapitre 3](./README.md) et gardé le projet de la Quête 2 (avec `src/index.css` du cours).

> 🎯 **Règle d'or :** tape le code toi-même. Ne regarde pas [`projets-exemples/hero-gallery/`](./projets-exemples/hero-gallery/) avant d'avoir fini la Phase 1.

---

## Phase 1 : CREATE (Créer) — 60-75 min

### Étape 1 : Un composant, trois héros (props)

Crée un fichier `src/HeroCard.jsx`. C'est le descendant de la `HeroSheet` du Chapitre 2, avec une différence : elle ne lit plus un objet global, elle **reçoit** ses données. Il contient un composant `HeroCard` qui reçoit pour l'instant **trois props** (`name`, `title`, `level`) ; tu en ajouteras d'autres aux étapes suivantes. Il affiche :

```
⚔️ Aragorn
Rôdeur du Nord · Niveau 5
```

Dans `App`, utilise-le trois fois avec trois héros, en écrivant les valeurs directement dans les balises :

```jsx
<HeroCard name="Aragorn" title="Rôdeur du Nord" level={5} />
```

**Rappels :** `export default HeroCard;` à la fin du fichier, `import HeroCard from "./HeroCard.jsx";` dans `App.jsx`. Un nombre se passe entre accolades (`level={5}`), un texte entre guillemets.

**Comment tester :** trois fiches s'affichent, avec **un seul** composant écrit. Change une prop dans `App` : seule la fiche concernée change.

### Étape 2 : Les données dans un tableau

Dans `App.jsx`, au-dessus du composant, crée un tableau `heroes` de trois objets. **Chaque héros a un `id` unique** :

```jsx
const heroes = [
  { id: 1, name: "Aragorn", title: "Rôdeur du Nord", level: 5, health: 25, maxHealth: 100 },
  // ... Gandalf, Legolas : à toi de remplir
];
```

Ajoute à chaque héros un `emoji` (⚔️ 🔮 🏹) et, pour **deux héros seulement**, une propriété `weapon`. Fais afficher l'emoji devant le nom, dans `HeroCard` (n'oublie pas de le passer en prop).

### Étape 3 : `.map()` et `key`

Remplace tes trois `<HeroCard ... />` écrits à la main par **un seul** `heroes.map(...)`. N'oublie pas la `key`.

**Comment tester :** ajoute un 4e objet au tableau `heroes` : une 4e fiche apparaît **sans que tu aies touché au JSX**. La console ne montre aucun avertissement.

### Étape 4 : Valeur par défaut

Dans `HeroCard`, affiche aussi l'arme : `Rôdeur du Nord · Niveau 5 · Anduril`. Pour le héros qui n'a pas de `weapon`, la fiche doit afficher `Poings` au lieu de `undefined` ou d'un blanc, grâce à une **valeur par défaut** dans la signature.

### Étape 5 : Un composant dans un composant

Crée `src/StatBar.jsx` : un composant qui reçoit `label`, `value` et `max`, et affiche :

```jsx
<p>Santé : 25 / 100</p>
<div className="bar"><div className="bar-fill" style={{ width: "25%" }} /></div>
```

La largeur est **calculée** à partir de `value` et `max`. Utilise `StatBar` dans `HeroCard`. Ce composant est réutilisable : pour afficher une autre jauge (le mana, par exemple), il suffirait de lui passer d'autres valeurs, sans réécrire sa logique.

**Comment tester :** change `health` d'un héros dans le tableau : sa barre change, les autres ne bougent pas.

### Étape 6 : Une galerie qui se débrouille

Crée `src/HeroGallery.jsx`, qui reçoit **un tableau** `heroes` en prop et fait le `.map()`. `App` ne contient plus que les données et `<HeroGallery heroes={heroes} />`.

Puis ajoute, **avant** le `return` de `HeroGallery`, un cas « liste vide » : si `heroes.length === 0`, affiche un message à la place de la liste.

**Comment tester :** passe `heroes={[]}` dans `App` : ton message s'affiche.

### Étape 7 : Filtrer et trier

Dans `App`, avant le `return`, crée :

- une constante `MIN_LEVEL = 5` ;
- un tableau `visibleHeroes` : les héros dont le niveau est **au moins** `MIN_LEVEL`, triés du plus haut niveau au plus bas ;
- passe `visibleHeroes` à la galerie, et affiche, au-dessus de la galerie, `X aventuriers sur Y`.

**Piège à éviter :** `.sort()` modifie le tableau sur lequel on l'appelle. Trie une **copie**.

**Comment tester :** mets `MIN_LEVEL = 99` : le message « liste vide » apparaît. Mets `MIN_LEVEL = 1` : tous les héros s'affichent, du plus haut niveau au plus bas.

Une fois fini, compare avec [`projets-exemples/hero-gallery/`](./projets-exemples/hero-gallery/).

---

## Phase 2 : ANALYZE (Analyser) — 45-60 min

Voici huit extraits qui posent problème. Pour chacun, **avant** de le tester :

1. **Prédis** ce qui va se passer (affichage normal ? vide ? avertissement ? erreur qui plante ?).
2. **Explique** pourquoi.
3. **Corrige**.

Pour les quatre premiers, on a `const heroes = [{ id: 1, name: "A" }, { id: 2, name: "B" }];`.

### Bug 1

```jsx
function HeroList() {
  return (
    <ul>
      {heroes.map((hero) => (
        <li>{hero.name}</li>
      ))}
    </ul>
  );
}
```

### Bug 2

```jsx
function HeroList() {
  return (
    <ul>
      {heroes.map((hero) => {
        <li key={hero.id}>{hero.name}</li>;
      })}
    </ul>
  );
}
```

### Bug 3

```jsx
function HeroCard({ name }) {
  return <li key={name}>{name}</li>;
}

function HeroList() {
  return (
    <ul>
      {heroes.map((hero) => (
        <HeroCard name={hero.name} />
      ))}
    </ul>
  );
}
```

### Bug 4

```jsx
function HeroList() {
  return (
    <ul>
      {heroes.map((hero) => (
        <li key={Math.random()}>{hero.name}</li>
      ))}
    </ul>
  );
}
```

*(Celui-ci ne produit aucun avertissement. Pourquoi est-il quand même un vrai problème ?)*

### Bug 5

```jsx
function Card(props) {
  props.name = "Hacked";
  return <p>{props.name}</p>;
}

function App() {
  return <Card name="Aragorn" />;
}
```

### Bug 6

```jsx
function Level({ level }) {
  return <p>Niveau suivant : {level + 1}</p>;
}

function App() {
  return <Level level="5" />;
}
```

### Bug 7

```jsx
function HeroCard({ name, level }) {
  return <p>{name} (niveau {level})</p>;
}

function App() {
  return <HeroCard name="Aragorn" />;
}
```

### Bug 8

```jsx
const heroes = [
  { id: 1, name: "Aragorn", level: 5 },
  { id: 2, name: "Gandalf", level: 10 },
  { id: 3, name: "Frodon", level: 2 },
];

function App() {
  const sorted = heroes.sort((a, b) => b.level - a.level);
  return (
    <>
      <ol>{sorted.map((h) => <li key={h.id}>{h.name}</li>)}</ol>
      <p>Premier de la liste d'origine : {heroes[0].name}</p>
    </>
  );
}
```

### Questions de compréhension

**Q1.** Que reçoit réellement un composant quand on écrit `<HeroCard name="Aragorn" level={5} />` ? Réponds avec ce que tu sais du Chapitre 1.

**Q2.** Quelle différence y a-t-il entre `level="5"` et `level={5}` ? Dans quel cas la différence se voit-elle ?

**Q3.** À quoi sert `key` ? Qu'est-ce qui rend une clé « bonne » ?

**Q4.** Pourquoi `.map()` ne pose-t-il pas le même problème que `.sort()` sur le tableau d'origine ?

**Q5.** Un enfant (`HeroCard`) peut-il modifier la donnée de son parent (`App`) ? Pourquoi est-ce voulu ?

**Q6.** Dans `{heroes.map((hero) => ( ... ))}`, que se passe-t-il si tu remplaces les parenthèses `( )` par des accolades `{ }` sans ajouter de `return` ?

> ✍️ Réponds par écrit. Les solutions sont sur la branche `solutions-ch3-phase2` (à consulter **après** avoir essayé).

---

## Phase 3 : EVALUATE (Évaluer) — 45-60 min

### Partie A : trois façons de recevoir les données

Voici trois façons d'écrire le même `HeroCard`.

**Approche 1 : l'objet `props` tel quel**

```jsx
function HeroCard(props) {
  return (
    <p>
      {props.name}, niveau {props.level}
    </p>
  );
}
// <HeroCard name={hero.name} level={hero.level} />
```

**Approche 2 : le destructuring dans la signature**

```jsx
function HeroCard({ name, level }) {
  return (
    <p>
      {name}, niveau {level}
    </p>
  );
}
// <HeroCard name={hero.name} level={hero.level} />
```

**Approche 3 : passer l'objet héros entier**

```jsx
function HeroCard({ hero }) {
  return (
    <p>
      {hero.name}, niveau {hero.level}
    </p>
  );
}
// <HeroCard hero={hero} />
```

Note chaque approche de **1 à 5**, puis justifie en une phrase.

| Critère | 1 | 2 | 3 |
|---------|---|---|---|
| On voit tout de suite quelles données le composant utilise | | | |
| Facilité d'utilisation (moins de code côté parent) | | | |
| Facilité à réutiliser le composant avec **autre chose** qu'un héros | | | |
| Résistance au changement (si l'objet héros gagne 10 propriétés) | | | |
| Lisibilité du code à l'intérieur du composant | | | |
| **Total** | | | |

### Partie B : quel identifiant pour la `key` ?

Tu as ce tableau :

```jsx
const heroes = [
  { id: 1, name: "Aragorn" },
  { id: 2, name: "Gandalf" },
];
```

Évalue quatre choix de clé, de **1 à 5** pour chaque critère :

| Choix | Unique ? | Stable (ne change pas d'un rendu à l'autre) ? | Sûr si on réordonne la liste ? | Total |
|-------|----------|-----------------------------------------------|-------------------------------|-------|
| `key={hero.id}` | | | | |
| `key={hero.name}` | | | | |
| `key={index}` | | | | |
| `key={Math.random()}` | | | | |

### Débat

1. Dans quelle situation l'approche 3 devient-elle meilleure que l'approche 2 ? Et dans quelle situation devient-elle un handicap ?
2. `key={hero.name}` marche-t-il aujourd'hui ? Que se passe-t-il le jour où deux héros s'appellent pareil ?
3. Dans quel cas précis `key={index}` est-il acceptable ?

**Il n'y a pas de réponse unique** pour la Partie A. Pour la Partie B, au contraire, un choix est nettement meilleur : sauras-tu l'argumenter ?

---

## Phase 4 : CREATE libre (Défi) — 75-90 min

### Le Tableau des quêtes

La taverne a un panneau d'affichage où les aventuriers choisissent leurs missions. À toi de le construire, **entièrement seul**, avec ce que tu as appris aux Chapitres 1 à 3.

**Les données** (à toi de les recopier et de les compléter) :

```jsx
const quests = [
  { id: 1, title: "Escorter la caravane", difficulty: 2, reward: 120, done: false },
  { id: 2, title: "Chasser le dragon de la montagne", difficulty: 5, reward: 900, done: false },
  { id: 3, title: "Livrer le message au roi", difficulty: 1, reward: 40, done: true },
  { id: 4, title: "Nettoyer la cave aux rats", difficulty: 1, reward: 25, done: true },
];
```

**Ce que doit afficher la page :**

- une section **« À accomplir »** : les quêtes non terminées, triées par récompense décroissante ;
- une section **« Terminées »** : les quêtes terminées ;
- pour chaque quête : son titre, sa difficulté sous forme d'étoiles (⭐⭐⭐), sa récompense en pièces d'or ;
- un message approprié si une section est vide ;
- en haut : le **nombre** de quêtes à accomplir.

**Contraintes :**

- au moins **trois composants** en plus de `App` (par exemple `QuestCard`, `QuestList`, `Panel`) ;
- au moins un composant qui utilise **`children`** ;
- au moins une **valeur par défaut** de prop (par exemple une `reward` par défaut à 0) ;
- une `key` correcte partout, **aucun avertissement** dans la console ;
- chaque composant dans son propre fichier.

**Indice :** `"⭐".repeat(3)` produit `⭐⭐⭐`.

### Idées de libertés

- Une couleur différente selon la difficulté (via `style` ou une classe CSS choisie par une condition).
- Une mention « 💰 Très bien payée » sur les quêtes dont la récompense dépasse 500.
- Pour les plus aventureux : le total des récompenses à gagner avec `.reduce()`. Cherche sa syntaxe : `quests.reduce((total, quest) => total + quest.reward, 0)`.

### Et maintenant, le vrai travail

Quand ça marche, ajoute **dans chaque quête à accomplir** un bouton :

```jsx
<button onClick={() => console.log("Quête terminée !")}>Terminer</button>
```

(`onClick` reçoit une fonction qui s'exécute au clic : on l'étudiera en détail au Chapitre 4. Ouvre la console F12 pour voir le message.) Le bouton s'affiche et réagit, mais la page ne change pas. Réponds par écrit :

1. Que se passe-t-il quand tu cliques ? Que voit-on à l'écran ?
2. Remplace le `console.log` par `quest.done = true` suivi d'un `console.log(quest.done)`. La valeur change-t-elle dans la console ? La quête change-t-elle de section à l'écran ? Pourquoi, d'après toi ? (Indice : qui demande à React de redessiner la page ?)
3. De quoi aurait besoin le composant pour **se souvenir** qu'une quête a été terminée et **redessiner** la page ?

**Ce que tu constates ici, c'est exactement ce que résout `useState`.** Garde tes réponses : tu les relis au début du Chapitre 4.

### Bonus (optionnel)

- Ajoute une 5e quête, puis une 6e : tu ne dois toucher **qu'au tableau**.
- Affiche la difficulté sous forme de mot (« Facile », « Moyen », « Mortel ») choisi par une condition.

---

## Validation finale

Tu as fini la Quête 3 quand :

- ✅ Phase 1 : galerie à partir d'un tableau, avec valeur par défaut, `StatBar`, liste vide, filtre et tri, sans avertissement
- ✅ Phase 2 : les 8 bugs prédits, expliqués et corrigés, les 6 questions répondues par écrit
- ✅ Phase 3 : les deux grilles remplies et justifiées, le choix de la `key` argumenté
- ✅ Phase 4 : le Tableau des quêtes respecte toutes les contraintes, et les 3 questions de relecture sont répondues

**Bravo, aventurier : tu sais maintenant construire des interfaces à partir de données.** Il reste à les rendre vivantes : direction le Chapitre 4.
