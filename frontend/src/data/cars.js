export const cars = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    price: 18500,
    mileage: 25000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Silver',
    images: [
      '/src/assets/image_0.jpg',
      '/src/assets/image_1.jpg',
      '/src/assets/image_3.jpg'
    ],
    specs: {
      engine: '2.5L 4-Cylinder',
      horsepower: 203,
      drivetrain: 'FWD',
      seats: 5,
      doors: 4
    },
    description: 'A sleek silver Toyota Camry showcasing modern design and reliability for everyday driving.',
    features: ['Backup Camera', 'Bluetooth', 'Cruise Control', 'Keyless Entry'],
    reviews: [
      { name: 'John D.', rating: 5, comment: 'Great car, very reliable!' },
      { name: 'Sarah M.', rating: 4, comment: 'Good value for money.' }
    ]
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    price: 16200,
    mileage: 30000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    color: 'Blue',
    images: [
      '/src/assets/image_5.jpg',
      '/src/assets/image_6.jpg',
      '/src/assets/image_7.jpg'
    ],
    specs: {
      engine: '2.0L 4-Cylinder',
      horsepower: 158,
      drivetrain: 'FWD',
      seats: 5,
      doors: 4
    },
    description: 'A vibrant blue Honda Civic with sporty lines and efficient performance for urban adventures.',
    features: ['Apple CarPlay', 'Android Auto', 'Lane Keep Assist', 'Adaptive Cruise Control'],
    reviews: [
      { name: 'Mike R.', rating: 5, comment: 'Fuel efficient and fun to drive!' },
      { name: 'Lisa K.', rating: 4, comment: 'Very comfortable for long drives.' }
    ]
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    price: 32000,
    mileage: 15000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Red',
    images: [
      '/src/assets/image_8.jpg',
      '/src/assets/image_9.jpg',
      '/src/assets/image_10.jpg'
    ],
    specs: {
      engine: '2.3L EcoBoost',
      horsepower: 310,
      drivetrain: 'RWD',
      seats: 4,
      doors: 2
    },
    description: 'A bold red Ford Mustang exuding power and style, perfect for thrilling drives.',
    features: ['Sport Mode', 'Premium Sound System', 'Heated Seats', 'Navigation'],
    reviews: [
      { name: 'Tom H.', rating: 5, comment: 'Absolutely love this car!' },
      { name: 'Emma W.', rating: 5, comment: 'Perfect for weekend drives.' }
    ]
  },
  {
    id: 4,
    make: 'BMW',
    model: 'X3',
    year: 2020,
    price: 35000,
    mileage: 20000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Black',
    images: [
      '/src/assets/image_11.jpg',
      '/src/assets/image_12.jpg',
      '/src/assets/image_0.jpg'
    ],
    specs: {
      engine: '2.0L Turbo',
      horsepower: 248,
      drivetrain: 'AWD',
      seats: 5,
      doors: 4
    },
    description: 'An elegant black BMW X3 SUV combining luxury and capability for versatile journeys.',
    features: ['Leather Seats', 'Panoramic Roof', 'Blind Spot Monitoring', 'Parking Assist'],
    reviews: [
      { name: 'David L.', rating: 5, comment: 'Luxury at its finest!' },
      { name: 'Anna P.', rating: 4, comment: 'Great handling and comfort.' }
    ]
  },
  {
    id: 5,
    make: 'Tesla',
    model: 'Model 3',
    year: 2022,
    price: 45000,
    mileage: 10000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    color: 'White',
    images: [
      '/src/assets/image_1.jpg',
      '/src/assets/image_3.jpg',
      '/src/assets/image_5.jpg'
    ],
    specs: {
      engine: 'Electric Motor',
      horsepower: 283,
      drivetrain: 'RWD',
      seats: 5,
      doors: 4,
      range: '272 miles'
    },
    description: 'A pristine white Tesla Model 3 representing the future of electric mobility and innovation.',
    features: ['Autopilot', 'Supercharger Access', 'Over-the-Air Updates', 'Premium Interior'],
    reviews: [
      { name: 'Chris S.', rating: 5, comment: 'Future of driving!' },
      { name: 'Rachel G.', rating: 5, comment: 'Incredible technology and range.' }
    ]
  },
  {
    id: 6,
    make: 'Audi',
    model: 'Q5',
    year: 2021,
    price: 38000,
    mileage: 18000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Gray',
    images: [
      '/src/assets/image_6.jpg',
      '/src/assets/image_7.jpg',
      '/src/assets/image_8.jpg'
    ],
    specs: {
      engine: '2.0L Turbo',
      horsepower: 201,
      drivetrain: 'AWD',
      seats: 5,
      doors: 4
    },
    description: 'A sophisticated gray Audi Q5 offering luxury and performance in a compact SUV package.',
    features: ['Virtual Cockpit', 'Bang & Olufsen Sound', 'Adaptive Air Suspension', 'LED Headlights'],
    reviews: [
      { name: 'Mike T.', rating: 5, comment: 'Luxury redefined!' },
      { name: 'Sarah L.', rating: 4, comment: 'Smooth ride and great features.' }
    ]
  },
  {
    id: 7,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2020,
    price: 42000,
    mileage: 22000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Blue',
    images: [
      '/src/assets/image_9.jpg',
      '/src/assets/image_10.jpg',
      '/src/assets/image_11.jpg'
    ],
    specs: {
      engine: '2.0L Turbo',
      horsepower: 255,
      drivetrain: 'RWD',
      seats: 5,
      doors: 4
    },
    description: 'An elegant blue Mercedes-Benz C-Class sedan delivering premium comfort and advanced technology.',
    features: ['MBUX Infotainment', 'Active Distance Assist', 'Multibeam LED', 'Burmester Sound'],
    reviews: [
      { name: 'David R.', rating: 5, comment: 'Absolute luxury!' },
      { name: 'Emma K.', rating: 5, comment: 'Incredible driving experience.' }
    ]
  },
  {
    id: 8,
    make: 'Jeep',
    model: 'Wrangler',
    year: 2021,
    price: 35000,
    mileage: 15000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    color: 'Green',
    images: [
      '/src/assets/image_12.jpg',
      '/src/assets/image_0.jpg',
      '/src/assets/image_1.jpg'
    ],
    specs: {
      engine: '3.6L V6',
      horsepower: 285,
      drivetrain: '4WD',
      seats: 5,
      doors: 4
    },
    description: 'A rugged green Jeep Wrangler built for adventure with unmatched off-road capability.',
    features: ['Removable Doors', 'Rock-Trac 4WD', 'Command-Trac System', 'Trail Rated'],
    reviews: [
      { name: 'John A.', rating: 5, comment: 'Perfect for off-roading!' },
      { name: 'Lisa M.', rating: 4, comment: 'Tough and reliable.' }
    ]
  },
  {
    id: 9,
    make: 'Porsche',
    model: '911',
    year: 2022,
    price: 120000,
    mileage: 5000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Red',
    images: [
      '/src/assets/image_3.jpg',
      '/src/assets/image_5.jpg',
      '/src/assets/image_6.jpg'
    ],
    specs: {
      engine: '3.0L Twin-Turbo',
      horsepower: 379,
      drivetrain: 'RWD',
      seats: 4,
      doors: 2
    },
    description: 'A stunning red Porsche 911 delivering legendary performance and iconic design.',
    features: ['PDK Transmission', 'Sport Chrono Package', 'Adaptive Sports Seats', 'BOSE Sound'],
    reviews: [
      { name: 'Tom B.', rating: 5, comment: 'Dream car come true!' },
      { name: 'Anna S.', rating: 5, comment: 'Unmatched performance.' }
    ]
  },
  {
    id: 10,
    make: 'Subaru',
    model: 'Outback',
    year: 2019,
    price: 28000,
    mileage: 35000,
    fuelType: 'Gasoline',
    transmission: 'CVT',
    color: 'Silver',
    images: [
      '/src/assets/image_7.jpg',
      '/src/assets/image_8.jpg',
      '/src/assets/image_9.jpg'
    ],
    specs: {
      engine: '2.5L Boxer',
      horsepower: 175,
      drivetrain: 'AWD',
      seats: 5,
      doors: 4
    },
    description: 'A versatile silver Subaru Outback with all-wheel drive for any terrain.',
    features: ['Symmetrical AWD', 'EyeSight Driver Assist', 'Roof Rails', 'Heated Seats'],
    reviews: [
      { name: 'Chris P.', rating: 4, comment: 'Great for family trips!' },
      { name: 'Rachel N.', rating: 4, comment: 'Reliable and spacious.' }
    ]
  },
  {
    id: 11,
    make: 'Lexus',
    model: 'RX',
    year: 2020,
    price: 48000,
    mileage: 25000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    color: 'White',
    images: [
      '/src/assets/image_10.jpg',
      '/src/assets/image_11.jpg',
      '/src/assets/image_12.jpg'
    ],
    specs: {
      engine: '3.5L V6 Hybrid',
      horsepower: 308,
      drivetrain: 'AWD',
      seats: 5,
      doors: 4
    },
    description: 'A luxurious white Lexus RX hybrid combining elegance with efficient power.',
    features: ['Hybrid Max', 'Mark Levinson Audio', 'Panoramic Moonroof', 'Heated/Ventilated Seats'],
    reviews: [
      { name: 'David H.', rating: 5, comment: 'Luxury and efficiency!' },
      { name: 'Emma R.', rating: 4, comment: 'Smooth and quiet ride.' }
    ]
  },
  {
    id: 12,
    make: 'Chevrolet',
    model: 'Corvette',
    year: 2021,
    price: 65000,
    mileage: 8000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Yellow',
    images: [
      '/src/assets/image_0.jpg',
      '/src/assets/image_3.jpg',
      '/src/assets/image_7.jpg'
    ],
    specs: {
      engine: '6.2L V8',
      horsepower: 490,
      drivetrain: 'RWD',
      seats: 2,
      doors: 2
    },
    description: 'A vibrant yellow Chevrolet Corvette offering thrilling performance and style.',
    features: ['Magnetic Ride Control', 'Brembo Brakes', 'Navigation', 'Apple CarPlay'],
    reviews: [
      { name: 'Mike S.', rating: 5, comment: 'American muscle at its best!' },
      { name: 'Lisa T.', rating: 5, comment: 'Incredible speed and handling.' }
    ]
  },
  {
    id: 13,
    make: 'Volvo',
    model: 'XC90',
    year: 2020,
    price: 52000,
    mileage: 30000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Black',
    images: [
      '/src/assets/image_1.jpg',
      '/src/assets/image_5.jpg',
      '/src/assets/image_8.jpg'
    ],
    specs: {
      engine: '2.0L Turbo',
      horsepower: 316,
      drivetrain: 'AWD',
      seats: 7,
      doors: 4
    },
    description: 'A sleek black Volvo XC90 providing safety and luxury for the whole family.',
    features: ['City Safety', 'Air Suspension', 'Bowers & Wilkins Audio', 'Massage Seats'],
    reviews: [
      { name: 'John L.', rating: 5, comment: 'Safe and luxurious!' },
      { name: 'Sarah P.', rating: 4, comment: 'Perfect family SUV.' }
    ]
  }
];