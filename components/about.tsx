'use client'
import { useReveal } from '@/hooks/useReveal'

export function EyebrowGreen({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow-green">{children}</div>
}
export function EyebrowAmber({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow-amber">{children}</div>
}

const team = [
  {
    initials:'JM', grad:['#0a4a0a','#25aa25'],
    name:'James Mwangi', role:'Founder & CEO',
    bio:"15+ years in global outsourcing. Former Director at Africa BPO Alliance. Founded Green Leaf to position Kenya as Africa's BPO capital and create lasting employment across the continent.",
  },
  {
    initials:'AW', grad:['#6b3c00','#c07c10'],
    name:'Amina Wanjiku', role:'Co-Founder & COO',
    bio:'Operations strategist who has led BPO transformations across 12 countries. Amina architects the service delivery frameworks that consistently exceed client SLAs.',
  },
  {
    initials:'DK', grad:['#0a4a0a','#25aa25'],
    name:'David Kamau', role:'Chief Technology Officer',
    bio:"AI & automation innovator from Nairobi's Silicon Savannah. David drives the technology backbone that keeps Green Leaf ahead of industry standards.",
  },
]

export default function About() {
  const { ref: storyRef, visible: storyVisible } = useReveal()

  return (
    <section id="about" className="relative z-[2] py-24 px-[5%]"
      style={{ background:'linear-gradient(180deg, transparent, rgba(192,124,16,0.06), transparent)' }}>
      <div style={{ maxWidth:1400, margin:'0 auto' }}>

        <div ref={storyRef} style={{
          maxWidth:760, margin:'0 auto 88px', textAlign:'center',
          opacity:storyVisible ? 1 : 0,
          transform:storyVisible ? 'none' : 'translateY(28px)',
          transition:'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <EyebrowAmber>Our Story</EyebrowAmber>
          <h2 style={{ fontSize:'clamp(1.8rem,3.4vw,2.7rem)', color:'#f2f2f2', marginBottom:18 }}>
            Born in Nairobi.{' '}
            <span className="text-grad-amber">Built for the World.</span>
          </h2>
          <p style={{ fontFamily:'var(--font-inter)', fontWeight:400, fontSize:'1rem', lineHeight:1.82, color:'var(--fg-dim)' }}>
            Green Leaf Business Connect was founded in 2015 by a team of Kenyan entrepreneurs who
            believed Africa had the talent, energy, and ambition to compete on the global BPO stage.
            What started as a 12-person customer support team in Westlands, Nairobi has grown into
            a full-service BPO powerhouse serving clients in 15+ countries — without ever losing
            the personal touch and values that defined us from day one.
          </p>
          <div style={{ width:56, height:2, background:'var(--amber)', margin:'28px auto 0', borderRadius:2 }}/>
        </div>

        <MissionVision />
        <Leadership />
      </div>
    </section>
  )
}

function MissionVision() {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} style={{
      display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
      gap:20, marginBottom:88,
      opacity:visible ? 1 : 0,
      transform:visible ? 'none' : 'translateY(28px)',
      transition:'opacity 0.7s ease, transform 0.7s ease',
    }}>
      {[
        {
          icon:'🎯', accent:'var(--amber)', borderCol:'rgba(192,124,16,0.25)',
          bg:'rgba(192,124,16,0.06)', iconBg:'rgba(192,124,16,0.12)', iconBorder:'rgba(192,124,16,0.25)',
          title:'Our Mission',
          body:'To empower global businesses by delivering world-class outsourcing solutions that unlock efficiency, reduce costs, and accelerate growth — while creating meaningful employment and opportunity across Africa.',
        },
        {
          icon:'🌍', accent:'var(--amber-lt)', borderCol:'rgba(192,124,16,0.25)',
          bg:'rgba(192,124,16,0.06)', iconBg:'rgba(192,124,16,0.12)', iconBorder:'rgba(192,124,16,0.25)',
          title:'Our Vision',
          body:"To be Africa's most trusted BPO partner — recognised globally for operational excellence, technological innovation, and the transformative impact we create for clients, employees, and communities alike.",
        },
      ].map((c, i) => (
        <div key={i} style={{
          background:c.bg, border:`1px solid ${c.borderCol}`,
          borderRadius:12, padding:'34px 32px',
          borderLeft:`3px solid ${c.accent}`,
        }}>
          <div style={{
            width:46, height:46, borderRadius:10, fontSize:'1.1rem',
            display:'flex', alignItems:'center', justifyContent:'center',
            background:c.iconBg, border:`1px solid ${c.iconBorder}`, marginBottom:18,
          }}>{c.icon}</div>
          <h3 style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'1.1rem', color:'#f2f2f2', marginBottom:12 }}>{c.title}</h3>
          <p style={{ fontFamily:'var(--font-inter)', fontWeight:400, fontSize:'0.91rem', lineHeight:1.76, color:'var(--fg-dim)' }}>{c.body}</p>
        </div>
      ))}
    </div>
  )
}

function Leadership() {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} style={{
      opacity:visible ? 1 : 0,
      transform:visible ? 'none' : 'translateY(28px)',
      transition:'opacity 0.7s ease, transform 0.7s ease',
    }}>
      <div style={{ textAlign:'center', marginBottom:48 }}>
        <EyebrowAmber>Leadership Team</EyebrowAmber>
        <h2 style={{ fontSize:'clamp(1.7rem,3vw,2.5rem)', color:'#f2f2f2' }}>
          The People <span className="text-grad-amber">Behind the Vision</span>
        </h2>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
        {team.map((p, i) => <LeaderCard key={i} person={p} delay={i * 110}/>)}
      </div>
    </div>
  )
}

function LeaderCard({ person, delay }: { person: typeof team[0]; delay: number }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} style={{
      background:'var(--surface)', border:'1px solid var(--border)',
      borderRadius:12, padding:'30px 28px',
      opacity:visible ? 1 : 0,
      transform:visible ? 'none' : 'translateY(22px)',
      transition:`opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      <div style={{
        width:52, height:52, borderRadius:'50%',
        background:`linear-gradient(135deg, ${person.grad[0]}, ${person.grad[1]})`,
        display:'flex', alignItems:'center', justifyContent:'center', marginBottom:18,
      }}>
        <span style={{ fontFamily:'var(--font-poppins)', fontWeight:700, color:'#fff', fontSize:'0.95rem' }}>{person.initials}</span>
      </div>
      <h3 style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'1rem', color:'#f2f2f2', marginBottom:3 }}>{person.name}</h3>
      <p style={{ fontFamily:'var(--font-inter)', fontWeight:500, fontSize:'0.76rem', color:'var(--amber)', marginBottom:14 }}>{person.role}</p>
      <p style={{ fontFamily:'var(--font-inter)', fontWeight:400, fontSize:'0.875rem', lineHeight:1.75, color:'var(--fg-dim)' }}>{person.bio}</p>
    </div>
  )
}