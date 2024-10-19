import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Register() {
  return (
    <>
    <Navbar/>
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
          <h1 className="text-3xl font-bold mb-6">
            Create An Account
          
          </h1>
          <p className='text-blackie pb-12'>Enter your details below</p>
          <form>
          <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border-b-2 border-gray-400/40 outline-none text-other-green "
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your email/phone"
                className="w-full p-2 border-b-2 border-gray-400/40 outline-none text-other-green "
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border-b-2 border-gray-400/40 outline-none text-other-green"
              />
            </div>
            <button className="w-full bg-[#266937] text-white py-2 rounded font-semibold hover:bg-green-700">
              Create Account
            </button>
          </form>
          <div className="text-center mt-4">
            <p className='py-2'>
Alreaady Have An account ? 
            <Link to="/login" className="text-green-600 px-2  font-medium underline underline-offset-4">
              Login
            </Link>
            </p>
          </div>
          <div className='border-2 flex items-center text-main-green   border-main-green/50 p-4 text-center my-8'>
          <img src="google.svg" alt="google"  className='pl-24 pr-4 justify-center'/>Sign Up with google</div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );

}
