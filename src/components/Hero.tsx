
import React from 'react';
import { Car } from '../data/cars';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  featuredCar: Car;
  onViewCollection: () => void;
}

const Hero: React.FC<HeroProps> = ({ featuredCar, onViewCollection }) => {
  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden mb-16">
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-car-primary/80 to-car-primary/30 z-10" />
        <img
          src={featuredCar.images[0]}
          alt={`${featuredCar.brand} ${featuredCar.name}`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Hero content */}
      <div className="container relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-white mb-2 opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            Discover Extraordinary
          </h1>
          <div className="text-sm md:text-base uppercase tracking-wider text-car-accent font-bold mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            Premium Car Collection
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20 opacity-0 animate-fade-in" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
            <div className="flex items-center">
              <div className="mr-auto">
                <h2 className="text-white text-xl md:text-3xl font-serif mb-2">
                  {featuredCar.brand} {featuredCar.name}
                </h2>
                <p className="text-gray-200">{featuredCar.year} • {featuredCar.price}</p>
              </div>
              
              <div className="hidden md:block">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-car-accent text-white">
                  Featured
                </span>
              </div>
            </div>
            
            <p className="mt-4 text-gray-300 line-clamp-3">
              {featuredCar.description}
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onViewCollection}
                className="bg-car-accent hover:bg-car-accent/90 text-white flex items-center justify-center sm:justify-start gap-2"
              >
                View Collection
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
