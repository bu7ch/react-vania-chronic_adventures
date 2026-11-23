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

## Pourquoi ces 4 outils reviennent sans arrêt en React

Tu te demandes peut-être pourquoi on passe un chapitre entier sur du JavaScript « de base ». Parce que **chaque ligne de React que tu vas écrire utilise ces outils** :

| Outil JavaScript | Où tu le retrouveras en React |
|------------------|-------------------------------|
| `const` | Chaque composant est une `const` (ou une fonction) que tu ne réassignes jamais |
| Fonctions | Un composant React **est** une fonction : elle reçoit des données, elle renvoie de l'interface |
| Arrow functions | Les gestionnaires de clic (`onClick={() => ...}`) et les callbacks de `.map()` |
| Objets | Les `props` d'un composant sont un objet ; l'état d'un personnage aussi |
| Destructuring | `function HeroCard({ name, health })` : tu déplies les props directement dans la signature |

Un petit aperçu pour te donner envie (tu n'as pas besoin de le comprendre maintenant) :

```javascript
// Un composant React, c'est ça : une fonction qui reçoit un objet.
const HeroCard = ({ name, health }) => `${name} : ${health} PV`;

HeroCard({ name: "Aragorn", health: 100 }); // "Aragorn : 100 PV"
```

Fonction + arrow function + objet + destructuring, en deux lignes. Au Chapitre 2, on remplacera juste la chaîne de caractères par du JSX. Rien de plus.

## 🧠 Encadré « Sans métaphore »

Le vocabulaire RPG est là pour t'aider à retenir, pas pour te cacher les vrais termes. Voici la traduction :

- **Inventaire** = une *variable* (`const`, `let`) : un nom attaché à une valeur.
- **Sort magique** = une *fonction* : un bloc de code que tu nommes et que tu peux appeler autant de fois que tu veux.
- **Fiche de personnage** = un *objet* : un ensemble de paires `clé: valeur`.
- **Déplier ses affaires** = le *destructuring* : extraire plusieurs propriétés d'un objet en une seule instruction.

Deux pièges à connaître dès maintenant :

1. **`const` ne rend pas un objet immuable.** `const player = { health: 100 }; player.health = 50;` fonctionne. `const` interdit seulement de **réassigner** le nom (`player = {...}`). C'est un point qui compte beaucoup en React : on ne modifie jamais un objet d'état directement, on en crée un nouveau.
2. **`fonction` et `fonction()` sont deux choses différentes.** `castFireball` désigne le sort lui-même, `castFireball(25)` le lance. Tu passeras souvent la première forme à React (`onClick={castFireball}`), presque jamais la seconde.

## Résumé du chapitre

- `const` par défaut, `let` si tu dois réassigner, `var` jamais.
- Une fonction est un bloc réutilisable ; l'arrow function `(x) => x * 2` en est la forme courte.
- `return` renvoie une valeur à celui qui appelle ; `console.log` ne fait qu'afficher.
- Un objet regroupe des données (et des méthodes) liées ; on y accède avec `objet.cle`.
- Le destructuring `const { a, b } = objet` extrait des propriétés en une ligne.

## Ton plan d'attaque

1. **Lis ce chapitre** en entier (15 min).
2. **Lance les mini-exos** dans `mini-exos/` avec Node : `node exo-variables.js` (5-10 min chacun).
   Le dernier, `exo-destructuring.js`, est un exercice à compléter : lis les consignes en commentaire.
3. **Fais la Quête 1** dans [`quete-1.md`](./quete-1.md) (2-3 h, 4 phases).
4. **Passe le [test rapide](./test-rapide.md)** pour vérifier que tout est acquis.

Besoin de comparer avec une solution ? Elles sont sur la branche `solutions-ch1-phase2` (voir le [README principal](../../README.md#-les-branches-du-dépôt)). Essaie d'abord, compare ensuite.

## Prochaines étapes

Tu maîtrises le royaume. Il est temps de franchir ses portes : au **Chapitre 2**, tu installes Vite et tu écris ton premier composant React.

👉 [Chapitre 2 : Bienvenue à React-vania](../02-react-vania/README.md)
