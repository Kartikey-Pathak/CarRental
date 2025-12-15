"use client";

import { useState } from "react";
import Any from "../../../components/Any";

import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import Side from "../../../components/Side";

function Rent() {
      const [open, setOpen] = useState(false);
    return (

        <section className=" w-full">
            <Nav open={open} setOpen={setOpen} />
            <Side open={open} setOpen={setOpen} />

            <Any />

            <footer>
                <Footer />
            </footer>

        </section>

    )
}
export default Rent;