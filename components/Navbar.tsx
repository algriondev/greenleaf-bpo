'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why Us' },
  { href: '#industries', label: 'Industries' },
  { href: '#global', label: 'Global' },
  { href: '#testimonials', label: 'Clients' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5%] border-b border-[rgba(92,230,92,0.18)]"
      style={{
        padding: scrolled ? '12px 5%' : '18px 5%',
        background: scrolled ? 'rgba(6,15,6,0.92)' : 'rgba(6,15,6,0.6)',
        backdropFilter: 'blur(20px)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <Link href="#home" className="flex items-center gap-3">
        <Image
          src="/logo.webp"
          alt="Green Leaf Business Connect"
          width={180} // increased size
          height={70} // increased size
          className="h-16 w-auto" // adjust Tailwind height
          style={{ filter: 'drop-shadow(0 0 10px rgba(46,184,46,0.4))' }}
          priority
        />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        {links.map(l => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[rgba(168,245,168,0.6)] text-[0.85rem] uppercase tracking-widest hover:text-g4 transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-g3 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#contact"
            className="shimmer bg-gradient-to-br from-g2 to-g3 text-white px-5 py-2 text-[0.85rem] font-medium uppercase tracking-widest rounded-sm btn-glow"
          >
            Get Started
          </Link>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-g4 z-[200]"
        onClick={() => setMobileOpen(p => !p)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-[150]">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-syne text-2xl font-bold text-g5 hover:text-g3 transition-colors uppercase tracking-widest"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="bg-gradient-to-br from-g2 to-g3 text-white px-8 py-3 font-syne font-bold uppercase tracking-widest mt-4 btn-glow"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
