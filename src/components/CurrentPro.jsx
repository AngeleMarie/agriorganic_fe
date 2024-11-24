import React from 'react'
import Project from "../components/Project";


function CurrentPro() {
  return (
    <div className="bg-main-green h-full w-full py-20">
        <div className="text-center">
         
          <p className="text-4xl font-bold text-center mb-3 text-some-blue">
            Explore our Current project
          </p>
          <p className="text-white text-justify md:text-center  w-2/3 mx-auto text-lg font-normal py-3">
            Research about assessing biopestide effectivess on treating and
            preventing pest and disease on maize, beans, and Potatoes in Muko
            and Gataraga sectors of Musanze district
          </p>
        </div>
        <div className="mt-4 py-10 mx-32 justify-items-center justify-center items-center  ">
          <Project />
        </div>
      
      </div>
  )
}

export default CurrentPro