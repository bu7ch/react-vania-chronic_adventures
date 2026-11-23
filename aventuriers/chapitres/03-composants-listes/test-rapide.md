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

Pour que le test reste un vrai test, les solutions ne sont pas sur `main`. Une fois que tu as répondu, consulte `chapitres/03-composants-listes/solutions/test-rapide-solutions.md` sur la branche `solutions-ch3-phase2` (voir [Vérifier tes réponses](../../GETTING_STARTED.md#-vérifier-tes-réponses) pour y accéder).

---

**Prochaine étape :** Chapitre 4, où tes composants apprennent à se souvenir.
