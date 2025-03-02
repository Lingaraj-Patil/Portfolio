import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-blue-500/50">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-4 text-sm">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Github size={18} />
              </a>
            )}
          </div>
          
          <a 
            href={project.liveUrl || project.githubUrl || '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-blue-500 hover:text-blue-400 font-medium"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;