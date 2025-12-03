import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Globe, Home, Info, Briefcase, HeartHandshake, Newspaper, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  const getNavIcon = (path: string) => {
    switch(path) {
      case '/': return <Home size={22} />;
      case '/about': return <Info size={22} />;
      case '/projects': return <Briefcase size={22} />;
      case '/work-with-us': return <HeartHandshake size={22} />;
      case '/news': return <Newspaper size={22} />;
      case '/contact': return <Mail size={22} />;
      default: return null;
    }
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
                className="h-8 md:h-16 w-auto object-contain transition-all"
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
          </div>

          <div className="flex items-center md:hidden gap-3">
             <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-xs font-bold min-w-[3rem] justify-center text-gray-700"
            >
              {language}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 absolute top-20 left-0 w-full shadow-2xl h-[calc(100vh-5rem)] overflow-y-auto z-40 animate-fade-in">
          <div className="px-4 py-6 space-y-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-primary/5 text-primary font-bold shadow-sm border border-primary/10'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium'
                  }`
                }
              >
                <span className={({ isActive }: { isActive: boolean }) => `transition-colors p-2 rounded-lg ${isActive ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-white group-hover:text-primary'}`}>
                  {getNavIcon(item.path)}
                </span>
                <span className="text-lg">{language === 'EN' ? item.label : item.labelFr}</span>
              </NavLink>
            ))}
            
            <div className="pt-6 mt-6 border-t border-gray-100">
               <p className="text-xs text-gray-400 text-center mb-4 uppercase tracking-widest">Connect With Us</p>
               <div className="flex justify-center gap-6">
                 {/* Social links could act as a footer here for the menu */}
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;