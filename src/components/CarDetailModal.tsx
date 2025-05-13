
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car } from '../data/cars';
import ZoomableImage from './ZoomableImage';
import { Image, Car as CarIcon } from 'lucide-react';

interface CarDetailModalProps {
  car: Car | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CarDetailModal: React.FC<CarDetailModalProps> = ({ 
  car, 
  open, 
  onOpenChange 
}) => {
  if (!car) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-serif">
            {car.brand} {car.name} <span className="text-car-accent">{car.year}</span>
          </DialogTitle>
          <DialogDescription className="text-lg font-medium text-car-muted">
            {car.price}
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="gallery" className="mt-6">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="gallery" className="flex items-center">
              <Image className="w-4 h-4 mr-2" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="specs" className="flex items-center">
              <CarIcon className="w-4 h-4 mr-2" />
              Specifications
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="gallery" className="space-y-4">
            {car.images.map((image, index) => (
              <ZoomableImage 
                key={index} 
                src={image} 
                alt={`${car.brand} ${car.name} - Image ${index + 1}`}
                className="w-full h-80 md:h-96 rounded-lg"
              />
            ))}
          </TabsContent>
          
          <TabsContent value="specs">
            <div className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{car.description}</p>
              </div>
              
              <h4 className="font-serif text-xl font-medium mt-8 mb-4">Technical Specifications</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between border-b pb-2">
                    <span className="text-gray-600 font-medium">{spec.name}</span>
                    <span className="text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end gap-4 mt-6">
          <button className="btn-outline">
            Schedule Test Drive
          </button>
          <button className="btn-primary">
            Inquire About This Car
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarDetailModal;
