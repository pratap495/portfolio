import {
  ArrowRight, ArrowUp, Boxes, BrainCircuit, BriefcaseBusiness, Check,
  ChevronRight, Cloud, Code2, Database, ExternalLink,
  Mail, Menu, ServerCog, Smartphone, Sparkles, Star, X, Zap
} from 'lucide-react'
import { useEffect, useState } from 'react'

const Github = Code2
const Linkedin = BriefcaseBusiness

const nav = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Products', target: 'products' },
  { label: 'Journey', target: 'journey' },
  { label: 'Contact', target: 'contact' },
]
const stack = [
  ['Python', '🐍'], ['React', '⚛'], ['FastAPI', '⚡'], ['PostgreSQL', '♜'], ['AWS', 'aws'], ['Docker', '◉'],
]
const services = [
  { icon: Boxes, title: 'Web Applications', copy: 'High performance web apps with modern stacks.', color: 'violet' },
  { icon: BrainCircuit, title: 'AI Powered Systems', copy: 'Intelligent applications using LLMs, RAG and agents.', color: 'cyan' },
  { icon: Smartphone, title: 'Mobile Applications', copy: 'Cross platform mobile apps for modern businesses.', color: 'orange' },
  { icon: Cloud, title: 'Cloud & DevOps', copy: 'Scalable cloud infrastructure and CI/CD automation.', color: 'blue' },
]
const freelanceProjects = [
  { name: 'CarsBuddy', logo: '/client-logos/carsbuddy.png', type: 'Automotive Platform' },
  { name: 'Concept', logo: '/client-logos/concept.png', type: 'Business Website' },
  { name: 'Rio Advertising', logo: '/client-logos/rio-ad.png', type: 'Digital Experience' },
  { name: "Tahiby's", logo: '/client-logos/tahiby.png', type: 'Restaurant Platform' },
  { name: 'HiRight', logo: '/client-logos/hiright/public/assets/hi-right-logo.jpg', type: 'Corporate Services' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    const sections = nav.map(item => document.getElementById(item.target)).filter(Boolean)
    const updateActive = () => {
      const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= 160)
      setActive(current?.id || 'home')
    }
    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()
    return () => {
      window.removeEventListener('resize', close)
      window.removeEventListener('scroll', updateActive)
    }
  }, [])
  return <header className="header">
    <a className="brand" href="#home"><Code2 /><b>PRATAP<span>.DEV</span></b></a>
    <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'open' : ''}>
      {nav.map(item => <a key={item.target} className={active === item.target ? 'active' : ''} href={`#${item.target}`} onClick={() => { setOpen(false); setActive(item.target) }}>{item.label}</a>)}
    </nav>
    <a className="build-link" href="#contact">Let's Build <ExternalLink /></a>
  </header>
}

function Terminal() {
  return <div className="terminal" aria-label="Developer status">
    <div><span>$</span> <i>const</i> mission = <em>"Build • Scale • Automate • Impact"</em></div>
    <div><span>$</span> <i>status</i> = <strong>"BUILDING THE FUTURE..."</strong></div>
  </div>
}

function Dashboard() {
  const people = ['Arjun Mehta', 'Rahul Sharma', 'Priya Varma', 'Anas Verma']
  return <div className="devices" aria-label="HostelMint dashboard preview">
    <div className="desktop-ui">
      <aside><b>◉ HostelMint</b><small>◫ Dashboard</small><small>⌁ Tenants</small></aside>
      <main>
        <div className="dash-top"><b>Dashboard Overview</b><span>⌕　◌</span></div>
        <div className="mini-stats"><i>Bookings<b>120</b></i><i>Occupied<b>98</b></i><i>Tenants<b>210</b></i><i>Revenue<b>₹2,45,000</b></i></div>
        <div className="dash-grid">
          <section><b>Recent Bookings</b>{people.map((p, i)=><p key={p}><span className={`avatar a${i}`}>{p[0]}</span>{p}<em>{i % 2 ? 'Pending' : 'Confirmed'}</em></p>)}</section>
          <section><b>Upcoming Payments</b>{people.map((p, i)=><p key={p}><span className={`avatar a${i}`}>{p[0]}</span>{p}<em>₹{(i+1)*2500}</em></p>)}</section>
        </div>
      </main>
    </div>
    <div className="phone-ui"><b>◉ HostelMint</b><small>Dashboard</small><div className="phone-stats"><i>Rooms<b>120</b></i><i>Occupied<b>98</b></i><i>Revenue<b>₹2.45L</b></i><i>Due<b>9</b></i></div><div className="chart">⌁⌁⌁⌁</div></div>
  </div>
}

function Tags({purple=false, items}) {
  const technologies = items || ['FastAPI', 'React', 'PostgreSQL', 'Tailwind', 'Docker']
  return <div className={`tags ${purple ? 'purple' : ''}`}>{technologies.map(x=><span key={x}>{x}</span>)}</div>
}

function FutureVisual() {
  return <div className="future">
    <div className="future-top"><span>◉　CodeWithMe</span><span>⌕　□　◌</span></div>
    <div className="future-sidebar"><i/><i/><i/><i/><i/></div>
    <div className="future-cards"><i/><i/><i/></div>
    <div className="future-chart"><i/><i/><i/><i/><i/><i/></div>
    <svg className="cube" viewBox="0 0 300 260" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M150 18 270 78 150 138 30 78Z M30 78v112l120 58 120-58V78 M150 138v110"/>
        <path d="M70 58 190 118M110 38l120 60M230 58 110 118M190 38 70 98" opacity=".7"/>
        <path d="M70 98v112M110 118v112M190 118v112M230 98v112" opacity=".65"/>
        <path d="m30 116 120 60 120-60M30 153l120 59 120-59" opacity=".65"/>
      </g>
    </svg>
    <h3>BUILDING THE NEXT BIG THING</h3>
  </div>
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return <div className="site">
    <div className="stars" />
    <Header />
    <main>
      <section className="hero" id="home">
        <div className="hero-art" />
        <div className="hero-content">
          <p className="eyebrow">I DON'T JUST CODE.</p>
          <h1>I BUILD<br/><span>SOLUTIONS.</span></h1>
          <p className="lead" id="about">Full-Stack Developer, AI Builder and<br/>Product Engineer focused on building<br/>scalable systems and innovative products.</p>
          <Terminal />
          <div className="actions"><a className="primary" href="#products">EXPLORE MY WORK <ArrowRight /></a><a className="secondary" href="https://github.com/pratap495" target="_blank">VIEW GITHUB <Github /></a></div>
          <p className="tech-label">TECHNOLOGIES I WORK WITH</p>
          <div className="stack">{stack.map(([name, icon])=><span key={name}><i>{icon}</i>{name}</span>)}</div>
        </div>
      </section>

      <section className="project featured" id="products" data-reveal>
        <Dashboard />
        <div className="project-copy">
          <p className="launch"><b>01</b> PRODUCT LAUNCHING SOON</p>
          <h2>Hostel<span>Mint</span></h2>
          <h3>PG & Hostel Management System</h3>
          <p>A complete platform for hostel and PG owners to manage rooms, tenants, payments, complaints, and more.</p>
          <div className="features">
            {[['♧','Room & Tenant','Management'],['▣','Payments &','Invoices'],['♢','Complaints &','Support'],['♙','Role-based','Access'],['⌁','Analytics &','Reports']].map(x=><div key={x[1]}><i>{x[0]}</i><small>{x[1]}<br/>{x[2]}</small></div>)}
          </div>
          <Tags />
          <a className="case" href="#contact">VIEW CASE STUDY <ArrowRight /></a>
        </div>
      </section>

      <section id="skills" data-reveal>
        <div className="section-title"><span/><i/>WHAT I BUILD<i/><span/></div>
        <div className="service-grid">{services.map(({icon:Icon,title,copy,color})=><article key={title} className={color}><div className="service-icon"><Icon /></div><div><h4>{title}</h4><p>{copy}</p><ChevronRight /></div></article>)}</div>
      </section>

      <section className="freelance" id="journey" data-reveal>
        <div className="freelance-intro">
          <p className="launch"><b><BriefcaseBusiness /></b> FREELANCE JOURNEY</p>
          <h2>Trusted by businesses.<br/><span>Built with purpose.</span></h2>
          <p>As a freelance developer, I've delivered digital products for businesses across different industries—turning ideas into polished, reliable experiences.</p>
          <div className="satisfaction"><i><Star /></i><div><b>100% Client Satisfaction</b><span>Quality work, clear communication, and dependable delivery.</span></div><Check /></div>
        </div>
        <div className="client-work">
          <div className="client-heading"><span>SELECTED CLIENT WORK</span><i>{freelanceProjects.length}+ PROJECTS</i></div>
          <div className="logo-grid">{freelanceProjects.map(project => <article key={project.name}>
            <div className="logo-wrap"><img src={project.logo} alt={`${project.name} logo`} /></div>
            <div><b>{project.name}</b><span>{project.type}</span></div>
          </article>)}</div>
        </div>
      </section>

      <section className="project next-project" data-reveal>
        <div className="project-copy">
          <p className="launch purple"><b>02</b> NEXT PRODUCT IN PROGRESS</p>
          <h2>CodeWithMe</h2>
          <h3>Interactive Developer Learning Platform</h3>
          <p>A gamified, hands-on platform where developers learn through structured modules, interactive coding labs, real-time validation, and project-based challenges.</p>
          <label>BUILDING... <b>65%</b></label><div className="progress"><i /></div>
          <Tags purple items={['Next.js', 'React', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker']} />
        </div>
        <FutureVisual />
      </section>

      <section className="contact" id="contact" data-reveal>
        <h2>Let's build<br/>something <span>amazing</span><br/>together.</h2>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/etakarlapalli-pratap-38846520b/" target="_blank"><i><Linkedin/></i><b>LinkedIn</b><small>Connect with me <ChevronRight/></small></a>
          <a href="mailto:etakarlapalli.pratap@gmail.com"><i><Mail/></i><b>Email</b><small>Shoot me a mail <ChevronRight/></small></a>
          <a href="https://github.com/pratap495" target="_blank"><i><Github/></i><b>GitHub</b><small>Check my code <ChevronRight/></small></a>
          <a href="https://drive.google.com/file/d/19YQGgllNYCICPuT2F3oyTXxecrFH4sU6/view?usp=sharing"><i><BriefcaseBusiness/></i><b>Resume</b><small>View my resume <ChevronRight/></small></a>
        </div>
        <Terminal />
      </section>
    </main>
    <footer>© 2026 Pratap.dev　•　Crafted with <span>♥</span> and lots of code.</footer>
    <a className="to-top" href="#home" aria-label="Back to top"><ArrowUp/></a>
  </div>
}

export default App
