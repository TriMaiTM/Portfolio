import React from 'react';
import type { Project } from '../data/projects';
import { useLang } from '../contexts/LanguageContext';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { lang, t } = useLang();

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-48 bg-gradient-to-br from-primary-500/8 to-accent-500/8 dark:from-primary-900/25 dark:to-accent-900/20 flex items-center justify-center border-b border-gray-100 dark:border-gray-700/40">
        <span className="text-8xl group-hover:scale-110 transition-transform duration-300">{project.image}</span>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,92,92,0.04),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,92,92,0.06),transparent_70%)]" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
          {project.description[lang]}
        </p>

        <div className="mb-5">
          <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-2">{t.projects.techStack}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map(tech => (
              <span key={tech} className="px-2 py-1 text-xs rounded-md bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/50 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm shadow-primary-500/15"
          >
            {t.projects.viewProject}
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex items-center"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
