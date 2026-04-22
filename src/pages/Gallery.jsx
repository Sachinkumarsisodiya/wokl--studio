import React from 'react';

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop", caption: "Mixing Room" },
    { src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=2000&q=80", caption: "Vocal Booth" },
    { src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop", caption: "Live Room" },
    { src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=2000&q=80", caption: "Analog Console" },
    { src: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=800&auto=format&fit=crop", caption: "Shoot Space" },
    { src: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=800&auto=format&fit=crop", caption: "Outboard Gear" },
  ];

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">The Gallery</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Take a look inside our meticulously designed spaces.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => {
            if (img.caption === "Vocal Booth" || img.caption === "Analog Console") {
              return (
                <div key={idx} className="relative w-full h-72 md:h-80 overflow-hidden rounded-xl group bg-black">
                  <img 
                    src={img.src} 
                    alt={img.caption} 
                    loading="eager"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                  <div className="absolute bottom-4 left-4 z-20 text-white">
                      <p className="text-xl font-semibold">{img.caption}</p>
                  </div>
                </div>
              );
            }
            return (
              <div key={idx} className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-xl group">
                <img 
                  src={img.src} 
                  alt="Gallery Image" 
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20 text-white">
                    <p className="text-lg font-semibold">{img.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
