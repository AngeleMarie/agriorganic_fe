import React from 'react';

function Project() {
  const images = [
    'pro2.png', // Replace with actual image URLs
    'pro1.png',
    'pro3.png',
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((imgUrl, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={imgUrl}
              alt={`project-${index}`}
              className="transition-all duration-300 transform hover:scale-105 hover:border-2 hover:border-green-500/70 hover:shadow-[0_0_15px_4px_rgba(0,255,0,0.1)] cursor-pointer rounded-xl w-full sm:w-[80%] md:w-[90%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
