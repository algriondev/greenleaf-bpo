'use client'
import { EyebrowGreen } from './about'
import { useReveal } from '@/hooks/useReveal'

const locations = [
  { label:'Nairobi HQ', top:'54%', left:'57%' },
  { label:'London',     top:'22%', left:'44%' },
  { label:'New York',   top:'33%', left:'17%' },
  { label:'Dubai',      top:'36%', left:'63%' },
  { label:'Sydney',     top:'70%', left:'80%' },
  { label:'Berlin',     top:'19%', left:'49%' },
  { label:'Toronto',    top:'27%', left:'14%' },
]

const stats = [
  { n:'15+',  l:'Countries Served'    },
  { n:'6',    l:'Continental Markets' },
  { n:'24/7', l:'Global Operations'   },
  { n:'12+',  l:'Languages Supported' },
]

export default function GlobalPresence() {
  const { ref: lRef, visible: lVis } = useReveal()
  const { ref: rRef, visible: rVis } = useReveal()
  return (
    <section id="global" className="relative z-[2] py-24 px-[5%]">
      <div style={{ maxWidth:1400, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:64, alignItems:'center' }}>

        <div ref={lRef} style={{ opacity:lVis?1:0, transform:lVis?'none':'translateY(22px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
          <EyebrowGreen>Our Reach</EyebrowGreen>
          <h2 style={{ fontSize:'clamp(1.8rem,3.4vw,2.7rem)', color:'#f2f2f2', marginBottom:14 }}>
            Headquartered in <span className="text-grad-green">Kenya</span>,<br/>Operating Globally
          </h2>
          <p style={{ fontFamily:'var(--font-inter)', fontSize:'1rem', lineHeight:1.76, color:'var(--fg-dim)', marginBottom:36 }}>
            From Nairobi, we serve clients across Africa, Europe, North America, the Middle East and beyond — 24 hours a day, across every time zone.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'var(--border-g)', border:'1px solid var(--border-g)', borderRadius:10, overflow:'hidden' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background:'var(--bg)', padding:'22px 24px' }}>
                <div style={{ fontFamily:'var(--font-poppins)', fontWeight:700, fontSize:'1.9rem', color:'var(--accent)' }}>{s.n}</div>
                <div style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'var(--fg-dim)', marginTop:4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={rRef} style={{ position:'relative', aspectRatio:'16/10', background:'rgba(37,170,37,0.04)', border:'1px solid var(--border-g)', borderRadius:12, overflow:'hidden', opacity:rVis?1:0, transform:rVis?'none':'translateY(22px)', transition:'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 50%, rgba(37,170,37,0.05),transparent 70%)' }}/>
          <svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.14 }}>
            <path d="M140 160 Q200 120 280 130 Q340 135 360 180 Q380 230 340 260 Q300 290 260 270 Q200 250 160 220 Z" fill="rgba(37,170,37,0.5)" stroke="rgba(37,170,37,0.7)" strokeWidth="1"/>
            <path d="M380 120 Q500 100 560 140 Q610 170 590 220 Q570 260 520 280 Q460 300 420 260 Q390 230 380 190 Z" fill="rgba(37,170,37,0.5)" stroke="rgba(37,170,37,0.7)" strokeWidth="1"/>
            <path d="M430 290 Q490 280 530 320 Q560 360 530 400 Q500 430 460 420 Q420 400 420 360 Z" fill="rgba(37,170,37,0.5)" stroke="rgba(37,170,37,0.7)" strokeWidth="1"/>
            <path d="M580 160 Q640 150 680 180 Q710 210 700 250 Q685 280 650 280 Q610 275 590 250 Q570 220 580 190 Z" fill="rgba(37,170,37,0.5)" stroke="rgba(37,170,37,0.7)" strokeWidth="1"/>
            <path d="M640 300 Q700 290 740 330 Q760 360 740 390 Q715 415 680 410 Q645 400 640 370 Z" fill="rgba(37,170,37,0.5)" stroke="rgba(37,170,37,0.7)" strokeWidth="1"/>
            <path d="M200 260 Q270 250 300 290 Q320 330 290 360 Q260 385 220 370 Q190 350 190 320 Z" fill="rgba(37,170,37,0.5)" stroke="rgba(37,170,37,0.7)" strokeWidth="1"/>
          </svg>
          {locations.map((loc, i) => (
            <div key={i} style={{ position:'absolute', top:loc.top, left:loc.left, display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
              <div className="pin-dot"/>
              <span style={{ fontFamily:'var(--font-inter)', fontSize:'0.58rem', letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--green-300)', whiteSpace:'nowrap' }}>{loc.label}</span>
            </div>
          ))}
          <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8, pointerEvents:'none' }}>
            <span style={{ fontSize:'2.5rem', opacity:0.13 }}>🌍</span>
            <span style={{ fontFamily:'var(--font-inter)', fontSize:'0.6rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--fg-muted)', opacity:0.5 }}>[ Replace with interactive map ]</span>
          </div>
        </div>

      </div>
    </section>
  )
}