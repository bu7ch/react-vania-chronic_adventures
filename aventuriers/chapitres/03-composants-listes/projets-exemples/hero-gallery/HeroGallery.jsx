import HeroCard from "./HeroCard.jsx";

// 🖼️ HeroGallery : reçoit un TABLEAU de héros et fabrique une carte par héros.
//
// `.map()` transforme chaque héros (un objet) en un élément JSX (une carte).
// `key` aide React à reconnaître chaque carte d'un rendu à l'autre : elle doit être
// UNIQUE parmi ses frères et STABLE (un id, jamais un nombre aléatoire).
function HeroGallery({ heroes }) {
  if (heroes.length === 0) {
    return <p className="subtitle">La taverne est vide. Aucun aventurier ce soir.</p>;
  }

  return (
    <section className="gallery">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          name={hero.name}
          title={hero.title}
          level={hero.level}
          health={hero.health}
          maxHealth={hero.maxHealth}
          weapon={hero.weapon}
          emoji={hero.emoji}
        />
      ))}
    </section>
  );
}

export default HeroGallery;
