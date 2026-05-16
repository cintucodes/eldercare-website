export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Peace of Mind for Your <span className="text-secondary">Loved Ones</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Monitor your elderly family members' health in real-time with automated alerts, medication reminders, and emergency SOS
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/cintucodes/Eldercare/releases/download/v1.0/app-release.apk" download className="btn-primary text-center">
                Download for Android
              </a>
              <a href="https://github.com/cintucodes/Eldercare" target="_blank" rel="noopener noreferrer" 
                 className="btn-secondary text-center">
                View on GitHub
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Free and Open Source • MIT License</p>
          </div>
          
          <div className="relative">
            {/* Screenshot Container */}
            <div className="relative mx-auto w-full max-w-[280px] aspect-[9/19] rounded-2xl border border-gray-200 bg-gray-100 shadow-2xl overflow-hidden z-10">
              <img 
                src="/website%20screenshots/caregiver-dashboard.jpeg" 
                alt="ElderCare App Dashboard" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="hidden lg:block absolute top-1/2 -left-20 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">✓</div>
                <div>
                  <p className="text-sm font-bold">Vitals Normal</p>
                  <p className="text-xs text-gray-500">Updated 1m ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
