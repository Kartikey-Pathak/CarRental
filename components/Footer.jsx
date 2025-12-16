import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-10 flex justify-center">
      {/* Main Footer Wrapper */}
      <div className="relative w-full lg:w-[95%] rounded-none lg:rounded-[40px] overflow-hidden">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0f0f] to-black"></div>

        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl"></div>

        {/* Footer Content */}
        <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 py-14">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold">
            <span className="text-[#FF3600]">ARADHYA TOURS</span> AND TRAVELS
          </h2>
              <p className="text-gray-400 mt-4">
                Experience the comfort and reliability of traveling with Aaradhya Tour & Travels.
              </p>
            </div>

            {/* Legal Policy */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal Policy</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className=" cursor-pointer space-y-2 text-gray-400">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/rent">Rent a Car</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Get Travel Deals & Updates
              </h3>

              <div className="flex items-center">
                {/* Email Input */}
                  <p className="text-gray-400 mt-4">Email : <a href="mailto:rajat6427@gmail.com" className="text-orange-500 hover:underline">
                  
                rajat6427@gmail.com</a>
              </p>
              
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-10"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-sm">
              © 2025 Aaradhya Tour & Travels. All rights reserved.
            </p>

            <div className="flex gap-4">
              <SocialIcon link="https://www.youtube.com">
                <FaYoutube />
              </SocialIcon>
              <SocialIcon link="https://www.facebook.com">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon link="https://www.instagram.com">
                <FaInstagram />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Social Media Icon */
const SocialIcon = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600
                 hover:border-orange-500 hover:text-orange-500 transition"
    >
      {children}
    </a>
  );
};

export default Footer;