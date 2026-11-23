# Solutions du test rapide du Chapitre 3 : Les Composants et les Listes

> ✋ Ne lis ce fichier qu'**après** avoir passé le [test rapide](../test-rapide.md). Le barème est dans le test lui-même.

## Réponses

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
