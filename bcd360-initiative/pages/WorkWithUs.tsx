import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const WorkWithUs: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    'Improved health',
    'Sense of purpose',
    'Skill development',
    'Expanded network',
    'Career advancement',
    'Professional references and more',
  ];

  const focusAreas = [
    'Improving health and wellbeing',
    'Economic development and sustainability',
    'Human rights protection',
    'Breaking the cycle of GBV, stigma and discrimination',
    'Social justice',
    'Environmental justice and sustainability',
    'Partnership for development',
  ];

  return (
    <div className="min-h-screen bg-white">
       <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{t('WorkWithUsTitle')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('WorkWithUsSub')}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url("https://i.ibb.co/hRKckXds/BCD360-8-1.jpg")' }}>
            <div className="w-full h-full bg-black/40 flex items-center justify-center">
               <h2 className="text-3xl font-bold text-white text-center px-4">{t('VolunteeringOpp')}</h2>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('VolunteeringText')}
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">{t('AreasOfContribution')}</h3>
                <ul className="space-y-3">
                  {focusAreas.map((area, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">{t('WhyVolunteer')}</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-xl border border-dashed border-gray-300 text-center">
              <h3 className="text-xl font-bold text-dark mb-4">{t('HowToApply')}</h3>
              <p className="text-gray-600 mb-6">
                {t('HowToApplyText')}
              </p>
              <div className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-mono text-sm">
                Email: BCD360@proton.me
              </div>
              <p className="mt-4 text-xs text-gray-500">{t('SubjectVolunteer')}</p>
            </div>

          </div>
        </div>

        <div className="text-center text-gray-500">
           <h4 className="text-lg font-bold mb-2">{t('JobOpenings')}</h4>
           <p>{t('NoJobOpenings')}</p>
        </div>

      </div>
    </div>
  );
};

export default WorkWithUs;