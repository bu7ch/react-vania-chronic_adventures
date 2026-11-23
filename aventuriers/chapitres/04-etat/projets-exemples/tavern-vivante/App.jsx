import { useState } from "react";
import HeroGallery from "./HeroGallery.jsx";
import AddHeroForm from "./AddHeroForm.jsx";
import "./App.css";

// 📚 Les données de DÉPART. Elles ne changent jamais : c'est l'état qui évolue.
const initialHeroes = [
  { id: 1, name: "Aragorn", title: "Rôdeur du Nord", level: 5, health: 25, maxHealth: 100, emoji: "⚔️" },
  { id: 2, name: "Gandalf", title: "Mage gris", level: 10, health: 90, maxHealth: 100, emoji: "🔮" },
  { id: 3, name: "Legolas", title: "Archer elfe", level: 7, health: 70, maxHealth: 80, emoji: "🏹" },
];

function App() {
  // 🧠 L'ÉTAT : la liste des héros, avec leur santé du moment.
  // `heroes` = la valeur actuelle. `setHeroes` = la fonction pour la remplacer.
  const [heroes, setHeroes] = useState(initialHeroes);

  // Chaque fonction ci-dessous CRÉE un nouveau tableau (jamais de modification en place),
  // puis le donne à `setHeroes`. React redessine alors la page.

  function changeHealth(id, delta) {
    // On passe une FONCTION à setHeroes quand le nouvel état dépend de l'ancien :
    // `current` est toujours la version la plus à jour du tableau.
    setHeroes((current) =>
      current.map((hero) =>
        hero.id === id
          ? { ...hero, health: Math.min(hero.maxHealth, Math.max(0, hero.health + delta)) }
          : hero
      )
    );
  }

  function addHero(name) {
    setHeroes((current) => {
      const nextId = Math.max(0, ...current.map((hero) => hero.id)) + 1;
      const newHero = {
        id: nextId,
        name,
        title: "Nouvel aventurier",
        level: 1,
        health: 50,
        maxHealth: 50,
        emoji: "🧑",
      };
      return [...current, newHero];
    });
  }

  function removeHero(id) {
    setHeroes((current) => current.filter((hero) => hero.id !== id));
  }

  function resetAll() {
    setHeroes(initialHeroes);
  }

  // 🧮 Valeur DÉRIVÉE : on la calcule à chaque rendu, on ne la stocke pas dans un état.
  const aliveCount = heroes.filter((hero) => hero.health > 0).length;

  return (
    <>
      <header>
        <h1>🍺 La Taverne de React-vania</h1>
        <p className="subtitle">
          {aliveCount} aventurier{aliveCount > 1 ? "s" : ""} en état de se battre sur {heroes.length}.
        </p>
      </header>

      <AddHeroForm onAdd={addHero} />

      <HeroGallery
        heroes={heroes}
        onChangeHealth={changeHealth}
        onRemove={removeHero}
      />

      <button type="button" onClick={resetAll}>
        Réinitialiser la taverne
      </button>
    </>
  );
}

export default App;
