import React from 'react';
import { Mic2, Speaker, Camera, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Music Recording Sessions",
      icon: <Mic2 className="w-12 h-12 text-accent" />,
      description: "Our flagship control room and live room are designed for pristine acoustic capture. Perfect for solo artists, full bands, and voiceover work.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
      features: ["Vocal Tracking", "Live Band Recording", "Mixing & Mastering", "Podcast Production"]
    },
    {
      title: "Instrument Rentals",
      icon: <Speaker className="w-12 h-12 text-accent" />,
      description: "Don't have the right gear? We offer an extensive collection of vintage and modern instruments available for use during your session.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
      features: ["Vintage Synthesizers", "Electric & Acoustic Guitars", "Premium Drum Kits", "Boutique Amps"]
    },
    {
      title: "Shoot Space",
      icon: <Camera className="w-12 h-12 text-accent" />,
      description: "Need a moody, cinematic backdrop for your next visual project? Our studio doubles as a fully-equipped shoot space with customizable lighting.",
      image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=800&auto=format&fit=crop",
      features: ["Music Videos", "Live Performance Shoots", "Photography", "Adjustable RGB Lighting"]
    }
  ];

  return (
    <div className="fade-in pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Studio <span className="text-accent">Services</span></h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
          Professional solutions tailored to your creative needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {services.map((service, index) => (
          <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative group overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">{service.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/919999999999?text=Hello%20Wokl%20Music%20Studio,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-dark transition-all duration-300 tracking-wide"
              >
                Inquire Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
