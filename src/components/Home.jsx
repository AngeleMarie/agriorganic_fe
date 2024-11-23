import React, { useState, useEffect } from "react";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide: Changes slide every 4 seconds (4000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const newsItems = [
    {
      id: 1,
      imageUrl: "home1.jpg",
    },
    {
      id: 2,
      imageUrl: "home2.jpg",
    },
    {
      id: 3,
      imageUrl: "home3.jpg",
    },
    {
      id: 4,
      imageUrl: "home4.jpg",
    },
  ];

  return (
    <div className="relative mt-24 h-[60vh] bg-main-green/70">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {/* Image Slide */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
          <img
            src={newsItems[currentIndex].imageUrl}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Farming for
              <span className="text-other-green"> Better Future</span>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
