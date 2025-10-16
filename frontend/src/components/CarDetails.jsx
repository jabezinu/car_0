import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  if (!car) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🚗</div>
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">Car Not Found</h1>
          <p className="text-neutral-600 mb-6">The car you're looking for doesn't exist.</p>
          <Link to="/cars" className="btn-primary">
            Browse All Cars
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'specs', label: 'Specifications', icon: '⚙️' },
    { id: 'features', label: 'Features', icon: '✨' },
    { id: 'reviews', label: 'Reviews', icon: '⭐' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container mx-auto container-padding py-4">
          <nav className="flex items-center space-x-2 text-sm text-neutral-600">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link to="/cars" className="hover:text-primary-600">Cars</Link>
            <span>/</span>
            <span className="text-neutral-900">{car.year} {car.make} {car.model}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto container-padding py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={car.images[selectedImage]}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {car.fuelType}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-soft transition-colors duration-200">
                    <span className="text-xl">❤️</span>
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4">
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        selectedImage === index
                          ? 'border-primary-500 shadow-medium'
                          : 'border-neutral-200 hover:border-primary-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${car.make} ${car.model} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Car Info Sidebar */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="card">
              <h1 className="text-2xl lg:text-3xl font-display font-bold text-neutral-900 mb-2">
                {car.year} {car.make} {car.model}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-bold text-primary-600">
                  {car.price.toLocaleString()}ETB
                </span>
                <span className="text-sm text-neutral-500">MSRP</span>
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-neutral-50 rounded-lg">
                  <div className="text-2xl mb-1">📍</div>
                  <div className="text-sm font-medium text-neutral-900">{car.mileage.toLocaleString()}</div>
                  <div className="text-xs text-neutral-600">Miles</div>
                </div>
                <div className="text-center p-3 bg-neutral-50 rounded-lg">
                  <div className="text-2xl mb-1">⚙️</div>
                  <div className="text-sm font-medium text-neutral-900">{car.transmission}</div>
                  <div className="text-xs text-neutral-600">Transmission</div>
                </div>
                <div className="text-center p-3 bg-neutral-50 rounded-lg">
                  <div className="text-2xl mb-1">⛽</div>
                  <div className="text-sm font-medium text-neutral-900">{car.fuelType}</div>
                  <div className="text-xs text-neutral-600">Fuel Type</div>
                </div>
                <div className="text-center p-3 bg-neutral-50 rounded-lg">
                  <div className="text-2xl mb-1">🎨</div>
                  <div className="text-sm font-medium text-neutral-900">{car.color}</div>
                  <div className="text-xs text-neutral-600">Color</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full btn-accent">
                  📅 Book Test Drive
                </button>
                <button className="w-full btn-primary">
                  🛒 Reserve Now
                </button>
                <a href="tel:+1234567890" className="w-full btn-secondary text-center block">
                  📞 Call Dealer
                </a>
              </div>
            </div>

            {/* Financing Card */}
            <div className="card">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💰</span>
                Financing Options
              </h3>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {Math.round(car.price / 60).toLocaleString()}ETB
                </div>
                <div className="text-sm text-neutral-600">Monthly Payment</div>
                <div className="text-xs text-neutral-500">60-month term at 5% APR</div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200">
                Get Financing Quote
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <div className="card">
            {/* Tab Navigation */}
            <div className="border-b border-neutral-200">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Overview</h2>
                  <p className="text-neutral-700 leading-relaxed mb-6">{car.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Vehicle Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-neutral-600">VIN:</span>
                          <span className="font-medium">{car.vin || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Stock #:</span>
                          <span className="font-medium">#{car.id.toString().padStart(4, '0')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Location:</span>
                          <span className="font-medium">Main Dealership</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Condition</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <span className="text-sm text-neutral-600">Excellent Condition</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Technical Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-2xl mb-2">🚗</div>
                      <div className="font-semibold text-neutral-900">Engine</div>
                      <div className="text-neutral-600">{car.specs.engine}</div>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="font-semibold text-neutral-900">Horsepower</div>
                      <div className="text-neutral-600">{car.specs.horsepower} hp</div>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-2xl mb-2">🛣️</div>
                      <div className="font-semibold text-neutral-900">Drivetrain</div>
                      <div className="text-neutral-600">{car.specs.drivetrain}</div>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-2xl mb-2">👥</div>
                      <div className="font-semibold text-neutral-900">Seats</div>
                      <div className="text-neutral-600">{car.specs.seats}</div>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-2xl mb-2">🚪</div>
                      <div className="font-semibold text-neutral-900">Doors</div>
                      <div className="text-neutral-600">{car.specs.doors}</div>
                    </div>
                    {car.specs.range && (
                      <div className="p-4 bg-neutral-50 rounded-lg">
                        <div className="text-2xl mb-2">🔋</div>
                        <div className="font-semibold text-neutral-900">Range</div>
                        <div className="text-neutral-600">{car.specs.range}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Features & Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                        <span className="text-green-500 text-xl">✓</span>
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Customer Reviews</h2>
                  <div className="space-y-6">
                    {car.reviews.map((review, index) => (
                      <div key={index} className="border border-neutral-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                              <span className="text-primary-600 font-semibold">
                                {review.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-neutral-900">{review.name}</div>
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-neutral-300'}>
                                    ★
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-neutral-500">
                            {new Date().toLocaleDateString()}
                          </div>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Cars */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Similar Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cars
              .filter(c => c.id !== car.id && c.make === car.make)
              .slice(0, 3)
              .map(relatedCar => (
                <Link
                  key={relatedCar.id}
                  to={`/cars/${relatedCar.id}`}
                  className="card group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedCar.images[0]}
                      alt={`${relatedCar.make} ${relatedCar.model}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                      {relatedCar.year} {relatedCar.make} {relatedCar.model}
                    </h3>
                    <p className="text-2xl font-bold text-primary-600 mt-2">
                      {relatedCar.price.toLocaleString()}ETB
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}