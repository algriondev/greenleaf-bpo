'use client'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'

export function EyebrowGreen({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow-green">{children}</div>
}
export function EyebrowAmber({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow-amber">{children}</div>
}

const team = [
  {
    initials:'AS', grad:['#0a4a0a','#25aa25'],
    name:'Amar Shah', role:'Founder & CEO',
    bio:'Entrepreneur with a focus on building Kenya into a recognised BPO destination. Amar leads Green Leaf with a hands-on approach — every client deal goes through him directly.',
    linkedin:'https://linkedin.com/in/amar-shah',
  },
  {
    initials:'SN', grad:['#6b3c00','#c07c10'],
    name:'Samuel Njogu', role:'Co-Founder & COO',
    bio:'Operations professional with experience in East African service delivery. Samuel owns day-to-day execution and is the primary contact for service quality and SLA commitments.',
    linkedin:'https://linkedin.com/in/samuel-njogu',
  },
  {
    initials:'KG', grad:['#0a4a0a','#25aa25'],
    name:'Krushit Gudhka', role:'Co-Founder & CTO',
    bio:'Technology lead responsible for Green Leaf\'s tooling, workflows, and data infrastructure. Krushit ensures the technical side of every client engagement is set up for reliability from day one.',
    linkedin:'https://linkedin.com/in/krushit-gudhka',
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
            Green Leaf Business Connect was founded by a team of Kenyan entrepreneurs who believe
            Africa has the talent, energy, and ambition to compete on the global BPO stage.
            We&apos;re based in Westlands, Nairobi — a founder-led team building world-class BPO
            capabilities with the transparency and personal attention that only a new, hungry
            company can offer.
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
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:18 }}>
        <div style={{
          width:52, height:52, borderRadius:'50%',
          background:`linear-gradient(135deg, ${person.grad[0]}, ${person.grad[1]})`,
          display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
        }}>
          <span style={{ fontFamily:'var(--font-poppins)', fontWeight:700, color:'#fff', fontSize:'0.95rem' }}>{person.initials}</span>
        </div>
        <Link href={person.linkedin} target="_blank" rel="noopener noreferrer"
          style={{ display:'flex', alignItems:'center', gap:6, fontFamily:'var(--font-inter)', fontSize:'0.72rem', color:'var(--fg-dim)', textDecoration:'none', border:'1px solid var(--border)', borderRadius:6, padding:'5px 10px', transition:'all 0.2s' }}
          onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--amber)'; el.style.color='var(--amber)' }}
          onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--border)'; el.style.color='var(--fg-dim)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </Link>
      </div>
      <h3 style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'1rem', color:'#f2f2f2', marginBottom:3 }}>{person.name}</h3>
      <p style={{ fontFamily:'var(--font-inter)', fontWeight:500, fontSize:'0.76rem', color:'var(--amber)', marginBottom:14 }}>{person.role}</p>
      <p style={{ fontFamily:'var(--font-inter)', fontWeight:400, fontSize:'0.875rem', lineHeight:1.75, color:'var(--fg-dim)' }}>{person.bio}</p>
    </div>
  )
}