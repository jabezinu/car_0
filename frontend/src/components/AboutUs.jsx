export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">About Us</h1>

      {/* Story Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2009, CarDealership has been serving the community with quality vehicles and exceptional customer service for over 15 years. What started as a small family business has grown into one of the most trusted dealerships in the area.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is simple: to provide our customers with the best selection of pre-owned vehicles at competitive prices, backed by our commitment to transparency, integrity, and customer satisfaction.
            </p>
            <p className="text-gray-700">
              We believe that buying a car should be an exciting and stress-free experience. That's why we offer comprehensive vehicle inspections, competitive financing options, and ongoing support even after the sale.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Dealership"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="John Smith"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Sarah Johnson"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Sarah Johnson</h3>
            <p className="text-gray-600">Sales Manager</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Mike Davis"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Mike Davis</h3>
            <p className="text-gray-600">Service Manager</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Emily Chen</h4>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="text-gray-700">"I found my dream car at CarDealership! The staff was incredibly helpful and transparent about the vehicle's history. Highly recommend!"</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Robert Wilson</h4>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
            </div>
            <p className="text-gray-700">"Outstanding service! They helped me get the best financing deal and the car has been perfect. Will definitely return for my next vehicle."</p>
          </div>
        </div>
      </section>

      {/* Certifications and Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-8">Certifications & Awards</h2>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🏆</span>
            </div>
            <p className="font-semibold">BBB Accredited</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">⭐</span>
            </div>
            <p className="font-semibold">Top Rated Dealer</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🔧</span>
            </div>
            <p className="font-semibold">ASE Certified</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Visit Us Today</h3>
          <p className="text-gray-700 mb-4">123 Car Street, City, State 12345</p>
          <p className="text-gray-700 mb-4">Phone: (234) 567-8900 | Email: info@cardealership.com</p>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Google Map Placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
}