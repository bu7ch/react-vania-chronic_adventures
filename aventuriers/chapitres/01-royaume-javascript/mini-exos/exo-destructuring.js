// 🎮 Mini-exo : Comprendre le destructuring
// Durée : 5-10 min
//
// Mode d'emploi : lance `node exo-destructuring.js`.
// Les exercices 1 à 3 sont des exemples à lire. Les exercices 4 à 7 sont à TOI :
// remplace chaque `// TODO` par ton code, relance, et vise une série de ✅.

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log((ok ? "✅ " : "❌ ") + label + (ok ? "" : " → obtenu : " + JSON.stringify(actual)));
}

// ============================================
// Exercice 1 (exemple) : Extraire des propriétés
// ============================================

console.log("=== Exercice 1 : Extraire ===");

const hero = { name: "Aragorn", health: 100, level: 5 };

// Sans destructuring
const nameLong = hero.name;
const healthLong = hero.health;

// Avec destructuring : même résultat, une seule ligne
const { name, health } = hero;

console.log(nameLong, healthLong); // Aragorn 100
console.log(name, health);         // Aragorn 100

// ============================================
// Exercice 2 (exemple) : Renommer et valeur par défaut
// ============================================

console.log("\n=== Exercice 2 : Renommer + défaut ===");

const mage = { name: "Gandalf", mana: 200 };

// `mana: power` → lit `mana`, crée une variable nommée `power`
// `level = 1`   → si `level` n'existe pas dans l'objet, on prend 1
const { mana: power, level = 1 } = mage;

console.log(power); // 200
console.log(level); // 1 (valeur par défaut, car mage n'a pas de level)

// ============================================
// Exercice 3 (exemple) : Dans les paramètres d'une fonction
// ============================================

console.log("\n=== Exercice 3 : Dans les paramètres ===");

// C'est LA forme que tu verras tout le temps en React (les props)
function describe({ name, health }) {
  return `${name} : ${health} PV`;
}

console.log(describe(hero)); // Aragorn : 100 PV

// ============================================
// Exercice 4 (à toi) : Extraire deux propriétés
// ============================================

console.log("\n=== Exercice 4 : À toi ===");

// Dans le corps de la fonction, extrais `weapon` et `level` de `warrior`
// en UNE seule ligne : const { ..., ... } = warrior;
// puis renvoie-les dans un tableau : return [weapon, level];
function exercice4(warrior) {
  // TODO
}

check("exercice4 renvoie ['épée', 3]", exercice4({ name: "Boromir", level: 3, weapon: "épée" }), ["épée", 3]);

// ============================================
// Exercice 5 (à toi) : Renommer
// ============================================

console.log("\n=== Exercice 5 : Renommer ===");

// Extrais `name` de `archer` MAIS stocke-le dans une variable appelée `archerName`
// (indice : `{ name: archerName }`), puis renvoie `archerName`.
function exercice5(archer) {
  // TODO
}

check("exercice5 renvoie 'Legolas'", exercice5({ name: "Legolas", health: 70 }), "Legolas");

// ============================================
// Exercice 6 (à toi) : Valeur par défaut
// ============================================

console.log("\n=== Exercice 6 : Valeur par défaut ===");

// Extrais `health` de `character` avec la valeur par défaut 50
// (indice : `{ health = 50 }`), puis renvoie-la.
function exercice6(character) {
  // TODO
}

check("exercice6({ name: 'Bilbon' }) renvoie 50", exercice6({ name: "Bilbon" }), 50);
check("exercice6({ health: 90 }) renvoie 90", exercice6({ health: 90 }), 90);

// ============================================
// Exercice 7 (à toi) : Dans les paramètres
// ============================================

console.log("\n=== Exercice 7 : Dans les paramètres ===");

// Réécris `heal` pour déplier `health` directement dans la signature,
// et renvoyer Math.min(100, health + 20).
// Aujourd'hui elle ressemble à ça :
//   function heal(hero) { return Math.min(100, hero.health + 20); }
function heal() {
  // TODO : remplace `()` par `({ health })` et écris le return
}

check("heal({ health: 85 }) renvoie 100", heal({ health: 85 }), 100);
check("heal({ health: 40 }) renvoie 60", heal({ health: 40 }), 60);

// ============================================
// Bonus : Et si l'objet est imbriqué ?
// ============================================
//
// const complexHero = { name: "Gandalf", stats: { health: 100, mana: 200 } };
// const { stats: { mana } } = complexHero;   // mana vaut 200
//
// Pratique, mais ne va pas plus loin que deux niveaux : au-delà, ça devient illisible.
