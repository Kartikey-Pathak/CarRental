import { Phone, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ img, name, location, tag, rates }) {
  return (
     <Link href={`/cars/${name}`} className="block"><div onMouseEnter={() => window.cursor?.enter()}
      onMouseLeave={() => window.cursor?.leave()} className="max-w-md w-[20rem] md:w-[80rem] cursor-pointer  lg:w-[25rem] xl:w-[23rem] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative">
        <div className="relative w-full h-56 bg-gradient-to-br from-blue-50 to-blue-100">
          <Image
            onMouseEnter={() => window.cursor?.enter()}
            onMouseLeave={() => window.cursor?.leave()}
            src={img || "/no.jpg"}
            alt={name || "Car"}
            fill
            className="object-contain hover:cursor-pointer hover:scale-105 ease-in-out  transition-all"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        {tag && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">
          {name || "Swift Dzire"}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
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
              className="flex justify-between items-center text-sm border-b last:border-none pb-2"
            >
              <span className="text-gray-600">{item.label}</span>
              <span className="font-semibold text-gray-800">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button className="cursor-pointer hover:bg-indigo-600 active:bg-indigo-600 flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:opacity-90 transition">
            <Calendar size={18} />
            Book Now
          </button>

          <a href="tel:+918090579753">
            <button className="h-full cursor-pointer active:bg-gray-100 flex items-center justify-center px-4 rounded-xl border border-gray-200 hover:bg-gray-100 transition">
              <Phone className="text-gray-700" size={18} />
            </button>
          </a>
        </div>
      </div>
    </div></Link>
  );
}
