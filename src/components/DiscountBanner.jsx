import React from 'react';

import { ChevronRight } from 'lucide-react';

export default function DiscountBanner() {
  return (
    <div className="bg-main-green text-white px-8 py-2 rounded-lg mb-8 flex justify-between items-center relative">
      <div>
        <div className='flex flex-row px-12 my-8'>
            <img src="picon.svg" alt="plantie"  className='mx-4 '/>
            <p className='text-white font-medium py-2'>Get a discount</p>
        </div>
        <h2 className="text-5xl font-semibold  w-2/3 px-12 mb-12">Up to 10% off Voucher</h2>
        <button variant="outline" className="text-white flex underline underline-offset-8 border-white  absolute bottom-14 mx-12">
          Shop Now <ChevronRight className=" ml-2" />
        </button>
      </div>
      <img src="/plantie.png" alt="Plant" className="" />
    </div>
  );
}