"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";

type NavbarProps = {
  navItems: string[];
  resumeUrl: string;
};

export default function Navbar({ navItems, resumeUrl }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#252525] px-6 py-4 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="text-2xl font-bold text-cyan-400 sm:text-3xl">
          <Link href="/">Tharun Potharaju</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-300 transition-colors hover:text-cyan-400"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 top-16 w-full bg-[#252525] p-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0`}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="block py-1 text-gray-300 capitalize transition-colors hover:text-cyan-400 md:py-0"
              onClick={closeMenu}
            >
              {item}
            </Link>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#1a1a1a] transition-all hover:bg-pink-400 md:mt-0"
            onClick={closeMenu}
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
