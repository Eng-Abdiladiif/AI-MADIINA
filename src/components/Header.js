"use client";
import Image from "next/image";
import ions from "../../public/clothes.png";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <body>
      <nav className="max-w-4xl mx-auto mt-4 p-4 flex justify-between items-center px-5">
        {/* left */}

        <div className="flex space-x-3 ">
          <Image src={ions} width={30} height={30} alt="logo" />

          <h1 className="flex justify-center items-center text-md font-bold  font-Lilita">
            Al-madiina
          </h1>
        </div>
        {/* right */}

        <div
          className="cursor-pointer z-10 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IoIosClose className="text-2xl" />
          ) : (
            <BiMenu className="text-2xl" />
          )}
        </div>

        <div className="space-x-3 hidden md:flex">
          <Link
            className="font-DM font-semibold text-gray-800 hover:text-gray-500 transition-all duration-500"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-DM font-semibold text-gray-800 hover:text-gray-500 transition-all duration-500"
            href="/products"
          >
            products
          </Link>
          <Link
            className="font-DM font-semibold text-gray-800 hover:text-gray-500 transition-all duration-500"
            href="/About"
          >
            About
          </Link>
          <Link
            className="font-DM font-semibold text-gray-800 hover:text-gray-500 transition-all duration-500"
            href="/contect"
          >
            contect
          </Link>
        </div>

        {/* mobile */}

        <div
          className={`absolute top-0 right-0 flex flex-col justify-center items-center
                 h-screen w-40 bg-emerald-300 opacity-60 text-white space-y-10 
                 ${open ? "flex" : "hidden"}`}
          data-aos="fade-left"
        >
          <Link
            className="font-DM font-semibold text-gray-800 hover:text-gray-500 transition-all duration-500"
            href=""
          >
            Home
          </Link>
          <Link
            className="font-DM font-semibold text-gray-800 hover:text-gray-500 transition-all duration-500"
            href="/products"
          >
            products
          </Link>
          <Link
            className="font-DM font-semibold text-gray-800 hover:text-gray-500 transition-all duration-500"
            href="/About"
          >
            About
          </Link>
          <Link
            className="font-DM font-semibold text-gray-800 hover:text-gray-500 transition-all duration-500"
            href="/contect"
          >
            contect
          </Link>
        </div>
      </nav>
    </body>
  );
}

export default Header;
