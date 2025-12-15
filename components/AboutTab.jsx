"use client";

import { useState } from "react";
import {
  Car,
  Target,
  Compass,
  CheckCircle
} from "lucide-react";

const content = {
  vision: {
    label: "Our Vision",
    title: "Pioneering excellence in car rental services",
    description:
      "We envision a future where renting a car is effortless, reliable, and accessible to everyone. By embracing innovation and maintaining the highest service standards, we aim to redefine mobility experiences for our customers.",
    points: [
      "Our customers are our top priority",
      "Quality is at the heart of everything we do",
      "Every vehicle leaves our care looking its absolute best"
    ],
    icon: Car
  },
  mission: {
    label: "Our Mission",
    title: "Driving innovation and customer satisfaction",
    description:
      "Our mission is to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, we ensure a seamless, safe, and efficient rental experience.",
    points: [
      "Fast and transparent booking process",
      "Well-maintained and diverse vehicle fleet",
      "Safety, comfort, and reliability guaranteed"
    ],
    icon: Target
  },
  approach: {
    label: "Our Approach",
    title: "A smarter, customer-first rental experience",
    description:
      "We take a customer-centric approach by combining technology, service excellence, and attention to detail. Every interaction, from booking to return, is designed to exceed expectations.",
    points: [
      "Customer-focused service at every step",
      "Continuous improvement and innovation",
      "Consistent quality across all vehicles"
    ],
    icon: Compass
  }
};

export default function AboutTab() {
  const [active, setActive] = useState("vision");
  const ActiveIcon = content[active].icon;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="flex gap-3 bg-orange-50 p-2 rounded-full">
            {Object.keys(content).map((key) => (
              <button
                key={key}
                onMouseEnter={() => window.cursor?.enter()}
                onMouseLeave={() => window.cursor?.leave()}
                onClick={() => setActive(key)}
                className={`px-6 py-2 cursor-pointer text-sm md:text-xl rounded-full font-bold transition-all
                  ${active === key
                    ? "bg-[#FF3600] text-white"
                    : "bg-white text-gray-800 hover:bg-orange-100"
                  }
                `}
              >
                {content[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-[#FF3600] font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">*</span>
              {content[active].label}
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
              {content[active].title}
            </h2>

            <p className="text-gray-600 mb-10">
              {content[active].description}
            </p>

            <ul className="space-y-4">
              {content[active].points.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF3600] w-6 h-6" />
                  <span className="text-gray-800 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Icon instead of Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-3xl bg-orange-50 flex items-center justify-center shadow-sm">
              <ActiveIcon className="w-32 h-32 text-[#FF3600]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
