import React from "react";
import { FlipWords } from "../src/components/ui/flip-words";

export function FlipWord() {
 const words = ["outstation", "local", "airport", "corporate"];


  return (
    <div className="h-fit flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-[#CBCBCB] dark:text-neutral-100">
        Book
        <FlipWords duration={1000} words={words} /> <br />
        car rentals with Aaradhya Tour & Travels
      </div>
    </div>
  );
}
