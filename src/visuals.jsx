import {
  Bug,
  Building2,
  Calculator,
  ClipboardCheck,
  Clock,
  Code,
  Globe,
  Handshake,
  HeartHandshake,
  LifeBuoy,
  Lock,
  Megaphone,
  MessageSquare,
  MonitorSmartphone,
  Plug,
  Server,
  Store,
  Tag,
  User,
  Workflow,
  Wrench
} from 'lucide-react'

const icons = {
  web: Code,
  automation: Workflow,
  support: LifeBuoy,
  partner: Handshake,
  agency: Building2,
  marketing: Megaphone,
  server: Server,
  store: Store,
  person: User,
  heart: HeartHandshake,
  message: MessageSquare,
  estimate: Calculator,
  remote: MonitorSmartphone,
  report: ClipboardCheck,
  bug: Bug,
  wordpress: Globe,
  plug: Plug,
  lock: Lock,
  tag: Tag,
  tools: Wrench,
  clock: Clock
}

export function Icon({ name, size = 24 }) {
  const Component = icons[name]
  return <Component size={size} strokeWidth={1.75} aria-hidden="true" />
}

export function ProjectVisual({ project }) {
  return (
    <div className="shot">
      <div className="mock-bar"><span /><span /><span /></div>
      <img src={project.image} alt={`Capture d’écran : ${project.title}`} loading="lazy" />
    </div>
  )
}

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hv-browser">
        <div className="mock-bar"><span /><span /><span /><em>client.ca</em></div>
        <div className="hv-page">
          <div className="hv-nav"><b /><i /><i /><i /></div>
          <div className="hv-hero"><b /><b className="short" /><span /></div>
          <div className="hv-cards"><i /><i /><i /></div>
        </div>
      </div>
      <div className="hv-terminal">
        <div><span className="ok">✓</span> formulaire réparé</div>
        <div><span className="ok">✓</span> DNS configuré</div>
        <div><span className="ok">✓</span> rapport automatisé</div>
      </div>
      <div className="hv-badge">
        <strong>1 jour</strong>
        <span>pour une estimation</span>
      </div>
    </div>
  )
}
