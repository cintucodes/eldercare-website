export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-gradient-to-br from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About ElderCare</h1>
          <p className="text-xl opacity-90">Connecting families through technology</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p className="text-lg">
              ElderCare was created to solve a universal challenge: how to care for elderly family members 
              when you can't always be physically present. In today's world, adult children often live far 
              from their aging parents, creating anxiety and stress for both parties.
            </p>
            <p className="text-lg">
              This app bridges that distance by providing real-time health monitoring, automated alerts for 
              concerning vitals, and instant emergency response capabilities. It's designed to give caregivers 
              peace of mind while respecting the independence and dignity of seniors.
            </p>
            <p className="text-lg">
              Built with modern Android technology and powered by Firebase, ElderCare demonstrates how 
              technology can strengthen family bonds and improve quality of life for seniors and their caregivers.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Mission</h3>
              <p className="text-gray-700">
                To empower families with accessible, reliable technology that enables remote health monitoring 
                and emergency response for elderly loved ones, fostering independence while ensuring safety.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Vision</h3>
              <p className="text-gray-700">
                A world where distance is no barrier to caring for elderly family members, where technology 
                seamlessly connects generations and provides peace of mind for all.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Developer</h2>
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="flex items-start space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl flex-shrink-0">
                CW
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Cynthia Waithira</h3>
                <p className="text-gray-600 mb-4">
                  Software Developer passionate about creating technology that makes a real difference in people's lives. 
                  ElderCare represents a commitment to using technical skills to solve meaningful problems and support families.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/cintucodes" target="_blank" rel="noopener noreferrer" 
                     className="text-primary hover:underline">
                    GitHub: @cintucodes
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="mailto:cynthiakariuki3730@gmail.com" className="text-primary hover:underline">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Technology & Architecture</h2>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">▸</span>
                <div>
                  <strong>Languages:</strong> Java, Kotlin
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">▸</span>
                <div>
                  <strong>Backend:</strong> Firebase (Firestore, Authentication, Cloud Messaging)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">▸</span>
                <div>
                  <strong>Architecture:</strong> MVVM with Repository pattern
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">▸</span>
                <div>
                  <strong>Health Integration:</strong> Android Health Connect SDK
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">▸</span>
                <div>
                  <strong>Background Processing:</strong> WorkManager, Foreground Services
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Open Source</h2>
          <div className="bg-green-50 border-l-4 border-accent p-8 rounded">
            <h3 className="text-2xl font-semibold mb-4">Why Open Source?</h3>
            <p className="text-gray-700 mb-4">
              ElderCare is released under the MIT License, making it free and open source. This decision reflects 
              a belief that healthcare technology should be accessible to everyone, regardless of financial means.
            </p>
            <p className="text-gray-700 mb-4">
              By open-sourcing the code, we enable:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Transparency in how health data is handled</li>
              <li>✓ Community contributions and improvements</li>
              <li>✓ Learning opportunities for developers</li>
              <li>✓ Customization for specific needs</li>
              <li>✓ No subscription fees or hidden costs</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://github.com/cintucodes/Eldercare" target="_blank" rel="noopener noreferrer" 
               className="bg-gray-900 text-white p-6 rounded-xl hover:bg-gray-800 transition">
              <h3 className="text-xl font-semibold mb-2">Contribute on GitHub</h3>
              <p className="opacity-90">Help improve ElderCare with code contributions, bug reports, or feature suggestions</p>
            </a>
            <a href="/support" className="bg-primary text-white p-6 rounded-xl hover:bg-blue-600 transition">
              <h3 className="text-xl font-semibold mb-2">Get Support</h3>
              <p className="opacity-90">Need help? Visit our support page for documentation and contact information</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
