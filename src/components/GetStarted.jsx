import React from "react"
import MyAsset from "../assets/kantor.png"

function GetStarted() {
  return (
    <section
      id="getstarted"
      className="dark:bg-[#952323] container mx-auto py-10 px-8 max-w-full pt-20 bg-[#F2E8C6] items-center flex flex-col md:flex-row"
    >
      <div
        data-aos="flip-left"
        className="justify-center md:w-1/2 flex flex-col items-center md:items-start"
      >
        <img
          className="dark:border-[#F2E8C6] w-1/2 rounded-full my-4 mx-auto border-8 border-[#952323]"
          src={MyAsset}
          alt="Asset"
        />
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center md:items-start md:w-1/2"
      >
        <h2 className="dark:text-[#F2E8C6] text-center text-2xl md:text-4xl xl:text-5xl font-tektur text-[#952323] mb-4">
          Parum Legis
        </h2>
        <p className="dark:text-[#F2E8C6] text-xl font-adlam md:text-xl xl:text-2xl mb-8">
          Dapatkan Pengalaman Bermain Game Hukum Yang Menyenangkan Bersama Kami
          di Parum Legis
        </p>
        <a
          href="#getproduct"
          className="bg-[#952323] text-[#F2E8C6] dark:bg-[#F2E8C6] dark:text-[#952323] px-8 py-2 rounded-md text-xl hover:bg-[#7B1F1F] mb-4 font-tektur"
        >
          Get Product
        </a>
      </div>
    </section>
  )
}

export default GetStarted
