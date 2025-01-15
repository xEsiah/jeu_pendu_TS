# Jeu du Pendu

## Règles du jeu

Le jeu consiste à deviner un mot en proposant des lettres.
Pour chaque lettre proposée, le jeu indique si elle est présente dans le mot ou non.

- Si la lettre est présente, le jeu affiche la lettre à la bonne position.
- Si la lettre n'est pas présente, cela réduit le nombre d'essais disponible.

Le jeu se termine lorsque le mot est deviné ou que le nombre d'essais arrive à 0.

## Comment lancer le jeu

Installer les dépendances avec `pnpm install`
Lancer le script du jeu avec `pnpm run dev`

## Affichage du jeu

Le mot à deviner est affiché avec des tirets (_) pour les lettres non encore proposées.
Les lettres déjà proposées sont affichées à la bonne position. (Par exemple pour le mot chat, ou la lettre a, a été devinée : _ _ a _)
Pour chaque essai, réafficher 

## Code du jeu

Le code du jeu est écrit en TypeScript et se trouve dans le dossier src. Le fichier principal est `game.ts`, qui contient la logique du jeu.

## Fonctionnalités

- Le jeu doit connaître une liste de mots dont il va piocher au hasard.
- Le jeu prend en charge les mots de différentes longueurs.
- Le jeu doit pouvoir demander la prochaine lettre à deviner au joueur (vous utiliserez la fonction `askLetter` déjà présent).
- Le jeu affiche un message de victoire ou de défaite à la fin du jeu.
