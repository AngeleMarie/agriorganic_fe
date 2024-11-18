import React from 'react';
import { ChevronLeft, ChevronRight, Monitor, Cpu, Package, Leaf } from 'lucide-react';


const categories = [
  { name: "Vermicompost", icon: "🪱" },
  { name: "Biopesticides", icon: "🌳" },
  { name: "Microbes", icon: "🪰" },
  { name: "Extension Services", icon: "🎧" },
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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="border rounded-lg cursor-pointer p-4 text-center hover:shadow-2xl hover:text-white hover:bg-main-green transition duration-300">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
    </section>
  );
}