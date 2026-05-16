import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'

import AppScreenshots from '@/components/AppScreenshots'
import Features from '@/components/Features'
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
      <AppScreenshots />
      <AppointmentReminders />
      <TechStack />
      <CTA />
    </>
  )
}
