export default function AboutUs() {
  const stats = [
    { number: "15+", label: "Years of Excellence", icon: "🏆" },
    { number: "1000+", label: "Happy Customers", icon: "😊" },
    { number: "500+", label: "Cars Sold", icon: "🚗" },
    { number: "4.8/5", label: "Average Rating", icon: "⭐" }
  ];

  const values = [
    {
      icon: "🤝",
      title: "Transparency",
      description: "We believe in complete honesty about vehicle history, pricing, and all aspects of our business."
    },
    {
      icon: "🔍",
      title: "Quality Assurance",
      description: "Every vehicle undergoes rigorous inspection and comes with comprehensive warranty coverage."
    },
    {
      icon: "💪",
      title: "Customer First",
      description: "Your satisfaction is our priority. We're here to support you throughout your entire ownership experience."
    },
    {
      icon: "🌟",
      title: "Excellence",
      description: "We strive for perfection in everything we do, from vehicle selection to customer service."
    }
  ];

  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 20 years in the automotive industry, John founded ELITE Cars with a vision to revolutionize the car buying experience."
    },
    {
      name: "Sarah Johnson",
      role: "Sales Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Sarah leads our sales team with passion and dedication, ensuring every customer finds their perfect vehicle."
    },
    {
      name: "Mike Davis",
      role: "Service Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Mike oversees our service department, maintaining the highest standards for vehicle maintenance and repairs."
    }
  ];

  const testimonials = [
    {
      name: "Emily Chen",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      text: "I found my dream car at ELITE Cars! The staff was incredibly helpful and transparent about the vehicle's history. The financing process was smooth and the rates were competitive. Highly recommend!",
      car: "Toyota Camry 2020"
    },
    {
      name: "Robert Wilson",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      text: "Outstanding service from start to finish! They helped me get the best financing deal and the car has been perfect. The team went above and beyond to make sure I was completely satisfied.",
      car: "Honda Civic 2019"
    },
    {
      name: "Maria Garcia",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      text: "As a first-time car buyer, I was nervous, but the team at ELITE Cars made the entire process stress-free. They answered all my questions and helped me choose the perfect car for my needs.",
      car: "Ford Mustang 2021"
    }
  ];

  const certifications = [
    { icon: "🏆", title: "BBB Accredited", description: "A+ Rating for 10+ years" },
    { icon: "⭐", title: "Top Rated Dealer", description: "Awarded by AutoTrader" },
    { icon: "🔧", title: "ASE Certified", description: "Master Technicians" },
    { icon: "🛡️", title: "Warranty Direct", description: "Nationwide Coverage" }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto container-padding py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 animate-slide-up">
              About ELITE Cars
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-200 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Where Trust Meets Automotive Excellence
            </p>
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                For over 15 years, we've been your trusted partner in finding the perfect vehicle.
                Our commitment to transparency, quality, and customer satisfaction sets us apart.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-subtle"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent-500/20 rounded-full animate-bounce-subtle" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-neutral-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Founded in 2009, ELITE Cars began as a small family business with a big dream:
                  to revolutionize the car buying experience. What started in a modest showroom has
                  grown into one of the most trusted dealerships in the region.
                </p>
                <p>
                  Our journey has been guided by three core principles: transparency, quality, and
                  customer satisfaction. We believe that buying a car should be an exciting and
                  stress-free experience, not a source of anxiety.
                </p>
                <p>
                  Today, we continue to uphold these values, offering comprehensive vehicle
                  inspections, competitive financing options, and unparalleled customer support
                  that extends long after the sale.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Dealership"
                className="rounded-2xl shadow-large"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent-500 text-white p-4 rounded-xl shadow-medium">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              The passionate professionals dedicated to making your car buying experience exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-medium"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-t from-primary-600/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-neutral-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Real stories from real customers who found their perfect vehicle with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-neutral-300'}>★</span>
                      ))}
                    </div>
                    <p className="text-sm text-neutral-500">{testimonial.car}</p>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Certifications & Awards
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Recognized excellence in automotive sales and service.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <span className="text-3xl">{cert.icon}</span>
                </div>
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-neutral-400 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
            Ready to Find Your Perfect Car?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Visit us today and experience the ELITE Cars difference.
            We're here to make your car buying journey exceptional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1234567890" className="btn-secondary">
              📞 Call Now: (234) 567-8900
            </a>
            <a href="/contact" className="bg-white text-primary-600 hover:bg-neutral-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200">
              Get In Touch
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl mb-2">📍</div>
              <div className="font-semibold">Visit Us</div>
              <div className="text-primary-100">123 Car Street, City, State 12345</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🕒</div>
              <div className="font-semibold">Hours</div>
              <div className="text-primary-100">Mon-Fri: 9AM-7PM | Sat: 9AM-5PM</div>
            </div>
            <div>
              <div className="text-2xl mb-2">✉️</div>
              <div className="font-semibold">Email</div>
              <div className="text-primary-100">info@cardealership.com</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}