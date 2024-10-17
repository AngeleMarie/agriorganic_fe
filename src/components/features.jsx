import React from 'react';
import { Check, Leaf, Recycle, Sun, Droplet, ThumbsUp } from 'lucide-react';

export default function WhyAgriorganic() {
  const features = [
    { icon: Leaf, title: 'Eco-friendly', description: 'Our products are environmentally conscious and sustainable.' },
    { icon: Recycle, title: 'Sustainable', description: 'We use renewable resources and promote circular economy.' },
    { icon: Sun, title: 'Natural', description: 'All ingredients are sourced from nature, no artificial additives.' },
    { icon: Droplet, title: 'Pure', description: 'Our products are free from harmful chemicals and pesticides.' },
    { icon: Check, title: 'Certified', description: 'We hold all relevant organic and quality certifications.' },
    { icon: ThumbsUp, title: 'Easy', description: 'Our products are user-friendly and easy to apply.' },
  ];

  const leftFeatures = features.slice(0, 3);
  const rightFeatures = features.slice(3);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
      <p className='uppercase font-semibold text-center text-md text-other-green  '>Brand Features</p>
        <p className="text-4xl font-bold text-center mb-6 text-main-green">Why Agriorganic ?</p>
        <p className='text-blackie text-center p-3'>Laoreet interdum phasellus ultrices id amet. Amet nibh varius fames vulputate. Gravida placerat velit amet.</p>
        
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex items-start mb-4 mx-12">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-main-green flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 flex justify-center">
            <img src="/plant.png?height=400&width=300" alt="Agriorganic Plant" className="mx-auto" />
          </div>

          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="flex items-start mb-4 mx-12">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-main-green flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
