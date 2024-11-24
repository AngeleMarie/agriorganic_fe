import React from "react";
import { FaBullseye } from "react-icons/fa6";
import History from "../components/History"
import Management from "../components/Management";
import Numbers from "../components/Numbers";
import Vision from "../components/vision"
import Mission from "../components/Mission"
import Core from "../components/Core";
import CurrentPro from "../components/CurrentPro";

function About() {
  
  return (
    <>
      <History/>
      <Numbers/>
     <Vision/>
           <Mission/>
  <Core/>
  <CurrentPro/>
    
      <div className="my-24 mx-12 md:mx-32">
          <Management />
        </div>
       
    </>
  );
}

export default About;
