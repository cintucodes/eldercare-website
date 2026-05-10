import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ElderCare - Remote Health Monitoring for Seniors</title>
        <meta name="description" content="Monitor your elderly family members' health in real-time with automated alerts, medication reminders, and emergency SOS" />
        <meta name="keywords" content="elder care app, senior health monitoring, caregiver app, remote health tracking, elderly care" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
