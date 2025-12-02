import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Heart, Lightbulb, Megaphone, BookOpen, Search, HeartHandshake, Briefcase, Leaf, Calendar } from 'lucide-react';
import ImpactChart from '../components/ImpactChart';
import { NEWS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const isFR = language === 'FR';

  // Brand Colors: Blue #0A4B8E, Red #BC1916, Green #699232
  const objectives = [
    { 
      title: isFR ? 'Plaidoyer' : 'Advocacy', 
      description: isFR
        ? 'Offrir un soutien collaboratif pour la survie et l’épanouissement en amplifiant la voix et le pouvoir des plus vulnérables tout en défendant les droits humains.'
        : 'Provide collaborative support for surviving and thriving by amplifying the voice and power of the most vulnerable while championing human rights.',
      icon: <Megaphone size={24} />,
      colorClass: 'bg-red-50 text-secondary' // Red for Advocacy/Voice
    },
    { 
      title: isFR ? 'Renforcement des capacités' : 'Capacity Building', 
      description: isFR
        ? 'Devenir un leader d’opinion reconnu et un partenaire de référence pour des solutions de recherche portées localement.'
        : 'Be a recognized thought leader and knowledge partner for locally driven research solutions.',
      icon: <BookOpen size={24} />,
      colorClass: 'bg-blue-50 text-primary' // Blue for Knowledge
    },
    { 
      title: isFR ? 'Recherche' : 'Research', 
      description: isFR
        ? 'Être pionnier dans le développement d’outils et de méthodes de données innovants, mener des recherches multidisciplinaires et constituer des bases de preuves solides.'
        : 'Pioneer cutting-edge data tools and methods, conduct multidisciplinary research, and systematically build bodies of evidence.',
      icon: <Search size={24} />,
      colorClass: 'bg-slate-100 text-slate-700' // Neutral/Tech for Research
    },
    { 
      title: isFR ? 'Développement des services' : 'Service Development', 
      description: isFR
        ? 'Stimuler l’utilisation d’outils fondés sur les preuves et l’extension de la disponibilité, de l’accès et de l’utilisation de services essentiels pour le bien-être des plus vulnérables.'
        : 'Catalyze the use of evidence-based tools and scale-up availability, access and uptake of relevant services for the well-being of the most vulnerable.',
      icon: <HeartHandshake size={24} />,
      colorClass: 'bg-green-50 text-accent' // Green for Growth/Services
    },
    { 
      title: isFR ? 'Autonomisation économique' : 'Economic Empowerment', 
      description: isFR
        ? 'Stimuler le développement économique et l’autonomie des personnes les plus vulnérables.'
        : 'Catalyze the economic development and self-reliance of the most vulnerable.',
      icon: <Briefcase size={24} />,
      colorClass: 'bg-lime-50 text-accent' // Green for Money
    },
    { 
      title: isFR ? 'Durabilité' : 'Sustainability', 
      description: isFR
        ? 'Former la prochaine génération de leaders qui portent des solutions pour la résilience et impulsent un changement transformationnel du niveau communautaire au niveau mondial.'
        : 'Grow the next generation of refined leaders that pioneer solutions for resilience, driving transformational change from the grassroots to the global level.',
      icon: <Leaf size={24} />,
      colorClass: 'bg-emerald-50 text-accent' // Green for Nature/Sustainability
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[85vh] min-h-[600px] overflow-hidden group">
        {/* Ken Burns Background Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns will-change-transform"
          style={{ backgroundImage: 'url("https://i.ibb.co/V0cmY1B3/d81f5a92-f42c-4f43-936c-d4b4ed6a764e.jpg")' }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/40 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
          <span className="inline-block py-1 px-3 rounded bg-secondary/20 text-red-300 border border-secondary/50 w-fit mb-6 text-sm font-semibold tracking-wider backdrop-blur-sm">NGO REG: 8147392</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-6 max-w-4xl text-white drop-shadow-sm">
            {isFR ? 'Centre inclusif pour le développement' : 'Inclusive Centre for Development'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light drop-shadow-md">
            {isFR
              ? 'Promouvoir un développement inclusif pour les jeunes et les femmes marginalisées au Nigeria.'
              : 'Championing inclusive development for young people and marginalised women in Nigeria.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink to="/projects" className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition flex items-center justify-center gap-2 shadow-lg">
              {isFR ? 'Nos projets' : 'Our Projects'} <ArrowRight size={20} />
            </NavLink>
            <NavLink to="/work-with-us" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition flex items-center justify-center shadow-lg">
              {isFR ? 'Devenez bénévole' : 'Volunteer With Us'}
            </NavLink>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">
                {isFR
                  ? 'BCD360 est un centre inclusif dédié au développement des jeunes et des femmes marginalisées.'
                  : 'BCD360 is an inclusive centre for the development of young persons and marginalized women.'}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {isFR
                  ? 'Depuis plusieurs années, Beam Community Development 360 Initiative (BCD360) défend un développement inclusif pour les jeunes et les femmes marginalisées au Nigeria.'
                  : 'For years now, Beam Community Development 360 Initiative (BCD360) has been championing inclusive development for young people and marginalised women in Nigeria.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-primary">
                    {isFR ? 'Notre mission' : 'Our Mission'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isFR
                      ? 'Améliorer les conditions de vie grâce à des approches créatives, au renforcement des capacités, à la fourniture de services essentiels et à une recherche innovante.'
                      : 'To improve lives through creative approaches, capacity building, provision of critical services, and innovative research.'}
                  </p>
                </div>
                <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                   <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white mb-4">
                    <Heart size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-secondary">
                    {isFR ? 'Notre vision' : 'Our Vision'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isFR
                      ? 'Une société équitable et durable qui améliore le bien-être de tous, sans marginalisation.'
                      : 'An equitable and sustainable society that enhances the well-being of humanity without marginalisation.'}
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">
              {isFR ? 'Nos objectifs stratégiques' : 'Our Strategic Objectives'}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {isFR
                ? 'En tirant parti de notre expertise unique, nous collaborons avec des partenaires — bailleurs, gouvernements, prestataires de services et organisations de la société civile — pour atteindre ces objectifs et réaliser notre mission et notre vision :'
                : 'Leveraging unique expertise, we collaborate with partners including funding bodies, governments, service providers, and civil society organizations on these objectives to achieve our mission and vision:'}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">
                {isFR ? 'Dernières nouvelles & mises à jour' : 'Latest News & Updates'}
              </h2>
              <p className="text-gray-600 text-lg">
                {isFR
                  ? 'Restez informé de nos activités, de nos événements récents et de nos opportunités.'
                  : 'Stay informed about our activities, recent events, and opportunities.'}
              </p>
            </div>
            <div className="hidden md:block">
              <NavLink to="/news" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary hover:gap-3 transition-all">
                {isFR ? 'Voir toutes les actualités' : 'View All News'} <ArrowRight size={20} />
              </NavLink>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS.slice(0, 3).map((item) => (
              <div key={item.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-primary flex items-center gap-1.5 shadow-sm border border-gray-100">
                    <Calendar size={12} className="text-secondary" />
                    {item.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {item.summary}
                  </p>
                  <NavLink to={`/news/${item.id}`} className="inline-flex items-center gap-2 text-secondary font-bold text-sm hover:gap-3 transition-all mt-auto group/btn">
                    {isFR ? 'Lire l’article complet' : 'Read Full Story'} <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <NavLink to="/news" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
              {isFR ? 'Voir toutes les actualités' : 'View All News'} <ArrowRight size={20} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
           <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            {isFR ? 'Rejoignez-nous pour faire la différence' : 'Join Us in Making a Difference'}
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            {isFR
              ? 'Que vous souhaitiez donner de votre temps, devenir partenaire ou faire un don pour soutenir notre cause, il y a une place pour vous à BCD360.'
              : 'Whether you want to volunteer your time, partner with us, or donate to support our cause, there is a place for you at BCD360.'}
          </p>
          <NavLink to="/contact" className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:bg-gray-50 transform hover:-translate-y-1 transition duration-300">
            {isFR ? 'S’engager avec nous' : 'Get Involved'}
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;