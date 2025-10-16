import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Find Your Perfect Car Today",
      subtitle: "Trusted Cars, Unbeatable Prices",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Explore Inventory"
    },
    {
      title: "Premium Pre-Owned Vehicles",
      subtitle: "Certified Quality, Guaranteed Satisfaction",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "View Premium Cars"
    },
    {
      title: "Best Financing Options",
      subtitle: "Drive Home Today with Flexible Payments",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Get Financing"
    }
  ];

  const stats = [
    { number: "15+", label: "Years in Business", icon: "🏆" },
    { number: "1000+", label: "Cars Sold", icon: "🚗" },
    { number: "4.8/5", label: "Customer Rating", icon: "⭐" },
    { number: "24/7", label: "Support", icon: "🛠️" }
  ];

  const featuredCars = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Toyota Camry 2020",
      description: "Excellent condition, low mileage",
      price: 18500,
      badge: "Best Seller"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Honda Civic 2019",
      description: "One owner, full service history",
      price: 16200,
      badge: "Certified"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Ford Mustang 2021",
      description: "Sporty and powerful",
      price: 32000,
      badge: "Premium"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105 animate-pulse"
            />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto container-padding text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 animate-slide-up">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-neutral-200 animate-slide-up" style={{animationDelay: '0.2s'}}>
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Link to="/cars" className="btn-primary text-lg px-8 py-4">
                {heroSlides[currentSlide].cta}
              </Link>
              <button className="btn-secondary text-lg px-8 py-4">
                📅 Book Test Drive
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce-subtle z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h3 className="text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-neutral-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
              Featured Cars
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium pre-owned vehicles, each thoroughly inspected and ready for your next adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="card group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {car.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {car.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{car.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary-600">
                      ${car.price.toLocaleString()}
                    </p>
                    <Link
                      to={`/cars/${car.id}`}
                      className="btn-accent text-sm px-4 py-2"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/cars" className="btn-primary text-lg px-8 py-4">
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
              Why Choose CarDealership?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're committed to providing an exceptional car buying experience with transparency, quality, and customer satisfaction at our core.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Thorough Inspection</h3>
              <p className="text-neutral-600 leading-relaxed">
                Every vehicle undergoes a comprehensive 150-point inspection to ensure quality and reliability.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-200 transition-colors duration-300">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Best Price Guarantee</h3>
              <p className="text-neutral-600 leading-relaxed">
                We offer competitive pricing and will match or beat any legitimate competitor's price.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Warranty Protection</h3>
              <p className="text-neutral-600 leading-relaxed">
                Comprehensive warranty coverage gives you peace of mind for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}