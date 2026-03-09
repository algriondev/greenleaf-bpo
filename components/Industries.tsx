'use client'
import { useReveal } from '@/hooks/useReveal'
import { SectionLabel } from './Services'

const industries = [
  { emoji: '🏦', name: 'Banking & Finance', count: '120+ clients' },
  { emoji: '🏥', name: 'Healthcare', count: '85+ clients' },
  { emoji: '🛒', name: 'E-Commerce', count: '200+ clients' },
  { emoji: '✈️', name: 'Travel & Tourism', count: '60+ clients' },
  { emoji: '📡', name: 'Telecom & Media', count: '45+ clients' },
  { emoji: '🏗️', name: 'Real Estate', count: '35+ clients' },
  { emoji: '🎓', name: 'Education', count: '70+ clients' },
  { emoji: '⚡', name: 'Energy & Utilities', count: '28+ clients' },
  { emoji: '🚚', name: 'Logistics', count: '55+ clients' },
  { emoji: '🛡️', name: 'Insurance', count: '40+ clients' },
]

export default function Industries() {
  const { ref, visible } = useReveal()

  return (
    <section id="industries" className="relative z-[2] py-24 px-[5%]">
      <div
        ref={ref}
        className={`flex flex-col items-center text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <SectionLabel>Sectors We Serve</SectionLabel>
        <h2 className="font-syne font-extrabold tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
          Built for Every <span className="text-g3">Industry</span>
        </h2>
        <p className="text-[1.05rem] leading-[1.75] max-w-xl" style={{ color: 'rgba(168,245,168,0.6)' }}>
          Deep domain expertise across verticals means we speak your industry&apos;s language from day one.
        </p>
      </div>

      <div
        className="flex gap-5 overflow-x-auto pb-4"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#1a5c1a transparent' }}
      >
        {industries.map((ind, i) => (
          <div
            key={i}
            data-cursor-grow
            className="flex-shrink-0 flex flex-col gap-2 px-7 py-6 border border-[rgba(92,230,92,0.18)] min-w-[180px] cursor-none"
            style={{
              background: 'rgba(46,184,46,0.07)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              borderRadius: 2,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#2eb82e'
              el.style.background = 'rgba(46,184,46,0.12)'
              el.style.transform = 'translateY(-6px)'
              el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.35)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(92,230,92,0.18)'
              el.style.background = 'rgba(46,184,46,0.07)'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            <span className="text-3xl">{ind.emoji}</span>
            <span className="font-syne font-bold text-[0.88rem] text-white">{ind.name}</span>
            <span className="text-[0.72rem]" style={{ color: 'rgba(168,245,168,0.6)' }}>{ind.count}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
