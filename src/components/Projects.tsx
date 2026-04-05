import React, { useState } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const { lang, t } = useLang();
  const [activeIndex, setActiveIndex] = useState(1); // Middle project active by default

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="projects" className="py-24 border-b border-white/[0.05] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
        <h2 className="text-[32px] md:text-[44px] font-medium tracking-tight mb-4">
          Make product operations self-driving
        </h2>
        <p className="text-xl text-[#8A8F98] max-w-2xl mx-auto">
          Turn conversations and requirements into actionable, pixel-perfect frontend experiences routed and prioritized for production.
        </p>
      </div>

      <div className="relative max-w-[1200px] mx-auto h-[500px] flex items-center justify-center">
        {projects.map((project, index) => {
          // Calculate relative position to active index
          const diff = index - activeIndex;
          
          let translateX = '0%';
          let scale = 1;
          let zIndex = 10;
          let opacity = 1;
          let blur = 'blur-none';

          if (diff === 0) {
            translateX = '0%';
            scale = 1;
            zIndex = 30;
            opacity = 1;
            blur = 'blur-none';
          } else if (diff === -1 || (diff === 2)) {
            // Left card (or if active is 0, the last card is left)
            translateX = '-60%';
            scale = 0.85;
            zIndex = 20;
            opacity = 0.4;
            blur = 'blur-sm';
          } else if (diff === 1 || (diff === -2)) {
            // Right card
            translateX = '60%';
            scale = 0.85;
            zIndex = 20;
            opacity = 0.4;
            blur = 'blur-sm';
          }

          const isActive = diff === 0;

          return (
            <div
              key={project.id}
              onClick={() => handleCardClick(index)}
              className={`absolute top-0 w-full max-w-[700px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${blur}`}
              style={{
                transform: `translateX(${translateX}) scale(${scale})`,
                zIndex,
                opacity,
              }}
            >
              <div className={`rounded-xl border border-white/[0.08] bg-[#0A0A0A] mac-window-shadow overflow-hidden flex flex-col h-[460px] ${isActive ? 'hover:border-white/[0.2]' : ''} transition-colors duration-300`}>
                
                {/* Mac Toolbar */}
                <div className="h-10 bg-[#141414] border-b border-white/[0.05] flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ED6A5E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F4BF4F]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#61C554]"></div>
                  <div className="ml-4 text-xs text-[#8A8F98] truncate">{project.title}</div>
                </div>

                <div className="flex-1 p-8 flex flex-col relative">
                   <div className="absolute top-4 right-4 text-6xl opacity-20">{project.image}</div>
                   
                   <h3 className="text-2xl font-medium text-[#F2F2F2] mb-4">{project.title}</h3>
                   <p className="text-[#8A8F98] leading-relaxed mb-8 max-w-lg">
                      {project.description[lang]}
                   </p>

                   <div className="mt-auto">
                     <p className="text-[10px] font-medium tracking-widest uppercase text-[#8A8F98]/70 mb-3">{t.projects.techStack}</p>
                     <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2.5 py-1 rounded border border-white/[0.08] bg-white/[0.02] text-[#8A8F98] text-[11px] font-medium">
                            {tech}
                          </span>
                        ))}
                     </div>
                     
                     {isActive && (
                       <div className="flex gap-3">
                         <a href={project.link} target="_blank" rel="noopener noreferrer" className="linear-button px-6 h-10" onClick={(e) => e.stopPropagation()}>
                           {t.projects.viewProject}
                         </a>
                         {project.github && (
                           <a href={project.github} target="_blank" rel="noopener noreferrer" className="linear-button-secondary px-6 h-10 border-none" onClick={(e) => e.stopPropagation()}>
                             Source
                           </a>
                         )}
                       </div>
                     )}
                   </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
