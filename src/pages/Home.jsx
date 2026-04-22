import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Mic2, Speaker, Camera } from 'lucide-react';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image / Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="text-accent tracking-[0.3em] uppercase text-sm font-semibold mb-6 block">Welcome to Wokl</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
            Create. Record. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Perform.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            The ultimate sanctuary for creators. State-of-the-art acoustics, premium gear, and an inspiring atmosphere to bring your sonic vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://wa.me/919999999999?text=Hello%20Wokl%20Music%20Studio,%20I%20want%20to%20book%20a%20session." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-accent text-dark font-semibold rounded-full hover:bg-white transition-all duration-300 flex items-center gap-2 tracking-wide w-full sm:w-auto justify-center">
              Book a Session <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/services" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2 tracking-wide w-full sm:w-auto justify-center">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Premium Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-charcoal p-10 rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Mic2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-4">Recording Sessions</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Acoustically treated rooms with top-tier microphones and interfaces for crystal clear vocal and instrument tracking.
              </p>
              <Link to="/services" className="text-accent flex items-center gap-2 text-sm font-semibold tracking-wider hover:text-white transition-colors">
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group bg-charcoal p-10 rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Speaker className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-4">Equipment Rentals</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Access a vast collection of vintage and modern synthesizers, guitars, drums, and outboard gear.
              </p>
              <Link to="/equipment" className="text-accent flex items-center gap-2 text-sm font-semibold tracking-wider hover:text-white transition-colors">
                VIEW GEAR <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group bg-charcoal p-10 rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Camera className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-4">Shoot Space</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Visually stunning studio environments perfectly lit for your next music video, photoshoot, or podcast.
              </p>
              <Link to="/services" className="text-accent flex items-center gap-2 text-sm font-semibold tracking-wider hover:text-white transition-colors">
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Gallery/Vibe Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Where Magic Happens</h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                Every corner of Wokl Studio is designed to inspire. From the moody ambient lighting to the meticulously curated selection of analog gear, we provide an environment that elevates your creative output.
              </p>
              <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark font-semibold rounded-full hover:bg-accent hover:text-white transition-colors">
                View Studio Gallery
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop" alt="Studio Console" className="rounded-2xl object-cover h-64 w-full shadow-2xl" />
              <img src="https://images.unsplash.com/photo-1621618406169-bc947c61715f?q=80&w=800&auto=format&fit=crop" alt="Microphone" className="rounded-2xl object-cover h-64 w-full shadow-2xl mt-8" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
