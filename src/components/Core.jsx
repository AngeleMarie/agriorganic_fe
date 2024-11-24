import React from "react";

function Core() {
  return (
    <div className="mx-8">
      {/* Section Title */}
      <div className="px-4 sm:px-8 md:px-16  lg:mx-32">
        <div className="pt-12">
          <p className="text-xl sm:text-2xl font-bold p-2 text-main-green border-t-4 sm:border-t-8 border-other-green w-[30%] sm:w-[15%] lg:w-[10%]">
            <span className="font-light">Core</span>
            <br />
            Values
            <br />
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-white w-full py-12 sm:py-16 lg:py-20">
        <div className="bg-[#0C2A19] mt-4 py-8 sm:py-10 rounded-xl px-4 sm:px-8 md:px-16 lg:mx-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {/* Core Value 1 */}
          <div className="text-white border-b-2 lg:border-b-0 lg:border-r-2 px-4 lg:px-20 border-other-green">
            <p className="font-bold text-base sm:text-lg lg:text-xl py-4 text-center capitalize">
              + Service to all
            </p>
          </div>

          {/* Core Value 2 */}
          <div className="text-white border-b-2 lg:border-b-0 lg:border-r-2 px-4 lg:px-20 py-4 border-other-green">
            <p className="font-bold text-base sm:text-lg lg:text-xl py-4 text-center capitalize">
              + Total integrity
            </p>
          </div>

          {/* Core Value 3 */}
          <div className="text-white border-b-2 lg:border-b-0 lg:border-r-2 px-4 lg:px-8 py-4 border-other-green">
            <p className="font-bold text-base sm:text-lg lg:text-xl py-4 text-center capitalize">
              + Absolute commitment to quality
            </p>
          </div>

          {/* Core Value 4 */}
          <div className="text-white px-4 lg:px-8 py-4">
            <p className="font-bold text-base sm:text-lg lg:text-xl py-4 text-center capitalize">
              + Respect and devotion to Mother Nature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Core;
