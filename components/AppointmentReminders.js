const reminderFeatures = [
  "Automated reminders via push notification and SMS",
  "Custom reminder timing: 1 day, 1 hour, and 15 minutes before",
  "Confirmations and snooze options so caregivers can reschedule easily",
  "Calendar sync (optional) with Google Calendar to keep one unified schedule"
];

export default function AppointmentReminders() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Appointment Reminders & Notifications</h2>
            <p className="text-gray-700 mb-6">
              Keep care on schedule — ElderCare sends automated appointment reminders and timely notifications
              so elders and caregivers never miss important visits.
            </p>

            <ul className="space-y-3 text-gray-700">
              {reminderFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-3 text-xl" aria-hidden="true">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-primary to-blue-600 text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Next appointment</h3>
              <p className="opacity-90">Dr. A. Mwangi — Cardiology</p>
              <p className="mt-4 font-semibold">Tomorrow • 10:30 AM</p>
              <div className="mt-6 flex gap-3">
                <button type="button" className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition">Confirm</button>
                <button type="button" className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-primary transition">Snooze</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
