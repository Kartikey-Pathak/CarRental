"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Nav2() {
  const [windowWidth, setWindowWidth] = useState(0);
  const navRef = useRef(null);

  // ✅ Safe window width detection
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Initialize once mounted
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ GSAP animation
  useEffect(() => {
    if (!navRef.current) return;

    const tl = gsap.to(navRef.current, {
      opacity: 1,
      ease: "power1.inOut",
      duration: 1.5,
      scrollTrigger: {
        trigger: navRef.current,
        start: "top -10%",
        end: "top -35%",
        scrub: true,
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const isDesktop = windowWidth > 1100;

  return (
    <nav
      ref={navRef}
      className="opacity-0 fixed top-0 z-20 w-full flex items-center justify-between h-16 bg-[#1D1D1F]/50 border-b-2 border-[#495057] backdrop-blur-3xl transition-all"
    >
      {isDesktop ? (
        <div className="navbar w-full flex justify-between items-center px-10">
          {/* Logo */}
          <div className="flex items-center justify-center h-full w-24">
            <img
              src="/logo.png"
              className="h-full w-full object-contain"
              alt="Logo"
            />
          </div>

          {/* Menu */}
          <ul className="flex gap-10">
            <li>
              <Link href="/" className="text-xl text-white hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-xl text-white hover:text-gray-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/domestic" className="text-xl text-white hover:text-gray-300 transition">
                Domestic Tours
              </Link>
            </li>
            <li>
              <Link href="/international" className="text-xl text-white hover:text-gray-300 transition">
                International Tours
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        // ✅ Mobile Navbar
        <div className="flex justify-between items-center w-full h-16 px-5">
          <div className="flex items-center h-full w-[5rem]">
            <img
              src="/logo.png"
              className="h-full w-auto object-contain"
              alt="Logo"
            />
          </div>

          <div className="flex items-center gap-5">
            <Link href="/" className="text-white text-lg font-semibold">
              Home
            </Link>
            <Link href="#about" className="text-white text-lg font-semibold">
              About
            </Link>

            {/* Dropdown */}
            <details className="dropdown relative">
              <summary className="btn bg-transparent border-none shadow-none">
                <i className="fa-solid fa-bars text-white text-2xl"></i>
              </summary>
              <ul className="menu absolute top-12 right-0 dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow-md">
                <li><Link href="/domestic">Domestic Tours</Link></li>
                <li><Link href="/international">International Tours</Link></li>
              </ul>
            </details>
          </div>
        </div>
      )}
    </nav>
  );
}
