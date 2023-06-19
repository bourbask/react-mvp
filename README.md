# MVP React

Renouons avec les bases de React !

## Prérequis

Savoir utiliser `npm` ou `yarn`.

## Les éléments essentiels

Pour créer un nouveau projet React en partant de rien il faut :

### package.json

Ce fichier doit comporter les mentions suivantes :

   1. Nom du projet
   2. Version
   3. Privé ou non
   4. Les dépendances
   5. Les scripts

Les dépendances nécessaires pour créer une application React sont react, react-dom et un package comme react-scripts.

Si la dépendance utilisée pour les scripts est react-scripts, alors les scripts suivants peuvent être utilisés :
`
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
    }
`

Une fois le fichier renseigné, la commande `npm install` générera le fichier package-lock.json et le dossier node_modules.
Il est ensuite possible d'utiliser les scripts définit plus haut.

Pour lancer le serveur, il faut exécuter cette commande `npm run start`.

Le dossier node_modules prenant très rapidement du volume il est important de créer un fichier .gitignore et de l'y ajouter.
De cette manière, les ressources des dépendances ne seront pas versionnées.

### Structure du projet

La structure du projet dépend de plusieurs paramètres, comme l'ampleur, le type de projet, le nombre de développeurs, etc...
Mais pour un MVP, il faut :

#### public

Ce dossier contiendra tous les fichiers à disposition des utilisateurs, comme les assets ou plus important, le fichier `index.html`.
Ce fichier sera le noyau de l'application React. Ci-dessous un exemple :

```html
<!doctype html>
<html lang="en">
    <head>
        <title>Texte dans l'onglet</title>
    </head>
    <body>
        <div id="container">L'application sera contenue ici.</div>
    </body>
</html>
```

#### src

C'est dans ce dossier que l'application et ses composant seront créés.
Mais tout commence par un fichier index.js, qui fait le lien entre les futurs composants et le fichier `index.html`.
Pour cette application, le fichier ressemble à ceci :

```javascript
    import '@fontsource/roboto/300.css';
    import '@fontsource/roboto/400.css';
    import '@fontsource/roboto/500.css';
    import '@fontsource/roboto/700.css';

    import React from 'react';
    import { createRoot } from 'react-dom/client';
    import Hello from "./components/Hello";


    var destination = document.querySelector('#container');

    const root = createRoot(destination);

    root.render(
        <Hello name='Kévin' />
    );
```

Aujourd'hui on utilise aussi une surcouche à JavaScript, TypeScript.
Celle-ci donne à JS un typage fort.

## Resources utiles

[Fonctionnement de npm](https://www.carlrippon.com/upgrading-npm-dependencies/)
[Documentation officiel React](https://react.dev/)

## Crédits

[Kévin Bourbasquet](https://github.com/bourbask)
