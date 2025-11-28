import React from 'react';
import { Project } from '../types/types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
      href={project.url}
      className="group block bg-white rounded-xl overflow-hidden border border-[#E0E0E0] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out h-full flex flex-col"
      aria-label={`View project: ${project.name}`}
    >
      {/* Image Container with Ratio Aspect */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
        <img 
          src={project.imageUrl} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay effect on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#757575]">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-[#424242] mb-3 group-hover:text-[#2196F3] transition-colors">
          {project.name}
        </h3>
        
        <p className="text-[#424242] text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* CTA */}
        <div className="flex items-center text-[#2196F3] font-semibold text-sm mt-auto">
          <span>View Website</span>
          <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </a>
  );
};