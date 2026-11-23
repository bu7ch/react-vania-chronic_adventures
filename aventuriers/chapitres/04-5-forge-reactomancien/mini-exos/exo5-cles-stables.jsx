import { useState } from "react";

// 🔬 Mini-exo 5 : des clés stables, et la clé comme bouton de remise à zéro
// Durée : 10 min
//
// Partie 1 : le même scénario que l'exo 4, avec une clé stable (l'id du héros).
//   Tape « brave » dans la note d'Aragorn, clique sur « Renvoyer le premier ».
//   (Pour rejouer, recharge la page : l'état local est remis à zéro.)
//   Question (a) : quelle ligne reste, et que contient sa note ?
//
// Partie 2 : choisir un héros dans le menu affiche son formulaire. Écris quelque chose
//   dans le formulaire, puis change de héros.
//   Question (b) : le texte tapé est-il encore là ? Que se passe-t-il si tu retires la
//   prop `key` du composant <NoteForm> ? Et si tu la remets ?

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

function NoteForm({ heroName }) {
  const [text, setText] = useState("");

  return (
    <div>
      <p>Journal de {heroName}</p>
      <input
        aria-label="Journal"
        placeholder="Écris dans le journal..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
}

export default function Exo5() {
  const [heroes, setHeroes] = useState([
    { id: 1, name: "Aragorn" },
    { id: 2, name: "Gandalf" },
    { id: 3, name: "Legolas" },
  ]);
  const [selected, setSelected] = useState("Aragorn");

  return (
    <div>
      <h3>Partie 1 : clé = id</h3>
      <ul>
        {heroes.map((hero) => (
          <HeroRow key={hero.id} name={hero.name} /> // ✅ clé stable
        ))}
      </ul>
      <button type="button" onClick={() => setHeroes(heroes.slice(1))}>
        Renvoyer le premier
      </button>

      <h3>Partie 2 : la clé qui remet à zéro</h3>
      <select
        aria-label="Héros"
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
      >
        <option>Aragorn</option>
        <option>Gandalf</option>
        <option>Legolas</option>
      </select>
      {/* Essaie de retirer `key={selected}` puis de la remettre */}
      <NoteForm key={selected} heroName={selected} />
    </div>
  );
}
