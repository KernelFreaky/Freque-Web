import React, { useState, useMemo } from 'react';
import { CategoryType } from '../types/types';
import { PROJECTS_DATA } from '@/types/constant';
import { ProjectCard } from '../components/ProjectCard';
import { CategoryTabs } from '../components/CategoryTabs';
import { Contact } from './Contact';
import { ProjectNavbar } from './ProjectNav';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
        <ProjectNavbar/>
        
        <div className="min-h-screen bg-white flex flex-col">
            {/* Main Content Area */}
            <main className="flex-grow pt-20 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1140px] mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#424242] tracking-tight">
                    Recent Island Projects
                    </h1>
                    <p className="text-lg md:text-xl text-[#757575] max-w-2xl mx-auto font-light">
                    Showcasing websites we've built for local businesses.
                    </p>
                </div>

                {/* Filter Tabs */}
                <CategoryTabs 
                    activeCategory={activeCategory} 
                    onSelectCategory={setActiveCategory} 
                />

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="h-full">
                        <ProjectCard project={project} />
                        </div>
                    ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-[#757575]">
                    <p className="text-lg">No projects found in this category.</p>
                    </div>
                )}
                
                </div>
            </main>
        </div>

        <Contact/>
    </>
  );
};