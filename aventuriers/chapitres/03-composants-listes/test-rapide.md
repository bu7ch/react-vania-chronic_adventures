# ✅ Test rapide du Chapitre 3

Fais ce test pour vérifier que tu as **vraiment** compris le Chapitre 3.

Temps : 20 min
Difficultés : Facile → Moyen → Difficile

Essaie de **prédire** chaque résultat avant de le tester dans ton projet.

---

## Question 1 (Facile) : Ce que reçoit un composant

```jsx
function HeroCard({ name, level }) {
  return <p>{name} (niveau {level})</p>;
}

<HeroCard name="Aragorn" level={5} />
```

Que reçoit exactement la fonction `HeroCard` ?

**A)** Deux arguments séparés : `"Aragorn"` puis `5`
**B)** Un seul argument : l'objet `{ name: "Aragorn", level: 5 }`
**C)** Aucun argument : elle lit des variables globales

---

## Question 2 (Facile) : Guillemets ou accolades

```jsx
function Level({ level }) {
  return <p>{level + 1}</p>;
}

<Level level="5" />
```

Qu'affiche la page ?

**A)** `6`
**B)** Une erreur
**C)** `51`

---

## Question 3 (Moyen) : Quel `.map()` fonctionne ?

```jsx
// A
{heroes.map((hero) => {
  <li key={hero.id}>{hero.name}</li>;
})}

// B
{heroes.map((hero) => (
  <li>{hero.name}</li>
))}

// C
{heroes.map((hero) => (
  <li key={hero.id}>{hero.name}</li>
))}
```

Lequel affiche la liste **sans aucun avertissement** ?

**A)** A
**B)** B
**C)** C

---

## Question 4 (Moyen) : Choisir une `key`

Tu as `const heroes = [{ id: 1, name: "Aragorn" }, { id: 2, name: "Gandalf" }]`. Quelle est la meilleure `key` pour un `.map()` sur ce tableau ?

**A)** `key={hero.id}`
**B)** `key={Math.random()}`
**C)** `key={index}` (l'indice du tableau), parce que c'est le plus simple

---

## Question 5 (Moyen) : Un tri sournois

```jsx
const heroes = [
  { id: 1, name: "Aragorn", level: 5 },
  { id: 2, name: "Gandalf", level: 10 },
];

const sorted = heroes.sort((a, b) => b.level - a.level);
```

Après cette ligne, que contient `heroes` ?

**A)** `Aragorn, Gandalf` : le tableau d'origine est intact
**B)** `Gandalf, Aragorn` : `.sort()` a modifié le tableau d'origine
**C)** Une erreur : on n'a pas le droit de trier un tableau

---

## Question 6 (Difficile) : Réflexion

Un composant `HeroCard` reçoit `health` en prop (25). Tu ajoutes un bouton « Soigner » qui doit faire passer la santé à 45. Dans le gestionnaire de clic, tu écris `props.health = 45;`.

**Pourquoi est-ce une mauvaise idée, et de quoi as-tu besoin ?**

**A)** Il faut écrire `let health` au lieu de `props.health`, sinon JavaScript refuse
**B)** Les props sont en lecture seule, et même sans cela React ne saurait pas qu'il doit redessiner la page : il faut un **état**, qui appartient au composant et déclenche un nouveau rendu quand il change
**C)** Il faut passer la prop avec des guillemets au lieu d'accolades

---

## 🎯 Défi bonus : le résumé d'équipe

Écris un composant `TeamSummary` qui reçoit un tableau `heroes` en prop et affiche un paragraphe :

- `Équipe : Aragorn, Gandalf (niveau moyen : 7.5)` quand il y a des héros ;
- `Équipe vide` quand le tableau est vide.

**Tes contraintes :**

- Pas de boucle `for` : utilise les méthodes de tableau.
- Gère le tableau vide **avant** de calculer la moyenne (une division par zéro donnerait `NaN`).

**Indice :** `heroes.reduce((somme, hero) => somme + hero.level, 0)` calcule la somme des niveaux.

**Code de test :**

```jsx
<TeamSummary heroes={[{ id: 1, name: "Aragorn", level: 5 }, { id: 2, name: "Gandalf", level: 10 }]} />
<TeamSummary heroes={[]} />
```

---

## Scoring

- **Questions 1-2 :** 10 pts chacune (basique)
- **Questions 3-5 :** 15 pts chacune (intermédiaire)
- **Question 6 :** 25 pts (réflexion)
- **Défi bonus :** 30 pts (complet)

**Total :** 120 pts

- ✅ 90+ : Tu as compris ! Va au Chapitre 4
- ⚠️ 75-89 : Bien, mais relis les sections sur `.map()` et `key`
- ❌ < 75 : Relis tout le chapitre

---

## Solutions

### Q1 : B
React appelle la fonction avec **un seul objet** contenant toutes les props. La signature `({ name, level })` est du destructuring (Chapitre 1) appliqué à cet objet.

### Q2 : C
`level="5"` passe du **texte**. `"5" + 1` concatène : `"51"`. Avec `level={5}`, c'est un nombre et le résultat est `6`.

### Q3 : C
A n'affiche rien : avec des accolades `{ }`, il faut un `return` explicite. B affiche la liste mais déclenche l'avertissement « Each child in a list should have a unique "key" prop ». C est la bonne version.

### Q4 : A
Un `id` issu des données est unique et stable. `Math.random()` change à chaque rendu : React croit que tous les éléments sont nouveaux (aucun avertissement, mais c'est un vrai bug). L'indice ne convient que si la liste ne change jamais d'ordre ni de taille.

### Q5 : B
`.sort()` **modifie le tableau d'origine** et le renvoie. Pour trier sans effet de bord : `[...heroes].sort(...)`.

### Q6 : B
Modifier `props` provoque une erreur (« Cannot assign to read only property »). Mais même en contournant, React ne sait pas qu'une donnée a changé et ne redessine rien. Il faut un **état** : c'est le sujet du Chapitre 4.

### Défi bonus

```jsx
function TeamSummary({ heroes }) {
  if (heroes.length === 0) {
    return <p>Équipe vide</p>;
  }

  const names = heroes.map((hero) => hero.name).join(", ");
  const total = heroes.reduce((sum, hero) => sum + hero.level, 0);
  const average = total / heroes.length;

  return (
    <p>
      Équipe : {names} (niveau moyen : {average})
    </p>
  );
}
```

Le `if` est **avant** le `return`, donc autorisé. C'est lui qui évite la division par zéro : sans lui, `0 / 0` donnerait `NaN`.

---

**Prochaine étape :** Chapitre 4, où tes composants apprennent à se souvenir.
