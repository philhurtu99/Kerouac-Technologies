// Coordonnées publiques. À confirmer avant la mise en ligne.
export const contact = {
  email: 'contact@kerouactechnologies.ca',
  region: 'Partout au Québec, à distance'
}

export const services = [
  {
    id: 'web',
    code: '01',
    title: 'Développement web',
    summary: 'Création, modification et maintenance de sites web et d’applications.',
    items: [
      'Création de sites et de pages',
      'Modifications et corrections de bogues',
      'Formulaires et intégrations',
      'WordPress : thèmes, extensions, mises à jour'
    ],
    rate: 50
  },
  {
    id: 'automatisation',
    code: '02',
    title: 'Automatisation',
    summary: 'Scripts, intégrations d’API et automatisation de processus répétitifs.',
    items: [
      'Scripts Python sur mesure',
      'Automatisation Excel et CSV',
      'Intégrations d’API entre vos outils',
      'Tâches planifiées et rapports automatiques'
    ],
    rate: 60
  },
  {
    id: 'soutien',
    code: '03',
    title: 'Soutien technique',
    summary: 'Dépannage informatique à distance, configuration de services et résolution de problèmes.',
    items: [
      'Configuration de courriels et DNS',
      'Hébergement et noms de domaine',
      'Sauvegardes et récupération',
      'Dépannage logiciel à distance'
    ],
    rate: 50
  },
  {
    id: 'sous-traitance',
    code: '04',
    title: 'Sous-traitance TI',
    summary: 'Collaboration avec les agences et entreprises pour des mandats ponctuels ou récurrents.',
    items: [
      'Développement en marque blanche',
      'Maintenance applicative',
      'Correction de bogues sur plusieurs projets',
      'Soutien technique de deuxième niveau'
    ],
    rate: 45
  }
]

export const packages = [
  {
    title: 'Dépannage',
    price: '300 $',
    unit: 'prix fixe',
    description: 'Un problème précis réglé à distance : site en panne, formulaire brisé, courriel ou DNS mal configuré.',
    includes: ['Diagnostic et correction', 'Jusqu’à 4 h d’intervention', 'Résumé de ce qui a été fait']
  },
  {
    title: 'Automatisation',
    price: '600 $',
    unit: 'prix fixe',
    description: 'Un processus manuel transformé en script : copie entre fichiers Excel, export CSV, rapport hebdomadaire.',
    includes: ['Analyse du processus actuel', 'Script Python livré et documenté', 'Mise en place sur votre poste'],
    featured: true
  },
  {
    title: 'Banque d’heures agence',
    price: '500 $',
    unit: '10 heures',
    description: 'Un renfort technique pour vos projets clients, utilisé au besoin, au rythme de votre agence.',
    includes: ['Bogues, intégrations, maintenance', 'Suivi des heures détaillé', 'Travail en marque blanche'],
    link: { href: '/agences', label: 'Détails pour les agences' }
  },
  {
    title: 'Maintenance PME',
    price: '250 $',
    unit: 'par mois',
    description: 'Mises à jour, sauvegardes et assistance pour votre site et vos outils, avec un nombre d’interventions défini.',
    includes: ['Mises à jour et sauvegardes', 'Jusqu’à 4 h d’assistance par mois', 'Sans engagement à long terme']
  }
]

export const examples = [
  {
    client: 'Entrepreneur en construction',
    problem: 'Son site WordPress ne fonctionne plus correctement et son formulaire de soumission est défectueux.',
    solution: 'Diagnostic et correction à distance, formulaire testé de bout en bout.',
    price: '250 $'
  },
  {
    client: 'Petite entreprise',
    problem: 'Chaque semaine, un employé copie manuellement des informations entre plusieurs fichiers Excel.',
    solution: 'Un script Python qui automatise le processus en quelques secondes.',
    price: '500 $'
  },
  {
    client: 'Agence web',
    problem: 'Elle a besoin d’un développeur pour corriger des bogues sur plusieurs projets.',
    solution: '10 heures de sous-traitance, intégrées à son équipe.',
    price: '500 $'
  }
]

export const audiences = [
  { title: 'Agences web', offer: 'Sous-traitance et corrections de bogues' },
  { title: 'Agences marketing', offer: 'Maintenance WordPress et intégrations' },
  { title: 'Entreprises de services TI', offer: 'Sous-traitance technique' },
  { title: 'PME de 5 à 30 employés', offer: 'Automatisation et soutien informatique' },
  { title: 'Travailleurs autonomes', offer: 'Sites web et dépannage' },
  { title: 'OBNL', offer: 'Maintenance web et automatisation' }
]

export const steps = [
  { title: 'Vous décrivez le besoin', text: 'Par courriel, en quelques lignes. Une capture d’écran vaut souvent mille mots.' },
  { title: 'Estimation gratuite', text: 'Vous recevez un prix fixe ou une estimation d’heures avant que le travail commence.' },
  { title: 'Intervention à distance', text: 'Accès sécurisé, travail documenté, aucune visite à prévoir.' },
  { title: 'Suivi clair', text: 'Un résumé de ce qui a été fait et une facture détaillée.' }
]

export const skills = ['Linux', 'Python', 'C#', 'SQL', 'JavaScript', 'React', 'WordPress', 'Administration de serveurs', 'DNS et courriels', 'Docker']

export const skillGroups = [
  { title: 'Langages', items: ['C#', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Web', items: ['React', 'Angular', 'Node.js', 'Express', '.NET', 'FastAPI', 'WordPress'] },
  { title: 'Données', items: ['PostgreSQL', 'TimescaleDB', 'SQL Server', 'Redis', 'Prisma'] },
  { title: 'Systèmes', items: ['Linux', 'Docker', 'Cloudflare', 'DNS et courriels', 'Git', 'Azure DevOps'] }
]

export const projects = [
  {
    title: 'Plateforme de commande et de livraison',
    kind: 'Application web complète',
    url: 'https://monpetituber.app',
    urlLabel: 'monpetituber.app',
    summary:
      'Commande en ligne de matériel scolaire, de la vitrine jusqu’à la livraison, avec une interface pour les employés.',
    points: [
      'Catalogue, panier, promotions, paiement Stripe et factures PDF',
      'Connexion Google, double authentification par courriel ou texto',
      'Interfaces admin et employé : inventaire, préparation, assignation des livreurs, suivi en temps réel',
      'Tests automatisés du backend avec Jest'
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Stripe']
  },
  {
    title: 'Plateforme de données financières',
    kind: 'Mandat à contrat',
    summary: 'Collecte et visualisation en temps réel de données de marchés financiers.',
    points: [
      'API backend et flux de données en direct par WebSocket',
      'Stockage de séries temporelles et cache',
      'Indicateurs techniques (SMA, EMA, RSI, MACD) et tableaux de bord'
    ],
    stack: ['FastAPI', 'Python', 'PostgreSQL', 'TimescaleDB', 'Redis', 'React']
  },
  {
    title: 'Kerouac Productions',
    kind: 'Boutique en ligne et serveur autohébergé',
    url: 'https://kerouacproductions.studio',
    urlLabel: 'kerouacproductions.studio',
    summary: 'Le site de mon studio de musique, avec une boutique de plugins audio développés à l’interne.',
    points: [
      'Paiement Stripe, comptes clients et téléchargements sécurisés',
      'Système de licences pour les plugins',
      'Serveur Linux maison : Docker, sauvegardes chiffrées, déploiement automatique'
    ],
    stack: ['React', 'Express', 'PostgreSQL', 'Stripe', 'Docker', 'Linux']
  },
  {
    title: 'Spectre Entertainment',
    kind: 'Intégration WordPress et commerce en ligne',
    summary: 'Intégration de contenu et gestion d’une boutique en ligne de matériel audiovisuel.',
    points: [
      'Gestion des produits, des commandes et de la base de données',
      'Optimisation SEO pour améliorer le classement du site'
    ],
    stack: ['WordPress', 'WooCommerce', 'SEO']
  }
]

export const background = [
  { years: '2024 – 2026', title: 'AEC en développement d’applications web', place: 'Cégep Édouard-Montpetit' },
  { years: '2026', title: 'Coordonnateur technique, production événementielle', place: 'Parlons Virtuel' },
  { years: '2021 – 2025', title: 'Gérant, gestion d’équipe et service à la clientèle', place: 'Archambault' },
  { years: 'Depuis 2019', title: 'Propriétaire et ingénieur audio', place: 'Kerouac Productions' },
  { years: '2018 – 2019', title: 'AEC en technique audiovisuelle', place: 'Musitechnic' }
]
