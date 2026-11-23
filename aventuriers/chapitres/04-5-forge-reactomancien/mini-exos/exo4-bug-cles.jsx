import { useState } from "react";

// 🔬 Mini-exo 4 : le bug des clés
// Durée : 10 min
//
// Chaque ligne a SA PROPRE note (un petit état local). Mais ici, la `key` est l'indice
// du tableau. Regarde ce que ça provoque.
//
// Mode d'emploi :
//   1. Affiche <Exo4 /> dans ton App.
//   2. Tape « brave » dans la note de la ligne d'Aragorn.
//   3. Clique sur « Renvoyer le premier ». (Pour rejouer, recharge la page : l'état local
//      est remis à zéro.)
//
// Questions :
//   (a) Quelle ligne reste ? Que contient sa note ? Pourquoi cela te choque-t-il ?
//   (b) Explique le phénomène avec les mots « instance », « clé » et « état local ».
//   (c) Corrige-le dans l'exo 5.

function HeroRow({ name }) {
  const [note, setNote] = useState("");

  return (
    <li>
      <strong>{name}</strong>{" "}
      <input
        aria-label={`Note pour ${name}`}
        placeholder="Une note..."
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />
    </li>
  );
}

export default function Exo4() {
  const [heroes, setHeroes] = useState([
    { id: 1, name: "Aragorn" },
    { id: 2, name: "Gandalf" },
    { id: 3, name: "Legolas" },
  ]);

  return (
    <div>
      <ul>
        {heroes.map((hero, index) => (
          <HeroRow key={index} name={hero.name} /> // ❌ clé = indice
        ))}
      </ul>
      <button type="button" onClick={() => setHeroes(heroes.slice(1))}>
        Renvoyer le premier
      </button>
    </div>
  );
}
