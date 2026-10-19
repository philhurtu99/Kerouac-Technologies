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

// Illustrations abstraites pour les projets sans capture publique.
function ShopMock() {
  return (
    <div className="mock mock-shop" aria-hidden="true">
      <div className="mock-bar"><span /><span /><span /></div>
      <div className="mock-shop-body">
        <div className="mock-products">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div className="mock-product" key={i}>
              <i />
              <b />
              <em />
            </div>
          ))}
        </div>
        <div className="mock-cart">
          <b />
          <i /><i /><i />
          <span>Payer</span>
        </div>
      </div>
    </div>
  )
}

function ChartMock() {
  return (
    <div className="mock mock-chart" aria-hidden="true">
      <div className="mock-bar"><span /><span /><span /></div>
      <div className="mock-chart-body">
        <div className="mock-kpis">
          <div><em>RSI</em><b>58,2</b></div>
          <div><em>EMA</em><b>+1,4 %</b></div>
          <div><em>Flux</em><b className="live">en direct</b></div>
        </div>
        <svg viewBox="0 0 300 110" preserveAspectRatio="none">
          <polyline className="area" points="0,110 0,80 25,72 50,78 75,60 100,64 125,48 150,55 175,40 200,46 225,30 250,36 275,20 300,24 300,110" />
          <polyline className="line" points="0,80 25,72 50,78 75,60 100,64 125,48 150,55 175,40 200,46 225,30 250,36 275,20 300,24" />
          <polyline className="line2" points="0,86 50,80 100,70 150,62 200,52 250,42 300,34" />
        </svg>
      </div>
    </div>
  )
}

function WordpressMock() {
  return (
    <div className="mock mock-wp" aria-hidden="true">
      <div className="mock-bar"><span /><span /><span /></div>
      <div className="mock-wp-body">
        <div className="mock-wp-hero"><b /><i /></div>
        <div className="mock-wp-grid">
          {[0, 1, 2].map((i) => <div key={i}><i /><b /></div>)}
        </div>
      </div>
    </div>
  )
}

const mocks = { shop: ShopMock, chart: ChartMock, wordpress: WordpressMock }

export function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="shot">
        <div className="mock-bar"><span /><span /><span /></div>
        <img src={project.image} alt={`Capture d’écran : ${project.title}`} loading="lazy" />
      </div>
    )
  }
  const Mock = mocks[project.mock]
  return <Mock />
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
