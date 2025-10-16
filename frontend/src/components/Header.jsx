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
    <header className="bg-white/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-neutral-200/50">
      <div className="container mx-auto container-padding">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl lg:text-3xl font-display font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent hover:from-primary-700 hover:to-primary-900 transition-all duration-300"
          >
            CarDealership
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-primary-600'
                    : 'text-neutral-700 hover:text-primary-600'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+1234567890"
              className="btn-accent text-sm px-4 py-2"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/1234567890"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-soft hover:shadow-medium text-sm"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 transition-colors duration-200"
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
          <div className="lg:hidden border-t border-neutral-200/50 bg-white/95 backdrop-blur-md animate-slide-up">
            <nav className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 pb-4 space-y-2">
              <a
                href="tel:+1234567890"
                className="block btn-accent text-center text-sm"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/1234567890"
                className="block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-200 text-sm"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}