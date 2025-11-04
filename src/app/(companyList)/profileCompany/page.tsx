"use client";

import Image from "next/image";
import CompanyLogo from "@/img/CompanyLogo.png";
import { FiFileText } from "react-icons/fi";
import Signature from "@/img/Signature.png";
import { FiMenu } from "react-icons/fi";



const ProfileCompany = () => {
  return (
    <div className="w-full bg-[#E0F4EC] flex justify-evenly items-start py-4 px-2">
      <div className="bg-white w-full max-w-8xl shadow-md rounded-none border border-border ">
        {/* Header */}
        <div className="flex justify-between items-center border-b-1 border-border px-8 py-2 mt-0 mb-0">
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

        <div className="flex flex-col sm:flex-row gap-2 p-0 m-0 ">
          {/* Left Sidebar */}
          <div className="sm:w-1/4 border border-border px-1 py-1 ml-1 rounded-none flex flex-col items-center justify-center relative">
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
            <p className="text-sm  text-[#1DAAAF] px-2 py-1 rounded">
              Surat, Gujarat
            </p>

            <div className="mt-2 border-t border-border w-full">
              <Image
                src={Signature}
                alt="Signature"
                className="w-30 object-cover "

              />
            </div>
            <div>
              <div className="w-20 flex flex-col gap-2 border-t border-border ">
                <button className="w-20 bg-red-600 text-white text-sm">
                  DELETE COMPANY
                </button>
                <button className="w-20 border border-[#0C6663] bg-[#0C6663] text-white text-sm">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="sm:w-2/3 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 text-sm text-gray-700">
              <button className="px-4 py-2 border-b-2 border-[#0C6663] text-[#0C6663] font-medium  hover:text-[#0C6663]">
                Company Information
              </button>
              <button className="px-4 py-2  hover:text-[#0C6663]">
                Contact Information
              </button>
              <button className="px-4 py-2 hover:text-[#0C6663]">
                TAX Information
              </button>
            </div>

            {/* Company Info */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
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

            {/* Certificates */}
            <div className="mt-6">
              <p className="font-semibold text-[#43916F] mb-2">Other Certificates</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <p><span className="font-medium text-[#adabab]">CRN Number:</span> 9971056767 </p>
                <p><span className="font-medium text-[#adabab]">CIN Number:</span> L778074875PO8763</p>
                <p><span className="font-medium text-[#adabab]">IEC Number</span> 0XXXXXXXXXX SEJAL GLASS LTD</p>
                <p><span className="font-medium text-[#adabab]">MSME Number:</span> UDYAM-XY-07-1234567</p>
                <p><span className="font-medium text-[#adabab]">LUT Bond Number:</span> H1973PLC019786</p>
              </div>
            </div>

            {/* Attachments */}
            <div className="mt-6">
              <p className="font-semibold text-[#43916F] mb-2">Other Attachments</p>
              <div className="flex flex-wrap gap-3">
                {["Gst Certificate.pdf", "Gst Certificate.pdf", "Gst Certificate.pdf", "Gst Certificate.pdf"].map((file, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-2 border border-[#0C6663] text-[#0C6663] px-3 py-1.5 text-sm hover:bg-[#E0F4EC] rounded-none"
                  >
                    <FiFileText className="w-4 h-4" />
                    {file}
                    <FiMenu />

                  </button>

                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCompany;
