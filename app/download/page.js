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
        <div className="bg-white rounded-xl shadow-xl p-10 mb-8 text-center border border-gray-100">
          <div className="flex justify-center gap-4 mb-10 overflow-x-auto pb-4">
            <div className="w-40 md:w-48 aspect-[9/19] rounded-xl border border-gray-200 shadow-md overflow-hidden flex-shrink-0">
              <img src="/website%20screenshots/caregiver%20dashboard.jpeg" alt="App Dashboard Preview" className="w-full h-full object-cover" />
            </div>
            <div className="w-40 md:w-48 aspect-[9/19] rounded-xl border border-gray-200 shadow-md overflow-hidden flex-shrink-0 hidden sm:block">
              <img src="/website%20screenshots/Healthcharts.jpeg" alt="Vitals Tracking Preview" className="w-full h-full object-cover" />
            </div>
            <div className="w-40 md:w-48 aspect-[9/19] rounded-xl border border-gray-200 shadow-md overflow-hidden flex-shrink-0 hidden md:block">
              <img src="/website%20screenshots/Elder%20dashboard%20.jpeg" alt="Elder Dashboard Preview" className="w-full h-full object-cover" />
            </div>
          </div>
          <a
            href="https://github.com/cintucodes/Eldercare/releases/download/v1.0/app-release.apk"
            download
            className="inline-block bg-primary text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-blue-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4"
          >
            Download APK (v1.0)
          </a>
          <div className="text-sm text-gray-500 mb-6">
            Version 1.0.0 (Beta) • Android • Free
          </div>
          <a
            href="https://github.com/cintucodes/Eldercare/releases/tag/v1.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            View release on GitHub
          </a>
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
          <h2 className="text-3xl font-bold mb-6">Installation Instructions</h2>
          <ol className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">1</span>
              <div className="pt-1">Tap the download button to get the APK file</div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">2</span>
              <div className="pt-1">On your Android phone, open the downloaded file</div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">3</span>
              <div className="pt-1">If prompted, enable "Install from unknown sources" in Settings → Security</div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">4</span>
              <div className="pt-1">Follow the on-screen instructions to install</div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">5</span>
              <div className="pt-1">Open ElderCare and register your account</div>
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
