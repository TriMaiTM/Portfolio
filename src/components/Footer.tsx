import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLang();

  return (
    <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-700/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500 dark:text-gray-500">{t.footer.rights}</p>
        <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-600 font-mono">
          <span>{t.footer.builtWith}</span>
          <span>⚡</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
