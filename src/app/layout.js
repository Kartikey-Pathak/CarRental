import Script from "next/script";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Cursor from "../../components/Cursor";
import SmoothScroll from "../../components/SmoothScroll";
import Whatsapp from "../../components/Whatsapp";
import Call from "../../components/Call";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  title: "Car Rental in Varanasi | Aaradhya Tour & Travels - Taxi & Cab Services",
  description:
    "Book reliable car rental services in Varanasi with Aaradhya Tour & Travels.Airport transfers, chauffeur-driven cars, business travel & outstation taxis at best prices.",
  keywords: [
    "car rental in varanasi",
    "aaradhya tour and travels",
    "aaradhyatourandtravels",
    "aaradhya tours and travels",
    "taxi service in varanasi",
    "cab booking varanasi",
    "airport taxi varanasi",
    "chauffeur driven car rental",
    "outstation cab varanasi",
    "Aaradhya Tours and Travels",
     "Aaradhya Tour and Travels",
    "varanasi cab service",
  ],

  metadataBase: new URL("https://aaradhyatourandtravels.com"),

  openGraph: {
    title: "Car Rental in Varanasi | Aaradhya Tour & Travels",
    description:
      "Reliable car rental and taxi services in Varanasi.Airport transfers, chauffeur-driven cars, outstation and local cab booking at best prices.",
    url: "https://aaradhyatourandtravels.com",
    siteName: "Aaradhya Tour & Travels",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Aaradhya Tour & Travels car rental service in Varanasi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className=" bg-black" lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SBQTX18BJ9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SBQTX18BJ9');
  `}
        </Script>

      </head>

      <body
        className={`bg-white ${openSans.variable} scroll-smooth font-opensans`}
      >
        {children}
        <Cursor />
        <SmoothScroll />
        <Whatsapp />
        <Call />

        {/* ✅ JS version of Font Awesome (always works) */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
