import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="hero" className="oc-section">
      <div className="oc-surface px-6 sm:px-10 py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-primary-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl space-y-7">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-primary-400/50 bg-primary-500/20 text-3xl glow-red">🤖</div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold oc-title">{t.hero.name}</h1>

          <p className="text-sm sm:text-base tracking-[0.28em] uppercase text-primary-300/90">{t.hero.title}</p>

          <p className="text-gray-300 text-lg leading-relaxed">{t.hero.subtitle}</p>

          <div className="mx-auto max-w-2xl rounded-full border border-gray-700 bg-gray-950/65 px-5 py-3 text-sm text-gray-200">
            <span className="mr-2 rounded-full bg-primary-500 px-2 py-1 text-[10px] font-bold text-white">NEW</span>
            {t.hero.greeting} {t.hero.name} — {t.hero.highlight}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#projects" className="px-7 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold hover:opacity-90 glow-red-sm">
              {t.hero.ctaProjects}
            </a>
            <a href="#contact" className="px-7 py-3 rounded-full border border-gray-600 text-gray-100 font-semibold hover:border-primary-500/70 hover:text-primary-300">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
