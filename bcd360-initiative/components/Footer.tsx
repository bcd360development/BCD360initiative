import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, NAV_ITEMS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-secondary">BCD360</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('IntroTitle')}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-secondary transition"><Facebook size={20} /></a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-secondary transition"><Twitter size={20} /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-secondary transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-200 pb-2 inline-block text-primary">{t('QuickLinks')}</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="text-gray-600 hover:text-secondary transition text-sm">
                    {language === 'EN' ? item.label : item.labelFr}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-200 pb-2 inline-block text-primary">{t('AbujaOffice')}</h4>
            <ul className="space-y-4">
               <li className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-secondary" />
                <span>Cajaar estate, 900102 AMAC, FCT, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone size={18} className="flex-shrink-0 text-secondary" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Mail size={18} className="flex-shrink-0 text-secondary" />
                <span>{CONTACT_INFO.officialEmail}</span>
              </li>
            </ul>
          </div>

           {/* Contact 2 */}
           <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-200 pb-2 inline-block text-primary">{t('JalingoOffice')}</h4>
            <ul className="space-y-4">
               <li className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-secondary" />
                <span>#11, Sala Avenue, by-pass, Jalingo, Taraba state</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone size={18} className="flex-shrink-0 text-secondary" />
                <span>{CONTACT_INFO.altPhone}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Beam Community Development 360 Initiative. {t('AllRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;