import { useEffect } from 'react'
import { contact, skills } from './content.js'

const tasks = [
  { title: 'Corrections de bogues', text: 'Les billets qui s’accumulent dans votre backlog, réglés et documentés.' },
  { title: 'Maintenance WordPress', text: 'Mises à jour, extensions, thèmes enfants, problèmes de performance.' },
  { title: 'Intégrations et API', text: 'Formulaires, CRM, paiements, infolettres, synchronisation de données.' },
  { title: 'Développement front et back', text: 'Gabarits, composants React, PHP, Python, C#, requêtes SQL.' },
  { title: 'Hébergement et DNS', text: 'Migrations de sites, courriels, certificats, sauvegardes, serveurs Linux.' },
  { title: 'Scripts et automatisation', text: 'Les tâches répétitives de votre équipe, transformées en outils internes.' }
]

const guarantees = [
  { title: 'Marque blanche', text: 'Je travaille sous votre nom. Vos clients restent vos clients, et je ne les sollicite jamais.' },
  { title: 'Confidentialité', text: 'Entente de confidentialité signée avant le premier accès à vos projets.' },
  { title: 'Vos outils', text: 'Git, Trello, Jira, Asana, Slack ou Teams : je m’adapte à votre façon de travailler.' },
  { title: 'Suivi des heures', text: 'Chaque intervention est notée avec sa durée, pour refacturer vos clients facilement.' }
]

const plans = [
  {
    title: 'Ponctuel',
    price: '55 $/h',
    text: 'Pour un billet ou un petit mandat, sans engagement.',
    items: ['Estimation avant de commencer', 'Facturation à la fin du mandat']
  },
  {
    title: 'Banque de 10 h',
    price: '500 $',
    text: 'Soit 50 $/h. Un renfort disponible au besoin pour vos projets clients.',
    items: ['Heures utilisables sur plusieurs projets', 'Rapport détaillé des heures'],
    featured: true
  },
  {
    title: 'Banque de 20 h',
    price: '900 $',
    text: 'Soit 45 $/h. Pour les agences qui ont un volume régulier.',
    items: ['Priorité sur les nouvelles demandes', 'Rapport détaillé des heures']
  }
]

const faq = [
  {
    q: 'Comment se passe le premier mandat ?',
    a: 'Vous m’envoyez un billet ou une courte description, je vous réponds avec une estimation. On commence par un petit mandat pour voir si la collaboration vous convient.'
  },
  {
    q: 'Les heures d’une banque expirent-elles ?',
    a: 'Une banque d’heures reste valide six mois. Les heures non utilisées ne sont pas remboursées, mais vous recevez un rappel avant l’échéance.'
  },
  {
    q: 'Comment me donnez-vous accès à vos projets ?',
    a: 'Idéalement par un compte nominatif (Git, hébergement, WordPress) que vous pouvez révoquer à tout moment. Aucun mot de passe partagé par courriel.'
  },
  {
    q: 'Travaillez-vous avec plusieurs agences ?',
    a: 'Oui, et les projets de chacune restent strictement séparés. Je ne parle jamais d’un client à un autre.'
  }
]

export default function Agences() {
  useEffect(() => {
    document.title = 'Sous-traitance pour agences · Kerouac Technologies'
  }, [])

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Sous-traitance pour agence')}`

  return (
    <>
      <section className="hero hero-agences">
        <div className="wrap">
          <p className="eyebrow">Sous-traitance pour agences web et entreprises TI</p>
          <h1>Un développeur de plus dans votre équipe, sans embaucher.</h1>
          <p className="lead">
            Quand les projets s’accumulent, je prends en charge les corrections, la maintenance et les
            intégrations de vos clients, en marque blanche et à distance, partout au Québec.
          </p>
          <div className="hero-actions">
            <a className="btn" href={mailto}>Proposer un premier mandat</a>
            <a className="btn btn-ghost" href="#formules">Voir les formules</a>
          </div>
        </div>
      </section>

      <section className="section" id="prise-en-charge">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Ce que je prends en charge</p>
            <h2>Les tâches qui ralentissent votre équipe.</h2>
          </header>
          <div className="task-grid">
            {tasks.map((task) => (
              <article className="card task" key={task.title}>
                <h3>{task.title}</h3>
                <p>{task.text}</p>
              </article>
            ))}
          </div>
          <ul className="skills skills-wide">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </section>

      <section className="section section-dark" id="collaboration">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Comment on travaille ensemble</p>
            <h2>Discret, fiable et facile à refacturer.</h2>
          </header>
          <div className="audience-grid guarantee-grid">
            {guarantees.map((item) => (
              <div className="audience" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="formules">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Formules</p>
            <h2>Plus vous réservez d’heures, plus le taux baisse.</h2>
            <p>Prix en dollars canadiens, avant taxes applicables.</p>
          </header>
          <div className="plan-grid">
            {plans.map((plan) => (
              <article className={plan.featured ? 'card package featured' : 'card package'} key={plan.title}>
                {plan.featured && <span className="badge">Le plus populaire</span>}
                <h3>{plan.title}</h3>
                <p className="price"><strong>{plan.price}</strong></p>
                <p>{plan.text}</p>
                <ul className="checks">
                  {plan.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="questions">
        <div className="wrap faq-wrap">
          <header className="section-head">
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Avant de travailler ensemble.</h2>
          </header>
          <div className="faq">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark cta-band">
        <div className="wrap cta-inner">
          <div>
            <h2>Un billet qui traîne dans votre backlog ?</h2>
            <p>Envoyez-le-moi, vous aurez une estimation en un jour ouvrable.</p>
          </div>
          <a className="btn btn-signal" href={mailto}>{contact.email}</a>
        </div>
      </section>
    </>
  )
}
