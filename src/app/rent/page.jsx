"use client";

import Any from "../../../components/Any";

import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import Side from "../../../components/Side";

function Rent({ open, setOpen }) {
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