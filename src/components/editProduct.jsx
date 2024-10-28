import React, { useState, useEffect } from 'react';
import { MdCancel } from "react-icons/md";

const EditProductModal = ({ isOpen, onClose, product, setEditProduct, updateProduct }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [imageFile, setImageFile] = useState(null);

    // Set initial product values when the product prop changes
    useEffect(() => {
        if (product) {
            setEditProduct({
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                description: product.description,
                usageGuide: product.usageGuide,
            });
        }
    }, [product, setEditProduct]);

    if (!isOpen || !product) return null;

    const handleProductChange = (e) => {
        const { name, value } = e.target;
        setEditProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleEditProduct = async () => {
        setError('');
        setSuccess('');

        // Validate fields
        if (!product.name || !product.price || !product.quantity) {
            setError('Please fill out all required fields.');
            return;
        }

        const price = Number(product.price);
        const quantity = Number(product.quantity);

        if (isNaN(price) || isNaN(quantity)) {
            setError('Price and quantity must be valid numbers.');
            return;
        }

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('description', product.description);
        formData.append('usageGuide', product.usageGuide);

        if (imageFile) {
            formData.append('imageUrl', imageFile);
        }

        try {
            const response = await fetch(`http://localhost:7654/api/v1/admin/products/update/${product._id}`, {
                method: 'PUT',
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                updateProduct(data.product);
                setSuccess('Product edited successfully!');
                setEditProduct({ name: '', price: 0, quantity: 0, description: '', usageGuide: '' });
                setImageFile(null);
                setTimeout(() => {
                    setSuccess('');
                    onClose();
                }, 2000);
            } else {
                setError(data.error || 'Failed to edit product.');
            }
        } catch (error) {
            console.error('Error updating product:', error);
            setError('An error occurred while updating the product.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEditProduct();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white p-12 w-1/2 relative rounded shadow-lg">
                <h2 className="text-xl font-bold text-main-green">Edit Product</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && <p className="text-green-500 text-center">{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='p-2'>
                        <label className="block text-sm font-semibold text-main-green">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleProductChange}
                            className="border-b py-2 outline-none focus:text-other-green w-full"
                        />
                    </div>
                    <div className='p-2'>
                        <label className="block text-main-green font-semibold">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleProductChange}
                            className="border-b py-2 outline-none focus:text-other-green w-full"
                        />
                    </div>
                    <div className='p-2'>
                        <label className="block font-semibold text-main-green">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={product.quantity}
                            onChange={handleProductChange}
                            className="border-b py-2 outline-none focus:text-other-green w-full"
                        />
                    </div>
                    <div className='p-2'>
                        <label className="block font-semibold text-main-green">Product Image</label>
                        <input
                            type="file"
                            name="imageUrl"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="border-b py-2 outline-none focus:text-other-green w-full"
                        />
                        {imageFile && (
                            <div className="mt-4">
                                <img src={URL.createObjectURL(imageFile)} alt="Preview" className="w-32 h-32 object-cover" />
                            </div>
                        )}
                    </div>
                    <div className='p-2'> 
                        <label className="block font-semibold text-main-green">Description</label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleProductChange}
                            className="border-b py-2 outline-none focus:text-other-green w-full"
                        />
                    </div>
                    <div className='p-2'>
                        <label className="block font-semibold text-main-green">Usage Guide</label>
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
