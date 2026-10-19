// Coordonnées publiques.
export const contact = {
  email: 'contact@kerouactechnologies.ca',
  region: 'Partout au Québec, à distance'
}

export const services = [
  { id: 'web', icon: 'web', title: 'Développement web', line: 'Sites, correctifs et WordPress.', rate: 50 },
  { id: 'automatisation', icon: 'automation', title: 'Automatisation', line: 'Scripts Python, Excel et API.', rate: 60 },
  { id: 'soutien', icon: 'support', title: 'Soutien technique', line: 'Courriels, DNS, hébergement, dépannage.', rate: 50 },
  { id: 'sous-traitance', icon: 'partner', title: 'Sous-traitance TI', line: 'Renfort pour agences, en marque blanche.', rate: 45 }
]

export const packages = [
  { title: 'Dépannage', price: '300 $', unit: 'prix fixe', line: 'Un problème réglé à distance.' },
  { title: 'Automatisation', price: '600 $', unit: 'prix fixe', line: 'Une tâche manuelle devient un script.', featured: true },
  { title: 'Banque de 10 h', price: '500 $', unit: 'pour agences', line: 'Du renfort pour vos projets clients.', link: { href: '/agences', label: 'Offre agences' } },
  { title: 'Maintenance', price: '250 $', unit: 'par mois', line: 'Mises à jour, sauvegardes, assistance.' }
]

export const projects = [
  {
    title: 'Kerouac Productions',
    tag: 'Boutique en ligne · serveur Linux autohébergé',
    image: '/images/kerouac-productions.webp',
    url: 'https://kerouacproductions.studio',
    urlLabel: 'kerouacproductions.studio',
    stack: ['React', 'Express', 'PostgreSQL', 'Stripe', 'Docker'],
    featured: true
  },
  {
    title: 'Itsgenygarts',
    tag: 'Boutique en ligne · admin web et mobile',
    image: '/images/itsgenygarts.webp',
    url: 'https://itsgenygarts.com',
    urlLabel: 'itsgenygarts.com',
    stack: ['React', 'Express', 'Prisma', 'PostgreSQL', 'Stripe', 'Expo'],
    featured: true,
    reverse: true
  },
  {
    title: 'MonPetitUber',
    tag: 'Commande et livraison sur le campus',
    image: '/images/monpetituber.webp',
    url: 'https://monpetituber.app',
    urlLabel: 'monpetituber.app',
    stack: ['React', 'TypeScript', 'Prisma', 'Stripe']
  },
  {
    title: 'Données financières en temps réel',
    tag: 'Mandat à contrat',
    mock: 'chart',
    stack: ['FastAPI', 'TimescaleDB', 'WebSocket', 'React']
  },
  {
    title: 'Courriels de prospection automatisés',
    tag: 'Automatisation · Python',
    mock: 'flow',
    stack: ['Python', 'CSV', 'IA', 'Web scraping']
  },
  {
    title: 'Lazy Music',
    tag: 'Plugin Linux · lecteur de musique',
    image: '/images/lazy-music.webp',
    stack: ['Python', 'QML', 'mpv', 'API Subsonic']
  },
  {
    title: 'Plugin Bayan Accordion',
    tag: 'Logiciel · C++',
    image: '/images/bayan-accordion.webp',
    stack: ['C++', 'JUCE', 'CMake']
  },
  {
    title: 'Spectre Entertainment',
    tag: 'WordPress · boutique en ligne',
    mock: 'wordpress',
    stack: ['WordPress', 'WooCommerce', 'SEO']
  }
]

export const audiences = [
  { icon: 'agency', title: 'Agences web' },
  { icon: 'marketing', title: 'Agences marketing' },
  { icon: 'server', title: 'Entreprises TI' },
  { icon: 'store', title: 'PME' },
  { icon: 'person', title: 'Travailleurs autonomes' },
  { icon: 'heart', title: 'OBNL' }
]

export const steps = [
  { icon: 'message', title: 'Vous écrivez', text: 'Quelques lignes suffisent.' },
  { icon: 'estimate', title: 'Estimation gratuite', text: 'Le prix est connu d’avance.' },
  { icon: 'remote', title: 'Travail à distance', text: 'Aucune visite à prévoir.' },
  { icon: 'report', title: 'Suivi clair', text: 'Résumé et facture détaillée.' }
]

export const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'C#', '.NET', 'FastAPI', 'PostgreSQL', 'WordPress', 'Linux', 'Docker', 'Cloudflare']
