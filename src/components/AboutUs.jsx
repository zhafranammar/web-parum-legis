import React, { useState, useEffect } from "react"
import foto from "../assets/parum.png"
import igLogo from "../assets/instagram.png"
import emailLogo from "../assets/gmail.png"
import waLogo from "../assets/whatsapp.png"
import ytLogo from "../assets/youtube.png"

function AboutUs() {
  const [aboutUsText, setAboutUsText] = useState("")
  const [socialLinks, setSocialLinks] = useState({
    WhatsApp: "",
    Instagram: "",
    Email: "",
    Youtube: "",
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbw2V_D_Dgi92kFPmnWACF95u0NHIMLEBKPnniJFGXh4DEOBD35AL5nP3ISzd6G2yvOg/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        setAboutUsText(data.AboutUs)
        setSocialLinks({
          WhatsApp: data.WhatsApp,
          Instagram: data.Instagram,
          Email: data.Email,
          Youtube: data.Youtube,
        })
        setIsLoading(false)
      })
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <section
      id="about"
      className="dark:bg-[#F2E8C6] container mx-auto py-10 px-8 max-w-full bg-[#952323] items-center flex flex-col md:flex-row"
    >
      <div
        data-aos="flip-left"
        className="justify-center md:w-1/2 flex flex-col items-center md:items-start"
      >
        <img
          className="dark:border-[#952323] w-1/2 rounded-full my-4 mx-auto border-8 border-[#F2E8C6]"
          src={foto}
          alt="foto"
        />
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center md:items-start md:w-1/2"
      >
        <h2 className="dark:text-[#952323] text-2xl text- md:text-4xl xl:text-5xl font-tektur text-[#F2E8C6]">
          About Us
        </h2>
        <p className="dark:text-[#952323] text-[#F2E8C6] text-md font-adlam md:text-xl xl:text-2xl pt-2">
          {isLoading ? "Loading..." : aboutUsText}
        </p>
        <div className="flex justify-center space-x-4 mt-4 w-full ">
          <a
            href="https://wa.me/6285702003552"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
              src={waLogo}
              alt="WhatsApp"
            />
          </a>

          <a
            href={isLoading ? "#" : socialLinks.Instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
              src={igLogo}
              alt="Instagram"
            />
          </a>
          <a href={isLoading ? "#" : `mailto:${socialLinks.Email}`}>
            <img
              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
              src={emailLogo}
              alt="Email"
            />
          </a>
          <a
            href={isLoading ? "#" : socialLinks.Youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
              src={ytLogo}
              alt="Youtube"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
