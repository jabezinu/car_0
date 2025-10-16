import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cars } from '../data/cars';

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!car) {
    return <div className="container mx-auto px-4 py-8">Car not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <img
            src={car.images[selectedImage]}
            alt={`${car.make} ${car.model}`}
            className="w-full h-96 object-cover rounded-lg mb-4"
          />
          <div className="flex space-x-2 overflow-x-auto">
            {car.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${car.make} ${car.model} ${index + 1}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer ${selectedImage === index ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Car Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{car.year} {car.make} {car.model}</h1>
          <p className="text-2xl font-bold text-blue-600 mb-4">${car.price.toLocaleString()}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <span className="font-semibold">Mileage:</span> {car.mileage.toLocaleString()} miles
            </div>
            <div>
              <span className="font-semibold">Fuel Type:</span> {car.fuelType}
            </div>
            <div>
              <span className="font-semibold">Transmission:</span> {car.transmission}
            </div>
            <div>
              <span className="font-semibold">Color:</span> {car.color}
            </div>
          </div>

          <p className="text-gray-700 mb-6">{car.description}</p>

          {/* Specs */}
          <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div><span className="font-semibold">Engine:</span> {car.specs.engine}</div>
            <div><span className="font-semibold">Horsepower:</span> {car.specs.horsepower} hp</div>
            <div><span className="font-semibold">Drivetrain:</span> {car.specs.drivetrain}</div>
            <div><span className="font-semibold">Seats:</span> {car.specs.seats}</div>
            <div><span className="font-semibold">Doors:</span> {car.specs.doors}</div>
            {car.specs.range && <div><span className="font-semibold">Range:</span> {car.specs.range}</div>}
          </div>

          {/* Features */}
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside mb-6">
            {car.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="space-y-4">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded font-semibold">
              Book a Test Drive
            </button>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded font-semibold">
              Reserve Now
            </button>
            <a href="tel:+1234567890" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded font-semibold text-center block">
              Call Dealer
            </a>
          </div>

          {/* Financing */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Financing Options</h3>
            <p className="mb-2">Monthly payment starting from:</p>
            <p className="text-2xl font-bold text-green-600">${Math.round(car.price / 60)}</p>
            <p className="text-sm text-gray-600">Based on 60-month term at 5% APR</p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold">
              Get Financing Quote
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
        <div className="space-y-4">
          {car.reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">{review.name}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}