"use client";

import { Phone, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ img, name, location, tag, rates }) {
  return (
    <Link href={`/cars/${name}`} className="block">
      <div
        onMouseEnter={() => window.cursor?.enter()}
        onMouseLeave={() => window.cursor?.leave()}
        className="max-w-md w-[20rem] md:w-[80rem] cursor-pointer lg:w-[25rem] xl:w-[23rem] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      >
        <div className="relative">
          <div className="relative w-full h-56 bg-[#1f1f1f]">
            <Image
              onMouseEnter={() => window.cursor?.enter()}
              onMouseLeave={() => window.cursor?.leave()}
              src={img || "/no.jpg"}
              alt={name || "Car"}
              fill
              className="object-contain hover:cursor-pointer hover:scale-105 ease-in-out transition-all"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          {tag && (
            <span className="absolute top-4 left-4 bg-[#FF3600] text-white text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          )}
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold text-white">
            {name || "Swift Dzire"}
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            {location || "Varanasi"}
          </p>

          <div className="space-y-3">
            {(rates || [
              { label: "Airport Transfer", price: "₹900" },
              { label: "8 Hrs / 80 KM", price: "₹1800" },
              { label: "Full Day / 200 KM", price: "₹2200" },
              { label: "Outstation (Min. 250km/day)", price: "₹11/km" },
            ]).map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-sm border-b border-white/10 last:border-none pb-2"
              >
                <span className="text-gray-400">{item.label}</span>
                <span className="font-semibold text-white">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              className="w-52 flex items-center justify-center"
              href={`/contact?car=${encodeURIComponent(name)}`}
            >
              <button className="cursor-pointer hover:bg-[#e63200] active:bg-[#cc2d00] flex-1 flex items-center justify-center gap-2 bg-[#FF3600] text-white py-2.5 rounded-xl font-semibold transition">
                <Calendar size={18} />
                Book Now
              </button>
            </Link>

            <a
              href="tel:+918090579753"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="h-full cursor-pointer active:bg-white/10 flex items-center justify-center px-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
                <Phone className="text-white" size={18} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}