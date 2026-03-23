"use client";

import Image from "next/image";
import { useState, useEffect } from "react";   //have to push this and section.jsx on git
import Link from "next/link";

function Dcard({ url, name, des }) {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setActive(!active);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`place group relative w-full max-w-[350px] h-[260px] rounded-2xl overflow-hidden shadow-md transition-all duration-500 cursor-pointer
      ${active ? "scale-[1.02] shadow-2xl" : "hover:shadow-2xl"}`}
    >
      {/* Image */}
      <Image
        src={`/${url}.jpg`}
        alt={name}
        fill
        className={`object-cover transition-transform duration-700
        ${active ? "scale-110" : "group-hover:scale-110"}`}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-5 text-left text-white w-full">
        <h2 className="text-lg md:text-xl font-bold">{name}</h2>

        <p
          className={`text-sm text-gray-200 mt-2 transition duration-500
          ${
            active
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          {des}
        </p>

        <Link
                href="/contact"
          className={`mt-3 text-sm font-semibold text-[#FF3600] transition duration-500
          ${
            active
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          Explore →
        </Link>
      </div>
    </div>
  );
}

export default Dcard;