import React, { useState } from 'react';
import {  ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import * as XLSX from 'xlsx';

const orders = [
  { customer: 'Paula Walker', date: 'October 24, 2024', price: '$1476.00', product: 'Microsoft Surface 7', status: 'Completed', image: '/agro.png' },
  { customer: 'John Smith', date: 'October 22, 2024', price: '$678.00', product: 'Apple MacBook Pro', status: 'Pending', image: '/agro.png' },
  { customer: 'Sophia Johnson', date: 'October 20, 2024', price: '$349.99', product: 'Google Pixel 7', status: 'Cancelled', image: '/agro.png' },
  { customer: 'Michael Lee', date: 'October 18, 2024', price: '$89.00', product: 'Amazon Echo Dot', status: 'Completed', image: '/agro.png' },
  { customer: 'Olivia Brown', date: 'October 15, 2024', price: '$1234.50', product: 'Samsung Galaxy S21', status: 'Pending', image: '/agro.png' }
];


const getStatusClass = (status) => {
  switch (status) {
    case 'Pending':
      return 'bg-orange-100 text-orange-500';
    case 'Completed':
      return 'bg-green-100 text-green-500';
    case 'Cancelled':
      return 'bg-red-100 text-red-500';
    default:
      return 'bg-gray-100 text-gray-500';
  }
};

const LastOrder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStatus, setFilteredStatus] = useState('');

  // Filtered orders based on search term and status
  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filteredStatus ? order.status === filteredStatus : true)
  );

  // Download table data as Excel
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredOrders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Orders');
    XLSX.writeFile(workbook, 'orders.xlsx');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Orders</h3>
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search customer ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border outline-none text-other-green focus:border-[#266937] rounded px-2 py-1 text-sm"
          />
          
        
          <select
            value={filteredStatus}
            onChange={(e) => setFilteredStatus(e.target.value)}
            className="border rounded px-2 py-1 text-sm outline-none focus:border-other-green"
          >
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          
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
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Product</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr key={index} className="bg-white shadow-md my-2">
              <td className="py-3 px-4 flex text-blackie/90 items-center">
                <img src={`${order.image}?height=30&width=30`} alt={order.customer} className="w-8 h-8 rounded-full mr-2" />
                {order.customer}
              </td>
              <td className="py-3 px-4 text-blackie/90">{order.date}</td>
              <td className="py-3 px-4 text-blackie/90">{order.price}</td>
              <td className="py-3 px-4 text-blackie/90">{order.product}</td>
              <td className="py-3 px-4">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold opacity-90 ${getStatusClass(order.status)}`}>
                  {order.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LastOrder;
