"use client"

import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !date) {
      alert("Please fill all fields");
      return;
    }

    if (phone.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    const message = encodeURIComponent(
      `Hello! I want to rent / book a car.\n\n` +
      `Name: ${name}\n` +
      `Mobile: ${phone}\n` +
      `Pickup Date: ${date}`
    );

    window.open(
      "https://wa.me/918090579753?text=" + message,
      "_blank"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-6xl mx-auto bg-white lg:rounded-4xl shadow-md px-6 py-4 flex flex-wrap items-center gap-4"
    >
      {/* Left Text */}
      <div className="text-lg font-semibold text-gray-900 min-w-[200px]">
        Need to Rent a Car?
      </div>

      {/* Full Name */}
      <div className="flex flex-col flex-1 min-w-[160px]">
        <label className="text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter Full Name"
          className="outline-none font-opensans font-semibold border-2 rounded-xl p-1 text-black placeholder-gray-400"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Mobile Number */}
      <div className="flex flex-col flex-1 min-w-[160px]">
        <label className="text-sm font-medium text-gray-700">
          Mobile No
        </label>
        <input
          type="tel"
          placeholder="Enter Phone no."
          className="outline-none border-2 font-opensans font-semibold rounded-xl p-1 text-black placeholder-gray-400"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* Pickup Date */}
      <div className="flex flex-col min-w-[150px]">
        <label className="text-sm font-medium text-gray-700">
          Pickup Date
        </label>
        <input
          type="date"
          onClick={(e) => e.currentTarget.showPicker()}
          className="outline-none border-2 font-opensans font-semibold rounded-xl p-1 text-black"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition"
      >
        Send
      </button>
    </form>
  );
}

export default Form;
