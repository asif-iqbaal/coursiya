import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-screen h-auto bg-[#000000] text-white">
      <div className="p-10 grid grid-cols-3 gap-4">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="font-extrabold md:text-5xl mb-6">
            COURsiyA
          </h3>
          <p className="text-sm">Your ultimate platform for online courses.</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#facebook" aria-label="Facebook"><FaFacebook size={24} /></a>
            <a href="#twitter" aria-label="Twitter"><FaTwitter size={24} /></a>
            <a href="#instagram" aria-label="Instagram"><FaInstagram size={24} /></a>
            <a href="#linkedin" aria-label="LinkedIn" className="md:visible hidden"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700">
        <p className="text-sm">&copy; 2024 COURsiyA. All Rights Reserved.</p>
      </div>
    </div>
  );
}
