import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StarIcon, ShoppingCartIcon, HeartIcon, EyeIcon } from '@heroicons/react/20/solid';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const WishlistAndCategories = ({ user }) => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState(null);

  const categories = [
    { name: "Vermicompost", icon: "🪱" },
    { name: "Biopesticides", icon: "🌳" },
    { name: "Microbes", icon: "🪰" },
    { name: "Extension Services", icon: "🎧" },
  ];

  useEffect(() => {
    if (user && user._id) {
      console.log('User ID:', user._id);
      const fetchWishlist = async () => {
        try {
          const response = await axios.get(`http://localhost:7654/api/v1/users/wishlist/${user._id}`);
          setProducts(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
          console.log('Error details:', error.response);
          setMessage({ text: 'Failed to fetch products', type: 'error' });
          setTimeout(() => setMessage(null), 3000);
        }
      };
      
      fetchWishlist();
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Wishlist</h1>
          <button className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100 transition duration-300">
            Move All To Bag
          </button>
        </div>

        {/* Display message if there's an error or no products */}
        {message && (
          <div className={`text-${message.type === 'error' ? 'red' : 'green'}-500 text-center mb-4`}>
            {message.text}
          </div>
        )}

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="relative mb-4">
                  <img src={item.imageUrl || "/placeholder.svg?height=200&width=200"} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
                  {item.discount > 0 && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{item.discount}%
                    </span>
                  )}
                  <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                    <HeartIcon className="w-5 h-5 text-red-500" />
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
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No items in the wishlist.</p>
        )}

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse By Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="border rounded-lg cursor-pointer p-4 text-center hover:shadow-2xl hover:text-white hover:bg-main-green transition duration-300">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishlistAndCategories;
