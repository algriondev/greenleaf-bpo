'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'

const serviceLinks = ['Customer Experience','Data Processing','Finance & Accounting','HR Outsourcing','IT Support','Back Office']
const companyLinks = ['About Us','Leadership Team','Careers','Press & Media','CSR Initiatives','Contact']

export default function Footer() {
  return (
    <footer className="relative z-[2] px-[5%] pt-20 pb-10"
      style={{ borderTop:'1px solid var(--border-g)', background:'rgba(5,36,5,0.35)' }}>
      <div style={{ maxWidth:1400, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:48, marginBottom:56 }}>

          <div>
            <Image src="/logo.webp" alt="Green Leaf Business Connect" width={130} height={46}
              className="mb-5 h-11 w-auto" style={{ filter:'drop-shadow(0 0 8px rgba(37,170,37,0.3))' }}/>
            <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.875rem', lineHeight:1.76, maxWidth:240, color:'var(--fg-dim)' }}>
              Africa&apos;s premier BPO partner — connecting global enterprises with world-class talent and technology from Kenya to the world.
            </p>
            <div style={{ display:'flex', gap:10, marginTop:20 }}>
              {['𝕏','in','f','▶'].map((icon, i) => (
                <Link key={i} href="#" style={{ width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid var(--border-g)', borderRadius:7, color:'var(--fg-dim)', fontSize:'0.82rem', textDecoration:'none', transition:'all 0.2s' }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--accent)'; el.style.color='var(--accent)'; el.style.background='rgba(37,170,37,0.08)' }}
                  onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--border-g)'; el.style.color='var(--fg-dim)'; el.style.background='transparent' }}>
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'0.82rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--green-300)', marginBottom:18 }}>Services</h4>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:11 }}>
              {serviceLinks.map(s => (
                <li key={s}>
                  <Link href="#services" style={{ fontFamily:'var(--font-inter)', fontSize:'0.875rem', color:'var(--fg-dim)', textDecoration:'none', transition:'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--green-300)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--fg-dim)'}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'0.82rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--green-300)', marginBottom:18 }}>Company</h4>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:11 }}>
              {companyLinks.map(c => (
                <li key={c}>
                  <Link href="#" style={{ fontFamily:'var(--font-inter)', fontSize:'0.875rem', color:'var(--fg-dim)', textDecoration:'none', transition:'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--green-300)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--fg-dim)'}>{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily:'var(--font-poppins)', fontWeight:600, fontSize:'0.82rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--green-300)', marginBottom:18 }}>Contact</h4>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:14 }}>
              {[
                { icon:<Mail size={13}/>,   text:'info@greenleafbusinessconnect.com', href:'mailto:info@greenleafbusinessconnect.com' },
                { icon:<MapPin size={13}/>, text:'Nairobi, Kenya',                    href:'#' },
                { icon:<Phone size={13}/>,  text:'+254 — — — — — —',                 href:'#' },
                { icon:<Clock size={13}/>,  text:'Mon–Fri: 8am – 6pm EAT',           href:'#' },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} style={{ fontFamily:'var(--font-inter)', fontSize:'0.875rem', color:'var(--fg-dim)', textDecoration:'none', display:'flex', alignItems:'flex-start', gap:11, transition:'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--green-300)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--fg-dim)'}>
                    <span style={{ color:'var(--accent)', flexShrink:0, marginTop:3 }}>{item.icon}</span>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:12, paddingTop:24, borderTop:'1px solid rgba(37,170,37,0.1)', fontFamily:'var(--font-inter)', fontSize:'0.78rem', color:'var(--fg-muted)' }}>
          <p>© {new Date().getFullYear()} Green Leaf Business Connect Ltd. All rights reserved.</p>
          <p style={{ display:'flex', alignItems:'center', gap:6 }}>Made in 🌍 Kenya</p>
          <div style={{ display:'flex', gap:20 }}>
            {['Privacy Policy','Terms of Service'].map(l => (
              <Link key={l} href="#" style={{ color:'var(--fg-muted)', textDecoration:'none', transition:'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--green-300)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--fg-muted)'}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}