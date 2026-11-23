// 📦 Panel : un cadre réutilisable. Il ne sait pas ce qu'il contient.
// Le contenu arrive par la prop spéciale `children`
// (tout ce qui est écrit ENTRE <Panel> et </Panel>).
function Panel({ title, children }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Panel;
