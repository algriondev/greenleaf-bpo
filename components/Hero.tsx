'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative z-[2] min-h-screen flex items-center px-[5%] pt-28 pb-20 overflow-hidden"
    >
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/office02.webp"
          alt="Office workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(92,230,92,0.18)] bg-[rgba(46,184,46,0.07)] mb-8">
          <span
            className="w-2 h-2 rounded-full bg-g3"
            style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
          />
          <span className="text-g4 text-[0.72rem] uppercase tracking-[0.14em]">
            Africa&apos;s Premier BPO Partner
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-syne font-extrabold leading-[1.02] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
          <span className="block text-white">World-Class</span>
          <span className="block text-gradient-green">Business Process</span>
          <span className="block text-white">Outsourcing</span>
        </h1>

        {/* Sub */}
        <p className="text-[1.1rem] leading-[1.75] text-dim max-w-[520px] mb-11"
          style={{ color: 'rgba(168,245,168,0.6)' }}>
          Green Leaf Business Connect delivers cutting-edge BPO solutions from Kenya to the globe —
          combining African talent excellence with world-class technology for transformative business outcomes.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="shimmer inline-flex items-center gap-3 bg-gradient-to-br from-g2 to-g3 text-white px-8 py-4 rounded-sm font-dm font-medium text-[0.92rem] tracking-[0.04em] btn-glow"
          >
            Start Outsourcing
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-3 border border-[rgba(92,230,92,0.18)] text-g5 px-8 py-4 rounded-sm font-dm text-[0.92rem] tracking-[0.04em] hover:border-g3 hover:bg-[rgba(46,184,46,0.12)] hover:text-white transition-all"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <Play size={14} />
            Explore Services
          </Link>
        </div>
      </div>

      {/* Globe visual */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] pointer-events-none hidden lg:block">
        <div className="relative w-full" style={{ paddingBottom: '90%' }}>
          {/* Orbit rings */}
          {[
            { size: '60%', duration: '15s', reverse: false },
            { size: '80%', duration: '20s', reverse: false },
            { size: '100%', duration: '28s', reverse: true },
            { size: '118%', duration: '38s', reverse: false },
          ].map((ring, i) => (
            <div
              key={i}
              className="orbit-ring"
              style={{
                width: ring.size, height: ring.size,
                animation: `orbit ${ring.duration} linear infinite${ring.reverse ? ' reverse' : ''}`,
                opacity: 0.6 - i * 0.1,
              }}
            >
              {i < 2 && (
                <div
                  className="absolute w-2 h-2 bg-g3 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ boxShadow: '0 0 12px #2eb82e' }}
                />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
