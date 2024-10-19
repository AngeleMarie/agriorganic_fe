import React, { useState } from 'react';
import {  ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import * as XLSX from 'xlsx';

const transactions = [
  { customer: 'Paula Walker', date: 'October 24, 2024', price: '$1476.00', product: 'Microsoft Surface 7', contacts: '+250798978831', image: '/agro.png' },
  { customer: 'John Smith', date: 'October 22, 2024', price: '$678.00', product: 'Apple MacBook Pro', contacts: 'amrieangele@gmail.com', image: '/agro.png' },
  { customer: 'Sophia Johnson', date: 'October 20, 2024', price: '$349.99', product: 'Google Pixel 7', contacts: 'amrieangele@gmail.com', image: '/agro.png' },
  { customer: 'Michael Lee', date: 'October 18, 2024', price: '$89.00', product: 'Amazon Echo Dot', contacts: 'amrieangele@gmail.com', image: '/agro.png' },
  { customer: 'Olivia Brown', date: 'October 15, 2024', price: '$1234.50', product: 'Samsung Galaxy S21', contacts: 'amrieangele@gmail.com', image: '/agro.png' }
];



const Customers= () => {
  const [searchTerm, setSearchTerm] = useState('');


  
  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.customer.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredTransactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'transactions');
    XLSX.writeFile(workbook, 'transactions.xlsx');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Transaction History</h3>
        <div className="flex items-center space-x-4">
          
          <input
            type="text"
            placeholder="Search customer ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border outline-none text-other-green focus:border-[#266937] rounded px-2 py-1 text-sm"
          />
          
                  
          <button
            onClick={downloadExcel}
            className="flex items-center text-gray-500 hover:text-other-green"
          >
            <ArrowDownTrayIcon className="h-5 w-5 mr-1" />
            Download
          </button>
        </div>
      </div>

      <table className="w-full border-spacing-2">
        <thead className="bg-main-green text-white">
          <tr>
            <th className="py-2 px-4 text-left">Customer</th>
            <th className="py-2 px-4 text-left">Contacts</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Product</th>
            <th className="py-2 px-4 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index} className="bg-white shadow-md my-2">
              <td className="py-3 px-4 flex text-blackie/90 items-center">
                <img src={`${transaction.image}?height=30&width=30`} alt={transaction.customer} className="w-8 h-8 rounded-full mr-2" />
                {transaction.customer}
              </td>
              <td className="py-3 px-4 text-blue-700 underline">{transaction.contacts}</td>
              <td className="py-3 px-4 text-blackie/90">{transaction.date}</td>
              <td className="py-3 px-4 text-blackie/90">{transaction.product}</td>
              <td className="py-3 px-4 text-blackie/90"> {transaction.price} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
