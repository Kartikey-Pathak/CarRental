// components/NavWrapper.js — only this tiny piece needs "use client"
"use client";
import { useState } from "react";
import Nav from "./Nav";
import Side from "./Side";

export default function NavWrapper() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      <Side open={open} setOpen={setOpen} />
    </>
  );
}