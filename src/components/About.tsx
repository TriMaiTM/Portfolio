import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLang();

  const stats = [
    { value: '3+', label: 'Projects' },
    { value: '2+', label: t.about.yearsStudy },
    { value: '5+', label: 'Technologies' },
    { value: '24/7', label: t.about.learning },
  ];

  return (
    <section id="about" className="oc-section">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-stretch">
        <article className="oc-surface p-7 sm:p-9 space-y-6">
          <p className="text-primary-300 text-sm tracking-[0.2em] uppercase">{t.nav.about}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.about.title}</h2>
          <p className="text-gray-300 leading-relaxed">{t.about.p1}</p>
          <p className="text-gray-400 leading-relaxed">{t.about.p2}</p>
        </article>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="oc-surface p-5 text-center flex flex-col justify-center min-h-[130px]">
              <p className="text-3xl font-bold oc-title">{stat.value}</p>
              <p className="text-xs tracking-widest uppercase text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
