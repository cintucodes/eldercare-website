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
                <li><strong>Download and Install:</strong> Get the app from GitHub releases</li>
                <li><strong>Create Elder Account:</strong> Register with email and password, select "Elder" role</li>
                <li><strong>Create Caregiver Account:</strong> Register on a separate device</li>
                <li>
                  <strong>Linking Code:</strong> Elder generates 6-digit code, Caregiver enters it to connect
                  <div className="mt-4">
                    <img src="/website%20screenshots/caregiver-dashboard.jpeg" alt="Linking Code" className="rounded-lg border shadow-sm max-w-md w-full h-auto" />
                  </div>
                </li>
                <li><strong>Start Monitoring:</strong> Elder logs vitals, Caregiver receives real-time updates</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">User Guides</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 mb-8">
                <h3 className="text-2xl font-semibold mb-3">Elder Dashboard</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li><strong>Logging Vitals:</strong> Go to Health tab → Select vital type → Enter value → Save</li>
                  <li><strong>Emergency SOS:</strong> Press red SOS button on Elder Dashboard → Confirm</li>
                </ul>
                <img src="/website%20screenshots/alerts.jpeg" alt="Elder Dashboard" className="rounded-xl border shadow-md max-w-xl w-full h-auto" />
              </div>

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
                <img src="/website%20screenshots/healthcharts.jpeg" alt="Health Vitals Tracking" className="mt-4 rounded border shadow-sm max-w-md w-full h-auto" />
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">💊 Medications</h3>
                <p className="text-gray-600">Set multiple reminders per medication. Full-screen alarm notifications ensure doses aren't missed.</p>
                <img src="/website%20screenshots/medication.jpeg" alt="Medication Reminders" className="mt-4 rounded border shadow-sm max-w-md w-full h-auto" />
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">🚨 Alert System</h3>
                <p className="text-gray-600">Automated alerts for abnormal vitals: RED (heart rate &lt;60 or &gt;100), AMBER (sleep &lt;5 hours).</p>
                <img src="/website%20screenshots/alerts.jpeg" alt="Smart Alerts" className="mt-4 rounded border shadow-sm max-w-md w-full h-auto" />
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">🆘 Emergency SOS</h3>
                <p className="text-gray-600">One-tap emergency alert with GPS location sent to all linked caregivers via SMS and push notification.</p>
                <div className="mt-4">
                  <img 
                    src="/website%20screenshots/alerts.jpeg" 
                    alt="Emergency SOS Alert" 
                    className="rounded border shadow-sm max-w-md w-full h-auto mb-4" />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">No vitals showing?</h4>
                <p className="text-gray-600">Check Firebase console → Firestore → <code>users/[uid]/vitals</code>. Ensure internet connection is active.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Alerts not received?</h4>
                <p className="text-gray-600">Verify FCM setup in <code>google-services.json</code>. Ensure caregiver is properly linked to elder account.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">SOS not working?</h4>
                <p className="text-gray-600">Grant location and SMS permissions in <strong>Android Settings → Apps → ElderCare → Permissions</strong>.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Firebase Setup</h2>
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="mb-4">For developers setting up the project:</p>
              <ol className="space-y-2">
                <li>Create Firebase project at <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">console.firebase.google.com</a></li>
                <li>Add Android app with package name: <code>com.example.eldercare</code></li>
                <li>Download <code>google-services.json</code> to the <code>app/</code> directory</li>
                <li>Enable Authentication (Email/Password)</li>
                <li>Create Cloud Firestore database</li>
                <li>Deploy security rules from <code>firestore.rules</code></li>
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
