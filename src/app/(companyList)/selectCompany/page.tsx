"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";

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
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#E0F4EC]">
      {/* Main Container */}
      <div className="flex-1 bg-white">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-2 py-3 border-b border-gray-200">
          <div className="mb-1 sm:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Select Company</h2>
            <p className="text-xs sm:text-sm text-[#007F5F] font-extralight">
              Accounting Books / <span className="font-extralight">Select Company</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            {/* CREATE COMPANY button */}
            <Button
              onClick={() => setShowModal(true)}
              className="bg-[#004D40] text-white px-2 py-1 text-sm rounded-none hover:bg-[#00695C] w-full sm:w-auto transition"
            >
              CREATE COMPANY
            </Button>

            {/* Menu Icon */}
            <div className="relative sm:ml-0 ml-auto">
              <LuMenu
                className="text-gray-600 text-2xl hover:text-green-700 cursor-pointer"
                onClick={() => setMenuOpen(menuOpen === "header" ? null : "header")}
              />
            </div>
          </div>
        </div>

        {/* ✅ Modal (Create Company Popup) */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded shadow-lg w-[90%] sm:w-[500px]">
              {/* Modal Header */}
              <div className="bg-[#105F62] text-white flex justify-between items-center px-4 py-2">
                <h2 className="text-md font-bold">Create Company</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white text-lg font-bold w-[24px] h-[24px] flex items-center justify-center rounded-full hover:bg-[#00695C] transition"
                >
                  <IoCloseCircleOutline />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 text-center space-y-2">
                <p className="text-gray-700 text-sm">
                  Please select your preferred option to start your company, indicating whether it will be GST-registered or non-GST-registered.
                </p>

                {/* Buttons + Popup Section */}
                <div className="flex flex-col items-center justify-center mt-[30px]">
                {/* Buttons Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
                    {/* WITH GST Button */}
                    <button
                      onClick={() => setShowPopup(!showPopup)}
                      className="border border-[#007F5F] text-[#007F5F] w-[200px] h-[40px] text-sm font-medium rounded-[2px] hover:bg-[#43916F] hover:text-white transition"
                    >
                      WITH GST
                    </button>

                    {/* NON-GST Button */}
                    <button
                      className="border border-[#007F5F] text-[#007F5F] w-[200px] h-[40px] text-sm font-medium rounded-[2px] hover:bg-[#43916F] hover:text-white transition"
                    >
                      NON - GST
                    </button>

                    {/* Popup (Below WITH GST Button) */}
                    {showPopup && (
                      <div className="absolute top-[110%] left-20px w-[90%] sm:w-[500px] bg-white border mt-5 p-5 z-10 transition-all duration-300">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3 text-left px-12">GSTIN</h2>

                        <input
                          type="text"
                          className=" border border-border px-25 py-2 text-sm "
                        />

                        <p className="text-[12px] text-gray-600 mb-4 text-left px-12">
                          Enter your 15 digit GSTIN Number
                        </p>

                        <div className="flex justify-center gap-3">
                          <button
                            onClick={() => setShowPopup(false)}
                            className="px-6 py-2 text-sm bg-[#105F62] text-white rounded hover:bg-[#43916F] transition"
                          >
                            Cancel
                          </button>

                          <button
                            onClick={() => {
                              alert("GSTIN Submitted!");
                              setShowPopup(false);
                            }}
                            className="px-6 py-2 text-sm bg-[#105F62] text-white rounded hover:bg-[#43916F] transition"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ✅ Table Section */}
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
                  <td className="px-4 py-2 border-r border-emerald-100 text-[#007F5F] font-semibold cursor-pointer">
                    {company.name}
                  </td>
                  <td className="px-4 py-2 border-r border-emerald-100">{company.created}</td>
                  <td className="px-4 py-2 border-r border-emerald-100">{company.contact}</td>
                  <td className="px-4 py-2 border-r border-emerald-100">{company.address}</td>
                  <td
                    className="px-4 py-2 border-r border-emerald-100 text-[#007F5F] font-semibold cursor-pointer"
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

        {/* ✅ Footer Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-3 mt-50 border-t border-border text-sm text-black font-bold">
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
