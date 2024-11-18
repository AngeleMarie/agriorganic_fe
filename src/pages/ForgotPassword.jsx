import React from 'react'
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function ForgotPassword() {
  return (
    <>
      <div className="flex p-32 ">
        
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="register.png"
          alt="Agricultural Sprayer"
          className="rounded-lg shadow-2xl m-auto w-3/4 "
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
            <Link to="/login" className='flex text-other-green py-2 font-medium hover:underline underline-offset-2'> <ChevronLeft/>Back</Link>
          <h1 className="text-3xl font-bold mb-4  ">
            Forgot Password
          
          </h1>
          <p className='text-blackie/70 pb-4'>
          Enter your registered email address. we will send you a code to reset your password.
          </p>
          <form>
        
            <div className="mb-4">
                <label htmlFor="email" className='text-other-green text-sm'>Email Address</label>
              <input
                type="text"
                className="w-full p-2 border-2 border-gray-400/40 outline-none rounded-md focus:border-[#266937]/80 text-other-green "
              />
            </div>
            <div className="mb-6">
            <label htmlFor="email" className='text-other-green text-sm'>Password</label>

              <input
                type="password"
                className="w-full p-2 border-2 border-gray-400/40 outline-none rounded-md focus:border-[#266937]/80 text-other-green"
              />
            </div>
            <div className="mb-6">
            <label htmlFor="email" className='text-other-green text-sm'>Re-enter password</label>

              <input
                type="password"
                className="w-full p-2 border-2 border-gray-400/40 outline-none rounded-md focus:border-[#266937]/80 text-other-green"
              />
            </div>
            <button className="w-full bg-[#266937] text-white py-3 rounded-md font-semibold hover:bg-green-700">
              <Link to="/verify">Send OTP</Link>
            </button>
          </form>
   
        </div>
      </div>
    </div>
  
    </>
  );

}
