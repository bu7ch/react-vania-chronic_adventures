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

Pour que le test reste un vrai test, les solutions ne sont pas sur `main`. Une fois que tu as répondu, consulte `chapitres/04-5-forge-reactomancien/solutions/test-rapide-solutions.md` sur la branche `solutions-ch45-mini-exos` (voir [Vérifier tes réponses](../../GETTING_STARTED.md#-vérifier-tes-réponses) pour y accéder).

---

**Prochaine étape :** le Chapitre 5, les patterns de composants avancés.
