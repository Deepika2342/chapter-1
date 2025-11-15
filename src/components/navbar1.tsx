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

  const [selectedCompany, setSelectedCompany] = useState(
    "Klamp Ecommerce Pvt. Ltd."
  );
  const [selectedYear, setSelectedYear] = useState("2022-23");

  const [searchCompany, setSearchCompany] = useState("");

  const companyRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  const companies = [
    "Klamp Ecommerce Pvt. Ltd.",
    "Housing Development Finance Corporation International Ltd",
    "ICICI Prudential Life Insurance Company Ltd",
    "Sun Pharmaceuticals Industries Ltd",
  ];

  const years = ["2022-23", "2023-24", "2024-25"];

  // Filter companies based on search
  const filteredCompanies = companies.filter((company) =>
    company.toLowerCase().includes(searchCompany.toLowerCase())
  );

  // FIXED TYPE ERROR
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        companyRef.current &&
        !companyRef.current.contains(event.target as Node)
      ) {
        setCompanyDropdownOpen(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }

      setYearDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white border-b border-border px-3 flex items-center justify-between h-[60px]">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        {/* Logo visible on mobile */}
        <Image
          src={logo}
          alt="Chapter Logo"
          width={120}
          height={40}
          className="object-contain"
        />

        {/* Company Dropdown */}
        <div className="relative" ref={companyRef}>
          <button
            onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
            className="flex items-center gap-1 text-sm font-semibold text-gray-800 max-w-[150px] sm:max-w-none truncate"
          >
            {selectedCompany}
            <IoMdArrowDropdown className="text-lg" />
          </button>

          {companyDropdownOpen && (
            <div className="absolute top-10 left-0 w-72 sm:w-96 bg-white border border-gray-200 shadow-md rounded-sm z-50">

              {/* SEARCH BAR */}
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-200">
                <FaSearch className="text-gray-600" />
                <input
                  type="text"
                  placeholder="Search company..."
                  className="w-full text-sm outline-none"
                  value={searchCompany}
                  onChange={(e) => setSearchCompany(e.target.value)}
                />
              </div>

              {/* COMPANY LIST */}
              <ul className="max-h-60 overflow-y-auto">
                {filteredCompanies.map((company, i) => (
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

                {filteredCompanies.length === 0 && (
                  <li className="px-4 py-3 text-gray-500 text-sm text-center">
                    No company found
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* YEAR DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
            className="flex items-center gap-1 text-gray-700 font-medium text-sm"
          >
            {selectedYear}
            <IoMdArrowDropdown className="text-lg" />
          </button>

          {yearDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-sm z-50">
              <div
                onClick={() => alert("Create Year Clicked!")}
                className="px-3 py-2 text-sm font-semibold text-white bg-[#007F5F] cursor-pointer"
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

        {/* NOTIFICATION */}
        <button className="relative text-gray-600 text-xl">
          <FaBell />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* PROFILE DROPDOWN */}
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
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg border border-gray-200 rounded-sm z-50">
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
    </nav>
  );
};

export default Navbar1;
