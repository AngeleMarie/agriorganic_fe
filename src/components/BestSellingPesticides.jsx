import React from 'react';

import ProductShowcase from './ProductShowcase';

export default function BestSellingPesticides() {
  return (
    <section className="mb-8">
      <div className="flex items-center my-12">
        <div className="w-2 h-8 bg-other-green mr-2 rounded-sm"></div>
        <h3 className="text-lg font-bold text-other-green">This month</h3>
      </div>
     
      <div className="flex justify-between items-center mb-4">
      <p className="text-3xl font-bold  text-main-green mb-8"> Best Selling Pesticides </p>
        <button variant="outline">View All</button>
      </div>
      <ProductShowcase />
    </section>
  );
}