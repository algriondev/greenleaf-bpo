'use client'
import { SectionLabel } from './Services'
import { useReveal } from '@/hooks/useReveal'

const locations = [
  { label: 'Nairobi HQ', top: '54%', left: '57%' },
  { label: 'London', top: '24%', left: '44%' },
  { label: 'New York', top: '34%', left: '18%' },
  { label: 'Dubai', top: '36%', left: '63%' },
  { label: 'Sydney', top: '70%', left: '80%' },
  { label: 'Berlin', top: '20%', left: '48%' },
  { label: 'Toronto', top: '28%', left: '15%' },
]

const gstats = [
  { n: '15+', l: 'Countries Served' },
  { n: '6', l: 'Continental Markets' },
  { n: '24/7', l: 'Global Operations' },
  { n: '12+', l: 'Languages Supported' },
]

export default function GlobalPresence() {
  const { ref: leftRef, visible: leftVisible } = useReveal()
  const { ref: rightRef, visible: rightVisible } = useReveal()

  return (
    <section id="global" className="relative z-[2] py-24 px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Text */}
        <div
          ref={leftRef}
          className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <SectionLabel>Our Reach</SectionLabel>
          <h2 className="font-syne font-extrabold tracking-tight mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
            Headquartered in <span className="text-g3">Kenya</span>,<br />Operating Globally
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10" style={{ color: 'rgba(168,245,168,0.6)' }}>
            From Nairobi, we serve clients across Africa, Europe, North America, the Middle East, and beyond — 24 hours a day, across every time zone.
          </p>

          <div
            className="grid grid-cols-2 gap-px"
            style={{ background: 'rgba(92,230,92,0.18)', border: '1px solid rgba(92,230,92,0.18)' }}
          >
            {gstats.map((g, i) => (
              <div key={i} className="bg-dark px-6 py-7">
                <div className="font-syne font-extrabold text-g3 text-[2rem]">{g.n}</div>
                <div className="text-[0.78rem] mt-1" style={{ color: 'rgba(168,245,168,0.6)' }}>{g.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div
          ref={rightRef}
          className={`relative border border-[rgba(92,230,92,0.18)] overflow-hidden transition-all duration-700 delay-200 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ aspectRatio: '16/10', background: 'rgba(46,184,46,0.05)' }}
        >
          {/* Glow overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(46,184,46,0.06), transparent 70%)' }}
          />

          {/* SVG continents */}
          <svg
            viewBox="0 0 800 480"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.15 }}
          >
            <path d="M140 160 Q200 120 280 130 Q340 135 360 180 Q380 230 340 260 Q300 290 260 270 Q200 250 160 220 Z" fill="rgba(46,184,46,0.4)" stroke="rgba(46,184,46,0.6)" strokeWidth="1"/>
            <path d="M380 120 Q500 100 560 140 Q610 170 590 220 Q570 260 520 280 Q460 300 420 260 Q390 230 380 190 Z" fill="rgba(46,184,46,0.4)" stroke="rgba(46,184,46,0.6)" strokeWidth="1"/>
            <path d="M430 290 Q490 280 530 320 Q560 360 530 400 Q500 430 460 420 Q420 400 420 360 Z" fill="rgba(46,184,46,0.4)" stroke="rgba(46,184,46,0.6)" strokeWidth="1"/>
            <path d="M580 160 Q640 150 680 180 Q710 210 700 250 Q685 280 650 280 Q610 275 590 250 Q570 220 580 190 Z" fill="rgba(46,184,46,0.4)" stroke="rgba(46,184,46,0.6)" strokeWidth="1"/>
            <path d="M640 300 Q700 290 740 330 Q760 360 740 390 Q715 415 680 410 Q645 400 640 370 Z" fill="rgba(46,184,46,0.4)" stroke="rgba(46,184,46,0.6)" strokeWidth="1"/>
            <path d="M200 260 Q270 250 300 290 Q320 330 290 360 Q260 385 220 370 Q190 350 190 320 Z" fill="rgba(46,184,46,0.4)" stroke="rgba(46,184,46,0.6)" strokeWidth="1"/>
          </svg>

          {/* Location pins */}
          {locations.map((loc, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center gap-1"
              style={{ top: loc.top, left: loc.left }}
            >
              <div className="pin-dot" />
              <span className="text-g4 text-[0.6rem] uppercase tracking-[0.06em] whitespace-nowrap font-dm">
                {loc.label}
              </span>
            </div>
          ))}

          {/* Center placeholder text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
            <span className="text-4xl opacity-15">🌍</span>
            <span className="text-[0.65rem] uppercase tracking-widest opacity-25" style={{ color: 'rgba(168,245,168,0.6)' }}>
              [ Replace with interactive world map ]
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
