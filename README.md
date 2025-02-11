# Pixela Client Web

## Description

Pixela Client Web est une application web qui permet aux utilisateurs de créer et de gérer des graphes facilement grâce à l'API Pixela. L'application inclut une interface simple où les utilisateurs peuvent s'inscrire, se connecter et gérer leurs données.

## Fonctionnalités

- **Créer un compte** : Les utilisateurs peuvent s'inscrire avec un nom d'utilisateur et un mot de passe.

- **Se connecter** : Connexion sécurisée avec les informations d'identification.
- **Créer et voir des graphes** : Interface intuitive pour ajouter et visualiser des graphes.

## Technologies Utilisées

Ce projet utilise plusieurs technologies essentielles pour le développement web :

- **HTML** : Structure des pages web.
  
- **CSS** : Styles et mise en forme des éléments.
  
- **JavaScript (avec jQuery)** : Ajout d'interactivité et gestion des requêtes API.
  
- **API Pixela** : Service externe permettant de stocker et visualiser des données sous forme de graphes.

## Structure des Fichiers

Voici les fichiers importants du projet et leur rôle :

- `index.html` : Page d'accueil avec connexion et inscription.
- `dashboard.html` : Interface pour afficher et gérer les graphes.
- `styles.css` : Feuille de style qui définit l'apparence de l'application.
- `app.js` : Code principal qui gère les interactions utilisateur.
- `api.js` : Gestion des requêtes vers l'API Pixela.
- `auth.js` : Gestion de l'authentification des utilisateurs.

## Comment Installer et Utiliser ?

1. **Téléchargez le projet** (ou clonez-le avec Git).
2. **Ouvrez `index.html` dans un navigateur** pour voir l'application.
3. **Inscrivez-vous** avec un nom d'utilisateur et un mot de passe.
4. **Connectez-vous** pour accéder au tableau de bord et gérer vos graphes.
5. **Ajoutez des graphes** et observez leurs évolutions !

## Dépendances

- jQuery (bibliothèque JavaScript pour simplifier le code) : `https://code.jquery.com/jquery-3.6.0.min.js`

## Améliorations Possibles

Voici quelques améliorations qui pourraient être ajoutées au projet :

- **Interface utilisateur améliorée** : Ajouter plus de styles CSS et animations pour une meilleure expérience utilisateur.
- **Support multi-utilisateurs** : Permettre aux utilisateurs de visualiser les graphes d'autres personnes.
- **Exportation des données** : Ajouter une fonctionnalité pour exporter les graphes sous forme d'images ou de fichiers CSV.
- **Authentification plus sécurisée** : Implémenter une gestion d'authentification plus robuste avec tokens JWT.
- **Mode sombre** : Ajouter une option pour changer l'apparence de l'interface en mode sombre.
