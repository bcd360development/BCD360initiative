import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { useLanguage } from '../LanguageContext';

const ImpactChart: React.FC = () => {
  const { language, t } = useLanguage();

  const data = [
    { name: language === 'EN' ? 'Econ. Justice' : 'Just. Éco.', count: 151, color: '#699232' }, 
    { name: language === 'EN' ? 'Healthcare' : 'Santé', count: 424, color: '#0A4B8E' }, 
    { name: language === 'EN' ? 'Social Justice' : 'Just. Soc.', count: 210, color: '#BC1916' }, 
    { name: language === 'EN' ? 'Environment' : 'Environ.', count: 322, color: '#4d7c0f' }, 
  ];

  return (
    <div className="w-full h-[500px] bg-white p-4 md:p-6 rounded-xl shadow-lg border-t-4 border-primary">
      <h3 className="text-xl font-serif font-bold text-gray-800 mb-4 text-center">{t('LivesImpacted')}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: -20,
            bottom: 70,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="name" 
            tick={{fontSize: 11, fill: '#4b5563'}} 
            interval={0}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis tick={{fontSize: 12, fill: '#4b5563'}} />
          <Tooltip 
            cursor={{fill: 'transparent'}}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend 
            verticalAlign="top" 
            height={36}
            wrapperStyle={{ paddingBottom: '10px' }}
            payload={data.map(item => ({
              id: item.name,
              type: 'square',
              value: item.name,
              color: item.color
            }))}
          />
          <Bar dataKey="count" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ImpactChart;