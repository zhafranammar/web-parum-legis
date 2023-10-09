import React, { useEffect } from "react"
import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import GetStarted from "./components/GetStarted"
import GameSection from "./components/Game"
import GetProduct from "./components/GetProduct"
import Footer from "./components/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import Donation from "./components/Donation"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam milidetik
    })
  }, [])
  return (
    <>
      <Header />
      <GetStarted />
      <GameSection />
      <GetProduct />
      <Donation />
      <AboutUs />
      <Footer />
    </>
  )
}

export default App
