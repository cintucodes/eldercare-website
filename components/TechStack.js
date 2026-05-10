export default function TechStack() {
  const technologies = [
    { name: 'Android', color: 'bg-green-500' },
    { name: 'Firebase', color: 'bg-orange-500' },
    { name: 'Health Connect', color: 'bg-blue-500' },
    { name: 'Material Design', color: 'bg-purple-500' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Built with Modern Technology</h2>
          <p className="text-xl text-gray-600 mb-8">
            Powered by industry-leading platforms for reliability and security
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech) => (
              <span key={tech.name} className={`${tech.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg`}>
                {tech.name}
              </span>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">For Developers</h3>
            <p className="text-gray-600 mb-4">
              ElderCare is built with Java/Kotlin using MVVM architecture, Firebase for real-time sync, 
              and Android Health Connect for wearable integration. The codebase follows clean architecture 
              principles with comprehensive documentation.
            </p>
            <a href="https://github.com/cintucodes/Eldercare" target="_blank" rel="noopener noreferrer" 
               className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              View Source Code on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
