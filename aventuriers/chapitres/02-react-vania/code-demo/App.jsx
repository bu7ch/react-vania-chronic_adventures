// 🍺 La Taverne de React-vania — démo complète du Chapitre 2
//
// À copier dans src/App.jsx (avec code-demo/index.css dans src/index.css).
// Tout ce fichier utilise UNIQUEMENT ce que tu as vu aux chapitres 1 et 2 :
// un objet, des fonctions, du JSX. Pas de props, pas d'état, pas de liste : ça arrive après.

// --- Les données : une fiche de personnage (Chapitre 1 !) ---
const hero = {
  name: "Aragorn",
  title: "Rôdeur du Nord",
  level: 5,
  health: 25,
  maxHealth: 100,
  weapon: "Anduril",
};

// --- Composant 1 : l'en-tête ---
function Header() {
  return (
    <header>
      <h1>🍺 La Taverne de React-vania</h1>
      <p className="subtitle">Ici, chaque aventurier laisse sa fiche.</p>
    </header>
  );
}

// --- Composant 2 : la fiche du héros ---
function HeroSheet() {
  const healthPercent = (hero.health / hero.maxHealth) * 100;

  return (
    <section className="card">
      <h2>
        {hero.name}, {hero.title}
      </h2>

      <p>
        Niveau {hero.level} · Arme : {hero.weapon}
      </p>

      <p>
        Santé : {hero.health} / {hero.maxHealth}
      </p>

      {/* Une barre dont la largeur dépend des données : style={{ ... }} */}
      <div className="bar">
        <div className="bar-fill" style={{ width: `${healthPercent}%` }} />
      </div>

      {/* Un ternaire : on choisit entre DEUX affichages */}
      <p>État : {healthPercent > 50 ? "En pleine forme 💪" : "Blessé 🩹"}</p>

      {/* && : on affiche quelque chose OU rien du tout */}
      {healthPercent <= 30 && (
        <p className="warning">⚠️ Santé critique ! Va voir le guérisseur.</p>
      )}
    </section>
  );
}

// --- Composant 3 : le pied de page ---
function Footer() {
  return (
    <footer>
      <p>Taverne de React-vania — ouverte jour et nuit</p>
    </footer>
  );
}

// --- Le composant racine : il assemble les autres ---
// Les <>...</> sont un « Fragment » : un parent invisible (le JSX exige UN seul parent).
function App() {
  return (
    <>
      <Header />
      <HeroSheet />
      <Footer />
    </>
  );
}

export default App;
