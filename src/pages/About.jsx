import React from 'react';

const About = () => {
  return (
    <div className="fade-in pt-12 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Our <span className="text-accent">Story</span></h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light">
          Built by musicians, for musicians. A space where technical excellence meets creative freedom.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-accent rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000&auto=format&fit=crop" 
              alt="Studio interior" 
              className="relative rounded-3xl object-cover w-full h-[500px] shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">The Vision</h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Wokl Music Studio was born out of a desire to create an uncompromising environment for audio production. We noticed a gap between sterile, overly technical studios and inspiring but poorly equipped creative spaces. 
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Our vision was to bridge that gap. We've crafted a sanctuary that looks as good as it sounds. Every piece of wood, every panel of fabric, and every light fixture has been chosen to foster an atmosphere where artists can completely lose themselves in their work.
            </p>
          </div>
        </div>

        {/* USPs */}
        <div className="bg-charcoal rounded-3xl p-12 lg:p-20 border border-white/5">
          <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Why Choose Wokl?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-accent font-display text-5xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Acoustic Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                Our rooms are precisely tuned to provide a flat, honest response, ensuring your mixes translate perfectly to the outside world.
              </p>
            </div>
            <div>
              <div className="text-accent font-display text-5xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Premium Gear</h3>
              <p className="text-gray-400 leading-relaxed">
                A curated selection of industry-standard analog outboard gear paired with the latest digital conversion technology.
              </p>
            </div>
            <div>
              <div className="text-accent font-display text-5xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Cinematic Vibe</h3>
              <p className="text-gray-400 leading-relaxed">
                Adjustable mood lighting, sleek dark aesthetics, and comfortable lounging areas make long sessions fly by.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
