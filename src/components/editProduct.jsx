
import React from 'react';
import { MdCancel } from "react-icons/md";

const EditProductModal = ({ isOpen, onClose, product, handleProductChange, updateProduct }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 items-center  justify-center  bg-black bg-opacity-60">
      <div className="bg-white p-12 w-1/2 relative rounded shadow-lg mx-auto my-32">
        <h2 className="text-xl font-bold text-main-green">Edit Product</h2>
        <form onSubmit={updateProduct}>
          <div className='p-2'>
            <label className="block text-sm font-semibold text-main-green">Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleProductChange}
              className="border-b py-2 outline-none focus:text-other-green  w-full"
            />
          </div>
          <div className='p-2'>
            <label className="block text-main-green font-semibold">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleProductChange}
              className="border-b py-2 outline-none focus:text-other-green  w-full"
            />
          </div>
          <div className='p-2'>
            <label className="block  font-semibold text-main-green">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              readOnly
              className="border-b py-2 outline-none focus:text-other-green  w-full"
            />
          </div>
          <div className='p-2'> 
            <label className="block  font-semibold text-main-green">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleProductChange}
              className="border-b py-2 outline-none focus:text-other-green  w-full"
            />
          </div>
          <div className='p-2'>
            <label className="block  font-semibold text-main-green">Usage Guide</label>
            <textarea
              name="usageGuide"
              value={product.usageGuide}
              onChange={handleProductChange}
              className="border-b py-2 outline-none focus:text-other-green w-full"
            />
          </div>
          <button type="submit" className="mt-4 bg-[#266937] font-medium text-white px-4 py-2 rounded">Update</button>
          <button type="button" className="absolute top-8 right-8 text-2xl bg-red-500/20 rounded-full text-red-500" onClick={onClose}><MdCancel /></button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
