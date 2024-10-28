import React from "react";

function Home() {
  return (
    <div className="relative min-h-screen  bg-main-green/70 grid grid-cols-2 p-32">
      
            
            <img 
        src="backie2.jpg" 
        alt="background" 
        className="absolute  mix-blend-overlay  inset-0 w-full h-full object-cover -z-10" 
      />



      <div className="my-32">
        <div>
<p className="text-8xl font-bold p-2 text-white">
          <span className="text-other-green">Healthy soil</span> on your field. <br />
          <span className="text-other-green">Always.</span>
        </p>
        <p className="p-2 text-2xl font-semibold text-other-green">
          Healthy Soil, Sustainable Agriculture
        </p>
        <p className="p-2 w-2/3 text-lg text-justify text-white">
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
