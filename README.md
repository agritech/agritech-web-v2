# AGRITECH

Bienvenu sur le site du projet AGRITECH. 

Agritech est une plateforme communautaire d'échange entre les acteurs du monde agricole. Il a pour objectif de permettre la communication entre ces différences acteurs

## Objectifs de la plateforme AGRITECH

Aujourd'hui, la plateforme permet de :

- Avoir un écho système pour les agriculteur leur permettant d'avoir des informations sur les différents produits exploités dans leur région.
Avoir des données consolidées aidant à la pris de décision rapide ;
- Aider les agriculteurs à réguler leur production en fonction du climat et du marché
- Cartographier les zones agricoles exploitables avec les caractéristiques liées a la zone et proposer des types de culture propice a la zone ;
- Permettre aux éleveurs et agriculteurs de connaitre les points d'eau et mettre en place un système de réservation pour faciliter l’accès a la ressource ;
- Mettre en place un système d'alerte pour faciliter la communucation des professionnels avec les agriculteurs.

## Personnes concernées

AGRITECH est une initiative qui a pour but de mettre en relation :

- Les agriculteurs (cultivateurs, éleveurs, pisciculteurs, ...)
- Les acheteur qui souhaitent connaître les prix moyens des productions ;
- Les partenaires interessés d'avoir des données consolidées sur la production d'une région données sous forme de rapport consolidé et détaillé ;
- Les professionnels de l'agriculture ;
- Et les pouvoir publics et ONG qui travaillent dans l'agriculture.

## Architecture

La version 2.0 de la plateform Agritech est conçues à l'aide de :

- Springboot pour la partie backend
- ReactJs pour la partie Frontale

## Développement

Pour développer sur le projet, il est nécessaire de disposer d'un environnement Maven et NPM.

### Installation des composants

Pour installer la partie frontale

```sh
git clone https://github.com/agritech/agritech-web-v2
cd agritech-web-v2/src/main/React
npm install
```

Pour installer le backend

```sh
git clone https://github.com/agritech/agritech-web-v2
cd agritech-web-v2
mvn clean install
```

### Lancer l'application backend durant le développement

#### Lancer le serveur en premier
```sh
mvn spring-boot:run
```

or by running Application class from your IDE.

#### run hot reload server
```sh
$ npm start
```

#### run front-end tests
```sh
$ npm test
```

### Package application for production

```sh
$ mvn clean install
```

this will package the java app + compiled react code into a jar file inside the target folder.

### Run the compiled jar file
```sh
$ java -jar target/react-starter-0.1.0.jar
```
## Lancer l'aplication Frontend durant les développements

```sh
cd agritech-web-v2/src/main/React
npm run
```
