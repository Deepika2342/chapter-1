"use client";

import { useState } from "react";

const CreateCompany = () => {
  const [gstEnabled, setGstEnabled] = useState(false);
  const [tdsEnabled, setTdsEnabled] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [showCreateCompany, setShowCreateCompany] = useState(false);

  return (
    <div className="w-full bg-[#E0F4EC] flex justify-evenly items-start py-4 px-2">
      <div className="bg-white w-full max-w-8xl shadow-md rounded-none border border-gray-200 relative">

        {/* HEADER */}
        <div className="flex justify-between items-center border-b-1 border-border px-1 py-1">
          <div>
            <span className="hidden sm:inline text-gray-600 text-xs sm:text-sm md:text-base truncate font-semibold">Create Company</span>
            <p className="text-sm text-[#007F5F] font-light">
              Accounting Books / Select Company /{" "}
              <span className="font-semibold">Create Company</span>
            </p>
          </div>

          <button
            className="px-5 py-2 bg-[#105F62] text-white text-sm transition"
            onClick={() => setShowPopup(true)}
          >
            CANCEL
          </button>
          <button
            className="px-5 py-2 bg-[#105F62] text-white text-sm transition"
            onClick={() => setShowPopup(true)}
          >
            SUBMIT
          </button>
        </div>

        {/* GST POPUP */}
        {showPopup && (
          <div className="absolute top-[110%] left-[20px] w-[90%] sm:w-[500px] bg-white border mt-5 p-5 z-50 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 text-left px-12">
              GSTIN
            </h2>

            <input
              type="text"
              className="border border-border px-3 py-2 text-sm w-full"
              placeholder="Enter GSTIN"
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

              {/* SUBMIT = CLOSE GST POPUP → OPEN CREATE COMPANY POPUP */}
              <button
                onClick={() => {
                  setShowPopup(false);
                  setShowCreateCompany(true);
                }}
                className="px-6 py-2 text-sm bg-[#105F62] text-white rounded hover:bg-[#43916F] transition"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {/* CREATE COMPANY POPUP */}
        {showCreateCompany && (
          <div className="absolute top-[110%] left-[20px] w-[90%] sm:w-[500px] bg-white border mt-5 p-5 z-50 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 text-left px-12">
              Create Company
            </h2>

            <input
              type="text"
              className="border border-border px-3 py-2 text-sm w-full mb-4"
              placeholder="Enter Company Name"
            />

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowCreateCompany(false)}
                className="px-6 py-2 text-sm bg-gray-300 text-black rounded hover:bg-gray-400 transition"
              >
                Close
              </button>

              <button
                onClick={() => {
                  alert("Company Created!");
                  setShowCreateCompany(false);
                }}
                className="px-6 py-2 text-sm bg-[#105F62] text-white rounded hover:bg-[#43916F] transition"
              >
                Save
              </button>
            </div>
          </div>
        )}

        {/* MAIN FORM BODY */}
        <div className="p-6 space-y-6 text-[#003C2F]">

          {/* BASIC INFO */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Company Name*</label>
                <input
                  type="text"
                  className="w-full border border-border px-3 py-2"
                  placeholder="ABC Ltd."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Print Name*</label>
                <input
                  type="text"
                  className="w-full border border-border px-3 py-2"
                  placeholder="ABC Ltd."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Company Type*</label>
                <select className="w-full border border-border px-3 py-2">
                  <option>Select</option>
                  <option>Private Limited</option>
                  <option>LLP</option>
                  <option>Proprietorship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Business Type*</label>
                <select className="w-full border border-border px-3 py-2">
                  <option>Select</option>
                  <option>Manufacturing</option>
                  <option>Trading</option>
                  <option>Services</option>
                </select>
              </div>
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h3 className="font-semibold text-gray-700 pb-3 mb-1">Company Contact Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Legal Person*</label>
                <input type="text" className="w-full border border-border px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Destination</label>
                <input type="text" className="w-full border border-border px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Company Email*</label>
                <input type="email" className="w-full border border-border px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Contact Number*</label>
                <input type="tel" className="w-full border border-border px-3 py-2" />
              </div>
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="font-semibold text-gray-700 pb-3 mb-1">Company Address</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Official Address*</label>
                <input type="text" className="w-full border border-border px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">State*</label>
                <select className="w-full border border-border px-3 py-2">
                  <option>Select</option>
                  <option>Maharashtra</option>
                  <option>Gujarat</option>
                  <option>Delhi</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">City*</label>
                <select className="w-full border border-border px-3 py-2">
                  <option>Select</option>
                  <option>Mumbai</option>
                  <option>Surat</option>
                  <option>Delhi</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Country*</label>
                <input
                  type="text"
                  className="w-full border border-border px-3 py-2"
                  value="India"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">PIN Code*</label>
                <input className="w-full border border-border px-3 py-2" />
              </div>
            </div>
          </div>

          {/* GST & TDS SECTION */}
          <div className="space-y-6">

            {/* GST */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Enable GST</span>

                <button
                  onClick={() => setGstEnabled(!gstEnabled)}
                  className={`w-11 h-6 flex items-center rounded-full p-[2px] transition ${gstEnabled ? "bg-[#1F8F73]" : "bg-gray-300"}`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${gstEnabled ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>

              {gstEnabled && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">GST Number*</label>
                    <input className="border border-border px-3 py-2 w-full text-sm" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">GST Registration Date*</label>
                    <input type="date" className="border border-border px-3 py-2 w-full text-sm" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Registration Type*</label>
                    <select className="border border-border px-3 py-2 w-full text-sm bg-white">
                      <option>Regular</option>
                      <option>Composition</option>
                      <option>Exports</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* TDS */}
            <div className="border-t border-[#C8E5E3] pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Enable TDS</span>

                <button
                  onClick={() => setTdsEnabled(!tdsEnabled)}
                  className={`w-11 h-6 flex items-center rounded-full p-[2px] transition ${tdsEnabled ? "bg-[#1F8F73]" : "bg-gray-300"}`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${tdsEnabled ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>

              {tdsEnabled && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">TAN Number*</label>
                    <input className="border border-border px-3 py-2 w-full text-sm" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Percentage*</label>
                    <input className="border border-border px-3 py-2 w-full text-sm" />
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateCompany;
