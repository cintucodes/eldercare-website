import ContactForm from '@/components/ContactForm'
import Link from 'next/link'

export default function SupportPage() {
  const faqs = [
    {
      question: 'How do I link an elder and caregiver account?',
      answer: 'Login as Elder → Home tab → "Link Caregiver" button → Copy the 6-digit code. Then login as Caregiver → Enter the code to connect.'
    },
    {
      question: 'Do I need a wearable device to use ElderCare?',
      answer: 'No, wearables are optional. You can manually log health vitals or use the built-in mock data generator for testing.'
    },
    {
      question: 'How do automated alerts work?',
      answer: 'The app monitors vitals and sends RED alerts for heart rate <60 or >100 bpm, and AMBER alerts for sleep <5 hours. Caregivers receive push notifications instantly.'
    },
    {
      question: 'Is my health data secure?',
      answer: 'Yes. All data is encrypted in transit (HTTPS) and stored securely in Firebase. Only linked caregivers can access your health information.'
    },
    {
      question: 'What happens when I press the SOS button?',
      answer: 'A 3-second countdown starts, then an emergency alert with your GPS location is sent to all linked caregivers via SMS and push notification.'
    },
    {
      question: 'Can I use ElderCare offline?',
      answer: 'Limited functionality is available offline (viewing cached data), but real-time sync and alerts require an internet connection.'
    },
    {
      question: 'How do medication reminders work?',
      answer: 'Set reminder times for each medication. The app will show a full-screen alarm notification at the scheduled time.'
    },
    {
      question: 'Can one caregiver monitor multiple elders?',
      answer: 'Yes, caregivers can link to multiple elder accounts and monitor all of them from a single dashboard.'
    },
    {
      question: 'Is ElderCare really free?',
      answer: 'Yes, completely free with no subscriptions or hidden fees. It\'s open source under the MIT License.'
    },
    {
      question: 'What Android version do I need?',
      answer: 'Android 7.0 (API 24) or higher is required.'
    }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="bg-gradient-to-br from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Support</h1>
          <p className="text-xl opacity-90">We're here to help you get the most out of ElderCare</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-200">
                <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-primary transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Get Help</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4" aria-hidden="true">📚</div>
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600 mb-4">Comprehensive guides and tutorials</p>
              <Link href="/docs" className="text-primary hover:underline font-semibold">
                View Docs →
              </Link>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4" aria-hidden="true">💬</div>
              <h3 className="text-xl font-semibold mb-3">GitHub Discussions</h3>
              <p className="text-gray-600 mb-4">Ask questions and share ideas</p>
              <a href="https://github.com/cintucodes/Eldercare/discussions" target="_blank" rel="noopener noreferrer" 
                 className="text-primary hover:underline font-semibold">
                Join Discussion →
              </a>
            </div>

            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="text-5xl mb-4" aria-hidden="true">🐛</div>
              <h3 className="text-xl font-semibold mb-3">Report Issues</h3>
              <p className="text-gray-600 mb-4">Found a bug? Let us know</p>
              <a href="https://github.com/cintucodes/Eldercare/issues" target="_blank" rel="noopener noreferrer" 
                 className="text-primary hover:underline font-semibold">
                Report Bug →
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-4">
                For direct support, feature requests, or general inquiries, use the form below or reach out directly.
              </p>
            </div>
            <div className="space-y-6">
              <ContactForm />

              <div className="text-center">
                <p className="text-gray-600 mb-2">Or email directly:</p>
                <a href="mailto:cynthiakariuki3730@gmail.com" className="text-primary hover:underline text-lg">
                  cynthiakariuki3730@gmail.com
                </a>
                <div className="mt-3">
                  <a href="https://github.com/cintucodes" target="_blank" rel="noopener noreferrer" 
                     className="text-primary hover:underline text-lg">
                    GitHub: @cintucodes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Common Issues</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">App won't install</h3>
              <p className="text-gray-600">Enable "Install from unknown sources" in Android Settings → Security. Make sure you have Android 7.0 or higher.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Notifications not working</h3>
              <p className="text-gray-600">Check Android Settings → Apps → ElderCare → Notifications. Ensure all notification channels are enabled.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Can't link accounts</h3>
              <p className="text-gray-600">Ensure both devices have internet connection. The 6-digit code expires after 10 minutes - generate a new one if needed.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Vitals not syncing</h3>
              <p className="text-gray-600">Check Firebase configuration (google-services.json). Verify internet connection and that accounts are properly linked.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-br from-primary to-blue-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-lg mb-6 opacity-90">
              Check out our comprehensive documentation or reach out directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Documentation
              </Link>
              <a href="mailto:cynthiakariuki3730@gmail.com" 
                 className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
                Email Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
