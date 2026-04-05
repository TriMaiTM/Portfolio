import React from 'react';
import type { Project } from '../data/projects';
import { useLang } from '../contexts/LanguageContext';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { lang, t } = useLang();

  return (
    <article className="oc-surface overflow-hidden flex flex-col hover:bg-surface-hover transition-colors">
      <div className="relative h-48 flex items-center justify-center border-b border-white/[0.08] bg-[#0A0A0A]">
        <span className="text-7xl">{project.image}</span>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-medium text-[#F2F2F2] mb-3">{project.title}</h3>
        <p className="text-sm text-[#8A8F98] leading-relaxed mb-6 flex-1">{project.description[lang]}</p>

        <p className="text-[10px] font-medium tracking-widest uppercase text-[#8A8F98]/70 mb-3">{t.projects.techStack}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded border border-white/[0.08] bg-white/[0.02] text-[#8A8F98] text-[11px] font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 linear-button"
          >
            {t.projects.viewProject}
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="linear-button-secondary border-none"
              aria-label="View source code"
              title={t.projects.viewCode}
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
