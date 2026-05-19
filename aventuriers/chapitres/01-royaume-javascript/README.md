# Chapitre 1 : Le Royaume de JavaScript
 
Avant de conquérir React, tu dois comprendre le royaume qui l'accueille : JavaScript. React n'est qu'une bibliothèque JavaScript. Si tu ignores JavaScript, React sera un mystère. Si tu le maîtrises, React devient évident.
 
## JavaScript : qui, quoi, pourquoi ?
 
En 1995, un jeune développeur nommé Brendan Eich a reçu une mission : créer un langage pour les navigateurs Netscape en 10 jours. Voilà comment JavaScript est né. À l'époque, c'était un petit truc pour valider des formulaires. Aujourd'hui ? Il tourne partout : navigateurs, serveurs (Node.js), applications mobiles, objets connectés...
 
Pourquoi ? Parce que JavaScript c'est le langage du web. C'est le seul langage que les navigateurs comprennent nativement. Et c'est ce qui rend React possible.
 
## Les fondations : variables, fonctions, objets
 
Si tu connais déjà JavaScript, saute ce chapitre. Si tu débutes, voici les 3 piliers qui vont te servir constamment en React.
 
### 1. Les variables : le stock de ton inventaire
 
Dans un RPG, tu as un inventaire : des potions, des armes, de l'or. En programmation, on stocke des données dans des variables.
 
```javascript
const playerName = "Aragorn";
let playerHealth = 100;
var playerLevel = 5; // À éviter (raison historique)
```
 
**const** = une valeur qu'on ne change jamais. **let** = une valeur qu'on peut changer. **var** = oublie ça, c'est de l'ancien JavaScript.
 
### 2. Les fonctions : tes sorts magiques
 
Une fonction, c'est un bloc de code réutilisable. Tu appelles un sort, il se déclenche. Tu appelles une fonction, elle s'exécute.
 
```javascript
function castFireball(damage) {
  return damage * 2;
}
 
const result = castFireball(25); // 50
```
 
Les fonctions modernes en JavaScript s'écrivent souvent avec les "arrow functions" :
 
```javascript
const castFireball = (damage) => {
  return damage * 2;
};
 
// Encore plus court :
const castFireball = (damage) => damage * 2;
```
 
### 3. Les objets : tes fiches de personnage
 
Un objet regroupe plusieurs données liées. La fiche d'un personnage contient son nom, sa vie, son niveau...
 
```javascript
const player = {
  name: "Aragorn",
  health: 100,
  level: 5,
  attack: function() {
    return Math.random() * 20;
  }
};
 
console.log(player.name); // "Aragorn"
player.health -= 10; // Il prend 10 dégâts
```
 
### Bonus : le destructuring (déplier tes affaires)
 
Quand tu as un objet avec plein de propriétés, tu peux les "extraire" rapidement :
 
```javascript
const player = { name: "Aragorn", health: 100, level: 5 };
 
// Long :
const name = player.name;
const health = player.health;
 
// Court (destructuring) :
const { name, health } = player;
```