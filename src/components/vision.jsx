import React from "react";

function Vision() {
  return (
    <div className="bg-main-green pb-20 relative px-12">
      {/* Background Image */}
      <img src="style.png" alt="style" className="absolute w-full bottom-0" />
      
      <div className=" md:mx-8">
        {/* Vision Title */}
        <div className="pt-24 pb-12">
          <p className="text-2xl font-bold p-2 text-white border-t-8 border-other-green w-[30%] sm:w-[10%] mx-12">
            <span className="font-light">Our</span>
            <br />
            Vision <br />
          </p>
        </div>

        {/* Vision Statement */}
        <div className="flex flex-col sm:flex-row">
          <div className="mb-12 sm:mb-0 sm:ml-24">
            <p className="text-4xl sm:text-5xl text-white font-medium text-justify sm:text-center mx-8 sm:mx-0">
              To sustain and secure food systems that promote the health of humans and the environment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
