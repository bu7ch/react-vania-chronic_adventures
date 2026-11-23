import HeroGallery from "./HeroGallery.jsx";
import "./App.css";

// 📚 Les données : un TABLEAU d'objets (Chapitre 1), chacun avec un `id` unique.
const heroes = [
  {
    id: 1,
    name: "Aragorn",
    title: "Rôdeur du Nord",
    level: 5,
    health: 25,
    maxHealth: 100,
    weapon: "Anduril",
    emoji: "⚔️",
  },
  {
    id: 2,
    name: "Gandalf",
    title: "Mage gris",
    level: 10,
    health: 90,
    maxHealth: 100,
    weapon: "Glamdring",
    emoji: "🔮",
  },
  {
    id: 3,
    name: "Legolas",
    title: "Archer elfe",
    level: 7,
    health: 70,
    maxHealth: 80,
    emoji: "🏹", // pas d'arme : HeroCard utilisera la valeur par défaut
  },
];

function App() {
  return (
    <>
      <header>
        <h1>🍺 La Taverne de React-vania</h1>
        <p className="subtitle">{heroes.length} aventuriers ce soir.</p>
      </header>

      <HeroGallery heroes={heroes} />
    </>
  );
}

export default App;
