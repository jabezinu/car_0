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
      'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      engine: '2.5L 4-Cylinder',
      horsepower: 203,
      drivetrain: 'FWD',
      seats: 5,
      doors: 4
    },
    description: 'Excellent condition Toyota Camry with low mileage. Perfect for daily commuting.',
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
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      engine: '2.0L 4-Cylinder',
      horsepower: 158,
      drivetrain: 'FWD',
      seats: 5,
      doors: 4
    },
    description: 'One owner Honda Civic with full service history. Excellent fuel economy.',
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
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      engine: '2.3L EcoBoost',
      horsepower: 310,
      drivetrain: 'RWD',
      seats: 4,
      doors: 2
    },
    description: 'Sporty Ford Mustang with powerful engine. Low mileage and in pristine condition.',
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
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      engine: '2.0L Turbo',
      horsepower: 248,
      drivetrain: 'AWD',
      seats: 5,
      doors: 4
    },
    description: 'Luxury BMW X3 SUV with all-wheel drive. Comfortable and powerful.',
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
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      engine: 'Electric Motor',
      horsepower: 283,
      drivetrain: 'RWD',
      seats: 5,
      doors: 4,
      range: '272 miles'
    },
    description: 'Cutting-edge Tesla Model 3 with autopilot features. Zero emissions and high efficiency.',
    features: ['Autopilot', 'Supercharger Access', 'Over-the-Air Updates', 'Premium Interior'],
    reviews: [
      { name: 'Chris S.', rating: 5, comment: 'Future of driving!' },
      { name: 'Rachel G.', rating: 5, comment: 'Incredible technology and range.' }
    ]
  }
];