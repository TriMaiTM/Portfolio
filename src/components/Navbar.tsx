import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLang } from '../contexts/LanguageContext';

const SCROLL_THRESHOLD = 18;

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <div
        className={`oc-section transition-all duration-300 rounded-2xl border ${
          scrolled ? 'border-gray-700/80 bg-gray-950/70 shadow-[0_12px_40px_rgba(0,0,0,0.45)]' : 'border-gray-700/45 bg-gray-950/45'
        } backdrop-blur-xl`}
      >
        <div className="flex h-14 items-center justify-between px-4">
          <a href="#hero" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/90 text-sm font-bold text-white glow-red-sm">MT</span>
            <span className="text-lg font-bold oc-title">TriMai</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gray-300 hover:text-primary-300 transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="h-9 px-3 rounded-full border border-gray-700 bg-gray-900/90 text-xs font-semibold text-gray-200 hover:border-primary-500/60"
            >
              {lang === 'vi' ? 'EN' : 'VI'}
            </button>
            <button
              onClick={toggleTheme}
              className="h-9 w-9 rounded-full border border-gray-700 bg-gray-900/90 text-gray-200 hover:border-primary-500/60"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden h-9 w-9 rounded-full border border-gray-700 bg-gray-900/90 text-gray-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-700/80 px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-gray-200 hover:bg-gray-800/80"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
