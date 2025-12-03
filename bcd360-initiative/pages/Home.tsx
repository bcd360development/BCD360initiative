import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Heart, Lightbulb, Megaphone, BookOpen, Search, HeartHandshake, Briefcase, Leaf, Calendar } from 'lucide-react';
import ImpactChart from '../components/ImpactChart';
import { NEWS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  // Brand Colors: Blue #0A4B8E, Red #BC1916, Green #699232
  const objectives = [
    { 
      title: t('Advocacy'), 
      description: t('AdvocacyDesc'),
      icon: <Megaphone size={24} />,
      colorClass: 'bg-red-50 text-secondary'
    },
    { 
      title: t('CapacityBuilding'), 
      description: t('CapacityBuildingDesc'),
      icon: <BookOpen size={24} />,
      colorClass: 'bg-blue-50 text-primary'
    },
    { 
      title: t('Research'), 
      description: t('ResearchDesc'),
      icon: <Search size={24} />,
      colorClass: 'bg-slate-100 text-slate-700'
    },
    { 
      title: t('ServiceDevelopment'), 
      description: t('ServiceDevelopmentDesc'),
      icon: <HeartHandshake size={24} />,
      colorClass: 'bg-green-50 text-accent'
    },
    { 
      title: t('EconomicEmpowerment'), 
      description: t('EconomicEmpowermentDesc'),
      icon: <Briefcase size={24} />,
      colorClass: 'bg-lime-50 text-accent'
    },
    { 
      title: t('Sustainability'), 
      description: t('SustainabilityDesc'),
      icon: <Leaf size={24} />,
      colorClass: 'bg-emerald-50 text-accent'
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[65vh] min-h-[500px] md:h-[85vh] md:min-h-[600px] overflow-hidden group">
        {/* Ken Burns Background Layer - Fixed on Desktop, Scroll on Mobile to prevent zoom issues */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns will-change-transform md:bg-fixed"
          style={{ backgroundImage: 'url("https://i.ibb.co/V0cmY1B3/d81f5a92-f42c-4f43-936c-d4b4ed6a764e.jpg")' }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/40 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
          <span className="inline-block py-1 px-3 rounded bg-secondary/20 text-red-300 border border-secondary/50 w-fit mb-4 md:mb-6 text-xs md:text-sm font-semibold tracking-wider backdrop-blur-sm">NGO REG: 8147392</span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-4 md:mb-6 max-w-4xl text-white drop-shadow-sm">
            {t('HeroTitle')}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 md:mb-10 max-w-2xl font-light drop-shadow-md">
            {t('HeroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink to="/projects" className="bg-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-red-800 transition flex items-center justify-center gap-2 shadow-lg">
              {t('OurProjects')} <ArrowRight size={20} />
            </NavLink>
            <NavLink to="/work-with-us" className="bg-transparent border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-primary transition flex items-center justify-center shadow-lg">
              {t('VolunteerWithUs')}
            </NavLink>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-dark mb-4 md:mb-6">
                {t('IntroTitle')}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                {t('IntroText')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-primary">{t('Mission')}</h3>
                  <p className="text-sm text-gray-600">
                    {t('MissionText')}
                  </p>
                </div>
                <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                   <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white mb-4">
                    <Heart size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-secondary">{t('Vision')}</h3>
                  <p className="text-sm text-gray-600">
                    {t('VisionText')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impact Visualization */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
              <ImpactChart />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-dark mb-4 md:mb-6">{t('StrategicObjectives')}</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {t('StrategicText')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((obj, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${obj.colorClass} group-hover:scale-110 transition-transform duration-300`}>
                  {obj.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{obj.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-dark mb-4">{t('LatestNews')}</h2>
              <p className="text-gray-600 text-base md:text-lg">{t('LatestNewsText')}</p>
            </div>
            <div className="hidden md:block">
              <NavLink to="/news" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary hover:gap-3 transition-all">
                {t('ViewAllNews')} <ArrowRight size={20} />
              </NavLink>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS.slice(0, 3).map((item) => (
              <div key={item.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={language === 'EN' ? item.title : (item.titleFr || item.title)} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-primary flex items-center gap-1.5 shadow-sm border border-gray-100">
                    <Calendar size={12} className="text-secondary" />
                    {item.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition line-clamp-2">
                    {language === 'EN' ? item.title : (item.titleFr || item.title)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {language === 'EN' ? item.summary : (item.summaryFr || item.summary)}
                  </p>
                  <NavLink to={`/news/${item.id}`} className="inline-flex items-center gap-2 text-secondary font-bold text-sm hover:gap-3 transition-all mt-auto group/btn">
                    {t('ReadFullStory')} <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <NavLink to="/news" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
              {t('ViewAllNews')} <ArrowRight size={20} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-primary text-white text-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
           <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-5xl font-serif font-bold mb-6">{t('JoinUs')}</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            {t('JoinUsText')}
          </p>
          <NavLink to="/contact" className="inline-block bg-white text-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg md:text-xl hover:shadow-2xl hover:bg-gray-50 transform hover:-translate-y-1 transition duration-300">
            {t('GetInvolved')}
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;