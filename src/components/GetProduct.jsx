import React, { useState, useEffect } from "react"

// Asumsikan kita mempunyai logo-logo tersebut
import shopeeLogo from "../assets/shopeeLogo.png"
import tokpedLogo from "../assets/tokpedLogo.png"
import waLogo from "../assets/whatsapp.png"
import winLogo from "../assets/windows.png"
import androLogo from "../assets/android.png"

function GetProduct() {
  const [productLinks, setProductLinks] = useState({
    shopee: "",
    tokped: "",
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbw2V_D_Dgi92kFPmnWACF95u0NHIMLEBKPnniJFGXh4DEOBD35AL5nP3ISzd6G2yvOg/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        setProductLinks({
          shopee: data.Shopee,
          tokped: data.Tokped,
        })
        setIsLoading(false)
      })
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <section
      id="getproduct"
      className="dark:bg-[#952323] dark:text-[#F2E8C6] bg-[#F2E8C6] text-[#952323] container mx-auto py-10 px-8 max-w-full items-center flex flex-col"
    >
      <h2
        className="text-2xl md:text-4xl xl:text-5xl font-tektur mb-4"
        data-aos="fade-up"
      >
        Lets Get Our Product
      </h2>
      <p
        className="text-md font-adlam md:text-xl xl:text-2xl pb-4"
        data-aos="fade-up"
      >
        Choose your preferred Device to play our products. Click on the icons
        below!
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://drive.google.com/file/d/1HMuwBq_hwlxVAcMoGUohdKjywtodEXn2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 hover:opacity-75 transition-opacity duration-300"
            src={androLogo}
            alt="Android"
            data-aos="flip-left"
          />
        </a>
        <a
          href="https://drive.google.com/file/d/15jV_GAKlz7IsJbJWiHbsN3Cc-0eav39R/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 hover:opacity-75 transition-opacity duration-300"
            src={winLogo}
            alt="Windows"
            data-aos="flip-left"
          />
        </a>
      </div>
      <h2
        className="text-2xl md:text-4xl xl:text-5xl font-tektur mb-4 mt-16"
        data-aos="fade-up"
      >
        COMING SOON AVAILABLE ON MARKETPLACE
      </h2>
      <p
        className="text-md font-adlam md:text-xl xl:text-2xl pb-4"
        data-aos="fade-up"
      >
        Please wait our products
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://wa.me/6285702003552"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="rounded-full w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 hover:opacity-75 transition-opacity duration-300"
            src={waLogo}
            alt="Whatsapp"
            data-aos="flip-left"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 hover:opacity-75 transition-opacity duration-300"
            src={shopeeLogo}
            alt="Shopee"
            data-aos="flip-left"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 hover:opacity-75 transition-opacity duration-300"
            src={tokpedLogo}
            alt="Tokopedia"
            data-aos="flip-left"
          />
        </a>
      </div>
    </section>
  )
}

export default GetProduct
