"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";

const SelectCompany = () => {
  const router = useRouter();

  // STATES
  const [menuOpen, setMenuOpen] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [gst, setGst] = useState("");

  // API DATA STATES
  const [companyList, setCompanyList] = useState([] as any[]);

  // FETCH API
  const getCompanyList = async () => {
    try {
      const response = await axios.get(
        "https://chapter.1.koffeekodes.in/api/company/insert"
      );
      setCompanyList(response.data?.data || []);
      console.log("COMPANY LIST:", response.data.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load companies!");
    }
  };

  useEffect(() => {
    getCompanyList();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#E0F4EC]">

      {/* MAIN CONTAINER */}
      <div className="flex-1 bg-white">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-3 border-b">
          <div className="mb-1 mt-5 sm:mb-0">
            <span className="text-gray-600 text-sm font-semibold">
              Select Company
            </span>
            <p className="text-xs text-[#007F5F]">
              Accounting Books / <span>Select Company</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <Button
              onClick={() => setShowModal(true)}
              className="bg-[#004D40] text-white px-2 py-1 text-sm rounded-none hover:bg-[#00695C]"
            >
              CREATE COMPANY
            </Button>

            <LuMenu
              className="text-gray-600 text-2xl hover:text-green-700 cursor-pointer"
              onClick={() => setMenuOpen(menuOpen === "header" ? null : "header")}
            />
          </div>
        </div>

        {/* CREATE COMPANY MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded shadow-lg w-[90%] sm:w-[500px]">

              <div className="bg-[#105F62] text-white flex justify-between items-center px-4 py-2">
                <h2 className="text-md font-bold">Create Company</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="hover:bg-[#00695C]"
                >
                  <IoCloseCircleOutline size={24} />
                </button>
              </div>

              <div className="p-6 text-center space-y-3">

                <p className="text-gray-700 text-sm">
                  Select whether your company is GST or Non-GST registered.
                </p>

                {/* GST + NON GST */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 relative">

                  <button
                    onClick={() => setShowPopup(!showPopup)}
                    className="border border-[#007F5F] text-[white] w-[200px] h-[20px] text-sm  hover:bg-[#00695C] "
                  >
                    WITH GST
                  </button>

                  <button
                    onClick={() => router.push("/createCompany")}
                    className="border border-[#007F5F] text-[white] w-[200px] h-[40px] text-sm  hover:bg-[#00695C]"
                  >
                    NON - GST
                  </button>

                  {/* GST POPUP */}
                  {showPopup && (
                    <div className="absolute top-[105%] left-[2px] w-full sm:w-[500px] bg-white border border-border p-4 shadow-lg z-50">

                      <h2 className="text-lg font-semibold px-5 ">GSTIN</h2>

                      <input
                        type="text"
                        value={gst}
                        onChange={(e) => setGst(e.target.value)}
                        className="border px-2 py-1 text-sm w-full mt-0"
                        placeholder="Enter 15-digit GSTIN"
                      />

                      <p className="text-xs text-gray-600 px-5 mt-1">
                        Enter your 15 digit GSTIN Number
                      </p>

                      <div className="flex justify-center gap-3 mt-4">
                        <button
                          onClick={() => setShowPopup(false)}
                          className="px-6 py-2 text-sm bg-[#105F62] text-white"
                        >
                          Cancel
                        </button>

                        <button
                          onClick={() => {
                            if (gst === "24AAJCK9805D1ZK") {
                              alert("GST Verified Successfully!");
                              setShowPopup(false);
                              router.push("/createCompany");
                            } else {
                              alert("Invalid GST Number!");
                            }
                          }}
                          className="px-6 py-2 text-sm bg-[#105F62] text-white  hover:bg-[#00695C]"
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
        )}

        {/* TABLE */}
        <div className="py-4">
          <table className="min-w-full text-sm border">
            <thead className="bg-[white] text-gray-900 text-xs font-semibold">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Company Name</th>
                <th className="px-4 py-2 border">GST</th>
                <th className="px-4 py-2 border">Created</th>
                <th className="px-4 py-2 border">Open</th>
              </tr>
            </thead>

            <tbody>
              {companyList.map((company: any, index) => (
                <tr
                  key={company.id}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-emerald-50`}
                >
                  <td className="px-4 py-2 border">{company.id}</td>
                  <td className="px-4 py-2 border">{company.companyName}</td>
                  <td className="px-4 py-2 border">{company.gstNumber || "—"}</td>
                  <td className="px-4 py-2 border">{company.createdAt?.slice(0, 10)}</td>

                  <td
                    className="px-4 py-2 border text-[#007F5F] cursor-pointer"
                    onClick={() => router.push("/dashboard")}
                  >
                    Open
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default SelectCompany;
