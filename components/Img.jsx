"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const bn1 =
  "https://res.cloudinary.com/demon35hl/image/upload/v1761841519/Black_and_White_Modern_Travel_To_India_Presentation_1_fh7w5p.png";
const bn2 =
  "https://res.cloudinary.com/demon35hl/image/upload/v1761841745/bn3_w6ydc4.png";
const bn3 =
  "https://res.cloudinary.com/demon35hl/image/upload/v1761841834/bn2_ra1jpd.jpg";

export default function Img() {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);
  const images = [bn1, bn2, bn3];

  useEffect(() => {
    const fadeIn = gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );

    const slideText = gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 300 },
      { opacity: 1, x: 0, duration: 1.2, delay: 0.2, ease: "power2.inOut" }
    );

    return () => {
      fadeIn.kill();
      slideText.kill();
    };
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="w-full mt-16 h-[50vh] lg:h-[82vh] overflow-hidden flex items-center justify-center">
      <div className="relative flex items-center justify-center h-full w-full">
        {/* Overlay Text */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col justify-center md:justify-start md:pl-20 pl-10 top-5 md:top-40 z-20"
        >
          <h1 className="font-bold text-4xl md:text-6xl text-white drop-shadow-lg">
            Welcome To
          </h1>
          <h1 className="font-bold text-4xl md:text-6xl text-white drop-shadow-lg mt-3">
            Travel Explores
          </h1>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next Image"
          className="hover:bg-gray-400 transition-all cursor-pointer absolute bottom-10 right-10 z-30 size-8 md:size-10 flex items-center justify-center rounded-full bg-gray-300/90"
        >
          <i className="fa-solid fa-arrow-right text-gray-600/90 text-[0.8rem] md:text-xl font-semibold" />
        </button>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous Image"
          className="hover:bg-gray-400 transition-all cursor-pointer absolute bottom-10 left-10 z-30 size-8 md:size-10 flex items-center justify-center rounded-full bg-gray-300/90"
        >
          <i className="fa-solid fa-arrow-left text-gray-600/90 text-[0.8rem] md:text-xl font-semibold" />
        </button>

        {/* Image */}
        <img
          ref={imgRef}
          src={images[index]}
          alt={`Banner ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
