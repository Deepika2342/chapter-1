"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const companies = [
  { id: 106, name: "ACE INTERNATIONAL", created: "01-09-2023", contact: "985 789 5487", address: "123 Main Street, Anytown" },
  { id: 107, name: "CGLAM LIFESTYLE PRIVATE LIMITED", created: "01-09-2023", contact: "985 789 5487", address: "123 Main Street, Anytown" },
  { id: 109, name: "KLAMP ASSOCIATES", created: "01-09-2023", contact: "985 789 5487", address: "123 Main Street, Anytown" },
  { id: 113, name: "KLAMP ECOMMERCE", created: "01-09-2023", contact: "985 789 5487", address: "123 Main Street, Anytown" },
  { id: 114, name: "SAGAR DHIMMAR", created: "01-09-2023", contact: "985 789 5487", address: "123 Main Street, Anytown" },
  { id: 115, name: "SANTU SARKAR", created: "01-09-2023", contact: "985 789 5487", address: "123 Main Street, Anytown" },
  { id: 116, name: "TRUPTI TEST", created: "01-09-2023", contact: "985 789 5487", address: "123 Main Street, Anytown" },
  { id: 117, name: "ABC INFO.CO", created: "01-09-2023", contact: "985 789 5487", address: "123 Main Street, Anytown" },
];

const SelectCompany = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<string | number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#E0F4EC]">
      {/* Main Container */}
      <div className="flex-1 bg-white">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 py-3 border-b border-gray-200">
          <div className="mb-2 sm:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Select Company</h2>
            <p className="text-xs sm:text-sm text-[#007F5F] font-extralight">
              Accounting Books / <span className="font-extralight">Select Company</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <Button className="bg-[#004D40] text-white px-2 py-1 text-sm rounded-none hover:bg-[#00695C] w-full sm:w-auto transition">
              CREATE COMPANY
            </Button>

            <div className="relative sm:ml-0 ml-auto">
              <LuMenu
                className="text-gray-600 text-2xl hover:text-green-700 cursor-pointer"
                onClick={() => setMenuOpen(menuOpen === "header" ? null : "header")}
              />
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-3 py-2 border-b border-gray-200 space-y-3 sm:space-y-0 sm:space-x-5 ">
          <div className="flex flex-wrap items-center gap-4 border-0 border-r-1 border-r-border p-2">

            {/* Count No. Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(menuOpen === "count" ? null : "count")}
                className="text-sm px-3 py-1 border-border-r bg-white hover:bg-gray-100 flex items-center gap-1 border-0 border-r-1 border-r-border p-2"
              >
                Count No.
                <span className="text-[10px]">▼</span>
              </button>
              {menuOpen === "count" && (
                <div className="absolute z-15 mt-1 bg-white border shadow-md w-28">
                  {["10", "20", "50", "100"].map((count) => (
                    <button
                      key={count}
                      onClick={() => {
                        console.log("Count:", count);
                        setMenuOpen(null);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      {count}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Export Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(menuOpen === "export" ? null : "export")}
                className="text-sm px-3 py-1  bg-white hover:bg-gray-100 text-gray-700 flex items-center gap-1"
              >
                Export
                <span className="text-[10px]">▼</span>
              </button>
              {menuOpen === "export" && (
                <div className="absolute z-10 mt-1 bg-white border w-28">
                  {["Copy", "CSV", "PDF", "Excel"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        console.log("Export:", opt);
                        setMenuOpen(null);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search and Sort Section */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto ">
            <div className="flex items-center w-full sm:w-64 px-2 py-1 border-0 border-r-1 border-r-border p-2" >
              <input
                type="text"
                placeholder="Search..."
                className=""
              />
              <IoSearch className="w-5 h-5 text-2xl" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(menuOpen === "sort" ? null : "sort")}
                className="text-sm px-3 py-1  bg-white hover:bg-gray-100 text-gray-700 flex items-center gap-1"
              >
                Sort By
                <span className="text-[10px]">▼</span>
              </button>
              {menuOpen === "sort" && (
                <div className="absolute z-15  bg-white  w-36">
                  {["Created Date", "Financial Year", "A to Z"].map((sort) => (
                    <button
                      key={sort}
                      onClick={() => {
                        console.log("Sort:", sort);
                        setMenuOpen(null);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      {sort}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="">
          <table className="min-w-full text-sm text-left text-gray-700 border border-border">
            <thead className="bg-emerald-100 text-gray-900 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 py-3 border-r border-gray-200">ID</th>
                <th className="px-4 py-3 border-r border-gray-200">Company Name</th>
                <th className="px-4 py-3 border-r border-gray-200">Created</th>
                <th className="px-4 py-3 border-r border-gray-200">Contact</th>
                <th className="px-4 py-3 border-r border-gray-200">Address</th>
                <th className="px-4 py-3 border-r border-gray-200">Open</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr
                  key={company.id}
                  className={`border-t border-emerald-100 hover:bg-emerald-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-4 py-2 border-r border-emerald-100">{company.id}</td>
                  <td className="px-4 py-2 border-r border-emerald-100 text-[#007F5F] font-semibold cursor-pointer ">
                    {company.name}
                  </td>
                  <td className="px-4 py-2 border-r border-emerald-100">{company.created}</td>
                  <td className="px-4 py-2 border-r border-emerald-100">{company.contact}</td>
                  <td className="px-4 py-2 border-r border-emerald-100">{company.address}</td>
                  <td
                    className="px-4 py-2 border-r border-emerald-100 text-[#007F5F] font-semibold cursor-pointer "
                    onClick={() => router.push("/dashboard")}
                  >
                    Open Company
                  </td>
                  <td className="px-4 py-2 text-center relative">
                    <LuMenu
                      className="text-gray-700 text-lg cursor-pointer hover:text-emerald-700"
                      onClick={() => setMenuOpen(menuOpen === company.id ? null : company.id)}
                    />
                    {menuOpen === company.id && (
                      <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded shadow-lg z-50 w-28 text-sm">
                        <button
                          onClick={() => alert(`View ${company.name}`)}
                          className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                        >
                          View
                        </button>
                        <button
                          onClick={() => alert(`Edit ${company.name}`)}
                          className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => alert(`Delete ${company.name}`)}
                          className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-3 border-t border-border mt-30 mb-2 text-sm text-black font-bold">
          <p>Showing 1–8 of 20 results</p>

          <div className="flex items-center space-x-3">
            <button className="text-black font-bold hover:text-green-700">PREVIOUS</button>
            <div className="flex space-x-1">
              <button className="px-2 py-1 border border-black rounded-full text-white bg-green-700">1</button>
              <button className="text-black px-1 py-1 border border-white rounded-full">2</button>
              <button className="text-black px-1 py-1 border border-white rounded-full">3</button>
              <span>......</span>
              <button className="text-black px-1 py-1 border border-white rounded-full">10</button>
            </div>
            <button className="text-black">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCompany;
