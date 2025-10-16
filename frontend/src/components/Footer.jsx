import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/cars', label: 'Cars' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: '#', label: 'Facebook', icon: '📘' },
    { href: '#', label: 'Twitter', icon: '🐦' },
    { href: '#', label: 'Instagram', icon: '📷' },
    { href: '#', label: 'LinkedIn', icon: '💼' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto container-padding section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link
                to="/"
                className="text-2xl font-display font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent mb-4 inline-block"
              >
                CarDealership
              </Link>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Your trusted source for quality pre-owned vehicles. We provide exceptional service and competitive pricing with a commitment to customer satisfaction.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {/* <div>
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Car Financing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Vehicle Inspection
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Trade-In Evaluation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Warranty Options
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-primary-400 text-xl mt-0.5">📍</span>
                  <div>
                    <p className="text-neutral-400">123 Car Street</p>
                    <p className="text-neutral-400">City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-400 text-xl">📞</span>
                  <a
                    href="tel:+1234567890"
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-400 text-xl">✉️</span>
                  <a
                    href="mailto:info@cardealership.com"
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    info@cardealership.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-400 text-xl">🕒</span>
                  <div className="text-neutral-400">
                    <p>Mon-Fri: 9AM-7PM</p>
                    <p>Sat: 9AM-5PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="border-t border-neutral-800">
          <div className="container mx-auto container-padding py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h5 className="text-white font-semibold text-lg mb-2">Stay Updated</h5>
                <p className="text-neutral-400">Get the latest deals and new arrivals in your inbox</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-field bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:ring-primary-500 focus:border-primary-500"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800">
          <div className="container mx-auto container-padding py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-neutral-500 text-sm">
                &copy; {currentYear} CarDealership. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <Link to="#" className="text-neutral-500 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-neutral-500 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="#" className="text-neutral-500 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}