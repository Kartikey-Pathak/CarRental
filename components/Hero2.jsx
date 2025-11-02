"use client";


import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from './Card';


gsap.registerPlugin(ScrollTrigger)

function Hero2() {
    const ref2 = useRef(null);
    const txt2 = useRef(null);

    useGSAP(() => {
        const fadeIn = gsap.to(ref2.current, {
            opacity: 1,
            delay: 0.5,
            duration: 0.8,
            scrollTrigger: {
                trigger: ref2.current,
                start: "top 50%",
                end: "top 60%",
            },
        });

        // Slide-in animation for heading
        const textSlide = gsap.fromTo(
            txt2.current,
            {
                y: 120,
                opacity: 0,
                ease: "power1.inOut",
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay:0.3,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: txt2.current,
                    start: "top 50%",
                    end: "top 60%",
                },
            }
        );

        // ✅ Proper cleanup
        return () => {
            fadeIn.scrollTrigger?.kill();
            fadeIn.kill();
            textSlide.scrollTrigger?.kill();
            textSlide.kill();
        };
    }, [])

    return (
        <section className=" flex items-center justify-center mt-14 flex-col bg-[#F2F2F6]">
            <h1 ref={txt2} className=" text-3xl md:text-4xl text-black font-bold">International Packages</h1>
            <div ref={ref2} className=" opacity-0 flex items-center justify-center w-full">

                <div className=" w-full md:w-[90%] flex items-center justify-center place-items-center  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10  mt-15 ">

                  <Card city={"USA"} img={"/usa.jpg"}/>

                    <Card  city={"DUBAI"} img={"/dubai.jpg"}/>

                </div>
                <div className=" h-20">

                </div>
            </div>

        </section>
    )
}
export default Hero2;