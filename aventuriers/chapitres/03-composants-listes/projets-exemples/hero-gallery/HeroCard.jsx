// 🛡️ HeroCard : UN composant, autant de héros que tu veux.
//
// Tout ce que le composant affiche arrive par ses PROPS : un objet que React
// lui passe en paramètre. On le déplie directement dans la signature (Chapitre 1 !).

// Un petit composant utilitaire, lui aussi alimenté par des props.
function StatBar({ label, value, max }) {
  const percent = Math.round((value / max) * 100);

  return (
    <div>
      <p>
        {label} : {value} / {max}
      </p>
      <div className="bar">
        <div className="bar-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

// `weapon = "Poings"` : valeur par défaut si la prop n'est pas fournie.
function HeroCard({ name, title, level, health, maxHealth, weapon = "Poings", emoji }) {
  const isCritical = health / maxHealth <= 0.3;

  return (
    <article className="card hero-card">
      <h2>
        {emoji} {name}
      </h2>
      <p className="subtitle">
        {title} · Niveau {level} · {weapon}
      </p>

      <StatBar label="Santé" value={health} max={maxHealth} />

      {isCritical && <p className="warning">⚠️ Santé critique !</p>}
    </article>
  );
}

export default HeroCard;
