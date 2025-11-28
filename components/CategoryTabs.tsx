import React from 'react';
import { CategoryType, CATEGORIES } from '../types/types';

interface CategoryTabsProps {
  activeCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="w-full mb-12 border-b border-[#E0E0E0] overflow-x-auto no-scrollbar">
      <div className="flex space-x-8 min-w-max px-2">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`
                pb-4 text-sm font-semibold transition-all duration-200 relative
                ${isActive ? 'text-[#2196F3]' : 'text-[#424242] hover:text-[#2196F3]'}
              `}
            >
              {category}
              {/* Active Indicator */}
              <span 
                className={`
                  absolute bottom-0 left-0 w-full h-[3px] bg-[#2196F3] rounded-t-sm transition-opacity duration-200
                  ${isActive ? 'opacity-100' : 'opacity-0'}
                `} 
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};