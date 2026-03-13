'use client'
import { useReveal } from '@/hooks/useReveal'

function EyebrowGreen({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow-green">{children}</div>
}

const industries = [
  { emoji:'🏦', name:'Banking & Finance',  count:'120+ clients' },
  { emoji:'🏥', name:'Healthcare',          count:'85+ clients'  },
  { emoji:'🛒', name:'E-Commerce',          count:'200+ clients' },
  { emoji:'✈️', name:'Travel & Tourism',   count:'60+ clients'  },
  { emoji:'📡', name:'Telecom & Media',     count:'45+ clients'  },
  { emoji:'🏗️', name:'Real Estate',        count:'35+ clients'  },
  { emoji:'🎓', name:'Education',           count:'70+ clients'  },
  { emoji:'⚡', name:'Energy & Utilities',  count:'28+ clients'  },
  { emoji:'🚚', name:'Logistics',           count:'55+ clients'  },
  { emoji:'🛡️', name:'Insurance',          count:'40+ clients'  },
]

export default function Industries() {
  const { ref, visible } = useReveal()
  return (
    <section id="industries" className="relative z-[2] py-24 px-[5%]">
      <div style={{ maxWidth:1400, margin:'0 auto' }}>
        <div ref={ref} style={{ textAlign:'center', marginBottom:52, opacity:visible?1:0, transform:visible?'none':'translateY(22px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
          <EyebrowGreen>Sectors We Serve</EyebrowGreen>
          <h2 style={{ fontSize:'clamp(1.8rem,3.4vw,2.7rem)', color:'#f2f2f2', marginBottom:12 }}>
            Built for Every <span className="text-grad-green">Industry</span>
          </h2>
          <p style={{ fontFamily:'var(--font-inter)', fontSize:'1rem', lineHeight:1.76, maxWidth:500, margin:'0 auto', color:'var(--fg-dim)' }}>
            Deep domain expertise across verticals means we speak your industry&apos;s language from day one.
          </p>
        </div>
        <div style={{ display:'flex', gap:16, overflowX:'auto', paddingBottom:8, scrollbarWidth:'thin', scrollbarColor:'var(--green-800) transparent' }}>
          {industries.map((ind, i) => (
            <div key={i} style={{ flexShrink:0, display:'flex', flexDirection:'column', gap:8, padding:'22px 24px', minWidth:168, borderRadius:10, background:'rgba(37,170,37,0.05)', border:'1px solid var(--border-g)', cursor:'default', transition:'all 0.25s' }}
              onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--accent)'; el.style.background='rgba(37,170,37,0.1)'; el.style.transform='translateY(-5px)'; el.style.boxShadow='0 16px 36px rgba(0,0,0,0.3)' }}
              onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--border-g)'; el.style.background='rgba(37,170,37,0.05)'; el.style.transform='none'; el.style.boxShadow='none' }}>
              <span style={{ fontSize:'1.8rem' }}>{ind.emoji}</span>
              <span style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'0.86rem', color:'#f2f2f2' }}>{ind.name}</span>
              <span style={{ fontFamily:'var(--font-inter)', fontSize:'0.72rem', color:'var(--fg-dim)' }}>{ind.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}