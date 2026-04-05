import React from 'react';
import { useLang } from '../contexts/LanguageContext';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="projects" className="oc-section">
      <div className="space-y-6">
        <div className="oc-surface p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-primary-300 text-xs tracking-[0.2em] uppercase mb-2">Selected Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold">{t.projects.title}</h2>
          </div>
          <a href="#contact" className="text-sm text-primary-300 hover:text-primary-200">Let's collaborate →</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
