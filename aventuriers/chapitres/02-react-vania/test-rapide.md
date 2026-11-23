# ✅ Test rapide du Chapitre 2

Fais ce test pour vérifier que tu as **vraiment** compris le Chapitre 2.

Temps : 15-20 min
Difficultés : Facile → Moyen → Difficile

Pas de copier-coller dans ton projet avant d'avoir répondu : essaie de **prédire** d'abord.

---

## Question 1 (Facile) : La majuscule

```jsx
function heroCard() {
  return <p>Aragorn</p>;
}

function App() {
  return <heroCard />;
}
```

Qu'affiche la page ?

**A)** « Aragorn »
**B)** Rien : React traite `heroCard` comme une balise HTML inconnue et ne l'appelle pas
**C)** Une erreur qui bloque toute la page

---

## Question 2 (Facile) : Un seul parent

Laquelle de ces fonctions est valide ?

```jsx
// A
function Sheet() {
  return (
    <h2>Aragorn</h2>
    <p>Niveau 5</p>
  );
}

// B
function Sheet() {
  return (
    <>
      <h2>Aragorn</h2>
      <p>Niveau 5</p>
    </>
  );
}

// C
function Sheet() {
  return (
    <div>
      <img src="/hero.png" alt="Aragorn">
    </div>
  );
}
```

**A)** A
**B)** B
**C)** C

---

## Question 3 (Facile) : Les accolades

```jsx
const hero = { name: "Aragorn", level: 5 };

function Sheet() {
  return <p>Niveau {hero.level + 1}</p>;
}
```

Que montre la page ?

**A)** `Niveau {hero.level + 1}` (le texte tel quel)
**B)** `Niveau 51`
**C)** `Niveau 6`

---

## Question 4 (Moyen) : Le piège du `&&`

```jsx
const potions = 0;

function Inventory() {
  return <div>{potions && <p>Tu as des potions</p>}</div>;
}
```

Que montre la page ?

**A)** Rien du tout
**B)** « Tu as des potions »
**C)** Un « 0 »

---

## Question 5 (Moyen) : Le style

Laquelle de ces écritures est correcte pour une barre large de 50 % ?

**A)** `<div style="width: 50%" />`
**B)** `<div style={{ width: "50%" }} />`
**C)** `<div style={{ width: 50% }} />`

---

## Question 6 (Difficile) : Réflexion

Tu as ce composant, qui affiche Aragorn :

```jsx
const hero = { name: "Aragorn", health: 25 };

function HeroSheet() {
  return <p>{hero.name} : {hero.health} PV</p>;
}
```

Tu veux afficher Aragorn **et** Gandalf sur la même page, avec un seul composant `HeroSheet` réutilisé deux fois.

**Pourquoi est-ce impossible avec ce que tu connais ? Que manque-t-il au composant ?**

**A)** Il faut écrire `HeroSheet` en minuscule pour pouvoir l'utiliser deux fois
**B)** Un composant ne peut être utilisé qu'une seule fois par page
**C)** Le composant lit un objet global fixe : il n'a aucun moyen de **recevoir** le héros à afficher depuis l'extérieur

---

## 🎯 Défi bonus : le badge d'état

Écris un composant `StatusBadge` qui renvoie un `<span>` affichant :

- `💀 K.O.` si la santé du héros vaut `0` ;
- `🩹 Blessé` si elle est strictement inférieure à `50` ;
- `💪 En forme` sinon.

Tu utilises l'objet global `hero` (avec `hero.health`). Il y a **trois** cas, alors qu'un ternaire simple n'en gère que deux. À toi de trouver comment faire.

**Tes contraintes :**

- Pas de `if` dans les accolades du JSX.
- Un seul `return`.

**Code de test :** change `hero.health` à `0`, `30` et `80` et vérifie les trois affichages.

---

## Scoring

- **Questions 1-2 :** 10 pts chacune (basique)
- **Questions 3-5 :** 15 pts chacune (intermédiaire)
- **Question 6 :** 25 pts (réflexion)
- **Défi bonus :** 30 pts (complet)

**Total :** 130 pts

- ✅ 100+ : Tu as compris ! Va au Chapitre 3
- ⚠️ 80-100 : Bien, mais relis les sections sur le JSX
- ❌ < 80 : Relis tout le chapitre

---

## Solutions

### Q1 : B
Avec une minuscule, React croit à une balise HTML (`<heroCard>`) et n'appelle pas ta fonction. La page n'affiche rien et la console prévient : « `<heroCard />` is using incorrect casing ». Ce n'est pas une erreur bloquante.

### Q2 : B
A a deux éléments côte à côte sans parent. C a une balise `<img>` qui n'est pas fermée (`<img ... />` est obligatoire en JSX).

### Q3 : C
Les accolades ouvrent une fenêtre JavaScript : `hero.level + 1` est calculé (5 + 1 = 6). Pas de concaténation de texte, car `5 + 1` entre accolades est une addition de nombres.

### Q4 : C
`0 && ...` vaut `0` (la valeur de gauche, car elle est « falsy »), et React sait afficher le nombre `0`. Pour éviter ça : `{potions > 0 && <p>...</p>}`.

### Q5 : B
`style` prend un **objet**. A (une chaîne) fait planter React, C est une erreur de syntaxe (`50%` n'est pas valide en JavaScript).

### Q6 : C
Le composant lit toujours le même objet global, il ne peut pas recevoir d'information de l'extérieur. La solution s'appelle les **props** : tu les découvres au Chapitre 3.

### Défi bonus

```jsx
function StatusBadge() {
  let label = "💪 En forme";

  if (hero.health === 0) {
    label = "💀 K.O.";
  } else if (hero.health < 50) {
    label = "🩹 Blessé";
  }

  return <span>{label}</span>;
}
```

Astuce : tu as le droit d'utiliser `if` **avant** le `return`, là où on est en JavaScript « normal ». Seul l'intérieur du JSX interdit les instructions. On calcule donc la valeur d'abord, puis on l'affiche avec `{label}`.

Variante avec des ternaires imbriqués (plus compacte, moins lisible) :

```jsx
function StatusBadge() {
  return (
    <span>
      {hero.health === 0 ? "💀 K.O." : hero.health < 50 ? "🩹 Blessé" : "💪 En forme"}
    </span>
  );
}
```

---

**Prochaine étape :** Chapitre 3 : les composants deviennent réutilisables.
