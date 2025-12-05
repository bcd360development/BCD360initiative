import React from 'react';
import { CheckCircle, Heart, Users, Zap, Award, Globe } from 'lucide-react';
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

  const whyChoose = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Make a Real Impact',
      desc: 'Your efforts directly transform lives in underserved communities'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Join Our Community',
      desc: 'Connect with passionate individuals dedicated to social change'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Grow Your Skills',
      desc: 'Gain practical experience and professional development opportunities'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Recognition',
      desc: 'Earn professional references and certificates for your contributions'
    },
  ];

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section with Different Image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: 'url("https://i.ibb.co/V0cmY1B3/d81f5a92-f42c-4f43-936c-d4b4ed6a764e.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-dark/40"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
            {t('WorkWithUsTitle')}
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-3xl drop-shadow-md">
            {t('WorkWithUsSub')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content - Two Columns */}
        <section className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Volunteering Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                  <Globe className="text-secondary" size={32} />
                  {t('VolunteeringOpp')}
                </h2>
                
                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  {t('VolunteeringText')}
                </p>

                <div>
                  <h3 className="text-lg font-serif font-bold text-secondary mb-6">{t('AreasOfContribution')}</h3>
                  <ul className="space-y-3">
                    {focusAreas.map((area, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                        <span className="font-medium text-sm">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-2xl shadow-lg p-8 md:p-10 border border-primary/10">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">{t('WhyVolunteer')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/70 p-4 rounded-lg hover:bg-white transition">
                      <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                      <span className="font-semibold text-gray-800 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image and CTA */}
            <div className="space-y-8">
              {/* Feature Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10 h-96 md:h-[500px]">
                <img 
                  src="https://i.ibb.co/bgzBFxDh/BCD360-11.jpg"
                  alt="Work With Us"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-secondary to-red-900 rounded-2xl shadow-xl p-8 md:p-10 text-white">
                <h3 className="text-2xl font-serif font-bold mb-4 text-center">{t('HowToApply')}</h3>
                <p className="text-red-100 text-center mb-6 text-sm">
                  {t('HowToApplyText')}
                </p>
                
                <div className="bg-white/15 backdrop-blur p-6 rounded-xl border border-white/30 text-center mb-6">
                  <p className="text-sm text-red-100 mb-2">Send your details to:</p>
                  <p className="text-lg md:text-xl font-mono font-bold">BCD360@proton.me</p>
                </div>

                <p className="text-xs md:text-sm text-red-100 text-center">
                  <span className="font-semibold">{t('SubjectVolunteer')}:</span> "Volunteer - Your Name"
                </p>

                <a 
                  href="mailto:BCD360@proton.me"
                  className="block mt-6 bg-white text-secondary px-6 py-3 rounded-lg font-bold text-center hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition duration-300"
                >
                  Apply Now
                </a>
              </div>

              {/* Job Openings */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-dashed border-gray-300 text-center">
                <h4 className="text-lg font-bold text-dark mb-2">{t('JobOpenings')}</h4>
                <p className="text-gray-600 text-sm">{t('NoJobOpenings')}</p>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 md:py-16 mb-8">
          <div className="bg-primary text-white rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Join BCD360 today and be part of a movement transforming lives in marginalized communities across Africa.
            </p>
            <a 
              href="mailto:BCD360@proton.me"
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition duration-300"
            >
              Get Started Today
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default WorkWithUs;