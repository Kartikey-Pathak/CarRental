import Any from "../../../components/Any"
import Last from "../../../components/Last";
import Footer from "../../../components/Footer";
import NavContainer from "../../../components/NavContainer";
import CarRentalSeoContent from "../../../components/CarRentalSeoContent";

export const metadata = {
  title:
    "Car Rental in Varanasi | Affordable Cab Booking - Aaradhya Tour And Travels",

  description:
    "Book the best car rental in Varanasi with Aaradhya Tour And Travels. Affordable taxi service for local, airport and outstation travel.",

  alternates: {
    canonical:
      "https://aaradhyatourandtravels.com/car-rental-in-varanasi",
  },

  openGraph: {
    title:
      "Car Rental in Varanasi | Aaradhya Tour And Travels",

    description:
      "Affordable car rental in Varanasi for airport, local and outstation trips.",

    url:
      "https://aaradhyatourandtravels.com/car-rental-in-varanasi",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Car Rental in Varanasi | Aaradhya Tour And Travels",

    description:
      "Affordable car rental in Varanasi for airport, local and outstation trips.",
  },
};
export default function Page() {
  return (<>
  <header>
    <NavContainer/>
  </header>
    <main>
      <CarRentalSeoContent/>

      <Any />

      <Last />
      <Footer />
    </main>
    </>
  );
}