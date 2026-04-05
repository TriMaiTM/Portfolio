import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const skillGroups = [
  {
    key: 'frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'SCSS'],
  },
  {
    key: 'backend',
    skills: ['Angular', 'Firebase', 'Node.js', 'RESTful API', 'Solidity', 'Web3.js'],
  },
  {
    key: 'tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'npm'],
  },
];

const Skills: React.FC = () => {
  const { t } = useLang();

  const labels: Record<string, string> = {
    frontend: t.skills.frontend,
    backend: t.skills.backend,
    tools: t.skills.tools,
  };

  return (
    <section id="skills" className="oc-section py-24">
      <div className="oc-surface p-8 sm:p-10">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#F2F2F2]">{t.skills.title}</h2>
          <span className="text-[10px] font-medium tracking-widest uppercase text-[#8A8F98]/70">Stack</span>
        </div>

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <article key={group.key} className="flex flex-col sm:flex-row gap-6 sm:gap-12 py-6 border-t border-white/[0.08] first:border-0 first:pt-0">
              <h3 className="w-32 shrink-0 text-sm font-medium text-[#F2F2F2] pt-1">
                {labels[group.key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-md text-xs font-medium border border-white/[0.08] bg-white/[0.02] text-[#8A8F98]">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
