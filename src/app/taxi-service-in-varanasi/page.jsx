import Any from "../../../components/Any";
import Last from "../../../components/Last";
import Footer from "../../../components/Footer";
import TaxiSeoContent from "../../../components/TaxiSeoContent";
import NavContainer from "../../../components/NavContainer";

export const metadata = {
  title: "Taxi Service in Varanasi | Book Cabs Online - Aaradhya Tours & Travels",
  description:
    "Professional taxi service in Varanasi with experienced drivers. Book local, airport and outstation taxis at best price with Aaradhya Tours & Travels.",
};

export default function Page() {
  return (<>
   <header>
    <NavContainer/>
   </header>
    <main>
      <TaxiSeoContent/>

      <Any />

      <Last />
      <Footer />
    </main>
    </>
  );
}