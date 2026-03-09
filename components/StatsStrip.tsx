'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { num: 500, suffix: '+', label: 'Clients Served Globally' },
  { num: 15, suffix: '+', label: 'Countries Reached' },
  { num: 98, suffix: '%', label: 'Client Retention Rate' },
  { num: 24, suffix: '/7', label: 'Round-the-Clock Support' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const start = performance.now()
          const step = (ts: number) => {
            const p = Math.min((ts - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setCount(Math.floor(eased * target))
            if (p < 1) requestAnimationFrame(step)
            else setCount(target)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsStrip() {
  return (
    <div className="relative z-[2] grid grid-cols-2 md:grid-cols-4 border-t border-b border-[rgba(92,230,92,0.18)]">
      {stats.map((s, i) => (
        <div
          key={i}
          className="group px-[5%] py-10 border-r border-[rgba(92,230,92,0.18)] last:border-r-0 relative overflow-hidden transition-all duration-300 hover:bg-[rgba(46,184,46,0.05)]"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, rgba(46,184,46,0.07), transparent)' }}
          />
          <div
            className="font-syne font-extrabold text-[2.8rem] leading-none mb-2"
            style={{
              background: 'linear-gradient(90deg, #2eb82e, #a8f5a8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <Counter target={s.num} suffix={s.suffix} />
          </div>
          <div className="text-[0.8rem] uppercase tracking-[0.1em]" style={{ color: 'rgba(168,245,168,0.6)' }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
