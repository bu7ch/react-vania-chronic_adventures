# Réponses aux mini-exos du Chapitre 4.5 : La forge du réactomancien

> ✋ Essaie d'abord. Prédire **avant** de lancer, c'est tout l'intérêt : ce chapitre ne marche que si tu t'es trompé au moins une fois.

<details>
<summary><strong>Exo 1</strong> : qui est rappelé, et quand ?</summary>

- **(a) Clic sur « Parent »** : `Exo1`, `Child A` **et** `Child B` sont rappelés. Les enfants sont rappelés parce que leur parent l'a été, pas parce que leurs props ont changé (elles n'ont pas changé).
- **(b) Clic sur « A »** : seul `Child A` est rappelé. Ni son parent ni `Child B` ne le sont.
- **(c) Chaque ligne apparaît deux fois**, à **chaque** rendu (un clic sur « Parent » affiche donc 6 lignes, pas 3), parce que `main.jsx` entoure l'application de `<StrictMode>`, qui, **en développement seulement**, appelle chaque composant deux fois pour vérifier qu'il est pur. En production, une fois.

Dans les cas (a) et (b), seul le **texte du bouton concerné** est modifié dans la page (tu peux le constater dans l'onglet « Éléments » des outils du navigateur, F12) : le reste du DOM n'est pas touché.
</details>

<details>
<summary><strong>Exo 2</strong> : le piège des mises à jour en série</summary>

- **(a) « +3 version A »** : le compteur monte de **1**, pas de 3. Les trois appels utilisent la même valeur de `count` (un instantané) et déposent trois fois « mets `count + 1` ».
- **(b) « +3 version B »** : monte de **3**. Chaque fonction `(current) => current + 1` reçoit le résultat de la précédente dans la file.
- **(c) « Énigme »** : **8**, quelle que soit la valeur de départ. La file est traitée dans l'ordre : `n + 1`, puis ce résultat est doublé, puis `7` **écrase** tout, puis `7 + 1 = 8`.
- **(d)** Un **seul** rendu par clic, même avec quatre appels. Dans la console, tu verras pourtant **deux** lignes par clic : c'est le doublement de `StrictMode` (en développement), un rendu appelé deux fois.
</details>

<details>
<summary><strong>Exo 3</strong> : la valeur périmée d'un minuteur</summary>

- **(a)** Compteur A : **1**. Compteur B : **3**.
- **(b)** Les trois fonctions de la version A ont été créées pendant le **même** rendu, où `countA` valait `0`. Une seconde plus tard, chacune dit « mets `0 + 1` » : on obtient `1`. C'est une fermeture périmée.
- **(c)** La version B passe une **fonction** à `setCountB` : elle lit la valeur à jour dans la file au moment de s'exécuter, donc les trois `+1` s'additionnent.
</details>

<details>
<summary><strong>Exo 4</strong> : le bug des clés</summary>

- **(a)** Il reste **Gandalf** en première ligne, avec la note « brave » dans son champ, alors que c'était la note d'Aragorn.
- **(b)** Avec `key={index}`, après le retrait de la première ligne, Gandalf passe de la clé `1` à la clé `0`. React voit « la clé `0` existait déjà » : il **réutilise l'instance** de la première ligne (avec son état local `note = "brave"`) et change seulement la prop `name`. L'état est attaché à la **clé**, pas au héros.
- **(c)** Voir l'exo 5.
</details>

<details>
<summary><strong>Exo 5</strong> : des clés stables, et la clé comme remise à zéro</summary>

- **(a)** Il reste **Gandalf**, avec une note **vide** (la note d'Aragorn a disparu avec lui). L'état suit le bon héros.
- **(b)** Avec `key={selected}`, le texte tapé **disparaît** quand tu changes de héros : la clé change, React détruit l'ancien formulaire et en crée un neuf (état vide). **Sans** la `key`, le texte tapé pour Aragorn **reste** dans le journal de Gandalf : c'est le même composant à la même place, donc son état est conservé même si la prop `heroName` change.
</details>

<details>
<summary><strong>Exo 6</strong> : l'ordre des hooks</summary>

- **(a)** Au clic, **toute l'interface disparaît** (page vide). La console affiche : `Rendered more hooks than during the previous render.` et `React has detected a change in the order of Hooks called by Panel...`. Le linter avait déjà signalé le `useState` conditionnel.
- **(b)** Au premier rendu, `Panel` appelle un hook (`title`). Au second, un de plus (`note`). React retrouve l'état par l'**ordre** des appels : le nombre et l'ordre ne correspondent plus, il ne peut pas aligner les cases et s'arrête.
- **(c)** Appeler **toujours** les deux `useState` en tête du composant, puis faire le `if (!open) return ...` **après** :

```jsx
function Panel({ open }) {
  const [title] = useState("Carnet d'aventure");
  const [note, setNote] = useState("");

  if (!open) return <p>{title} : fermé.</p>;

  return (
    <div>
      <p>{title}</p>
      <input value={note} onChange={(event) => setNote(event.target.value)} />
    </div>
  );
}
```
</details>
