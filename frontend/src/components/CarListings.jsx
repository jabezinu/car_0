import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';

export default function CarListings() {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState('price-low');
  const [viewMode, setViewMode] = useState('grid');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    let filtered = cars.filter(car => {
      const matchesSearch = car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            car.model.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !selectedType || car.fuelType === selectedType;
      const matchesTransmission = !selectedTransmission || car.transmission === selectedTransmission;
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
      return matchesSearch && matchesType && matchesTransmission && matchesPrice;
    });

    // Sort cars
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'year-new':
          return b.year - a.year;
        case 'year-old':
          return a.year - b.year;
        case 'mileage-low':
          return a.mileage - b.mileage;
        default:
          return 0;
      }
    });

    setFilteredCars(filtered);
  }, [searchTerm, selectedType, selectedTransmission, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('');
    setSelectedTransmission('');
    setPriceRange([0, 100000]);
    setSortBy('price-low');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white shadow-soft">
        <div className="container mx-auto container-padding py-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
              Car Listings
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Discover your perfect vehicle from our curated collection of quality pre-owned cars.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto container-padding py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${isFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">Filters</h2>
                <button
                  onClick={() => setIsFiltersOpen(false)}
                  className="lg:hidden text-neutral-500 hover:text-neutral-700"
                >
                  ✕
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Make, model, or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field"
                />
              </div>

              {/* Fuel Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Fuel Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="input-field"
                >
                  <option value="">All Fuel Types</option>
                  <option value="Gasoline">Gasoline</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>

              {/* Transmission */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Transmission
                </label>
                <select
                  value={selectedTransmission}
                  onChange={(e) => setSelectedTransmission(e.target.value)}
                  className="input-field"
                >
                  <option value="">All Transmissions</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                  <option value="CVT">CVT</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Sort */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-field"
                >
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="year-new">Year: Newest First</option>
                  <option value="year-old">Year: Oldest First</option>
                  <option value="mileage-low">Mileage: Low to High</option>
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="w-full btn-secondary"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsFiltersOpen(true)}
                  className="lg:hidden btn-secondary"
                >
                  🔍 Filters
                </button>
                <span className="text-neutral-600">
                  {filteredCars.length} cars found
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-600 mr-2">View:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-neutral-600 hover:bg-neutral-100'}`}
                >
                  ⊞
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-neutral-600 hover:bg-neutral-100'}`}
                >
                  ☰
                </button>
              </div>
            </div>

            {/* Car Grid/List */}
            {filteredCars.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-4"
              }>
                {filteredCars.map(car => (
                  <div key={car.id} className="card group hover:scale-105 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={car.images[0]}
                        alt={`${car.make} ${car.model}`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {car.fuelType}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                          {car.year} {car.make} {car.model}
                        </h3>
                        <span className="text-2xl font-bold text-primary-600">
                          ${car.price.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                        <span className="flex items-center gap-1">
                          <span>📍</span>
                          {car.mileage.toLocaleString()} miles
                        </span>
                        <span className="flex items-center gap-1">
                          <span>⚙️</span>
                          {car.transmission}
                        </span>
                        <span className="flex items-center gap-1">
                          <span>⛽</span>
                          {car.fuelType}
                        </span>
                      </div>

                      <p className="text-neutral-600 mb-4 line-clamp-2">
                        {car.description}
                      </p>

                      <div className="flex gap-2">
                        <Link
                          to={`/cars/${car.id}`}
                          className="flex-1 btn-primary text-center"
                        >
                          View Details
                        </Link>
                        <button className="btn-secondary px-4">
                          ❤️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                  No cars found
                </h3>
                <p className="text-neutral-600 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}