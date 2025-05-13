
import React from 'react';
import { carCategories } from '../data/cars';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (search: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  selectedCategory, 
  onCategoryChange,
  onSearchChange
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 w-full">
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {carCategories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.value
                ? 'bg-car-accent text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="w-full md:w-64">
        <input
          type="text"
          placeholder="Search cars..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-car-accent"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterBar;
