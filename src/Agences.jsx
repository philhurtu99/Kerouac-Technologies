import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { contact, skills } from './content.js'
import { Icon } from './visuals.jsx'

const tasks = [
  { icon: 'bug', title: 'Bogues', text: 'Votre backlog, réglé.' },
  { icon: 'wordpress', title: 'WordPress', text: 'Mises à jour et extensions.' },
  { icon: 'plug', title: 'Intégrations', text: 'CRM, paiements, API.' },
  { icon: 'web', title: 'Front et back', text: 'React, PHP, Python, SQL.' },
  { icon: 'server', title: 'Hébergement', text: 'Migrations, DNS, courriels.' },
  { icon: 'automation', title: 'Scripts', text: 'Outils internes sur mesure.' }
]

const guarantees = [
  { icon: 'tag', title: 'Marque blanche' },
  { icon: 'lock', title: 'Entente de confidentialité' },
  { icon: 'tools', title: 'Vos outils' },
  { icon: 'clock', title: 'Heures détaillées' }
]

const plans = [
  { title: 'Ponctuel', price: '55 $', unit: 'de l’heure', text: 'Sans engagement.' },
  { title: 'Banque de 10 h', price: '500 $', unit: 'soit 50 $/h', text: 'Valide six mois.', featured: true },
  { title: 'Banque de 20 h', price: '900 $', unit: 'soit 45 $/h', text: 'Priorité sur vos demandes.' }
]

const faq = [
  {
    q: 'Comment se passe le premier mandat ?',
    a: 'Vous envoyez un billet, je réponds avec une estimation. On commence petit.'
  },
  {
    q: 'Comment me donnez-vous accès à vos projets ?',
    a: 'Par un compte nominatif que vous pouvez révoquer. Aucun mot de passe par courriel.'
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
          <p className="eyebrow">Sous-traitance pour agences</p>
          <h1>Un développeur de plus, sans embaucher.</h1>
          <p className="lead">En marque blanche, à distance, partout au Québec.</p>
          <div className="hero-actions">
            <a className="btn" href={mailto}>Proposer un mandat <ArrowRight size={18} /></a>
            <a className="btn btn-ghost" href="#formules">Voir les formules</a>
          </div>
        </div>
      </section>

      <section className="section" id="prise-en-charge">
        <div className="wrap">
          <header className="section-head center">
            <p className="eyebrow">Ce que je prends en charge</p>
            <h2>Les tâches qui ralentissent votre équipe.</h2>
          </header>
          <div className="service-grid task-grid">
            {tasks.map((task) => (
              <article className="tile" key={task.title}>
                <span className="tile-icon"><Icon name={task.icon} size={28} /></span>
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
          <header className="section-head center">
            <p className="eyebrow">Collaboration</p>
            <h2>Discret et facile à refacturer.</h2>
          </header>
          <div className="audience-row guarantee-row">
            {guarantees.map((item) => (
              <div className="audience-chip" key={item.title}>
                <Icon name={item.icon} size={26} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="formules">
        <div className="wrap">
          <header className="section-head center">
            <p className="eyebrow">Formules</p>
            <h2>Plus d’heures, meilleur taux.</h2>
          </header>
          <div className="plan-grid">
            {plans.map((plan) => (
              <article className={plan.featured ? 'card package featured' : 'card package'} key={plan.title}>
                {plan.featured && <span className="badge">Populaire</span>}
                <h3>{plan.title}</h3>
                <p className="price">
                  <strong>{plan.price}</strong>
                  <span className="unit">{plan.unit}</span>
                </p>
                <p>{plan.text}</p>
              </article>
            ))}
          </div>
          <p className="fine center">Prix en dollars canadiens, avant taxes.</p>
        </div>
      </section>

      <section className="section" id="questions">
        <div className="wrap faq-wrap">
          <header className="section-head">
            <p className="eyebrow">Questions</p>
            <h2>Avant de commencer.</h2>
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
            <h2>Un billet qui traîne ?</h2>
            <p>Envoyez-le-moi pour une estimation gratuite.</p>
          </div>
          <a className="btn btn-signal" href={mailto}>{contact.email}</a>
        </div>
      </section>
    </>
  )
}
