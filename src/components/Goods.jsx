import React from 'react';

export default function Goods() {
  const products = [
    { name: 'Vermicompost ', price: 5000, image: '/product2.png?height=200&width=200', rating: 5 },
    { name: 'Biopesticide ', price: 8500, image: '/product.png?height=200&width=200', rating: 4 },
    { name: 'Vermicompost', price: 7000, image: '/product3.png?height=200&width=200', rating: 3 },
    { name: 'Biopesticide ', price: 8000, image: '/product.png?height=200&width=200', rating: 5 },
  ];

  return (
    <div className="py-20 bg-main-green">
      <div className="container mx-auto">
        <p className="text-4xl font-bold text-center mb-3 text-some-blue">Our Products</p>
        <p className="text-white text-justify md:text-center  w-2/3 mx-auto text-lg font-normal pb-8 pt-3">
          Experience unparalleled quality with our curated selection of best sellers. From innovative solutions to everyday essentials, we provide products that enhance your agricultural practices.
        </p>
        <div className="flex flex-wrap my-3">
          {products.map((product, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="rounded-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-auto" />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xl text-white mb-2">{product.name}</p>
                    <div className="flex">
                      {[...Array(product.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white text-lg font-semibold">Price: ${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
