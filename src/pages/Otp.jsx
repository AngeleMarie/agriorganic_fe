import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';


export default function Otp() {
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate(); 

  const handleVerifyOtp = (e) => {
    e.preventDefault(); 
    setShowPopup(true); 
  };

  return (
    <div className="relative"> 

      <div className={`flex p-32 ${showPopup ? 'blur-md' : ''} transition duration-300`}> 
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="login.png"
            alt="Agricultural Sprayer"
            className="rounded-lg shadow-2xl m-auto w-3/4"
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <Link to="/forget" className="flex text-other-green py-2 font-medium hover:underline underline-offset-2">
              <ChevronLeft />Back
            </Link>
            <h1 className="text-3xl font-bold mb-4">Enter OTP</h1>
            <p className="text-blackie/70 pb-4">
              We have shared a code to your registered email address robertfox@example.com
            </p>
            <form>
              <div className="my-8 flex justify-between">
                <input
                  type="text"
                  className="w-1/4 mx-4 text-2xl p-4 border-2 text-center border-gray-400/40 outline-none rounded-md focus:border-[#266937]/80 text-other-green"
                />
                <input
                  type="text"
                  className="w-1/4 mx-4 p-4 text-2xl border-2 text-center border-gray-400/40 outline-none rounded-md focus:border-[#266937]/80 text-other-green"
                />
                <input
                  type="text"
                  className="w-1/4 mx-4 p-4 text-2xl text-center border-2 border-gray-400/40 outline-none rounded-md focus:border-[#266937]/80 text-other-green"
                />
                <input
                  type="text"
                  className="w-1/4 mx-4 p-4 text-2xl text-center border-2 border-gray-400/40 outline-none rounded-md focus:border-[#266937]/80 text-other-green"
                />
              </div>
              <button
                onClick={handleVerifyOtp}
                className="w-full bg-[#266937] cursor-pointer text-white py-3 rounded-md font-semibold hover:bg-green-700"
              >
                Verify OTP
              </button>
            </form>
          </div>
        </div>
      </div>


      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-md shadow-lg text-center max-w-sm">
            <img src="tick.svg" alt="tick" className='mx-auto my-2' />
            <h2 className="text-xl font-bold mb-4 text-main-green ">Password Changed Successfully</h2>
            <p className="text-gray-600 text-sm mb-6">Your password has been updated successfully</p>
            <button
              onClick={() => navigate('/login')} 
              className="bg-[#266937] text-white py-3 w-full rounded-md font-medium hover:bg-green-700"
            >
              Back to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
