import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Perfect Car Today</h1>
          <p className="text-xl mb-8">Trusted Cars, Unbeatable Prices</p>
          <div className="space-x-4">
            <Link to="/cars" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold">View Cars</Link>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Book a Test Drive</button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Cars" className="absolute inset-0 w-full h-full object-cover" />
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">15+</h3>
              <p>Years in Business</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">1000+</h3>
              <p>Cars Sold</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">4.8/5</h3>
              <p>Customer Rating</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mock car cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Car" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Toyota Camry 2020</h3>
                <p className="text-gray-600 mb-4">Excellent condition, low mileage</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">$18,500</p>
                <Link to="/cars/1" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold">View Details</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Car" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Honda Civic 2019</h3>
                <p className="text-gray-600 mb-4">One owner, full service history</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">$16,200</p>
                <Link to="/cars/2" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold">View Details</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Car" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ford Mustang 2021</h3>
                <p className="text-gray-600 mb-4">Sporty and powerful</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">$32,000</p>
                <Link to="/cars/3" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}