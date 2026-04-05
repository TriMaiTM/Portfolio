import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

type Lang = 'vi' | 'en';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) || 'vi';
  });

  const toggleLang = () => {
    setLang(l => {
      const next = l === 'vi' ? 'en' : 'vi';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};
