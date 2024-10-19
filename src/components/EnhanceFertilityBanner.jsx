import React from 'react';


export default function EnhanceFertilityBanner() {
  return (
    <div className="bg-black text-white  mb-8  flex justify-between items-center">
      <div className='px-12'>
        <p className='text-other-green font-semibold py-4'>Categories</p>
        <h2 className="text-3xl font-bold mb-2">Enhance Your Land Fertility</h2>
        <p className="mb-4 text-lg">Boost your crop yield with our premium fertilizers</p>
        <button className="bg-[#266937] hover:bg-other-green px-12 font-medium text-lg py-2 mt-12  text-white">Buy Now</button>
      </div>
      <img src="/fertiliser.png" alt="Fertilizer Bottle" className="w-1/2 h-auto object-cover" />
    </div>
  );
}