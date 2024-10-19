import React from 'react';

const featuredProduct = {
  name: 'Aprehend',
  description: 'Black and White version of the FGS coming out on sale.',
  image: '/plantie.png', // replace with the actual image URL
  buttonText: 'Shop Now',
};

const newArrivals = [
  { name: 'Vermicompost', description: 'Featured vermi collections that give you another vibe.', image: '/prod.png' },
  { name: 'Bopastiodes', description: 'A range of nutrients for your plants.', image: '/prod.png' },
  { name: 'Microbes', description: 'Quick and reliable.', image: '/prod.png' },
];

export default function NewArrivals() {
  return (
    <section>
      <div className="flex items-center my-12 ">
        <div className="w-2 h-8 bg-other-green mr-2"></div>
        <h3 className="text-lg font-bold text-other-green">Featured</h3>
      </div>
      <h2 className="text-3xl font-bold text-main-green mb-8">New Arrival</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  
        <div className="md:col-span-2 bg-black relative overflow-hidden">
          <img src={featuredProduct.image} alt={featuredProduct.name} className="w-auto  p-8  absolute  right-0  top-12 h-auto " />

        <div className="p-6 absolute bottom-20 left-8">
            <h3 className="text-2xl font-semibold py-4 text-white ">{featuredProduct.name}</h3>
            <p className="text-white  font-light  text-lg w-2/3 mb-4">{featuredProduct.description}</p>
            <button className="text-white underline underline-offset-8 py-2 ">{featuredProduct.buttonText}</button>
          </div>
       
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
    
          <div className="flex py-4 bg-black shadow-lg overflow-hidden ">
            <img src={newArrivals[0].image} alt={newArrivals[0].name} className="w-auto h-auto object-cover" />
            <div className="p-4 ">
              <h4 className="text-lg font-semibold text-white mb-2">{newArrivals[0].name}</h4>
              <p className="text-gray-300 mb-4">{newArrivals[0].description}</p>
              <button className="text-white underline underline-offset-4 rounded-lg">Shop Now</button>
            </div>
          </div>

 
          <div className="flex gap-4 h-64">
            {newArrivals.slice(1).map((product, index) => (
              <div key={index} className="flex-1 bg-black shadow-lg overflow-hidden relative">
                <div className=''></div>
                <img src={product.image} alt={product.name} className="w-40 h-40 my-4  right-4  top-4 absolute " />
                <div className="w-2/3 mx-4 bottom-8  absolute">
                  <h4 className="text-lg font-semibold text-white mb-2">{product.name}</h4>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <button className="text-white  underline underline-offset-4 px-4 rounded-lg">Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
