"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function Cursor() {
  const ref = useRef(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024; // tablets & mobiles

      setDisabled(isTouch || isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (disabled) return;

    const move = (e) => {
      gsap.to(ref.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: "back.out",
      });
    };

    window.addEventListener("mousemove", move);

    window.cursor = {
      enter: () =>
        gsap.to(ref.current, { scale: 1.6, duration: 0.9 }),
      leave: () =>
        gsap.to(ref.current, { scale: 1, duration: 0.9 }),
    };

    return () => window.removeEventListener("mousemove", move);
  }, [disabled]);

  if (disabled) return null;

  return (
    <div
      ref={ref}
      className="
        fixed top-0 left-0 z-[999999]
        size-3 rounded-full bg-[#FF3600]
        pointer-events-none
        -translate-x-1/2 -translate-y-1/2
      "
    />
  );
}

export default Cursor;
