import HeroCard from "./HeroCard.jsx";

// HeroGallery ne possède AUCUN état : elle reçoit la liste et les fonctions d'action
// par ses props, et les transmet à chaque carte.
function HeroGallery({ heroes, onChangeHealth, onRemove }) {
  if (heroes.length === 0) {
    return <p className="subtitle">La taverne est vide. Ajoute un aventurier !</p>;
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
          emoji={hero.emoji}
          onHit={() => onChangeHealth(hero.id, -20)}
          onHeal={() => onChangeHealth(hero.id, 20)}
          onRemove={() => onRemove(hero.id)}
        />
      ))}
    </section>
  );
}

export default HeroGallery;
