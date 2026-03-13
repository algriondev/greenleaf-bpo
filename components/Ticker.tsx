'use client'

const items = [
  'Customer Support BPO','Data Processing Solutions','Back Office Outsourcing',
  'Finance & Accounting BPO','IT Support Services','HR Outsourcing Kenya',
  'Digital Transformation','ISO Certified Operations','24/7 Global Coverage',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden" style={{
      borderTop:'1px solid rgba(37,170,37,0.12)',
      borderBottom:'1px solid rgba(37,170,37,0.12)',
      background:'rgba(10,74,10,0.1)',
      padding:'10px 0',
    }}>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-10 whitespace-nowrap"
            style={{ fontFamily:'var(--font-inter)', fontSize:'0.7rem', fontWeight:500, letterSpacing:'0.13em', textTransform:'uppercase', color:'rgba(104,224,104,0.65)' }}>
            {item}
            <span style={{ color:'rgba(37,170,37,0.35)', fontSize:'0.5rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}