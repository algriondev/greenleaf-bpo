'use client'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    el.style.opacity = '0'; el.style.transform = 'translateY(20px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      el.style.opacity = '1'; el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <section ref={ref} id="home" className="relative z-[2] min-h-screen flex items-center px-[5%] pt-28 pb-20 overflow-hidden">

      {/* Background photo */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/office03.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}/>
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(105deg, rgba(12,12,12,0.93) 0%, rgba(12,12,12,0.82) 55%, rgba(12,12,12,0.55) 100%)',
      }}/>
      {/* Green tint */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse at 20% 60%, rgba(37,170,37,0.08) 0%, transparent 65%)',
      }}/>

      <div className="max-w-[1400px] mx-auto w-full relative" style={{ zIndex: 2 }}>
        <div style={{ maxWidth: 640 }}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8" style={{
            background: 'rgba(37,170,37,0.08)', border: '1px solid rgba(37,170,37,0.22)',
            borderRadius: 100, padding: '7px 16px',
            fontFamily: 'var(--font-inter)', fontSize: '0.7rem', fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green-200)',
          }}>
            <span className="dot-pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, display: 'block' }}/>
            Africa&apos;s Premier BPO Partner
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(2.6rem, 5.2vw, 4.8rem)', color: '#f2f2f2', marginBottom: 20 }}>
            World-Class<br />
            <span className="text-grad">Business Process</span><br />
            Outsourcing
          </h1>

          {/* Body */}
          <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '1.02rem', lineHeight: 1.78, color: 'var(--fg-dim)', maxWidth: 500, marginBottom: 38 }}>
            Green Leaf Business Connect delivers cutting-edge BPO solutions from Kenya to the globe —
            combining African talent excellence with world-class technology for transformative outcomes.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href="#contact" className="btn btn-solid shimmer">
              Start Outsourcing <ArrowRight size={15}/>
            </Link>
            <Link href="#services" className="btn btn-ghost">
              Explore Services
            </Link>
          </div>

          {/* Scroll hint */}
          <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 10, color: 'var(--fg-muted)' }}>
            <ChevronDown size={15} className="animate-bounce"/>
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  )
}