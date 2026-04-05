import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-primary-50 to-accent-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-400/20 dark:bg-accent-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-300/10 dark:bg-primary-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8 border border-primary-200 dark:border-primary-800 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce-slow" />
          Available for Internship
        </div>

        <p className="text-xl text-gray-500 dark:text-gray-400 mb-2 animate-slide-up">{t.hero.greeting}</p>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient">{t.hero.name}</span>
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">{t.hero.title}</h2>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500" />
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-primary-500/25"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-105 transition-all duration-200"
          >
            {t.hero.ctaContact}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {['React', 'TypeScript', 'Angular', 'Firebase', 'Tailwind CSS'].map(tech => (
            <span key={tech} className="px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce-slow">
        <span className="text-xs">{t.hero.scrollDown}</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
