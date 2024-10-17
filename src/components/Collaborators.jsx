import React from 'react'


export default function Collaborators() {
  const partners = ['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5']
  
  return (
    <div className="py-10 bg-white ">
      <img src="side.svg" className='absolute h-auto w-24 my-56' alt="side" />
      <div className="container mx-auto border-other-green/5 border-y-2  py-4">
        <p className='uppercase font-semibold text-center text-md text-other-green  '>Collaborators</p>
        <p className="text-4xl font-bold text-center mb-6 text-main-green">Trusted Partners</p>
        <p className='text-blackie text-center p-3'>Laoreet interdum phasellus ultrices id amet. Amet nibh varius fames vulputate. Gravida placerat velit amet.</p>
        <div className="flex justify-between items-center">
          {partners.map((partner, index) => (
            <div key={index} className="w-1/5 px-4">
              <div className=" p-4 ">
                <img src="/partener.png?height=50&width=100" alt={partner} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
