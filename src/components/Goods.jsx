import React from 'react'

export default function Goods() {
    const products = [
      { name: 'Product ',price:100, image: '/product.png?height=200&width=200',rating: 5  },
      { name: 'Product', price:100, image: '/product.png?height=200&width=200',rating: 3  },
      { name: 'Product ',price:100, image: '/product.png?height=200&width=200' ,rating: 4},
      { name: 'Product ', price:100,image: '/product.png?height=200&width=200',rating: 5  },
    ]
  
    return (
      <div className="py-20 bg-main-green">
        <div className="container mx-auto">
        <p className='uppercase font-semibold text-center text-md text-other-green  '>Best sellers</p>
        <p className="text-4xl font-bold text-center mb-6 text-some-blue">Product Collection</p>
        <p className='text-white text-center p-3'>Laoreet interdum phasellus ultrices id amet. Amet nibh varius fames vulputate. Gravida placerat velit amet.</p>
          <div className="flex flex-wrap -mx-4">
            {products.map((product, index) => (
              <div key={index} className="w-1/4 px-4 mb-8">
                <div className=" rounded-md overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full" />
                  <div className="p-4 grid grid-cols-2 gap-x-40">
                    <div>
                    <p className="text-xl  text-white  mb-2">{product.name}</p>
                  
                    </div>
                    <div>
                    <p className='text-white text-lg font-semibold'>{product.price} FRW</p>
                    <div className="flex">
                      {[...Array(product.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }