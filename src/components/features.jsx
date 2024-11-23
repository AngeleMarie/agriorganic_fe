import React from 'react';
import { FaLeaf, FaRecycle, FaSun, FaWater, FaCheckCircle, FaThumbsUp } from 'react-icons/fa';

export default function WhyAgriorganic() {
  const features = [
    { icon: FaLeaf, title: 'Eco-friendly', description: 'Our products are environmentally conscious and sustainable.' },
    { icon: FaRecycle, title: 'Sustainable', description: 'We use renewable resources and promote a circular economy.' },
    { icon: FaSun, title: 'Protein Providers (PP)', description: 'All ingredients are sourced from nature, with no artificial additives.' },
    { icon: FaWater, title: 'Pure', description: 'Our products are free from harmful chemicals and pesticides.' },
    { icon: FaCheckCircle, title: 'Organic Certification Support', description: 'We hold all relevant organic and quality certifications.' },
    { icon: FaThumbsUp, title: 'Cost Effective', description: 'Our products are user-friendly and easy to apply.' },
  ];

  const leftFeatures = features.slice(0, 3);
  const rightFeatures = features.slice(3);

  return (
    <div className="bg-main-green py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <p className="text-3xl sm:text-4xl font-bold text-center mb-10 text-other-green">
          Why Agriorganic?
        </p>

        {/* Features Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Features */}
          <div className="w-full md:w-1/3 mb-8 flex flex-col items-center">
            {leftFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start mb-6 w-11/12 sm:w-3/4 md:w-full mx-auto"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-other-green flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-other-green">{feature.title}</h3>
                  <p className="text-white text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image - Hidden on small screens */}
          <div className="hidden md:block w-full md:w-1/3 mb-8 flex justify-center">
            <img
              src="/handie.png?height=400&width=300"
              alt="Agriorganic Plant"
              className="max-w-xs sm:max-w-sm mx-auto"
            />
          </div>

          {/* Right Features */}
          <div className="w-full md:w-1/3 mb-8 flex flex-col items-center">
            {rightFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start mb-6 w-11/12 sm:w-3/4 md:w-full mx-auto"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-other-green flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-other-green">{feature.title}</h3>
                  <p className="text-white text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
