import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info and Map */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <span className="text-2xl mr-4">📍</span>
              <div>
                <p className="font-semibold">Address</p>
                <p>123 Car Street, City, State 12345</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-4">📞</span>
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">(234) 567-8900</a>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-4">✉️</span>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:info@cardealership.com" className="text-blue-600 hover:text-blue-800">info@cardealership.com</a>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-4">🕒</span>
              <div>
                <p className="font-semibold">Hours</p>
                <p>Mon-Fri: 9AM-7PM</p>
                <p>Sat: 9AM-5PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+1234567890"
                className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-semibold text-center transition duration-200"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/1234567890"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-semibold text-center transition duration-200"
              >
                💬 WhatsApp
              </a>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md font-semibold transition duration-200">
                📅 Book Test Drive
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold transition duration-200">
                💰 Get Financing
              </button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-center">
              <span className="block text-2xl mb-2">🗺️</span>
              Interactive Map<br/>
              <small>123 Car Street, City, State 12345</small>
            </p>
          </div>
        </div>
      </div>

      {/* Live Chat Placeholder */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg">
          💬 Live Chat
        </button>
      </div>
    </div>
  );
}