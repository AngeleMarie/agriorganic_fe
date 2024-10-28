import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ShoppingCartIcon, HeartIcon, EyeIcon, StarIcon } from '@heroicons/react/20/solid';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer';

const MyCart = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:7654/api/v1/users/cart', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setProducts(response.data.items); // Assuming `items` is an array in the response data
      } catch (error) {
        console.error('Error fetching products:', error);
        setMessage({ text: 'Failed to fetch products', type: 'error' });
        setTimeout(() => setMessage(null), 3000);
      }
    };

    fetchCart();
  }, []);

  const addItem = async (productId, quantity) => {
    try {
      await axios.post(
        'http://localhost:7654/api/v1/users/cart/add',
        { productId, quantity },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setMessage({ text: 'Item added to cart', type: 'success' });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Error adding item:', error);
      setMessage({ text: 'Failed to add item', type: 'error' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Cart</h1>
          <button className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100 transition duration-300">
            Move All To Bag
          </button>
        </div>

        {message && (
          <div className={`alert ${message.type === 'error' ? 'alert-danger' : 'alert-success'}`}>
            {message.text}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((item, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="relative mb-4">
                <img src="/placeholder.svg?height=200&width=200" alt={item.productId.name} className="w-full h-48 object-cover rounded-lg" />
                {item.productId.discount > 0 && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{item.productId.discount}%
                  </span>
                )}
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                  <HeartIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <h3 className="font-semibold mb-2">{item.productId.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold">${item.productId.price}</span>
              </div>
              <button
                onClick={() => addItem(item.productId._id, 1)}
                className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 flex items-center justify-center"
              >
                <ShoppingCartIcon className="w-5 h-5 mr-2" />
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCart;
