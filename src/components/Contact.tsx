import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-black mb-4">
          <span className="text-gradient">{t.contact.title}</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-xl mx-auto">{t.contact.subtitle}</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <a
            href={`mailto:${t.contact.emailValue}`}
            className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md dark:hover:shadow-black/30 hover:-translate-y-0.5 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-950/50 flex items-center justify-center text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">{t.contact.emailLabel}</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{t.contact.emailValue}</p>
            </div>
          </a>

          <a
            href={t.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md dark:hover:shadow-black/30 hover:-translate-y-0.5 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700/80 flex items-center justify-center text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">{t.contact.githubLabel}</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">@TriMaiTM</p>
            </div>
          </a>
        </div>

        <a
          href={`mailto:${t.contact.emailValue}`}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold text-lg hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-primary-500/20 glow-red-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {t.contact.emailValue}
        </a>
      </div>
    </section>
  );
};

export default Contact;
