'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Screenshots() {
  const [activeTab, setActiveTab] = useState('elder')

  const elderScreenshots = [
    { title: 'Home Dashboard', description: 'A centralized view of daily vitals and a prominent SOS button for emergencies.', src: '/screenshots/elder_home.png' },
    { title: 'Vitals Logging', description: 'Simplified input fields designed for seniors to record heart rate and blood pressure.', src: '/screenshots/health_vitals.png' },
    { title: 'Medication Alerts', description: 'Persistent full-screen alerts ensuring that critical medication doses are never missed.', src: '/screenshots/medications.png' },
    { title: 'Emergency SOS', description: 'Safety-first SOS trigger with a visual countdown to prevent unintended activations.', src: '/screenshots/sos_screen.png' },
    { title: 'Caregiver Link', description: 'Simple pairing process using a secure 6-digit invitation code for family members.', src: '/screenshots/link_code_elder.png' }
  ]

  const caregiverScreenshots = [
    { title: 'Remote Monitoring', description: 'Real-time health status dashboard for monitoring loved ones from any location.', src: '/screenshots/caregiver_home.png' },
    { title: 'Health Trends', description: 'Detailed graphical analysis of long-term heart rate, sleep, and activity patterns.', src: '/screenshots/history.png' },
    { title: 'Smart Alerts', description: 'Prioritized notification system for abnormal health readings and potential concerns.', src: '/screenshots/alerts.png' },
    { title: 'Easy Pairing', description: 'Streamlined account linking system to start monitoring via a secure invite code.', src: '/screenshots/link_code.png' }
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
              <div className="relative mx-auto mb-6 w-full max-w-[260px] aspect-[9/19] rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-300">
                {/* Camera Notch simulation */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
                
                {screenshot.src ? (
                  <Image 
                    src={screenshot.src} 
                    alt={screenshot.title} 
                    fill 
                    className="object-cover" 
                    sizes="260px"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-4xl">
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
