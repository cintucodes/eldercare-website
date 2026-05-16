const steps = [
  {
    number: '1',
    title: 'Download & Register',
    description: 'Create your account with email and password',
    icon: '📲'
  },
  {
    number: '2',
    title: 'Link Accounts',
    description: 'Connect elder and caregiver using a secure 6-digit invite code',
    icon: '🔗'
  },
  {
    number: '3',
    title: 'Stay Connected',
    description: 'Monitor health, receive alerts, and respond instantly 24/7',
    icon: '💚'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="text-xl text-gray-600">Get started in just 3 simple steps</p>
        </div>
        
        <div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="text-5xl mb-4" aria-hidden="true">{step.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-primary opacity-30" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
