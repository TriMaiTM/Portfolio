import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const skillGroups = [
  {
    key: 'frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'SCSS'],
    accent: 'from-primary-500 to-primary-300',
  },
  {
    key: 'backend',
    skills: ['Angular', 'Firebase', 'Node.js', 'RESTful API', 'Solidity', 'Web3.js'],
    accent: 'from-accent-500 to-accent-300',
  },
  {
    key: 'tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'npm'],
    accent: 'from-primary-400 to-accent-400',
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
    <section id="skills" className="oc-section">
      <div className="oc-surface p-7 sm:p-9">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold">{t.skills.title}</h2>
          <span className="text-xs tracking-[0.2em] uppercase text-gray-400">Stack</span>
        </div>

        <div className="space-y-4">
          {skillGroups.map((group) => (
            <article key={group.key} className="rounded-2xl border border-gray-700/60 bg-gray-950/55 p-5">
              <h3 className={`text-lg font-semibold mb-3 bg-gradient-to-r ${group.accent} bg-clip-text text-transparent`}>
                {labels[group.key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-full text-sm border border-gray-700 bg-gray-900/90 text-gray-200">
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
