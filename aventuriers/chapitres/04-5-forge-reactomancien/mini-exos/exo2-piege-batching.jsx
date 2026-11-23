import { useState } from "react";

// 🔬 Mini-exo 2 : le piège des mises à jour en série
// Durée : 10 min
//
// Mode d'emploi : affiche <Exo2 /> dans ton App. Pour CHAQUE bouton, prédis la valeur
// affichée après UN clic (en partant de la valeur affichée au moment du clic), puis clique.
//
// Questions :
//   (a) « +3 version A » : que devient le compteur ? Pourquoi ?
//   (b) « +3 version B » : et ici ? Qu'est-ce qui change dans l'écriture ?
//   (c) « Énigme » : combien après un clic ? Dépend-il de la valeur de départ ?
//   (d) Combien de fois le composant est-il rappelé par clic ? Compte les lignes de la
//       console, puis explique l'écart avec ce que tu attendais.

export default function Exo2() {
  console.log("rendu de Exo2");
  const [count, setCount] = useState(0);

  function addThreeA() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  function addThreeB() {
    setCount((current) => current + 1);
    setCount((current) => current + 1);
    setCount((current) => current + 1);
  }

  function riddle() {
    setCount(count + 1);
    setCount((current) => current * 2);
    setCount(7);
    setCount((current) => current + 1);
  }

  return (
    <div>
      <p>Compteur : {count}</p>
      <button type="button" onClick={addThreeA}>+3 version A</button>
      <button type="button" onClick={addThreeB}>+3 version B</button>
      <button type="button" onClick={riddle}>Énigme</button>
      <button type="button" onClick={() => setCount(0)}>Remettre à 0</button>
    </div>
  );
}
