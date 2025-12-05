import React, { useState } from 'react';
import { Heart, Copy, Check, Building2, DollarSign, TrendingUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const SupportOurWork: React.FC = () => {
  const { t } = useLanguage();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const bankDetails = [
    {
      id: 1,
      bank: 'First Bank of Nigeria',
      accountName: 'Beam Community Development 360 Initiative',
      accountNumber: '2046466529',
      currency: 'Naira',
      symbol: '₦',
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      hoverBg: 'hover:shadow-2xl hover:scale-105 hover:from-green-100 hover:to-green-200',
      details: []
    },
    {
      id: 2,
      bank: 'First Bank of Nigeria',
      accountName: 'Beam Community Development 360 Initiative',
      accountNumber: '2046482460',
      currency: 'USD',
      symbol: '$',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      hoverBg: 'hover:shadow-2xl hover:scale-105 hover:from-blue-100 hover:to-blue-200',
      details: [
        { label: 'Swift Code', value: 'FBNINGLAXXX' },
        { label: 'Routing Number', value: '011150000' }
      ]
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const impactAreas = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare',
      description: 'Infectious disease prevention and control initiatives'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Community Development',
      description: 'Economic empowerment for marginalized women and youth'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Sustainable Impact',
      description: 'Evidence generation and advocacy for lasting change'
    },
  ];

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://i.ibb.co/V0cmY1B3/d81f5a92-f42c-4f43-936c-d4b4ed6a764e.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/75 to-dark/40"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 border-2 border-secondary">
            <Heart size={32} className="text-secondary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 drop-shadow-lg">
            Support Our Work
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl drop-shadow-md">
            Your generous support enables us to transform lives in marginalized communities
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Impact Areas */}
        <section className="py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-dark mb-12">Where Your Support Goes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-secondary hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-secondary mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bank Details Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-dark mb-16">
              Bank Transfer Details
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {bankDetails.map((detail, index) => (
                <div
                  key={detail.id}
                  className={`bg-gradient-to-br ${detail.color} rounded-2xl shadow-lg p-8 md:p-10 border-2 ${detail.borderColor} transition-all duration-300 ${detail.hoverBg} group cursor-pointer`}
                >
                  {/* Currency Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <DollarSign size={20} className={detail.textColor} />
                      </div>
                      <span className={`text-2xl font-bold ${detail.textColor}`}>{detail.currency}</span>
                    </div>
                    <span className="text-4xl font-bold text-gray-300 group-hover:text-gray-400 transition">{detail.symbol}</span>
                  </div>

                  {/* Bank Name */}
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Building2 size={24} className={detail.textColor} />
                    {detail.bank}
                  </h3>

                  {/* Account Details */}
                  <div className="space-y-6">
                    {/* Account Name */}
                    <div className="bg-white/60 backdrop-blur p-4 rounded-xl hover:bg-white/80 transition">
                      <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Account Name</p>
                      <p className="text-gray-800 font-semibold">{detail.accountName}</p>
                    </div>

                    {/* Account Number */}
                    <div
                      onClick={() => handleCopy(detail.accountNumber, detail.id)}
                      className="bg-white/60 backdrop-blur p-4 rounded-xl hover:bg-white/80 transition group/item cursor-pointer"
                    >
                      <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider flex items-center justify-between">
                        <span>Account Number</span>
                        {copiedIndex === detail.id ? (
                          <span className={`flex items-center gap-1 ${detail.textColor}`}>
                            <Check size={16} /> Copied!
                          </span>
                        ) : (
                          <Copy size={16} className="opacity-0 group-hover/item:opacity-100 transition" />
                        )}
                      </p>
                      <p className="text-gray-800 font-mono font-bold text-lg">{detail.accountNumber}</p>
                    </div>

                    {/* Additional Details */}
                    {detail.details.length > 0 && (
                      <div className="space-y-3 pt-4 border-t border-white/40">
                        {detail.details.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleCopy(item.value, detail.id + 10 + idx)}
                            className="bg-white/60 backdrop-blur p-3 rounded-lg hover:bg-white/80 transition group/item cursor-pointer"
                          >
                            <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider flex items-center justify-between">
                              <span>{item.label}</span>
                              {copiedIndex === detail.id + 10 + idx ? (
                                <span className={`flex items-center gap-1 ${detail.textColor}`}>
                                  <Check size={14} />
                                </span>
                              ) : (
                                <Copy size={14} className="opacity-0 group-hover/item:opacity-100 transition" />
                              )}
                            </p>
                            <p className="text-gray-800 font-mono font-bold">{item.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Copy All Button */}
                  <button
                    onClick={() => {
                      const allInfo = `${detail.bank}\nAccount Name: ${detail.accountName}\nAccount Number: ${detail.accountNumber}\n${detail.details.map(d => `${d.label}: ${d.value}`).join('\n')}`;
                      handleCopy(allInfo, detail.id + 100);
                    }}
                    className="w-full mt-6 bg-white/80 hover:bg-white text-gray-800 font-semibold py-3 rounded-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    {copiedIndex === detail.id + 100 ? (
                      <>
                        <Check size={18} /> All Details Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={18} /> Copy All Details
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Info Message */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-gray-700 text-base md:text-lg mb-2">
                <span className="font-semibold text-primary">100% Transparent</span> - Every donation is tracked and reported
              </p>
              <p className="text-gray-600 text-sm">
                For donation inquiries or to discuss partnership opportunities, contact us at <a href="mailto:BCD360@proton.me" className="text-secondary font-bold hover:underline">BCD360@proton.me</a>
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 mb-8">
          <div className="bg-gradient-to-r from-secondary via-red-700 to-secondary rounded-3xl shadow-2xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Every Contribution Matters</h2>
            <p className="text-red-100 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether it's a small donation or a corporate partnership, your support helps us reach more marginalized communities and create sustainable change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:BCD360@proton.me"
                className="inline-block bg-white text-secondary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="/contact"
                className="inline-block bg-white/20 text-white border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/30 transform hover:-translate-y-1 transition duration-300 backdrop-blur"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SupportOurWork;
