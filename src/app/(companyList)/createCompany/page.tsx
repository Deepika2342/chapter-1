"use client";
import { useState } from "react";

const CreateCompany = () => {
  const [gstEnabled, setGstEnabled] = useState(true);
  const [tdsEnabled, setTdsEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#E0F4EC] flex justify-center items-start py-2 px-1">
      <div className="bg-white w-full max-w-5xl shadow-md rounded-sm border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center border-b-4 border-[#007F5F] px-5 py-3">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Create Company</h2>
            <p className="text-sm text-[#007F5F] font-light">
              Accounting Books / Select Company /{" "}
              <span className="font-semibold">Create Company</span>
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 bg-[#105F62] text-white text-sm transition">
              CANCEL
            </button>
            <button className="px-5 py-2 bg-[#105F62] text-white text-sm transition">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-6 text-[#003C2F]">
          {/* Basic Info */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Company Name*
                </label>
                <input
                  type="text"
                  className="w-full border border-border px-3 py-2"
                  placeholder="ABC Ltd"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Print Name*
                </label>
                <input
                  type="text"
                  className="w-full border border-border px-3 py-2"
                  placeholder="ABC"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Company Type *
                </label>
                <select className="w-full border border-border px-3 py-2">
                  <option>Select</option>
                  <option>Private Limited</option>
                  <option>LLP</option>
                  <option>Proprietorship</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Business Type*
                </label>
                <select className="w-full border border-border px-3 py-2">
                  <option>Select</option>
                  <option>Manufacturing</option>
                  <option>Trading</option>
                  <option>Services</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Company Financial Year
                </label>
                <div className="flex gap-4">
                  <input
                    type="date"
                    placeholder="From"
                    className="border border-border px-3 py-2 w-full rounded-none text-sm
                        [&::-webkit-calendar-picker-indicator]:bg-[#0C6663]
                        [&::-webkit-calendar-picker-indicator]:p-1
                        [&::-webkit-calendar-picker-indicator]:rounded-none
                        [&::-webkit-calendar-picker-indicator]:cursor-pointer
                        [&::-webkit-calendar-picker-indicator]:filter-invert"
                    />
                  
                  <input
                    type="date"
                    placeholder="To"
                    className="border border-border px-3 py-2 w-full rounded-none text-sm
                        [&::-webkit-calendar-picker-indicator]:bg-[#0C6663]
                        [&::-webkit-calendar-picker-indicator]:p-1
                        [&::-webkit-calendar-picker-indicator]:rounded-none
                        [&::-webkit-calendar-picker-indicator]:cursor-pointer
                        [&::-webkit-calendar-picker-indicator]:filter-invert"
                    />
                </div>
              </div>
            </div>
          </div>

          {/*Contact Details */}
          <div>
            <h3 className="font-semibold text-gray-700 pb-3 mb-1">
              Company Contact Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Legal Person *
                </label>
                <input
                  type="text"
                  className="w-full border border-border px-3 py-2"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Destination
                </label>
                <input
                  type="text"
                  className="w-full border border-border px-3 py-2"
                  placeholder="Director"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Company Email *
                </label>
                <input
                  type="email"
                  className="w-full border border-border px-3 py-2"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  className="w-full border border-border px-3 py-2"
                  placeholder="1234567890"
                />
              </div>
            </div>
          </div>

          {/* Section 3 - Address */}
          <div>
            <h3 className="font-semibold text-gray-700 pb-3 mb-1">
              Company Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Official Address *
                </label>
                <input
                  type="text"
                  className="w-full border border-border px-3 py-2"
                  placeholder="Street, City"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  State *
                </label>
                <select className="w-full border border-border px-3 py-2">
                  <option>Select</option>
                  <option>Maharashtra</option>
                  <option>Gujarat</option>
                  <option>Delhi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  City *
                </label>
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
                <label className="block text-sm font-semibold mb-1">
                  Country *
                </label>
                <input
                  type="text"
                  className="w-full border border-border px-3 py-2"
                  value="India"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  PIN Code *
                </label>
                <input
                  type="text"
                  className="w-full border border-border px-3 py-2"
                  placeholder="395001"
                />
              </div>
            </div>
          </div>

          {/* GST and TDS */}
          <div className="space-y-6">
            {/* GST */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">
                  Enable Goods and Service Tax (GST)
                </span>
                <button
                  onClick={() => setGstEnabled(!gstEnabled)}
                  className={`w-11 h-6 flex items-center rounded-full p-[2px] transition-colors duration-300 ${
                    gstEnabled ? "bg-[#1F8F73]" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      gstEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {gstEnabled && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      GST Number*
                    </label>
                    <input
                      type="text"
                      placeholder="24ASDF2341A5Z1L"
                      className="border border-border px-3 py-2 w-full rounded-none focus:outline-none focus:ring-1 focus:ring-[#1F8F73] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      GST Registration Date*
                    </label>
                    <input
                      type="date"
                      className="border border-border px-3 py-2 w-full rounded-none text-sm
                        [&::-webkit-calendar-picker-indicator]:bg-[#0C6663]
                        [&::-webkit-calendar-picker-indicator]:p-1
                        [&::-webkit-calendar-picker-indicator]:rounded-sm
                        [&::-webkit-calendar-picker-indicator]:cursor-pointer
                        [&::-webkit-calendar-picker-indicator]:filter-invert"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Registration Type*
                    </label>
                    <div className="relative">
                      <select className="appearance-none border border-[#C8E5E3] px-3 py-2 w-full rounded-none text-sm focus:outline-none focus:ring-1 focus:ring-[#1F8F73] bg-white">
                        
                        <option>Regular</option>
                        <option>Composition</option>
                        <option>Regular-SEZ</option>
                        <option>Unregiter</option>
                        <option>Exports</option>
                        <option>Ecommerce</option>

                      </select>
                      <div className="absolute right-0 top-0 h-full w-8 flex items-center justify-center bg-[#0C6663] border-l border-[#C8E5E3] pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TDS */}
            <div className="border-t border-[#C8E5E3] pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">
                  Enable Tax Deducted at Source (TDS)
                </span>
                <button
                  onClick={() => setTdsEnabled(!tdsEnabled)}
                  className={`w-11 h-6 flex items-center rounded-full p-[2px] transition-colors duration-300 ${
                    tdsEnabled ? "bg-[#1F8F73]" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      tdsEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {tdsEnabled && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      TAN Number*
                    </label>
                    <input
                      type="text"
                      placeholder="24ASDF2341A5Z1L"
                      className="border border-[#C8E5E3] px-3 py-2 w-full rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1F8F73] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Percentage*
                    </label>
                    <input
                      type="text"
                      placeholder="5%"
                      className="border border-[#C8E5E3] px-3 py-2 w-full rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1F8F73] text-sm"
                    />
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
