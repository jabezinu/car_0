import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/cars', label: 'Cars' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl mx-auto px-4">
      <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-700/20 rounded-2xl shadow-2xl">
        <div className="container mx-auto container-padding">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl lg:text-3xl font-display font-bold text-white hover:text-primary-400 transition-all duration-300"
            >
              ELITE Cars
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? 'text-primary-400'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-400 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:+1234567890"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-soft hover:shadow-medium text-sm"
              >
                📞 Call Now
              </a>
              {/* <a
                href="https://wa.me/1234567890"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-soft hover:shadow-medium text-sm"
              >
                💬 WhatsApp
              </a> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-neutral-700/50 bg-neutral-900/95 backdrop-blur-xl animate-slide-up rounded-b-2xl">
              <nav className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive(link.to)
                        ? 'text-primary-400 bg-primary-900/50'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="px-4 pb-4 space-y-2">
                <a
                  href="tel:+1234567890"
                  className="block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-200 text-sm"
                >
                  📞 Call Now
                </a>
                {/* <a
                  href="https://wa.me/1234567890"
                  className="block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-200 text-sm"
                >
                  💬 WhatsApp
                </a> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}