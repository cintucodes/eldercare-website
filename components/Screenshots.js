'use client'
import { useState } from 'react'
import Image from 'next/image'

// Import screenshots from the local folder
import elderHome from './screenshots/WhatsApp Image 2026-05-09 at 17.24.26.jpeg'
import healthVitals from './screenshots/WhatsApp Image 2026-05-09 at 17.23.56.jpeg'
import medications from './screenshots/Screenshot_2026.png'
import linkCodeElder from './screenshots/WhatsApp Image 2026-05-11 at 03.32.27.jpeg'
import caregiverHome from './screenshots/WhatsApp Image 2026-05-11 at 03.32.27.jpeg'
import sosScreen from './screenshots/WhatsApp Image 2026-05-09 at 17.24.20.jpeg'
import history from './screenshots/Screenshot_2026.png'
import alerts from './screenshots/WhatsApp Image 2026-05-09 at 17.23.56.jpeg'
import linkCode from './screenshots/WhatsApp Image 2026-05-11 at 03.32.27.jpeg'

export default function Screenshots() {
  const [activeTab, setActiveTab] = useState('elder')

  const elderScreenshots = [
    { title: 'Home Dashboard', description: 'A centralized view of daily vitals and a prominent SOS button for emergencies.', src: elderHome },
    { title: 'Vitals Logging', description: 'Simplified input fields designed for seniors to record heart rate and blood pressure.', src: healthVitals },
    { title: 'Medication Alerts', description: 'Persistent full-screen alerts ensuring that critical medication doses are never missed.', src: medications },
    { title: 'Emergency SOS', description: 'Safety-first SOS trigger with a visual countdown to prevent unintended activations.', src: sosScreen },
    { title: 'Caregiver Link', description: 'Simple pairing process using a secure 6-digit invitation code for family members.', src: linkCodeElder }
  ]

  const caregiverScreenshots = [
    { title: 'Remote Monitoring', description: 'Real-time health status dashboard for monitoring loved ones from any location.', src: caregiverHome },
    { title: 'Health Trends', description: 'Detailed graphical analysis of long-term heart rate, sleep, and activity patterns.', src: history },
    { title: 'Smart Alerts', description: 'Prioritized notification system for abnormal health readings and potential concerns.', src: alerts },
    { title: 'Easy Pairing', description: 'Streamlined account linking system to start monitoring via a secure invite code.', src: linkCode }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">See It In Action</h2>
          <p className="text-xl text-gray-600">Intuitive interfaces for both elders and caregivers</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setActiveTab('elder')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === 'elder'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Elder View
            </button>
            <button
              onClick={() => setActiveTab('caregiver')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === 'caregiver'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Caregiver View
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeTab === 'elder' ? elderScreenshots : caregiverScreenshots).map((screenshot, idx) => (
            <div key={idx} className="group">
              <div className="relative mx-auto mb-6 w-full max-w-[260px] aspect-[9/19] rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden transform group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
                {screenshot.src ? (
                  <Image 
                    src={screenshot.src} 
                    alt={screenshot.title} 
                    fill 
                    className="object-cover" 
                    sizes="260px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl opacity-30 bg-gray-50">
                    📱
                  </div>
                )}
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{screenshot.title}</h3>
                <p className="text-sm text-gray-600 px-2">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Screenshots from the actual ElderCare Android app</p>
        </div>
      </div>
    </section>
  )
}
