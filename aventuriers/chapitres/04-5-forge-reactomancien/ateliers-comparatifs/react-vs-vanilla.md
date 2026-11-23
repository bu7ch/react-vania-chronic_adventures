# ⚖️ Atelier : React contre JavaScript « à la main »

**Durée :** 20-30 min
**Objectif :** comprendre, en l'éprouvant, ce que React fait pour toi quand il « compare et met à jour seulement ce qui a changé ».

Le même mini-écran, écrit trois fois : une liste de héros avec, pour chacun, un champ de note et un bouton « Soigner ».

## Version 1 : la naïve

Ouvre [`vanilla-naif.html`](./vanilla-naif.html) dans ton navigateur (double-clic sur le fichier : aucun serveur n'est nécessaire).

Le principe : à chaque changement, on **reconstruit toute la liste** en texte HTML.

```javascript
function render() {
  app.innerHTML = heroes
    .map((hero) => `<li>${hero.name} : <span>${hero.health}</span> PV <input ...> <button ...>Soigner</button></li>`)
    .join("");
}
```

**À faire :** tape « brave » dans le champ d'Aragorn, puis clique sur le « Soigner » de **Gandalf**. Que devient ta note ? La santé de Gandalf est-elle bien passée de 90 à 110 ?

## Version 2 : la soignée

Ouvre [`vanilla-soigne.html`](./vanilla-soigne.html). Cette fois, chaque ligne est créée **une seule fois**, et au clic on ne modifie que le morceau concerné (`span.textContent = ...`).

**À faire :** refais le même test. Ta note survit-elle ?

Maintenant, imagine que tu doives en plus : ajouter un héros, en retirer un, trier la liste, afficher « K.O. » à zéro, désactiver un bouton... Pour chaque cas, il faudrait écrire du code qui **retrouve** les bons éléments, les **crée**, les **déplace** ou les **supprime**, et qui garde tout cohérent avec les données. C'est exactement ce que fait un framework.

## Version 3 : React

```jsx
import { useState } from "react";

function Heroes() {
  const [heroes, setHeroes] = useState([
    { id: 1, name: "Aragorn", health: 25 },
    { id: 2, name: "Gandalf", health: 90 },
  ]);

  function heal(id) {
    setHeroes((current) =>
      current.map((hero) =>
        hero.id === id ? { ...hero, health: hero.health + 20 } : hero
      )
    );
  }

  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>
          {hero.name} : <span>{hero.health}</span> PV{" "}
          <input aria-label={`note-${hero.name}`} placeholder="Une note..." />{" "}
          <button type="button" onClick={() => heal(hero.id)}>Soigner</button>
        </li>
      ))}
    </ul>
  );
}

export default Heroes;
```

(`aria-label` donne un nom au champ pour les lecteurs d'écran, et `{" "}` insère une espace visible entre deux éléments écrits sur des lignes différentes du JSX.)

Copie-le dans ton projet Vite et affiche `<Heroes />`. Tape une note chez Aragorn, puis clique sur le « Soigner » de Gandalf.

On a mesuré les trois versions :

| | Version 1 (naïve) | Version 2 (soignée) | Version 3 (React) |
|---|---|---|---|
| La note tapée survit au clic | ❌ non (le champ est un **nouvel** élément) | ✅ oui | ✅ oui |
| La santé s'affiche à jour | ✅ | ✅ | ✅ |
| Code pour mettre à jour l'écran | `render()` qui détruit tout | du code à la main, à écrire pour **chaque** cas | **aucun** : on décrit l'écran, React compare |
| Ajouter / retirer un héros | facile (on reconstruit) mais détruit tout | à coder à la main | `setHeroes(...)`, c'est tout |

## Ce que ça démontre

React obtient les avantages des deux : le **confort** de la version 1 (« je décris l'écran entier à partir des données, sans me soucier des détails ») et la **précision** de la version 2 (« seul ce qui a changé est touché, le reste est conservé »).

Comment ? Il compare la description de l'écran du rendu précédent avec celle du rendu actuel, élément par élément. Quand un élément est **le même** (même type, même position ou même `key`), il **garde le nœud existant** et ne met à jour que ce qui diffère. C'est pour cette raison que ta note survit en version 3. Quand ce n'est **pas** le même, il crée un nouveau nœud : le champ et son contenu sont perdus, comme en version 1.

C'est aussi la clé du comportement des `key` (voir [la section « Les clés »](../README.md#3-les-clés--lidentité-dun-élément-dans-une-liste)) : la clé dit à React **quel élément est le même** d'un rendu à l'autre.

## Questions

1. Dans la version 1, pourquoi le champ d'Aragorn est-il vidé alors que ce n'est pas lui qu'on a soigné ?
2. Quel est le coût de la version 2 quand l'écran devient complexe ? Qu'est-ce qui garantit que les données et l'écran restent cohérents ?
3. Pourquoi dit-on que React est « déclaratif » ? (Indice : compare ce que **tu écris** dans les versions 2 et 3.)
4. React fait-il toujours mieux que la version 2 en vitesse brute ? Pourquoi ce n'est pas son argument principal ?

> 💡 Pas de réponse unique sur la 4. Le point à retenir : React ne promet pas d'être plus rapide qu'un code manuel parfait. Il promet qu'on obtient un code **correct et lisible** sans écrire ce travail de mise à jour soi-même.
