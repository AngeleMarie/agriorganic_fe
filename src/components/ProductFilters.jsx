import React from 'react';



export default function ProductFilters() {
  const filters = [
    { 
      name: 'Filter By Color',
      options: ['Green', 'Red', 'Blue', 'White', 'Black', 'Yellow']
    },
    {
      name: 'Filter By Quantity',
      options: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    {
      name: 'Filter By Packaging',
      options: ['Bag', 'Jerrycan', 'Bottle']
    }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Product Filters</h3>
      {filters.map((filter, filterIndex) => (
        <div key={filterIndex} className="mb-6">
          <h4 className="font-medium mb-2">{filter.name}</h4>
          
          {filter.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex items-center mb-2">
              <input type="checkbox" id={`${filter.name}-${option}`} />
              <label htmlFor={`${filter.name}-${option}`} className="ml-2">
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}