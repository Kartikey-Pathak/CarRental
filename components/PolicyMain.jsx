"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CarFront } from "lucide-react";
import { CarTaxiFront } from "lucide-react";
import { BadgeCheck } from "lucide-react";


function PolicyMain() {
  return (
    <section className="w-full py-20 bg-white flex items-center justify-center">
      <div className="max-w-7xl px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE – ICON VISUAL */}
        <div className="flex items-center justify-center">
          <div className="w-72 h-72 rounded-3xl bg-[#FFF3EF] flex items-center justify-center">
            <BadgeCheck className="w-36 h-36 text-[#FF3600]" />
          </div>
        </div>

        {/* RIGHT SIDE – CONTENT */}
        <div className="max-w-4xl w-full">
          <p className="text-[#FF3600] font-semibold mb-4">
            * Rental Conditions
          </p>

          <h2 className="text-4xl font-bold text-black mb-12">
            Policies and agreement
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="1" className="border rounded-2xl px-4">
              <AccordionTrigger className="text-lg cursor-pointer font-semibold">
                Driver&apos;s License Requirements
              </AccordionTrigger>
              <AccordionContent>
                A valid driving license with at least one year of experience is
                required to rent a vehicle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="2" className="border rounded-2xl px-4">
              <AccordionTrigger className="text-lg cursor-pointer font-semibold">
                Insurance and Coverage Policy
              </AccordionTrigger>
              <AccordionContent>
                All rentals include basic insurance coverage. Optional upgrades
                are available.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="3" className="border rounded-2xl px-4">
              <AccordionTrigger className="text-lg cursor-pointer font-semibold">
                Available Payment Methods
              </AccordionTrigger>
              <AccordionContent>
                We accept UPI, cards, net banking, and cash payments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="4" className="border rounded-2xl px-4">
              <AccordionTrigger className="text-lg cursor-pointer font-semibold">
                Cancellation and Modification Policy
              </AccordionTrigger>
              <AccordionContent>
                Free cancellation up to 24 hours before pickup time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="5" className="border rounded-2xl px-4">
              <AccordionTrigger className="text-lg cursor-pointer font-semibold">
                Smoking and Pet Policy
              </AccordionTrigger>
              <AccordionContent>
                Smoking is not allowed. Pets are permitted only in selected cars.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="6" className="border rounded-2xl px-4">
              <AccordionTrigger className="text-lg cursor-pointer font-semibold">
                Minimum Age Requirement
              </AccordionTrigger>
              <AccordionContent>
                The minimum age to rent a car is 21 years.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default PolicyMain;
