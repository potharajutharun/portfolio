"use client";
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub, FaInstagram, FaPen, FaGitlab } from "react-icons/fa"; // Import FontAwesome icons
import Image from "next/image"; // For image handling (Next.js Image component)

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6">
        <Navbar />
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-12 md:space-y-0 pt-24">
        {/* Social Profiles Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex flex-col space-y-10">
            
            <a href="hhttps://www.linkedin.com/in/tharun-potharaju/" target="_blank" className="text-4xl text-[#0077b5] hover:text-[#0a66c2]">
              <FaLinkedin />
            </a>
            <a href="https://github.com/potharajutharun" target="_blank" className="text-4xl text-[#3337y] hover:text-[#24292f]">
              <FaGithub />
            </a>
            <a href="https://gitlab.com/potharajutharunrana" target="_blank" className="text-4xl text-[red] hover:text-[#24292f]">
              <FaGitlab />
            </a>
            <a href="https://www.instagram.com/tharunranapotharaju/?next=https%3A%2F%2Fwww.instagram.com%2Fexplore%2Fsearch%2F%3F__coig_login%3D1" target="_blank" className="text-4xl text-[#E1306C] hover:text-[#C13584]">
              <FaInstagram />
            </a>
            <a href="https://leetcode.com/u/potharajutharunrana/" target="_blank" className="text-4xl">
              <Image
                src="/leetcode.png" // Replace with the path to your LeetCode logo image
                alt="LeetCode Logo"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Image Section with Quote Overlay and Author Name */}
        <div className="relative w-full h-[400px] overflow-hidden">
          <img src="/portimg-removebg-preview.png" alt="Your Photo" className="object-contain w-full h-full" />

          {/* Quote Overlay with Animation and Color Change */}
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
            <span className="text-3xl md:text-4xl font-semibold text-center w-75 px-4 py-2 animate-fadeIn animate-pulse text-gradient">
              Make the sun jealous with your burning passion to start the day or stay in bed.
            </span>
          </div>

          {/* Author Name with Pen Icon, Positioned Bottom Right */}
          <div className="absolute bottom-4 right-4 flex items-center space-x-2 animate-slideInRight">
            <FaPen className="text-white text-xl" />
            <span className="text-lg text-white font-light italic">Tharun Potharaju</span>
          </div>
        </div>
      </div>
    </div>
  );
}
