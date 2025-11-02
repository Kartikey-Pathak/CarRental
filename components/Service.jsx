"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


function Service() {

    const txt7 = useRef(null);
    const txt8 = useRef(null);

    useGSAP(() => {

        // Slide-in animation for heading
        const textSlide = gsap.fromTo(
            txt7.current,
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
                    trigger: txt7.current,
                    start: "top 90%",
                    end: "top 30%",
                },
            }
        );
        const textSlide2 = gsap.fromTo(
            txt8.current,
            {
                x: -120,
                opacity: 0,
                ease: "power1.inOut",
            },
            {
                x: 0,
                opacity: 1,
                delay:0.3,
                duration: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: txt8.current,
                    start: "top 80%",
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
        <section className=" w-full h-full mt-14 bg-[#F2F2F6] flex justify-center flex-col">
            <h1 ref={txt7} className=" text-4xl md:text-5xl font-bold text-black m-5 ml-5 lg:m-10 lg:ml-30">Our Services</h1>
            
            <h3 className=" text-xl md:text-2xl font-medium text-gray-500 ml-5 lg:ml-30">Making every journey memorable with comfort, care, and customization.</h3>
            
            <div ref={txt8} className=" mt-10 flex items-center grid place-items-center lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 md:grid-cols-2 justify-center gap-5">
                <div className="    transition-all w-80 h-96 bg-gray-400 rounded-xl relative">
                    <img src="https://res.cloudinary.com/demon35hl/image/upload/v1761841287/india_prl1mv.jpg" className=" h-full w-full rounded-xl object-cover" alt="" />
                    <div className=" absolute bottom-5 left-0 right-0 mx-auto backdrop-blur-3xl   h-12 w-[60%] bg-white rounded-xl flex items-center justify-center"><h1 className=" text-black font-bold" >Domestic Packages</h1></div>
                </div>
                <div className=" transition-all w-80 h-96 bg-gray-400 rounded-xl relative">
                    <img src="https://res.cloudinary.com/demon35hl/image/upload/v1761841264/Inter_nbsowm.jpg" className=" h-full w-full rounded-xl object-cover" alt="" />
                    <div className=" absolute bottom-5 left-0 right-0 mx-auto backdrop-blur-3xl   h-12 w-[60%] bg-white rounded-xl flex items-center justify-center"><h1 className=" text-black font-bold" >International Packages</h1></div>
                </div>
                <div className=" transition-all w-80 h-96 bg-gray-400 rounded-xl relative">
                    <img src="https://res.cloudinary.com/demon35hl/image/upload/v1761841233/cab_srzzvm.jpg" className=" h-full w-full rounded-xl object-cover" alt="" />
                    <div className=" absolute bottom-5 left-0 right-0 mx-auto backdrop-blur-3xl   h-12 w-[60%] bg-white rounded-xl flex items-center justify-center"><h1 className=" text-black font-bold" >Cabs</h1></div>
                </div>
                <div className=" transition-all w-80 h-96 bg-gray-400 rounded-xl relative">
                    <img src="https://res.cloudinary.com/demon35hl/image/upload/v1761841244/visa_cvvxsm.jpg" className=" h-full w-full rounded-xl object-cover" alt="" />
                    <div className=" absolute bottom-5 left-0 right-0 mx-auto backdrop-blur-3xl   h-12 w-[60%] bg-white rounded-xl flex items-center justify-center"><h1 className=" text-black font-bold" >VISA/Flights</h1></div>
                    
                </div>

            </div>

        </section>
    )
}
export default Service;