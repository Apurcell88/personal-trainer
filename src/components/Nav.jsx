"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide text-white hover:text-amber-500 transition-colors duration-300">
          <a href="/">AP Fit</a>
        </h1>
        <button onClick={() => setIsOpen(true)}>
          <Menu className="w-8 h-8 text-white hover:cursor-pointer" />
        </button>
      </div>

      {/* Slide-out menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-900 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        <ul className="mt-16 space-y-4 p-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
