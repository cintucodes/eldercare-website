import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Elder</span>
              <span className="text-secondary">Care</span>
            </h3>
            <p className="text-gray-400">
              Remote health monitoring for seniors and their caregivers
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/download" className="text-gray-400 hover:text-white transition">Download</Link></li>
              <li><Link href="/docs" className="text-gray-400 hover:text-white transition">Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition">Support</Link></li>
              <li><a href="https://github.com/cintucodes/Eldercare" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:cynthiakariuki3730@gmail.com" className="text-gray-400 hover:text-white transition">Email: cynthiakariuki3730@gmail.com</a>
              </li>
              <li><a href="https://github.com/cintucodes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">GitHub: @cintucodes</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ElderCare by Cynthia Waithira. Licensed under MIT License.</p>
          <p className="mt-2">Built with ❤️ for families caring for their elderly loved ones</p>
        </div>
      </div>
    </footer>
  )
}
