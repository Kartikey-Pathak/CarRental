"use client";
import {
  Car,
  KeyRound,
  ShieldCheck,
  CalendarCheck,
  Asterisk
} from "lucide-react";


import React from 'react'
import Nav from '../../../components/Nav'

import Side from '../../../components/Side';


import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../../../components/Footer";
import AboutTab from "../../../components/AboutTab";
import PolicyAccordion from "../../../components/PolicyAccordion";
import Last from "../../../components/Last";

gsap.registerPlugin(ScrollTrigger);



export default function page() {
    const [open, setOpen] = useState(false);
    const reff = useRef(null);
    
    
    const txtt = useRef(null); 

    useGSAP(() => {

        const fadeIn = gsap.fromTo(
            reff.current,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: reff.current,
                    start: "top 65%",
                    toggleActions: "play none none reverse",
                },
            }
        );


        const slideInText = gsap.fromTo(
            txtt.current,
            { y: 500, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: txtt.current,
                    start: "top 90%",
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
        <>
        <Nav open={open} setOpen={setOpen}/>
         <Side open={open} setOpen={setOpen} />

        <section className="w-full bg-white py-52">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Icons / Visual */}
        <div className="relative flex justify-center items-center">
          <div className="w-72 h-72 rounded-full bg-orange-50 flex items-center justify-center">
            <Car className="w-28 h-28 text-orange-500" />
          </div>

          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
            <KeyRound className="w-20 h-20 text-gray-700" />
          </div>

          <div className="absolute -top-6 -right-6">
            <Asterisk className="w-10 h-10 text-orange-500" />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-orange-500 font-semibold flex items-center gap-2 mb-4">
            <Asterisk className="w-4 h-4" />
            About Us
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            Your trusted partner for
            <br />
            reliable car rentals
          </h2>

          <p className="text-gray-600 mb-10 max-w-xl">
            We provide safe, affordable, and flexible car rental solutions
            designed to make your journey smooth and stress-free. Whether
            you're traveling for business or leisure, we've got the right
            vehicle for you.
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <CalendarCheck className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Easy & Fast Booking
                </h4>
                <p className="text-gray-600 text-sm">
                  Book your car in minutes with our simple and transparent
                  online reservation process.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <ShieldCheck className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Safe & Reliable Vehicles
                </h4>
                <p className="text-gray-600 text-sm">
                  Our cars are regularly inspected and maintained to ensure
                  maximum safety and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <AboutTab/>

    <PolicyAccordion/>

    <Last/>

    <footer>
        <Footer/>
    </footer>
    </>
    )
}