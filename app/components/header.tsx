"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useTheme } from "next-themes";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function Header() {
  const scrollPosition = useScrollPosition();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-shadow ${
          scrollPosition > 0
            ? "shadow bg-opacity-100 backdrop-blur-lg backdrop-filter"
            : "shadow-none"
        }`}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center  mb-4 md:mb-0">
            <span className="ml-3 text-xl" suppressHydrationWarning>
              <Link href="/">Booth/Chic</Link>
            </span>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/about" className="mr-5">
              About
            </Link>
            <Link href="/services" className="mr-5 hover:text-gray-900">
              Services
            </Link>
            <Link href="/galleries" className="mr-5 hover:text-gray-900">
              Galleries
            </Link>
            <Link href="/blog" className="mr-5 hover:text-gray-900">
              Blog
            </Link>
          </nav>
          <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Book Now
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex items-center justify-center rounded-lg p-2 transition-colors  dark:hoverbg-zinc-700"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {resolvedTheme === "dark" ? (
              <SunIcon className="h-5 w-5 text-orange-300" />
            ) : (
              <MoonIcon className="h-5 w-5 text-slate-800" />
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
