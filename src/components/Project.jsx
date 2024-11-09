import React from 'react'

function Project() {
  const images = [
    'pro2.png', // Replace with actual image URLs
    'pro1.png',
    'pro3.png'
  ];

  return (
    <div className='flex'>
      {images.map((imgUrl, index) => (
        <div
          key={index}
          className=''
        >
          <img
            src={imgUrl}        
            alt={`project-${index}`}
            className='transition-all duration-300 transform hover:border-2 hover:border-green-500/70 hover:shadow-[0_0_15px_4px_rgba(0,255,0,0.1)] cursor-pointer mx-8 rounded-xl'
          />
        </div>
      ))}
    </div>
  );
}

export default Project;
