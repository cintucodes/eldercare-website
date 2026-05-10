import Link from 'next/link'

export default function Features() {
  const features = [
    {
      emoji: '📊',
      title: 'Health Vitals Tracking',
      description: 'Monitor heart rate, blood pressure, glucose, sleep, and daily steps'
    },
    {
      emoji: '🔗',
      title: 'Wearable Integration',
      description: 'Automatic sync from Fitbit, Samsung Watch, Garmin via Health Connect'
    },
    {
      emoji: '💊',
      title: 'Medication Reminders',
      description: 'Never miss a dose with alarm notifications and tracking'
    },
    {
      emoji: '🚨',
      title: 'Smart Alerts',
      description: 'Instant notifications for abnormal vitals and health concerns'
    },
    {
      emoji: '🆘',
      title: 'Emergency SOS',
      description: 'One-tap alert with GPS location sent to caregivers via SMS'
    },
    {
      emoji: '📱',
      title: 'Two-Way Monitoring',
      description: 'Separate interfaces optimized for elders and caregivers'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Powerful Features for Complete Care</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to monitor and care for your elderly loved ones
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/features" className="btn-primary">
            Explore All Features
          </Link>
        </div>
      </div>
    </section>
  )
}
