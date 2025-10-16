import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSubmitStatus('success');
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
    setIsSubmitting(false);

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      value: '(234) 567-8900',
      action: 'tel:+1234567890',
      description: 'Call us directly'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+1 (234) 567-8900',
      action: 'https://wa.me/1234567890',
      description: 'Quick messaging'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'info@cardealership.com',
      action: 'mailto:info@cardealership.com',
      description: 'Send us an email'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      value: '123 Car Street',
      action: '#',
      description: 'Come to our showroom'
    }
  ];

  const quickActions = [
    { icon: '📅', title: 'Book Test Drive', color: 'bg-accent-500 hover:bg-accent-600' },
    { icon: '💰', title: 'Get Financing', color: 'bg-green-500 hover:bg-green-600' },
    { icon: '🔍', title: 'Trade-In Value', color: 'bg-primary-500 hover:bg-primary-600' },
    { icon: '🛠️', title: 'Schedule Service', color: 'bg-neutral-600 hover:bg-neutral-700' }
  ];


  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/src/assets/image_0.jpg)'}}></div>
        <div className="relative container mx-auto container-padding text-center">
          <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 animate-slide-up drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto animate-slide-up drop-shadow-md" style={{animationDelay: '0.2s'}}>
            We're here to help you find your perfect vehicle. Get in touch with our expert team today.
          </p>
          <div className="flex justify-center space-x-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-2xl mr-2">📞</span>
              <span className="font-semibold">Call Now</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-2xl mr-2">💬</span>
              <span className="font-semibold">Live Chat</span>
            </div>
          </div>
        </div>
      </section> */}

      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <div>
                      <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                      <p className="text-green-700">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 text-lg">👤</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field pl-12"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 text-lg">📞</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field pl-12"
                      placeholder="(234) 567-8900"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-neutral-400 text-lg">💬</span>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="input-field pl-12 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="card bg-gradient-to-br from-white to-neutral-50 shadow-xl border-0">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">📞</span>
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="flex items-center p-5 rounded-xl border border-neutral-200 hover:border-primary-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                    <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-200">
                      {method.icon}
                    </span>
                    <div>
                      <div className="font-semibold text-neutral-900 group-hover:text-primary-600">
                        {method.title}
                      </div>
                      <div className="text-neutral-600 text-sm">{method.value}</div>
                      <div className="text-neutral-500 text-xs">{method.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="card bg-gradient-to-br from-white to-neutral-50 shadow-xl border-0">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">🕒</span>
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-green-50 rounded-lg border border-green-100">
                  <span className="text-neutral-700 font-medium">Monday - Friday</span>
                  <span className="font-semibold text-green-700">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-blue-50 rounded-lg border border-blue-100">
                  <span className="text-neutral-700 font-medium">Saturday</span>
                  <span className="font-semibold text-blue-700">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-red-50 rounded-lg border border-red-100">
                  <span className="text-neutral-700 font-medium">Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card bg-gradient-to-br from-white to-neutral-50 shadow-xl border-0">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">⚡</span>
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className={`w-full ${action.color} text-white py-4 px-5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 text-lg`}
                  >
                    <span className="text-2xl">{action.icon}</span>
                    {action.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="card bg-gradient-to-br from-white to-neutral-50 shadow-2xl border-0">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-8 text-center">
              Visit Our Showroom
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center mb-8 shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/src/assets/image_1.jpg)'}}></div>
                  <div className="text-center relative z-10">
                    <span className="text-7xl mb-4 block animate-bounce">🗺️</span>
                    <p className="text-neutral-700 font-semibold text-lg">Interactive Map</p>
                    <p className="text-sm text-neutral-600">123 Car Street, City, State 12345</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <span className="text-3xl mt-1">🚗</span>
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-lg">Free Parking</h4>
                      <p className="text-neutral-600">Ample parking available for customers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                    <span className="text-3xl mt-1">☕</span>
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-lg">Customer Lounge</h4>
                      <p className="text-neutral-600">Comfortable waiting area with refreshments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <span className="text-3xl mt-1">👨‍👩‍👧‍👦</span>
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-lg">Family Friendly</h4>
                      <p className="text-neutral-600">Welcome environment for the whole family</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🧭</span>
                    Directions
                  </h3>
                  <div className="space-y-4 text-neutral-700">
                    <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                      <span className="text-2xl mt-1">🏙️</span>
                      <p><strong className="text-neutral-900">From Downtown:</strong> Take Main Street north for 2 miles, turn left on Car Street.</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                      <span className="text-2xl mt-1">🛣️</span>
                      <p><strong className="text-neutral-900">From Highway 101:</strong> Exit 45, follow signs for 1 mile to dealership.</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                      <span className="text-2xl mt-1">🚌</span>
                      <p><strong className="text-neutral-900">Public Transport:</strong> Bus routes 12, 15, and 22 stop within walking distance.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl border border-primary-200 shadow-lg">
                  <h4 className="font-semibold text-primary-900 mb-3 text-xl flex items-center">
                    <span className="text-3xl mr-3">📅</span>
                    Planning Your Visit?
                  </h4>
                  <p className="text-primary-700 mb-6 text-base">
                    Call ahead to schedule your visit and let us know which vehicles you're interested in.
                    We'll have everything ready for you!
                  </p>
                  <a href="tel:+1234567890" className="btn-primary text-base py-3 px-6 inline-flex items-center gap-2">
                    <span>📞</span>
                    Call to Schedule
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-large hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <span className="text-2xl">💬</span>
        </button>
      </div>
    </div>
  );
}