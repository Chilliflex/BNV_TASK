import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { Services } from "@/components/landing/Services"
import { ProcessAccordion } from "@/components/landing/ProcessAccordion"
import { Testimonials } from "@/components/landing/Testimonials"
import { Footer } from "@/components/landing/Footer"
import { PartnerLogos } from '@/components/landing/PartnerLogos'

export default function LandingPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <PartnerLogos />
      <Services />
      <ProcessAccordion />
      <Testimonials />
      <Footer />
    </div>
  )
}
