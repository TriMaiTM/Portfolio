import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLang();

  const stats = [
    { value: '3+', label: 'Projects' },
    { value: '2+', label: t.about.yearsStudy },
    { value: '5+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-700/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 p-1 glow-red">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-950 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-3 py-2 border border-gray-100 dark:border-gray-700/60">
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">Frontend Dev</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-3 py-2 border border-gray-100 dark:border-gray-700/60">
                <span className="text-sm font-semibold text-accent-600 dark:text-accent-400">3 Projects</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gradient">{t.about.title}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{t.about.p1}</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">{t.about.p2}</p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map(stat => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700/60">
                  <div className="text-2xl font-black text-gradient">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
