'use client'
import { SectionLabel } from './Services'
import { useReveal } from '@/hooks/useReveal'

const testimonials = [
  {
    quote: 'Green Leaf transformed our customer support operations. Response times dropped by 60% while satisfaction scores hit an all-time high. Their Nairobi team is simply exceptional.',
    initials: 'JM',
    name: 'James Mitchell',
    role: 'COO, FinTech Ventures UK',
    gradient: 'from-g2 to-g3',
  },
  {
    quote: 'Scalability was our biggest challenge. Within 3 weeks of engaging Green Leaf, we had a fully operational team handling our back-office. Truly world-class execution from Africa.',
    initials: 'AS',
    name: 'Amira Saleh',
    role: 'VP Operations, Dubai Commerce Group',
    gradient: 'from-[#1a5c1a] to-[#5ce65c]',
  },
  {
    quote: 'The data processing accuracy we get from Green Leaf is unmatched — 99.9% consistently. They\'ve become an indispensable strategic partner across our entire African operations.',
    initials: 'RK',
    name: 'Rachel Kim',
    role: 'Head of Data, Global Retail Corp',
    gradient: 'from-g1 to-g3',
  },
]

export default function Testimonials() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="testimonials"
      className="relative z-[2] py-24 px-[5%]"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(10,46,10,0.2), transparent)' }}
    >
      <div
        ref={ref}
        className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <SectionLabel>Client Stories</SectionLabel>
        <h2 className="font-syne font-extrabold tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
          Trusted by <span className="text-g3">Industry Leaders</span>
        </h2>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px"
        style={{ background: 'rgba(92,230,92,0.18)', border: '1px solid rgba(92,230,92,0.18)' }}
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className="bg-dark px-8 py-10 relative overflow-hidden group transition-all duration-300 hover:bg-[rgba(10,46,10,0.75)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, background 0.3s`,
      }}
    >
      <div className="font-syne text-5xl leading-none mb-4 text-g3 opacity-35">&ldquo;</div>
      <div className="text-[0.72rem] text-g3 mb-3">★★★★★</div>
      <p className="text-[0.92rem] leading-[1.78] mb-7 italic" style={{ color: 'rgba(168,245,168,0.6)' }}>
        {t.quote}
      </p>
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center font-syne font-extrabold text-[0.85rem] text-white`}
        >
          {t.initials}
        </div>
        <div>
          <div className="font-syne font-bold text-[0.9rem] text-white">{t.name}</div>
          <div className="text-[0.74rem] mt-0.5" style={{ color: 'rgba(168,245,168,0.6)' }}>{t.role}</div>
        </div>
      </div>
    </div>
  )
}
