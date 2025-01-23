import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';

const AddProductModal = ({ isOpen, onClose, newProduct, setNewProduct, addNewProduct, handleImageChange }) => {
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSaveProduct = async () => {
    setStatus({ message: '', type: '' });

    if (!newProduct.name || !newProduct.price || !newProduct.picture || !newProduct.quantity) {
      setStatus({ message: 'Please fill out all required fields.', type: 'error' });
      return;
    }

    const price = Number(newProduct.price);
    const quantity = Number(newProduct.quantity);

    if (isNaN(price) || isNaN(quantity)) {
      setStatus({ message: 'Price and quantity must be valid numbers.', type: 'error' });
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', newProduct.name);
      formData.append('price', newProduct.price);
      formData.append('quantity', newProduct.quantity);
      formData.append('description', newProduct.description);
      formData.append('usageGuide', newProduct.usageGuide);
      formData.append('picture', newProduct.picture);

      const response = await fetch('http://localhost:7654/api/v1/admin/products/addProduct', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        addNewProduct(data);
        setStatus({ message: 'Product added successfully!', type: 'success' });
        setNewProduct({
          name: '',
          picture: '',
          price: 0,
          quantity: 0,
          description: '',
          usageGuide: '',
        });
        setTimeout(() => {
          setStatus({ message: '', type: '' });
          onClose();
        }, 2000);
      } else {
        setStatus({ message: data.error || 'Failed to add product.', type: 'error' });
      }
    } catch (error) {
      console.error('Error adding product:', error);
      setStatus({ message: 'An error occurred while adding the product.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white relative rounded-lg p-8 z-10 shadow-lg w-1/2">
        <h2 className="text-xl text-main-green text-center font-bold mb-4">Add New Product</h2>

        {status.message && (
          <p className={`text-center ${status.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
            {status.message}
          </p>
        )}

        {/* Product Form Fields */}
        <div>
          <label htmlFor="newProductName" className="block text-sm font-semibold text-main-green">Product Name</label>
          <input
            type="text"
            id="newProductName"
            name="name"
            value={newProduct.name || ''}
            onChange={handleNewProductChange}
            className="mt-1 border-b w-full outline-none text-other-green"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="newProductPrice" className="block text-sm font-semibold text-main-green">Price</label>
          <input
            type="number"
            id="newProductPrice"
            name="price"
            value={newProduct.price || ''}
            onChange={handleNewProductChange}
            className="mt-1 border-b w-full outline-none text-other-green"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="newProductQuantity" className="block text-sm font-semibold text-main-green">Quantity</label>
          <input
            type="number"
            id="newProductQuantity"
            name="quantity"
            value={newProduct.quantity || ''}
            onChange={handleNewProductChange}
            className="mt-1 border-b w-full outline-none text-other-green"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="newProductImage" className="block text-sm font-semibold text-main-green">Product Image</label>
          <input
            type="file"
            id="newProductImage"
            name="picture"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 border-b w-full outline-none text-other-green"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="newProductDescription" className="block text-sm font-semibold text-main-green">Description</label>
          <textarea
            id="newProductDescription"
            name="description"
            value={newProduct.description || ''}
            onChange={handleNewProductChange}
            className="mt-1 border-b w-full outline-none text-other-green"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="newProductUsageGuide" className="block text-sm font-semibold text-main-green">Usage Guide</label>
          <textarea
            id="newProductUsageGuide"
            name="usageGuide"
            value={newProduct.usageGuide || ''}
            onChange={handleNewProductChange}
            className="mt-1 border-b w-full outline-none text-other-green"
          />
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="absolute top-8 right-8 text-2xl bg-red-500/20 rounded-full text-red-500"
            onClick={onClose}
          >
            <MdCancel />
          </button>

          <button
            className="px-4 w-1/2 py-2 bg-[#266937] font-medium text-white rounded hover:bg-green-600"
            onClick={handleSaveProduct}
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save Product'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
