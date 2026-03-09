'use client'
import { useReveal } from '@/hooks/useReveal'

const services = [
  {
    num: '01',
    icon: '🎧',
    title: 'Customer Experience Management',
    desc: 'Omnichannel support via voice, email, chat, and social — delivering seamless customer journeys that build lasting loyalty and brand trust at scale.',
  },
  {
    num: '02',
    icon: '📊',
    title: 'Data Entry & Processing',
    desc: 'High-speed, high-accuracy data operations including entry, cleansing, mining, and analytics — turning raw data into actionable business intelligence.',
  },
  {
    num: '03',
    icon: '💰',
    title: 'Finance & Accounting BPO',
    desc: 'Comprehensive F&A services — accounts payable/receivable, reconciliation, payroll processing, and financial reporting to global standards.',
  },
  {
    num: '04',
    icon: '👥',
    title: 'HR & Talent Management',
    desc: 'Full-cycle HR outsourcing covering recruitment, onboarding, benefits administration, performance management, and workforce analytics.',
  },
  {
    num: '05',
    icon: '🖥️',
    title: 'IT Support & Helpdesk',
    desc: 'Level 1–3 technical support, infrastructure management, cybersecurity monitoring, and digital transformation consulting for modern enterprises.',
  },
  {
    num: '06',
    icon: '📋',
    title: 'Back Office Operations',
    desc: 'Document processing, order management, compliance monitoring, claims administration, and operational workflow automation for efficiency at scale.',
  },
]

export default function Services() {
  const { ref, visible } = useReveal()

  return (
    <section id="services" className="relative z-[2] py-24 px-[5%]">
      {/* Head */}
      <div ref={ref} className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionLabel>What We Do</SectionLabel>
        <h2 className="font-syne font-extrabold tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
          End-to-End <span className="text-g3">BPO Solutions</span>
          <br />Built for Scale
        </h2>
        <p className="text-[1.05rem] leading-[1.75] max-w-xl" style={{ color: 'rgba(168,245,168,0.6)' }}>
          From customer engagement to complex back-office operations, we provide comprehensive outsourcing services that accelerate your growth.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ background: 'rgba(92,230,92,0.18)', border: '1px solid rgba(92,230,92,0.18)' }}
      >
        {services.map((s, i) => (
          <ServiceCard key={i} service={s} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className="group relative bg-dark px-9 py-11 overflow-hidden transition-all duration-300 hover:bg-[rgba(10,46,10,0.8)]"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, background 0.3s`,
      }}
    >
      {/* Bottom bar */}
      <div className="service-card-bar" />

      <div className="text-[0.7rem] font-syne font-bold tracking-[0.12em] absolute top-6 right-7" style={{ color: 'rgba(92,230,92,0.2)' }}>
        {service.num}
      </div>

      <div
        className="w-13 h-13 mb-6 flex items-center justify-center text-2xl border border-[rgba(92,230,92,0.18)] rounded transition-all duration-300 group-hover:border-g3 group-hover:bg-[rgba(46,184,46,0.15)]"
        style={{ width: 52, height: 52, boxShadow: 'none' }}
      >
        {service.icon}
      </div>

      <h3 className="font-syne font-bold text-[1.12rem] text-white mb-3">{service.title}</h3>
      <p className="text-[0.9rem] leading-[1.7]" style={{ color: 'rgba(168,245,168,0.6)' }}>
        {service.desc}
      </p>
    </div>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-g3 text-[0.72rem] uppercase tracking-[0.16em] mb-4">
      <span className="w-6 h-px bg-g3" />
      {children}
      <span className="w-6 h-px bg-g3" />
    </div>
  )
}
