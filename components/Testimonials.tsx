'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { EyebrowAmber } from './about'
import { useReveal } from '@/hooks/useReveal'

const cards = [
  {
    icon:'🤝',
    title:'Currently onboarding our first client partnerships',
    body:"We're a new company and we're honest about it. We're not going to show you testimonials we don't have. Instead, we're offering our first clients a structured pilot — full access to the founders, transparent reporting, and no long-term lock-in.",
  },
  {
    icon:'📋',
    title:'What a pilot looks like',
    body:'30 days. Agreed scope and targets upfront. Weekly check-ins directly with the founding team. You get a clear view of our output, our process, and whether we\'re the right fit — before committing to anything longer.',
  },
  {
    icon:'📞',
    title:'You get direct access to decision-makers',
    body:"With a new company you don't navigate account managers or support queues. You talk to the people who built this and who have skin in the game. That's a genuine advantage that's hard to buy from an established vendor.",
  },
]

export default function Testimonials() {
  const { ref, visible } = useReveal()
  return (
    <section id="pilot" className="relative z-[2] py-24 px-[5%]"
      style={{ background:'linear-gradient(180deg,transparent,rgba(192,124,16,0.06),transparent)' }}>
      <div style={{ maxWidth:1400, margin:'0 auto' }}>
        <div ref={ref} style={{ marginBottom:48, opacity:visible?1:0, transform:visible?'none':'translateY(22px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
          <EyebrowAmber>Working With Us</EyebrowAmber>
          <h2 style={{ fontSize:'clamp(1.8rem,3.4vw,2.7rem)', color:'#f2f2f2' }}>
            First 30-Day Pilot —{' '}
            <span className="text-grad-amber">No Risk, No Lock-In</span>
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:1, background:'var(--border-a)', border:'1px solid var(--border-a)', borderRadius:12, overflow:'hidden' }}>
          {cards.map((c, i) => <PilotCard key={i} card={c} delay={i * 100}/>)}
        </div>
        <div style={{ marginTop:32, textAlign:'center' }}>
          <Link href="mailto:info@greenleafbusinessconnect.com" className="btn btn-solid shimmer">
            Discuss a Pilot <ArrowRight size={15}/>
          </Link>
        </div>
      </div>
    </section>
  )
}

function PilotCard({ card, delay }: { card: typeof cards[0]; delay: number }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} style={{ background:'var(--bg)', padding:'36px 32px', opacity:visible?1:0, transform:visible?'none':'translateY(20px)', transition:`opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, background 0.25s` }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(61,34,0,0.55)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg)'}>
      <div style={{ fontSize:'2rem', marginBottom:18 }}>{card.icon}</div>
      <h3 style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'1rem', color:'#f2f2f2', marginBottom:14, lineHeight:1.4 }}>{card.title}</h3>
      <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.9rem', lineHeight:1.78, color:'var(--fg-dim)' }}>{card.body}</p>
    </div>
  )
}
