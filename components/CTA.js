import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Download ElderCare today and stay connected to your loved ones
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/download" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-xl">
            Download for Android
          </Link>
          <a href="https://github.com/cintucodes/Eldercare" target="_blank" rel="noopener noreferrer" 
             className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition">
            View on GitHub
          </a>
        </div>
        
        <p className="text-lg opacity-90">
          <span aria-hidden="true">✨</span> Free and Open Source • MIT License • No Subscriptions
        </p>
      </div>
    </section>
  )
}
