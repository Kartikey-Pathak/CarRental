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
  title: "Car Rental in Varanasi | Aaradhya Tours & Travels - Taxi & Cab Services",
  description:
    "Book reliable car rental services in Varanasi with Aaradhya Tours & Travels.Airport transfers, chauffeur-driven cars, business travel & outstation taxis at best prices.",
  keywords: [
    "car rental in varanasi",
    "taxi service in varanasi",
    "cab booking varanasi",
    "airport taxi varanasi",
    "chauffeur driven car rental",
    "outstation cab varanasi",
    "Aaradhya Tours and Travels",
    "varanasi cab service",
  ],

  metadataBase: new URL("https://aaradhyatourandtravels.com"),

  openGraph: {
    title: "Car Rental in Varanasi | Aaradhya Tours & Travels",
    description:
      "Reliable car rental and taxi services in Varanasi.Airport transfers, chauffeur-driven cars, outstation and local cab booking at best prices.",
    url: "https://aaradhyatourandtravels.com",
    siteName: "Aaradhya Tours & Travels",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Aaradhya Tours & Travels car rental service in Varanasi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>

      <body
        className={`bg-white ${openSans.variable} scroll-smooth font-opensans`}
      >
        {children}
        <Cursor />
        <SmoothScroll />
        <Whatsapp/>
        <Call/>

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
