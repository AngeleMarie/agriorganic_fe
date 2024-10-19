import React from 'react'
import { 
     MoonIcon,     
    BellIcon, 
    ArrowRightOnRectangleIcon,
    MagnifyingGlassIcon,
    
  } from '@heroicons/react/24/outline';

const TopBar = () => (
    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full py-2 px-4 pl-10 w-64 outline-none  focus:border-[#266937]"
        />
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-100">
          <MoonIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full bg-gray-100 relative">
          <BellIcon className="h-5 w-5 text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
        </button>
        <button className="flex items-center text-gray-700 hover:text-red-600">
          <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
          Log Out
        </button>
      </div>
    </div>
  );
  export default TopBar