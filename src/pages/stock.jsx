import React, { useState } from 'react';
import { PlusIcon, TrashIcon, EyeIcon, PencilIcon } from '@heroicons/react/20/solid';
import Sidebar from '../components/adminSide';
import TopBar from '../components/topBar';
import AddProductModal from '../components/productForm'; 
import ProductDetailsModal from '../components/viewProduct'; 
import EditProductModal from '../components/editProduct';

export default function AdminProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: '/prod.png?height=50&width=50&text=LCD', description: 'High quality LCD monitor', usageGuide: 'Connect to power and computer' },
    { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, image: '/prod.png?height=50&width=50&text=H1', description: 'Comfortable gamepad for PC', usageGuide: 'Connect via USB or Bluetooth' },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    usageGuide: '',
    image: '/prod.png?height=50&width=50&text=New',
  });

  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [message, setMessage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false); 
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false); 
  const [isEditModalOpen, setEditModalOpen] = useState(false); 

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setMessage({ text: 'Product deleted successfully', type: 'success' });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
    }));
  };

  const addNewProduct = () => {
    if (newProduct.name && newProduct.price > 0 && newProduct.quantity >= 0) {
      const newId = Math.max(...products.map((p) => p.id), 0) + 1;
      setProducts([...products, { ...newProduct, id: newId }]);
      setNewProduct({ name: '', price: 0, quantity: 0, description: '', usageGuide: '', image: '/placeholder.svg?height=50&width=50&text=New' });
      setMessage({ text: 'New product added successfully', type: 'success' });
      setModalOpen(false); 
    } else {
      setMessage({ text: 'Please fill all fields correctly', type: 'error' });
    }
    setTimeout(() => setMessage(null), 3000);
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => ({ ...prev, [name]: name === 'price' || name === 'quantity' ? Number(value) : value }));
  };

  const updateProduct = (e) => {
    e.preventDefault();
    setProducts(products.map((product) => (product.id === selectedProduct.id ? selectedProduct : product)));
    setMessage({ text: 'Product updated successfully', type: 'success' });
    setTimeout(() => setMessage(null), 3000);
    setEditModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100/70">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />

        {message && (
          <div className={`mb-4 p-4 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        <div className="mt-6 flex justify-between items-center">
          <h1 className="text-xl font-bold px-12 text-main-green">Store Products</h1>
          <button
            className="px-4 py-2 mx-8 bg-[#266937] text-white rounded hover:bg-green-600 transition duration-300 flex items-center"
            onClick={() => setModalOpen(true)} 
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Add New Product
          </button>
        </div>

        <div className="px-8"> 
          <div className="overflow-hidden">
            <table className="w-full border-collapse bg-white my-12">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Subtotal</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-100">
                    <td className="py-2 px-4 flex items-center">
                      <img src={product.image} alt={product.name} className="w-12 h-12 mr-2" />
                      {product.name}
                    </td>
                    <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                    <td className="py-2 px-12">{product.quantity}</td>
                    <td className="py-2 px-4">${calculateSubtotal(product.price, product.quantity).toFixed(2)}</td>
                    <td className="py-2 px-4 flex space-x-2">
                      <button 
                        className="ml-2 text-blue-600 hover:text-blue-800" 
                        title="View Details"
                        onClick={() => { setSelectedProduct(product); setDetailsModalOpen(true); }}
                      >
                        <EyeIcon className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => { setSelectedProduct(product); setEditModalOpen(true); }} 
                        className="text-yellow-600 hover:text-yellow-800" 
                        title="Edit Product"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button onClick={() => deleteProduct(product.id)} className="text-red-600 hover:text-red-800">
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AddProductModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)} 
          newProduct={newProduct}
          handleNewProductChange={handleNewProductChange}
          addNewProduct={addNewProduct}
        />

        <ProductDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setDetailsModalOpen(false)}
          product={selectedProduct}
        />

        <EditProductModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          product={selectedProduct}
          handleProductChange={handleProductChange}
          updateProduct={updateProduct}
        />
      </div>
    </div>
  );
}
