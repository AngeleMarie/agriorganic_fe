import React, { useState, useEffect } from "react";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide: Changes slide every 8 seconds (8000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
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
    <div className="relative h-1/2 pt-12 bg-main-green/70">
      <div className="w-full h-[800px]"> {/* Full screen carousel */}
        <div className="relative w-full h-[800px]">
          <div className="relative w-full h-[800px] overflow-hidden">
            <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
              <img
                src={newsItems[currentIndex].imageUrl}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-700 ease-in-out"></div>

              {/* Overlay text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center ">
                <p className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg w-1/2 text-white capitalize text-center">
                  Farming for 
                  <span className="text-other-green"> Better Future </span> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
