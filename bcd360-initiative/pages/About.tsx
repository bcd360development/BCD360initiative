import React from 'react';
import { Target, Shield, Users, Globe, BookOpen, Briefcase } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();
  const isFR = language === 'FR';

  const objectives = [
    { 
      title: isFR ? 'Plaidoyer' : 'Advocacy',
      text: isFR
        ? 'Offrir un soutien collaboratif pour la survie et l’épanouissement en amplifiant la voix et le pouvoir des plus vulnérables tout en défendant les droits humains.'
        : 'Provide collaborative support for surviving and thriving by amplifying the voice and power of the most vulnerable while championing human rights.',
      icon: <Users className="w-6 h-6" /> 
    },
    { 
      title: isFR ? 'Renforcement des capacités' : 'Capacity Building',
      text: isFR
        ? 'Être un leader d’opinion reconnu et un partenaire de référence pour des solutions de recherche portées localement.'
        : 'Be a recognized thought leader and knowledge partner for locally driven research solutions.',
      icon: <BookOpen className="w-6 h-6" /> 
    },
    { 
      title: isFR ? 'Recherche' : 'Research',
      text: isFR
        ? 'Être pionnier dans le développement d’outils de données et de méthodes innovants, mener des recherches multidisciplinaires et construire des bases de preuves solides.'
        : 'Pioneer cutting-edge data tools and methods, conduct multidisciplinary research, and systematically build bodies of evidence.',
      icon: <Target className="w-6 h-6" /> 
    },
    { 
      title: isFR ? 'Développement des services' : 'Service Development',
      text: isFR
        ? 'Stimuler l’utilisation d’outils fondés sur les preuves et l’extension de services essentiels pour le bien‑être des plus vulnérables.'
        : 'Catalyze the use of evidence-based tools and scale-up availability, access and uptake of relevant services for the well-being of the most vulnerable.',
      icon: <Shield className="w-6 h-6" /> 
    },
    { 
      title: isFR ? 'Autonomisation économique' : 'Economic Empowerment',
      text: isFR
        ? 'Favoriser le développement économique et l’autonomie des personnes les plus vulnérables.'
        : 'Catalyze the economic development and self-reliance of the most vulnerable.',
      icon: <Briefcase className="w-6 h-6" /> 
    },
    { 
      title: isFR ? 'Durabilité' : 'Sustainability',
      text: isFR
        ? 'Former la prochaine génération de leaders qui portent des solutions pour la résilience et un changement transformationnel du niveau local au niveau mondial.'
        : 'Grow the next generation of refined leaders that pioneer solutions for resilience, driving transformational change from the grassroots to the global level.',
      icon: <Globe className="w-6 h-6" /> 
    },
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            {isFR ? 'Qui sommes-nous' : 'Who We Are'}
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {isFR
              ? 'Née du besoin urgent de soutenir les personnes marginalisées dans les zones rurales et périurbaines.'
              : 'Born out of the urgent need to support marginalised individuals in the hinterlands and suburbs.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-24 relative z-10 mb-16">
          <h2 className="text-3xl font-serif font-bold text-dark mb-6">
            {isFR ? 'Notre histoire' : 'Our History'}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {isFR
              ? 'BCD360 est devenu un centre inclusif pour le développement des jeunes et des femmes marginalisées, avec un accent particulier sur la prévention et le contrôle des maladies infectieuses, la production de données probantes, le plaidoyer et l’autonomisation. Nous mettons à profit une expertise unique et collaborons avec des bailleurs, des gouvernements, des prestataires de services et des organisations de la société civile.'
              : 'BCD360 has evolved into an inclusive centre for the development of young persons and marginalized women. Focusing particularly on infectious disease prevention and control, involving evidence generation, advocacy and empowerment. We leverage unique expertise and collaborate with partners including funding bodies, governments, service providers, and civil society organizations.'}
          </p>
        </div>

        {/* Objectives */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-dark mb-10 text-center">
            {isFR ? 'Nos objectifs stratégiques' : 'Our Strategic Objectives'}
          </h2>
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
           <h2 className="text-3xl font-serif font-bold mb-12">
             {isFR ? 'Valeurs fondamentales' : 'Core Values'}
           </h2>
           <div className="flex flex-wrap justify-center gap-4">
             {coreValues.map((value, idx) => (
               <span key={idx} className="px-6 py-3 bg-white/10 rounded-full text-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition cursor-default">
                {isFR ? value : value}
               </span>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;