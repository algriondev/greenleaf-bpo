'use client'
import { useReveal } from '@/hooks/useReveal'
import { EyebrowGreen } from './about'

const services = [
  { num:'01', icon:'🎧', title:'Customer Experience Management',
    desc:'Omnichannel support via voice, email, chat and social — delivering seamless customer journeys that build lasting loyalty at scale.' },
  { num:'02', icon:'📊', title:'Data Entry & Processing',
    desc:'High-speed, high-accuracy data operations including entry, cleansing, mining and analytics — turning raw data into actionable intelligence.' },
  { num:'03', icon:'💰', title:'Finance & Accounting BPO',
    desc:'Comprehensive F&A services — accounts payable/receivable, reconciliation, payroll processing and financial reporting to global standards.' },
  { num:'04', icon:'👥', title:'HR & Talent Management',
    desc:'Full-cycle HR outsourcing covering recruitment, onboarding, benefits administration, performance management and workforce analytics.' },
  { num:'05', icon:'🖥️', title:'IT Support & Helpdesk',
    desc:'Level 1–3 technical support, infrastructure management, cybersecurity monitoring and digital transformation consulting.' },
  { num:'06', icon:'📋', title:'Back Office Operations',
    desc:'Document processing, order management, compliance monitoring, claims administration and operational workflow automation.' },
]

export default function Services() {
  const { ref, visible } = useReveal()
  return (
    <section id="services" className="relative z-[2] py-24 px-[5%]">
      <div style={{ maxWidth:1400, margin:'0 auto' }}>
        <div ref={ref} style={{
          marginBottom:52,
          opacity:visible ? 1 : 0, transform:visible ? 'none' : 'translateY(24px)',
          transition:'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <EyebrowGreen>What We Do</EyebrowGreen>
          <h2 style={{ fontSize:'clamp(1.9rem,3.6vw,3rem)', color:'#f2f2f2', marginBottom:14 }}>
            End-to-End <span className="text-grad-green">BPO Solutions</span><br />Built for Scale
          </h2>
          <p style={{ fontFamily:'var(--font-inter)', fontSize:'1rem', lineHeight:1.76, maxWidth:520, color:'var(--fg-dim)' }}>
            From customer engagement to complex back-office operations, we provide comprehensive outsourcing services that accelerate your growth.
          </p>
        </div>
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))',
          gap:1, background:'var(--border-g)',
          border:'1px solid var(--border-g)', borderRadius:12, overflow:'hidden',
        }}>
          {services.map((s, i) => <ServiceCard key={i} service={s} delay={i * 70}/>)}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className="group relative overflow-hidden"
      style={{
        background:'var(--bg)', padding:'36px 32px',
        opacity:visible ? 1 : 0, transform:visible ? 'none' : 'translateY(20px)',
        transition:`opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, background 0.25s`,
      }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(10,74,10,0.65)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg)'}>
      <div className="service-bar"/>
      <div style={{ fontFamily:'var(--font-inter)', fontSize:'0.65rem', fontWeight:500, color:'rgba(37,170,37,0.22)', letterSpacing:'0.1em', position:'absolute', top:22, right:26 }}>{service.num}</div>
      <div style={{ width:48, height:48, border:'1px solid var(--border-g)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem', marginBottom:20 }}>
        {service.icon}
      </div>
      <h3 style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'1.02rem', color:'#f2f2f2', marginBottom:10 }}>{service.title}</h3>
      <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.875rem', lineHeight:1.72, color:'var(--fg-dim)' }}>{service.desc}</p>
    </div>
  )
}