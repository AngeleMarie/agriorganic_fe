import React, { useState, useEffect } from 'react';
import { PlusIcon, TrashIcon, EyeIcon, PencilIcon } from '@heroicons/react/20/solid';
import Sidebar from '../components/adminSide';
import TopBar from '../components/topBar';
import AddProductModal from '../components/productForm';
import ProductDetailsModal from '../components/viewProduct';
import EditProductModal from '../components/editProduct';
import axios from 'axios';

export default function AdminProductList() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    usageGuide: '',
    picture: null,
  });
  const[selectedProductId,setSelectedProductId]=useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [message, setMessage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:7654/api/v1/admin/products/');
        const receivedProducts= response.data.map((product) => ({
          ...product
        }));
        setProducts(receivedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setMessage({ text: 'Failed to fetch products', type: 'error' });
        setTimeout(() => setMessage(null), 3000);
      }
    };
  
    fetchProducts();
  }, []);
  

  const calculateSubtotal = (price, quantity) => price * quantity;

  const updateProduct = () => {

    setProducts(products.map((product) => (product._id === selectedProduct._id ? selectedProduct : product)));
    setMessage({ text: 'Product updated successfully', type: 'success' });
    setTimeout(() => setMessage(null), 3000);
    setEditModalOpen(false);
  };

 


  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'quantity' ? parseFloat(value) : value,
      
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Convert file to URL
      setNewProduct((prev) => ({
        ...prev,
        picture: file,
      }));
    }
  };
  

  const addNewProduct = () => {
    if (!newProduct.name || !newProduct.picture || isNaN(newProduct.price) || newProduct.price <= 0 || isNaN(newProduct.quantity) || newProduct.quantity < 0) {
      setMessage({ text: 'Please fill all fields correctly', type: 'error' });
      return;
    }

    const newId = Math.max(...products.map((p) => p.id), 0) + 1;
    setProducts([...products, { ...newProduct, id: newId }]);

    setNewProduct({
      name: '',
      price: 0,
      quantity: 0,
      description: '',
      usageGuide: '',
      picture: null,
    });
    setMessage({ text: 'New product added successfully', type: 'success' });
    setModalOpen(false);

    setTimeout(() => setMessage(null), 3000);
  };
  const deleteProduct = async (productId) => {
    try {
      // Call the delete API
      await axios.delete(`http://localhost:7654/api/v1/admin/products/${productId}`);
      
      // Update the UI by filtering out the deleted product
      setProducts(products.filter((product) => product._id !== productId));
      
      // Show success message
      setMessage({ text: 'Product deleted successfully', type: 'success' });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Error deleting product:', error);
      setMessage({ text: 'Failed to delete product', type: 'error' });
      setTimeout(() => setMessage(null), 3000);
    }
  };
  

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
    }));
  };
  return (
    <div className="flex h-screen  bg-other-green/5">
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
          <button className="px-4 py-2 mx-8 bg-[#266937] text-white rounded hover:bg-green-600 transition duration-300 flex items-center" onClick={() => setModalOpen(true)}>
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
                
                        <img 
                          src={product.picture} 
                          alt={product.name} 
                          className="w-12 h-12 mr-2"
                        />
                      
                      {product.name}
                    </td>
                    <td className="py-2 px-4">{parseInt(product?.price).toFixed(2)} Frw</td>
                    <td className="py-2 px-12">{parseInt(product.quantity).toFixed(2)}</td>
                    <td className="py-2 px-4">{calculateSubtotal(product.price, product.quantity)} Frw</td>
                    <td className="py-2 px-4 flex space-x-2">
                    <button
  className="ml-2 text-blue-600 hover:text-blue-800"
  title="View Details"
  onClick={() => {
    console.log('Selected Product ID:', product._id); // Debug
    setSelectedProductId(product._id);
    setDetailsModalOpen(true);
  }}
>
  <EyeIcon className="w-5 h-5" />
</button>

                      <button onClick={() => { setSelectedProduct(product); 
                        setEditModalOpen(true); }} className="text-yellow-600 hover:text-yellow-800" title="Edit Product">
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
  onClick={() => deleteProduct(product._id)} 
  className="text-red-600 hover:text-red-800"
  title="Delete Product"
>
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
          setNewProduct={setNewProduct}
          handleNewProductChange={handleNewProductChange}
          addNewProduct={addNewProduct}
          handleImageChange={handleImageChange}
        />

<ProductDetailsModal
  isOpen={isDetailsModalOpen}
  onClose={() => setDetailsModalOpen(false)}
  productId={selectedProductId} // Pass selectedProductId
/>

<EditProductModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          productId={selectedProductId}
          product={selectedProduct}
          setEditProduct={setSelectedProduct}
          handleProductChange={handleProductChange}
          updateProduct={updateProduct}
        />
      </div>
    </div>
  );
}