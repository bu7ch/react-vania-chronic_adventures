# 🗡️ Quête 4 : La Taverne vivante

## Objectif global

Rendre ta galerie du Chapitre 3 **vivante** : des héros qu'on blesse, qu'on soigne, qu'on ajoute et qu'on renvoie. Puis analyser les pièges classiques de l'état, comparer plusieurs façons de le ranger, et construire seul un carnet de quêtes interactif.

**Durée estimée :** 4-5 heures
**Difficulté :** Facile → Moyen → Moyen → Difficile
**Prérequis :** avoir lu le [Chapitre 4](./README.md) et gardé le projet de la Quête 3 (avec `src/index.css` du cours).

> 🎯 **Règle d'or :** tape le code toi-même. Ne regarde pas [`projets-exemples/tavern-vivante/`](./projets-exemples/tavern-vivante/) avant d'avoir fini la Phase 1.

---

## Phase 1 : CREATE (Créer) — 75-90 min

### Étape 1 : Échauffement, un compteur

Dans un nouveau fichier `src/Counter.jsx`, écris un composant `Counter` qui :

- retient un nombre dans l'état (départ : 0) ;
- affiche `Compteur : 0` ;
- a trois boutons : **+1**, **−1** et **Remettre à 0**.

Affiche-le dans `App` (provisoirement, à la place de la galerie, ou en dessous).

**Rappels :** `import { useState } from "react";` en haut du fichier · `onClick` reçoit **une fonction**, pas un appel.

**Comment tester :** clique plusieurs fois sur chaque bouton. Affiche deux `<Counter />` côte à côte : ils sont indépendants.

### Étape 2 : Un état par carte

Reprends `HeroCard` et `HeroGallery` de la Quête 3. Dans `HeroCard`, ajoute un état **local** pour la santé :

```jsx
const [health, setHealth] = useState(initialHealth);
```

(la prop qui arrivait sous le nom `health` s'appelle maintenant `initialHealth`, puisqu'elle ne sert qu'à **démarrer**). Ajoute deux boutons :

- **Blesser (−20)** : la santé baisse de 20, sans jamais descendre sous 0 (`Math.max`) ;
- **Soigner (+20)** : la santé monte de 20, sans jamais dépasser `maxHealth` (`Math.min`).

Fais dépendre la barre de vie de ce nouvel état.

**Comment tester :** blesse Aragorn jusqu'à 0 : la barre se vide et la valeur reste à 0. Soigne Gandalf : il plafonne à 100. Les autres héros ne bougent pas.

### Étape 3 : Le problème (et sa solution)

Au-dessus de la galerie, tu voudrais afficher : **« 3 aventuriers en état de se battre sur 3 »** (c'est-à-dire ceux dont la santé est supérieure à 0).

Essaie de l'écrire dans `App`. Tu te heurtes à un mur : la santé vit **dans chaque carte**, `App` n'y a pas accès. C'est le signe qu'il faut **remonter l'état** (Chapitre 4, section 8).

Fais ce refactoring :

1. Dans `App`, crée l'état `heroes` (le tableau de départ) avec `useState`.
2. Écris dans `App` une fonction `changeHealth(id, delta)` qui met à jour **un seul** héros (avec `.map` et le spread, **sans modifier l'original**).
3. Transmets à chaque carte, via `HeroGallery`, les props `onHit` et `onHeal` (des **fonctions**).
4. `HeroCard` perd son état : elle reçoit `health` en prop (comme au Chapitre 3) et appelle `onHit` / `onHeal` au clic.

**Comment tester :** tout fonctionne comme à l'étape 2, mais la santé est maintenant connue d'`App`.

### Étape 4 : Valeur dérivée et état K.O.

1. Affiche le décompte « X aventurier(s) en état de se battre sur Y ». **Calcule-le** à chaque rendu à partir de `heroes` (avec `.filter`), ne le stocke pas dans un autre état.
2. Quand `health` vaut 0 : affiche « 💀 K.O. » sur la carte, désactive le bouton « Blesser » (attribut `disabled`), et grise la carte avec une classe CSS.
3. Désactive aussi « Soigner » quand la santé est au maximum.

**Comment tester :** le décompte baisse quand un héros tombe à 0, et remonte quand tu le soignes.

### Étape 5 : Ajouter un héros (formulaire)

Crée `src/AddHeroForm.jsx` : un formulaire avec un champ texte « Nouvel aventurier » et un bouton **Ajouter**. Le champ est **contrôlé** : son contenu est dans un état **local** au formulaire. À l'envoi :

- empêche le rechargement de la page (`event.preventDefault()`) ;
- refuse un nom vide ou fait uniquement d'espaces (utilise `.trim()`) ;
- appelle une prop `onAdd(name)` fournie par `App` ;
- vide le champ.

Dans `App`, écris `addHero(name)` qui ajoute un héros au tableau (niveau 1, 50 PV) avec `[...heroes, nouveauHéros]`. Il lui faut un `id` **unique** : calcule-le à partir des ids existants (par exemple `Math.max(0, ...ids) + 1`, où `ids` est un tableau de nombres : le `...` le déplie en arguments séparés, comme `Math.max(0, 1, 2, 3)`).

**Comment tester :** ajoute « Frodon » : une nouvelle carte apparaît et le champ se vide. Un champ vide n'ajoute rien. La console ne montre aucun avertissement (surtout pas de `key` dupliquée).

### Étape 6 : Renvoyer et réinitialiser

1. Ajoute un bouton **Renvoyer** sur chaque carte, qui retire le héros du tableau (avec `.filter`).
2. Ajoute un bouton **Réinitialiser la taverne** en bas qui remet la liste de départ.
3. Garde le message « La taverne est vide » quand il ne reste personne.

**Comment tester :** renvoie les trois héros : le message apparaît. Clique sur Réinitialiser : tout revient comme au départ, y compris les santés.

Une fois fini, compare avec [`projets-exemples/tavern-vivante/`](./projets-exemples/tavern-vivante/).

---

## Phase 2 : ANALYZE (Analyser) — 60-75 min

Voici huit composants qui ne se comportent pas comme prévu. Chacun est **complet** : crée un fichier `Bug1.jsx`, `Bug2.jsx`... colle l'extrait, importe-le dans `App` et affiche `<Bug1 />`. Pour chacun, **avant** de le tester :

1. **Prédis** ce qui va se passer quand tu cliques (ou au chargement) : affichage, valeur, erreur ?
2. **Explique** pourquoi.
3. **Corrige**.

### Bug 1

```jsx
export default function Bug1() {
  let health = 25;

  return (
    <div>
      <p>Santé : {health}</p>
      <button onClick={() => { health = health - 10; }}>Blesser</button>
    </div>
  );
}
```

*(Après plusieurs clics, que vaut `health` à l'intérieur de la fonction ? Que montre l'écran ?)*

### Bug 2

```jsx
import { useState } from "react";

export default function Bug2() {
  const [hero, setHero] = useState({ name: "Aragorn", health: 25 });

  function hit() {
    hero.health = hero.health - 10;
    setHero(hero);
  }

  return (
    <div>
      <p>{hero.name} : {hero.health} PV</p>
      <button onClick={hit}>Blesser</button>
    </div>
  );
}
```

### Bug 3

```jsx
import { useState } from "react";

export default function Bug3() {
  const [items, setItems] = useState(["Potion"]);

  function add() {
    items.push("Épée");
    setItems(items);
  }

  return (
    <div>
      <p>{items.length} objet(s)</p>
      <button onClick={add}>Ajouter</button>
    </div>
  );
}
```

### Bug 4

```jsx
import { useState } from "react";

export default function Bug4() {
  const [count, setCount] = useState(0);

  return <button onClick={setCount(count + 1)}>Compteur : {count}</button>;
}
```

### Bug 5

```jsx
import { useState } from "react";

export default function Bug5() {
  const [count, setCount] = useState(0);

  function addThree() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return <button onClick={addThree}>Compteur : {count}</button>;
}
```

*(Que vaut `count` après un clic ? Et comment obtenir 3 ?)*

### Bug 6

```jsx
import { useState } from "react";

export default function Bug6() {
  const [open, setOpen] = useState(false);

  if (open) {
    const [note, setNote] = useState("");
  }

  return <button onClick={() => setOpen(true)}>Ouvrir</button>;
}
```

### Bug 7

```jsx
export default function Bug7() {
  return <input value="Aragorn" />;
}
```

*(Peux-tu taper dans ce champ ? Que dit la console ?)*

### Bug 8

```jsx
import { useState } from "react";

function Card({ health }) {
  const [h] = useState(health);
  return <p>Carte : {h} PV (le parent envoie {health})</p>;
}

export default function Bug8() {
  const [health, setHealth] = useState(10);

  return (
    <div>
      <button onClick={() => setHealth(health + 5)}>Soigner</button>
      <Card health={health} />
    </div>
  );
}
```

### Questions de compréhension

**Q1.** Qu'est-ce qui déclenche un nouveau rendu d'un composant ? Cite deux situations.

**Q2.** Pourquoi `hero.health = ...; setHero(hero)` ne redessine-t-il rien ? Qu'est-ce que React compare, et pourquoi la copie `{ ...hero, health: ... }` résout-elle le problème ?

**Q3.** Dans `setCount(count + 1); console.log(count);`, que vaut `count` à la ligne du `console.log` ? Pourquoi ?

**Q4.** Quand utilise-t-on `setX((current) => ...)` plutôt que `setX(valeur)` ?

**Q5.** Deux composants frères ont besoin de la même donnée modifiable. Où mets-tu l'état ? Comment le composant qui doit la modifier s'y prend-il ?

**Q6.** Pourquoi ne faut-il pas stocker `aliveCount` dans un état quand on a déjà le tableau `heroes` ?

> ✍️ Réponds par écrit. Les solutions seront sur la branche `solutions-ch4-phase2` (à consulter **après** avoir essayé).

---

## Phase 3 : EVALUATE (Évaluer) — 60 min

### Partie A : un état ou plusieurs ?

Le formulaire d'ajout de héros doit maintenant retenir trois informations : le **nom**, le **niveau** et la **classe**. Voici deux écritures.

**Approche 1 : trois états séparés**

```jsx
function AddHeroForm({ onAdd }) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);
  const [role, setRole] = useState("guerrier");

  function handleSubmit(event) {
    event.preventDefault();
    onAdd({ name, level, role });
  }
  // ...
  // <input value={name} onChange={(e) => setName(e.target.value)} />
  // <input type="number" value={level} onChange={(e) => setLevel(Number(e.target.value))} />
  // <select value={role} onChange={(e) => setRole(e.target.value)}>...</select>
}
```

**Approche 2 : un seul état objet**

```jsx
function AddHeroForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", level: 1, role: "guerrier" });

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(form);
  }

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }
  // ...
  // <input value={form.name} onChange={(e) => updateField("name", e.target.value)} />
  // <input type="number" value={form.level} onChange={(e) => updateField("level", Number(e.target.value))} />
  // <select value={form.role} onChange={(e) => updateField("role", e.target.value)}>...</select>
}
```

*(`[field]: value` est la syntaxe des « clés calculées » : `field` contient le **nom** de la propriété à écrire.)*

Note de **1 à 5** :

| Critère | Approche 1 | Approche 2 |
|---------|-----------|-----------|
| Lisibilité pour un débutant | | |
| Risque d'oublier de mettre à jour un champ | | |
| Ajouter un 4e champ (effort) | | |
| Risque d'erreur avec le spread (modifier en place par réflexe) | | |
| Réinitialiser tout le formulaire après envoi | | |
| **Total** | | |

### Partie B : où ranger l'état ?

Pour chaque donnée, dis **qui en a besoin** et **où elle doit vivre** (dans le composant lui-même, ou remontée dans un parent). Justifie en une phrase.

| Donnée | Qui en a besoin ? | Où la ranger ? | Pourquoi ? |
|--------|-------------------|----------------|------------|
| Le texte en cours de saisie dans une barre de recherche | | | |
| La liste des héros | | | |
| Le fait qu'un menu déroulant est ouvert ou fermé | | | |
| La santé d'un héros (sachant que l'en-tête affiche le nombre de héros en forme) | | | |

### Partie C : stocker ou calculer ?

Pour chacune de ces valeurs, décide : **état** ou **calculée à chaque rendu** ? Justifie.

| Valeur | État ou calculée ? | Pourquoi ? |
|--------|-------------------|------------|
| Le nombre de héros vivants | | |
| Le pourcentage de la barre de vie | | |
| La liste filtrée (« Seulement les K.O. ») | | |
| Le filtre choisi par l'utilisateur (« Tous » / « K.O. ») | | |
| Le total des récompenses des quêtes terminées | | |

### Débat

1. L'approche 2 est-elle toujours meilleure dès qu'il y a plus de deux champs ? Que se passe-t-il quand deux champs n'ont rien à voir ?
2. Qu'est-ce qui rend l'état « remonté » plus **lourd** à utiliser (pensez à l'étape 3 de la Phase 1) ? Quand le remonter malgré tout ?
3. Que risque-t-on à stocker une valeur calculable ?

**Il n'y a pas de réponse unique** pour la Partie A. Les Parties B et C ont, en revanche, des réponses nettement meilleures que d'autres : sauras-tu les défendre ?

---

## Phase 4 : CREATE libre (Défi) — 90-120 min

### Le Carnet de quêtes

Le Tableau des quêtes de la Quête 3 était figé. À toi de le rendre **vivant**, entièrement seul, avec ce que tu as appris aux Chapitres 1 à 4.

**Les données de départ** :

```jsx
const initialQuests = [
  { id: 1, title: "Escorter la caravane", difficulty: 2, reward: 120, done: false },
  { id: 2, title: "Chasser le dragon de la montagne", difficulty: 5, reward: 900, done: false },
  { id: 3, title: "Livrer le message au roi", difficulty: 1, reward: 40, done: true },
];
```

**Ce que doit permettre la page :**

- **Ajouter** une quête avec un formulaire : un titre (texte), une difficulté (liste déroulante de 1 à 5) et une récompense (champ nombre) ;
- **Terminer / rouvrir** une quête avec un bouton (qui bascule `done`) ;
- **Supprimer** une quête ;
- **Filtrer** avec trois boutons : « Toutes », « À accomplir », « Terminées » (le filtre actif doit se voir) ;
- Afficher, calculés à partir des données : le **nombre de quêtes restantes** et le **total des récompenses déjà gagnées** ;
- Un message adapté quand la liste affichée est vide.

**Contraintes :**

- au moins **quatre composants** en plus de `App` (par exemple `QuestForm`, `QuestList`, `QuestCard`, `FilterBar`), chacun dans son fichier ;
- l'état des quêtes et le filtre vivent dans le **composant qui convient** : justifie ton choix en commentaire ;
- **aucune modification en place** de l'état (pas de `push`, `splice`, ni `quest.done = ...`) ;
- **aucun état dérivé** : ne stocke ni le nombre de quêtes restantes, ni la liste filtrée ;
- une `key` correcte partout, **zéro avertissement** dans la console.

**Pièges à anticiper :** `event.target.value` est **toujours du texte**, même pour un champ `type="number"` ou une liste déroulante. Convertis avec `Number(...)` avant de comparer ou d'additionner. Et un champ nombre vide donne `""`, qui devient `0` avec `Number("")` : pense à ce cas.

### Idées de libertés

- Une couleur différente selon la difficulté, ou des étoiles (`"⭐".repeat(n)`).
- Un bouton de tri (par récompense croissante ou décroissante), qui trie une **copie**.
- Le titre d'une quête modifiable en cliquant dessus.

### Et maintenant, le vrai travail

Quand ça marche, réponds par écrit :

1. **Recharge la page** (F5). Qu'arrive-t-il à tes quêtes ajoutées ? Pourquoi, d'après ce que tu sais de l'état ?
2. Combien de composants sont traversés par ta fonction `completeQuest` entre `App` et le bouton ? Que se passerait-il avec 3 niveaux de composants de plus ?
3. Dans ton code, as-tu des endroits où tu appelles `setX(valeur)` alors qu'il aurait fallu `setX((current) => ...)` ? Comment le saurais-tu ?
4. Que se passe-t-il si tu cliques **très vite** plusieurs fois sur un bouton qui modifie l'état ? As-tu confiance dans ton code ?

**Ces questions annoncent la suite du cours.** La 1 prépare la sauvegarde des données (effets de bord, `useEffect`). La 2 prépare les patterns de composants avancés. Les 3 et 4 sont l'objet du Chapitre 4.5 (regroupement des mises à jour). Garde tes réponses.

### Bonus (optionnel)

- Empêche d'ajouter une quête dont le titre existe déjà (sans tenir compte des majuscules).
- Affiche un message de félicitations quand **toutes** les quêtes sont terminées.

---

## Validation finale

Tu as fini la Quête 4 quand :

- ✅ Phase 1 : la Taverne vivante fonctionne (blesser, soigner, ajouter, renvoyer, réinitialiser), avec l'état remonté dans `App`, sans avertissement
- ✅ Phase 2 : les 8 bugs prédits, expliqués et corrigés, les 6 questions répondues par écrit
- ✅ Phase 3 : les trois grilles remplies et justifiées
- ✅ Phase 4 : le Carnet de quêtes respecte toutes les contraintes, et les 4 questions de relecture sont répondues

**Bravo, aventurier : tes interfaces ont une mémoire.** Direction la forge, pour comprendre ce qui se passe sous le capot.
