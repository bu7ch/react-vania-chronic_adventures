// 🎮 Mini-exo : Comprendre les fonctions
// Durée : 5-10 min

// ============================================
// Exercice 1 : Fonction simple
// ============================================

console.log("=== Exercice 1 : Fonction simple ===");

function greet(name) {
  console.log("Bonjour, " + name + " !");
}

greet("Aragorn");  // Bonjour, Aragorn !
greet("Elsa");     // Bonjour, Elsa !

// ============================================
// Exercice 2 : Retour (return)
// ============================================

console.log("\n=== Exercice 2 : Return ===");

function add(a, b) {
  return a + b;
}

const result = add(5, 10);
console.log("5 + 10 = " + result);  // 15

// ============================================
// Exercice 3 : Arrow functions
// ============================================

console.log("\n=== Exercice 3 : Arrow functions ===");

// Normale
const multiply = function(a, b) {
  return a * b;
};

// Arrow
const multiply2 = (a, b) => {
  return a * b;
};

// Ultra-courte (une ligne)
const multiply3 = (a, b) => a * b;

console.log("5 * 10 = " + multiply3(5, 10));  // 50

// ============================================
// Exercice 4 : Fonction avec objet
// ============================================

console.log("\n=== Exercice 4 : Fonction + objet ===");

const hero = {
  name: "Aragorn",
  health: 100,
  takeDamage: function(damage) {
    this.health -= damage;
    return this.health;
  }
};

console.log("Avant : " + hero.health);
const remaining = hero.takeDamage(20);
console.log("Après : " + remaining);

// ============================================
// Exercice 5 : Callback
// ============================================

console.log("\n=== Exercice 5 : Callback ===");

function executeAction(action, name) {
  console.log("Exécution de " + name + "...");
  action();  // Appelle la fonction passée
}

executeAction(
  () => console.log("🔥 Boule de feu !"),
  "Spell"
);

// ============================================
// Exercice 6 : Différence entre return et console.log
// ============================================

console.log("\n=== Exercice 6 : Return vs console.log ===");

// Mauvais : affiche seulement
function badAttack() {
  const damage = 20;
  console.log("Dégâts : " + damage);
  // Pas de return !
}

// Bon : retourne la valeur
function goodAttack() {
  const damage = 20;
  return damage;  // L'appelant décide quoi faire
}

const dmg = goodAttack();
console.log("J'ai récupéré : " + dmg);  // L'appelant affiche