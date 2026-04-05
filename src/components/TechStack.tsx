import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section className="py-10 border-b border-white/[0.05] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-center gap-12 md:gap-24 opacity-60">
        
        {/* React */}
        <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
           <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
          <span className="text-[#F2F2F2] font-semibold tracking-tight">React</span>
        </div>

        {/* TypeScript */}
        <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
          <svg viewBox="0 0 128 128" width="24" height="24">
            <path fill="#3178C6" d="M2.575 2.574h122.85v122.85H2.575z"/>
            <path fill="#FFF" d="M71.493 95.845c-2.484 2.827-6.52 5.056-12.036 5.056-9.624 0-16.764-6.38-16.764-18.067 0-11.774 7.662-18.324 18.006-18.324 4.5 0 7.915 1.542 10.149 3.597l-3.513 5.31c-2.228-1.54-5.313-2.91-8.525-2.91-6.17 0-9.625 3.942-9.625 12.33 0 7.712 3.17 12.078 9.794 12.078 3.512 0 6.6-1.543 8.31-2.913zm15.688 4.283c-5.827 0-10.796-2.57-13.623-6.6l5.228-4.282c2.056 2.91 5.312 4.968 8.653 4.968 4.113 0 6.17-1.8 6.17-4.11 0-2.74-2.312-3.684-7.368-5.31-6.684-2.143-11.738-4.884-11.738-11.48 0-6.168 5.14-11.05 12.68-11.05 4.8 0 8.568 1.97 11.226 5.226l-4.713 4.368c-1.884-2.226-4.54-3.597-7.283-3.597-3.256 0-5.57 1.8-5.57 3.854 0 2.484 2.227 3.427 6.854 4.883 7.2 2.313 12.253 4.884 12.253 11.908 0 6.51-5.14 11.224-12.768 11.224z"/>
          </svg>
          <span className="text-[#F2F2F2] font-semibold tracking-tight hidden sm:block">TypeScript</span>
        </div>

        {/* Tailwind */}
        <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
          <svg viewBox="0 0 128 128" width="24" height="24">
            <path fill="#0ed3cf" d="M32.8 33.2c-15.6 0-24 10.3-25.2 30.9 8.2-10 16.5-12.7 24.8-8.1 4.2 2.3 7.2 6.5 11.7 11.1 8 8.1 17.6 17.8 38.3 17.8 15.6 0 24-10.3 25.2-30.8-8.2 10-16.5 12.7-24.8 8.2-4.2-2.3-7.2-6.5-11.7-11.1-8-8.2-17.6-18-38.3-18zm31 38.3c15.6 0 24-10.3 25.2-30.9-8.2 10-16.5 12.7-24.8 8.1-4.2-2.3-7.2-6.5-11.7-11.1-8-8.1-17.6-17.8-38.3-17.8-15.6 0-24 10.3-25.2 30.8 8.2-10 16.5-12.7 24.8-8.2 4.2 2.3 7.2 6.5 11.7 11.1 8 8.2 17.6 18 38.3 18z"/>
          </svg>
          <span className="text-[#F2F2F2] font-semibold tracking-tight hidden md:block">Tailwind</span>
        </div>

        {/* Vercel */}
        <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
          <svg viewBox="0 0 1155 1000" width="24" height="20">
             <path fill="#fff" d="M577.34 0L1154.69 1000H0L577.34 0Z"/>
          </svg>
          <span className="text-[#F2F2F2] font-semibold tracking-tight">Vercel</span>
        </div>
        
        {/* Figma */}
        <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
          <svg viewBox="0 0 38 57" width="20" height="24">
             <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
             <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
             <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
             <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
             <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
          </svg>
          <span className="text-[#F2F2F2] font-semibold tracking-tight hidden sm:block">Figma</span>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
