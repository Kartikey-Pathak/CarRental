import Any from "../../../components/Any";
import Last from "../../../components/Last";
import Footer from "../../../components/Footer";
import AirportSeoContent from "../../../components/AirportSeoContent";
import NavContainer from "../../../components/NavContainer";

export const metadata = {
  title: "Airport Taxi in Varanasi | Pickup & Drop Service - Aaradhya Tours",
  description:
    "Book airport taxi in Varanasi for timely pickup and drop. Reliable cab service to and from Lal Bahadur Shastri Airport.",
};

export default function Page() {
  return (
    <>
    <header>
        <NavContainer/>
    </header>
    <main>
      <AirportSeoContent/>

      <Any />

      <Last />
      <Footer />
    </main>
    </>
  );
}