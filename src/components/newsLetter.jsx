import React from 'react'

export default function Newsletter() {
  return (
    <div className="py-20 px-8  bg-main-green">
      <div className="container mx-auto  md:text-center">
        <h2 className="text-2xl  font-bold mb-2 text-white">Sign Up for Exclusive Offers, Care Tips, Newsletters And More!</h2>
        <p className='text-white text-md mb-4'>Sign up to our newsletter to save 15% OFF your order!</p>
        <form className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 w-full items-center">
            <input 
              type="text" 
              placeholder="Name" 
              className="flex-grow  w-full h-12 bg-main-green border-2 rounded-md outline-none px-2 text-white border-white" 
            />
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow w-full h-12 bg-main-green border-2 rounded-md outline-none px-2 text-white border-white" 
            />
            <button 
              type="submit" 
              className="bg-other-green px-8 py-3 sm:ml-4 mt-4 sm:mt-0 shadow-md rounded-md text-white hover:bg-green-800">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
