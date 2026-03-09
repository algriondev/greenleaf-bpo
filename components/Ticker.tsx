'use client'
const items = [
  'Customer Support BPO',
  'Data Processing Solutions',
  'Back Office Outsourcing',
  'Finance & Accounting BPO',
  'IT Support Services',
  'HR Outsourcing Kenya',
  'Digital Transformation',
  'ISO Certified BPO',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden bg-g1 border-t border-b border-[rgba(92,230,92,0.18)] py-3">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-12 text-g4 text-[0.75rem] uppercase tracking-widest whitespace-nowrap"
          >
            {item}
            <span className="text-g3 opacity-50">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
