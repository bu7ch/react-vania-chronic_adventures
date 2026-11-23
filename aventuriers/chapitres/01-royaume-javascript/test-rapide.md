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
**B)** Erreur : « Assignment to constant variable. »  
**C)** `x` vaut 5 (const l'empêche)

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

---

## Question 6 (Difficile) : Approche pour 100 héros

Tu dois créer 100 héros différents. Quelle(s) approche(s) est-il raisonnable de choisir ? (une ou plusieurs réponses)

**A)** Copier-coller l'objet 100 fois  
**B)** Factory function  
**C)** Classe ES6

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

**Total :** 120 pts

- ✅ 90+ : Tu as compris ! Vas au Ch 2
- ⚠️ 75-89 : Bien, mais relire certaines sections
- ❌ < 75 : Relire tout le chapitre

---

## Solutions

Pour que le test reste un vrai test, les solutions ne sont pas sur `main`. Une fois que tu as répondu, consulte `chapitres/01-royaume-javascript/solutions/test-rapide-solutions.md` sur la branche `solutions-ch1-phase2` (voir [Vérifier tes réponses](../../GETTING_STARTED.md#-vérifier-tes-réponses) pour y accéder).

