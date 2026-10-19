import { useEffect } from 'react'
import { contact } from './content.js'

const updated = '19 octobre 2026'

export default function Confidentialite() {
  useEffect(() => {
    document.title = 'Politique de confidentialité · Kerouac Technologies'
  }, [])

  const mail = <a href={`mailto:${contact.email}`}>{contact.email}</a>

  return (
    <section className="section legal">
      <div className="wrap legal-wrap">
        <p className="eyebrow">Politique de confidentialité</p>
        <h1>Vos renseignements personnels</h1>
        <p className="fine">Dernière mise à jour : {updated}</p>

        <p>
          Kerouac Technologies respecte la <em>Loi sur la protection des renseignements personnels dans le
          secteur privé</em> du Québec. Cette politique explique quels renseignements sont recueillis, pourquoi,
          et comment exercer vos droits.
        </p>

        <h2>Responsable de la protection des renseignements personnels</h2>
        <p>
          Philippe, propriétaire de Kerouac Technologies, est responsable de la protection des renseignements
          personnels. Vous pouvez le joindre à {mail}.
        </p>

        <h2>Renseignements recueillis</h2>
        <p>Le site ne vous demande rien pour être consulté. Il n’utilise aucun témoin (cookie), aucun outil de statistiques et aucune publicité.</p>
        <p>Quand vous m’écrivez, directement ou par le formulaire de contact, je reçois :</p>
        <ul>
          <li>votre nom et, si vous l’indiquez, le nom de votre entreprise;</li>
          <li>votre adresse courriel;</li>
          <li>le contenu de votre message et les fichiers que vous y joignez.</li>
        </ul>
        <p>
          Le formulaire n’envoie rien lui-même : il prépare un courriel dans votre propre logiciel de
          courriel, et vous décidez de l’envoyer.
        </p>

        <h2>Pourquoi ils sont recueillis</h2>
        <p>
          Uniquement pour répondre à votre demande, préparer une estimation, réaliser le mandat et le
          facturer. Vos renseignements ne sont jamais vendus, loués ni utilisés pour de la publicité.
        </p>

        <h2>Accès aux systèmes de vos clients</h2>
        <p>
          Pendant un mandat, je peux avoir accès à des systèmes qui contiennent des renseignements personnels
          (site web, base de données, courriels). Cet accès sert seulement à réaliser le travail demandé. Je
          ne copie pas ces données hors de vos systèmes sans votre accord, et les accès sont retirés à la fin
          du mandat.
        </p>

        <h2>Fournisseurs et hébergement hors Québec</h2>
        <p>Deux fournisseurs traitent des renseignements pour mon compte :</p>
        <ul>
          <li><strong>Cloudflare</strong> héberge le site. Comme tout hébergeur, il traite l’adresse IP des visiteurs pour livrer les pages et bloquer les attaques.</li>
          <li><strong>Purelymail</strong> héberge la boîte courriel {contact.email}.</li>
        </ul>
        <p>
          Ces services sont situés hors du Québec, notamment aux États-Unis. Je les ai choisis parce qu’ils
          offrent une protection adéquate des renseignements, et ils ne peuvent pas les utiliser à d’autres
          fins.
        </p>

        <h2>Conservation</h2>
        <p>
          Les échanges qui ne mènent pas à un mandat sont supprimés après 12 mois. Les renseignements liés à
          un mandat sont conservés aussi longtemps que l’exigent les lois fiscales, soit six ans après la fin
          de l’année concernée, puis détruits.
        </p>

        <h2>Sécurité</h2>
        <p>
          Les communications avec le site sont chiffrées (HTTPS). Les comptes que j’utilise sont protégés
          par des mots de passe uniques et une authentification à deux facteurs lorsque c’est possible.
        </p>

        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander à consulter les renseignements que je détiens sur vous, à les faire corriger
          ou à les faire supprimer, et retirer votre consentement en tout temps. Écrivez à {mail}; je réponds
          dans un délai de 30 jours.
        </p>
        <p>
          Si vous n’êtes pas satisfait de la réponse, vous pouvez porter plainte à la{' '}
          <a href="https://www.cai.gouv.qc.ca/" rel="noopener noreferrer">Commission d’accès à l’information du Québec</a>.
        </p>

        <h2>Incident de confidentialité</h2>
        <p>
          En cas d’incident qui présente un risque de préjudice sérieux, les personnes concernées et la
          Commission d’accès à l’information sont avisées rapidement, comme le prévoit la loi.
        </p>

        <h2>Modifications</h2>
        <p>Cette politique peut être mise à jour. La date en haut de la page indique la dernière version.</p>
      </div>
    </section>
  )
}
