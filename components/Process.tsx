'use client'
import { SectionLabel } from './Services'
import { useReveal } from '@/hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We deep-dive into your processes, pain points, and growth goals to design a custom BPO blueprint aligned to your strategy.',
  },
  {
    num: '02',
    title: 'Solution Design',
    desc: 'Our architects craft a tailored service model — staffing, technology stack, SLAs, and KPIs — built for your specific needs.',
  },
  {
    num: '03',
    title: 'Rapid Deployment',
    desc: 'Team recruitment, training, and technology integration delivered with military precision. Zero disruption to your existing ops.',
  },
  {
    num: '04',
    title: 'Continuous Optimization',
    desc: 'Real-time dashboards, monthly business reviews, and continuous improvement loops to drive performance beyond targets.',
  },
]

export default function Process() {
  const { ref, visible } = useReveal()

  return (
    <section id="process" className="relative z-[2] py-24 px-[5%]">
      <div
        ref={ref}
        className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <SectionLabel>How It Works</SectionLabel>
        <h2 className="font-syne font-extrabold tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
          Our <span className="text-g3">4-Step</span> Onboarding
        </h2>
        <p className="text-[1.05rem] leading-[1.75] max-w-xl" style={{ color: 'rgba(168,245,168,0.6)' }}>
          From first contact to full operations in as little as 2 weeks — our streamlined process gets you live fast.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
        {/* Connector line (desktop) */}
        <div
          className="hidden lg:block absolute top-[30px] left-[12.5%] right-[12.5%] h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #2eb82e, transparent)' }}
        />

        {steps.map((step, i) => (
          <StepCard key={i} step={step} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}

function StepCard({ step, delay }: { step: typeof steps[0]; delay: number }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className="relative z-[1]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {/* Number circle */}
      <div className="relative w-[60px] h-[60px] mb-6">
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(46,184,46,0.15), transparent)' }}
        />
        <div
          className="w-full h-full rounded-full border border-g3 flex items-center justify-center bg-dark relative z-[1]"
        >
          <span className="font-syne font-extrabold text-g3 text-[1.1rem]">{step.num}</span>
        </div>
      </div>

      <h3 className="font-syne font-bold text-white text-[1rem] mb-3">{step.title}</h3>
      <p className="text-[0.87rem] leading-[1.65]" style={{ color: 'rgba(168,245,168,0.6)' }}>{step.desc}</p>
    </div>
  )
}
