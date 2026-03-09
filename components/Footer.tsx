import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'

const serviceLinks = [
  'Customer Experience', 'Data Processing', 'Finance & Accounting',
  'HR Outsourcing', 'IT Support', 'Back Office',
]
const companyLinks = [
  'About Us', 'Leadership Team', 'Careers', 'Press & Media',
  'CSR Initiatives', 'Contact',
]

export default function Footer() {
  return (
    <footer className="relative z-[2] px-[5%] pt-20 pb-10 border-t border-[rgba(92,230,92,0.18)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

        {/* Brand */}
        <div>
          <Image
            src="/logo.webp"
            alt="Green Leaf Business Connect"
            width={140}
            height={52}
            className="h-13 w-auto mb-5"
            style={{ filter: 'drop-shadow(0 0 8px rgba(46,184,46,0.3))' }}
          />
          <p className="text-[0.87rem] leading-[1.75] max-w-[260px]" style={{ color: 'rgba(168,245,168,0.6)' }}>
            Africa&apos;s premier BPO partner — connecting global enterprises with world-class talent and technology from Kenya to the world.
          </p>
          <div className="flex gap-3 mt-6">
            {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-[rgba(92,230,92,0.18)] rounded text-[rgba(168,245,168,0.6)] text-sm hover:border-g3 hover:text-g3 hover:bg-[rgba(46,184,46,0.1)] transition-all"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-syne font-bold text-[0.85rem] uppercase tracking-[0.1em] text-white mb-5">Services</h4>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map(s => (
              <li key={s}>
                <Link href="#services" className="text-[0.87rem] hover:text-g4 transition-colors"
                  style={{ color: 'rgba(168,245,168,0.6)' }}>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-syne font-bold text-[0.85rem] uppercase tracking-[0.1em] text-white mb-5">Company</h4>
          <ul className="flex flex-col gap-3">
            {companyLinks.map(c => (
              <li key={c}>
                <Link href="#" className="text-[0.87rem] hover:text-g4 transition-colors"
                  style={{ color: 'rgba(168,245,168,0.6)' }}>
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-syne font-bold text-[0.85rem] uppercase tracking-[0.1em] text-white mb-5">Contact</h4>
          <ul className="flex flex-col gap-4">
            {[
              { icon: <Mail size={14} />, text: 'info@greenleafbusinessconnect.com', href: 'mailto:info@greenleafbusinessconnect.com' },
              { icon: <MapPin size={14} />, text: 'Nairobi, Kenya', href: '#' },
              { icon: <Phone size={14} />, text: '+254 — — — — — —', href: '#' },
              { icon: <Clock size={14} />, text: 'Mon–Fri: 8am–6pm EAT', href: '#' },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="flex items-start gap-3 text-[0.87rem] hover:text-g4 transition-colors"
                  style={{ color: 'rgba(168,245,168,0.6)' }}
                >
                  <span className="mt-0.5 text-g3 flex-shrink-0">{item.icon}</span>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(92,230,92,0.18)] text-[0.78rem]"
        style={{ color: 'rgba(168,245,168,0.6)' }}
      >
        <p>© {new Date().getFullYear()} Green Leaf Business Connect Ltd. All rights reserved.</p>
        <p className="flex items-center gap-2">
          Made in <span className="text-g3">🌍</span> Kenya
        </p>
        <div className="flex gap-5">
          <Link href="#" className="hover:text-g4 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-g4 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
