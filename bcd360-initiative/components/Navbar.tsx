import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="https://i.ibb.co/w9jtWnC/BDC360.png" 
                alt="BCD360 Logo" 
                className="h-10 md:h-16 w-auto object-contain"
              />
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 hover:text-secondary ${
                    isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-600'
                  }`
                }
              >
                {language === 'EN' ? item.label : item.labelFr}
              </NavLink>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-50 text-xs font-semibold text-gray-700 transition"
            >
              <Globe size={14} />
              {language}
            </button>

            <NavLink
              to="/contact"
              className="bg-secondary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-800 transition shadow-lg transform hover:-translate-y-0.5"
            >
              Donate
            </NavLink>
          </div>

          <div className="flex items-center md:hidden gap-4">
             <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded border border-gray-300 text-xs font-bold"
            >
              {language}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-blue-50 text-primary'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`
                }
              >
                {language === 'EN' ? item.label : item.labelFr}
              </NavLink>
            ))}
             <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-secondary text-white px-5 py-3 rounded-md font-bold hover:bg-red-800"
            >
              Donate Now
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;