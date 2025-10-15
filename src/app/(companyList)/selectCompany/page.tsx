"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#E0F4EC]">
      <div className="flex-1 mt-2 bg-white">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full px-4 sm:px-6 py-2 border border-border bg-white">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Select Company</h2>
            <p className="text-xs sm:text-sm text-[#007F5F] font-extralight">
              Accounting Books / <span className="font-extralight">Select Company</span>
            </p>
          </div>

          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <Button className="bg-[#004D40] text-white px-2 py-1 text-sm rounded-none hover:bg-[#00695C] transition w-full sm:w-auto">
              CREATE COMPANY
            </Button>

            <div className="relative">
              <LuMenu
                className="text-gray-600 text-2xl hover:text-green-700 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
          </div>
        </div>

        {/* Count no */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-2 border-b border-[#C4EDD7] space-y-2 sm:space-y-0 sm:space-x-5">
          <div className="flex items-center space-x-3 border-r border-[#C4EDD7] pr-3">
            <select className="text-sm bg-transparent outline-none text-gray-700 cursor-pointer  hover:text-black">
              <option value="no">Count No.</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>

            {/*Export*/}
            <select className="text-sm bg-transparent outline-none text-gray-700 cursor-pointer hover:text-black">
              <option value="export">Export</option>
              <option value="copy">Copy</option>
              <option value="csv">CSV</option>
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
            </select>
          </div>

          {/* search icone */}
          <div className="flex items-center space-x-3 h-10 border-r border-border">
            <div className="flex items-center sm:w-64">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400 py-1"
              />
              <IoSearch className="w-5 h-5 text-gray-500" />
            </div>

            {/* Short by*/}
            <div className="h-8 border-r border-border" />
            <select className="text-sm bg-transparent outline-none text-gray-700 cursor-pointer hover:text-black">
              <option value="">Short By</option>
              <option value="date">Created Date</option>
              <option value="year">Financial Year</option>
              <option value="alpha">A to Z</option>
            </select>
          </div>
        </div>

        {/* Table Section */}
        <div className="">
          <div className="overflow-x-auto bg-white border border-border">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-emerald-100 text-gray-900 uppercase text-xs font-semibold">
                <tr>
                  <th className="px-4 py-3 border-r border-border">ID</th>
                  <th className="px-4 py-3 border-r border-border">Company Name</th>
                  <th className="px-4 py-3 border-r border-border">Created</th>
                  <th className="px-4 py-3 border-r border-border">Contact</th>
                  <th className="px-4 py-3 border-r border-border">Address</th>
                  <th className="px-4 py-3 border-r border-border">Open</th>
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
                    <td className="px-4 py-2 border-r border-emerald-100 text-[#007F5F] font-semibold cursor-pointer hover:underline">
                      {company.name}
                    </td>
                    <td className="px-4 py-2 border-r border-emerald-100">{company.created}</td>
                    <td className="px-4 py-2 border-r border-emerald-100">{company.contact}</td>
                    <td className="px-4 py-2 border-r border-emerald-100">{company.address}</td>
                    <td
                      className="px-4 py-2 border-r border-emerald-100 text-[#007F5F] font-semibold cursor-pointer hover:underline"
                      onClick={() => router.push("/dashboard")}
                    >
                      Open Company
                    </td>
                    <td className="px-4 py-2 text-center">
                      <LuMenu className="text-gray-700 text-lg cursor-pointer hover:text-emerald-700" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-2 border-t border-gray-200 mt-2">
        {/* Results info */}
        <div className="text-sm text-gray-800 mb-2 sm:mb-0">
          Showing <span className="font-medium">1-8</span> of <span className="font-medium">20</span> results
        </div>

        {/* Pagination */}
        <div className="flex items-center space-x-1 text-sm">
          <button className="px-3 py-1 text-#072B2C font-bold" >
            PREVIOUS
          </button>

          {/* Page numbers */}
          {[1, 2, 3, '...', 10].map((page, idx) => (
            <button
              key={idx}
              className={`px-3 py-1 border rounded-full ${page === 1 ? 'bg-green-700 text-white font-bold' : 'text-gray-800'
                }`}
            >
              {page}
            </button>
          ))}

          <button className="px-3 py-1 text-black font-bold">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectCompany;
