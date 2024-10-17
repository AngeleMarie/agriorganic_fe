import React from 'react'



export default function Newsletter() {
  return (
    <div className="py-20 bg-main-green">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-white">Sign Up for Exclusive Offers, Care Tips, Newsletters And More!</h2>
        <p className='text-white text-md mb-4 '>Sign up to our newsletter to save 15% OFF your order!</p>
        <form className="max-w-3xl mx-auto">
          <div className="flex w-full">
            <input type="text" placeholder="Name" className="flex-grow mr-2  bg-main-green border-2 h-12 w-1/3 rounded-md outline-none px-24 text-white border-white " />
            <input type="email" placeholder="Email address" className="flex-grow mr-2 bg-main-green border-2 h-12 w-96 px-24 rounded-md outline-none px-18 text-white border-white" />
            <button type="submit" className="bg-other-green px-8 shadow-md rounded-md text-white hover:bg-green-800">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  )
}