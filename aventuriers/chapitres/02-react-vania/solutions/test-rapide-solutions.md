# Solutions du test rapide du Chapitre 2 : Bienvenue à React-vania

> ✋ Ne lis ce fichier qu'**après** avoir passé le [test rapide](../test-rapide.md). Le barème est dans le test lui-même.

## Réponses

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
