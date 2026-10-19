import { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { audiences, contact, packages, projects, services, skills, steps } from './content.js'
import { HeroVisual, Icon, ProjectVisual } from './visuals.jsx'
import Agences from './Agences.jsx'
import Confidentialite from './Confidentialite.jsx'

const nav = [
  { href: '/#services', label: 'Services' },
  { href: '/#realisations', label: 'Réalisations' },
  { href: '/#tarifs', label: 'Tarifs' },
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
          <p className="eyebrow">Services informatiques à distance</p>
          <h1>Renfort informatique pour agences web et PME.</h1>
          <p className="lead">Développement web, automatisation et soutien technique, partout au Québec.</p>
          <div className="hero-actions">
            <a className="btn" href="#contact">Décrire mon besoin <ArrowRight size={18} /></a>
            <a className="btn btn-ghost" href="#realisations">Voir mes projets</a>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="wrap">
        <ul className="stats">
          <li><strong>4</strong><span>services</span></li>
          <li><strong>100 %</strong><span>à distance</span></li>
          <li><strong>dès 45 $</strong><span>de l’heure</span></li>
          <li><strong>FR · EN</strong><span>bilingue</span></li>
        </ul>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <header className="section-head center">
          <p className="eyebrow">Services</p>
          <h2>Ce que je fais pour vous.</h2>
        </header>
        <div className="service-grid">
          {services.map((service) => (
            <article className="tile" key={service.id}>
              <span className="tile-icon"><Icon name={service.icon} size={28} /></span>
              <h3>{service.title}</h3>
              <p>{service.line}</p>
              <span className="tile-rate">dès {service.rate} $/h</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section section-alt" id="realisations">
      <div className="wrap">
        <header className="section-head center">
          <p className="eyebrow">Réalisations</p>
          <h2>Des projets livrés.</h2>
        </header>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={project.featured ? 'project featured' : 'project'} key={project.title}>
              <ProjectVisual project={project} />
              <div className="project-info">
                <p className="project-tag">{project.tag}</p>
                <h3>{project.title}</h3>
                <ul className="stack">
                  {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
                {project.url && (
                  <a className="card-link" href={project.url} rel="noopener noreferrer">
                    {project.urlLabel} <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section" id="tarifs">
      <div className="wrap">
        <header className="section-head center">
          <p className="eyebrow">Tarifs</p>
          <h2>À l’heure ou à prix fixe.</h2>
        </header>
        <div className="package-grid">
          {packages.map((pack) => (
            <article className={pack.featured ? 'card package featured' : 'card package'} key={pack.title}>
              {pack.featured && <span className="badge">Populaire</span>}
              <h3>{pack.title}</h3>
              <p className="price">
                <span className="from">à partir de</span>
                <strong>{pack.price}</strong>
                <span className="unit">{pack.unit}</span>
              </p>
              <p>{pack.line}</p>
              {pack.link && <a className="card-link" href={pack.link.href}>{pack.link.label} <ArrowRight size={16} /></a>}
            </article>
          ))}
        </div>
        <p className="fine center">Prix en dollars canadiens, avant taxes. Estimation gratuite avant chaque mandat.</p>
      </div>
    </section>
  )
}

function Audience() {
  return (
    <section className="section section-dark" id="clientele">
      <div className="wrap">
        <header className="section-head center">
          <p className="eyebrow">Pour qui</p>
          <h2>Agences, entreprises et autonomes.</h2>
        </header>
        <div className="audience-row">
          {audiences.map((audience) => (
            <div className="audience-chip" key={audience.title}>
              <Icon name={audience.icon} size={26} />
              <span>{audience.title}</span>
            </div>
          ))}
        </div>
        <div className="center">
          <a className="btn btn-signal" href="/agences">Offre pour les agences <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="demarche">
      <div className="wrap">
        <header className="section-head center">
          <p className="eyebrow">Démarche</p>
          <h2>Simple, du premier courriel à la facture.</h2>
        </header>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-icon"><Icon name={step.icon} size={26} /><em>{index + 1}</em></span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="about">
          <div className="avatar" aria-hidden="true">PC</div>
          <div>
            <p className="eyebrow">Qui est derrière</p>
            <h3>Philippe Clément, développeur web</h3>
            <p>Diplômé en développement d’applications web. Vous parlez directement à la personne qui fait le travail.</p>
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
          <p>Réponse et estimation gratuite en un jour ouvrable.</p>
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
            <textarea required rows="4" value={form.message} onChange={update('message')} />
          </label>
          <button className="btn" type="submit">Envoyer ma demande</button>
          <p className="fine">
            Ouvre votre logiciel de courriel. Voir la{' '}
            <a href="/confidentialite">politique de confidentialité</a>.
          </p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p className="footer-tagline">Développement web · Automatisation · Soutien informatique</p>
        </div>
        <nav aria-label="Pied de page">
          <a href="/#services">Services</a>
          <a href="/#tarifs">Tarifs</a>
          <a href="/agences">Agences</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.region}</span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} Kerouac Technologies</p>
        <a href="/confidentialite">Politique de confidentialité</a>
      </div>
    </footer>
  )
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  return (
    <>
      <a className="skip" href="#contenu">Aller au contenu</a>
      <Header />
      <main id="contenu">
        {path === '/agences' ? (
          <Agences />
        ) : path === '/confidentialite' ? (
          <Confidentialite />
        ) : (
          <>
            <Hero />
            <Services />
            <Projects />
            <Pricing />
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
