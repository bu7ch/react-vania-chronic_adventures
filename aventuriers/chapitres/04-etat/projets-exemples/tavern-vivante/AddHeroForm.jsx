import { useState } from "react";

// Ce composant a SON PROPRE état : le texte en cours de saisie.
// Personne d'autre n'a besoin de le connaître : on le garde donc ici (« état local »).
// Seul le résultat final (le nom validé) remonte au parent, via la prop `onAdd`.
function AddHeroForm({ onAdd }) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    // Sans cette ligne, le navigateur rechargerait toute la page à l'envoi du formulaire.
    event.preventDefault();

    const cleanName = name.trim();
    if (cleanName === "") return; // on n'ajoute pas un aventurier sans nom

    onAdd(cleanName);
    setName(""); // on vide le champ
  }

  return (
    <form onSubmit={handleSubmit} className="card add-hero-form">
      <label htmlFor="hero-name">Nouvel aventurier</label>
      {/* Champ « contrôlé » : sa valeur vient de l'état, et chaque frappe met l'état à jour. */}
      <input
        id="hero-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Nom du héros"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddHeroForm;
