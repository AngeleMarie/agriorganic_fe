import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { MdCancel } from 'react-icons/md';


const ProductDetailsModal = ({ isOpen, onClose, productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoize fetchProductById using useCallback to avoid it changing on every render
  const fetchProductById = useCallback(async () => {
    try {
      setLoading(true);                             
      console.log(productId);
      
      const response = await axios.get(`https://ecommerce-kpd4.onrender.com/api/v1/admin/products/${productId}`);
      setProduct(response.data);
      setError(null); // Clear errors if successful
    } catch (err) {
      console.error('Error fetching product:', err);
      setError('Failed to load product details.');
    } finally {
      setLoading(false);
    }
  }, [productId]);  // Only recreate fetchProductById when productId changes

  // Fetch product details on open
useEffect(() => {
  
  if (isOpen && productId && !product) {
    
    fetchProductById();
  }
  if (!isOpen) {
    setProduct(null); // Reset product when modal closes
    setError(null);
  }
}, [isOpen, productId, fetchProductById,product]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white relative p-8 md:p-12 w-11/12 md:w-1/2 h-auto rounded shadow-lg overflow-auto">
        
        <button
          className="absolute top-8 right-8 text-2xl bg-red-500/20 rounded-full text-red-500"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <MdCancel size={24} />
        </button>

        {loading ? (
          <div className="flex justify-center items-center h-24">
            <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-600">{error}</p>
            {/* Retry Button */}
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={fetchProductById} // Correctly references the function
            >
              Retry
            </button>
          </div>
        ) : (
          product && (
            <>
              <div className="text-center">
                <img
                  src={product.picture || '/default-image.png'}
                  alt={product.name || 'No image available'}
                  className="w-full max-w-sm h-auto mx-auto object-cover my-4 rounded-lg"
                />
                <p id="product-modal-title" className="text-xl font-bold uppercase text-main-green my-2">
                  <span className='font-normal capitalize  '>Product : </span>
               {product.name || 'No Name'}
                </p>
              </div>
              <div id="product-modal-description" className="text-blackie/90 my-4">
                <h3 className="text-main-green font-semibold text-lg">Description</h3>
                <p>{product.description || 'No description available.'}</p>
              </div>
              <div className="text-blackie/90 my-4">
                <h3 className="text-main-green font-semibold text-lg">Usage Guide</h3>
                <p>{product.usageGuide || 'No usage guide available.'}</p>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default ProductDetailsModal;
