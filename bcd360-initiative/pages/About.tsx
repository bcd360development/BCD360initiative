import React from 'react';
import { Target, Shield, Users, Globe, BookOpen, Briefcase } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const objectives = [
    { title: t('Advocacy'), text: t('AdvocacyDesc'), icon: <Users className="w-6 h-6" /> },
    { title: t('CapacityBuilding'), text: t('CapacityBuildingDesc'), icon: <BookOpen className="w-6 h-6" /> },
    { title: t('Research'), text: t('ResearchDesc'), icon: <Target className="w-6 h-6" /> },
    { title: t('ServiceDevelopment'), text: t('ServiceDevelopmentDesc'), icon: <Shield className="w-6 h-6" /> },
    { title: t('EconomicEmpowerment'), text: t('EconomicEmpowermentDesc'), icon: <Briefcase className="w-6 h-6" /> },
    { title: t('Sustainability'), text: t('SustainabilityDesc'), icon: <Globe className="w-6 h-6" /> },
  ];

  const coreValues = [
    'Collaboration and Partnership',
    'Confidentiality',
    'Excellence and Innovation',
    'Inclusion and Equity',
    'Credibility',
    'Accountability',
    'Respect'
  ];

  return (
    <div className="min-h-screen bg-light">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{t('WhoWeAre')}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-24 relative z-10 mb-16">
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Born out of the urgent need to support the marginalised individuals in the hinterlands and suburbs, particularly on infectious disease prevention and control,
              involving evidence generation, advocacy and empowerment.
            </p>
            <p>
              Born out of the urgent need to support the marginalised individuals in the hinterlands and suburbs, particularly on infectious disease prevention and control,
              involving evidence generation, advocacy and empowerment.
            </p>
            <p>
              BCD360 has being evolving into an inclusive centre for development of young persons and marginalized women.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-dark mb-10 text-center">{t('StrategicObjectives')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((obj, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-secondary">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-6">
                  {obj.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark">{obj.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {obj.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-dark rounded-3xl p-10 md:p-20 text-center text-white">
           <h2 className="text-3xl font-serif font-bold mb-12">{t('CoreValues')}</h2>
           <div className="flex flex-wrap justify-center gap-4">
             {coreValues.map((value, idx) => (
               <span key={idx} className="px-6 py-3 bg-white/10 rounded-full text-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition cursor-default">
                 {value}
               </span>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;