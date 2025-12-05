import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const ImpactChart: React.FC = () => {
  const { language, t } = useLanguage();
  const [counts, setCounts] = useState({ econ: 0, health: 0, social: 0, env: 0 });

  const finalCounts = {
    econ: 151,
    health: 424,
    social: 210,
    env: 322,
  };

  const sectors = [
    { 
      key: 'econ',
      label: language === 'EN' ? 'Economic Justice' : 'Justice Économique',
      color: '#699232'
    },
    { 
      key: 'health',
      label: language === 'EN' ? 'Healthcare' : 'Santé',
      color: '#0A4B8E'
    },
    { 
      key: 'social',
      label: language === 'EN' ? 'Social Justice' : 'Justice Sociale',
      color: '#BC1916'
    },
    { 
      key: 'env',
      label: language === 'EN' ? 'Environment' : 'Environnement',
      color: '#4d7c0f'
    },
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const startTime = Date.now();

    const animateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        econ: Math.floor(finalCounts.econ * progress),
        health: Math.floor(finalCounts.health * progress),
        social: Math.floor(finalCounts.social * progress),
        env: Math.floor(finalCounts.env * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    animateCounter();
  }, []);

  const total = finalCounts.econ + finalCounts.health + finalCounts.social + finalCounts.env;

  return (
    <div className="w-full bg-white p-8 md:p-10 rounded-xl shadow-lg border-t-4 border-primary">
      <h3 className="text-2xl font-serif font-bold text-gray-800 mb-10 text-center">{t('LivesImpacted')}</h3>
      
      <div className="space-y-8">
        {sectors.map((sector) => {
          const count = counts[sector.key as keyof typeof counts];
          const percentage = (finalCounts[sector.key as keyof typeof finalCounts] / total) * 100;
          
          return (
            <div key={sector.key} className="space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold text-gray-700">{sector.label}</h4>
                <div className="text-3xl font-bold" style={{ color: sector.color }}>
                  {count}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${(count / finalCounts[sector.key as keyof typeof finalCounts]) * 100}%`,
                    backgroundColor: sector.color,
                  }}
                ></div>
              </div>
              <div className="text-sm text-gray-500">{percentage.toFixed(1)}% of total impact</div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 pt-8 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">{t('TotalLivesImpacted')}</p>
          <div className="text-5xl font-bold text-primary">
            {counts.econ + counts.health + counts.social + counts.env}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactChart;