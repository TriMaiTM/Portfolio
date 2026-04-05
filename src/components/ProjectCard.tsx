import React from 'react';
import type { Project } from '../data/projects';
import { useLang } from '../contexts/LanguageContext';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { lang, t } = useLang();

  return (
    <article className="rounded-3xl border border-gray-700/70 bg-gray-900/60 backdrop-blur-md overflow-hidden h-full flex flex-col">
      <div className="relative h-40 flex items-center justify-center border-b border-gray-700/60 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <span className="text-7xl">{project.image}</span>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,92,92,0.16),transparent_65%)]" />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-1">{project.description[lang]}</p>

        <p className="text-[11px] tracking-[0.16em] uppercase text-gray-500 mb-2">{t.projects.techStack}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-full text-[11px] border border-gray-700 bg-gray-950/80 text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center rounded-xl py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold hover:opacity-90"
          >
            {t.projects.viewProject}
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-3 py-2.5 border border-gray-700 text-gray-200 hover:border-primary-500/70"
              aria-label="View source code"
              title={t.projects.viewCode}
            >
              ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
