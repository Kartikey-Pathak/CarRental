"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function Nav({ open, setOpen }) {
  const [windowWidth, setWindowWidth] = useState(0);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth > 850;

  // ✅ Smooth scroll handler
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className=" absolute top-0 z-50 w-full flex h-17 items-center bg-white">
      {isDesktop ? (
        <div className="flex justify-between items-center h-20  w-full px-10">
          {/* Logo */}
          <div className="flex items-center cursor-pointer  h-fit ">
            <a href="/" className=" h-full flex items-center justify-center mt-5"><img src="/logo.png" alt="Logo" className="h-64 w-auto object-contain" /></a>
          </div>

          {/* Menu */}
          <ul className="flex gap-10  w-full h-full justify-center items-center">
            <li>
              <Link href="/" className="text-black  font-semibold text-xl shrink-0 hover:text-black/60 hover:text-[1.4rem] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black font-semibold shrink-0 text-xl hover:text-black/60 hover:text-[1.4rem] transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/rent" className="text-black shrink-0  font-semibold text-xl hover:text-black/60 hover:text-[1.4rem] transition-all">
                Rent a Car
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black shrink-0  font-semibold text-xl hover:text-black/60 hover:text-[1.4rem] transition-all">
                Contact Us
              </Link>
            </li>
          </ul>
          <Link href="/contact"><button onMouseEnter={() => window.cursor?.enter()}
            onMouseLeave={() => window.cursor?.leave()} className=" active:bg-black h-14 w-44 rounded-2xl bg-[#FF3600] cursor-pointer hover:bg-black transition-all ease-in-out flex items-center justify-center">
            <h1 className=" font-semibold text-white">Book Now</h1>
          </button>
          </Link>
        </div>
      ) : (
        <div className="flex justify-between items-center h-24 mt-5 w-full px-5 backdrop-blur-2xl ">
          {/* Logo */}
          <div className="flex items-center justify-center h-full w-[10rem]">
            <a href="/" className=" flex items-center justify-center"><img src="/logo.png" alt="Logo" className="h-full w-auto object-contain" /></a>
          </div>



          {/* Mobile Menu */}
          <div className="flex items-center gap-5">


            {/* Dropdown */}

            <summary onClick={() => setOpen(true)} className="btn bg-transparent border-none shadow-none">
              <i className="fa-solid fa-bars text-black text-2xl"></i>
            </summary>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
