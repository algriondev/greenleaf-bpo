'use client'
import { SectionLabel } from './Services'
import { useReveal } from '@/hooks/useReveal'

const features = [
  {
    title: "Africa's #1 BPO Talent Pool",
    desc: 'Kenya ranks among Africa\'s top BPO destinations — multilingual, tech-savvy professionals delivering quality at competitive costs.',
  },
  {
    title: 'Scalable & Flexible Operations',
    desc: 'Seamlessly scale from 10 to 10,000 agents. Our elastic model adapts to your demand cycles without compromising quality.',
  },
  {
    title: 'Technology-First Approach',
    desc: 'Powered by AI, automation, and advanced analytics — we future-proof your operations with cutting-edge BPO technology.',
  },
  {
    title: 'Data Security & Compliance',
    desc: 'GDPR-compliant, ISO-certified, with enterprise security protocols protecting your most sensitive business data.',
  },
]

import Image from 'next/image'

export default function WhyUs() {
  const { ref: leftRef, visible: leftVisible } = useReveal()
  const { ref: rightRef, visible: rightVisible } = useReveal()

  return (
    <section
      id="why"
      className="relative z-[2] py-24 px-[5%]"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(10,46,10,0.3), transparent)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Image side */}
        <div
          ref={leftRef}
          className={`relative transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          {/* Image side */}
          <div className="w-full relative overflow-hidden border border-[rgba(92,230,92,0.18)]" style={{ aspectRatio: '4/5' }}>
            <Image
              src="/office03.webp"
              alt="Modern office operations floor"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(46,184,46,0.1), transparent 70%)' }}
            />
          </div>

          {/* Float cards */}
          <div
            className="absolute -bottom-5 -right-8 border border-[rgba(92,230,92,0.18)] px-5 py-4 min-w-[160px]"
            style={{ background: 'rgba(10,46,10,0.92)', backdropFilter: 'blur(20px)' }}
          >
            <div className="font-syne font-extrabold text-[1.8rem] text-g3">99.8%</div>
            <div className="text-[0.74rem] mt-1" style={{ color: 'rgba(168,245,168,0.6)' }}>SLA Compliance</div>
          </div>
          <div
            className="absolute top-8 -right-10 border border-[rgba(92,230,92,0.18)] px-5 py-4 min-w-[160px]"
            style={{ background: 'rgba(10,46,10,0.92)', backdropFilter: 'blur(20px)' }}
          >
            <div className="font-syne font-extrabold text-[1.8rem] text-g3">ISO</div>
            <div className="text-[0.74rem] mt-1" style={{ color: 'rgba(168,245,168,0.6)' }}>Certified Operations</div>
          </div>
        </div>

        {/* Text side */}
        <div
          ref={rightRef}
          className={`transition-all duration-700 delay-200 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <SectionLabel>Our Advantage</SectionLabel>
          <h2 className="font-syne font-extrabold tracking-tight mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
            Why Global Brands<br />Choose <span className="text-g3">Green Leaf</span>
          </h2>
          <p className="text-[1.05rem] leading-[1.75] mb-10" style={{ color: 'rgba(168,245,168,0.6)' }}>
            We combine the strategic advantage of Kenya&apos;s thriving tech talent ecosystem with enterprise-grade processes to deliver outcomes that exceed global benchmarks.
          </p>

          <div className="flex flex-col gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex gap-5 items-start px-6 py-5 rounded border border-transparent hover:border-[rgba(92,230,92,0.18)] hover:bg-[rgba(46,184,46,0.07)] transition-all duration-300"
              >
                <div
                  className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-white text-[0.75rem] mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #1a5c1a, #2eb82e)' }}
                >
                  ✓
                </div>
                <div>
                  <h4 className="font-syne font-bold text-[0.97rem] text-white mb-1">{f.title}</h4>
                  <p className="text-[0.87rem] leading-[1.65]" style={{ color: 'rgba(168,245,168,0.6)' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
