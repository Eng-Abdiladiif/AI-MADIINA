"use client"

import React, { useEffect } from "react";
import shoes from "../../public/shoes.png";
import clothes from "../../public/clothes.png";
import perfumes from "../../public/perfumes.png";
import watch from "../../public/watch.png";
import Image from "next/image";
import  Aos  from "aos"
import  "aos/dist/aos.css"

function Services() {

    useEffect(() => {

        Aos.init({duration: 3000})
    })
  return (
    <div className="max-w-3xl mx-auto p-4 mt-10">
      {/* left */}

      <div className="my-10 text-center">
        <h1 className="font-DM text-md font-bold ">we use Services</h1>
      </div>
      {/* rihgt */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4"
      data-aos = "fade-up">
        {/* one */}
        <div className="flex flex-col shadow-2xl w-24 h-24 justify-center items-center
        border border-gray-500 rounded-bl-2xl rounded-tr-2xl ">
          <Image src={shoes} width={40} height={40} alt="shoes" />

          <h1 className="text-sm font-bold font-DM">shoes</h1>
        </div>
        {/* two */}

        <div className="flex flex-col shadow-2xl w-24 h-24 justify-center items-center
        border border-gray-500 rounded-bl-2xl rounded-tr-2xl">
          <Image src={clothes} width={40} height={40} alt="shoes" />

          <h1 className="text-sm font-bold font-DM">shoes</h1>
        </div>

        {/* three */}
        <div className="flex flex-col shadow-2xl w-24 h-24 justify-center items-center
        border border-gray-500 rounded-bl-2xl rounded-tr-2xl">
          <Image src={perfumes} width={40} height={40} alt="shoes" />

          <h1 className="text-sm font-bold font-DM">perfumes</h1>
        </div>

        {/* four */}
        <div className="flex flex-col shadow-2xl w-24 h-24 justify-center items-center
        border border-gray-500 rounded-bl-2xl rounded-tr-2xl">
          <Image src={watch} width={40} height={40} alt="shoes" />

          <h1 className="text-sm font-bold font-DM">perfumes</h1>
        </div>
      </div>
    </div>
  );
}

export default Services;
