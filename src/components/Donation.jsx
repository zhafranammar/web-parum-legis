import React, { useState, useEffect } from "react"
import qrDonationLight from "../assets/qrDonationLight.png"
import qrDonationDark from "../assets/qrDonationDark.png"

function Donation() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    function checkDarkMode() {
      // Periksa apakah elemen root memiliki kelas 'dark'
      const isDark = document.getElementById("root").classList.contains("dark")
      console.log(isDark)
      setIsDarkMode(isDark)
    }

    // Cek saat pertama kali komponen dimuat
    checkDarkMode()

    // Tambahkan event listener untuk perubahan kelas pada elemen root
    const rootElement = document.getElementById("root")
    rootElement.addEventListener("classChanged", checkDarkMode)

    // Bersihkan event listener saat komponen dilepas
    return () => {
      rootElement.removeEventListener("classChanged", checkDarkMode)
    }
  }, [])

  const qrDonation = isDarkMode ? qrDonationDark : qrDonationLight

  return (
    <section
      id="donation"
      className="dark:bg-[#952323] dark:text-[#F2E8C6] bg-[#F2E8C6] text-[#952323] container mx-auto py-10 px-8 max-w-full items-center flex flex-col"
    >
      <h2
        className="text-2xl md:text-4xl xl:text-5xl font-tektur"
        data-aos="fade-up"
      >
        Support Our Game
      </h2>

      <p
        className="text-md font-adlam md:text-xl xl:text-2xl pt-2 mx-2 text-center md:mx-16"
        data-aos="fade-up"
      >
        Show your support by donating to our game development.
      </p>

      <div
        className="relative flex justify-center items-center mt-6"
        data-aos="fade-up"
      >
        <img className="w-5.6" src={qrDonation} alt="QR Code for Donation" />
      </div>

      <a
        href="https://saweria.co/parumlegis" // Replace with your actual Saweria link.
        className="text-[#952323] dark:text-[#F2E8C6] mt-4 text-md font-adlam md:text-xl xl:text-2xl pt-2 mx-2 text-center md:mx-16 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Or donate Via Saweria
      </a>
    </section>
  )
}

export default Donation
