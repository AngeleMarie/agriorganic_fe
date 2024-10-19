import React from 'react';
import { ChevronLeft, ChevronRight, Monitor, Cpu, Package, Leaf } from 'lucide-react';


const categories = [
  { name: 'Workstations', icon: Monitor },
  { name: 'Drones/Robots', icon: Cpu },
  { name: 'Kits', icon: Package },
  { name: 'Mini-Plant', icon: Leaf },
];

export default function BrowseByCategory() {
  return (
    <section className="mb-8">
        
      
      <div className="flex items-center my-12">
        <div className="w-2 h-8 bg-other-green mr-2"></div>
        <h3 className="text-lg font-bold text-other-green">Categories</h3>
      </div>
     
      <div className="flex justify-between items-center mb-4">
      <p className="text-3xl font-bold  text-main-green mb-8"> Browse By Category </p>
        <div className="flex space-x-2">
          <button variant="outline" className="p-2"><ChevronLeft className="w-4 h-4" /></button>
          <button variant="outline" className="p-2"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
            <category.icon className="w-12 h-12 mx-auto mb-2 text-green-600" />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}