'use client'
import { EyebrowAmber } from './about'
import { useReveal } from '@/hooks/useReveal'

const testimonials = [
  {
    quote:'Green Leaf transformed our customer support operations. Response times dropped by 60% while satisfaction scores hit an all-time high. Their Nairobi team is simply exceptional.',
    initials:'JM', grad:['#6b3c00','#c07c10'],
    name:'James Mitchell', role:'COO, FinTech Ventures UK',
  },
  {
    quote:'Scalability was our biggest challenge. Within 3 weeks of engaging Green Leaf, we had a fully operational team handling our back-office. Truly world-class execution from Africa.',
    initials:'AS', grad:['#935408','#d4930a'],
    name:'Amira Saleh', role:'VP Operations, Dubai Commerce Group',
  },
  {
    quote:"The data processing accuracy we get from Green Leaf is unmatched — 99.9% consistently. They've become an indispensable strategic partner across our entire African operations.",
    initials:'RK', grad:['#3d2200','#b06a0c'],
    name:'Rachel Kim', role:'Head of Data, Global Retail Corp',
  },
]

export default function Testimonials() {
  const { ref, visible } = useReveal()
  return (
    <section id="testimonials" className="relative z-[2] py-24 px-[5%]"
      style={{ background:'linear-gradient(180deg,transparent,rgba(192,124,16,0.06),transparent)' }}>
      <div style={{ maxWidth:1400, margin:'0 auto' }}>
        <div ref={ref} style={{ marginBottom:48, opacity:visible?1:0, transform:visible?'none':'translateY(22px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
          <EyebrowAmber>Client Stories</EyebrowAmber>
          <h2 style={{ fontSize:'clamp(1.8rem,3.4vw,2.7rem)', color:'#f2f2f2' }}>
            Trusted by <span className="text-grad-amber">Industry Leaders</span>
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:1, background:'var(--border-a)', border:'1px solid var(--border-a)', borderRadius:12, overflow:'hidden' }}>
          {testimonials.map((t, i) => <TestCard key={i} t={t} delay={i * 100}/>)}
        </div>
      </div>
    </section>
  )
}

function TestCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} style={{ background:'var(--bg)', padding:'36px 32px', opacity:visible?1:0, transform:visible?'none':'translateY(20px)', transition:`opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, background 0.25s` }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(61,34,0,0.55)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg)'}>
      <div style={{ fontFamily:'var(--font-poppins)', fontSize:'3.5rem', lineHeight:1, color:'var(--amber)', opacity:0.3, marginBottom:8 }}>&ldquo;</div>
      <div style={{ color:'var(--amber-lt)', fontSize:'0.7rem', letterSpacing:2, marginBottom:14 }}>★★★★★</div>
      <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.9rem', lineHeight:1.78, fontStyle:'italic', color:'var(--fg-dim)', marginBottom:24 }}>{t.quote}</p>
      <div style={{ display:'flex', alignItems:'center', gap:14 }}>
        <div style={{ width:40, height:40, borderRadius:'50%', background:`linear-gradient(135deg,${t.grad[0]},${t.grad[1]})`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <span style={{ fontFamily:'var(--font-poppins)', fontWeight:700, color:'#fff', fontSize:'0.82rem' }}>{t.initials}</span>
        </div>
        <div>
          <div style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'0.9rem', color:'#f2f2f2' }}>{t.name}</div>
          <div style={{ fontFamily:'var(--font-inter)', fontSize:'0.73rem', color:'var(--fg-dim)', marginTop:2 }}>{t.role}</div>
        </div>
      </div>
    </div>
  )
}