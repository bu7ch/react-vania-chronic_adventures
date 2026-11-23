# Solutions du test rapide du Chapitre 4 : L'État, ta barre de santé

> ✋ Ne lis ce fichier qu'**après** avoir passé le [test rapide](../test-rapide.md). Le barème est dans le test lui-même.

## Réponses

### Q1 : B
React ne redessine que quand un **état** change (ou quand le parent se redessine). Modifier un `let` ne le prévient de rien, et `console.log` n'a aucun effet sur le rendu.

### Q2 : C
A appelle `setCount` pendant le rendu : le composant se redessine en boucle (erreur « Too many re-renders »). B passerait l'objet événement au setter à la place d'un nombre. C donne une **fonction** que React appellera au clic.

### Q3 : A
`count` est un **instantané** : il vaut `0` pendant tout ce rendu. Les trois lignes demandent donc « 1 » trois fois. Pour obtenir 3 : `setCount((current) => current + 1)` trois fois.

### Q4 : A
B et C **modifient** le tableau d'état en place puis redonnent le même tableau : React ne voit aucun changement et ne redessine rien. `filter` renvoie un **nouveau** tableau sans le héros visé.

### Q5 : B
`useState(health)` n'utilise `health` que comme valeur de **départ**, au premier rendu. Ensuite, `h` garde sa valeur : la carte affiche `10 PV`. Pour suivre la prop, utilise-la directement (`{health}`).

### Q6 : C
Quand deux composants ont besoin de la même donnée, on **remonte** l'état dans leur plus proche parent commun. Il passe la valeur par les props et une fonction (`onSelect`) pour la modifier. A est impossible (un composant ne lit pas l'état d'un autre), et B est une variable ordinaire : modifier `selectedId` ne redessinerait rien.

### Défi bonus

```jsx
import { useState } from "react";

function PotionCounter() {
  const [potions, setPotions] = useState(3);

  const isFull = potions === 5; // valeur dérivée : on la calcule, on ne la stocke pas

  return (
    <div>
      <p>Potions : {potions}</p>

      <button
        type="button"
        onClick={() => setPotions((current) => Math.max(0, current - 1))}
        disabled={potions === 0}
      >
        Boire
      </button>

      <button
        type="button"
        onClick={() => setPotions((current) => Math.min(5, current + 1))}
        disabled={isFull}
      >
        Cueillir
      </button>

      <button type="button" onClick={() => setPotions(0)}>
        Tout boire
      </button>

      {isFull && <p>Sac plein !</p>}
    </div>
  );
}

export default PotionCounter;
```

« Tout boire » utilise `setPotions(0)` (une valeur fixe) : la forme fonction n'est utile que lorsque le nouvel état dépend de l'ancien. Les bornes `Math.max(0, ...)` et `Math.min(5, ...)` rejouent ce que tu as fait avec la santé : elles protègent l'état même si le bouton n'était pas désactivé.
