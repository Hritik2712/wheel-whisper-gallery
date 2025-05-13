
import React, { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import CarCollection from '@/components/CarCollection';
import { cars } from '@/data/cars';

const Index: React.FC = () => {
  const [featuredCar, setFeaturedCar] = useState(cars[0]);
  
  useEffect(() => {
    // Find a featured car or use the first car
    const featured = cars.find(car => car.featured) || cars[0];
    setFeaturedCar(featured);
  }, []);
  
  const scrollToCollection = () => {
    const collectionElement = document.getElementById('collection');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-car-primary/80 to-transparent">
        <div className="container mx-auto flex items-center justify-between py-6">
          <div className="text-white font-serif text-2xl font-bold">EliteCars</div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#collection" className="text-white/90 hover:text-white transition-colors">Collection</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">About</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Contact</a>
          </nav>
          <button className="btn-primary hidden md:block">Join Waitlist</button>
        </div>
      </header>
      
      <main>
        <Hero featuredCar={featuredCar} onViewCollection={scrollToCollection} />
        <CarCollection />
      </main>
      
      <footer className="bg-car-primary text-white py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">EliteCars</h3>
              <p className="text-gray-400">
                Discover the world's most extraordinary automobiles curated for enthusiasts and collectors alike.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#collection" className="text-gray-400 hover:text-white transition-colors">Collection</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sports Cars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Luxury Cars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Classic Cars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Electric Cars</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to receive updates on new arrivals and special offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md bg-white/10 text-white border-none focus:outline-none flex-1"
                />
                <button className="bg-car-accent text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © 2025 EliteCars. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
