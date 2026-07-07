"use client"

import { useState } from "react";
import Nav from "./Nav";
import Side from "./Side";

export default function NavContainer() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Nav open={open} setOpen={setOpen} />
            <Side open={open} setOpen={setOpen} />
            
        </>
    )
}