import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="py-32">
      <div className="max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">
        
        <h2 className="text-4xl sm:text-[56px] leading-[1.1] font-medium tracking-tight text-[#F2F2F2] mb-10 max-w-2xl">
          Built for the future.<br/>
          <span className="text-[#8A8F98]">Available today.</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={`mailto:${t.contact.emailValue}`}
            className="linear-button h-11 px-6 w-full sm:w-auto"
          >
            {t.contact.sendEmail || 'Contact me'}
          </a>
          <a
            href={t.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="linear-button-secondary h-11 px-6 w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#222]"
          >
            View GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
