// components/Navbar.tsx
'use client';  // Mark this component as a client-side component because it uses React hooks like useState, useEffect

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will run only on the client-side
  }, []);

  if (!isClient) return null;  // Prevent Navbar from rendering during SSR

  return (
    <nav className="bg-[#2c3e50] fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        {/* Left side: Name */}
        <div className="text-white text-4xl font-semibold">
          <Link href="/">Tharun Potharaju</Link>
        </div>

        {/* Right side: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-xl font-semibold text-[#94a2b3] hover:text-white">About Me</Link>
          <Link href="/education" className="text-xl font-semibold text-[#94a2b3] hover:text-white">Education</Link>
          <Link href="/Projects" className="text-xl font-semibold text-[#94a2b3] hover:text-white">Projects</Link>
          <Link href="/experience" className="text-xl font-semibold text-[#94a2b3] hover:text-white">Experience</Link>
          <Link href="/contact" className="text-xl font-semibold text-[#94a2b3] hover:text-white">Contact</Link>
          <a href="/TharunLatestResume.pdf" className="text-xl font-semibold text-[#94a2b3] hover:text-white border-2 border-[#94a2b3] py-2 px-4 rounded-md hover:bg-[#94a2b3] hover:text-white" download>
            Download CV
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-white text-3xl">☰</button>
        </div>
      </div>
    </nav>
  );
}