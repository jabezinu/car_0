import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';

export default function CarListings() {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100000]);

  useEffect(() => {
    let filtered = cars.filter(car => {
      const matchesSearch = car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.model.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !selectedType || car.fuelType === selectedType;
      const matchesTransmission = !selectedTransmission || car.transmission === selectedTransmission;
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
      return matchesSearch && matchesType && matchesTransmission && matchesPrice;
    });
    setFilteredCars(filtered);
  }, [searchTerm, selectedType, selectedTransmission, priceRange]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Car Listings</h1>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search by make or model..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="">All Fuel Types</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <select
            value={selectedTransmission}
            onChange={(e) => setSelectedTransmission(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="">All Transmissions</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
          <div>
            <label className="block text-sm font-medium mb-1">Max Price: ${priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map(car => (
          <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={car.images[0]} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{car.year} {car.make} {car.model}</h3>
              <div className="text-sm text-gray-600 mb-2">
                <span>{car.mileage.toLocaleString()} miles</span> •
                <span>{car.fuelType}</span> •
                <span>{car.transmission}</span>
              </div>
              <p className="text-2xl font-bold text-blue-600 mb-4">${car.price.toLocaleString()}</p>
              <Link
                to={`/cars/${car.id}`}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredCars.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No cars match your search criteria.</p>
      )}
    </div>
  );
}