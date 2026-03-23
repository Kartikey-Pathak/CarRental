"use client";

import { useEffect, useState } from "react";
import Any from "../../../components/Any";

import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import Side from "../../../components/Side";
import Last from "../../../components/Last";
import SeoContent from "../../../components/SeoContent";

function Rent() {
    const [open, setOpen] = useState(false);
    const [cars, setCars] = useState([]); //fetch the cars data
   
    // ✅ fetch
    useEffect(() => {
        async function fetchCars() {
            try {
                const res = await fetch("/api/cars");
                const data = await res.json();
                setCars(data);
            } catch (err) {
                console.error("Error fetching cars:", err);
            }
        }
        fetchCars();
    }, []);
    return (

        <section className=" w-full">
            <Nav open={open} setOpen={setOpen} />
            <Side open={open} setOpen={setOpen} />

            <Any packages={cars} />

            <SeoContent />

            <Last />

            <footer>
                <Footer />
            </footer>

        </section>

    )
}
export default Rent;