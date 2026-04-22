import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="fade-in pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Get in <span className="text-accent">Touch</span></h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
          Ready to elevate your sound? Reach out to book a session or schedule a tour.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="bg-charcoal p-10 rounded-3xl border border-white/5">
              <h2 className="text-3xl font-display font-bold text-white mb-8">Studio Info</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Location</h3>
                    <p className="text-gray-400">123 Creative Boulevard<br/>Arts District, City 10012</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">WhatsApp / Call</h3>
                    <p className="text-gray-400">+91 99999 99999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Email</h3>
                    <p className="text-gray-400">booking@woklstudio.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Hours</h3>
                    <p className="text-gray-400">Mon-Sun: 24/7 (By Appointment)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="bg-gradient-to-br from-accent/20 to-dark p-10 rounded-3xl border border-accent/20 text-center">
              <h3 className="text-2xl font-display font-bold text-white mb-4">Fastest Way to Book</h3>
              <p className="text-gray-300 mb-8">Send us a direct message on WhatsApp for instant availability and rates.</p>
              <a 
                href="https://wa.me/919999999999?text=Hello%20Wokl%20Music%20Studio,%20I%20want%20to%20know%20more%20about%20your%20studio%20services."
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1ebe5d] transition-colors"
              >
                Chat on WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal p-10 rounded-3xl border border-white/5 h-full">
            <h2 className="text-3xl font-display font-bold text-white mb-2">Send a Message</h2>
            <p className="text-gray-400 mb-8">We'll get back to you within 24 hours.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="Booking Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-white text-dark font-bold rounded-xl hover:bg-accent hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
