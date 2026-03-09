import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Green Leaf Business Connect Ltd | BPO Solutions Kenya',
  description:
    'Africa\'s premier BPO partner — delivering world-class Business Process Outsourcing solutions from Kenya to the globe. Customer experience, data processing, finance, HR, and IT support.',
  keywords: 'BPO Kenya, Business Process Outsourcing Africa, Customer Support, Data Processing, Back Office, Green Leaf',
  openGraph: {
    title: 'Green Leaf Business Connect Ltd | BPO Solutions Kenya',
    description: 'World-class BPO solutions from the heart of Africa.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-dark text-white font-dm overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
