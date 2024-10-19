import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';



export default function LoginPage() {
  return (
    <>
    <Navbar/>
    <div className="flex p-32 ">
        
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="login.png"
          alt="Agricultural Sprayer"
          className="rounded-lg shadow-2xl m-auto w-3/4 "
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6">
            Welcome <span role="img" aria-label="waving hand">👋</span>
          
          </h1>
          <p className='text-blackie pb-12'>Enter your details below</p>
          <form>
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
              <p className='grid grid-cols-2 gap-x-24 py-4 text-main-green'>Need Help Logging ?
              <Link to="/forget" className="text-green-600  hover:underline">
              Forgot Password?
            </Link>
              </p>
           
            </div>
            <button className="w-full bg-[#266937] text-white py-2 rounded-md font-semibold hover:bg-green-700">
              Log In
            </button>
          </form>
          <div className="text-center ">

          <p className=' w-full  pt-4 text-main-green'>Do not Have an Account Yet ?
              <Link to="/register" className="text-green-600  font-medium  px-2 underline underline-offset-2">
              Register Now
            </Link>
              </p>
          </div>
          <div className='border-2 flex items-center text-main-green   border-main-green/50 p-4 text-center my-8'>
          <img src="google.svg" alt="google"  className='pl-24 pr-4 justify-center'/>Sign In with google</div>
        
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );

}
