
import React, { useState } from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, className }) => {
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoomed) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setPosition({ x, y });
  };

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  return (
    <div 
      className={`relative overflow-hidden cursor-zoom-in group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div 
        className={`transition-all duration-300 ease-out ${zoomed ? 'scale-150' : 'scale-100'}`}
        style={zoomed ? { transformOrigin: `${position.x}% ${position.y}%` } : {}}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <button 
        onClick={toggleZoom} 
        className="absolute bottom-3 right-3 p-2 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        {zoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
      </button>
    </div>
  );
};

export default ZoomableImage;
