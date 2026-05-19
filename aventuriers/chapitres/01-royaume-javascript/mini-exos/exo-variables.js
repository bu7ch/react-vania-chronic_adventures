// 🎮 Mini-exo : Comprendre const vs let
// Durée : 5-10 min

// ============================================
// Exercice 1 : const ne peut pas être réassignée
// ============================================

console.log("=== Exercice 1 : const ===");

const x = 5;
console.log("x = " + x);  // 5

// Essaye de changer x
try {
  x = 10;  // ❌ Ça va crasher
  console.log("x = " + x);
} catch (e) {
  console.log("❌ Erreur : " + e.message);
}

// ============================================
// Exercice 2 : let peut être réassignée
// ============================================

console.log("\n=== Exercice 2 : let ===");

let y = 5;
console.log("y = " + y);  // 5

y = 10;  // ✅ Ça marche
console.log("y = " + y);  // 10

y = y + 5;  // ✅ Ça marche aussi
console.log("y = " + y);  // 15

// ============================================
// Exercice 3 : const + objet
// ============================================

console.log("\n=== Exercice 3 : const + objet ===");

const hero = { name: "Aragorn", health: 100 };
console.log("hero.health = " + hero.health);  // 100

// On peut modifier la propriété
hero.health = 75;
console.log("hero.health = " + hero.health);  // 75 ✅

// Mais on ne peut pas réassigner l'objet lui-même
try {
  hero = { name: "Elsa" };  // ❌ Ça va crasher
} catch (e) {
  console.log("❌ Erreur : " + e.message);
}

// ============================================
// Exercice 4 : Scope (visibilité)
// ============================================

console.log("\n=== Exercice 4 : Scope ===");

const globalVar = "Je suis global";

{
  const blockVar = "Je suis dans ce bloc";
  console.log("Inside : " + blockVar);  // Marche
}

// console.log(blockVar);  // ❌ Erreur : blockVar n'existe que dans le bloc

console.log("\n=== À toi de réfléchir ===");
console.log("Pourquoi utiliser const par défaut ?");
console.log("Réponse : Ça force à penser à tes valeurs, évite les bugs.");