export default function DocsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-gradient-to-br from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Documentation</h1>
          <p className="text-xl opacity-90">Everything you need to get started with ElderCare</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Quick Start Guide</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">5-Minute Setup</h3>
              <ol className="space-y-3">
                <li><strong>Download:</strong> Get the app from GitHub releases and install on your Android device.</li>
                <li><strong>Monitor:</strong> Log in as a Caregiver to receive real-time health updates and alerts.</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">User Guides</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Caregiver Guide</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Monitoring:</strong> Overview tab shows real-time vitals from linked elders</li>
                  <li><strong>Responding to Alerts:</strong> Tap notification → View details → Call elder or acknowledge</li>
                  <li><strong>Viewing History:</strong> Vitals tab → Select elder → View charts and trends</li>
                  <li><strong>Managing Alerts:</strong> Alerts tab → Filter by severity → Mark as resolved</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Features Documentation</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">📊 Health Vitals</h3>
                <p className="text-gray-600">Track heart rate, blood pressure, glucose, sleep hours, and steps. Manual entry or automatic sync via Health Connect.</p>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">💊 Medications</h3>
                <p className="text-gray-600">Set multiple reminders per medication. Full-screen alarm notifications ensure doses aren't missed.</p>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">🚨 Alert System</h3>
                <p className="text-gray-600">Automated alerts for abnormal vitals: RED (heart rate &lt;60 or &gt;100), AMBER (sleep &lt;5 hours).</p>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">🆘 Emergency SOS</h3>
                <p className="text-gray-600">One-tap emergency alert with GPS location sent to all linked caregivers via SMS and push notification.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">No vitals showing?</h4>
                <p className="text-gray-600">Check Firebase console → Firestore → users/[uid]/vitals. Ensure internet connection is active.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Alerts not received?</h4>
                <p className="text-gray-600">Verify FCM setup in google-services.json. Ensure caregiver is properly linked to elder account.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">SOS not working?</h4>
                <p className="text-gray-600">Grant location and SMS permissions in Android Settings → Apps → ElderCare → Permissions.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Firebase Setup</h2>
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="mb-4">For developers setting up the project:</p>
              <ol className="space-y-2">
                <li>1. Create Firebase project at console.firebase.google.com</li>
                <li>2. Add Android app with package name: com.example.eldercare</li>
                <li>3. Download google-services.json to app/ directory</li>
                <li>4. Enable Authentication (Email/Password)</li>
                <li>5. Create Firestore database</li>
                <li>6. Deploy security rules from firestore.rules</li>
              </ol>
              <a href="https://github.com/cintucodes/Eldercare#getting-started" target="_blank" rel="noopener noreferrer" 
                 className="inline-block mt-4 text-primary hover:underline">
                View detailed setup guide on GitHub →
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
