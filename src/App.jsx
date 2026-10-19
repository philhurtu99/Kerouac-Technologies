import { useState } from 'react'
import { audiences, contact, examples, packages, services, skills, steps } from './content.js'
import Agences from './Agences.jsx'

const nav = [
  { href: '/#services', label: 'Services' },
  { href: '/#tarifs', label: 'Tarifs' },
  { href: '/#exemples', label: 'Exemples' },
  { href: '/agences', label: 'Agences' },
  { href: '/#contact', label: 'Contact' }
]

function Logo() {
  return (
    <a className="logo" href="/" aria-label="Kerouac Technologies, accueil">
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <rect x="1" y="1" width="38" height="38" rx="9" />
        <path d="M12 12v16M12 20l8-8M14.5 17.5L21 28M24 12h8M28 12v16" />
      </svg>
      <span>
        Kerouac <strong>Technologies</strong>
      </span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="wrap header-inner">
        <Logo />
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Fermer' : 'Menu'}
        </button>
        <nav id="main-nav" className={open ? 'nav open' : 'nav'} onClick={() => setOpen(false)}>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <a className="btn btn-small" href="/#contact">Demander une soumission</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Solutions informatiques pour entreprises et professionnels</p>
          <h1>Renfort informatique à distance pour agences web et PME.</h1>
          <p className="lead">
            Développement, maintenance, automatisation et dépannage. Kerouac Technologies accompagne les
            entreprises et les professionnels dans le développement, la maintenance et l’optimisation de
            leurs outils informatiques.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#contact">Décrire mon besoin</a>
            <a className="btn btn-ghost" href="#tarifs">Voir les tarifs</a>
          </div>
          <ul className="hero-facts">
            <li>Interventions à distance partout au Québec</li>
            <li>Estimation gratuite avant chaque mandat</li>
            <li>Mandats ponctuels ou récurrents</li>
          </ul>
        </div>
        <div className="console" aria-hidden="true">
          <div className="console-bar">
            <span /><span /><span />
            <em>mandat-0142</em>
          </div>
          <pre>
{`$ diagnostic --site client.ca
  ✓ DNS               ok
  ✓ certificat SSL    valide
  ✗ formulaire        erreur 500
$ corriger formulaire
  ✓ courriel SMTP reconfiguré
  ✓ soumission test   reçue
$ automatiser rapport-hebdo.xlsx
  ✓ 3 fichiers fusionnés en 2 s
`}
            <span className="caret">█</span>
          </pre>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Services</p>
          <h2>Une offre assez large pour vos besoins, assez précise pour être efficace.</h2>
        </header>
        <div className="service-grid">
          {services.map((service) => (
            <article className="card service" key={service.id}>
              <div className="service-top">
                <span className="code">{service.code}</span>
                <span className="rate">à partir de <strong>{service.rate} $/h</strong></span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="checks">
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section section-alt" id="tarifs">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Tarifs</p>
          <h2>À l’heure ou à prix fixe, selon ce qui vous convient.</h2>
          <p>
            Les petits mandats bien définis ont un prix fixe connu d’avance. Les projets ouverts et la
            sous-traitance sont facturés à l’heure, avec un suivi détaillé.
          </p>
        </header>
        <div className="package-grid">
          {packages.map((pack) => (
            <article className={pack.featured ? 'card package featured' : 'card package'} key={pack.title}>
              {pack.featured && <span className="badge">Le plus demandé</span>}
              <h3>{pack.title}</h3>
              <p className="price">
                <span className="from">à partir de</span>
                <strong>{pack.price}</strong>
                <span className="unit">{pack.unit}</span>
              </p>
              <p>{pack.description}</p>
              <ul className="checks">
                {pack.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {pack.link && <a className="card-link" href={pack.link.href}>{pack.link.label}</a>}
            </article>
          ))}
        </div>
        <div className="rates">
          <h3>Taux horaires de lancement</h3>
          <dl>
            {services.map((service) => (
              <div key={service.id}>
                <dt>{service.title}</dt>
                <dd>dès {service.rate} $/h</dd>
              </div>
            ))}
          </dl>
          <p className="fine">
            Prix en dollars canadiens, avant taxes applicables. Les forfaits mensuels précisent les
            interventions incluses ; le temps additionnel est facturé au taux horaire.
          </p>
        </div>
      </div>
    </section>
  )
}

function Examples() {
  return (
    <section className="section" id="exemples">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Exemples de mandats</p>
          <h2>Des problèmes concrets, réglés à distance.</h2>
          <p>Trois mandats types, pour donner une idée de ce qui est possible et de ce que ça coûte.</p>
        </header>
        <div className="example-grid">
          {examples.map((example) => (
            <article className="card example" key={example.client}>
              <p className="example-client">{example.client}</p>
              <p><span className="label">Le besoin</span>{example.problem}</p>
              <p><span className="label">La solution</span>{example.solution}</p>
              <p className="example-price">{example.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Audience() {
  return (
    <section className="section section-dark" id="clientele">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Clientèle</p>
          <h2>Pensé d’abord pour les agences et les entreprises TI.</h2>
          <p>
            Vous avez déjà des clients et des projets en cours ; il vous manque parfois une paire de mains
            fiable. Je m’intègre à votre façon de travailler, en marque blanche au besoin.
          </p>
        </header>
        <div className="audience-grid">
          {audiences.map((audience) => (
            <div className="audience" key={audience.title}>
              <h3>{audience.title}</h3>
              <p>{audience.offer}</p>
            </div>
          ))}
        </div>
        <a className="btn btn-signal" href="/agences">Voir l’offre de sous-traitance pour agences</a>
        <div className="av">
          <p className="eyebrow">Production audiovisuelle</p>
          <p>
            Formé en audiovisuel autant qu’en informatique, je comprends les besoins des studios et des
            maisons de production : gestion et transfert de gros fichiers, stockage réseau, serveurs,
            automatisation des flux de travail et outils internes.
          </p>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="demarche">
      <div className="wrap process">
        <header className="section-head">
          <p className="eyebrow">Démarche</p>
          <h2>Simple, du premier courriel à la facture.</h2>
        </header>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="about">
          <div>
            <p className="eyebrow">Qui est derrière</p>
            <p>
              Kerouac Technologies, c’est Philippe, diplômé d’une AEC en développement web, avec une
              expérience pratique de Linux et de l’administration de serveurs. Vous parlez directement à la
              personne qui fait le travail.
            </p>
          </div>
          <ul className="skills">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', company: '', service: services[0].title, message: '' })
  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value })

  const submit = (event) => {
    event.preventDefault()
    const subject = `Demande de soumission : ${form.service}`
    const body = [
      `Nom : ${form.name}`,
      form.company && `Entreprise : ${form.company}`,
      `Service : ${form.service}`,
      '',
      form.message
    ].filter((line) => line !== false && line !== '').join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section section-alt" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Parlez-moi de votre projet.</h2>
          <p>
            Décrivez votre besoin en quelques lignes. Vous recevez une réponse et une estimation gratuite,
            habituellement dans un délai d’un jour ouvrable.
          </p>
          <p className="contact-direct">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span>{contact.region}</span>
          </p>
        </div>
        <form className="card form" onSubmit={submit}>
          <label>
            Nom
            <input required value={form.name} onChange={update('name')} autoComplete="name" />
          </label>
          <label>
            Entreprise <span className="optional">(facultatif)</span>
            <input value={form.company} onChange={update('company')} autoComplete="organization" />
          </label>
          <label>
            Service
            <select value={form.service} onChange={update('service')}>
              {services.map((service) => <option key={service.id}>{service.title}</option>)}
              <option>Autre</option>
            </select>
          </label>
          <label>
            Votre besoin
            <textarea required rows="5" value={form.message} onChange={update('message')} />
          </label>
          <button className="btn" type="submit">Envoyer ma demande</button>
          <p className="fine">Le bouton ouvre votre logiciel de courriel avec la demande déjà remplie.</p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <Logo />
        <p>Développement web · Automatisation · Soutien informatique</p>
        <p>© {new Date().getFullYear()} Kerouac Technologies</p>
      </div>
    </footer>
  )
}

export default function App() {
  const isAgences = window.location.pathname.replace(/\/+$/, '') === '/agences'
  return (
    <>
      <a className="skip" href="#contenu">Aller au contenu</a>
      <Header />
      <main id="contenu">
        {isAgences ? (
          <Agences />
        ) : (
          <>
            <Hero />
            <Services />
            <Pricing />
            <Examples />
            <Audience />
            <Process />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
