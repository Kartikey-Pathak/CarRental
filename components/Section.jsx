"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Dcard from "./Dcard";

gsap.registerPlugin(ScrollTrigger);

function Section() {
  const txt = useRef(null);
  const sec = useRef(null);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      txt.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: txt.current,
          start: "top 80%",
        },
      }
    );

    // Section fade
    gsap.fromTo(
      sec.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: sec.current,
          start: "top 85%",
        },
      }
    );

    // Cards animation
    gsap.utils.toArray(".place").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: i * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sec}
      className="w-full items-center flex justify-center mt-20 px-4"
    >
      <div className=" w-full lg:w-[95%] flex items-center justify-center flex-col">
      <div className="w-full  py-16 bg-[#191919] rounded-[2rem] text-center">

        {/* Small Heading */}
        <p className="text-sm md:text-base font-semibold text-[#FF3600] tracking-widest">
          ✦ OUR SERVICES
        </p>

        {/* Main Heading */}
        <h1
          ref={txt}
          className="mt-4 text-2xl md:text-5xl font-bold text-white px-4 md:px-10 leading-tight"
        >
          Book Popular Destinations in Varanasi
        </h1>

        {/* Cards Grid */}
        <div className="mt-14 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">

            <Dcard
              url="Kashi"
              name="Kashi Vishwanath Temple"
              des="Visit the sacred temple dedicated to Lord Shiva in the heart of Varanasi."
            />

            <Dcard
              url="Sarnath"
              name="Sarnath"
              des="A peaceful Buddhist site where Lord Buddha gave his first sermon."
            />

            <Dcard
              url="Airport"
              name="Varanasi Airport"
              des="Reliable taxi transfers to and from Lal Bahadur Shastri Airport."
            />

            <Dcard
              url="Ghat"
              name="Assi Ghat"
              des="Famous for sunrise rituals, Ganga aarti, and boat rides."
            />

            <Dcard
              url="Fort"
              name="Ramnagar Fort"
              des="A historic 17th-century fort and museum along the Ganges."
            />

            <Dcard
              url="BHU"
              name="Banaras Hindu University"
              des="A vast historic campus with temples and peaceful surroundings."
            />

            <Dcard
              url="Ayodhya"
              name="Ayodhya Ram Mandir"
              des="The sacred birthplace of Lord Rama and a major pilgrimage site."
            />

            <Dcard
              url="Prayag"
              name="Triveni Sangam, Prayagraj"
              des="The holy confluence of the Ganga, Yamuna, and Saraswati rivers."
            />

            <Dcard
              url="Bodh"
              name="Bodh Gaya"
              des="Home to the Mahabodhi Temple where Buddha attained enlightenment."
            />

          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Section;