import React, { useState } from 'react'
import { StarIcon, HeartIcon, TruckIcon, ArrowPathIcon, EyeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(2)
  const [selectedColor, setSelectedColor] = useState('green')
  const [selectedSize, setSelectedSize] = useState('m')
  const [isFavorite, setIsFavorite] = useState(false) // State for the heart icon color
  const [expandedSection, setExpandedSection] = useState(null);
  
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
};


  const colors = ['green', 'red']
  const sizes = ['xs', 's', 'm', 'l', 'xl']

  const relatedProducts = [
    { name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 150, discount: 40, rating: 5, reviews: 88 },
    { name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: 35, rating: 4, reviews: 75 },
    { name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: 30, rating: 5, reviews: 99 },
    { name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, discount: 0, rating: 4, reviews: 65 }
  ]

  // Toggle favorite state
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="container mx-auto px-4 py-32">
      <nav className="text-sm breadcrumbs mb-4">
        <ul className="flex">
          <li><Link to="/" className="text-gray-500 hover:text-gray-700">Account</Link></li>
          <li className="mx-2">/</li>
          <li><Link to="/" className="text-gray-500 hover:text-gray-700">Pesticides</Link></li>
          <li className="mx-2">/</li>
          <li className="text-gray-700">Biofinish Bio-Pesticide</li>
        </ul>
      </nav>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative h-2/3 w-auto bg-blackie/5">
            <img
              src="/sprayer.png"
              alt="Biofinish product"
              className="w-auto h-auto mx-auto rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square relative">
                <img
                  src={`/sprayer.png?height=100&width=100&text=Thumb${i + 1}`}
                  alt={`Biofinish thumbnail ${i + 1}`}
                  className="w-auto h-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">BIOFINISH</h1>
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-500">(150 Reviews)</span>
            <span className="text-sm text-green-500">In Stock</span>
          </div>
          <p className="text-3xl font-bold">$192.00</p>
          <p className="text-gray-600">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </p>
          
          <div>
            <h3 className="font-semibold mb-2">Colours:</h3>
            <div className="flex space-x-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full ${color === 'green' ? 'bg-green-500' : 'bg-red-500'} ${selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Size:</h3>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded-md ${selectedSize === size ? 'bg-main-green text-white' : 'bg-white text-gray-900'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-1" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="px-3 py-1 border-x">{quantity}</span>
              <button className="px-3 py-1" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="flex-1 bg-main-green font-medium text-white py-2 px-4 rounded-md hover:bg-green-800  ">
              Add To Cart
            </button>
            <button className="p-2 border rounded-md hover:bg-gray-100" onClick={toggleFavorite}>
              <HeartIcon className={`w-6 h-6 ${isFavorite ? 'text-red-500' : 'text-gray-600'}`} />
            </button>
          </div>
          
          <div className="space-y-4 border rounded-md p-4">
          <div className="mt-8 space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-600">
            Your full frame journey begins with the Z 5. Simple yet sophisticated, compact yet powerful, the Z 5 is built to grow with you. It's everything you'd expect from a full frame mirrorless camera—intense detail, expansive views, brilliant low light capabilities, 4K UHD video and more—plus all the innovative tools you need to push the limits of your creativity.
          </p>
        </div>

        <div>
          <button
            className="flex items-center justify-between w-full text-left"
            onClick={() => toggleSection('usage')}
          >
            <h2 className="text-xl font-semibold">Usage Guides</h2>
            {expandedSection === 'usage' ? (
              <ChevronUpIcon className="w-5 h-5" />
            ) : (
              <ChevronDownIcon className="w-5 h-5" />
            )}
          </button>
          {expandedSection === 'usage' && (
            <p className="mt-2 text-gray-600">
              Detailed usage guides and best practices for utilizing the agronomist service effectively.
            </p>
          )}
        </div>

        <div >
          <button
            className="flex items-center justify-between w-full text-left"
            onClick={() => toggleSection('shipping')}
          >
            <h2 className="text-xl font-semibold">Shipping & Warranty</h2>
            {expandedSection === 'shipping' ? (
              <ChevronUpIcon className="w-5 h-5" />
            ) : (
              <ChevronDownIcon className="w-5 h-5" />
            )}
          </button>
          {expandedSection === 'shipping' && (
            <p className="mt-2 text-gray-600">
              Information about shipping options and warranty coverage for the agronomist service.
            </p>
          )}
        </div>
      </div>
            <div className="flex items-center space-x-2 ">
              <TruckIcon className="w-6 h-6 text-other-green" />
              <div>
                <h4 className="font-semibold text-other-green">Free Delivery</h4>
                <p className="text-sm text-gray-500">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowPathIcon className="w-6 h-6 text-other-green" />
              <div>
                <h4 className="font-semibold text-other-green">Return Delivery</h4>
                <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="aspect-square relative mb-4">
                <img
                  src={`/prod.png?height=200&width=200&text=${product.name}`}
                  alt={product.name}
                  className="w-auto h-auto m-auto py-24 object-cover rounded-lg"
                />
                {product.discount > 0 && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs">
                    -{product.discount}%
                  </span>
                )}
                <div className="absolute top-2 right-2 space-y-2">
                  <button className="p-1 bg-white rounded-full shadow">
                    <HeartIcon className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 bg-white rounded-full shadow">
                    <EyeIcon className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-bold">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through">${product.oldPrice}</span>
                )}
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
                <span className="text-sm text-gray-500">({product.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
