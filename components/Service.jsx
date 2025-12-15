"use client";

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from './ServiceCard';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);


function Service() {
  const txt7 = useRef(null);
  const txt8 = useRef(null);

  useGSAP(() => {
    // Heading animation
    const textSlide = gsap.fromTo(
      txt7.current,
      { x: -120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: txt7.current,
          start: "top 90%",
          end: "top 30%",
        },
      }
    );

    // Grid animation
    const textSlide2 = gsap.fromTo(
      txt8.current,
      { x: -120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: txt8.current,
          start: "top 80%",
          end: "top 30%",
        },
      }
    );

    return () => {
      textSlide.scrollTrigger?.kill();
      textSlide.kill();
      textSlide2.scrollTrigger?.kill();
      textSlide2.kill();
    };
  }, []);

  return (

    <section className="w-full h-full mt-14 bg-white flex flex-col items-center justify-center">
      <div className=' w-[95%] px-2 md:px-10  flex items-center py-20 md:py-30  flex-col bg-[#FFF8F6] rounded-[3rem]'>
        <h1 ref={txt7} className=" mt-5 text-[1rem] md:text-xl font-bold text-[#FF3600]"><i className="fa-solid fa-asterisk text-xl font-bold text-[#FF3600]"></i> Our Services</h1>

        <h3 className="text-xl text-center md:text-5xl font-bold text-black font-bogle m-5 lg:ml-10">
          Flexible Car Rental Services For <br /> Every Journey.

        </h3>

        <div
          ref={txt8}
          className="mt-1 w-full grid place-items-center lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 md:grid-cols-2 justify-center gap-5"
        >
          <ServiceCard />

        </div>
        <h2 className=' mt-20  text-center text-[1rem] md:text-xl font-semibold text-gray-600'>Discover our range of car rental services designed to meet every travel need, offering reliable vehicles, flexible rental plans, and a seamless booking experience.
        </h2>
      </div>
    </section>
  );
}

export default Service;
