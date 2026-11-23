// 🔧 Forge ton propre useState : une vingtaine de lignes de JavaScript pur.
// À lancer avec :  node mini-react.js
//
// Ce n'est PAS le vrai code de React (il est bien plus riche), mais le principe est le
// même : React range l'état de ton composant dans une liste de « cases », et il retrouve
// chaque case grâce à l'ORDRE dans lequel tu appelles les hooks.
//
// Elle est volontairement très simplifiée : elle rappelle render() tout de suite à chaque
// setState (le vrai React regroupe les demandes dans une file d'attente), ne gère pas
// setX((current) => ...) et range l'état dans un tableau global pour UN seul composant
// (le vrai React le range par instance de composant).

let slots = [];   // la mémoire : une « case » par appel de useState, dans l'ordre
let cursor = 0;   // la case qu'on est en train de lire

function useState(initial) {
  const i = cursor;                          // la case de CET appel
  if (slots[i] === undefined) slots[i] = initial;
  const setState = (value) => {
    slots[i] = value;                        // on range la nouvelle valeur dans la case...
    render();                                // ...et on rappelle le composant
  };
  cursor++;                                  // le prochain useState lira la case suivante
  return [slots[i], setState];
}

let component;
function render() {
  cursor = 0;                                // avant chaque appel, on revient à la première case
  component();
}

// ============================================
// 1. Un composant qui respecte l'ordre
// ============================================

let setHealth;
function Hero() {
  const [health, _setHealth] = useState(100);   // case 0
  const [name] = useState("Aragorn");           // case 1
  setHealth = _setHealth;
  console.log(`${name} : ${health} PV`);
}

component = Hero;
render();        // Aragorn : 100 PV
setHealth(70);   // Aragorn : 70 PV   (la case 0 est mise à jour, puis Hero est rappelé)
setHealth(40);   // Aragorn : 40 PV

// ============================================
// 2. Et si on casse l'ordre des appels ?
// ============================================

slots = [];
let showBonus = false;

function Broken() {
  if (showBonus) useState("bonus");              // ❌ appelé seulement parfois
  const [name] = useState("Aragorn");
  const [health] = useState(100);
  console.log(`${name} : ${health} PV`);
}

component = Broken;
render();          // Aragorn : 100 PV     (cases : ["Aragorn", 100])
showBonus = true;
render();          // 100 : 100 PV         ← le nom a pris la valeur de la santé : tout est décalé !
