export default function ProblemStatement() {
  const problems = [
    {
      emoji: '😟',
      title: 'Worried about your parent\'s health when you\'re not there?',
      description: 'Distance shouldn\'t mean disconnection from your loved ones\' wellbeing'
    },
    {
      emoji: '💊',
      title: 'Concerned they might miss medications?',
      description: 'Medication adherence is critical for managing chronic conditions'
    },
    {
      emoji: '🚨',
      title: 'Need instant alerts for emergencies?',
      description: 'Every second counts when health issues arise'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Caring from a Distance Shouldn't Be Stressful</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the challenges of caring for elderly parents while managing your own life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-6xl mb-4">{problem.emoji}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
