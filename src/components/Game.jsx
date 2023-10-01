import React, { useState, useEffect } from "react"

import ss1 from "../assets/ss1.png"
import ss2 from "../assets/ss2.png"
import ss3 from "../assets/ss3.png"
import ss4 from "../assets/ss4.png"

function GameSection() {
  const [gameDescription, setGameDescription] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [autoSlideTimeout, setAutoSlideTimeout] = useState(null)

  const images = [ss1, ss2, ss3, ss4]

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbw2V_D_Dgi92kFPmnWACF95u0NHIMLEBKPnniJFGXh4DEOBD35AL5nP3ISzd6G2yvOg/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        setGameDescription(data.Game)
        setIsLoading(false)
      })
      .catch((error) => console.error("Error fetching data:", error))

    startAutoSlide()
    return () => stopAutoSlide()
  }, [])

  const startAutoSlide = () => {
    stopAutoSlide()
    setAutoSlideTimeout(setTimeout(handleNextImage, 5000))
  }

  const stopAutoSlide = () => {
    if (autoSlideTimeout) {
      clearTimeout(autoSlideTimeout)
    }
  }

  const handleNextImage = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevImage = () => {
    setCarouselIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  const handleGestureStart = () => {
    stopAutoSlide()
  }

  const handleGestureEnd = () => {
    startAutoSlide()
  }

  return (
    <section
      id="game"
      className="dark:bg-[#952323] dark:text-[#F2E8C6] bg-[#F2E8C6] text-[#952323] container mx-auto py-10 px-8 max-w-full items-center flex flex-col"
    >
      <h2
        className="text-2xl md:text-4xl xl:text-5xl font-tektur"
        data-aos="fade-up"
      >
        About This Game
      </h2>
      <p
        className="text-md font-adlam md:text-xl xl:text-2xl pt-2 mx-2 text-center md:mx-16"
        data-aos="fade-up"
      >
        {isLoading ? "Loading..." : gameDescription}
      </p>

      <div
        className="relative flex justify-center items-center mt-6"
        data-aos="fade-up"
      >
        <img
          className="w-5.6"
          src={images[carouselIndex]}
          alt="Game"
          onTouchStart={handleGestureStart}
          onTouchEnd={handleGestureEnd}
          onMouseDown={handleGestureStart}
          onMouseUp={handleGestureEnd}
        />
        <button
          onClick={handlePrevImage}
          className="absolute left-0 bg-opacity-50 bg-gray-900 text-white p-2 rounded-lg"
        >
          &lt;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-0 bg-opacity-50 bg-gray-900 text-white p-2 rounded-lg"
        >
          &gt;
        </button>
      </div>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-6 mx-1 rounded ${
              carouselIndex === index
                ? "bg-[#952323] dark:bg-[#F2E8C6]"
                : "bg-gray-300 dark:bg-black"
            }`}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default GameSection
