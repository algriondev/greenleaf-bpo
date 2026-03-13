'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href:'#services',     label:'Services' },
  { href:'#about',        label:'About' },
  { href:'#industries',   label:'Industries' },
  { href:'#global',       label:'Global Reach' },
  { href:'#testimonials', label:'Clients' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100]" style={{
      padding: scrolled ? '12px 5%' : '18px 5%',
      background: scrolled ? 'rgba(5,36,5,0.97)' : 'rgba(5,36,5,0.75)',
      backdropFilter:'blur(22px)',
      borderBottom: scrolled ? '1px solid rgba(37,170,37,0.18)' : '1px solid transparent',
      transition:'all 0.3s ease',
    }}>
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        <Link href="#home">
          <Image src="/logo.webp" alt="Green Leaf Business Connect" width={130} height={46}
            className="h-11 w-auto" style={{ filter:'drop-shadow(0 0 10px rgba(37,170,37,0.35))' }} priority />
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="relative group"
                style={{ fontFamily:'var(--font-inter)', fontWeight:400, fontSize:'0.875rem', color:'var(--green-200)', textDecoration:'none', transition:'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--green-200)'}>
                {l.label}
                <span style={{ position:'absolute', bottom:-2, left:0, right:0, height:1, background:'var(--accent)', transformOrigin:'left', transform:'scaleX(0)', transition:'transform 0.3s ease', display:'block' }} className="group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact" className="btn btn-solid shimmer" style={{ padding:'10px 22px', fontSize:'0.85rem' }}>
              Get Started
            </Link>
          </li>
        </ul>

        <button className="md:hidden" style={{ color:'var(--green-200)', background:'none', border:'none', cursor:'pointer' }} onClick={() => setMobileOpen(p => !p)}>
          {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[150] flex flex-col items-center justify-center gap-9"
          style={{ background:'rgba(5,36,5,0.98)', backdropFilter:'blur(24px)' }}>
          <button className="absolute top-6 right-6" style={{ color:'var(--green-300)', background:'none', border:'none', cursor:'pointer' }} onClick={() => setMobileOpen(false)}>
            <X size={24}/>
          </button>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'1.6rem', color:'#f2f2f2', textDecoration:'none' }}>
              {l.label}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setMobileOpen(false)} className="btn btn-solid" style={{ fontSize:'1rem', padding:'14px 36px', marginTop:8 }}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}