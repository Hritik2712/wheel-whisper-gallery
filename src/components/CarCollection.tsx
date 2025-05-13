
import React, { useState, useRef } from 'react';
import { cars } from '../data/cars';
import CarCard from './CarCard';
import CarDetailModal from './CarDetailModal';
import FilterBar from './FilterBar';

const CarCollection: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const collectionRef = useRef<HTMLDivElement>(null);
  
  const filteredCars = cars.filter(car => {
    // Filter by category
    const categoryMatch = selectedCategory === 'all' || car.category === selectedCategory;
    
    // Filter by search query
    const searchLower = searchQuery.toLowerCase();
    const searchMatch = searchQuery === '' || 
      car.name.toLowerCase().includes(searchLower) || 
      car.brand.toLowerCase().includes(searchLower);
    
    return categoryMatch && searchMatch;
  });
  
  const handleCarClick = (car: any) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };
  
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  return (
    <div className="container py-16" id="collection" ref={collectionRef}>
      <h2 className="section-title">Our Collection</h2>
      <p className="section-subtitle">
        Explore our handpicked selection of premium vehicles, from cutting-edge electric cars to timeless classics.
      </p>
      
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onSearchChange={setSearchQuery}
      />
      
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onClick={() => handleCarClick(car)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-gray-500">No cars found matching your criteria</h3>
          <p className="mt-2 text-gray-400">Try adjusting your filters or search terms</p>
          <button 
            className="mt-6 btn-outline"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
      
      <CarDetailModal
        car={selectedCar}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default CarCollection;
