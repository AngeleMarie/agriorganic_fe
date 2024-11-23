'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react"

const newsItems = [
  {
    id: 1,
    headline: "Rwanda Agri Show 2024",
    description: " This event promises to showcase innovative solutions and practices in the agricultural sector, fostering collaboration and knowledge-sharing among stakeholders",
    imageUrl: "show.jpg"
  },
  {
    id: 2,
    headline: "Partnership with ACORD Rwanda",
    description: "We're thrilled to announce our partnership with the Association for Cooperation in Research and Development (ACORD Rwanda)..",
    imageUrl: "download.jpg"
  }
]

export default function CenteredTextNewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide: Changes slide every 8 seconds (8000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval) // Clean up the interval on component unmount
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length)
  }

  return (
    <div className="w-full h-[800px] md:h-[600px]">
      <div className="relative w-full h-full">
        <div className="relative w-full h-full overflow-hidden shadow-lg">
          <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
            <img
              src={newsItems[currentIndex].imageUrl}
              alt={newsItems[currentIndex].headline}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-700 ease-in-out" />
          </div>

          <div className="relative h-full flex flex-col justify-center items-center p-6 my-12 text-white">
            <div className="max-w-4xl text-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-4 drop-shadow-lg">
                {newsItems[currentIndex].headline}
              </h3>
              <p className="text-lg md:text-xl drop-shadow-lg">
                {newsItems[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full px-3 bg-main-green/30 text-white hover:bg-main-green/50 focus:ring-2 focus:ring-white"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 h-12 w-12 px-3 rounded-full bg-main-green/30 text-white hover:bg-main-green/50 focus:ring-2 focus:ring-white"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </button>
      </div>

      <div className="flex justify-center absolute top-[75%] md:top-2/3 mt-4 md:mt-12 left-1/2 -translate-x-1/2 space-x-2">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white/70' : 'bg-white/40 hover:bg-white/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
