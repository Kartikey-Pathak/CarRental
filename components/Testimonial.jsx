"use client";


import Review from "./Review";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

function Testimonial() {

     const txt5 = useRef(null);
    const txt6 = useRef(null);

    useGSAP(() => {

        // Slide-in animation for heading
        const textSlide = gsap.fromTo(
            txt5.current,
            {
                x: -120,
                opacity: 0,
                ease: "power1.inOut",
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: txt5.current,
                    start: "top 90%",
                    end: "top 30%",
                },
            }
        );
        const textSlide2 = gsap.fromTo(
            txt6.current,
            {
                x: -120,
                opacity: 0,
                ease: "power1.inOut",
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: txt6.current,
                    start: "top 90%",
                    end: "top 30%",
               
                },
            }
        );

        // ✅ Proper cleanup
        return () => {
            textSlide.scrollTrigger?.kill();
            textSlide.kill();
            textSlide2.scrollTrigger?.kill();
            textSlide2.kill();
        };
    }, [])

    return (
        <section className=" mt-14 w-full max-w-screen flex items-center text-center justify-center  bg-[#FFF8F6] flex-col">
            <h1 ref={txt5} className=" text-3xl md:text-5xl font-bogle font-semibold text-black m-10">Customer Reviews</h1>

            <div ref={txt6} className=" w-[90%] h-full flex overflow-x-auto hide-scrollbar justify-start rounded-xl   m-5 mt-3 gap-5 ">
                <Review group="1" url="img1.png" name="Shubham" des="Excellent service! driver was polite." />
                <Review group="2" url="img3.jpg" name="Adarsh" des="Very satisfied with the cars!" />
                <Review group="4" url="img5.jpg" name="Rudresh" des="Pleasant experience." />
                <Review group="3" url="img4.jpg" name="Prashant" des="Good service, clean tours, friendly staff." />

            </div>

        </section>
    )
}
export default Testimonial;