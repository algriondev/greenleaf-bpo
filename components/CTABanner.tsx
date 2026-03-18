'use client'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { EyebrowGreen } from './about'
import { useReveal } from '@/hooks/useReveal'

export default function CTABanner() {
  const { ref, visible } = useReveal()
  return (
    <section id="contact" className="relative z-[2] py-24 px-[5%] overflow-hidden"
      style={{ borderTop:'1px solid var(--border-g)', borderBottom:'1px solid var(--border-g)', background:'linear-gradient(135deg,rgba(10,74,10,0.85),rgba(12,12,12,0.95))' }}>
      <div style={{ position:'absolute', top:'-60%', right:'-8%', width:580, height:580, borderRadius:'50%', background:'radial-gradient(circle,rgba(37,170,37,0.07),transparent 60%)', pointerEvents:'none' }}/>
      <div ref={ref} style={{ maxWidth:680, position:'relative', zIndex:1, opacity:visible?1:0, transform:visible?'none':'translateY(22px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
        <EyebrowGreen>Let&apos;s Connect</EyebrowGreen>
        <h2 style={{ fontSize:'clamp(1.8rem,3.6vw,2.9rem)', color:'#f2f2f2', marginBottom:14 }}>
          Ready to Transform<br/>Your <span className="text-grad-green">Business Operations?</span>
        </h2>
        <p style={{ fontFamily:'var(--font-inter)', fontSize:'1rem', lineHeight:1.76, color:'var(--fg-dim)', marginBottom:36 }}>
          Join global companies that trust Green Leaf Business Connect for world-class BPO solutions. Get a free consultation today.
        </p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:16, alignItems:'center' }}>
          <Link href="mailto:info@greenleafbusinessconnect.com" className="btn btn-solid shimmer">
            Get Free Consultation <ArrowRight size={15}/>
          </Link>
          <Link href="mailto:info@greenleafbusinessconnect.com"
            style={{ fontFamily:'var(--font-inter)', fontWeight:400, fontSize:'0.875rem', color:'var(--green-300)', display:'inline-flex', alignItems:'center', gap:8, textDecoration:'none', borderBottom:'1px solid transparent', transition:'all 0.2s' }}
            onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderBottomColor='var(--green-300)'; el.style.color='#f2f2f2' }}
            onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderBottomColor='transparent'; el.style.color='var(--green-300)' }}>
            <Mail size={14}/>
            info@greenleafbusinessconnect.com
          </Link>
        </div>
      </div>
    </section>
  )
}