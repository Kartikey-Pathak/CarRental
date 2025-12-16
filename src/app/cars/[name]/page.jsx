"use client"

import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { X, CheckCircle } from "lucide-react";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import Side from "../../../../components/Side";
import PolicyAccordion from "../../../../components/PolicyAccordion";
import Link from "next/link";

export default function CarDetails({ params }) {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [carName, setCarName] = useState("");

  // Unwrap params safely in useEffect
  useEffect(() => {
    (async () => {
      const resolvedParams = await params; // unwrap promise if necessary
      setCarName(decodeURIComponent(resolvedParams.name));
    })();
  }, [params]);

  useEffect(() => {
    if (!carName) return;

    async function fetchCar() {
      try {
        const res = await fetch("/api/cars");
        const data = await res.json();

        const foundCar = data.find(
          (c) => c.name.toLowerCase() === carName.toLowerCase()
        );

        setCar(foundCar || null);
      } catch (err) {
        console.error("Error fetching car:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCar();
  }, [carName]);

  if (loading || !carName) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        <span className="loading loading-dots text-[#FF3600] loading-xl"></span>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-semibold">
        Car not found
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{`${car.name} Car Rental in Varanasi | Aaradhya Tours & Travels`}</title>
        <meta
          name="description"
          content={`Book ${car.name} car rental in Varanasi with Aaradhya Tours & Travels. Affordable rates, well-maintained cars, airport transfers, local & outstation trips.`}
        />
        <meta property="og:title" content={`${car.name} Car Rental in Varanasi`} />
        <meta
          property="og:description"
          content={`Rent ${car.name} in Varanasi at best prices. Chauffeur-driven cars, airport pickup & outstation services.`}
        />
        <meta property="og:image" content="/logo.png" />
      </Head>

      <Nav open={open} setOpen={setOpen} />
      <Side open={open} setOpen={setOpen} />

      <section className="max-w-7xl mx-auto px-6 py-20 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT INFO */}
          <div className="bg-[#FFF8F6] rounded-3xl p-8 order-2 lg:order-1">
            <h1 className="text-3xl text-black font-bold mb-2">{car.name}</h1>
            <p className="text-black mb-6">{car.location}</p>

            <h2 className="text-xl font-semibold text-black mb-4">Rates</h2>

            <div className="space-y-4">
              {car.rates.map((rate, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <span className="text-black">{rate.label}</span>
                  <div className="flex items-center gap-6">
                    <span className="font-semibold text-black">{rate.price}</span>
                    <X className="text-black" size={18} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4 items-center justify-center">
              <Link href={`/contact?car=${encodeURIComponent(car.name)}`}><button
                onMouseEnter={() => window.cursor?.enter()}
                onMouseLeave={() => window.cursor?.leave()}
                className="bg-[#FF3600] cursor-pointer active:bg-[#FF3600]/60 hover:bg-[#FF3600]/60 transition-all text-white px-8 py-4 rounded-full font-semibold"
              >
                Book Now
              </button>
              </Link>

              <a
                href="tel:+918090579753"
                onMouseEnter={() => window.cursor?.enter()}
                onMouseLeave={() => window.cursor?.leave()}
                className="flex cursor-pointer items-center justify-center w-12 h-12 hover:bg-[#FF3600]/60 transition-all rounded-full bg-[#FF3600] text-white"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-3xl overflow-hidden order-1 lg:order-2">
            <Image
              src={car.image || "/AMAZE.png"}
              alt={car.name}
              width={800}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>

        </div>
      </section>

      <section className="w-full py-20 bg-white flex items-center justify-center">
        <div className="max-w-5xl px-6">
          <p className="text-[#FF3600] font-semibold mb-4 flex items-center gap-2">
            <span className="text-xl">*</span>
            General Information
          </p>

          <h2 className="text-4xl font-bold text-black mb-6">
            Know about our car service
          </h2>

          <p className="text-gray-600 max-w-4xl mb-10 leading-relaxed">
            We provide reliable and affordable car rental services designed
            to make your travel comfortable and stress-free. From easy bookings
            to well-maintained vehicles, we focus on delivering quality at every step.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#FF3600]" />
              <span className="font-semibold text-black">
                24/7 Roadside Assistance
              </span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#FF3600]" />
              <span className="font-semibold text-black">
                Free Cancellation & Return
              </span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#FF3600]" />
              <span className="font-semibold text-black">
                Rent Now, Pay When You Arrive
              </span>
            </li>
          </ul>

        </div>
      </section>

      <PolicyAccordion/>
      <Footer/>
    </>
  );
}
