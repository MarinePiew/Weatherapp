# Dojo AngularJS

Ce répertoire contient un squelette minimal d'application AngularJS.
Vous devrez comprendre le fichier ```index.html``` et :

- construire le module application manquant
- créer le composant manquant
- lui associer une vue HTML permettant d'afficher un champ de saisie *'bindé'* à une variable que vous nommerez ```cityName```
- ajouter un bouton ```Valider``` appelant la fonction ```validate``` du composant à laquelle on passera en paramètre la ville saisie dans le champ d'imput.
- le bouton de validation ne doit apparaître que si quelque chose a été saisi dans le champ d'input
- ajouter la ville passée en paramètre de la fonction ```validate``` dans le tableau appellé ```cities```
- interdire l'ajout d'une ville déjà présente
- en cas d'ajout d'une ville déjà présente, afficher un message d'erreur (rouge) sur la vue du composant
- dans la vue du composant, afficher toutes les villes contenues dans le tableau sous forme de ul/li
- faire disparaitre le message d'erreur (rouge) après 10 secondes d'affichage
