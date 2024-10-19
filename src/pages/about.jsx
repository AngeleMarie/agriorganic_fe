import React from "react";
import { FaBullseye } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Navbar from "../components/navbar"
import Footer from "../components/Footer"

function About() {
  return (
    <div className="relative h-full">
      <Navbar/>
      <div className="px-32 grid grid-cols-2">
        <img
          src="background.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <img src="branch.png" className="absolute right-0" alt="branch" />
        <img
          src="banju.svg"
          className="absolute right-1/4 top-48 opacity-55"
          alt="branch"
        />
        <img
          src="smallie.svg"
          className="absolute right-0 bottom-0 opacity-55"
          alt="branch"
        />

        <div className="my-24">
          <p className="text-2xl font-bold p-2 text-main-green border-t-8 border-main-green w-[20%]">
            <span className="text-other-green">Know</span>
            <br />
            Our History <br />
          </p>
          <img src="proj1.png" alt="project1" className="w-[70%] rounded-lg" />
        </div>

        <div className="mt-56">
          <h2 className="text-3xl font-semibold text-other-green mb-4">
            Our History
          </h2>
          <p className="text-xl font-normal mb-6">
            At our company, our Customer Service Department is wholly committed
            to delivering unparalleled service to our valued customers. From the
            very first point of contact, customers are warmly welcomed with a
            friendly smile and a supportive demeanor. Our team undergoes
            rigorous training to adeptly handle customer requests and inquiries
            with efficiency and efficacy, ensuring a remarkable experience that
            upholds the elevated standards we hold dear.
          </p>
          <p className="text-xl font-normal">
            Over the years, we have evolved our practices and expanded our
            services to meet the changing needs of the agricultural community.
            Our journey began with a small group of passionate individuals
            dedicated to sustainable farming. Through innovation and commitment,
            we have grown into a trusted partner for farmers, empowering them
            with the tools and resources necessary for success.
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
          <div className="text-white  border-r-2 px-20 border-other-green">
            <img src="stars.png" alt="stars" className="" />
            <p className="font-bold text-4xl">6,500,00</p>
            <p>Total products sold</p>
          </div>
          <div className="text-white">
            <img src="users.png" alt="users" className="ml-10" />
            <p className="font-bold text-4xl">6,500,00</p>
            <p>Total products sold</p>
          </div>
        </div>
      </div>

      <div className="bg-white pb-20">
        <img
          src="bgServ.png"
          alt="background"
          className="absolute w-full h-[25%]"
        />
        <div className="mx-32">
          <div className="py-24">
            <p className="text-2xl font-bold p-2 text-main-green border-t-8 border-main-green w-[10%]">
              <span className="text-other-green">Our</span>
              <br />
              Vision <br />
            </p>
          </div>
        </div>
        <div className="flex mx-32 gap-32">
          <div className="relative bottom-20  bg-[#D2FFDE] h-[30%] w-[23%] rounded-xl p-6">
            <div className="flex gap-2">
              <FaBullseye className=" w-5 h-5 text-other-green bg-[#266937] bg-opacity-30 p-1 rounded-md " />
              <h1 className="text-other-green font-bold">Reach the goals</h1>
            </div>

            <p>
              Throughout your journey, our service provides unwavering support,
              offering personalized guidance to help you efficiently reach your
              goals. By prioritizing your well-being and fostering
              self-confidence, we are dedicated to ensuring your success.
            </p>
          </div>
          <img
            src="crop.png"
            alt="crop"
            className="justify-center items-center z-10"
          />
          <div className="bg-[#D2FFDE] h-[30%] w-[23%] rounded-xl p-6">
            <div className="flex gap-2">
              <FaBullseye className=" w-5 h-5 text-other-green bg-[#266937] bg-opacity-30 p-1 rounded-md " />
              <h1 className="text-other-green font-bold">Reach the goals</h1>
            </div>

            <p>
              Throughout your journey, our service provides unwavering support,
              offering personalized guidance to help you efficiently reach your
              goals. By prioritizing your well-being and fostering
              self-confidence, we are dedicated to ensuring your success.
            </p>
          </div>
        </div>
        <div className="relative left-[500px] mt-16 bg-[#D2FFDE] h-[30%] w-[23%] rounded-xl p-6">
          <div className="flex gap-2">
            <FaBullseye className=" w-5 h-5 text-other-green bg-[#266937] bg-opacity-30 p-1 rounded-md " />
            <h1 className="text-other-green font-bold">Reach the goals</h1>
          </div>

          <p>
            Throughout your journey, our service provides unwavering support,
            offering personalized guidance to help you efficiently reach your
            goals. By prioritizing your well-being and fostering
            self-confidence, we are dedicated to ensuring your success.
          </p>
        </div>
      </div>

      <div className="bg-main-green h-full w-full py-20">
        <div className="text-center">
          <h1 className="text-2xl text-other-green mx-32">
            Recently completed works
          </h1>
          <h1 className="text-4xl text-white mx-32">Explore our project</h1>
        </div>
        <div className="mt-4 py-10 rounded-xl mx-32 justify-items-center justify-center items-center grid grid-cols-4">
          <img src="proj1.png" alt="proj1" />
          <img src="proj2.png" alt="proj1" />
          <img src="proj3.png" alt="proj1" />
          <img src="proj4.png" alt="proj1" />
        </div>
      </div>

      <div className=" bg-white px-32 grid grid-cols-2">
        <img
          src="bgServ.png"
          alt="background"
          className="absolute h-[20%] -z-10"
        />

        <div className="my-24">
          <p className="text-2xl font-bold p-2 text-main-green border-t-8 border-main-green w-[20%]">
            <span className="text-other-green">Meet our</span>
            <br />
            Department <br />
          </p>
          <img src="depart.png" alt="project1" className="w-[70%] rounded-lg" />
        </div>

        <div className="mt-48 flex">
          <span className="text-other-green">
            <RiDoubleQuotesL className=" w-10 h-10 mr-10" />
          </span>

          <p className="text-xl font-normal mb-6 w-[70%]">
            At our company, our Customer Service Department is wholly committed
            to delivering unparalleled service to our valued customers. From the
            very first point of contact, customers are warmly welcomed with a
            friendly smile and a supportive demeanor. Our team undergoes
            rigorous training to adeptly handle customer requests and inquiries
            with efficiency and efficacy, ensuring a remarkable experience that
            upholds the elevated standards we hold dear.
          </p>
          <span className="text-other-green mt-56 ">
            <RiDoubleQuotesR className=" w-10 h-10 mr-10" />
          </span>

          <IoIosArrowForward className="mt-24 ml-2 w-16 h-16" />
        </div>
      </div>
       <div className="bg-white h-full w-full py-20">
        <div className="bg-[#0C2A19] mt-4 py-10 rounded-xl mx-32 justify-items-center justify-center items-center grid grid-cols-3">
          <div className="text-white border-r-2 px-20 border-other-green">
            <p className="font-bold text-xl">Good to Great Culture</p>
            <p>+ Methodical</p>
            <p>+ Proactive
            </p>
            <p>+ System and process Improvement</p>
            <p>+ Structure</p>
          </div>
          <div className="text-white  border-r-2 px-20 py-6 border-other-green">
            <p className="font-bold text-xl">Growing</p>
            <p>From 0 meals to 1,500,00
<br />million per year</p>
          </div>
          <div className="text-white">
            <p className="font-bold text-xl">Well Balance</p>
            <p>+ Work life balance 

</p>
<p>+ Enjoyable environment
</p>
<p>+ Friendship and family</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
