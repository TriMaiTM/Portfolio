import React, { useEffect, useState } from 'react';
import { useLang } from '../contexts/LanguageContext';

const SCROLL_THRESHOLD = 18;

const Navbar: React.FC = () => {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' }, // Hardcoded English visually for consistency or use translation if you want, but Linear uses English for headers.
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass' : 'bg-transparent border-b border-white/[0.08]'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex h-[52px] items-center justify-between">
          
          <div className="flex-1 flex items-center justify-start">
            <button
              onClick={toggleLang}
              className="text-[13px] font-medium text-[#8A8F98] hover:text-[#F2F2F2] transition-colors"
            >
              {lang === 'vi' ? 'EN' : 'VI'}
            </button>
          </div>

          <div className="hidden md:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[13px] font-medium text-[#8A8F98] hover:text-[#F2F2F2] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex-1 flex items-center justify-end">
             <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden text-[#8A8F98] hover:text-[#F2F2F2]"
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/[0.08] glass px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-[13px] font-medium text-[#8A8F98] hover:text-[#F2F2F2]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
