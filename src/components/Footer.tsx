import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLang();

  return (
    <footer className="oc-section pb-8">
      <div className="rounded-2xl border border-gray-700/70 bg-gray-950/55 px-5 py-4 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>{t.footer.rights}</p>
        <p className="text-gray-500">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
};

export default Footer;
