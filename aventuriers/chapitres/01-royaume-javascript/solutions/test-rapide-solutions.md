# Solutions du test rapide du Chapitre 1 : Le Royaume de JavaScript

> ✋ Ne lis ce fichier qu'**après** avoir passé le [test rapide](../test-rapide.md). Le barème est dans le test lui-même.

## Réponses

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

### Q6 : B et C (pas A)
Factory (B) pour la simplicité, classes (C) pour une base de code plus grande. Les deux se défendent : l'important est d'argumenter ton choix.

### Défi bonus
Voir `solutions/phase4-create.js` sur la branche `solutions-ch1-phase2`

---

## Explications détaillées par question

### Question 1 (Facile) : const vs let

**Réponse :** B ✅

**Explication :** `const` signifie que la variable ne peut pas être réassignée. Si tu essaies, JavaScript lance l'erreur « Assignment to constant variable. ».

### Question 2 (Facile) : Appeler une fonction

**Réponse :** B ✅

**Explication :**  
- `attack` (sans `()`) = la fonction elle-même
- `attack()` (avec `()`) = l'exécution de la fonction = 20

### Question 3 (Moyen) : Les objets et this

**Réponse :** B ✅

**Explication :** 100 - 20 - 30 = 50

### Question 4 (Moyen) : Math.min()

**Réponse :** B ✅

**Explication :** `Math.min(100, 120)` retourne le plus petit, donc 100. C'est un plafonnement.

### Question 5 (Moyen) : Destructuring

**Réponse :** B ✅

**Explication :** Le destructuring extrait les propriétés. `name` vaut "Aragorn".

### Question 6 (Difficile) : Approche pour 100 héros

**Réponse :** B et C ✅ (A est à éviter)

**Explication :** 
- A = cauchemar de maintenance
- B = flexible et simple
- C = un peu plus complexe mais très organisé

Pour un débutant : B  
Pour un projet production : C
