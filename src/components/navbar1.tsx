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
    <nav className="border-b border-green-200 w-full h-[60px] bg-green-90 flex items-center justify-between px-6 relative">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Chapter Logo"
          width={173}
          height={45}
          quality={100}
          className="object-contain"
        />
      </div>

      {/* Right: Notification + Profile */}
      <div className="flex items-center space-x-4 relative">
        {/* Notification */}
        <button className="relative text-gray-600 hover:text-green-700 text-2xl">
          <IoNotificationsSharp />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-none"></span>
        </button>

        {/* Profile + Dropdown */}
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

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="right-0 mt-1 w-30 bg-white border ">
              <div className="py-2 text-sm">
                <div className="bg-[#C8E6C9] w-full px-4 py-2 font-semibold ">
                  My Profile
                </div>
                <div className="px-4 py-2 w-full hover:bg-green-100 cursor-pointer">
                  Settings
                </div>
                <div className="px-4 py-2 w-full hover:bg-gray-100 cursor-pointer">
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
