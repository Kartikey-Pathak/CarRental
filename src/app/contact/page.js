"use client"

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import Side from "../../../components/Side";

import { useSearchParams } from 'next/navigation';
const Contact = () => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const car = searchParams.get('car'); // get the car name from URL

  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      <Side open={open} setOpen={setOpen} />

      <div className="min-h-screen md:mt-10 mt-20 bg-gray-100 flex items-center justify-center px-6">
        <div className="w-full lg:w-[95%] bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

          {/* LEFT CONTACT CARD */}
          <div className="relative bg-black text-white rounded-2xl p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-400 mb-8">Say something to start a live chat!</p>

              <InfoItem
                icon={<FaPhoneAlt />}
                text={<a href="tel:+918090579753" className="hover:underline">+91 80905 79753</a>}
              />
              <InfoItem
                icon={<FaEnvelope />}
                text={<a href="mailto:rajat6427@gmail.com" className="hover:underline">rajat6427@gmail.com</a>}
              />
              <InfoItem
                icon={<FaMapMarkerAlt />}
                text={
                  <>
                    Varanasi 221005 <br />
                    Uttar Pradesh, India
                  </>
                }
              />
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-8">
              <SocialIcon link="https://facebook.com"><FaFacebookF /></SocialIcon>
              <SocialIcon link="https://youtube.com"><FaYoutube /></SocialIcon>
              <SocialIcon link="https://instagram.com"><FaInstagram /></SocialIcon>
            </div>

            {/* DECORATIVE CIRCLES */}
            <div className="absolute -bottom-10 -right-10 w-28 md:w-40 h-28 md:h-40 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-16 right-16 w-24 h-24 bg-white/10 rounded-full"></div>
          </div>

          {/* RIGHT FORM */}
          <form 
            className="space-y-6 md:space-y-8 p-2 md:p-6" 
            onSubmit={(e) => {
              e.preventDefault();
              const firstName = e.target[0].value.trim();
              const lastName = e.target[1].value.trim();
              const email = e.target[2].value.trim();
              const phone = e.target[3].value.trim();
              const message = e.target[4].value.trim();

              // Validate first name and last name
              if (!firstName || !lastName) {
                alert("Please fill in both First Name and Last Name before sending.");
                return;
              }

              const carText = car ? `Car: ${car}` : "";
              const finalMessage = encodeURIComponent(
                `Hey, I want to rent a car.\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\n${carText}\nMessage: ${message}`
              );

              window.open(`https://wa.me/918090579753?text=${finalMessage}`, "_blank");
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <InputField label="First Name" placeholder="Enter Your Name" />
              <InputField label="Last Name" placeholder="Enter Your Name" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <InputField label="Email" placeholder="Enter Your Email" type="email" />
              <InputField label="Phone" placeholder="Enter Your Number" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write Your Message"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 resize-none"
              />
            </div>

            <button
              onMouseEnter={() => window.cursor?.enter()}
              onMouseLeave={() => window.cursor?.leave()}
              type="submit"
              className="bg-[#FF3600] cursor-pointer text-white px-8 py-3 rounded-full hover:bg-[#FF3600]/60 active:bg-[#FF3600]/60 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      

      <footer>
        <Footer />
      </footer>
    </>
  );
};

/* Reusable Components */
const InfoItem = ({ icon, text }) => (
  <div className="flex items-start gap-4 mb-4">
    <div className="mt-1">{icon}</div>
    <div>{text}</div>
  </div>
);

const InputField = ({ label, placeholder, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
    />
  </div>
);

const SocialIcon = ({ link, children }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-orange-500 hover:text-orange-500 transition"
  >
    {children}
  </a>
);

export default Contact;
