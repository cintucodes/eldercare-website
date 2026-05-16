import Link from 'next/link'
import Image from 'next/image'

const FeatureCard = ({ icon, title, description, screenshot }) => (
  <div className="feature-card flex flex-col md:flex-row gap-4 h-full">
    <div className="flex-1">
      <div className="text-5xl mb-4" role="img" aria-label={title}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    {screenshot && (
      <div className="relative w-full md:w-[120px] xl:w-[160px] max-w-[200px] aspect-[9/19] rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-shrink-0 mt-4 md:mt-0 mx-auto">
        <Image
          src={screenshot}
          alt={`${title} Preview`}
          fill
          sizes="(max-width: 768px) 200px, 160px"
          className="object-cover"
          priority={false}
        />
      </div>
    )}
  </div>
)

export default function FeaturesPage() {
  const elderFeatures = [
    { icon: '📊', title: 'Health Vitals Tracking', description: 'Log heart rate, blood pressure, glucose, sleep hours, and daily steps with easy-to-use interface', screenshot: '/website%20screenshots/healthcharts.jpeg' },
    { icon: '⌚', title: 'Health Connect Integration', description: 'Automatic sync from wearable devices like Fitbit, Samsung Watch, and Garmin', screenshot: '/website%20screenshots/healthcharts.jpeg' },
    { icon: '💊', title: 'Medication Management', description: 'Set reminders with alarm notifications, track dosage and frequency', screenshot: '/website%20screenshots/medication.jpeg' },
    { icon: '📅', title: 'Appointment Scheduling', description: 'Track doctor visits with reminders and click-to-call functionality' },
    { icon: '🆘', title: 'Emergency SOS', description: 'One-tap emergency alert with GPS location sent to caregivers via SMS', screenshot: '/website%20screenshots/alerts.jpeg' },
    { icon: '👤', title: 'Profile Management', description: 'Store medical history, allergies, and chronic conditions' },
    { icon: '🎯', title: 'Customizable Step Goals', description: 'Set personalized daily activity targets' }
  ]

  const caregiverFeatures = [
    { icon: '📈', title: 'Real-Time Monitoring', description: 'View elder\'s health data instantly via Firebase real-time sync', screenshot: '/website%20screenshots/caregiver-dashboard.jpeg' },
    { icon: '🚨', title: 'Automated Alert System', description: 'Receive push notifications for abnormal vitals (heart rate <60 or >100, sleep <5 hours)', screenshot: '/website%20screenshots/alerts.jpeg' },
    { icon: '📱', title: 'Remote Dashboard', description: 'Monitor multiple vitals at a glance with visual charts', screenshot: '/website%20screenshots/caregiver-dashboard.jpeg' },
    { icon: '🔗', title: 'Easy Linking Process', description: 'Connect to elders via secure 6-digit invite codes', screenshot: '/website%20screenshots/caregiver-dashboard.jpeg' },
    { icon: '📞', title: 'Quick Actions', description: 'Call or view details directly from notifications' },
    { icon: '📊', title: 'Activity Feed', description: 'Track elder\'s daily health activities and trends' }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="bg-gradient-to-br from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Complete Feature Set</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Everything you need for comprehensive elder care monitoring
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-4 text-center">For Elders</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Simple, large-button design for easy senior access</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elderFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4 text-center">For Caregivers</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Comprehensive monitoring dashboard for remote care</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caregiverFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-center">Future Roadmap</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Innovations we're currently developing</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl flex items-start gap-6">
              <div className="text-4xl">🧠</div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI Fall Detection</h3>
                <p className="text-gray-600">Advanced algorithms to detect falls automatically using device accelerometers.</p>
                <span className="inline-block mt-3 text-xs font-bold tracking-wider text-primary uppercase">Development</span>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl flex items-start gap-6">
              <div className="text-4xl">📍</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Geofencing & Safe Zones</h3>
                <p className="text-gray-600">Smart alerts if a loved one wanders outside a predefined safe geographical area.</p>
                <span className="inline-block mt-3 text-xs font-bold tracking-wider text-primary uppercase">Planning</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/download" className="btn-primary">
            Download ElderCare Now
          </Link>
        </div>
      </div>
    </div>
  )
}
