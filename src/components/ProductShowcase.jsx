import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';

const products = [
  { id: 1, name: 'HUMI-TEC GRO Fertilizer', price: 120, discountPrice: 99, rating: 4.5, image: '/prod.png?height=200&width=200' },
  { id: 2, name: 'AG-200 Grow Enhancer', price: 150, discountPrice: 129, rating: 4.8, image: '/prod.png?height=200&width=200' },
  { id: 3, name: 'PRO-GRO Seeding Mixture', price: 80, discountPrice: 69, rating: 4.2, image: '/prod.png?height=200&width=200' },
  { id: 4, name: '5-Series Compost Chip', price: 90, discountPrice: 79, rating: 4.6, image: '/prod.png?height=200&width=200' },
];

export default function ProductShowcase({ title }) {
  // State for favorites
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId], // Toggle favorite status
    }));
  };

  return (
    <div>
      {title && <h2 className="text-3xl text-main-green font-bold my-12">{title}</h2>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <div className="relative">
              <img src={product.image} alt={` ${product.name}`} className="w-auto h-auto object-cover mb-4" />
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-2 right-2 p-1 bg-white rounded-sm shadow-md"
                aria-label={favorites[product.id] ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart className={`w-5 h-5 ${favorites[product.id] ? 'text-red-500' : ''}`} />
              </button>
            </div>
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="text-other-green font-bold">${product.discountPrice}</span>
                <span className="text-gray-400 line-through ml-2">${product.price}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1">{product.rating}</span>
              </div>
            </div>
            <button className="w-full bg-black hover:bg-main-green font-semibold p-2 rounded-md text-white">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
