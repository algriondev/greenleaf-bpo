'use client'
import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
      style={{
        position:'fixed', bottom:28, right:28, zIndex:200,
        width:42, height:42, borderRadius:9,
        background:'var(--surface)', border:'1px solid var(--border-g)',
        display:'flex', alignItems:'center', justifyContent:'center',
        color:'var(--accent)', cursor:'pointer',
        boxShadow:'0 4px 18px rgba(0,0,0,0.35)',
        transition:'all 0.2s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'var(--accent)'
        el.style.color = '#fff'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'var(--surface)'
        el.style.color = 'var(--accent)'
      }}>
      <ChevronUp size={18}/>
    </button>
  )
}