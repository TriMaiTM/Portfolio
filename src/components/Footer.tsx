import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLang();

  return (
    <footer className="oc-section pb-12 pt-4">
      <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#8A8F98]">
        <p>{t.footer.rights} Tri Mai</p>
        <p className="opacity-70 flex items-center gap-2">
          {t.footer.builtWith} <span className="inline-flex h-4 w-4 bg-white/[0.08] border border-white/[0.08] rounded-full items-center justify-center text-[8px] text-white">M</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
