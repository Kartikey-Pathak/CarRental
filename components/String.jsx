"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
function String() {

     const [windowWidth, setWindowWidth] = useState(0);
    
    
      useEffect(() => { 
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      const isDesktop = windowWidth > 850;
     
     const svgRef = useRef(null);
  const pathRef = useRef(null);


    let path = "M 10 100 Q 500 100 990 100";
    let finalpath = "M 10 100 Q 500 100 990 100";

    const animate = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY - rect.top; // mouse Y inside SVG container
        let x = e.clientX - rect.left;

        gsap.to(pathRef.current, {
            attr: { d: `M 10 100 Q ${x} ${y} 990 100` },
            duration: 0.3,
            ease: "power3.out"
        })
    }

    const animateback = (e) => {
        gsap.to(pathRef.current, {
            attr: { d: finalpath },
            duration: 1.4,
            ease: "elastic.out(1,0.2)"
        })
    }


    return (
        <>{isDesktop?
        <div id="string" onMouseLeave={animateback} onMouseMove={animate} className=" mt-20 bg-transparent absolute z-30 w-full flex items-center justify-center">
            <svg  ref={svgRef} width="1000" height="200" >
                <path    ref={pathRef}  d={finalpath}  stroke="#FFFFFF"
  strokeWidth="3"
  strokeOpacity="1"
  fill="transparent" />

            </svg>
        </div>:null}
        </>
    )
}
export default String;