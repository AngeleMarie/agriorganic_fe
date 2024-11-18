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
          <button className="py-2 px-6 bg-other-green rounded-lg mt-6 text-white font-bold text-lg">
            Join our community
          </button>
        </div>
      </div>

      <div className="bg-main-green h-full w-full py-20">
        <h1 className="text-4xl text-white mx-32">Our Success Numbers</h1>
        <div className="bg-[#0C2A19] mt-4 py-10 rounded-xl mx-32 justify-items-center justify-center items-center grid grid-cols-3">
          <div className="text-white border-r-2 px-20 border-other-green">
            <img src="cube.png" alt="cube" className="ml-10" />
            <p className="font-bold text-4xl">6,500,00</p>
            <p>Total products sold</p>
          </div>
          <div className="text-white  border-r-2 px-20  border-other-green">
            <img src="stars.png" alt="stars" className="" />
            <p className="font-bold text-4xl">6,500,00</p>
            <p>Reviews On Products</p>
          </div>
          <div className="text-white">
            <img src="users.png" alt="users" className="ml-10" />
            <p className="font-bold text-4xl">6,500,00</p>
            <p>Our Total Customers</p>
          </div>
        </div>
      </div>

      <div className="bg-white pb-20">
       
        <div className="mx-32">
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
                Promotion of Organic Farming and Agroecological Practices
              </p>
            </div>

            <p className="text-justify">
              By focusing on natural, sustainable methods that protect the
              environment and improve soil health and crop productivity. The
              company believes in farming that works in harmony with nature to
              preserve ecosystems for future generations.
            </p>
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
                Advocacy for Sustainable Food Systems
              </h1>
            </div>

            <p className="text-justify">
              Throughout promoting locally sourced, organic produce that
              supports consumer health and environmental protection. The company
              encourages waste reduction, biodiversity preservation, and
              minimizing harmful chemicals, aiming to build a resilient and
              sustainable agricultural economy for the benefit of all.
            </p>
          </div>
        </div>
        <div className="relative left-[500px] mt-16 bg-[#D2FFDE] h-[30%] w-[23%] rounded-xl p-6">
          <div className="flex gap-2">
            <FaBullseye className=" w-8 h-8 text-other-green bg-[#266937] bg-opacity-30 p-1 rounded-md " />
            <h1 className="text-other-green font-bold text-center">
              Fostering Research, Innovation, and Farmer Education
            </h1>
          </div>

          <p className="text-justify">
            We focus on research and innovation in sustainable agriculture,
            seeking better organic farming and pest management techniques. They
            prioritize educating and empowering local farmers, equipping them
            with the tools and knowledge to adopt sustainable practices, improve
            yields, and protect the environment.
          </p>
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
          <ul>
                {visionArray.map((item, index) => (
                    <li  className="text-white py-8 " key={index}>
                      <div className="flex flex-row space-x-6 mb-2 ">
                      <p className="border-2 text-center rounded-full w-10  font-semibold h-10 py-1 my-2 text-other-green border-other-green">{index+1}</p>
                      <div>
                      <p className="text-2xl text-some-blue font-medium " >{item.title}</p>
                      <p className=" text-xl  ">{item.description}</p>
                      </div>
                      

                      </div>                                     
                    </li>
                ))}
            </ul>
          </div>
          <div className="mr-24">
          <img src="vision.png" alt="vision" />
          </div>
          </div>
      </div>
      <div className=" w-full bg-white px-32 ">
        <img
          src="bgServ.png"
          alt="background"
          className="absolute h-[20%] -z-10"
        />

        <div className="my-24">
          <Management />
        </div>
      </div>


      <div className="bg-main-green h-full w-full py-20">
        <div className="text-center">
          <p className="uppercase font-semibold text-center text-md text-other-green ">
            Recently completed works
          </p>
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
            <p className="font-bold text-xl py-6 capitalize">Service to all</p>
            <p>+ Nutritional Quality</p>
            <p>+ Preventive Approach </p>
            <p>+ Mental Health Benefits</p>
          </div>
          <div className="text-white  border-r-2 px-20 py-6 border-other-green">
            <p className="font-bold text-xl py-4 capitalize ">
            Absolute commitment to quality
            </p>
            <p>+ Sustainable Resource Use</p>
      <p>+ Lower Environmental Impact</p>
      <p>+ Promoting Ecosystem Health</p>
          </div>
          <div className="text-white  border-r-2 px-20 py-6 border-other-green">
            <p className="font-bold text-xl py-4 capitalize ">
            Respect and devotion to Mother Nature
            </p>
            <p>+ Sustainable Resource Use</p>
      <p>+ Lower Environmental Impact</p>
      <p>+ Promoting Ecosystem Health</p>
          </div>
          <div className="text-white">
            <p className="font-bold text-xl py-6 capitalize">
            Total integrity
            </p>
            <p>+ Fair Trade Practices</p>
      <p>+ Supporting Local Economies</p>
      <p>+ Accessible and Affordable</p>
          </div>
          
        </div>
      </div>
    
    </div>
  );
}

export default About;
