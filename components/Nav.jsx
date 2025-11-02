"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function Nav() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // ✅ Run only on client
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth > 1100;

  return (
    <nav className="fixed top-0 z-50 w-full flex items-center bg-black/95 backdrop-blur-2xl">
      {isDesktop ? (
        <div className="flex justify-between items-center h-16 w-full px-10">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Menu */}
          <ul className="flex gap-10 items-center">
            <li><Link href="/" className="text-white text-lg hover:text-gray-300 transition">Home</Link></li>
            <li><Link href="#about" className="text-white text-lg hover:text-gray-300 transition">About</Link></li>
            <li><Link href="/domestic" className="text-white text-lg hover:text-gray-300 transition">Domestic Tours</Link></li>
            <li><Link href="/international" className="text-white text-lg hover:text-gray-300 transition">International Tours</Link></li>
          </ul>
        </div>
      ) : (
        <div className="flex justify-between items-center h-16 w-full px-5 bg-black/90">
          {/* Logo */}
          <div className="flex items-center justify-center h-full w-[5rem]">
            <img src="/logo.png" alt="Logo" className="h-full w-auto object-contain" />
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-5">
            <Link href="/" className="text-white font-semibold text-lg">Home</Link>
            <Link href="#about" className="text-white font-semibold text-lg">About</Link>

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

export default Nav;
