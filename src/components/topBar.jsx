import React, { useState } from 'react';
import { 
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true); // Show feedback during logout
    try {
      const response = await fetch('https://ecommerce-kpd4.onrender.com/api/v1/users/auth/logout', {
        method: 'GET',
        credentials: 'include', // Include cookies for session handling
      });

      if (response.ok) {
        console.log('Logout successful');
        navigate('/login'); // Redirect to the login page
      } else {
        console.error('Failed to log out:', await response.json());
        alert('Logout failed. Please try again.'); // Feedback for the user
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoggingOut(false); // Re-enable the logout button
    }
  };

  return (
    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full py-2 px-4 pl-10 w-64 outline-none focus:border-[#266937]"
          aria-label="Search"
        />
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
      
      {/* Logout Button */}
      <div className="flex items-center space-x-4">
        <button
          className="flex items-center text-gray-700 hover:text-red-600"
          onClick={handleLogout}
          disabled={isLoggingOut} // Disable button during logout
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
          {isLoggingOut ? 'Logging Out...' : 'Log Out'}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
