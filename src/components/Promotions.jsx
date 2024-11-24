"use client";
import React from "react";

const Promotions = () => {
  return (
    <div className="relative w-full h-1/3 bg-main-green p-8 md:p-32">
      
      {/* Background Image */}
      <img
        src="/pic4.jpg"
        alt="backie"
        className="absolute inset-0 mix-blend-overlay opacity-75 w-full h-full object-cover"
        loading="lazy"
      />

      <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-24">
        {/* Product Image (hidden on small and medium screens) */}
        <div className="z-10 hidden md:block">
          <img src="plantie.png" alt="plant" className="" />
        </div>

        {/* Text Content */}
        <div className="z-10 flex flex-col justify-center space-y-4 w-full md:w-1/2 px-8 md:px-12 my-12 ">
          <p className="text-4xl font-bold text-[#266937] text-center md:text-left">
            New Product In Research!!!
          </p>
          <p className="text-base md:text-lg text-white opacity-90 text-center md:text-left max-w-full">
            Join the countless satisfied customers who trust us for their agricultural needs! Discover our new product that has won the hearts of our customers.
          </p>
          <button className="bg-[#266937] cursor-pointer hover:bg-green-600 text-white font-bold py-2 w-full md:w-1/2 rounded transition duration-300">
            Discover More
          </button>
        </div>

        {/* Progress Circle (hidden on small and medium screens) */}
        <div className="absolute right-72 top-1/3 w-64 h-64 hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-green-800 stroke-current"
              strokeWidth="5"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            />
            <circle
              className="text-green-500 stroke-current"
              strokeWidth="5"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset="37.68"
            />
            
            {/* Large 85 */}
            <text
              x="50"
              y="45"
              className="text-white"
              fontFamily="Arial"
              fontSize="22"
              fontWeight="bold"
              textAnchor="middle"
              alignmentBaseline="central"
              fill="currentColor"
            >
              85
            </text>

            {/* Small "remaining in store" */}
            <text
              x="50"
              y="65"
              className="text-white"
              fontFamily="Arial"
              fontSize="5"
              textAnchor="middle"
              alignmentBaseline="central"
              fill="currentColor"
            >
              samples in lab ...
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
