
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
import HomeSeoContent from "../../components/HomeSeoContent";
import NavContainer from "../../components/NavContainer";

export const metadata = {
  metadataBase: new URL("https://aaradhyatourandtravels.com"),

  title: "Car Rental in Varanasi | Taxi Service & Cab Booking | Aaradhya Tours & Travels",

  description:
    "Book affordable car rental in Varanasi with Aaradhya Tours & Travels. We provide local taxi service, airport transfers, one way cabs, round trips, outstation taxi, and Varanasi sightseeing with professional drivers at affordable prices.",

  keywords: [
    "car rental in Varanasi",
    "Varanasi car rental",
    "taxi service in Varanasi",
    "cab service Varanasi",
    "cab booking Varanasi",
    "car hire in Varanasi",
    "rent a car in Varanasi",
    "airport taxi Varanasi",
    "airport transfer Varanasi",
    "outstation cab Varanasi",
    "one way taxi Varanasi",
    "round trip taxi Varanasi",
    "local taxi Varanasi",
    "local car rental Varanasi",
    "Varanasi sightseeing taxi",
    "Kashi Vishwanath taxi",
    "Assi Ghat taxi",
    "Dashashwamedh Ghat taxi",
    "24 hour taxi Varanasi",
    "Aaradhya Tours & Travels"
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Car Rental in Varanasi | Aaradhya Tours & Travels",
    description:
      "Affordable taxi and car rental services in Varanasi for local, airport, outstation and sightseeing travel.",
    url: "https://aaradhyatourandtravels.com/",
    siteName: "Aaradhya Tours & Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Aaradhya Tours & Travels",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function Home() {


  return (
    <section className=" w-full">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "TaxiService"],
            "logo": "https://aaradhyatourandtravels.com/logo.png",
            "email": "rajat6427@gmail.com",
            "openingHours": "Mo-Su 00:00-23:59",
            "areaServed": [
              {
                "@type": "City",
                "name": "Varanasi"
              },
              {
                "@type": "State",
                "name": "Uttar Pradesh"
              }
            ],
            "name": "Aaradhya Tours & Travels",
            "description":
              "Aaradhya Tours & Travels provides affordable car rental, local taxi, airport transfer, one way, round trip and outstation cab services in Varanasi.",
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
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Taxi Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Car Rental"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Airport Transfer"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Outstation Cab"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local Taxi Service"
                  }
                }
              ]
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
        <NavContainer />
      </header>

      <main>
        <Hero />

        <Service />




        <Any />

        <Section />


        <HomeSeoContent />


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