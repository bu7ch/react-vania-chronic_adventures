import { useState } from "react";

// 🔬 Mini-exo 1 : qui est rappelé, et quand ?
// Durée : 5 min
//
// Mode d'emploi :
//   1. Affiche <Exo1 /> dans ton App et ouvre la console (F12).
//   2. AVANT de cliquer, note sur papier ce que tu t'attends à voir pour chaque bouton.
//   3. Clique, compare, puis consulte les réponses (voir « Réponses aux mini-exos » dans
//      le README du chapitre).
//
// Questions :
//   (a) Tu cliques sur « Parent ». Quels composants sont rappelés ?
//   (b) Tu cliques sur « A ». Quels composants sont rappelés ?
//   (c) Pourquoi chaque ligne s'affiche-t-elle DEUX fois dans la console, à chaque rendu ?

function Child({ label }) {
  console.log("    rendu de Child", label);
  const [clicks, setClicks] = useState(0);

  return (
    <button type="button" onClick={() => setClicks(clicks + 1)}>
      {label} : {clicks}
    </button>
  );
}

export default function Exo1() {
  console.log("rendu de Exo1");
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Parent : {count}
      </button>
      <Child label="A" />
      <Child label="B" />
    </div>
  );
}
