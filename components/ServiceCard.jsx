import { UserCheck, Briefcase, Car, Plane } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";

export default function ServiceCards() {

  // Card 1 refs
  const bg1 = useRef(null);
  const content1 = useRef(null);

  // Card 2 refs
  const bg2 = useRef(null);
  const content2 = useRef(null);

  // Card 3 refs
  const bg3 = useRef(null);
  const content3 = useRef(null);

  // Card 4 refs
  const bg4 = useRef(null);
  const content4 = useRef(null);

  const over = (bg, content) => {
    gsap.to(bg, {
      height: "100%",
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(content, {
      color: "#ffffff",
      duration: 0.3,
    });
  };

  const out = (bg, content) => {
    gsap.to(bg, {
      height: 0,
      duration: 0.4,
      ease: "power3.inOut",
    });

    gsap.to(content, {
      color: "#000000",
      duration: 0.3,
    });
  };

  return (
    <>
      {/* Card 1 */}
      <div
        onMouseOver={() => over(bg1.current, content1.current)}
        onMouseOut={() => out(bg1.current, content1.current)}
        className="group bg-white relative cursor-pointer rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition overflow-hidden"
      >
        <div ref={bg1} className="absolute left-0 bottom-0 w-full h-0 bg-[#FF3600] rounded-3xl z-0" />
        <div ref={content1} className="relative z-10 text-black">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-6">
            <UserCheck className="text-orange-500 w-6 h-6" strokeWidth={1.8} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Car Rental with Driver</h3>
          <p className="text-sm leading-relaxed">
            Comfortable car rental service with professional drivers for local, outstation, and long-distance travel.
          </p>
          <div className="mt-8">
            <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:-rotate-45">
              <i className="fa-solid -rotate-60 text-xl fa-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        onMouseOver={() => over(bg2.current, content2.current)}
        onMouseOut={() => out(bg2.current, content2.current)}
        className="group bg-white relative cursor-pointer rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition overflow-hidden"
      >
        <div ref={bg2} className="absolute left-0 bottom-0 w-full h-0 bg-[#FF3600] rounded-3xl z-0" />
        <div ref={content2} className="relative z-10 text-black">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-6">
            <Briefcase className="text-orange-500 w-6 h-6" strokeWidth={1.8} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Business Car Rental</h3>
          <p className="text-sm leading-relaxed">
            Reliable and punctual car rentals for corporate travel, meetings, and professional transportation.
          </p>
          <div className="mt-8">
            <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:-rotate-45">
              <i className="fa-solid -rotate-60 text-xl fa-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div
        onMouseOver={() => over(bg3.current, content3.current)}
        onMouseOut={() => out(bg3.current, content3.current)}
        className="group bg-white relative cursor-pointer rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition overflow-hidden"
      >
        <div ref={bg3} className="absolute left-0 bottom-0 w-full h-0 bg-[#FF3600] rounded-3xl z-0" />
        <div ref={content3} className="relative z-10 text-black">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-6">
            <Car className="text-orange-500 w-6 h-6" strokeWidth={1.8} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Chauffeur Services</h3>
          <p className="text-sm leading-relaxed">
            Premium chauffeur-driven car rental services for weddings, events, and luxury travel experiences.
          </p>
          <div className="mt-8">
            <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:-rotate-45">
              <i className="fa-solid -rotate-60 text-xl fa-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div
        onMouseOver={() => over(bg4.current, content4.current)}
        onMouseOut={() => out(bg4.current, content4.current)}
        className="group bg-white relative cursor-pointer rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition overflow-hidden"
      >
        <div ref={bg4} className="absolute left-0 bottom-0 w-full h-0 bg-[#FF3600] rounded-3xl z-0" />
        <div ref={content4} className="relative z-10 text-black">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-6">
            <Plane className="text-orange-500 w-6 h-6" strokeWidth={1.8} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Airport Transfer</h3>
          <p className="text-sm leading-relaxed">
            On-time airport pickup and drop car rental service for smooth, safe, and stress-free travel.
          </p>
          <div className="mt-8">
            <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:-rotate-45">
              <i className="fa-solid -rotate-60 text-xl fa-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
