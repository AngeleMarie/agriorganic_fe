import React from 'react';
import { ShoppingCartIcon, HeartIcon, EyeIcon, StarIcon } from '@heroicons/react/20/solid';

const MyCart = () => {
  const cartItems = [
    { name: "Gucci duffle bag", price: 960, oldPrice: 1160, discount: 35 },
    { name: "RGB liquid CPU Cooler", price: 1960, oldPrice: null, discount: 0 },
    { name: "GP11 Shooter USB Gamepad", price: 550, oldPrice: null, discount: 0 },
    { name: "Quilted Satin Jacket", price: 750, oldPrice: null, discount: 0 },
  ];

  const recommendedItems = [
    { name: "ASUS FHD Gaming Laptop", price: 960, oldPrice: 1160, discount: 35, rating: 5, reviews: 65 },
    { name: "IPS LCD Gaming Monitor", price: 1160, oldPrice: null, discount: 0, rating: 4, reviews: 55 },
    { name: "HAVIT HV-G92 Gamepad", price: 560, oldPrice: null, discount: 0, rating: 5, reviews: 88 },
    { name: "AK-900 Wired Keyboard", price: 200, oldPrice: null, discount: 0, rating: 4, reviews: 75 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Cart</h1>
        <button className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100 transition duration-300">
          Move All To Bag
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cartItems.map((item, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="relative mb-4">
              <img src="/placeholder.svg?height=200&width=200" alt={item.name} className="w-full h-48 object-cover rounded-lg" />
              {item.discount > 0 && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{item.discount}%
                </span>
              )}
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                <HeartIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <h3 className="font-semibold mb-2">{item.name}</h3>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-bold">${item.price}</span>
                {item.oldPrice && (
                  <span className="text-gray-500 line-through ml-2">${item.oldPrice}</span>
                )}
              </div>
            </div>
            <button className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 flex items-center justify-center">
              <ShoppingCartIcon className="w-5 h-5 mr-2" />
              Order Now
            </button>
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Related Items</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedItems.map((item, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="relative mb-4">
                <img src="/placeholder.svg?height=200&width=200" alt={item.name} className="w-full h-48 object-cover rounded-lg" />
                {item.discount > 0 && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{item.discount}%
                  </span>
                )}
                <div className="absolute top-2 right-2 space-y-2">
                  <button className="bg-white p-1 rounded-full shadow">
                    <HeartIcon className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="bg-white p-1 rounded-full shadow">
                    <EyeIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <h3 className="font-semibold mb-2">{item.name}</h3>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-bold">${item.price}</span>
                  {item.oldPrice && (
                    <span className="text-gray-500 line-through ml-2">${item.oldPrice}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
                <span className="text-gray-600 text-sm ml-2">({item.reviews})</span>
              </div>
              <button className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 flex items-center justify-center">
                <ShoppingCartIcon className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;