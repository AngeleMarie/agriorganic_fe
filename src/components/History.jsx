import React from "react";

function History() {
  return (
    <div className="w-full relative h-full bg-white pt-12">
      <div className="px-8 md:px-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Branch Image */}
        <img
          src="branch.png"
          className="absolute right-0 top-1/4 md:top-0 w-full md:w-auto hidden md:block"
          alt="branch"
        />

        <div className="my-8 md:my-24">
          <p className="text-2xl font-bold p-2 mt-8 text-main-green border-t-8 border-main-green w-[40%] md:w-[20%]">
            <span className="text-other-green">Know</span>
            <br />
            Our History
            <br />
          </p>
          <img
            src="poj1.jpg"
            alt="project1"
            className="w-full md:w-[70%] h-[350px] md:h-[650px] rounded-lg mx-auto"
          />
        </div>

        <div className="mt-8 md:mt-56 text-justify px-8">
          <h2 className="text-2xl md:text-5xl font-semibold text-other-green mb-4">
            History & Background
          </h2>
          <p className="text-lg md:text-3xl  font-normal my-12">
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
          <p className="text-lg md:text-3xl font-normal my-6 ">
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
    </div>
  );
}

export default History;
