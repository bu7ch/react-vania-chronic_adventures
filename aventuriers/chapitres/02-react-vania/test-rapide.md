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

**Total :** 120 pts

- ✅ 90+ : Tu as compris ! Va au Chapitre 3
- ⚠️ 75-89 : Bien, mais relis les sections sur le JSX
- ❌ < 75 : Relis tout le chapitre

---

## Solutions

Pour que le test reste un vrai test, les solutions ne sont pas sur `main`. Une fois que tu as répondu, consulte `chapitres/02-react-vania/solutions/test-rapide-solutions.md` sur la branche `solutions-ch2-phase2` (voir [Vérifier tes réponses](../../GETTING_STARTED.md#-vérifier-tes-réponses) pour y accéder).

---

**Prochaine étape :** Chapitre 3 : les composants deviennent réutilisables.
