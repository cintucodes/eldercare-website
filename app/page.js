import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import Solution from '@/components/Solution'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Screenshots from '@/components/Screenshots'
import TechStack from '@/components/TechStack'
import CTA from '@/components/CTA'
import AppointmentReminders from '@/components/AppointmentReminders'

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <Solution />
      <Features />
      <HowItWorks />
      <AppointmentReminders />
      <Screenshots />
      <TechStack />
      <CTA />
    </>
  )
}
