import React from "react";

function Numbers() {
  return (
    <div className="h-full w-full py-20">
      <h1 className="text-2xl font-medium md:text-4xl text-main-green mx-8 md:mx-32">Our Success Numbers</h1>
      <div className="bg-[#0C2A19] mt-4 py-10 rounded-xl mx-8 md:mx-32 justify-items-center justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="text-white border-b-2 sm:border-b-0 sm:border-r-2 px-8 sm:px-20 border-other-green">
          <img src="cube.png" alt="cube" className="mx-auto mb-4" />
          <p className="font-bold text-4xl text-center">10 +</p>
          <p className="text-center">Total products researched</p>
        </div>
        <div className="text-white border-b-2 sm:border-b-0 sm:border-r-2 px-8 sm:px-20 border-other-green">
          <img src="stars.png" alt="stars" className="mx-auto mb-4" />
          <p className="font-bold text-4xl text-center">5+</p>
          <p className="text-center">Services Provided</p>
        </div>
        <div className="text-white border-b-2 sm:border-b-0 px-8 sm:px-20 border-other-green">
          <img src="users.png" alt="users" className="mx-auto mb-4" />
          <p className="font-bold text-4xl text-center">100+</p>
          <p className="text-center">Reviews on Our Offerings</p>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
