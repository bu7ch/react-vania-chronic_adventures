# ✅ Test rapide du Chapitre 1

Fais ce test pour vérifier que tu as **vraiment** compris le Chapitre 1.

Temps : 15-20 min
Difficultés : Facile → Moyen → Difficile

---

## Question 1 (Facile) : const vs let

```javascript
const x = 5;
x = 10;
```

Qu'est-ce qui se passe ?

**A)** `x` vaut 10 (changement réussi)  
**B)** Erreur : "const cannot be reassigned"  
**C)** `x` vaut 5 (const l'empêche)

**Réponse :** B ✅

**Explication :** `const` signifie que la variable ne peut pas être réassignée. Si tu essaies, le navigateur lance une erreur.

---

## Question 2 (Facile) : Appeler une fonction

```javascript
function attack() {
  return 20;
}

const damage = attack;  // Ligne 1
const damage2 = attack();  // Ligne 2
```

Quelle est la différence entre `damage` et `damage2` ?

**A)** Aucune, c'est pareil  
**B)** `damage` est la fonction, `damage2` est le résultat (20)  
**C)** `damage2` est une erreur

**Réponse :** B ✅

**Explication :**  
- `attack` (sans `()`) = la fonction elle-même
- `attack()` (avec `()`) = l'exécution de la fonction = 20

---

## Question 3 (Moyen) : Les objets et this

```javascript
const hero = {
  name: "Aragorn",
  health: 100,
  takeDamage: function(damage) {
    this.health -= damage;
  }
};

hero.takeDamage(20);
hero.takeDamage(30);
console.log(hero.health);
```

Qu'affiche `console.log(hero.health)` ?

**A)** 100  
**B)** 50  
**C)** 30

**Réponse :** B ✅

**Explication :** 100 - 20 - 30 = 50

---

## Question 4 (Moyen) : Math.min()

```javascript
const health = 100;
const newHealth = Math.min(100, health + 20);
console.log(newHealth);
```

Qu'affiche-t-elle ?

**A)** 120  
**B)** 100  
**C)** 20

**Réponse :** B ✅

**Explication :** `Math.min(100, 120)` retourne le plus petit, donc 100. C'est un plafonnement.

---

## Question 5 (Moyen) : Destructuring

```javascript
const hero = { name: "Aragorn", level: 5 };
const { name, level } = hero;
console.log(name);
```

Qu'affiche-t-elle ?

**A)** `{ name: "Aragorn", level: 5 }`  
**B)** `"Aragorn"`  
**C)** Erreur

**Réponse :** B ✅

**Explication :** Le destructuring extrait les propriétés. `name` vaut "Aragorn".

---

## Question 6 (Difficile) : Approche pour 100 héros

Tu dois créer 100 héros différents. Laquelle est la meilleure ?

**A)** Copier-coller l'objet 100 fois  
**B)** Factory function  
**C)** Classe ES6

**Réponse :** B ou C ✅

**Explication :** 
- A = cauchemar de maintenance
- B = flexible et simple
- C = un peu plus complexe mais très organisé

Pour un débutant : B  
Pour un projet production : C

---

## Défi bonus (Difficile) — 20-30 min

Écris une fonction `createHero(name, role)` qui crée un héros :

**Guerrier :**
- `attack()` = 20 dégâts
- `heal()` = +15 santé

**Mage :**
- `attack()` = 10 dégâts (coûte 10 mana)
- `heal()` = +25 santé (coûte 15 mana)

**Code de test :**
```javascript
const warrior = createHero("Aragorn", "warrior");
const mage = createHero("Gandalf", "mage");

warrior.attack();  // 20
warrior.heal();

mage.attack();     // 10, mana -10
mage.heal();       // +25, mana -15
```

**Tes contraintes :**
- Pas de code dupliqué
- Facile d'ajouter un 3e rôle

---

## Scoring

- **Questions 1-2 :** 10 pts chacune (basique)
- **Questions 3-5 :** 15 pts chacune (intermédiaire)
- **Question 6 :** 25 pts (réflexion)
- **Défi bonus :** 30 pts (complet)

**Total :** 130 pts

- ✅ 100+ : Tu as compris ! Vas au Ch 2
- ⚠️ 80-100 : Bien, mais relire certaines sections
- ❌ < 80 : Relire tout le chapitre

---

## Solutions

### Q1 : B
`const` ne peut pas être réassignée.

### Q2 : B
`attack` = la fonction, `attack()` = 20

### Q3 : B
100 - 20 - 30 = 50

### Q4 : B
`Math.min(100, 120)` = 100

### Q5 : B
Destructuring extrait "Aragorn"

### Q6 : B ou C
Factory (B) pour simplicity, Classes (C) pour production

### Défi bonus
Voir `solutions/phase4-create.js`

---