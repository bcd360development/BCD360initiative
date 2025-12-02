import React from 'react';
import { Target, Shield, Users, Globe, BookOpen, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const objectives = [
    { title: 'Advocacy', text: 'Provide collaborative support for surviving and thriving by amplifying the voice and power of the most vulnerable while championing human rights.', icon: <Users className="w-6 h-6" /> },
    { title: 'Capacity Building', text: 'Be a recognized thought leader and knowledge partner for locally driven research solutions.', icon: <BookOpen className="w-6 h-6" /> },
    { title: 'Research', text: 'Pioneer cutting-edge data tools and methods, conduct multidisciplinary research, and systematically build bodies of evidence.', icon: <Target className="w-6 h-6" /> },
    { title: 'Service Development', text: 'Catalyze the use of evidence-based tools and scale-up availability, access and uptake of relevant services for the well-being of the most vulnerable.', icon: <Shield className="w-6 h-6" /> },
    { title: 'Economic Empowerment', text: 'Catalyze the economic development and self-reliance of the most vulnerable.', icon: <Briefcase className="w-6 h-6" /> },
    { title: 'Sustainability', text: 'Grow the next generation of refined leaders that pioneer solutions for resilience, driving transformational change from the grassroots to the global level.', icon: <Globe className="w-6 h-6" /> },
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Who We Are</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Born out of the urgent need to support marginalised individuals in the hinterlands and suburbs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-24 relative z-10 mb-16">
          <h2 className="text-3xl font-serif font-bold text-dark mb-6">Our History</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            BCD360 has evolved into an inclusive centre for the development of young persons and marginalized women. 
            Focusing particularly on infectious disease prevention and control, involving evidence generation, advocacy and empowerment. 
            We leverage unique expertise and collaborate with partners including funding bodies, governments, service providers, and civil society organizations.
          </p>
        </div>

        {/* Objectives */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-dark mb-10 text-center">Our Strategic Objectives</h2>
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
           <h2 className="text-3xl font-serif font-bold mb-12">Core Values</h2>
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