"use client"

import { useState } from "react";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Any from "../../components/Any";
import Hero2 from "../../components/Hero2";
import Hero from "../../components/Hero";
import Last from "../../components/Last";
import Nav from "../../components/Nav";
import Nav2 from "../../components/Nav2";
import Review from "../../components/Review";
import Service from "../../components/Service";
import Side from "../../components/Side";
import Testimonial from "../../components/Testimonial";

import Section from "../../components/Section";
import PolicyAccordion from "../../components/PolicyAccordion";
import PolicyMain from "../../components/PolicyMain";


export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <section className=" w-full">

       <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Aaradhya Tours & Travels",
      "image": "https://aaradhyatourandtravels.com/logo.png",
      "telephone": "+91-8090579753",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Varanasi",
        "addressRegion": "UP",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "City",
        "name": "Varanasi"
      },
      "url": "https://aaradhyatourandtravels.com",
      "priceRange": "₹₹",
      "serviceType": [
        "Car Rental",
        "Taxi Service",
        "Airport Transfer",
        "Outstation Cab"
      ]
    }),
  }}
/>



      <header>
        <Nav open={open} setOpen={setOpen} />
        <Side open={open} setOpen={setOpen} />
      </header>

      <main>
        <Hero />

        <Service />




        <Any />

        <Section />





        <Testimonial />
        <PolicyMain />

        <Last />
      </main>
      <footer>
        <Footer />
      </footer>



    </section>
  );
}
