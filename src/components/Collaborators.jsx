import React from 'react'

export default function Collaborators() {
  const partners = ['Partner 1'];
  
  return (
    <div className="py-10 bg-white relative">
    
      <div className="container mx-auto border-other-green/5 border-y-2 py-4">
    
        <p className="text-4xl font-bold text-center mb-6 text-main-green">Trusted Partners</p>
   
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
