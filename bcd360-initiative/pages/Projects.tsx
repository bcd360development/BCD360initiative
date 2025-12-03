import React from 'react';
import { PROJECTS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Projects: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-light">
      <div className="bg-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{t('OurProjectsTitle')}</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            {t('OurProjectsSub')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={project.image} 
                  alt={language === 'EN' ? project.title : (project.titleFr || project.title)} 
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                
                {/* Simulated multiple images effect for prompt requirement */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold shadow-sm text-primary">
                  {t('ViewGallery')}
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {t('ActiveProject')}
                </span>
                <span className="text-primary font-bold text-sm">
                  {language === 'EN' ? project.stats : (project.statsFr || project.stats)}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark">
                {language === 'EN' ? project.title : (project.titleFr || project.title)}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">
                {language === 'EN' ? project.description : (project.descriptionFr || project.description)}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;