import React from "react";

function Home() {
  return (
    <div className="relative min-h-screen grid grid-cols-2 p-32">
      <img 
        src="background.png" 
        alt="background" 
        className="absolute inset-0 w-full h-full object-cover -z-10" 
      />
      <img src="branch.png"  className="absolute right-0" alt="branch" />
      <img src="branchie.png"  className="absolute left-0" alt="branch" />
      <img src="banju.svg"  className="absolute right-1/4 top-48 opacity-55" alt="branch" />
      <img src="smallie.svg"  className="absolute right-0 bottom-0 opacity-55" alt="branch" />

      
      <div className="my-24">
        <img src="hands.png" alt="hands" />
      </div>
      <div className="my-32">
        <div>
<p className="text-7xl font-bold p-2 text-main-green">
          <span className="text-other-green">Healthy soil</span> on your <br />field. <br />
          <span className="text-other-green">Always.</span>
        </p>
        <p className="p-2 text-2xl font-semibold text-other-green">
          Healthy Soil, Sustainable Agriculture
        </p>
        <p className="p-2 w-1/2 text-justify text-main-green">
        By nurturing the soil, we cultivate resilient ecosystems that support thriving crops and a healthier planet.
        </p>
        <button className="m-2 capitalize bg-some-orange rounded-md shadow-md font-semibold text-white h-12 py-2 px-12">
          visit the shop
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
