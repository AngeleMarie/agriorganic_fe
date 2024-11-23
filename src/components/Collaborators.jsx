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
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3  lg:w-1/4 px-4 items-center justify-center"
            >
              <div className="p-4">
                <img
                  src="/partener.png?height=50&width=100"
                  alt={partner}
                  className="w-3/4 sm:w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
