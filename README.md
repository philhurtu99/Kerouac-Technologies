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

Domaine : `kerouactechnologies.ca`, enregistré chez Cloudflare.

### Option recommandée : Cloudflare Pages

Aucun serveur à gérer, et chaque push sur `main` met le site à jour.

1. Cloudflare → Compute → Workers & Pages → Create → Pages → Connect to Git,
   puis choisir `philhurtu99/kerouac-technologies`.
2. Framework preset : Vite. Build command : `npm run build`. Output : `dist`.
3. Une fois déployé : Custom domains → `kerouactechnologies.ca` (ajouter aussi
   `www.kerouactechnologies.ca`).

Les en-têtes de sécurité et de cache sont dans [`public/_headers`](./public/_headers).

### Option serveur maison (même tunnel que Kerouac Productions)

L'image Docker construit le site et le sert avec nginx (non root, système de
fichiers en lecture seule), sur le réseau `kerouac-public` du tunnel Cloudflare :

```bash
bash deploy/deploy-server.sh
```

Ajouter ensuite au tunnel un nom d'hôte public `kerouactechnologies.ca` qui pointe
vers `http://kerouac-technologies-site:8080`.

### Courriel

Cloudflare → kerouactechnologies.ca → Email → Email Routing : créer
`contact@kerouactechnologies.ca` et le rediriger vers ta boîte personnelle. C'est
l'adresse qu'utilisent le site et le formulaire.
