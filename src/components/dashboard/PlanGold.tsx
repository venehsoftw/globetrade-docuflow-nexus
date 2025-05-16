
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PlanGold = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <div className="h-40 bg-white border border-gray-300 p-4">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polyline points="10,80 20,50 40,60 60,30 80,40" 
                fill="none" stroke="#d1d5db" strokeWidth="2" />
              <polyline points="10,80 30,70 50,75 70,40 90,45" 
                fill="none" stroke="#9ca3af" strokeWidth="2" />
            </svg>
          </div>
          <div className="relative">
            <select className="w-full p-2 border border-gray-300 bg-white">
              <option>Graph #1</option>
              <option>Graph #2</option>
              <option>Graph #3</option>
              <option>Graph #4</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="h-40 bg-white border border-gray-300 p-4 flex justify-center items-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
              <div className="bg-gray-500 h-full w-1/2"></div>
            </div>
          </div>
          <div className="relative">
            <select className="w-full p-2 border border-gray-300 bg-white">
              <option>Graph #1</option>
              <option>Graph #2</option>
              <option>Graph #3</option>
              <option>Graph #4</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <div className="h-40 bg-white border border-gray-300 p-4">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polyline points="10,80 20,50 40,60 60,30 80,40" 
                fill="none" stroke="#d1d5db" strokeWidth="2" />
              <polyline points="10,80 30,70 50,75 70,40 90,45" 
                fill="none" stroke="#9ca3af" strokeWidth="2" />
            </svg>
          </div>
          <div className="relative">
            <select className="w-full p-2 border border-gray-300 bg-white">
              <option>Graph #1</option>
              <option>Graph #2</option>
              <option>Graph #3</option>
              <option>Graph #4</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="h-40 bg-white border border-gray-300 p-4 flex justify-center items-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
              <div className="bg-gray-500 h-full w-1/2"></div>
            </div>
          </div>
          <div className="relative">
            <select className="w-full p-2 border border-gray-300 bg-white">
              <option>Graph #1</option>
              <option>Graph #2</option>
              <option>Graph #3</option>
              <option>Graph #4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanGold;
