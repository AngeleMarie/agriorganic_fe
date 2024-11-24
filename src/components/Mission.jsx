import React from "react";
import { FaBullseye } from "react-icons/fa6";

function Mission() {
  return (
    <div className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-32">
      <img
        src="bgServ.png"
        alt="background"
        className="absolute h-[20%] -z-10 hidden lg:block"
      />
      <div className="bg-white pb-20">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 relative">
          <div className="py-12 sm:py-16 lg:py-24">
            <p className="text-xl sm:text-2xl font-bold p-2 text-main-green border-t-4 sm:border-t-8 border-main-green w-[30%] sm:w-[15%] lg:w-[10%]">
              <span className="text-other-green">Our</span>
              <br />
              Mission
              <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mx-4 sm:mx-8 md:mx-16 lg:mx-32 gap-8 lg:gap-32">
          <div className="bg-[#D2FFDE] h-auto lg:h-[30%] w-full lg:w-[23%] rounded-xl p-6">
            <div className="flex gap-2 items-center">
              <FaBullseye className="w-8 h-8 text-other-green bg-[#266937] bg-opacity-30 p-1 rounded-md" />
              <p className="text-other-green font-bold text-sm sm:text-base text-center">
                To promote organic farming and agroecological practices in general
              </p>
            </div>
          </div>
          <img
            src="crop.png"
            alt="crop"
            className="w-full lg:w-auto lg:block mx-auto z-10"
          />
          <div className="bg-[#D2FFDE] h-auto lg:h-[30%] w-full lg:w-[23%] rounded-xl p-6">
            <div className="flex gap-2 items-center">
              <FaBullseye className="w-8 h-8 text-other-green bg-[#266937] bg-opacity-30 p-1 rounded-md" />
              <h1 className="text-other-green font-bold text-sm sm:text-base text-center">
                To advocate for sustainable food systems
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start mt-16 gap-8 lg:gap-32">
          <div className="bg-[#D2FFDE] w-full lg:w-[23%] rounded-xl p-6 mx-auto">
            <div className="flex gap-2 items-center">
              <FaBullseye className="w-8 h-8 text-other-green bg-[#266937] bg-opacity-30 p-1 rounded-md" />
              <h1 className="text-other-green font-bold text-sm sm:text-base text-center">
                To foster research and innovation
              </h1>
            </div>
          </div>
          <div className="bg-[#D2FFDE] w-full lg:w-[23%] rounded-xl p-6 mx-auto">
            <div className="flex gap-2 items-center">
              <FaBullseye className="w-8 h-8 text-other-green bg-[#266937] bg-opacity-30 p-1 rounded-md" />
              <h1 className="text-other-green font-bold text-sm sm:text-base text-center">
                To educate and empower local farmers
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
