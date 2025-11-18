"use client";
import { useEffect } from "react";

export default function Home() {
  // Toggle dark mode
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-white border-b border-gray-10 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 py-2">

          {/* Left */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full lg:hidden">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
              <span className="text-xl font-normal text-black dark:text-black hidden md:block">
                E-leave Management
              </span>
            </div>
          </div>
      </header>
    </div>
  );
}
