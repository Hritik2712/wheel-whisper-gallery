
import React from 'react';
import type { Car } from '../data/cars';
import { Car as CarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  return (
    <div 
      className="car-card group animate-enter cursor-pointer"
      onClick={onClick}
    >
      <div className="car-image-container">
        <img 
          src={car.images[0]} 
          alt={`${car.brand} ${car.name}`} 
          className="car-image"
          loading="lazy"
        />
        {car.badge && (
          <span className="car-badge">
            {car.badge}
          </span>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-serif text-xl font-semibold">{car.name}</h3>
          <span className="text-car-accent font-medium">{car.price}</span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span className="mr-3">{car.brand}</span>
          <span className="mr-3">•</span>
          <span>{car.year}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {car.category.charAt(0).toUpperCase() + car.category.slice(1)}
          </span>
          
          <Button
            variant="ghost" 
            size="sm"
            className="text-car-accent hover:bg-car-accent/10 hover:text-car-accent"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            <CarIcon size={16} className="mr-1" />
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
