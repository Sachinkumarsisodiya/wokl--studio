import React from 'react';
import { Link } from 'react-router-dom';
import { Mic2, Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white mb-4">
              <Mic2 className="w-6 h-6 text-accent" />
              <span className="font-display font-bold text-xl tracking-wider">WOKL<span className="text-accent">.</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premium space for creators, musicians, and artists. Elevate your sound with top-tier equipment and inspiring environments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6 uppercase tracking-widest text-sm">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About Studio', 'Services', 'Equipment', 'Gallery', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <Link to={`/${item.split(' ')[0].toLowerCase() === 'home' ? '' : item.split(' ')[0].toLowerCase()}`} className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Music Recording</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Mixing & Mastering</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Instrument Rentals</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Photo/Video Shoots</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Podcast Production</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">123 Creative Boulevard, Arts District, City 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-gray-400 text-sm">+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-gray-400 text-sm">booking@woklstudio.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Wokl Music Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-wider transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-wider transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
