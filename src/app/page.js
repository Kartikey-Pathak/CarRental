

import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import Img from "../../components/Img";
import Last from "../../components/Last";
import Nav from "../../components/Nav";
import Nav2 from "../../components/Nav2";
import Review from "../../components/Review";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";
import Why from "../../components/Why";

export default function Home() {
  return (
     <section className=" w-full">
            <Nav/>
            <Nav2/>
            <Img/>
            <Form/>
            <Hero/>
            <Hero2/>
            <Service/>
            <Why/>
            <Testimonial/>
            <Last/>
            <footer>
                <Footer/>
            </footer>
            
            
            
        </section>
  );
}
