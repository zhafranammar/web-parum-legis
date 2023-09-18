import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"
import logo from "../assets/parum.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleClass = () => {
    setIsOpen(!isOpen)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.getElementById("root").classList.add("dark")
    } else {
      document.getElementById("root").classList.remove("dark")
    }
  }, [darkMode])

  return (
    <header className="dark:bg-[#F2E8C6] container mx-auto fixed md:flex justify-between py-2 max-w-full bg-[#952323] z-10 ">
      <div className="flex justify-between items-center px-4">
        <section>
          <Link to="top" smooth={true} duration={500}>
            <img className="w-8 rounded-full" alt="logo" src={logo} />
          </Link>
        </section>
        <h1 className="dark:text-[#952323] text-[#F2E8C6] text-2xl md:px-4 font-tektur">
          Parum Legis
        </h1>

        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading md:hidden stroke-dark-mode"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={darkMode ? "#952323" : "#F2E8C6"}
            />
          </svg>
        </div>
      </div>
      <nav
        className={`${
          !isOpen ? "hidden" : ""
        } text-center md:flex justify-between items-center font-adlam`}
      >
        <section>
          <ul className="dark:text-[#952323] text-[#F2E8C6] font-medium md:flex items-center md:space-x-5 md:mr-10">
            <li className="pb-1 md:pb-0">
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleClass}
              >
                About Us
              </Link>
            </li>
            <li className="pb-1 md:pb-0">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={toggleClass}
              >
                Game
              </Link>
            </li>
            <li className="pb-1 md:pb-0">
              <Link
                to="getproduct"
                smooth={true}
                duration={500}
                onClick={toggleClass}
              >
                Get Products
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleClass}
              >
                Contact Us
              </Link>
            </li>
            <li className="md:pb-0 mt-1">
              <button onClick={toggleDarkMode}>
                {darkMode ? (
                  <span className="material-symbols-outlined">dark_mode</span>
                ) : (
                  <span className="material-symbols-outlined">light_mode</span>
                )}
              </button>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  )
}

export default Header
