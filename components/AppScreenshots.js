export default function AppScreenshots() {
  const screenshots = [
    { src: '/website%20screenshots/caregiver-dashboard.jpeg', caption: 'Caregiver Dashboard' },
    { src: '/website%20screenshots/medication.jpeg', caption: 'Medication Reminders' },
    { src: '/website%20screenshots/alerts.jpeg', caption: 'Smart Alerts' }
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">App Dashboards & Interface</h2>
          <p className="text-xl text-gray-600">Intuitive and easy to use for both elders and caregivers</p>
        </div>
        
        <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-3 gap-8 snap-x snap-mandatory">
          {screenshots.map((screen, index) => (
            <div key={index} className="flex-none w-72 md:w-auto snap-center">
              <div className="mx-auto w-full max-w-[280px] aspect-[9/19] rounded-2xl border border-gray-200 bg-gray-100 shadow-2xl overflow-hidden mb-4 relative">
                <img 
                  src={screen.src} 
                  alt={screen.caption} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="text-center text-gray-700 font-medium">{screen.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}