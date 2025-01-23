import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import { 
  ChartBarIcon, 
  CogIcon, 
  ShoppingCartIcon, 
  UserGroupIcon, 
} from '@heroicons/react/24/outline';

const AdminSidebar = () => {
  const navigate = useNavigate(); // Create navigate function
  const location = useLocation(); // Get current location

  // Function to handle navigation
  const handleNavigation = (route) => {
    navigate(`/${route}`); // Navigate to the specified route
  };

  return (
    <div className="bg-main-green text-white w-64 min-h-screen p-4">
      <div className="flex items-center mb-8">
        <img src="agriorganic.png" alt="logo" className="h-8 w-8 mr-2" />
        <h1 className="text-2xl font-bold">Agriorganic</h1>
      </div>
      <nav>
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li 
            className={`flex items-center cursor-pointer rounded p-2 ${location.pathname === '/dashboard' ? 'bg-other-green' : ''}`}
            onClick={() => handleNavigation('dashboard')} 
          >
            <ChartBarIcon className="h-5 w-5 mr-2" />
            Dashboard
          </li>
          <li 
            className={`flex items-center cursor-pointer rounded p-2 ${location.pathname === '/stock' ? 'bg-other-green' : ''}`}
            onClick={() => handleNavigation('stock')} 
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Stock
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-8 mb-4">Management</h2>
        <ul className="space-y-2">
          <li 
            className={`flex items-center cursor-pointer rounded p-2 ${location.pathname === '/adminNews' ? 'bg-other-green' : ''}`}
            onClick={() => handleNavigation('adminNews')} 
          >
            <UserGroupIcon className="h-5 w-5 mr-2" />
            News & Updates
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-8 mb-4">Settings</h2>
        <ul className="space-y-2">
          <li 
            className={`flex items-center cursor-pointer rounded p-2 ${location.pathname === '/settings' ? 'bg-other-green' : ''}`}
            onClick={() => handleNavigation('settings')} 
          >
            <CogIcon className="h-5 w-5 mr-2" />
            Profile
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
