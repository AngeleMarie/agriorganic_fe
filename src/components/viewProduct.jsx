
import React from 'react';
import { MdCancel } from 'react-icons/md';

const ProductDetailsModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white relative  p-12  w-1/2  h-auto rounded shadow-lg">
        <h2 className="text-lg font-bold text-main-green text-center">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-auto h-auto mx-auto object-cover my-4" />
        <p className='text-blackie/90'><span className='text-main-green block font-semibold text-lg'>Description</span> {product.description}</p>
        <p className='text-blackie/90 '><span className='text-main-green block font-semibold text-lg'>Usage Guide</span> {product.usageGuide}</p>
        <button className=" bg-black/20 right-4 top-4 text-white p-1 absolute rounded-full" onClick={onClose}><MdCancel/></button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
