import React from "react";
import { FaBullseye } from "react-icons/fa6";

import Management from "../components/Management";
import Project from "../components/Project";

function About() {
  const visionArray = [
    {
        title: "Regenerative Agriculture",
        description: "Restores soil and biodiversity through eco-friendly farming practices, reducing reliance on chemicals and aiding climate resilience."
    },
    {
        title: "Reduce Food Waste",
        description: "Cutting food waste conserves resources and reduces emissions, making the food supply more efficient and eco-friendly."
    },
    {
        title: "Support Local and Seasonal Foods",
        description: "Consuming local produce lowers transport emissions, supports farmers, and ensures fresher, nutrient-rich food."
    },
    {
        title: "Encourage Plant-Based Diets",
        description: "Reducing meat consumption lowers environmental impact and promotes health, requiring fewer resources and protecting biodiversity."
    }
];
  return (
    <div className="w-full relative h-full bg-white">
      <div className="px-32 grid grid-cols-2">
        
        <img src="branch.png" className="absolute right-0" alt="branch" />
      
     

        <div className="my-24">
          <p className="text-2xl font-bold p-2 mt-8 text-main-green border-t-8 border-main-green w-[20%]">
            <span className="text-other-green">Know</span>
            <br />
            Our History <br />
          </p>
          <img
            src="poj1.jpg"
            alt="project1"
            className="w-[70%]  h-[650px] rounded-lg"
          />
        </div>

        <div className="mt-56">
          <h2 className="text-3xl font-semibold text-other-green mb-4">
            History & Background
          </h2>
          <p className="text-xl font-normal mb-6">
            AGRIORGANIC FARM Ltd was founded in July 2023 by students from the
            University of Rwanda's College of Agriculture, Food Science, and
            Forestry (CAFF). Their mission is to address challenges in the
            agricultural sector, with a focus on sustainability. The founders
            identified climate change and the growing accumulation of
            biodegradable waste in landfills as significant environmental
            issues. This waste, instead of being left to degrade, can be
            transformed into organic fertilizers to combat the reliance on
            chemical fertilizers, which harm soil health and reduce
            productivity.
          </p>
          <p className="text-xl font-normal">
            We seek to promote organic farming practices that enhance soil
            fertility and boost crop yields. They also aim to address health
            risks linked to chemical fertilizers, including rising cancer rates
            and the decline of beneficial insects, which threaten biodiversity.
            The company's commitment extends to promoting organic pest
            management solutions that reduce the harmful impact on human health
            and the environment, making agriculture safer and more sustainable
            for future generations.
          </p>
  
        </div>
      </div>

      <div className=" h-full w-full py-20">
        <h1 className="text-4xl text-other-green mx-32">Our Success Numbers</h1>
        <div className="bg-[#0C2A19] mt-4 py-10 rounded-xl mx-32 justify-items-center justify-center items-center grid grid-cols-3">
          <div className="text-white border-r-2 px-20 border-other-green">
            <img src="cube.png" alt="cube" className="ml-16" />
            <p className="font-bold text-4xl text-center">10 +</p>
            <p>Total products researched</p>
          </div>
          <div className="text-white  border-r-2 px-20  border-other-green">
            <img src="stars.png" alt="stars" className="" />
            <p className="font-bold text-4xl text-center">5+</p>
            <p>Services Provided</p>
          </div>
          <div className="text-white">
            <img src="users.png" alt="users" className="ml-12" />
            <p className="font-bold text-4xl text-center">100+</p>
            <p>Reviews on Our Offerings</p>
          </div>
        </div>
      </div>

     
      <div className="bg-main-green pb-20 relative">
       <img src="style.png" alt="style" className="absolute w-full bottom-0" />
        <div className="mx-32">
          <div className="pt-24  pb-12">
            <p className="text-2xl font-bold p-2 text-white border-t-8 border-other-green w-[10%]">
              <span className="font-light">Our</span>
              <br />
              Vision <br />
            </p>

          </div>
        </div>
        <div className="flex flex-row">
          <div className="ml-24">
          
              
                   
                      <p className=" mx-18  px-12  capitalize text-5xl w-2/3 text-white font-medium  ">To sustain and secure food system that promotes the health of humans and the environment</p>                                          
            
          </div>
         
          </div>
      </div>
      <div className=" w-full bg-white px-32 ">
        <img
          src="bgServ.png"
          alt="background"
          className="absolute h-[20%] -z-10"
        />
         <div className="bg-white pb-20">
       
       <div className="mx-32 relative">
         <div className="py-24">
           <p className="text-2xl font-bold p-2 text-main-green border-t-8 border-main-green w-[10%]">
             <span className="text-other-green">Our</span>
             <br />
             Mission <br />
           </p>
         </div>
       </div>
       <div className="flex mx-32 gap-32">
         <div className="relative bottom-20  bg-[#D2FFDE] h-[30%] w-[23%] rounded-xl p-6">
           <div className="flex gap-2">
             <FaBullseye className=" w-8 h-8  text-other-green  bg-[#266937] bg-opacity-30 p-1 rounded-md " />
             <p className="text-other-green font-bold pb-2 text-center">
             To promote organic farming and agroecological practices in general
             </p>
           </div>

           
         </div>
         
         <img
           src="crop.png"
           alt="crop"
           className="justify-center items-center z-10"
         />
         <div className="bg-[#D2FFDE] h-[30%] w-[23%] rounded-xl p-6">
           <div className="flex gap-2">
             <FaBullseye className=" w-8 h-8 text-other-green bg-[#266937] bg-opacity-30 p-1 rounded-md " />
             <h1 className="text-other-green font-bold text-center">
             To advocate for sustainable food systems
             </h1>
           </div>

         </div>
       </div>
       <div className="relative left-[300px] mt-16 bg-[#D2FFDE]  w-[23%] rounded-xl p-6">
         <div className="flex gap-2">
           <FaBullseye className=" w-8 h-8 text-other-green bg-[#266937] bg-opacity-30 p-1 rounded-md " />
           <h1 className="text-other-green font-bold text-center">
           To foster research and innovation
           </h1>
         </div>
         </div>
         <div className="relative left-2/3  bg-[#D2FFDE] h-[30%]  w-[23%] rounded-xl p-6">
         <div className="flex gap-2 ">
           <FaBullseye className=" w-8 h-8 text-other-green bg-[#266937] bg-opacity-30 p-1 rounded-md " />
           <h1 className="text-other-green font-bold text-center">
           To educate and empower local farmers
           </h1>
         </div>
       </div>      
     </div>
     <div className="mx-32">
          <div className="pt-12">
            <p className="text-2xl font-bold p-2 text-main-green border-t-8 border-other-green w-[10%]">
              <span className="font-light">Core</span>
              <br />
             Values <br />
            </p>

          </div>
        </div>
    
      <div className="bg-white h-full w-full py-20">
        <div className="bg-[#0C2A19] mt-4 py-10 rounded-xl mx-32 justify-items-center justify-center items-center grid grid-cols-4">
          <div className="text-white border-r-2 px-20 border-other-green">
            <p className="font-bold text-xl py-6 capitalize">+ Service to all</p>
           
          </div>
          <div className="text-white  border-r-2 px-20 py-6 border-other-green">
            <p className="font-bold text-xl py-4 capitalize text-center">
            + Total integrity
            
            </p>
           
          </div>
          <div className="text-white  border-r-2 px-8 py-6 border-other-green">
            <p className="font-bold text-xl py-4 capitalize ">
          +  Absolute commitment to quality
            </p>
          </div>
          <div className="text-white">
            <p className="font-bold text-xl py-6 px-8 capitalize">
           + Respect and devotion to Mother Nature

            </p>
          </div>
          
        </div>
      </div>

      </div>


      <div className="bg-main-green h-full w-full py-20">
        <div className="text-center">
         
          <p className="text-4xl font-bold text-center mb-3 text-some-blue">
            Explore our Current project
          </p>
          <p className="text-white text-center  w-2/3 mx-auto text-lg font-normal py-3">
            Research about assessing biopestide effectivess on treating and
            preventing pest and disease on maize, beans, and Potatoes in Muko
            and Gataraga sectors of Musanze district
          </p>
        </div>
        <div className="mt-4 py-10 mx-32 justify-items-center justify-center items-center  ">
          <Project />
        </div>
      
      </div>
      <div className="my-24 mx-32">
          <Management />
        </div>
    
    
    </div>
  );
}

export default About;
