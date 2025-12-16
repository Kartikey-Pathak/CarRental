"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import String from "./String";
import Form from "./Form";
const bn1 =
  "https://res.cloudinary.com/dkxoayrd0/image/upload/v1765718507/pexels-neosiam-590059_jvcosx.jpg";


export default function Hero() {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);

  const refdot = useRef(null);

  useEffect(() => {
    gsap.set(imgRef.current, { opacity: 0, scale: 1.05 });
    gsap.set(textRef.current, { opacity: 0, x: 300 });

    const fadeIn = gsap.to(imgRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    const slideText = gsap.to(textRef.current, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      delay: 0.2,
      ease: "power2.inOut",
    });

    return () => {
      fadeIn.kill();
      slideText.kill();
    };
  }, [index]);

  useEffect(() => {
    gsap.to(refdot.current, {
      y: 25,              // move upward by 10px
      duration: 0.8,       // how fast it moves
      repeat: -1,          // infinite loop
      yoyo: true,          // goes up, then down
      ease: "power1.inOut" // smooth motion
    });
  }, []);






  return (
    <>
      <br />
      <section className=" mt-17 flex-col  w-full h-[140vh] lg:h-[145vh]   overflow-hidden flex items-center justify-center">
        <div className="relative flex-col  flex items-center justify-center h-full w-full">
          {/* Overlay Text */}
          <div
            ref={textRef}
            className="absolute inset-0  h-fit flex flex-col justify-center items-center  md:justify-start top-5 md:top-30 z-20"
          >
            <h1 className=" text-[1rem] md:text-xl font-bold text-[#FF3600]"><i className="fa-solid fa-asterisk text-xl font-bold text-[#FF3600]"></i>  Welcome To Aaradhya Tours & Travels</h1>
            <h1 className=" font-ubuntu font-semibold  text-3xl md:text-4xl lg:text-7xl text-white drop-shadow-lg mt-10">
              Affordable Car Rentals
            </h1>
            <h1 className="font-ubuntu font-semibold  text-4xl lg:text-7xl text-white drop-shadow-lg mt-3">
              For Every Journey
            </h1>

            <h1 className="font-ubuntu font-medium text-center  text-xl  text-white drop-shadow-lg mt-10">Reliable and affordable car rentals for weekends, business trips, or daily rides. Book your car today!</h1>

            <div className=" lg:mt-32 relative z-[9999] w-32 h-8 flex items-center justify-center">
              <Link  className=" mt-32 md:mt-56  absolute z-[9999]" href="/contact"><button onMouseEnter={() => window.cursor?.enter()}
                onMouseLeave={() => window.cursor?.leave()} className=" active:bg-black h-14 w-44 rounded-2xl bg-[#FF3600] cursor-pointer hover:bg-black transition-all ease-in-out flex items-center justify-center">
                <h1 className=" font-semibold text-white">Book Now</h1>
              </button>
              </Link>
            </div>


            <div className=" mt-40 w-32 h-10"></div>
          </div>


         
          <String />



          {/* Image */}
          {/* Image */}
          <div className=" flex items-center justify-center flex-col  w-full h-full">
            <div ref={imgRef} className=" relative flex items-center flex-col justify-center inset-0 h-full w-full lg:w-[95%]">
              <Image
                src={bn1}
                alt={`Banner `}
                fill
                className="object-cover brightness-40 h-full w-full pointer-events-none lg:rounded-[3rem] "

              />
              <div className=" bg-white z-[99999] flex absolute bottom-10 lg:rounded-[3rem] h-fit  w-fit">

                <Form />

              </div>

            </div>

          </div>
        </div>


      </section>
    </>
  );
}
