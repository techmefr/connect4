# Puissance 4 / Connect 4

Un jeu de Puissance 4 classique implémenté en HTML, CSS et JavaScript pur, sans dépendances externes.


## 📝 Description

Ce projet est une implémentation simple mais fonctionnelle du jeu classique Puissance 4 (Connect 4). Dans ce jeu, deux joueurs s'affrontent en plaçant leurs jetons de couleur dans une grille de 6 lignes par 7 colonnes. Le premier joueur à aligner 4 jetons de sa couleur horizontalement, verticalement ou en diagonale remporte la partie.

## 🚀 Fonctionnalités

- Interface utilisateur intuitive
- Grille de jeu 6x7 standard
- Alternance automatique entre les joueurs
- Visualisation claire du joueur actif
- Design responsive pour tous les appareils
- Indications visuelles pour les colonnes pleines

## 🛠️ Technologies utilisées

- HTML5
- CSS3 (avec des dégradés et effets visuels)
- JavaScript vanilla

## 🎮 Comment jouer

1. Ouvrez le fichier `index.html` dans votre navigateur
2. Le Joueur 1 (rouge) commence toujours
3. Cliquez sur une colonne pour y déposer un jeton
4. Les jetons "tombent" vers le bas de la colonne
5. Les joueurs alternent jusqu'à ce qu'un alignement de 4 jetons soit réalisé
6. Rafraîchissez la page pour commencer une nouvelle partie

## 🗂️ Structure du projet

```
techmefr-connect4/
├── README.md          # Documentation du projet
├── index.html         # Page principale du jeu
├── style.css          # Styles et mise en page
└── js/                # Scripts JavaScript
    ├── changePlayer.js      # Gestion de l'alternance des joueurs
    ├── columnClic.js        # Gestion des clics sur les colonnes
    ├── findCells.js         # Fonctions de recherche de cellules libres
    └── generateGameBoard.js # Génération du plateau de jeu
```

## ⚠️ Problèmes connus

- Un message "La colonne est pleine !" s'affiche à chaque clic sur une cellule, même lorsque la colonne n'est pas pleine. Ce bug sera corrigé dans une future mise à jour.

## 🔄 Améliorations futures envisagées

- Correction du bug d'affichage du message "La colonne est pleine !"
- Détection automatique de victoire
- Compteur de score
- Option pour jouer contre l'ordinateur
- Animations lors de la chute des jetons
- Possibilité de personnaliser les couleurs
- Sauvegarde de partie en cours

## 🔧 Installation

Aucune installation spéciale n'est requise. Clonez simplement ce dépôt et ouvrez `index.html` dans votre navigateur préféré.



## 📜 Licence

[MIT](https://choosealicense.com/licenses/mit/)

