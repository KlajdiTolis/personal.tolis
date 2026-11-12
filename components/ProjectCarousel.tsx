import React, { useState } from 'react';
import { Project } from '../types';

interface AppIconProps {
  src?: string;
  name: string;
  size?: 'sm' | 'md';
}

export const AppIcon: React.FC<AppIconProps> = ({ src, name, size = 'md' }) => {
  const [failed, setFailed] = useState(false);
  const dims = size === 'sm' ? 'w-7 h-7 rounded-md text-[10px]' : 'w-10 h-10 rounded-lg text-xs';
  const initials = name
    .split(/[\s.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

  return (
    <div
      className={`${dims} flex-shrink-0 flex items-center justify-center overflow-hidden bg-zinc-900 border border-zinc-800 font-semibold text-zinc-300`}
    >
      {src && !failed ? (
        <img
          src={src}
          alt={`${name} icon`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-contain p-1"
        />
      ) : (
        initials
      )}
    </div>
  );
};

interface ProjectCarouselProps {
  projects: Project[];
  logo?: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, logo }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
      {projects.map((project) => (
        <div
          key={project.title}
          className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-600 transition-colors"
        >
          <div className="flex items-center gap-3 mb-2">
            <AppIcon src={project.image || logo} name={project.title} />
            <h4 className="text-base font-semibold text-white leading-tight">{project.title}</h4>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-3">{project.description}</p>
          {project.specs && project.specs.length > 0 && (
            <ul className="space-y-1.5">
              {project.specs.map((spec) => (
                <li key={spec} className="flex items-start text-xs text-zinc-300">
                  <span className="mr-2 mt-1.5 w-1 h-1 bg-zinc-500 rounded-full flex-shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
