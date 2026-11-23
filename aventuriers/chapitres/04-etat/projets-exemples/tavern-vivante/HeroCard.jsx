// HeroCard : toujours un composant « sans mémoire ». Il affiche ce qu'on lui donne
// et PRÉVIENT son parent quand l'utilisateur clique, en appelant les fonctions reçues.
//
// Les props `onHit`, `onHeal`, `onRemove` sont des FONCTIONS. Par convention,
// une prop qui contient un gestionnaire d'événement commence par `on`.
function HeroCard({ name, title, level, health, maxHealth, emoji, onHit, onHeal, onRemove }) {
  const percent = Math.round((health / maxHealth) * 100);
  const isKo = health === 0;

  return (
    <article className={isKo ? "card hero-card ko" : "card hero-card"}>
      <h2>
        {emoji} {name} {isKo && "💀"}
      </h2>
      <p className="subtitle">
        {title} · Niveau {level}
      </p>

      <p>
        Santé : {health} / {maxHealth}
      </p>
      <div className="bar">
        <div className="bar-fill" style={{ width: `${percent}%` }} />
      </div>

      {isKo && <p className="warning">K.O. : il faut le soigner !</p>}

      <div className="actions">
        {/* onClick reçoit une FONCTION (pas un appel) : React l'appellera au clic. */}
        <button type="button" onClick={onHit} disabled={isKo}>
          Blesser (−20)
        </button>
        <button type="button" onClick={onHeal} disabled={health === maxHealth}>
          Soigner (+20)
        </button>
        <button type="button" onClick={onRemove}>
          Renvoyer
        </button>
      </div>
    </article>
  );
}

export default HeroCard;
