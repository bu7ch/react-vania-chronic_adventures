# 🤝 Contribuer

Merci de vouloir améliorer le cours ! Les contributions sont les bienvenues, petites ou grandes.

## Ce que tu peux proposer

- **Corriger une erreur** : typo, explication fausse ou confuse, lien cassé, exemple de code qui ne fonctionne pas.
- **Signaler un passage où tu as bloqué** : un concept utilisé avant d'être expliqué, une consigne ambiguë. C'est précieux : un débutant voit ce que l'auteur ne voit plus.
- **Proposer une variante de solution** pour une quête.
- **Proposer un exercice** ou un mini-exo.
- **Traduire** un chapitre.

## Comment faire

1. **Ouvre d'abord une issue ou une discussion** si ton changement est grand (nouveau chapitre, restructuration) : on s'accorde avant que tu y passes du temps.
2. **Fork** le dépôt, puis crée une branche : `fix/typo-ch1`, `feat/exo-ch3`, `i18n/en-ch1`...
3. Fais ton changement en suivant les conventions ci-dessous.
4. Ouvre une **Pull Request** en décrivant : quel chapitre, ce qui change, pourquoi.

## Conventions

- **Ton :** on tutoie, on garde la métaphore RPG mais on donne toujours le vrai terme technique (voir les encadrés « Sans métaphore »).
- **Structure d'un chapitre :** `README.md` (contenu), `quete-N.md` (4 phases : CREATE, ANALYZE, EVALUATE, CREATE libre), `test-rapide.md`, puis exos et démos. Voir [STRUCTURE.md](./STRUCTURE.md).
- **Ordre pédagogique :** n'utilise pas dans un chapitre une notion qui n'a pas été enseignée avant. Si tu dois le faire, explique-la sur place en une phrase.
- **Le code doit fonctionner.** Teste chaque extrait que tu ajoutes (avec `node` pour le JavaScript, dans un projet Vite pour le React) **avant** de proposer la PR. Un exemple cassé est pire que pas d'exemple.
- **Solutions :** elles ne vont pas sur `main` mais sur la branche `solutions-chN-phase2` du chapitre concerné (`solutions-ch45-mini-exos` pour le 4.5). Cela vaut aussi pour le corrigé des tests rapides et les réponses des mini-exos.
- **Commits :** messages explicites, en anglais ou en français, par exemple `fix(ch2): correct the JSX rule about class`.

## Réutiliser le contenu

La licence du dépôt figure dans le fichier [LICENSE](./LICENSE). Lis-la avant de redistribuer ou de traduire le cours.

## Une question ?

Ouvre une [Discussion](https://github.com/bu7ch/react-vania-chronic_adventures/discussions).
