"use client";

import Image from "next/image";
import CompanyLogo from "@/img/CompanyLogo.png";
import { FiFileText } from "react-icons/fi";
import Signature from "@/img/Signature.png";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import DeleteImg from "@/img/DeleteImg.png";



const ProfileCompany = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("company");

  return (
    <div className="w-full bg-[#E0F4EC] flex justify-evenly items-start py-2 px-2">
      <div className="bg-white w-full max-w-8xl shadow-md rounded-none border border-border">
        {/* Header */}
        <div className="flex justify-between items-center border-b-1 border-border px-6 py-2 mt-0 mb-0">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Create Company</h2>
            <p className="text-sm text-[#007F5F] font-light">
              Accounting Books / Select Company /{" "}
              <span className="font-semibold">Create Company</span>
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 bg-[#105F62] text-white text-sm transition">
              BACK
            </button>
            <button className="px-5 py-2 bg-[#105F62] text-white text-sm transition">
              EDIT COMPANY
            </button>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex flex-col sm:flex-row gap-2 p-0 m-0">
          {/* Left Sidebar */}
          <div className="sm:w-1/3 border border-border px-2 py-2 ml-0 mb-0 rounded-none flex flex-col items-center justify-center relative">
            <Image
              src={CompanyLogo}
              alt="Company Logo"
              className="object-cover rounded-none outline: 1px solid #1DAAAF shadow-2xl"
              style={{
                width: "100.71px",
                height: "103.02px",
                top: "217.38px",
                left: "139.14px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            />
            <h2 className="text-lg font-semibold text-[#383838] mt-8">ABCD Info. Ltd.</h2>
            <p className="text-sm text-[#1DAAAF] px-2 py-1 rounded">Surat, Gujarat</p>

            <div className="mt-4 mb-5 border-t border-border w-full flex justify-center items-center text-9xl">
              <Image
                src={Signature}
                alt="Signature"
                className="object-contain"
                style={{ width: "100px", height: "80px" }}
              />
            </div>
            <div className="flex flex-col items-center text-center border-t border-border pt-2">
              <h2 className="text-lg font-bold text-red-600 mb-2">
                Deactivate Your Company
              </h2>
              <p className="text-sm text-gray-700 max-w-md">
                If you delete your company, all data will be removed from our records.
                If you have any concerns, feel free to contact us.
              </p>

              <div className="flex mt-2 gap-4">
                <button
                  className="bg-red-600 text-white text-sm px-5 py-2 rounded-none"
                  onClick={() => setShowPopup(true)}
                >
                  DELETE COMPANY
                </button>

                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/25 z-50">
                    <div
                      className="rounded-none shadow-lg flex flex-col items-center text-center overflow-hidden"
                      style={{ width: "350px", height: "340px" }}
                    >
                      {/* Top Green Section */}
                      <div className="bg-border w-full flex justify-center items-center py-6">
                        <Image
                          src={DeleteImg}
                          alt="Delete Company"
                          width={150}
                          height={150}
                          className="mx-auto"
                        />
                      </div>

                      {/* Bottom White Section */}
                      <div className="bg-white w-full flex flex-col items-center text-center p-4 flex-grow">
                        <h2 className="text-lg font-semibold text-[#072B2C] mb-2">
                          Delete Company
                        </h2>
                        <p className="text-xs text-gray-700 mb-6 px-4">
                          This action will delete the Company and all its related
                          information. This cannot be reversed. Do you wish to continue?
                        </p>
                        <div className="flex justify-center gap-4">
                          <button
                            onClick={() => alert("Company Deleted!")}
                            className="bg-[#0C6663] text-white px-10 py-2 text-sm"
                          >
                            YES
                          </button>
                          <button
                            onClick={() => setShowPopup(false)}
                            className="bg-[#0C6663] text-white px-10 py-2 text-sm"
                          >
                            NO
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


                <button className="border border-[#0C6663] bg-[#0C6663] text-white text-sm px-5 py-2 rounded-none">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="sm:w-2/2 flex flex-col">
            {/* Tabs */}
            <div className="flex w-full border-b border-border text-sm font-medium text-gray-700">
              <button
                onClick={() => setActiveTab("company")}
                className={`px-4 py-2 ${activeTab === "company"
                  ? "text-[#0C6663] border-b-2 border-[#0C6663]"
                  : "text-gray-600"
                  }`}
              >
                Company Information
              </button>

              <button
                onClick={() => setActiveTab("contact")}
                className={`px-4 py-2 ${activeTab === "contact"
                  ? "text-[#0C6663] border-b-2 border-[#0C6663]"
                  : "text-gray-600"
                  }`}
              >
                Contact Information
              </button>

              <button
                onClick={() => setActiveTab("tax")}
                className={`px-4 py-2 ${activeTab === "tax"
                  ? "text-[#0C6663] border-b-2 border-[#0C6663]"
                  : "text-gray-600"
                  }`}
              >
                TAX Information
              </button>
            </div>

            {/* Content Area */}
            <div className="mt-4">
              {/* Company Information Tab */}
              {activeTab === "company" && (
                <div>
                  <div className="grid grid-cols-2 gap-5 text-sm text-gray-700 mt-4">
                    <div>
                      <p className="font-semibold text-[#adabab]">Company Name</p>
                      <p>ABCD Info. Ltd.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#adabab]">Currency</p>
                      <p>Indian Rupee (INR) ₹</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#adabab]">Financial Year</p>
                      <p>2022 - 2023</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#adabab]">Business Type</p>
                      <p>Transport</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#adabab]">Address</p>
                      <p>7/A, Mota Road, Udhna</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#adabab]">State</p>
                      <p>Gujarat</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#adabab]">PIN Code</p>
                      <p>394210</p>
                    </div>
                  </div>

                  {/* Other Certificates*/}
                  <div className="mt-8">
                    <p className="font-semibold text-[#43916F] mb-5">Other Certificates</p>
                    <div className="grid grid-cols-2 gap-12 text-sm">
                      <p>
                        <span className="font-medium text-[#adabab]">CRN Number:</span>{" "}
                        9971056767
                      </p>
                      <p>
                        <span className="font-medium text-[#adabab]">CIN Number:</span>{" "}
                        L778074875PO8763
                      </p>
                      <p>
                        <span className="font-medium text-[#adabab]">IEC Number:</span>{" "}
                        0XXXXXXXXXX SEJAL GLASS LTD
                      </p>
                      <p>
                        <span className="font-medium text-[#adabab]">MSME Number:</span>{" "}
                        UDYAM-XY-07-1234567
                      </p>
                      <p>
                        <span className="font-medium text-[#adabab]">LUT Bond Number:</span>{" "}
                        H1973PLC019786
                      </p>
                    </div>
                  </div>

                  {/* Other Attachments (Only in Company Tab) */}
                  <div className="mt-6">
                    <p className="font-semibold text-[#43916F] mb-2">Other Attachments</p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Gst Certificate.pdf",
                        "PAN Card.pdf",
                        "Address Proof.pdf",
                        "Company Registration.pdf",
                      ].map((file, i) => (
                        <button
                          key={i}
                          className="flex items-center gap-2 border border-[#0C6663] text-[#0C6663] px-3 py-1.5 text-sm hover:bg-[#E0F4EC] rounded-none"
                        >
                          <FiFileText className="w-4 h-4" />
                          {file}
                          <span className="border-l border-gray-300 h-6 mx-2"></span>
                          <FiMenu className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Tab */}
              {activeTab === "contact" && (
                <div className="text-sm text-gray-700 mt-4">
                  <div className="grid grid-cols-2 gap-2 justify-items-center">
                    {/* Left Div */}
                    <div className="w-64 h-64 bg-white border border-[#C8E5E3] p-8 flex flex-col justify-center items-center shadow-sm">
                      <h2 className="text-lg font-semibold text-black mb-1">
                        Rahul M.
                      </h2>
                      <p className="font-semibold text-[#adabab]">Designation</p>
                      <p className="text-sm text-gray-600 text-center mt-2">
                        Director of Company
                        <br />
                        <span className="font-medium mb-2 flex items-center justify-center gap-1">
                          <BiSolidPhoneCall className="text-[#1DAAAF] text-base" />
                          +91 8758277873
                        </span>

                        <span className="font-medium mb-2 flex items-center justify-center gap-1">
                          <MdAlternateEmail className="text-[#1DAAAF] text-base" />
                          Rahul@xyz.com
                        </span>
                      </p>
                    </div>

                    {/* Right Div */}
                    <div className="w-64 h-64 bg-white border border-[#C8E5E3] p-8 flex flex-col justify-center items-center shadow-sm">
                      <h2 className="text-lg font-semibold text-black mb-1">
                        Anita V. Jain
                      </h2>
                      <p className="font-semibold text-[#adabab]">Designation</p>
                      <p className="text-sm text-gray-600 text-center mt-2">
                        Manager of Company
                        <br />
                        <span className="font-medium mb-2 flex items-center justify-center gap-1">
                          <BiSolidPhoneCall className="text-[#1DAAAF] text-base" />
                          +91 8758277873
                        </span>

                        <span className="font-medium mb-2 flex items-center justify-center gap-1">
                          <MdAlternateEmail className="text-[#1DAAAF] text-base" />
                          Anita@xyz.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

              )}


              {/* TAX Tab */}
              {activeTab === "tax" && (
                <div className="mt-8">
                  <p className="font-semibold text-[#43916F] mb-5">
                    Goods And Service Tax (GST)
                  </p>
                  <div className="grid grid-cols-2 gap-12 text-sm">
                    <p>
                      <span className="font-medium text-[#adabab]">GST No</span> ATKL95545ZLKJ
                    </p>
                    <p>
                      <span className="font-medium text-[#adabab]">Income Tax PAN No.</span>{" "}
                      ATKPT2652K
                    </p>
                    <p>
                      <span className="font-medium text-[#adabab]">
                        GST Registration Date*
                      </span>{" "}
                      20-07-2020
                    </p>
                    <p>
                      <span className="font-medium text-[#adabab]">Registration Type</span>{" "}
                      Regular
                    </p>
                    <p>
                      <span className="font-medium text-[#adabab]">
                        Periodicity Of GSTR1
                      </span>{" "}
                      Monthly
                    </p>
                    <p>
                      <span className="font-medium text-[#adabab]">Tax Structure</span> Bill Wise
                    </p>

                    <p className="font-semibold text-[#43916F] mb-5">
                      Tax Deducted At Source (TDS)
                    </p>
                    <div className="grid grid-cols-2 gap-12 text-sm">
                      <p>
                        <span className="font-medium text-[#adabab]">TAN Number</span> STKPT2652K
                      </p>
                      <p>
                        <span className="font-medium text-[#adabab]">Tds Percentage</span> 12%
                      </p>
                    </div>
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

export default ProfileCompany;
