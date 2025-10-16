import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
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
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
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

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'service', label: 'Service Request' },
    { value: 'financing', label: 'Financing' },
    { value: 'trade-in', label: 'Trade-In' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 animate-slide-up">
            Contact Us
          </h1>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            We're here to help you find your perfect vehicle. Get in touch with our expert team today.
          </p>
        </div>
      </section>

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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="(234) 567-8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="input-field"
                    >
                      {inquiryTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="input-field resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
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
            <div className="card">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="flex items-center p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
                  >
                    <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-200">
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
            <div className="card">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                  <span className="text-neutral-700">Monday - Friday</span>
                  <span className="font-semibold text-neutral-900">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                  <span className="text-neutral-700">Saturday</span>
                  <span className="font-semibold text-neutral-900">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-700">Sunday</span>
                  <span className="font-semibold text-neutral-500">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className={`w-full ${action.color} text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2`}
                  >
                    <span>{action.icon}</span>
                    {action.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="card">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-neutral-900 mb-6">
              Visit Our Showroom
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">🗺️</span>
                    <p className="text-neutral-600">Interactive Map</p>
                    <p className="text-sm text-neutral-500">123 Car Street, City, State 12345</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-1">🚗</span>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Free Parking</h4>
                      <p className="text-neutral-600 text-sm">Ample parking available for customers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-1">☕</span>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Customer Lounge</h4>
                      <p className="text-neutral-600 text-sm">Comfortable waiting area with refreshments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-1">👨‍👩‍👧‍👦</span>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Family Friendly</h4>
                      <p className="text-neutral-600 text-sm">Welcome environment for the whole family</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">Directions</h3>
                  <div className="space-y-3 text-neutral-700">
                    <p><strong>From Downtown:</strong> Take Main Street north for 2 miles, turn left on Car Street.</p>
                    <p><strong>From Highway 101:</strong> Exit 45, follow signs for 1 mile to dealership.</p>
                    <p><strong>Public Transport:</strong> Bus routes 12, 15, and 22 stop within walking distance.</p>
                  </div>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary-900 mb-2">Planning Your Visit?</h4>
                  <p className="text-primary-700 text-sm mb-4">
                    Call ahead to schedule your visit and let us know which vehicles you're interested in.
                    We'll have everything ready for you!
                  </p>
                  <a href="tel:+1234567890" className="btn-primary text-sm">
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