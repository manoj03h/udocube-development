"use client"

import React, { useState, FormEvent } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => 
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="bg-black p-5 lg:p-8">ff</div>

      <div
  className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-5 lg:px-[120px] py-12"
  style={{ backgroundImage: `url('/images/contact/contact-teliphone.jpg')` }}
>
  {/* White Overlay */}
  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0"></div>

  {/* Main Content */}
  <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-[200px] lg:gap-[210px] lg:pr-[100px] items-start"> {/* Increased gap to 8 */}
    {/* Left: Form */}
    <div className="col-span-2 w-full md:w-[380px] lg:w-[400px] mt-4 md:mt-[60px]">
      <h2 className="text-xl font-bold text-black mb-6 border-b border-black pb-2">
        Send Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-white/40 border border-slate-500 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-white/40 border border-slate-500 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full p-3 rounded-md bg-white/40 border border-slate-500 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
        <button
          type="submit"
          className="bg-black text-white w-full sm:w-[195px] py-2 rounded-full hover:bg-gray-800 transition"
        >
          Send
        </button>
      </form>
    </div>

    {/* Right: Contact Card */}
    <div className="col-span-3 w-full md:w-[360px] lg:w-[450px] h-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <img
        src="/images/contact/contact-teliphone.jpg"
        alt="Contact"
        className="w-full h-[200px] sm:h-[280px] object-cover p-6 sm:p-10"
      />
      <div className="px-6 sm:px-10 pt-0 pb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-4 text-center sm:text-left">
          Contact Us
        </h2>

        <div className="text-sm space-y-2 border-y-2 border-slate-600 py-4 px-4 sm:px-[60px]">
          <div className="flex items-center gap-2">
            <div className="font-semibold w-20 whitespace-nowrap">Address</div>
            <div className="whitespace-nowrap">:</div>
            <div className="truncate">UFOCube Jamshedpur</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-semibold w-20 whitespace-nowrap">Call</div>
            <div className="whitespace-nowrap">:</div>
            <div className="truncate">+91 787 017 5908</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-semibold w-20 whitespace-nowrap">Email</div>
            <div className="whitespace-nowrap">:</div>
            <div className="truncate">info@ufocube.com</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6 text-[35px] justify-center sm:justify-start">
          <a href="https://www.facebook.com/ufocube" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="bg-slate-300 hover:bg-green-600 p-2 rounded-full text-black transition-all" />
          </a>
          <a href="https://www.instagram.com/ufocube03" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="bg-slate-300 hover:bg-green-600 p-2 rounded-full text-black transition-all" />
          </a>
          <a href="https://www.linkedin.com/company/ufocube" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="bg-slate-300 hover:bg-green-600 p-2 rounded-full text-black transition-all" />
          </a>
          <a href="https://www.youtube.com/@ufocube3" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="bg-slate-300 hover:bg-green-600 p-2 rounded-full text-black transition-all" />
          </a>
          <a href="https://x.com/ufocube03" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="bg-slate-300 hover:bg-green-600 p-2 rounded-full text-black transition-all" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
