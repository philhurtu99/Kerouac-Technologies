// Coordonnées publiques.
export const contact = {
  email: 'contact@kerouactechnologies.ca',
  region: 'Partout au Québec, à distance'
}

export const promises = [
  { icon: 'person', text: 'Un interlocuteur unique' },
  { icon: 'estimate', text: 'Estimation gratuite' },
  { icon: 'remote', text: 'Partout au Québec, à distance' }
]

export const problems = [
  { icon: 'clock', title: 'Vous perdez du temps avec des tâches manuelles ?', line: 'Je les automatise : rapports, fichiers Excel, courriels.' },
  { icon: 'tools', title: 'Votre site ou votre logiciel a besoin de modifications ?', line: 'Correctifs, nouvelles fonctions et mises à jour.' },
  { icon: 'partner', title: 'Vous avez besoin d’un développeur pour un mandat ponctuel ?', line: 'Sans embaucher ni passer par une grosse agence.' }
]

export const services = [
  { id: 'applications', icon: 'web', title: 'Développement d’applications', line: 'Sites et applications web sur mesure.' },
  { id: 'automatisation', icon: 'automation', title: 'Automatisation', line: 'Scripts Python, Excel, rapports et API.' },
  { id: 'integration', icon: 'plug', title: 'Intégration et maintenance', line: 'Relier vos logiciels et garder vos outils à jour.' },
  { id: 'soutien', icon: 'support', title: 'Soutien informatique', line: 'Courriels, DNS, hébergement et dépannage.' }
]

export const packages = [
  { title: 'Dépannage', price: '300 $', unit: 'prix fixe', line: 'Un problème réglé à distance.' },
  { title: 'Automatisation', price: '600 $', unit: 'prix fixe', line: 'Par exemple, un rapport Excel généré en PDF, script livré.', featured: true },
  { title: 'Maintenance', price: '250 $', unit: 'par mois', line: 'Mises à jour, sauvegardes et assistance.' },
  { title: 'À l’heure', price: '45 $', unit: 'de l’heure', line: 'Pour la sous-traitance et les besoins à préciser.', link: { href: '/agences', label: 'Offre agences' } }
]

// Les trois premiers projets sont mis en vedette.
export const projects = [

  {
    title: 'Kerouac Productions',
    context: 'Ma propre entreprise',
    summary: 'Site commercial avec boutique et paiements en ligne, hébergé sur mon propre serveur Linux.',
    value: 'Un projet géré de bout en bout, du code au serveur.',
    image: '/images/kerouac-productions.webp',
    url: 'https://kerouacproductions.studio',
    urlLabel: 'kerouacproductions.studio',
    stack: ['React', 'Express', 'PostgreSQL', 'Stripe', 'Docker']
  },
  {
    title: 'Données financières en temps réel',
    context: 'Mandat client',
    summary: 'Plateforme qui collecte des données boursières, calcule des indicateurs et les affiche en direct.',
    value: 'Centraliser et visualiser des informations complexes.',
    image: '/images/trading-platform.webp',
    stack: ['FastAPI', 'TimescaleDB', 'WebSocket', 'React', 'TypeScript']
  },  {
    title: 'MonPetitUber',
    context: 'Projet scolaire · en équipe',
    summary: 'Application de commande et de livraison pour une école : catalogue, paiements, employés, inventaire et promotions.',
    value: 'Un outil sur mesure pour un processus d’entreprise.',
    image: '/images/monpetituber.webp',
    url: 'https://monpetituber.app',
    urlLabel: 'monpetituber.app',
    stack: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Stripe']
  },
  {
    title: 'Itsgenygarts',
    context: 'Mandat client · boutique en ligne',
    image: '/images/itsgenygarts.webp',
    url: 'https://itsgenygarts.com',
    urlLabel: 'itsgenygarts.com',
    stack: ['React', 'Express', 'Prisma', 'Stripe', 'Expo']
  },
  {
    title: 'Spectre Entertainment',
    context: 'Mandat client · boutique WordPress',
    image: '/images/spectre.webp',
    url: 'https://boutique.spectre-entertainment.com',
    urlLabel: 'boutique.spectre-entertainment.com',
    stack: ['WordPress', 'WooCommerce', 'SEO']
  },
  {
    title: 'Courriels de prospection automatisés',
    context: 'Projet personnel · outil interne',
    image: '/images/email-automation.webp',
    stack: ['Python', 'IA', 'Web scraping']
  },
  {
    title: 'Lazy Music - lecteur de musique autohebergé',
    context: 'Projet personnel · plugin Linux',
    image: '/images/lazy-music.webp',
    stack: ['Python', 'QML', 'mpv', 'API Subsonic']
  },
  {
    title: 'Plugin de musique - Bayan Accordion',
    context: 'Projet personnel · logiciel C++',
    image: '/images/bayan-accordion.webp',
    stack: ['C++', 'JUCE', 'CMake']
  }
]

export const about = {
  title: 'Un développeur accessible, du premier échange à la livraison.',
  paragraphs: [
    'Je suis Philippe Clément, développeur logiciel indépendant et fondateur de Kerouac Technologies.',
    'Diplômé en développement d’applications web, je conçois des applications, des automatisations et des solutions informatiques adaptées aux besoins des entreprises.',
    'Avant de me spécialiser en développement, j’ai travaillé dans le commerce, la gestion et le secteur audiovisuel. Ce parcours m’a permis de comprendre les réalités du terrain : les contraintes de temps, les processus manuels et l’importance d’avoir des outils fiables.',
    'Aujourd’hui, je mets mes compétences techniques au service des entreprises qui souhaitent améliorer leurs outils existants, automatiser certaines opérations ou réaliser un projet de développement.',
    'Avec Kerouac Technologies, vous échangez directement avec la personne qui analyse votre besoin, développe la solution et assure le suivi.'
  ]
}

export const strengths = [
  { icon: 'web', title: 'Développement logiciel', items: ['React', 'TypeScript', 'Python', 'C#', '.NET', 'API', 'SQL'] },
  { icon: 'heart', title: 'Expérience opérationnelle', items: ['Gestion', 'Commerce', 'Coordination', 'Relation client'] },
  { icon: 'server', title: 'Autonomie technique', items: ['Linux', 'Serveurs', 'Docker', 'Hébergement', 'Maintenance'] }
]

export const steps = [
  { icon: 'message', title: 'Vous m’écrivez', text: 'Quelques lignes suffisent.' },
  { icon: 'estimate', title: 'Estimation gratuite', text: 'Le prix est convenu d’avance.' },
  { icon: 'remote', title: 'Je développe', text: 'À distance, avec des suivis réguliers.' },
  { icon: 'report', title: 'Livraison et suivi', text: 'Résumé clair et facture détaillée.' }
]

// Utilisé par la page Agences.
export const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'C#', '.NET', 'FastAPI', 'PostgreSQL', 'WordPress', 'Linux', 'Docker', 'Cloudflare']
