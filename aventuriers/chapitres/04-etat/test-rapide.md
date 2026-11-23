# ✅ Test rapide du Chapitre 4

Fais ce test pour vérifier que tu as **vraiment** compris le Chapitre 4.

Temps : 20 min
Difficultés : Facile → Moyen → Difficile

Essaie de **prédire** chaque résultat avant de le tester dans ton projet.

---

## Question 1 (Facile) : Ce qui redessine

Dans un composant, laquelle de ces actions provoque un nouveau rendu ?

**A)** Modifier une variable déclarée avec `let` dans le composant
**B)** Appeler le setter d'un état (`setHealth(15)`) avec une valeur différente de l'actuelle
**C)** Afficher quelque chose avec `console.log`

---

## Question 2 (Facile) : Le bon `onClick`

On veut qu'un clic ajoute 1 au compteur. Lequel est correct ?

**A)** `<button onClick={setCount(count + 1)}>+1</button>`
**B)** `<button onClick={setCount}>+1</button>`
**C)** `<button onClick={() => setCount(count + 1)}>+1</button>`

---

## Question 3 (Moyen) : Trois `set` d'affilée

```jsx
const [count, setCount] = useState(0);

function addThree() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```

Après **un** clic sur le bouton qui appelle `addThree`, que vaut `count` ?

**A)** `1`
**B)** `3`
**C)** `0`

---

## Question 4 (Moyen) : Retirer un héros

L'état est `const [heroes, setHeroes] = useState(initialHeroes);`. Quelle écriture retire correctement le héros dont l'id est `idToRemove` ?

**A)**
```jsx
setHeroes(heroes.filter((hero) => hero.id !== idToRemove));
```

**B)**
```jsx
heroes.splice(heroes.findIndex((h) => h.id === idToRemove), 1);
setHeroes(heroes);
```

**C)**
```jsx
heroes.pop();
setHeroes(heroes);
```

---

## Question 5 (Moyen) : Une prop copiée dans l'état

```jsx
function Card({ health }) {
  const [h] = useState(health);
  return <p>{h} PV</p>;
}
```

Le parent affiche `<Card health={10} />`, puis, après un clic, `<Card health={15} />`. Que montre `Card` après le clic ?

**A)** `15 PV`
**B)** `10 PV` : `useState` ne lit sa valeur de départ qu'au premier rendu
**C)** Une erreur

---

## Question 6 (Difficile) : Où ranger l'état ?

Deux composants frères, `HeroList` (qui affiche les héros et permet d'en **sélectionner** un) et `HeroDetails` (qui affiche le détail du héros sélectionné), ont besoin de savoir **quel héros est sélectionné**. Où mettre l'état `selectedId` ?

**A)** Dans `HeroList`, et `HeroDetails` le lira directement dans `HeroList`
**B)** Dans une variable `let selectedId` en dehors des composants, que les deux modifient
**C)** Dans leur **parent commun** : il passe `selectedId` aux deux, et à `HeroList` une fonction `onSelect` pour le modifier

---

## 🎯 Défi bonus : le compteur de potions

Écris un composant `PotionCounter` :

- il retient un nombre de potions (départ : 3) ;
- il affiche `Potions : 3` ;
- un bouton **Boire** retire 1 potion, mais **jamais sous 0**, et il est désactivé à 0 ;
- un bouton **Cueillir** en ajoute 1, mais **jamais au-dessus de 5** ; à 5, il est désactivé **et** le texte « Sac plein ! » s'affiche ;
- un bouton **Tout boire** met le compteur à 0.

**Tes contraintes :**

- Pas d'état supplémentaire pour « sac plein » : c'est une valeur **dérivée**.
- Utilise la forme fonction (`(current) => ...`) pour les changements qui dépendent de la valeur précédente.

---

## Scoring

- **Questions 1-2 :** 10 pts chacune (basique)
- **Questions 3-5 :** 15 pts chacune (intermédiaire)
- **Question 6 :** 25 pts (réflexion)
- **Défi bonus :** 30 pts (complet)

**Total :** 120 pts

- ✅ 90+ : Tu as compris ! Va au Chapitre 4.5
- ⚠️ 75-89 : Bien, mais relis les sections sur l'immutabilité et les instantanés
- ❌ < 75 : Relis tout le chapitre

---

## Solutions

Pour que le test reste un vrai test, les solutions ne sont pas sur `main`. Une fois que tu as répondu, consulte `chapitres/04-etat/solutions/test-rapide-solutions.md` sur la branche `solutions-ch4-phase2` (voir [Vérifier tes réponses](../../GETTING_STARTED.md#-vérifier-tes-réponses) pour y accéder).

---

**Prochaine étape :** Chapitre 4.5, où l'on soulève le capot de React.
