import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="oc-section">
      <div className="oc-surface p-7 sm:p-10 text-center">
        <p className="text-primary-300 text-xs tracking-[0.2em] uppercase mb-3">Connect</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.contact.title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">{t.contact.subtitle}</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
          <a
            href={`mailto:${t.contact.emailValue}`}
            className="rounded-2xl border border-gray-700 bg-gray-950/65 p-5 hover:border-primary-500/60 transition-colors"
          >
            <p className="text-xs tracking-wider uppercase text-gray-500 mb-2">{t.contact.emailLabel}</p>
            <p className="text-base text-gray-100 font-medium">{t.contact.emailValue}</p>
          </a>
          <a
            href={t.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-gray-700 bg-gray-950/65 p-5 hover:border-primary-500/60 transition-colors"
          >
            <p className="text-xs tracking-wider uppercase text-gray-500 mb-2">{t.contact.githubLabel}</p>
            <p className="text-base text-gray-100 font-medium">@TriMaiTM</p>
          </a>
        </div>

        <a
          href={`mailto:${t.contact.emailValue}`}
          className="inline-flex items-center gap-2 rounded-full px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold glow-red-sm"
        >
          {t.hero.ctaContact} →
        </a>
      </div>
    </section>
  );
};

export default Contact;
