import Cursor from '@/components/Cursor'
import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Hero from '@/components/Hero'
import StatsStrip from '@/components/StatsStrip'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Industries from '@/components/Industries'
import Process from '@/components/Process'
import GlobalPresence from '@/components/GlobalPresence'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'

export default function Home() {
  return (
    <>
      <Cursor />
      <Background />
      <Navbar />

      <main>
        <div className="pt-[72px]">
          <Ticker />
        </div>
        <Hero />
        <StatsStrip />
        <Services />
        <WhyUs />
        <Industries />
        <Process />
        <GlobalPresence />
        <Testimonials />
        <CTABanner />
      </main>

      <Footer />
      <ScrollTop />
    </>
  )
}
