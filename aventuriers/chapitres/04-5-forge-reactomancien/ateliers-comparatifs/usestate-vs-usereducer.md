# ⚖️ Atelier : `useState` contre `useReducer`

**Durée :** 20-30 min
**Objectif :** découvrir `useReducer`, le « grand frère » de `useState`, et savoir quand il aide.

Tu as écrit (Chapitre 4) une Taverne dont l'état est la liste des héros, avec cinq façons de la modifier : blesser et soigner (une seule fonction, `changeHealth`), ajouter, renvoyer, réinitialiser. Des fonctions dispersées dans `App`, chacune appelant `setHeroes(...)`.

`useReducer` propose de **regrouper toutes les règles de modification au même endroit**, dans une fonction pure appelée *réducteur* (*reducer*).

## L'idée

Au lieu de dire à React *comment* changer l'état (`setHeroes(...)`), tu lui dis **ce qui s'est passé** (une « action »), et le réducteur décide du nouvel état :

```jsx
dispatch({ type: "hit", id: 3 }); // « le héros 3 a été blessé »
```

Le réducteur reçoit **l'état actuel** et **l'action**, et renvoie **le nouvel état**. C'est une fonction pure : pas d'effet de bord, elle ne modifie pas l'état reçu, elle en renvoie un nouveau.

## Version `useState` (Chapitre 4)

```jsx
const [heroes, setHeroes] = useState(initialHeroes);

function changeHealth(id, delta) {
  setHeroes((current) =>
    current.map((hero) =>
      hero.id === id
        ? { ...hero, health: Math.min(hero.maxHealth, Math.max(0, hero.health + delta)) }
        : hero
    )
  );
}

function addHero(name) {
  setHeroes((current) => {
    const nextId = Math.max(0, ...current.map((hero) => hero.id)) + 1;
    return [...current, { id: nextId, name, health: 50, maxHealth: 50 }];
  });
}

function removeHero(id) {
  setHeroes((current) => current.filter((hero) => hero.id !== id));
}

function resetAll() {
  setHeroes(initialHeroes);
}
```

## Version `useReducer`

Deux syntaxes JavaScript nouvelles dans le code ci-dessous. `switch (action.type) { case "hit": ... }` est un `if / else if` plus lisible : il exécute le `case` qui correspond à la valeur testée, et le `return` en sort aussitôt. `throw new Error("...")` arrête le programme avec un message d'erreur : ici, il signale une action que le réducteur ne connaît pas.

```jsx
import { useReducer } from "react";

// Toutes les règles au même endroit. Une fonction pure : aucun effet de bord.
function heroesReducer(heroes, action) {
  switch (action.type) {
    case "hit":
      return heroes.map((hero) =>
        hero.id === action.id
          ? { ...hero, health: Math.max(0, hero.health - 20) }
          : hero
      );
    case "heal":
      return heroes.map((hero) =>
        hero.id === action.id
          ? { ...hero, health: Math.min(hero.maxHealth, hero.health + 20) }
          : hero
      );
    case "add": {
      const nextId = Math.max(0, ...heroes.map((hero) => hero.id)) + 1;
      return [...heroes, { id: nextId, name: action.name, health: 50, maxHealth: 50 }];
    }
    case "remove":
      return heroes.filter((hero) => hero.id !== action.id);
    case "reset":
      return initialHeroes;
    default:
      throw new Error("Action inconnue : " + action.type);
  }
}

function App() {
  const [heroes, dispatch] = useReducer(heroesReducer, initialHeroes);

  return (
    <>
      <AddHeroForm onAdd={(name) => dispatch({ type: "add", name })} />
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          {...hero}
          onHit={() => dispatch({ type: "hit", id: hero.id })}
          onHeal={() => dispatch({ type: "heal", id: hero.id })}
          onRemove={() => dispatch({ type: "remove", id: hero.id })}
        />
      ))}
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        Réinitialiser la taverne
      </button>
    </>
  );
}
```

`useReducer(reducer, départ)` renvoie, comme `useState`, **deux** choses : l'état actuel et une fonction, appelée ici `dispatch`, pour envoyer une action. À chaque `dispatch`, React appelle `heroesReducer(étatActuel, action)` et range le résultat comme nouvel état. Un nouveau rendu suit, exactement comme avec `useState`.

On a vérifié ce code sur la Taverne : blesser deux fois Aragorn (25 PV) le fait tomber à 0, renvoyer un héros le retire de la liste, ajouter un héros donne un quatrième héros avec l'identifiant suivant, réinitialiser remet la liste de départ (les trois héros). Un réducteur étant une fonction pure, on peut aussi le tester **sans React** : `heroesReducer(initialHeroes, { type: "hit", id: 1 })` renvoie un nouveau tableau et laisse `initialHeroes` intact.

Autre détail : en mode développement (`StrictMode`), React appelle les réducteurs **deux fois** par action, pour vérifier qu'ils sont purs. Si ton réducteur modifie l'état en place, ce double appel révèle le bug.

## Comparer

Note chaque version de **1 à 5** pour ton projet, puis justifie.

| Critère | `useState` | `useReducer` |
|---------|-----------|--------------|
| Lisible pour un débutant, sur un petit état | | |
| Toutes les règles de modification au même endroit | | |
| Facile à tester sans React | | |
| Peu de code pour un état simple (un nombre, un texte) | | |
| Facile d'ajouter une nouvelle façon de modifier l'état | | |
| Les composants enfants reçoivent une seule fonction (`dispatch`) au lieu de plusieurs | | |
| **Total** | | |

## Débat

1. Pour un compteur (`const [n, setN] = useState(0)`), `useReducer` serait-il un progrès ? Pourquoi ?
2. À partir de combien de façons différentes de modifier l'état `useReducer` devient-il plus clair ? Y a-t-il un chiffre ?
3. Le réducteur doit être **pur**. Qu'est-ce qui pourrait casser s'il appelait `heroes.push(...)` ?
4. Dans quel cas préférerais-tu `useState` pour un formulaire ? Et `useReducer` ?

**Pas de réponse unique** : l'important est de savoir que les deux existent, et de choisir en connaissance de cause. Règle du pouce : `useState` pour un état simple, `useReducer` quand plusieurs actions se partagent des règles complexes sur le même état.
