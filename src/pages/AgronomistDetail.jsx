import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { FaWhatsapp } from "react-icons/fa6";


const AgronomistDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  

  const images = [
    '/agro.png?height=80&width=80&text=Corn',
    '/agro.png?height=80&width=80&text=Field',
    '/agro.png?height=80&width=80&text=Crops',
    '/agro.png?height=80&width=80&text=Farm',
  ];


  return (
    <div className="container mx-auto px-4 py-32">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
            <img
              src={images[selectedImage]}
              alt="Agronomist in field"
              className="w-auto h-auto mx-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, index) => (
              <button
                key={index}
                className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Agronomist</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
              ))}
              <StarIcon className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="text-sm text-gray-600">4.2 (1653 reviews)</span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold">$899</span>
            <span className="text-xl text-gray-500 line-through">$1,099.96</span>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Options</h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-black text-white rounded-full">Online Expert</button>
              <button className="px-4 py-2 border border-gray-300 rounded-full">Field Expert</button>
            </div>
          </div>

          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Available in Kigali</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Available 24/7</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <span>Works With Own Equipments</span>
            </li>
          </ul>

          <button className="text-blue-500 hover:underline">View All Tech Specs</button>

          <button className="w-full bg-green-500 shadow-md text-white py-3 rounded-full flex items-center justify-center space-x-2">
            <FaWhatsapp className="w-6 h-6" />
            <span>Chat On Whatsapp</span>
          </button>

          <div className="border-t pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Got any questions? Contact us</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span>Free Agriculture and Manure</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                <span>Share</span>
              </span>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default AgronomistDetail;