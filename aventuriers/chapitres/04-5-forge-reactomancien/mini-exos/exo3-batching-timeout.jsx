import { useState } from "react";

// 🔬 Mini-exo 3 : la valeur périmée d'un minuteur
// Durée : 10 min
//
// `setTimeout(fonction, 1000)` exécute la fonction UNE SECONDE plus tard.
//
// Mode d'emploi : affiche <Exo3 /> dans ton App. Clique TROIS FOIS RAPIDEMENT (en moins
// d'une seconde) sur « Version A », attends 2 secondes, note la valeur. Puis fais pareil
// avec « Version B ».
//
// Questions :
//   (a) Que valent les compteurs A et B après leurs trois clics ? Prédis, puis vérifie.
//   (b) Pourquoi la version A se trompe-t-elle ? (Souviens-toi : l'état est un instantané.)
//   (c) Quelle est la différence d'écriture entre A et B ?

export default function Exo3() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  function plusOneLaterA() {
    setTimeout(() => {
      setCountA(countA + 1);
    }, 1000);
  }

  function plusOneLaterB() {
    setTimeout(() => {
      setCountB((current) => current + 1);
    }, 1000);
  }

  return (
    <div>
      <p>Compteur A : {countA}</p>
      <button type="button" onClick={plusOneLaterA}>Version A (+1 dans 1 s)</button>
      <p>Compteur B : {countB}</p>
      <button type="button" onClick={plusOneLaterB}>Version B (+1 dans 1 s)</button>
    </div>
  );
}
