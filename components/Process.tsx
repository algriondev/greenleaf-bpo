'use client'
import { EyebrowAmber } from './about'
import { useReveal } from '@/hooks/useReveal'

const steps = [
  { num:'01', title:'Discovery Call', desc:'We deep-dive into your processes, pain points and growth goals to design a custom BPO blueprint aligned to your strategy.' },
  { num:'02', title:'Solution Design', desc:'Our architects craft a tailored service model — staffing, technology stack, SLAs and KPIs — built for your specific needs.' },
  { num:'03', title:'Rapid Deployment', desc:'Team recruitment, training and technology integration delivered with precision. Zero disruption to your existing operations.' },
  { num:'04', title:'Continuous Optimisation', desc:'Real-time dashboards, monthly business reviews and continuous improvement loops to drive performance beyond targets.' },
]

export default function Process() {
  const { ref, visible } = useReveal()
  return (
    <section id="process" className="relative z-[2] py-24 px-[5%]"
      style={{ background:'linear-gradient(180deg,transparent,rgba(192,124,16,0.06),transparent)' }}>
      <div style={{ maxWidth:1400, margin:'0 auto' }}>
        <div ref={ref} style={{ marginBottom:56, opacity:visible?1:0, transform:visible?'none':'translateY(22px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
          <EyebrowAmber>How It Works</EyebrowAmber>
          <h2 style={{ fontSize:'clamp(1.8rem,3.4vw,2.7rem)', color:'#f2f2f2', marginBottom:12 }}>
            Our <span className="text-grad-amber">4-Step</span> Onboarding
          </h2>
          <p style={{ fontFamily:'var(--font-inter)', fontSize:'1rem', lineHeight:1.76, maxWidth:500, color:'var(--fg-dim)' }}>
            From first contact to full operations in as little as 2 weeks — our streamlined process gets you live fast.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:32, position:'relative' }}>
          <div className="hidden lg:block" style={{ position:'absolute', top:30, left:'12%', right:'12%', height:1, background:'linear-gradient(90deg,transparent,var(--amber-600),transparent)' }}/>
          {steps.map((s, i) => <StepCard key={i} step={s} delay={i * 100}/>)}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, delay }: { step: typeof steps[0]; delay: number }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} style={{ position:'relative', zIndex:1, opacity:visible?1:0, transform:visible?'none':'translateY(26px)', transition:`opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      <div style={{ position:'relative', width:60, height:60, marginBottom:22 }}>
        <div style={{ position:'absolute', inset:0, borderRadius:'50%', background:'radial-gradient(circle,rgba(192,124,16,0.14),transparent)' }}/>
        <div style={{ width:'100%', height:'100%', borderRadius:'50%', border:'1.5px solid var(--amber)', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--bg)', position:'relative', zIndex:1 }}>
          <span style={{ fontFamily:'var(--font-poppins)', fontWeight:700, color:'var(--amber)', fontSize:'1rem' }}>{step.num}</span>
        </div>
      </div>
      <h3 style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'1rem', color:'#f2f2f2', marginBottom:10 }}>{step.title}</h3>
      <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.875rem', lineHeight:1.7, color:'var(--fg-dim)' }}>{step.desc}</p>
    </div>
  )
}