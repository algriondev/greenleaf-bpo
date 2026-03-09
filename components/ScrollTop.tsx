'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center rounded text-white transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, #1a5c1a, #2eb82e)',
        boxShadow: '0 8px 24px rgba(46,184,46,0.3)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: visible ? 'all' : 'none',
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
