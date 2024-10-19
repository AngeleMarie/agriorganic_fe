import React from 'react'

const UpcomingPayments = () => (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Payments Methods</h3>
      <ul className="space-y-2">
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-other-green rounded-full mr-2"></span>
            <span>Cash On Delivery</span>
          </div>
          <span className="text-other-green font-medium">$8258.23</span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[#266937] rounded-full mr-2"></span>
            <span>Electronic Payement</span>
          </div>
          <span className="text-[#266937] font-medium">$6486.69</span>
        </li>
          </ul>
    </div>
  );

export default UpcomingPayments