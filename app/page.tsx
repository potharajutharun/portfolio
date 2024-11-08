"use client";
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub, FaInstagram, FaGitlab } from "react-icons/fa";
import Image from "next/image"; // For image handling (Next.js Image component)

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-5">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-x-12 lg:space-y-0 pt-12 lg:pt-24">
        {/* Social Profiles Section */}
        <div className="flex flex-row lg:flex-col justify-center lg:items-start space-x-6 lg:space-x-0 lg:space-y-6">
          <a href="https://www.linkedin.com/in/tharun-potharaju/" target="_blank" className="text-3xl lg:text-4xl text-[#0077b5] hover:text-[#0a66c2] transition-colors duration-200">
            <FaLinkedin />
          </a>
          <a href="https://github.com/potharajutharun" target="_blank" className="text-3xl lg:text-4xl text-[#333] hover:text-[#24292f] transition-colors duration-200">
            <FaGithub />
          </a>
          <a href="https://gitlab.com/potharajutharunrana" target="_blank" className="text-3xl lg:text-4xl text-[#e24329] hover:text-[#f5655d] transition-colors duration-200">
            <FaGitlab />
          </a>
          <a href="https://www.instagram.com/tharunranapotharaju/?next=https%3A%2F%2Fwww.instagram.com%2Fexplore%2Fsearch%2F%3F__coig_login%3D1" target="_blank" className="text-3xl lg:text-4xl text-[#E1306C] hover:text-[#C13584] transition-colors duration-200">
            <FaInstagram />
          </a>
          <a href="https://leetcode.com/u/potharajutharunrana/" target="_blank" className="text-3xl lg:text-4xl">
            <Image
              src="/leetcode.png"
              alt="LeetCode Logo"
              width={40}
              height={40}
              className="hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Image Section with Quote Overlay and Author Name */}
        <div  style={{marginLeft:'20%'}} className="relative w-full max-w-lg mx-auto lg:mx-0 h-[300px] sm:h-[400px] md:h-[500px]  overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/portimg-removebg-preview.png"
            alt="Your Photo"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />

          {/* Quote Overlay with Animation and Color Change */}
          <div className="absolute inset-0 flex items-center justify-content-center   bg-opacity-50">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white px-4 animate-fadeIn animate-pulse">
              Make the sun jealous with your burning passion to start the day or stay in bed.
            </span>
          </div>

          
        </div>
      </div>
    </div>
  );
}
