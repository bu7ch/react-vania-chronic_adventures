# Chapitre 4.5 : La forge du réactomancien

Jusqu'ici, tu as lancé des sorts : tu as écrit des composants, des props, de l'état. Ils marchent. Mais plusieurs choses ont été annoncées sans être expliquées, et tu as peut-être croisé des comportements qui t'ont laissé perplexe. Dans ce chapitre, tu descends dans la forge et tu regardes **comment React fabrique ses effets**.

C'est un chapitre différent des autres : presque pas de nouvelle syntaxe, mais des **mécanismes**. Au lieu d'une quête en quatre phases, tu as **six mini-exos** à prédire puis à lancer, **deux ateliers comparatifs** pour tester des idées, et un test rapide. Tout ce qui est affirmé ici a été mesuré en exécutant du vrai React.

**Durée :** 3 à 4 h au total (lecture avec les mini-exos, démo, ateliers, test rapide).
**Prérequis :** le [Chapitre 4](../04-etat/README.md) (état, immutabilité, `key` à l'usage).

---

## Les quatre mystères que ce chapitre résout

| Mystère | Où il a été posé | Section |
|---------|------------------|---------|
| « React ne redessine que ce qui a changé » : comment ? | Ch 4, « Prochaines étapes » | [1](#1-rendre-comparer-appliquer--le-dom-virtuel) |
| Pourquoi deux `setCount(count + 1)` d'affilée n'ajoutent-ils qu'un ? Et que se passe-t-il avec un minuteur ? | Ch 4, section 3 et quête (Phase 4) | [2](#2-les-mises-à-jour-en-coulisses--file-dattente-et-regroupement) |
| À quoi sert **vraiment** la `key` ? Pourquoi pas l'indice ? | Ch 3, section « key » | [3](#3-les-clés--lidentité-dun-élément-dans-une-liste) |
| Pourquoi les hooks s'appellent-ils toujours dans le même ordre ? | Ch 4, section 9 | [4](#4-les-hooks--forge-ton-usestate) |

---

## 1. Rendre, comparer, appliquer : le DOM virtuel

### Ce que fabrique réellement le JSX

Tu as appris que le JSX n'est pas du HTML : Vite le convertit avant le navigateur. En quoi ? En **simples objets JavaScript** :

```jsx
const element = <p className="x">Bonjour</p>;

console.log(element.type);   // "p"
console.log(element.props);  // { className: "x", children: "Bonjour" }
```

(Colle ces lignes au début du corps de n'importe quel composant, puis ouvre la console.)

Un « élément React » est un objet léger qui **décrit** un morceau d'écran : son type, ses props. Rien de plus. Il ne touche pas la page. Pour un composant, `type` est ta fonction elle-même :

```jsx
function Hero({ n }) { return null; }

const el = <Hero n={1} />;
console.log(typeof el.type);  // "function"
console.log(el.props);        // { n: 1 }
```

Quand ton composant renvoie du JSX, il renvoie donc **un arbre de ces objets** : la description de l'écran à cet instant. C'est ce que l'on appelle le **DOM virtuel** : ce n'est pas une copie du vrai DOM, c'est une description légère, produite à chaque rendu.

### Les trois temps

Quand l'état change, React procède en trois temps :

```
1. RENDRE     React rappelle tes composants (de haut en bas) → nouvelle description de l'écran
2. COMPARER   Il compare cette description à la précédente, élément par élément
3. APPLIQUER  Il modifie le VRAI DOM, uniquement là où il y a une différence
```

Seul le troisième temps touche à la page. Les deux premiers ne sont que du calcul JavaScript, très rapide. Les noms officiels : le deuxième temps s'appelle la **réconciliation**, le troisième le **commit**.

### Les règles de la comparaison

Pour chaque emplacement, React se demande : *« est-ce **le même** élément qu'au rendu précédent ? »*

- **Même type, même place (ou même `key`)** → c'est le même élément. React **garde** le nœud du DOM et son état, et ne met à jour que ce qui diffère (un texte, un attribut).
- **Type différent** → ce n'est plus le même. React **détruit** l'ancien nœud et tout ce qu'il contient (état compris), et en crée un neuf.

Deux mesures le montrent. Un champ de saisie dans un composant qui se redessine reste **le même nœud**, ta saisie comprise :

```jsx
function C() {
  const [c, setC] = useState(0);
  return (
    <div>
      <button onClick={() => setC(c + 1)}>c {c}</button>
      <input defaultValue="" aria-label="champ" />
    </div>
  );
}
// Tape « abc » dans le champ, clique sur le bouton plusieurs fois :
// le champ est le même nœud du DOM, il contient toujours « abc ».
```

(`defaultValue` donne seulement la **valeur de départ** du champ : l'utilisateur peut ensuite le modifier librement, sans que React s'en mêle.)

À l'inverse, si tu changes le **type** d'un élément qui contient un composant à état, par exemple en passant d'un `<div>` à un `<section>`, le compteur qu'il contient **repart de zéro**.

Et un même composant, à la même place, **garde son état même si ses props changent** (`<Counter id="x" />` devient `<Counter id="y" />` : le compteur continue). C'est le principe qui expliquera les clés, plus bas.

Pour voir le premier cas toi-même :

```jsx
function Counter() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{n}</button>;
}

function Test() {
  const [asSection, setAsSection] = useState(false);
  const counter = <Counter />;
  return (
    <div>
      <button onClick={() => setAsSection(!asSection)}>Changer de balise</button>
      {asSection ? <section>{counter}</section> : <div>{counter}</div>}
    </div>
  );
}
// Clique deux fois sur le compteur, puis sur « Changer de balise » : il repart de 0.
```

### Rendre ne veut pas dire modifier la page

Retiens cette distinction, c'est la plus importante de la section :

> **Le rendu** (rappeler ta fonction) et **la mise à jour du DOM** (toucher la page) sont deux choses différentes. Un composant peut être rappelé sans que la page change d'un pixel.

La preuve : [`mini-exos/exo1-observer-rerender.jsx`](./mini-exos/exo1-observer-rerender.jsx). Fais-le avant de continuer.

Ce que l'exo te montrera :

- Quand un composant **parent** se redessine, **tous ses enfants** sont rappelés aussi, même si leurs props n'ont pas changé. Ce n'est pas un défaut : rappeler une fonction coûte presque rien, et React évite de toucher au DOM quand le résultat est identique. (Il existe des outils pour éviter les rappels inutiles, comme `React.memo`. On ne s'en sert en général qu'une fois un problème de lenteur réellement mesuré.)
- Quand un enfant change **son propre état**, seul **lui** (et ses propres enfants) est rappelé, pas son parent.

### Pourquoi ton `console.log` s'affiche deux fois

Dans un projet Vite, `main.jsx` entoure ton application de `<StrictMode>`. En **développement uniquement**, ce mode appelle chaque composant **deux fois** à chaque rendu, pour vérifier qu'il est *pur*. Le doublon disparaît en production.

### Un composant doit être pur

Puisque React peut rappeler ton composant plusieurs fois, le **rendu doit être pur** : mêmes props et même état, même résultat, et **aucun effet** sur le monde extérieur (pas de modification d'une variable globale, pas d'appel à `Date.now()` ou `Math.random()` pour fabriquer l'affichage). C'est pour cette raison que le linter de ton projet signale, par exemple, un `new Date()` écrit directement dans le rendu. (Un `console.log` dans le corps d'un composant est un effet minuscule que l'on tolère pour déboguer : les exos 1 et 2 s'en servent, retire-les ensuite.)

> 🧪 **Atelier :** [React contre JavaScript « à la main »](./ateliers-comparatifs/react-vs-vanilla.md). Deux pages HTML à ouvrir, un composant à copier : tu verras **concrètement** ce que la comparaison de React t'épargne.

---

## 2. Les mises à jour en coulisses : file d'attente et regroupement

### Un setter est une demande, pas un ordre

Au Chapitre 4, tu as appris que l'état est un instantané et que `setX(valeur)` ne change pas la variable du rendu en cours. Voici ce qui se passe réellement :

> Appeler `setCount(...)` **dépose une demande dans une file d'attente**. Quand ton gestionnaire a fini, React traite la file **dans l'ordre**, puis rappelle le composant **une fois**.

### Pourquoi trois `setCount(count + 1)` n'ajoutent qu'un

```jsx
function addThree() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```

Pendant ce rendu, `count` est figé : mettons `0`. Les trois lignes déposent donc **trois fois la même demande** : « mets 1 ». À la fin : `1`.

Avec une **fonction**, tu déposes une instruction qui s'applique à la valeur *du moment dans la file* :

```jsx
setCount((current) => current + 1);   // « ajoute 1 à ce que tu as »
setCount((current) => current + 1);
setCount((current) => current + 1);   // 0 → 1 → 2 → 3
```

### La file, pas à pas

React traite les demandes **dans l'ordre**. Une demande « valeur » écrase tout ; une demande « fonction » reçoit le résultat précédent :

| Appels dans le gestionnaire | Départ | Résultat |
|-----------------------------|--------|----------|
| `setN(5); setN(n => n + 1); setN(10)` | peu importe | `5` → `6` → **`10`** |
| `setN(0); setN(n => n + 1); setN(n => n * 3)` | peu importe | `0` → `1` → **`3`** |
| `setN(n => n + 1); setN(7)` | peu importe | `+1` puis écrasé par → **`7`** |

Tu peux le vérifier avec [`mini-exos/exo2-piege-batching.jsx`](./mini-exos/exo2-piege-batching.jsx).

### Un seul rendu pour plusieurs `set`

Tous ces appels ne provoquent qu'**un seul** nouveau rendu : c'est le **regroupement** (*batching*). Avec trois `set` dans un clic, ton composant n'est rappelé qu'**une fois**. (En développement, `StrictMode` double ce rendu : tu verras deux lignes dans la console, mais c'est **un** rendu appelé deux fois.)

Depuis React 18, le regroupement est **automatique partout** : dans un gestionnaire de clic, mais aussi dans un `setTimeout` ou après une attente (les promesses et les requêtes réseau, que tu verras plus tard). Deux `set` appelés dans un minuteur ne produisent aussi qu'un seul rendu.

### Le piège des minuteurs

`setTimeout(fonction, 1000)` est une fonction du navigateur : elle exécute la `fonction` donnée **une seconde plus tard** (1000 millisecondes).

```jsx
function plusOneLater() {
  setTimeout(() => {
    setCount(count + 1);   // ← quelle valeur de count ?
  }, 1000);
}
```

La fonction passée à `setTimeout` a été créée **pendant un rendu précis** : elle se souvient de la valeur de `count` **de ce rendu**. Une seconde plus tard, même si `count` a changé entre-temps, elle utilise encore **l'ancienne valeur**. Une fonction qui emporte ainsi avec elle les variables de son entourage s'appelle une **fermeture** (*closure*) ; ici, elle est **périmée** (*stale closure*), car elle garde une valeur dépassée.

Clique trois fois rapidement sur le bouton : les trois minuteurs ont vu `count = 0`, donc chacun dit « mets 1 ». Résultat : `1`, et pas `3`. La correction est la même que plus haut : une **fonction**, qui lit la valeur à jour dans la file au moment de s'exécuter :

```jsx
setTimeout(() => {
  setCount((current) => current + 1);
}, 1000);
```

Vérifie-le avec [`mini-exos/exo3-batching-timeout.jsx`](./mini-exos/exo3-batching-timeout.jsx).

> 📌 **La règle d'or, maintenant que tu sais pourquoi :** quand le nouvel état se calcule à partir de l'ancien, écris `setX((current) => ...)`. Tu es protégé des instantanés périmés, quel que soit le nombre d'appels ou le moment où ils s'exécutent.

---

## 3. Les clés : l'identité d'un élément dans une liste

Au Chapitre 3, tu as appris à écrire `key={hero.id}` en répétant que la clé doit être unique et stable. Voici **pourquoi**, maintenant que tu sais comment React compare.

### La clé répond à une question : « est-ce le même ? »

Dans une liste, comparer « par position » ne suffit pas : si tu retires le premier élément, tous les autres **changent de position**. La `key` donne à chaque élément une **identité** indépendante de sa position. Deux éléments sont « le même » s'ils ont la même clé, où qu'ils soient dans la liste. Et un composant « le même » **garde son état**.

### Quand la clé est l'indice : un bug qui ne prévient pas

Chaque ligne a sa propre note (un état local). La clé est l'indice du tableau :

```jsx
{heroes.map((hero, index) => (
  <HeroRow key={index} name={hero.name} />   // ❌ clé = position
))}
```

Tape « brave » dans la note d'**Aragorn** (première ligne), puis renvoie le premier héros. Qui reste ? **Gandalf**… avec la note « brave » d'Aragorn dans son champ !

Pourquoi ? Après le retrait, Gandalf est passé de l'indice 1 à l'indice 0. React cherche « qui a la clé `0` ? » : c'est **l'instance qui était déjà à la position 0**, celle d'Aragorn, avec son état local. Il lui donne simplement la nouvelle prop `name="Gandalf"`. Ni erreur, ni avertissement : la note a juste changé de propriétaire.

Fais-le toi-même avec [`mini-exos/exo4-bug-cles.jsx`](./mini-exos/exo4-bug-cles.jsx). (Le bouton y appelle `heroes.slice(1)`, qui renvoie une **copie** du tableau sans son premier élément.) (Pour rejouer cette expérience, recharge la page : l'état local est remis à zéro.)

### Avec un identifiant stable, l'état suit le bon héros

```jsx
{heroes.map((hero) => (
  <HeroRow key={hero.id} name={hero.name} />   // ✅ clé = identité
))}
```

Gandalf garde **ses** données (une note vide, puisqu'on n'avait rien écrit pour lui) et la note d'Aragorn disparaît avec Aragorn. C'est l'objet de [`mini-exos/exo5-cles-stables.jsx`](./mini-exos/exo5-cles-stables.jsx).

### Une clé qui change à chaque rendu : la pire idée

```jsx
<li key={Math.random()}>...</li>   // ❌ une nouvelle identité à chaque rendu
```

À chaque rendu du parent, tous les éléments ont une **nouvelle** clé : React les croit tous nouveaux. Il détruit les anciens et en recrée de neufs. Concrètement : **tout l'état local de chaque ligne repart de zéro** à chaque rendu du parent, même si rien ne les concernait (un compteur à 2 retombe à 0 dès que tu tapes une lettre ailleurs). Et aucun avertissement ne te prévient.

**À essayer :** dans l'exo 5, remplace `key={hero.id}` par `key={Math.random()}`. Tape une note chez Gandalf et chez Legolas, puis clique sur « Renvoyer le premier » : les notes de Gandalf **et** de Legolas disparaissent, alors qu'aucun des deux n'était concerné.

### Les avertissements que tu verras

| Situation | Message de la console |
|-----------|----------------------|
| Une clé manquante | `Each child in a list should have a unique "key" prop.` |
| Deux clés identiques parmi des frères | `Encountered two children with the same key, ...` |

Une clé n'a besoin d'être unique que **parmi ses frères** (les éléments d'une même liste), pas dans toute l'application. Et rappelle-toi : `key` n'est **pas** une prop. Ton composant ne la reçoit pas, elle ne sert qu'à React.

### Quand l'indice est-il acceptable ?

Quand la liste est **statique** : jamais réordonnée, filtrée ni retirée, et que ses éléments n'ont pas d'état local. Dans tous les autres cas, utilise un identifiant issu de tes données.

### La clé comme bouton de remise à zéro

Le même mécanisme peut être utilisé **volontairement**. Un formulaire qui doit repartir de zéro quand on change de héros :

```jsx
<NoteForm key={selected} heroName={selected} />
```

Quand `selected` change, la clé change : React considère que c'est **un autre** formulaire, détruit l'ancien (et son état) et en crée un neuf. Sans la `key`, le texte tapé pour Aragorn resterait affiché dans le journal de Gandalf. C'est la deuxième partie de l'exo 5.

---

## 4. Les hooks : forge ton `useState`

### Où React range-t-il ton état ?

Ta fonction composant est rappelée à chaque rendu : ses variables locales disparaissent à chaque fois. L'état doit donc vivre **ailleurs**, chez React. Mais quand tu écris :

```jsx
const [health, setHealth] = useState(100);
const [name, setName] = useState("Aragorn");
```

comment React sait-il que le premier appel concerne `health` et le second `name` ? Tu ne lui donnes **aucun nom**. Il se repère à **l'ordre des appels**.

### Une démonstration en JavaScript pur

Voici une version minuscule de `useState`, de la même famille que celle de React (la vraie est bien plus riche). Attention, elle est volontairement très simplifiée : elle rappelle `render()` tout de suite à chaque `setState` (le vrai React regroupe les demandes dans une file d'attente, section 2), ne gère pas la forme `setX((current) => ...)`, et range l'état dans un tableau global pour un seul composant (le vrai React le range par instance de composant). Elle tient dans [`demos/mini-react.js`](./demos/mini-react.js), à lancer avec `node mini-react.js` :

```javascript
let slots = [];   // la mémoire : une « case » par appel de useState, dans l'ordre
let cursor = 0;   // la case qu'on est en train de lire

function useState(initial) {
  const i = cursor;                          // la case de CET appel
  if (slots[i] === undefined) slots[i] = initial;
  const setState = (value) => {
    slots[i] = value;                        // on range la nouvelle valeur...
    render();                                // ...et on rappelle le composant
  };
  cursor++;                                  // le prochain useState lira la case suivante
  return [slots[i], setState];
}

function render() {
  cursor = 0;                                // avant chaque appel, on revient à la première case
  component();
}
```

Chaque appel à `useState` lit la **case suivante**. Avant chaque rendu, le curseur revient à zéro. Tant que ton composant appelle ses hooks **dans le même ordre**, chaque appel retrouve **sa** case.

Casse l'ordre, et tout se décale. Dans la démo, un composant appelle un `useState` supplémentaire seulement quand `showBonus` est vrai :

```javascript
function Broken() {
  if (showBonus) useState("bonus");     // ❌ appelé seulement parfois
  const [name] = useState("Aragorn");
  const [health] = useState(100);
  console.log(`${name} : ${health} PV`);
}

render();            // Aragorn : 100 PV
showBonus = true;
render();            // 100 : 100 PV   ← le nom a pris la valeur de la santé !
```

Au second rendu, le premier appel lit la case 0, le deuxième lit la case 1 (qui contient la santé), le troisième lit une case qui n'existe pas encore. Résultat : `name` vaut `100`. **Le décalage ne fait pas d'erreur de syntaxe : il fait des valeurs fausses.**

### Les deux règles, enfin expliquées

1. **Appelle les hooks uniquement dans un composant** (ou dans une fonction à toi dont le nom commence par `use`, un « hook personnalisé » que tu apprendras à écrire plus tard).
2. **Appelle-les toujours au niveau le plus haut**, jamais dans un `if`, une boucle, après un `return` anticipé ou dans une fonction imbriquée.

Ce n'est pas du style : c'est la condition pour que les cases restent alignées.

### Comment tu es averti

Le **linter** de ton projet Vite (lance `npm run lint` dans le terminal) te le signale avant même d'ouvrir la page :

```
React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render.
```

À l'exécution, si l'ordre change vraiment, React affiche deux messages dans la console, un avertissement et une erreur :

```
Rendered more hooks than during the previous render.
React has detected a change in the order of Hooks called by Panel. This will lead to bugs and errors if not fixed.
```

et, comme rien n'intercepte cette erreur dans ton application, **toute l'interface disparaît** : la page se vide. (Il existe un mécanisme pour limiter les dégâts d'une erreur à une zone de l'écran, mais il dépasse ce chapitre.)

C'est l'objet de [`mini-exos/exo6-hook-order.jsx`](./mini-exos/exo6-hook-order.jsx).

### Comment corriger

Appelle toujours tous tes hooks, puis **branche ensuite** sur le résultat :

```jsx
function Panel({ open }) {
  const [title] = useState("Carnet d'aventure");
  const [note, setNote] = useState("");              // ✅ toujours appelé

  if (!open) return <p>{title} : fermé.</p>;         // le test vient APRÈS les hooks

  return (
    <div>
      <p>{title}</p>
      <input value={note} onChange={(event) => setNote(event.target.value)} />
    </div>
  );
}
```

> 🧪 **Atelier :** [`useState` contre `useReducer`](./ateliers-comparatifs/usestate-vs-usereducer.md). Un autre hook, qui range ses règles de modification au même endroit, pour décider quand l'utiliser.

---

## 🧠 Encadré « Sans métaphore »

- **Élément React** = un objet décrivant un morceau d'écran (`type`, `props`), produit par le JSX.
- **DOM virtuel** = l'arbre d'éléments React produit à chaque rendu. Ce n'est pas une copie du vrai DOM : c'est une description légère.
- **Rendu** (*render*) = un appel de ton composant, qui renvoie cette description.
- **Réconciliation** = la comparaison entre la description précédente et la nouvelle, pour décider quoi modifier.
- **Commit** = l'application des différences au vrai DOM.
- **Regroupement** (*batching*) = traiter plusieurs mises à jour d'état en un seul rendu.
- **Fermeture périmée** (*stale closure*) = une fonction qui garde la valeur d'une variable telle qu'elle était au rendu où elle a été créée.
- **Monter** (*mount*) = quand un composant apparaît pour la première fois et que son état naît ; **démonter** = quand il disparaît et que son état est détruit.
- **Pur** = une fonction qui, à entrées identiques, renvoie un résultat identique et n'a pas d'effet de bord.

Une confusion à lever : **« React redessine toute la page » est faux, « React ne redessine que ce qui a changé » est incomplet.** React **rappelle** tes composants (le rendu), puis ne **modifie la page** que là où le résultat diffère (le commit).

---

## Résumé du chapitre

- Le JSX produit des **objets** (`type`, `props`) qui décrivent l'écran : le DOM virtuel.
- React **rend** (rappelle tes composants), **compare** avec le rendu précédent, **applique** seulement les différences au vrai DOM.
- Même type à la même place (ou même `key`) : le nœud et l'état sont **conservés**. Type différent : destruction et recréation.
- Un parent qui se redessine rappelle tous ses enfants. Rendre n'est pas modifier le DOM.
- Le rendu doit être **pur** ; `StrictMode` l'appelle deux fois en développement pour le vérifier.
- Un setter dépose une demande dans une **file d'attente** traitée dans l'ordre, avec **un seul rendu** par gestionnaire, y compris dans un minuteur ou une promesse.
- Une fonction créée pendant un rendu garde les valeurs **de ce rendu** (fermeture périmée) : utilise `setX((current) => ...)`.
- La `key` donne une **identité** à un élément de liste. Indice (si la liste bouge) ou valeur aléatoire : l'état se retrouve chez le mauvais élément, ou disparaît. Un identifiant stable résout tout, et une `key` qui change remet l'état à zéro à dessein.
- React retrouve l'état d'un composant à l'**ordre des appels de hooks** : jamais de hook dans un `if`, une boucle ou après un `return`.

---

## Ton plan d'attaque

1. **Lis les sections 1 à 4** en lançant chaque mini-exo au moment où il est cité (1 h 30). Pour chacun, **prédis avant de lancer**.
2. **Lance la démo** `node demos/mini-react.js` et modifie-la : ajoute un troisième `useState`, déplace-en un dans un `if`, regarde ce qui se décale (15 min).
3. **Fais les deux ateliers** comparatifs (1 h au total).
4. **Passe le [test rapide](./test-rapide.md)** (20 min).

---

## Réponses aux mini-exos

> ✋ Prédire **avant** de lancer, c'est tout l'intérêt de ces exos : ce chapitre ne marche que si tu t'es trompé au moins une fois.

Pour que prédire garde son sens, les réponses ne sont pas sur `main`. Une fois les six exos faits, consulte `chapitres/04-5-forge-reactomancien/solutions/reponses-mini-exos.md` sur la branche `solutions-ch45-mini-exos` (voir [Vérifier tes réponses](../../GETTING_STARTED.md#-vérifier-tes-réponses) pour y accéder).

---

## Prochaines étapes

Tu connais maintenant le moteur : comment React rend, compare et applique, comment il range ton état, et pourquoi la `key` et l'ordre des hooks comptent. Les chapitres suivants s'appuient dessus : les patterns de composants avancés, puis les effets de bord avec `useEffect` (par exemple sauvegarder tes quêtes pour qu'elles survivent à un rechargement de la page).

👉 Chapitre 5 : Patterns de composants avancés *(à venir)*
