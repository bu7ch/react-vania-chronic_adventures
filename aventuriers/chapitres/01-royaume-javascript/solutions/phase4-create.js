// 🏆 Phase 4 Solution — CREATE libre (Défi)
// Système multi-rôles (Guerrier + Mage)

// ============================================
// APPROCHE 1 : Factory + Object spread (Recommandée)
// ============================================

console.log("=== APPROCHE 1 : Factory + Spread ===\n");

function createHero(name, role) {
  const baseHero = {
    name,
    health: 100,
    mana: 50,
    level: 1,
    takeDamage: function(damage) {
      this.health = Math.max(0, this.health - damage);
      console.log(`${this.name} subit ${damage} dégâts. Santé : ${this.health}`);
    },
    levelUp: function() {
      this.level += 1;
      this.health = 100;
      this.mana += 25;
      console.log(`${this.name} atteint le niveau ${this.level} !`);
    }
  };

  const roles = {
    warrior: {
      attack: function() {
        const damage = 20;
        console.log(`⚔️ ${this.name} (guerrier) attaque pour ${damage} dégâts !`);
        return damage;
      },
      heal: function() {
        const healed = Math.min(15, 100 - this.health);
        this.health += healed;
        console.log(`🛡️ ${this.name} se soigne de ${healed} PV. Santé : ${this.health}/100`);
      }
    },

    mage: {
      attack: function() {
        if (this.mana < 10) {
          console.log(`❌ ${this.name} (mage) n'a pas assez de mana !`);
          return 0;
        }
        const damage = 10;
        this.mana -= 10;
        console.log(`🔥 ${this.name} (mage) lance un sort pour ${damage} dégâts ! Mana : ${this.mana}`);
        return damage;
      },
      heal: function() {
        if (this.mana < 15) {
          console.log(`❌ ${this.name} (mage) n'a pas assez de mana pour se soigner !`);
          return;
        }
        const healed = Math.min(25, 100 - this.health);
        this.health += healed;
        this.mana -= 15;
        console.log(`✨ ${this.name} (mage) se soigne de ${healed} PV (coûte 15 mana). Santé : ${this.health}, Mana : ${this.mana}`);
      }
    }
  };

  // Fusionne base + rôle spécifique
  return { ...baseHero, ...roles[role] };
}

// ============================================
// Tests
// ============================================

const warrior = createHero("Aragorn", "warrior");
const mage = createHero("Gandalf", "mage");

console.log("\n--- GUERRIER ---");
warrior.attack();  // 20 dégâts
warrior.heal();    // +15 PV
warrior.takeDamage(30);  // -30 PV
warrior.heal();

console.log("\n--- MAGE ---");
mage.attack();     // 10 dégâts, mana -10
mage.attack();     // 10 dégâts, mana -20
mage.attack();     // 10 dégâts, mana -30
mage.attack();     // 10 dégâts, mana -40
mage.attack();     // 10 dégâts, mana -50 (épuisé)
mage.attack();     // ❌ Pas assez de mana

console.log("\n--- RÉGÉNÉRATION MANA ---");
mage.levelUp();    // Level up, mana +25
console.log("Mana du mage : " + mage.mana);
mage.heal();       // ✅ Marche maintenant

console.log("\n--- AFFICHAGE FINAL ---");
console.log("Guerrier :");
console.log(warrior);
console.log("\nMage :");
console.log(mage);

// ============================================
// APPROCHE 2 : Factory avec conditions (Alternative)
// ============================================

console.log("\n\n=== APPROCHE 2 : Factory avec if/else ===\n");

function createHeroV2(name, role) {
  const hero = {
    name,
    health: 100,
    mana: 50,
    level: 1,
    takeDamage(damage) {
      this.health = Math.max(0, this.health - damage);
    },
    levelUp() {
      this.level += 1;
      this.health = 100;
      this.mana += 25;
    }
  };

  if (role === "warrior") {
    hero.attack = function() {
      return 20;
    };
    hero.heal = function() {
      this.health = Math.min(100, this.health + 15);
    };
  } else if (role === "mage") {
    hero.attack = function() {
      if (this.mana < 10) return 0;
      this.mana -= 10;
      return 10;
    };
    hero.heal = function() {
      if (this.mana < 15) return;
      this.health = Math.min(100, this.health + 25);
      this.mana -= 15;
    };
  }

  return hero;
}

const warrior2 = createHeroV2("Aragorn", "warrior");
console.log("Guerrier créé :");
console.log(warrior2.attack());  // 20

// ============================================
// APPROCHE 3 : Classe + héritage (Avancé)
// ============================================

console.log("\n\n=== APPROCHE 3 : Classe + héritage ===\n");

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.mana = 50;
    this.level = 1;
  }

  takeDamage(damage) {
    this.health = Math.max(0, this.health - damage);
  }

  levelUp() {
    this.level += 1;
    this.health = 100;
    this.mana += 25;
  }

  // À implémenter dans les classes dérivées
  attack() {
    throw new Error("attack() doit être implémenté");
  }

  heal() {
    throw new Error("heal() doit être implémenté");
  }
}

class Warrior extends Hero {
  attack() {
    return 20;
  }

  heal() {
    this.health = Math.min(100, this.health + 15);
    console.log(`🛡️ ${this.name} se soigne de 15 PV`);
  }
}

class Mage extends Hero {
  attack() {
    if (this.mana < 10) {
      console.log(`❌ Pas assez de mana`);
      return 0;
    }
    this.mana -= 10;
    console.log(`🔥 ${this.name} lance un sort (mana : ${this.mana})`);
    return 10;
  }

  heal() {
    if (this.mana < 15) {
      console.log(`❌ Pas assez de mana pour se soigner`);
      return;
    }
    this.health = Math.min(100, this.health + 25);
    this.mana -= 15;
    console.log(`✨ ${this.name} se soigne (mana : ${this.mana})`);
  }
}

const warrior3 = new Warrior("Aragorn");
const mage3 = new Mage("Gandalf");

warrior3.attack();  // 20
warrior3.heal();    // Se soigne

mage3.attack();     // Sort
mage3.heal();       // Soigne du mage

// ============================================
// BONUS : Ajouter un 3e rôle (Voleur)
// ============================================

console.log("\n\n=== BONUS : Ajouter un Voleur ===\n");

// Avec l'Approche 1, c'est facile :
const roles = {
  // ...warrior...
  // ...mage...
  rogue: {
    attack: function() {
      const damage = 15;  // Entre guerrier et mage
      const isCrit = Math.random() > 0.7;  // 30% critique
      if (isCrit) {
        console.log(`⚡ CRITIQUE ! ${this.name} (voleur) attaque pour ${damage * 2} dégâts !`);
        return damage * 2;
      } else {
        console.log(`🗡️ ${this.name} (voleur) attaque pour ${damage} dégâts !`);
        return damage;
      }
    },
    heal: function() {
      const healed = Math.min(10, 100 - this.health);
      this.health += healed;
      console.log(`🩹 ${this.name} (voleur) se soigne légèrement de ${healed} PV.`);
    }
  }
};

const rogue = createHero("Legolas", "rogue");
console.log("--- VOLEUR ---");
rogue.attack();
rogue.heal();

// ============================================
// RÉSUMÉ DES APPROCHES
// ============================================

console.log("\n\n=== COMPARAISON DES APPROCHES ===\n");
console.log(`
Approche 1 (Factory + Spread) :
  ✅ Flexible (facile ajouter un rôle)
  ✅ Code compact
  ✅ Scalable (beaucoup de rôles)
  ⚠️ Un peu moins lisible pour les débutants

Approche 2 (Factory + if/else) :
  ✅ Facile à comprendre
  ⚠️ Moins flexible (if partout)
  ❌ Difficile pour 10+ rôles

Approche 3 (Classe + héritage) :
  ✅ Très lisible
  ✅ Très organisé
  ❌ Plus de code
  ❌ Complexe pour débutant

RECOMMANDATION : Approche 1 pour un jeu production.
`);