import React from 'react';
import { useLang } from '../contexts/LanguageContext';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            <span className="text-gradient">{t.projects.title}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
