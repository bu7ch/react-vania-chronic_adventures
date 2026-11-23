# ✅ Test rapide du Chapitre 4.5

Fais ce test pour vérifier que tu as **vraiment** compris la forge.

Temps : 20-25 min
Difficultés : Facile → Moyen → Difficile

Essaie de **prédire** chaque résultat avant de le tester dans ton projet. C'est un test de raisonnement, pas de mémoire.

---

## Question 1 (Facile) : Le DOM virtuel

Qu'est-ce que le « DOM virtuel » ?

**A)** Une description légère de l'écran, faite d'objets JavaScript, produite par tes composants à chaque rendu
**B)** Une copie complète de la page que React garde en mémoire et synchronise en permanence
**C)** Un second navigateur invisible dans lequel React teste la page avant de l'afficher

---

## Question 2 (Facile) : Qui est rappelé ?

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child label="A" />
      <Child label="B" />
    </div>
  );
}
```

Chaque `Child` a **son propre** état (un compteur de clics). Tu cliques sur le bouton du `Child` « A ». Quels composants sont rappelés ?

**A)** `Parent`, `Child A` et `Child B`
**B)** `Parent` seulement
**C)** `Child A` seulement

---

## Question 3 (Moyen) : La file d'attente

```jsx
function riddle() {
  setN(5);
  setN((n) => n + 1);
  setN(10);
}
```

Après un clic qui appelle `riddle`, que vaut `n` ?

**A)** `6`
**B)** `10`
**C)** `11`

---

## Question 4 (Moyen) : Le minuteur

```jsx
function plusOneLater() {
  setTimeout(() => {
    setCount(count + 1);
  }, 1000);
}
```

`count` vaut `0`. Tu cliques **trois fois rapidement** (en moins d'une seconde) sur le bouton qui appelle `plusOneLater`, puis tu attends 2 secondes. Que vaut `count` ?

**A)** `1`
**B)** `3`
**C)** `0`

---

## Question 5 (Moyen) : Une clé trompeuse

Une liste de lignes, chacune avec **son propre état local** (une note tapée par l'utilisateur), utilise `key={index}`. Tu écris une note dans la **première** ligne, puis tu **retires** la première ligne de la liste. Qu'observes-tu ?

**A)** La ligne retirée disparaît, chaque ligne restante garde sa propre note
**B)** React affiche une erreur dans la console
**C)** La première ligne **restante** se retrouve avec la note de la ligne retirée

---

## Question 6 (Difficile) : Les hooks

Pourquoi ne faut-il pas appeler `useState` à l'intérieur d'un `if` ?

**A)** Parce que JavaScript interdit d'écrire une déclaration dans un `if`
**B)** Parce que React retrouve l'état de chaque appel grâce à l'**ordre** des appels : si l'ordre change d'un rendu à l'autre, les valeurs se décalent
**C)** C'est seulement une convention de style, sans conséquence sur le comportement

---

## 🎯 Défi bonus : les trois bugs

Ce composant gère une liste de notes. Il contient **trois bugs**, dont un qui se **cache derrière** un autre.

```jsx
import { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Acheter une potion" },
    { id: 2, text: "Réparer l'épée" },
  ]);

  function addNoteLater() {
    setTimeout(() => {
      setNotes([...notes, { id: notes.length + 1, text: "Nouvelle note" }]);
    }, 1000);
  }

  return (
    <div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
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

**Ta mission :**

1. **Trouve et explique** chacun des trois bugs, et dis comment les déclencher dans la page.
2. **Corrige-les tous** dans une version propre.

**Indice :** `defaultValue` ne fixe ce que l'on **voit** dans le champ qu'à sa **création**. Et pour le troisième bug, corrige d'abord le premier : il apparaîtra tout seul.

---

## Scoring

- **Questions 1-2 :** 10 pts chacune (basique)
- **Questions 3-5 :** 15 pts chacune (intermédiaire)
- **Question 6 :** 25 pts (réflexion)
- **Défi bonus :** 30 pts (complet)

**Total :** 120 pts

- ✅ 90+ : Tu as compris ! Va au Chapitre 5 *(à venir)*
- ⚠️ 75-89 : Bien, mais relis les sections liées à tes erreurs (Q1-Q2 : section 1, Q3-Q4 : section 2, Q5 : section 3, Q6 : section 4)
- ❌ < 75 : Relis tout le chapitre et refais les mini-exos

---

## Solutions

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

---

**Prochaine étape :** le Chapitre 5, les patterns de composants avancés.
