import React from 'react';
import ProductFilters from './ProductFilters';

export default function Sidebar() {
  const categories = [
    'Product Categories',
    'Product Pricing',
    'Product Sourcing',
    'Product Mixing',
    'Extension Services'
  ];

  return (
    <aside className="md:w-1/4 mb-8 md:mb-0">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="mb-8">
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <a href="/" className="text-green-700 hover:text-green-900">{category}</a>
          </li>
        ))}
      </ul>
      <ProductFilters />
    </aside>
  );
}