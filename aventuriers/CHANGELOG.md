# Changelog

Historique des changements du cours. Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/).

## [Non publié]

### Ajouté
- **Chapitre 4 : L'État, ta barre de santé** : README, quête (4 phases), test rapide, projet d'exemple `tavern-vivante`.
- **Chapitre 2 : Bienvenue à React-vania** : README, quête (4 phases), test rapide, démo (`code-demo/`).
- **Chapitre 3 : Les Composants et les Listes** : README, quête (4 phases), test rapide, projets d'exemple `hero-gallery` et `item-list`.
- `exo-destructuring.js` (Ch 1) : exercice à compléter, avec vérifications automatiques.
- `ROADMAP.md`, `CHANGELOG.md`, `CONTRIBUTE.md`.
- README du Chapitre 1 : sections sur les template literals, les conditions, `this` et l'exécution du code avec Node.
- README du Chapitre 2 : explication de `import` / `export` et de ce que React peut afficher.

### Modifié
- Refonte graphique des démos des chapitres 2 à 4 : thème « La console arcanique » (encre bleue, panneaux ardoise à coins coupés, filets cyan, or des runes, santé en cellules, polices Cinzel et Rajdhani via Google Fonts). CSS seul : le JSX des démos et les extraits du cours n'ont pas changé. Ajout de `PRODUCT.md` et `DESIGN.md` pour documenter le produit et le design system.
- Le barème des tests rapides passe de 130 à 120 points (le total était mal calculé) ; seuils : 90 et 75.
- `README.md` et `GETTING_STARTED.md` : URLs du dépôt, commandes de clonage, état réel du cours, accès aux solutions, versions de Node et de Vite.
- `quete-1.md` : boîte à outils pour lire les approches B et C (factory, paramètre par défaut, propriété raccourcie, classe, spread), étape `takeDamage` ajoutée, grille de la Phase 3 à remplir soi-même, test sur `this` corrigé.
- Branche `solutions-ch1-phase2` : `phase4-create.js` ne plante plus (bonus « voleur »), réponse Q1 alignée sur la quête.
- `GETTING_STARTED.md` : la Quête 1 se fait en JavaScript pur (`node hero.js`) et non plus dans un composant React.
- Les solutions vivent sur des branches (une par chapitre : `solutions-chN-phase2`), documenté dans `STRUCTURE.md` et `README.md`.

### Corrigé
- Liens de sommaire cassés dans `GETTING_STARTED.md` et `STRUCTURE.md` (titres avec emoji).
- Plusieurs durées estimées incohérentes entre les chapitres et les quêtes.

## [0.1.0] - 2026-05-19

### Ajouté
- Structure du dépôt (`README.md`, `GETTING_STARTED.md`, `STRUCTURE.md`, `LICENSE`).
- **Chapitre 1 : Le Royaume de JavaScript** : README, quête 1, test rapide, mini-exos.
