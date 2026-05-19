# 🗡️ Quête 1 : Crée et analyse un système de personnage

## Objectif global

Créer un objet `hero` complet, le tester, l'analyser critiquement, et construire un système pour 2 rôles différents.

**Durée estimée :** 2-3 heures  
**Difficultés :** Facile → Moyen → Difficile

---

## Phase 1 : CREATE (Créer) — 30-45 min

### Instructions détaillées

Tu vas créer ton premier objet JavaScript complexe.

#### Étape 1 : L'objet de base

```javascript
const hero = {
  name: "Aragorn",        // ← Remplace par ton héros préféré
  health: 100,
  mana: 50,
  level: 1
};
```

#### Étape 2 : Ajouter la méthode `attack()`

Cette méthode doit :
- Générer un nombre aléatoire entre 5 et 15
- Afficher un message : "[name] attaque pour X dégâts !"
- Retourner les dégâts

```javascript
attack: function() {
  const damage = Math.floor(Math.random() * 11) + 5;  // 5-15
  console.log(`${this.name} attaque pour ${damage} dégâts !`);
  return damage;
}
```

**Comment tester :**
```javascript
const dmg = hero.attack();
console.log(dmg);  // Entre 5 et 15
```

#### Étape 3 : Ajouter la méthode `heal()`

Cette méthode doit :
- Augmenter `health` de 20
- Ne jamais dépasser 100 (utilise `Math.min()`)
- Afficher : "[name] se soigne de X PV. Santé : Y/100"
- Retourner la quantité soignée

```javascript
heal: function() {
  const oldHealth = this.health;
  this.health = Math.min(100, this.health + 20);
  const healed = this.health - oldHealth;
  console.log(`${this.name} se soigne de ${healed} PV. Santé : ${this.health}/100`);
  return healed;
}
```

**Comment tester :**
```javascript
hero.health = 85;
hero.heal();       // "Aragorn se soigne de 15 PV. Santé : 100/100"
hero.heal();       // "Aragorn se soigne de 0 PV. Santé : 100/100" (plafonné)
```

#### Étape 4 : Ajouter la méthode `levelUp()`

Cette méthode doit :
- Augmenter `level` de 1
- Restaurer `health` à 100
- Augmenter `mana` de 25
- Afficher un message de félicitations

```javascript
levelUp: function() {
  this.level += 1;
  this.health = 100;
  this.mana += 25;
  console.log(`${this.name} a atteint le niveau ${this.level} !`);
  console.log(`Santé : ${this.health}/100 | Mana : ${this.mana}`);
}
```

**Comment tester :**
```javascript
hero.health = 50;
hero.levelUp();  // "Aragorn a atteint le niveau 2 !"
console.log(hero.health);  // 100
console.log(hero.mana);    // 75
```

#### Étape 5 : Tests complets

```javascript
// Teste tout ensemble
console.log("=== DÉBUT ===");
console.log(hero);

console.log("\n=== ATTAQUE ===");
hero.attack();

console.log("\n=== DÉGÂTS ===");
hero.health = 85;
hero.takeDamage(20);  // Si tu as ajouté takeDamage
console.log(hero.health);  // 65

console.log("\n=== SOINS ===");
hero.heal();

console.log("\n=== LEVEL UP ===");
hero.levelUp();
console.log(hero);
```

### À soumettre

Ton code JavaScript (copie-colle dans une issue ou un gist GitHub).

---

## Phase 2 : ANALYZE (Analyser) — 30-45 min

### Q1 : Pourquoi utiliser `this.property` au lieu de `hero.property` ?

**Contexte :** Tu dois écrire une méthode qui modifie une propriété de l'objet.

**Test à faire :**

```javascript
// Option A : avec this
const hero = {
  name: "Aragorn",
  attack_with_this: function() {
    console.log(`${this.name} attaque !`);
  }
};

// Option B : avec le nom hero
const hero2 = {
  name: "Elsa",
  attack_without_this: function() {
    console.log(`${hero2.name} attaque !`);
  }
};

// Maintenant, teste ceci :
const warrior = hero;
warrior.attack_with_this();  // Marche ?

const mage = hero2;
mage.attack_without_this();  // Marche ? Pourquoi ?
```

**Questions :**
1. Quelle approche affiche correctement le nom du guerrier ?
2. Qu'est-ce qui se passe si tu renommes `hero2` en `player2` ?
3. Pourquoi `this` est meilleur ?

**Réponse attendue :** `this` se réfère toujours à l'objet actuel, peu importe comment on l'appelle.

---

### Q2 : Qu'est-ce que `Math.min()` et `Math.max()` font réellement ?

**Test à faire :**

```javascript
const hero = { health: 100 };

// Scénario 1 : SANS Math.min()
console.log("=== SANS Math.min() ===");
for (let i = 0; i < 5; i++) {
  hero.health += 20;  // +20 à chaque boucle
  console.log(`Itération ${i}: ${hero.health}`);
}

// Scénario 2 : AVEC Math.min()
hero.health = 100;
console.log("\n=== AVEC Math.min() ===");
for (let i = 0; i < 5; i++) {
  hero.health = Math.min(100, hero.health + 20);
  console.log(`Itération ${i}: ${hero.health}`);
}
```

**Questions :**
1. Qu'observe-tu dans le Scénario 1 ? La santé peut-elle dépasser 100 ?
2. Et dans le Scénario 2 ?
3. À quoi sert `Math.max()` ?

**Réponse attendue :** `Math.min(100, x)` retourne le plus petit entre 100 et x. Ça plafonne la valeur. `Math.max(0, x)` le fait pour le minimum.

---

### Q3 : Pourquoi afficher dans la fonction vs. retourner la valeur ?

**Contexte :** Deux façons de faire la même chose :

```javascript
// Approche A : Afficher dans la fonction
const hero1 = {
  attack: function() {
    const damage = 20;
    console.log(`Dégâts : ${damage}`);  // Affiche directement
    return damage;
  }
};

// Approche B : Retourner et laisser l'appelant afficher
const hero2 = {
  attack: function() {
    const damage = 20;
    return damage;  // Juste retourner
  }
};

// Utilisation
hero1.attack();  // Affiche automatiquement

const dmg = hero2.attack();
console.log(`Dégâts : ${dmg}`);  // L'appelant affiche
```

**Questions :**
1. Laquelle est plus flexible ?
2. Si tu veux changer le format du message, quelle approche est plus facile à modifier ?
3. Quand afficher dans la fonction est mieux ? Quand retourner est mieux ?

**Réponse attendue :** Retourner c'est plus flexible. Afficher c'est plus commode au départ.

---

## Phase 3 : EVALUATE (Évaluer) — 45-60 min

### Problème

Tu dois gérer **100 héros** différents dans ton jeu. Comment tu organiserais le code ?

### Approche A : Copier-coller

```javascript
const hero1 = {
  name: "Aragorn",
  health: 100,
  level: 1,
  attack: function() { ... }
};

const hero2 = {
  name: "Elsa",
  health: 50,
  level: 3,
  attack: function() { ... }
};

// ... (répète 98 fois)
```

### Approche B : Factory function

```javascript
function createHero(name, health = 100, level = 1) {
  return {
    name,
    health,
    level,
    attack: function() {
      const damage = Math.floor(Math.random() * 11) + 5;
      console.log(`${this.name} attaque pour ${damage} dégâts !`);
      return damage;
    }
  };
}

const hero1 = createHero("Aragorn", 100, 1);
const hero2 = createHero("Elsa", 50, 3);
```

### Approche C : Classe ES6

```javascript
class Hero {
  constructor(name, health = 100, level = 1) {
    this.name = name;
    this.health = health;
    this.level = level;
  }

  attack() {
    const damage = Math.floor(Math.random() * 11) + 5;
    console.log(`${this.name} attaque pour ${damage} dégâts !`);
    return damage;
  }
}

const hero1 = new Hero("Aragorn", 100, 1);
const hero2 = new Hero("Elsa", 50, 3);
```

### Ta tâche

Crée une grille d'analyse :

| Critère | Approche A | Approche B | Approche C |
|---------|-----------|-----------|-----------|
| **Répétition de code** | Énorme (100x) | Faible | Faible |
| **Facile de modifier la méthode attack pour TOUS** | Très difficile (changer 100 fois) | Facile (changer 1 fois) | Facile (changer 1 fois) |
| **Facile d'ajouter une validation** | ❌ | ⚠️ | ✅ |
| **Lisibilité** | Facile | Moyenne | Moyenne |
| **Scalabilité (pour 1000 héros)** | Cauchemar | Bon | Bon |
| **Compréhension (pour un débutant)** | Très facile | Facile | Difficile |
| **Taille du code** | Énorme | Petit | Petit |

**Conclusion :**
Laquelle choisirais-tu pour 100 héros ? Pourquoi ?

Mon choix : [Approche B/C]

Raison : [Ta justification]

---

### Bonus : Questions supplémentaires

1. **Quelle approche est la meilleure pour un jeu production ?** Pourquoi ?
2. **Quand l'Approche A serait-elle la seule acceptable ?**
3. **Quelle est la différence conceptuelle entre B et C ?**

---

## Phase 4 : CREATE libre (Défi) — 60-90 min

### Le défi : Un système multi-rôles

Crée un système où tu peux créer des héros avec **2 rôles différents**.

#### Spécifications

**Guerrier :**
- `attack()` : retourne 20 dégâts
- `heal()` : restaure 15 PV (max 100)

**Mage :**
- `attack()` : retourne 10 dégâts ET consomme 10 mana
- `heal()` : restaure 25 PV ET consomme 15 mana
- Si pas assez de mana : l'action échoue et affiche un message

#### Contraintes

1. **Pas de duplication de code** (DRY)
2. Les deux rôles partagent les propriétés de base (name, health, mana, level)
3. Doit être facile d'ajouter un 3e rôle (Voleur, Ranger, etc.) sans refactoriser

#### Utilisation attendue

```javascript
const warrior = createHero("Aragorn", "warrior");
const mage = createHero("Gandalf", "mage");

// Tests
warrior.attack();        // 20
warrior.heal();          // +15 PV
console.log(warrior.health);

mage.attack();          // 10 dégâts, mana -10
mage.attack();          // 10 dégâts, mana -20
mage.attack();          // 10 dégâts, mana -30
// ... mana à 0

mage.attack();          // "Pas assez de mana !" (échoue)
```

#### Pistes (utilise ou ignore)

**Piste 1 : Factory + Object spread**
```javascript
function createHero(name, role) {
  const base = { name, health: 100, mana: 50, level: 1 };
  const roles = {
    warrior: { attack() { return 20; }, heal() { ... } },
    mage: { attack() { ... }, heal() { ... } }
  };
  return { ...base, ...roles[role] };
}
```

**Piste 2 : Factory + condition**
```javascript
function createHero(name, role) {
  const hero = { name, health: 100, mana: 50, level: 1 };
  if (role === "warrior") {
    hero.attack = function() { return 20; };
    hero.heal = function() { ... };
  } else if (role === "mage") {
    // ...
  }
  return hero;
}
```

**Piste 3 : Classe + héritage (avancé)**
```javascript
class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Warrior extends Hero {
  attack() { return 20; }
  heal() { ... }
}

class Mage extends Hero {
  attack() { ... }
  heal() { ... }
}
```

#### À soumettre

Ton code complet + un test qui montre les deux rôles en action.

---

## Validation finale

Tu as fini la Quête 1 quand :
- ✅ Phase 1 : Objet hero créé et testé
- ✅ Phase 2 : Questions répondues par écrit
- ✅ Phase 3 : Grille d'évaluation complétée
- ✅ Phase 4 : Système multi-rôles fonctionnel

**Prochaine étape :** Test rapide du chapitre 1