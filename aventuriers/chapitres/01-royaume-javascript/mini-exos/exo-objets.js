// 🎮 Mini-exo : Comprendre les objets
// Durée : 5-10 min

// ============================================
// Exercice 1 : Créer un objet simple
// ============================================

console.log("=== Exercice 1 : Créer un objet ===");

const hero = {
  name: "Aragorn",
  health: 100,
  level: 5
};

console.log(hero);
console.log("Nom : " + hero.name);
console.log("Santé : " + hero.health);

// ============================================
// Exercice 2 : Accéder aux propriétés
// ============================================

console.log("\n=== Exercice 2 : Accès ===");

// Deux façons
console.log("Façon 1 (point) : " + hero.name);
console.log("Façon 2 (bracket) : " + hero["name"]);

// ============================================
// Exercice 3 : Modifier les propriétés
// ============================================

console.log("\n=== Exercice 3 : Modifier ===");

hero.health = 75;
console.log("Nouvelle santé : " + hero.health);

// Ajouter une propriété
hero.mana = 50;
console.log("Mana ajouté : " + hero.mana);

// Supprimer une propriété
delete hero.mana;
console.log("Mana après suppression : " + hero.mana);  // undefined

// ============================================
// Exercice 4 : Vérifier l'existence
// ============================================

console.log("\n=== Exercice 4 : Vérifier l'existence ===");

if (hero.health !== undefined) {
  console.log("✅ Le héros a une santé");
}

if (hero.mana === undefined) {
  console.log("❌ Le héros n'a pas de mana");
}

// Meilleure façon : in
if ("health" in hero) {
  console.log("✅ La propriété 'health' existe");
}

// ============================================
// Exercice 5 : Parcourir les propriétés
// ============================================

console.log("\n=== Exercice 5 : Parcourir ===");

for (const key in hero) {
  console.log(key + " : " + hero[key]);
}

// ============================================
// Exercice 6 : Objet dans un objet
// ============================================

console.log("\n=== Exercice 6 : Objet imbriqué ===");

const complexHero = {
  name: "Gandalf",
  stats: {
    health: 100,
    mana: 200,
    level: 10
  }
};

console.log("Nom : " + complexHero.name);
console.log("Mana : " + complexHero.stats.mana);  // Accès imbriqué