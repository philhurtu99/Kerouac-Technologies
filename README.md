# Kerouac Technologies

Site vitrine de Kerouac Technologies : développement web, automatisation, soutien
informatique et sous-traitance TI à distance pour agences web et PME au Québec.

Site statique React + Vite, sans backend. Le formulaire de contact ouvre le logiciel
de courriel du visiteur avec la demande déjà remplie.

## Développement

```bash
npm install
npm run dev        # http://localhost:5174
npm run build
npm run test:e2e   # tests Playwright, ordinateur et mobile
```

Tout le texte du site (services, tarifs, exemples, clientèle, courriel de contact)
est dans [`src/content.js`](./src/content.js).

## Déploiement

L'image Docker construit le site et le sert avec nginx (non root, système de
fichiers en lecture seule). Sur le serveur :

```bash
bash deploy/deploy-server.sh
```

Le site répond sur `127.0.0.1:4343`, à relier au domaine par le proxy inverse du
serveur, à côté de Kerouac Productions (`127.0.0.1:4242`).
