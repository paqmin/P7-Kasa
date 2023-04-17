# Formation Développeur Web - Projet 7 - Kasa

Ce projet est le projet final de la formation Développeur Web OPENCLASSROOMS.
Voici le lien vers la page : https://paqmin.github.io/kasa/#/accueil

## Création d'une application web de location immobilière avec React

L'objectif de ce projet était de développer une application avec React.js, c'est à dire de créer les différents composants React nécessaires, les routes React Router en suivant les maquettes Figma, en important les données depuis un fichier JSON.

### Contraintes fonctionnelles

Quelques précisions sur les fonctionnalités du site :

1. Pour le défilement des photos dans la galerie (composant Gallery) :

- Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
- Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
- S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.

2. La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
3. Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.
4. Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
   Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

### Contraintes techniques

#### REACT

Il est impératif d’utiliser ces éléments de React pour un code de qualité :
- Découpage en composants modulaires et réutilisables ;
- Un composant par fichier ;
- Structure logique des différents fichiers ;
- Utilisation des props entre les composants ;
- Utilisation du state dans les composants quand c'est nécessaire ;
- Gestion des événements ;
- Listes : React permet de faire des choses vraiment intéressantes avec
les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.

#### REACT ROUTER

- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
- Il existe une page par route.

### Langages utilisés :

HTML5 / CSS3 / JavaScript / React

### Compétences acquises

- Création d'une application complète avec React
- Gestion des routes avec React Router
