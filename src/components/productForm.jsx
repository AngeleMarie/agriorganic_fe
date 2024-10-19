// AddProductModal.js
import React from 'react';
import { MdCancel } from 'react-icons/md';

const AddProductModal = ({ isOpen, onClose, newProduct, handleNewProductChange, addNewProduct }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white relative rounded-lg p-8 z-10 shadow-lg w-1/2">
        <h2 className="text-xl text-main-green text-center font-bold mb-4">Add New Product</h2>
        <div>
          <label htmlFor="newProductName" className="block text-sm font-semibold text-main-green">
            Product Name
          </label>
          <input
            type="text"
            id="newProductName"
            name="name"
            value={newProduct.name}
            onChange={handleNewProductChange}
            className="mt-1 border-b w-full outline-none text-other-green"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="newProductPrice" className="block text-sm font-semibold text-main-green">
            Price
          </label>
          <input
            type="number"
            id="newProductPrice"
            name="price"
            value={newProduct.price}
            onChange={handleNewProductChange}
            className="mt-1 border-b w-full outline-none text-other-green"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="newProductQuantity" className="block text-sm font-semibold text-main-green">
            Quantity
          </label>
          <input
            type="number"
            id="newProductQuantity"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleNewProductChange}
            className="mt-1 border-b w-full outline-none text-other-green"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="newProductDescription" className="block text-sm font-semibold text-main-green">
            Description
          </label>
          <textarea
            id="newProductDescription"
            name="description"
            onChange={handleNewProductChange}
            className="mt-1 border-b w-full outline-none text-other-green"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="newProductUsageGuide" className="block text-sm font-semibold text-main-green">
            Usage Guide
          </label>
          <textarea
            id="newProductUsageGuide"
            name="usageGuide"
            onChange={handleNewProductChange}
            className="mt-1 border-b w-full outline-none text-other-green"
          />
        </div>
        <div className="mt-6 flex justify-end">
        <button type="button" className="absolute top-8 right-8 text-2xl bg-red-500/20 rounded-full text-red-500" onClick={onClose}><MdCancel /></button>
          <button className="px-4 w-1/2 py-2 bg-[#266937] font-medium text-white rounded hover:bg-green-600" onClick={addNewProduct}>
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
