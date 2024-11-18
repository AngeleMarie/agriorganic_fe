import React from 'react'

export default function Collaborators() {
  const partners = ['Partner 1'];
  
  return (
    <div className="py-10 bg-white relative">
      <img src="side.svg" className='absolute h-auto w-24 my-56' alt="side" />
      <div className="container mx-auto border-other-green/5 border-y-2 py-4">
        <p className='uppercase font-semibold text-center text-md text-other-green'>Collaborators</p>
        <p className="text-4xl font-bold text-center mb-6 text-main-green">Trusted Partners</p>
        <p className='text-main-green text-lg text-center w-2/3 mx-auto py-2'>
          Our network of trusted partners works hand-in-hand with us to promote sustainable agricultural practices and ensure the highest quality standards. Together, we strive to innovate and create lasting impacts in the agricultural sector.
        </p>
        <div className="flex justify-center items-center mt-6">
          {partners.map((partner, index) => (
            <div key={index} className="w-1/5 px-4">
              <div className="p-4">
                <img src="/partener.png?height=50&width=100" alt={partner} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
