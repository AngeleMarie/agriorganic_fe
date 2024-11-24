import React from 'react';

export default function Collaborators() {
  const partners = ['Partner 1'];

  return (
    <div className="py-10 bg-white relative">
      {/* Section Wrapper */}
      <div className="container mx-auto border-other-green/5 border-y-2 py-4">
        {/* Section Title */}
        <p className="text-3xl sm:text-4xl font-bold text-center mb-6 text-main-green">
          Trusted Partners
        </p>
        {/* Partner Logos */}
        <div className=" justify-center items-center">
          
              <div className="p-4">
                <img
                  src="/partener.png?height=50&width=100"
                  alt="partner"
                  className="h-48 mx-auto"
              
                />
              </div>    
        </div>
      </div>
    </div>
  );
}
