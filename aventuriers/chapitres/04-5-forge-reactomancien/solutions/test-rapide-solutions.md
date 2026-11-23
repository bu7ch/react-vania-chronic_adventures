# Solutions du test rapide du Chapitre 4.5 : La forge du réactomancien

> ✋ Ne lis ce fichier qu'**après** avoir passé le [test rapide](../test-rapide.md). Le barème est dans le test lui-même.

## Réponses

### Q1 : A
Un élément React est un simple objet (`type`, `props`) qui **décrit** un morceau d'écran. L'arbre de ces objets, produit à chaque rendu, est le DOM virtuel. Ce n'est ni une copie du vrai DOM (B), ni un navigateur (C).

### Q2 : C
Quand un composant change **son propre** état, seul lui (et ses enfants) est rappelé. `Parent` n'est pas rappelé, donc `Child B` non plus. (Si c'était le bouton de `Parent` qu'on avait cliqué, `A` serait la bonne réponse : un parent qui se redessine rappelle tous ses enfants.)

### Q3 : B
La file est traitée dans l'ordre : `setN(5)` donne `5`, puis `(n) => n + 1` donne `6`, puis `setN(10)` **écrase** tout : `10`.

### Q4 : A
Les trois fonctions passées à `setTimeout` ont été créées pendant le même rendu, où `count` valait `0`. Chacune demande « mets `0 + 1` » : le résultat est `1`. Avec `setCount((current) => current + 1)`, on obtiendrait `3`.

### Q5 : C
Avec `key={index}`, après le retrait, la deuxième ligne passe de l'indice 1 à l'indice 0. React la fait correspondre à l'**instance** qui était déjà à l'indice 0 (celle de la première ligne), avec son état local, et ne change que les props. Aucun avertissement n'apparaît.

### Q6 : B
React range l'état dans une liste de « cases » et retrouve chaque case par l'**ordre** des appels. Un hook appelé seulement parfois décale toutes les cases suivantes : les valeurs se retrouvent au mauvais endroit, ou React détecte l'écart et s'arrête (« Rendered more hooks than during the previous render »).

### Défi bonus

**Les trois bugs :**

1. **`key={index}`** : après « Retirer la première », la ligne restante (« Réparer l'épée ») garde le champ de la première instance et affiche donc « Acheter une potion », car la valeur affichée est fixée à la création du champ : changer `defaultValue` ensuite met à jour l'attribut, mais pas ce que l'utilisateur voit (vérifié dans un navigateur réel). Corrigé en utilisant une clé stable, `key={note.id}`.
2. **La fermeture périmée dans `addNoteLater`** : le minuteur lit `notes` tel qu'il était au clic. Deux clics rapides font deux fois « ajoute à *cette* liste » : une seule note est ajoutée au lieu de deux (on se retrouve avec 3 notes au lieu de 4). Corrigé en passant une fonction à `setNotes`.
3. **L'identifiant calculé avec `notes.length + 1`** : après un retrait, la liste a une note de moins, donc le nouvel id peut **déjà exister** (retire la première, la liste contient seulement l'id `2`, `length + 1` vaut `2` aussi). Tant que la clé est l'indice (bug 1), on ne le voit pas. Une fois la clé devenue `note.id`, React signale « Encountered two children with the same key ». Corrigé en calculant l'id à partir du **plus grand** id existant.

**Version corrigée :**

```jsx
import { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Acheter une potion" },
    { id: 2, text: "Réparer l'épée" },
  ]);

  function addNoteLater() {
    setTimeout(() => {
      setNotes((current) => {
        const nextId = Math.max(0, ...current.map((note) => note.id)) + 1;
        return [...current, { id: nextId, text: "Nouvelle note" }];
      });
    }, 1000);
  }

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <input defaultValue={note.text} />
          </li>
        ))}
      </ul>
      <button type="button" onClick={addNoteLater}>Ajouter dans 1 s</button>
      <button type="button" onClick={() => setNotes(notes.slice(1))}>Retirer la première</button>
    </div>
  );
}
```

On a exécuté les deux versions : la version corrigée affiche « Réparer l'épée » après le retrait, ajoute bien deux notes pour deux clics rapides, et ne produit aucun avertissement.
