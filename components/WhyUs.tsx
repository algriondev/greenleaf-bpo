'use client'
import Image from 'next/image'
import { EyebrowAmber } from './about'
import { useReveal } from '@/hooks/useReveal'

const features = [
  { title:"Africa's #1 BPO Talent Pool", desc:"Kenya ranks among Africa's top BPO destinations — multilingual, tech-savvy professionals delivering quality at competitive costs." },
  { title:'Scalable & Flexible Operations', desc:'Seamlessly scale from 10 to 10,000 agents. Our elastic model adapts to your demand cycles without compromising quality.' },
  { title:'Technology-First Approach', desc:'Powered by AI, automation and advanced analytics — we future-proof your operations with cutting-edge technology.' },
  { title:'Data Security & Compliance', desc:'GDPR-compliant, ISO-certified, with enterprise security protocols protecting your most sensitive business data.' },
]

export default function WhyUs() {
  const { ref: lRef, visible: lVis } = useReveal()
  const { ref: rRef, visible: rVis } = useReveal()
  return (
    <section id="why" className="relative z-[2] py-24 px-[5%]"
      style={{ background:'linear-gradient(180deg,transparent,rgba(192,124,16,0.06),transparent)' }}>
      <div style={{ maxWidth:1400, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:64, alignItems:'center' }}>

          <div ref={lRef} style={{ opacity:lVis?1:0, transform:lVis?'none':'translateX(-24px)', transition:'opacity 0.7s ease, transform 0.7s ease', position:'relative' }}>
            <div style={{ aspectRatio:'4/5', position:'relative', border:'1px solid var(--border-a)', borderRadius:12, overflow:'hidden' }}>
              <Image src="/office02.webp" alt="Green Leaf BPO Operations" fill className="object-cover" style={{ objectPosition:'center' }}/>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 55%, rgba(61,34,0,0.5) 100%)' }}/>
            </div>
            <div style={{ position:'absolute', bottom:-18, right:-24, background:'rgba(61,34,0,0.96)', backdropFilter:'blur(18px)', border:'1px solid var(--border-a)', borderRadius:10, padding:'16px 22px', minWidth:148 }}>
              <div style={{ fontFamily:'var(--font-poppins)', fontWeight:700, fontSize:'1.7rem', color:'var(--amber-lt)' }}>99.8%</div>
              <div style={{ fontFamily:'var(--font-inter)', fontSize:'0.73rem', color:'var(--fg-dim)', marginTop:3 }}>SLA Compliance</div>
            </div>
            <div style={{ position:'absolute', top:24, right:-28, background:'rgba(61,34,0,0.96)', backdropFilter:'blur(18px)', border:'1px solid var(--border-a)', borderRadius:10, padding:'16px 22px', minWidth:148 }}>
              <div style={{ fontFamily:'var(--font-poppins)', fontWeight:700, fontSize:'1.7rem', color:'var(--amber-lt)' }}>ISO</div>
              <div style={{ fontFamily:'var(--font-inter)', fontSize:'0.73rem', color:'var(--fg-dim)', marginTop:3 }}>Certified Operations</div>
            </div>
          </div>

          <div ref={rRef} style={{ opacity:rVis?1:0, transform:rVis?'none':'translateX(24px)', transition:'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}>
            <EyebrowAmber>Our Advantage</EyebrowAmber>
            <h2 style={{ fontSize:'clamp(1.8rem,3.4vw,2.7rem)', color:'#f2f2f2', marginBottom:14 }}>
              Why Global Brands<br/>Choose <span className="text-grad-amber">Green Leaf</span>
            </h2>
            <p style={{ fontFamily:'var(--font-inter)', fontSize:'1rem', lineHeight:1.76, color:'var(--fg-dim)', marginBottom:32 }}>
              We combine the strategic advantage of Kenya&apos;s thriving tech talent ecosystem with enterprise-grade processes to deliver outcomes that exceed global benchmarks.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {features.map((f, i) => (
                <div key={i} style={{ display:'flex', gap:16, alignItems:'flex-start', padding:'16px 20px', borderRadius:9, border:'1px solid transparent', transition:'all 0.25s' }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--border-a)'; el.style.background='rgba(192,124,16,0.06)' }}
                  onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor='transparent'; el.style.background='transparent' }}>
                  <div style={{ width:26, height:26, borderRadius:'50%', background:'linear-gradient(135deg,var(--amber-800),var(--amber))', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2, color:'#fff', fontSize:'0.72rem' }}>✓</div>
                  <div>
                    <h4 style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'0.95rem', color:'#f2f2f2', marginBottom:5 }}>{f.title}</h4>
                    <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.865rem', lineHeight:1.68, color:'var(--fg-dim)' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}