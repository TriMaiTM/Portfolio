import React from 'react';
import { useLang } from '../contexts/LanguageContext';

const skillGroups = [
  {
    key: 'frontend',
    icon: '⚛️',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'SCSS'],
    color: 'from-primary-500 to-primary-600',
    bg: 'bg-primary-50 dark:bg-primary-900/20',
    border: 'border-primary-200 dark:border-primary-800',
  },
  {
    key: 'backend',
    icon: '🔧',
    skills: ['Angular', 'Firebase', 'Node.js', 'RESTful API', 'Solidity', 'Web3.js'],
    color: 'from-accent-500 to-accent-600',
    bg: 'bg-accent-50 dark:bg-accent-900/20',
    border: 'border-accent-200 dark:border-accent-800',
  },
  {
    key: 'tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'npm'],
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
  },
];

const Skills: React.FC = () => {
  const { t } = useLang();

  const groupLabels: Record<string, string> = {
    frontend: t.skills.frontend,
    backend: t.skills.backend,
    tools: t.skills.tools,
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            <span className="text-gradient">{t.skills.title}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map(group => (
            <div key={group.key} className={`rounded-2xl p-6 border ${group.bg} ${group.border}`}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{group.icon}</span>
                <h3 className={`text-lg font-bold bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                  {groupLabels[group.key]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700/60 text-sm text-gray-700 dark:text-gray-300 font-medium font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
