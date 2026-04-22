import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Indie Pop Artist",
      content: "Wokl Studio is hands down the best tracking room I've ever been in. The acoustic treatment is flawless, and the gear selection is a dream. The vibe alone made my session 10x better.",
      rating: 5
    },
    {
      name: "The Midnight Echo",
      role: "Rock Band",
      content: "We tracked our entire EP here. The live room is spacious enough for a full band setup, and the drum sounds we got were massive. Highly recommend for any serious project.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Voiceover Actor",
      content: "Crystal clear audio every time. The vocal booth is incredibly dead, exactly what I need for high-end commercial VO work. The staff is also super accommodating.",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      role: "Producer / Mix Engineer",
      content: "Mixing at Wokl is a revelation. The monitoring setup translates perfectly, and having access to real analog outboard gear brings a warmth to my mixes that plugins just can't match.",
      rating: 5
    },
    {
      name: "Lunar Waves",
      role: "Electronic Duo",
      content: "We rented the space for a music video shoot. The customizable lighting and general aesthetic of the studio made our visuals pop. It looks as good on camera as it sounds on record.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Podcast Host",
      content: "Professional, clean, and inspiring. We use their podcasting setup, and our audio quality has never been better. It's the perfect environment for deep conversations.",
      rating: 5
    }
  ];

  return (
    <div className="fade-in pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Client <span className="text-accent">Stories</span></h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
          Don't just take our word for it. Here's what artists are saying about Wokl.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-charcoal p-8 rounded-2xl border border-white/5 relative group hover:-translate-y-2 transition-transform duration-500">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-accent/10 transition-colors duration-500" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center border border-white/10">
                  <span className="text-accent font-display font-bold">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide">{t.name}</h4>
                  <p className="text-accent text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
