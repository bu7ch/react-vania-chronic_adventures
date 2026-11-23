import { useState } from "react";

// 🔬 Mini-exo 6 : l'ordre des hooks
// Durée : 10 min
//
// Ce composant est CASSÉ volontairement.
//
// Mode d'emploi :
//   1. Affiche <Exo6 /> dans ton App. Lance `npm run lint` dans le terminal : le linter
//      signale déjà le problème avant même d'ouvrir la page.
//   2. Clique sur « Ouvrir le carnet ». Observe la console.
//
// Questions :
//   (a) Que se passe-t-il à l'écran ? Quels sont les deux messages de la console ?
//   (b) Pourquoi React ne peut-il pas s'en sortir ? (Relis la section « Forge ton useState ».)
//   (c) Corrige le composant SANS changer son comportement visible : le carnet ne
//       doit apparaître qu'une fois ouvert.

function Panel({ open }) {
  const [title] = useState("Carnet d'aventure"); // ✅ un premier hook, toujours appelé

  if (open) {
    const [note, setNote] = useState(""); // ❌ un hook DANS une condition

    return (
      <div>
        <p>{title}</p>
        <input
          aria-label="Carnet"
          placeholder="Écris dans le carnet..."
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
      </div>
    );
  }

  return <p>{title} : fermé.</p>;
}

export default function Exo6() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        Ouvrir le carnet
      </button>
      <Panel open={open} />
    </div>
  );
}
