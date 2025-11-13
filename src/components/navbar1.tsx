"use client";

import Image from "next/image";
import logo from "@/img/Logo.png";
import profile from "@/img/profile.png";
import { useState, useRef, useEffect } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar1 = () => {
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const [selectedCompany, setSelectedCompany] = useState("Klamp Ecommerce Pvt. Ltd.");
  const [selectedYear, setSelectedYear] = useState("2022-23");

  const companyRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  const companies = [
    "Klamp Ecommerce Pvt. Ltd.",
    "Housing Development Finance Corporation International Ltd",
    "ICICI Prudential Life Insurance Company Ltd",
    "Sun Pharmaceuticals Industries Ltd",
  ];
  const years = ["2022-23", "2023-24", "2024-25"];

  useEffect(() => {
    // ✅ FIX: Add proper typing to the event
    const handleClickOutside = (event: MouseEvent) => {
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyDropdownOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
      setYearDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-border border-b border-border px-0 flex items-center justify-between h-[60px]">
      {/* Left side: Logo + Company Dropdown */}
      <div className="flex items-center gap-4">
        {/* Logo - hidden on mobile */}
        <Image
          src={logo}
          alt="Chapter Logo"
          width={150}
          height={40}
          className="object-contain hidden sm:block"
        />

        {/* Company Dropdown */}
        <div className="relative" ref={companyRef}>
          <button
            onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#105F62]"
          >
            {selectedCompany}
            <IoMdArrowDropdown className="text-lg" />
          </button>

          {companyDropdownOpen && (
            <div className="absolute top-8 left-0 w-72 sm:w-96 bg-white border border-gray-200 shadow-md rounded-sm z-50">
              <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-3 py-2">
                <span className="text-gray-800 font-semibold text-sm">{selectedCompany}</span>
                <FaSearch className="text-gray-600 text-sm cursor-pointer" />
              </div>
              <ul className="max-h-56 overflow-y-auto">
                {companies.map((company, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setSelectedCompany(company);
                      setCompanyDropdownOpen(false);
                    }}
                    className={`px-4 py-2 text-sm cursor-pointer border-b last:border-b-0 ${company === selectedCompany
                        ? "bg-[#105F62] text-white font-medium"
                        : "hover:bg-gray-100 text-gray-700"
                      }`}
                  >
                    {company}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 sm:gap-6 relative">
        {/* Year Dropdown */}
        <div className="relative">
          <button
            onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
            className="flex items-center gap-1 text-gray-700 font-medium text-sm hover:text-[#105F62]"
          >
            {selectedYear}
            <IoMdArrowDropdown className="text-gray-700 text-lg" />
          </button>

          {yearDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-sm z-50">
              <div
                onClick={() => alert("Create Year Clicked!")}
                className="px-3 py-2 text-sm font-semibold text-white bg-[#007F5F] cursor-pointer hover:bg-[#046C54]"
              >
                + Create Year
              </div>
              <ul>
                {years.map((year, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setSelectedYear(year);
                      setYearDropdownOpen(false);
                    }}
                    className={`px-3 py-2 text-sm cursor-pointer ${selectedYear === year
                        ? "bg-green-100 text-gray-900 font-medium"
                        : "hover:bg-green-50 text-gray-700"
                      }`}
                  >
                    {year}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Notification */}
        <button className="relative text-gray-600 hover:text-[#105F62] text-xl">
          <FaBell />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div ref={profileRef} className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="w-8 h-8 overflow-hidden border border-gray-300 rounded-full"
          >
            <Image
              src={profile}
              alt="Profile"
              width={32}
              height={32}
              className="w-8 h-8 object-cover"
            />
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded border border-gray-200 z-50">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Settings</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Log Out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
