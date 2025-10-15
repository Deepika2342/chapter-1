"use client";

import Image from "next/image";
import { IoNotificationsSharp } from "react-icons/io5";
import logo from "@/img/Logo.png";
import profile from "@/img/profile.png";
import { useState, useRef, useEffect } from "react";

const Navbar1 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="border-b border-b-green-200 w-full h-[50px] pb-2 bg-green-90">
      <div className="flex justify-between items-center px-4">
        {/* Left: Logo */}
        <div className="flex flex-col items-center justify-center">
          <Image
            src={logo}
            alt="Chapter Logo"
            width={173}
            height={45}
            quality={100}
            className="object-contain"
          />
        </div>

        {/* Right side: Notification + Profile */}
        <div className="flex items-center space-x-4 relative">
          <button className="relative text-gray-600 hover:text-green-700 text-2xl">
            <IoNotificationsSharp />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-none"></span>
          </button>

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-8 h-8 overflow-hidden border border-gray-300 rounded-none"
            >
              <Image
                src={profile}
                alt="Profile"
                width={32}
                height={32}
                className="w-8 h-8 object-cover"
              />
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded border border-gray-200 z-50">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
