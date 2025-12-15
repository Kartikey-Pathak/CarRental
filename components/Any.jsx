"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

export default function Any() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [packages, setPackages] = useState([]);

  // ✅ Fetch cars from /api/cars
  useEffect(() => {
    async function fetchPackages() {
      try {
        const res = await fetch("/api/cars");
        const data = await res.json();
        setPackages(data); // no filtering
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    fetchPackages();
  }, []);

  // ✅ GSAP animations
  useGSAP(() => {
    const fadeIn = gsap.to(sectionRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    const slideInText = gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      fadeIn.scrollTrigger?.kill();
      fadeIn.kill();
      slideInText.scrollTrigger?.kill();
      slideInText.kill();
    };
  }, []);

  return (
    <section id="domestic" className="flex flex-col items-center justify-center bg-white py-20">
      <div className="w-[95%] px-2 md:px-10 flex items-center py-20 md:py-30 flex-col bg-[#FFF8F6] rounded-[3rem]">
        <h1 className="text-[1rem] md:text-xl font-bold text-[#FF3600]">
          <i className="fa-solid fa-asterisk text-xl font-bold text-[#FF3600]"></i> Our Fleets
        </h1>
        <h1 ref={headingRef} className="text-3xl md:text-5xl text-black font-bold mb-10">
          Reliable rides, ready for you.
        </h1>

        <div ref={sectionRef} className="opacity-0 w-full flex justify-center">
          <div className="w-full  md:w-[90%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
            {packages.length > 0 ? (
              packages.map((pkg) => (
                <Card
                  key={pkg._id}
                  img={pkg.image}
                  name={pkg.name}
                  location={pkg.location}
                  tag={pkg.tag}
                  rates={pkg.rates}
                />
              ))
            ) : (
              <div className="flex items-center justify-center min-h-[50vh] col-span-full">
                <p className="text-gray-500 text-5xl font-semibold">Loading...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
