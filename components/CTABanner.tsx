'use client'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { SectionLabel } from './Services'
import { useReveal } from '@/hooks/useReveal'

export default function CTABanner() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="contact"
      className="relative z-[2] py-24 px-[5%] overflow-hidden border-t border-b border-[rgba(92,230,92,0.18)]"
      style={{ background: 'linear-gradient(135deg, rgba(10,46,10,0.9), rgba(6,15,6,0.95))' }}
    >
      {/* Glow orb */}
      <div
        className="absolute top-[-50%] right-[-10%] rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(46,184,46,0.08), transparent 60%)',
        }}
      />

      <div
        ref={ref}
        className={`max-w-2xl relative z-[1] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <SectionLabel>Let&apos;s Connect</SectionLabel>
        <h2 className="font-syne font-extrabold tracking-tight mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
          Ready to Transform<br />Your <span className="text-g3">Business Operations?</span>
        </h2>
        <p className="text-[1.05rem] leading-[1.75] mb-10" style={{ color: 'rgba(168,245,168,0.6)' }}>
          Join 500+ global companies that trust Green Leaf Business Connect for world-class BPO solutions. Get a free consultation today.
        </p>
        <div className="flex flex-wrap gap-5 items-center">
          <Link
            href="mailto:info@greenleafbusinessconnect.com"
            className="shimmer inline-flex items-center gap-3 bg-gradient-to-br from-g2 to-g3 text-white px-8 py-4 rounded-sm font-dm font-medium tracking-[0.04em] btn-glow"
          >
            Get Free Consultation
            <ArrowRight size={16} />
          </Link>
          <Link
            href="mailto:info@greenleafbusinessconnect.com"
            className="inline-flex items-center gap-2 text-g4 text-[0.88rem] border-b border-transparent hover:border-g4 transition-colors"
          >
            <Mail size={15} />
            info@greenleafbusinessconnect.com
          </Link>
        </div>
      </div>
    </section>
  )
}
