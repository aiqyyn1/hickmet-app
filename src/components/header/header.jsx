"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full py-4 px-[40px] flex justify-between items-center bg-white shadow-md lg:py-5 lg:px-[80px]">
        <h1 className="text-xl font-bold">
          <Link href="/">Hajjaid</Link>
        </h1>
        <button className="text-2xl" onClick={toggleMenu}>
          &#9776;
        </button>
      </header>
      <div
        className={`fixed top-0 left-0 w-full bg-white transform h-[150px] ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-700 ease-in-out z-40`}
      >
        <div className="p-4">
          <button className="text-black" onClick={toggleMenu}>
            <XIcon />
          </button>
          <Link href="/login">
            <button className="mt-4 w-full bg-[#434141] text-white py-2 px-4 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default Header;
