"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav({ open, setOpen }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const pathname = usePathname();

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
    <nav className=" absolute top-0 z-50 w-full flex h-17 items-center bg-black">
      {isDesktop ? (
        <div className="flex justify-between items-center h-20  w-full px-10">
          {/* Logo */}
          <div className="flex items-center cursor-pointer  h-fit ">
            <a href="/" className=" h-full text-white flex items-center justify-center mt-5">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-64 w-auto object-contain"
              />
            </a>
          </div>

          {/* Menu */}
          <ul className="flex gap-10  w-full h-full justify-center items-center">
            <li>
              <Link
                href="/"
                className={`  font-semibold text-xl shrink-0 hover:text-[#FF3600]/80  transition-all ${
                  pathname === "/" ? "text-[#FF3600] underline" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={` font-semibold shrink-0 text-xl hover:text-[#FF3600]/80  transition-all ${
                  pathname === "/about" ? "text-[#FF3600] underline" : "text-white"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/rent"
                className={` shrink-0  font-semibold text-xl hover:text-[#FF3600]/80  transition-all ${
                  pathname === "/rent" ? "text-[#FF3600] underline" : "text-white"
                }`}
              >
                Rent a Car
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={` shrink-0  font-semibold text-xl hover:text-[#FF3600]/80  transition-all ${
                  pathname === "/contact" ? "text-[#FF3600] underline" : "text-white"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <Link  className=" hover:scale-105 transition-all active:scale-105 " href="/contact">
            <button
              onMouseEnter={() => window.cursor?.enter()}
              onMouseLeave={() => window.cursor?.leave()}
              className=" active:bg-black h-14 w-44 rounded-2xl bg-[#FF3600] cursor-pointer hover:text-[#FF3600]/80 transition-all ease-in-out flex items-center justify-center"
            >
              <h1 className=" font-semibold text-white">Book Now</h1>
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex justify-between items-center h-24 mt-5 w-full px-5 backdrop-blur-2xl ">
          {/* Logo */}
          <div className="flex items-center justify-center h-full w-[10rem]">
            <a href="/" className=" flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-full w-auto object-contain"
              />
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-5">
            {/* Dropdown */}
            <summary
              onClick={() => setOpen(true)}
              className="btn text-white bg-transparent border-none shadow-none"
            >
              <i className="fa-solid fa-bars text-white text-2xl"></i>
            </summary>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
