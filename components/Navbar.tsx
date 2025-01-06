"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#2c3e50] fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto p-4 flex flex-wrap justify-between items-center">
        {/* Left side: Name */}
        <div className="text-white text-2xl sm:text-4xl font-semibold">
          <Link href="/">Tharun Potharaju</Link>
        </div>
      </div>
    </nav>
  );
}
