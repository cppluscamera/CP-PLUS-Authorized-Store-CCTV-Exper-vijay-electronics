
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#2c3e50] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-[#f1c40f]">🛡️ Vijay Electronics</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <a href="#services" className="hover:text-[#f1c40f] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#f1c40f] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#f1c40f] transition-colors">Contact</a>
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors font-bold"
            >
              Call Now
            </a>
          </div>
          <div className="md:hidden">
            <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#f1c40f] font-bold">Call: {CONTACT_INFO.phone}</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
