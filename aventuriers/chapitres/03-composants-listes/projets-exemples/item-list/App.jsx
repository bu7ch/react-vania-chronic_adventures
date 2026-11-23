import Panel from "./Panel.jsx";
import ItemRow from "./ItemRow.jsx";

// 📚 Un tableau d'objets, chacun avec un `id` unique (la future `key`).
const items = [
  { id: 1, name: "Potion de soin", rarity: "commun", quantity: 3 },
  { id: 2, name: "Épée en fer", rarity: "commun" },
  { id: 3, name: "Anneau unique", rarity: "légendaire" },
  { id: 4, name: "Cape elfique", rarity: "rare" },
];

// On PRÉPARE la donnée avant le return (JavaScript normal) :
// filter renvoie un nouveau tableau, `items` reste intact.
const rareItems = items.filter((item) => item.rarity !== "commun");
const legendaryItems = items.filter((item) => item.rarity === "légendaire");

function App() {
  return (
    <>
      <h1>🎒 Inventaire de la taverne</h1>

      <Panel title="Tout l'inventaire">
        <ul>
          {items.map((item) => (
            <ItemRow
              key={item.id}
              name={item.name}
              rarity={item.rarity}
              quantity={item.quantity}
            />
          ))}
        </ul>
      </Panel>

      <Panel title="Objets rares et mieux">
        <ul>
          {rareItems.map((item) => (
            <ItemRow key={item.id} {...item} />
          ))}
        </ul>
      </Panel>

      <Panel title="Légendaires">
        {legendaryItems.length === 0 ? (
          <p className="subtitle">Aucun objet légendaire.</p>
        ) : (
          <ul>
            {legendaryItems.map((item) => (
              <ItemRow key={item.id} {...item} />
            ))}
          </ul>
        )}
      </Panel>
    </>
  );
}

export default App;
