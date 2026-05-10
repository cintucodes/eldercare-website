export default function DownloadPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-gradient-to-br from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Download ElderCare</h1>
          <p className="text-xl opacity-90">Get started with remote health monitoring today</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Download Options</h2>
          
          <div className="space-y-6">
            <div className="border-2 border-primary rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <span className="text-3xl mr-3">📱</span>
                Google Play Store (Coming Soon)
              </h3>
              <p className="text-gray-600 mb-4">
                The app will be available on Google Play Store soon. Stay tuned!
              </p>
              <div className="flex items-center gap-4">
                <button disabled className="bg-gray-300 text-gray-600 px-6 py-3 rounded-lg cursor-not-allowed">
                  Coming Soon
                </button>
                <a href="mailto:cynthiakariuki3730@gmail.com?subject=Request%20ElderCare%20Play%20Store%20Updates" className="text-sm text-gray-600 hover:underline">
                  Notify me when live
                </a>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <span className="text-3xl mr-3">📦</span>
                Direct APK Download
              </h3>
              <p className="text-gray-600 mb-4">
                Download the APK file directly from GitHub releases
              </p>
              <a href="https://github.com/cintucodes/Eldercare/releases" target="_blank" rel="noopener noreferrer" 
                 className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                Download from GitHub
              </a>
              <p className="text-sm text-gray-500 mt-3">If you prefer an installer hosted elsewhere (S3, CDN), we recommend uploading signed APKs to a stable URL and serving via HTTPS. Use the GitHub Releases link above in the meantime.</p>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <span className="text-3xl mr-3">💻</span>
                Source Code
              </h3>
              <p className="text-gray-600 mb-4">
                Clone the repository and build from source
              </p>
              <a href="https://github.com/cintucodes/Eldercare" target="_blank" rel="noopener noreferrer" 
                 className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">System Requirements</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-accent mr-3 text-xl">✓</span>
              <span>Android 7.0 (API 24) or higher</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 text-xl">✓</span>
              <span>Internet connection required for real-time sync</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 text-xl">✓</span>
              <span>Optional: Wearable device (Fitbit, Samsung Watch, Garmin) for automatic sync</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 text-xl">✓</span>
              <span>Permissions: Location (for SOS), SMS (for emergency alerts), Notifications</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">Installation Guide</h2>
          <ol className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">1</span>
              <div>
                <strong>Download the APK</strong>
                <p className="text-gray-600">Get the latest release from GitHub</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">2</span>
              <div>
                <strong>Enable Unknown Sources</strong>
                <p className="text-gray-600">Settings → Security → Allow installation from unknown sources</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">3</span>
              <div>
                <strong>Install the App</strong>
                <p className="text-gray-600">Open the APK file and follow installation prompts</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">4</span>
              <div>
                <strong>Create Accounts</strong>
                <p className="text-gray-600">Register as Elder or Caregiver and link accounts</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need help? Check our documentation</p>
          <a href="/docs" className="btn-secondary">
            View Documentation
          </a>
        </div>
      </div>
    </div>
  )
}
