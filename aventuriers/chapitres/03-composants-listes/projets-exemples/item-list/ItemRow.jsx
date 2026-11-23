// 🎒 ItemRow : une ligne d'inventaire.
// `quantity = 1` : valeur par défaut si la prop est omise.
function ItemRow({ name, rarity, quantity = 1 }) {
  return (
    <li>
      {name} ×{quantity} <em>({rarity})</em>
    </li>
  );
}

export default ItemRow;
