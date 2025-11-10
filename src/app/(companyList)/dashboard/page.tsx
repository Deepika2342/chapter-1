"use client";

import React, { useState } from "react";
import {
  FiHome,
  FiDatabase,
  FiShoppingCart,
  FiCreditCard,
  FiRepeat,
  FiPackage,
  FiFileText,
  FiBriefcase,
  FiPercent,
  FiCalendar,
} from "react-icons/fi";
import { FaQuestionCircle } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { PiEnvelopeSimpleFill } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Image from "next/image";
import Chart from "@/img/Chart.png";
import { IoMdArrowDropdown } from "react-icons/io";
import DonutChart from "@/img/DonutChart.png";
import AccPayable from "@/img/AccPayable.png";



const Dashboard = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FiHome /> },
    { name: "Master", icon: <FiDatabase /> },
    { name: "Sales", icon: <FiShoppingCart /> },
    { name: "Purchase", icon: <FiCreditCard /> },
    { name: "Transaction", icon: <FiRepeat /> },
    { name: "Stock", icon: <FiPackage /> },
    { name: "Journal Voucher", icon: <FiFileText /> },
    { name: "Job Work", icon: <FiBriefcase /> },
    { name: "Reporting", icon: <FiPercent /> },
    { name: "GST", icon: <FiPercent /> },
  ];

  const banks = [
    { name: "ICICI Bank", balance: "₹350" },
    { name: "Bank of Baroda", balance: "₹350" },
    { name: "IDFC Bank", balance: "₹350" },
  ];

  return (
    <div className="flex flex-col h-screen border-border bg-gray-50 text-gray-800">
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-60 bg-white border-r shadow-sm flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <ul className="mt-4 space-y-1">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`flex items-center gap-3 px-5 py-2 text-sm cursor-pointer border-l-4 transition ${active === item.name
                    ? "border-[#007F5F] bg-[#E6F4F1] text-[#007F5F]"
                    : "border-transparent hover:bg-gray-100"
                    }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main + Right Content */}
        <div className="flex-1 grid grid-cols-3 gap-3 p-4 overflow-y-auto">
          {/* Middle Section */}
           <div className="col-span-full space-y-4">
<div className="bg-white p-4 border border-border rounded-none col-span-1">
              <h2 className="text-xl font-semibold">Dashboard</h2>
              <p className="text-sm text-[#007F5F]">
                Select Company / Klamp Ecommerce /{" "}
                <span className="font-semibold">Dashboard</span>
              </p>
            </div>
           </div>
           
          <div className="col-span-2 space-y-4">
            {/* Header */}
           


            {/* Sales & Purchase */}
            <div className="bg-white p-4 border border-border rounded-none">
              <div className="flex justify-between items-center border-b border-border pb-2 mb-3">
                <h3 className="font-semibold">Sales & Purchase</h3>
                <button className="flex items-center text-sm border-border  bg-border px-2 py-1 rounded-none">
                  Today
                  <IoMdArrowDropdown className="mr-1 bg-border border-border" />
                </button>
              </div>
              <div className="flex justify-between items-center text-sm mb-4">
                <div className="flex gap-1">
                  <button className="px-3 py-1 border border-border bg-border rounded-none">
                    SALES
                  </button>
                  <button className="px-3 py-1 border border-border bg-border rounded-none">
                    PURCHASE
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">Total Sales</p>
                  <p className="text-lg font-bold text-green-700">₹25,00,000</p>
                </div>
              </div>
              <div className="h-48 bg-gray-50 border flex items-center justify-center text-gray-400">
                <Image
                  src={Chart}
                  alt="Chart"
                  width={630}
                  height={400}
                  className="mx-auto"
                />
              </div>

              <div className="flex justify-center mt-3 space-x-4 text-xs">
                <div className="flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-2">
                  <MdCheckBoxOutlineBlank className="text-gray-600 bg-white" />
                  <span>Items Sold</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2">
                  <MdCheckBoxOutlineBlank className="text-green-700 bg-white" />
                  <span>Total Profit</span>
                </div>
              </div>
            </div>

            {/* Profit & Loss */}
            <div className="bg-white p-4 border border-border rounded-none">
              <h3 className="font-semibold mb-2">PROFIT AND LOSS</h3>
              <button className="flex items-center text-sm border-border  bg-border px-2 py-1 rounded-none">
                Today
                <IoMdArrowDropdown className="mr-1 bg-border border-border" />
              </button>
              <div className="grid grid-cols-3 text-sm">
                <div className="border border-border p-3">
                  <p className="text-gray-500">Total Revenue</p>
                  <h4 className="text-green-700 text-lg font-bold mb-2">
                    ₹1000
                  </h4>
                  <div className="border-b-2 border-border w-full mb-2"></div>
                  <p>Sales Income ₹600</p>
                  <p>Service Income ₹200</p>
                  <p>Other Income ₹200</p>

                  <div className="ml-4">
                    <Image src={DonutChart} alt="Revenue" className="w-16 h-16 object-contain" />
                  </div>
                </div>


                <div className="border border-border p-3">
                  <p className="text-gray-500">Total Expense</p>
                  <h4 className="text-red-600 text-lg font-bold mb-2">₹400</h4>
                  <div className="border-b-2 border-border w-full mb-2"></div>
                  <p>Purchase ₹150</p>
                  <p>Trading ₹150</p>
                  <p>Other ₹100</p>
                  <div className="ml-4">
                    <Image src={DonutChart} alt="Revenue" className="w-16 h-16 object-contain" />
                  </div>
                </div>


                <div className="border border-border p-3">
                  <p className="text-gray-500">Total Income</p>
                  <h4 className="text-green-700 text-lg font-bold mb-2">₹600</h4>
                  <div className="border-b-2 border-border w-full mb-2"></div>
                  <p>Open Balance ₹150</p>
                  <p>Created Invoice ₹150</p>
                  <p>Cash Income ₹200</p>
                </div>
              </div>
            </div>

            {/* Cash Balances */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-border p-3">
                <p className="text-sm text-gray-500">Cash Received Balance</p>
                <h4 className="text-green-700 font-bold text-lg">₹1000</h4>
              </div>
              <div className="bg-white border border-border p-3">
                <p className="text-sm text-gray-500">Cash Payment Balance</p>
                <h4 className="text-red-600 font-bold text-lg">₹800</h4>
              </div>
              <div className="bg-white border border-border p-3">
                <p className="text-sm text-gray-500">Closing Cash Balance</p>
                <h4 className="text-gray-800 font-bold text-lg">₹200</h4>
              </div>
            </div>

            {/* Accounts Section */}
            <div className="grid grid-cols-2 gap-4">
              {/* Account Receivable Card */}
              <div className="bg-white border border-border p-3 shadow-sm flex items-center gap-4">
                {/* Left Image */}
                <div>
                  <Image
                    src={AccPayable}
                    alt="Revenue"
                    className="w-24 h-24 object-contain"
                  />
                </div>

                {/* Right Text Content */}
                <div className="flex flex-col w-full">
                  {/* Header with Title and Button */}
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-semibold">Account Recveable</h4>
                    <button className="flex items-center text-sm border border-border bg-border px-2 py-1 rounded-none">
                      Today
                      <IoMdArrowDropdown className="ml-1" />
                    </button>
                  </div>

                  {/* Horizontal line */}
                  <div className="border-b border-gray-300 mb-3"></div>

                  {/* Content */}
                  <p className="text-gray-500 text-xs">Total Payable</p>
                  <h3 className="text-red-600 font-bold text-lg">₹15,00,000</h3>
                  <p className="text-gray-500 text-xs mt-1">Overdue Payable</p>
                  <h3 className="text-orange-500 font-bold text-lg">₹11,00,000</h3>
                </div>

              </div>

              {/* Account Payable Card */}
              <div className="bg-white border border-border p-3 shadow-sm flex items-center gap-4">
                <div>
                  <Image
                    src={AccPayable}
                    alt="Revenue"
                    className="w-24 h-24 object-contain"
                  />
                </div>

                {/* Right Text Content */}
                <div className="flex flex-col w-full">
                  {/* Header with Title and Button */}
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-semibold mb-2">Account Payable</h4>
                    <button className="flex items-center text-sm border-border  bg-border px-2 py-1 rounded-none">
                      Today
                      <IoMdArrowDropdown className="mr-1 bg-border border-border" />
                    </button>
                  </div>

                  {/* Horizontal line */}
                  <div className="border-b border-gray-300 mb-3"></div>

                  {/* Content */}
                  <p className="text-gray-500 text-xs">Total Payable</p>
                  <h3 className="text-red-600 font-bold text-lg">₹15,00,000</h3>
                  <p className="text-gray-500 text-xs mt-1">Overdue Payable</p>
                  <h3 className="text-orange-500 font-bold text-lg">₹11,00,000</h3>
                </div>

              </div>
            </div>
          </div>


          <div className="space-y-4 mb-5">
            {/* Announcement */}
            <div className="bg-white border border-border rounded-none p-3">
              <h3 className="font-semibold text-sm mb-2 text-black">Announcement</h3>
              <div className="space-y-2 h-64 overflow-y-auto">
                <div className="bg-gray-100 border border-border rounded-none p-2">
                  <div className="text-sm text-black font-semibold mb-1">Operating Activities</div>
                  <p className="text-xs text-gray-700">
                    Operating activities include generating revenue, paying expenses...
                  </p>
                </div>
                <div className="bg-gray-100 border border-border rounded-none p-2">
                  <div className="text-sm text-black font-semibold mb-1">Investing Activities</div>
                  <p className="text-xs text-gray-700">
                    Investing activities involve long-term asset purchases...
                  </p>
                </div>
                <div className="bg-gray-100 border border-border rounded-none p-2">
                  <div className="text-sm text-black font-semibold mb-1">Financing Activities</div>
                  <p className="text-xs text-gray-700">
                    Financing activities deal with borrowing and equity transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Bank Account */}
            <div className="bg-white border border-gray-300 rounded-none p-3 shadow-sm">
              <h3 className="font-semibold text-sm mb-2 text-[#0C6663]">Bank Account</h3>
              {banks.map((bank, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-300/40 pb-3 mb-3 last:border-0">
                  <div className="flex items-center gap-2 text-gray-800 font-medium">
                    <AiOutlineBank className="text-[#0C6663] text-lg" />
                    <span>{bank.name}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500">Bank Balance</span>
                    <span className="text-[#0C6663] font-semibold text-sm">{bank.balance}</span>
                  </div>
                </div>
              ))}
              <button className="w-full mt-4 py-2 border border-gray-300 text-white bg-[#105F62] rounded-none font-medium text-sm">
                ADD BANK
              </button>
            </div>

            {/* Contact Support */}
            <div className="bg-white border border-gray-300 rounded-none p-3 shadow-sm">
              <h3 className="font-semibold text-sm mb-1 text-[#0C6663]">Contact Support</h3>
              <p className="text-sm text-gray-500 mb-4">
                We're happy to help! Contact us anytime, anywhere, on any device.
              </p>
              <div className="flex justify-around items-center text-sm text-gray-700">
                <div className="flex items-center gap-1 cursor-pointer">
                  <BiSolidPhoneCall className="text-[#007F5F]" /> Call Us
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <PiEnvelopeSimpleFill className="text-[#007F5F]" /> Email ID
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <FaWhatsapp className="text-green-600" /> WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer fixed at bottom */}
      <footer className="bg-white border-t border-border text-sm text-gray-600 px-6 py-2 flex justify-between items-center">
        <span>
          © 2024 <span className="font-semibold text-[#007F5F]">Chapter.1</span>. All rights reserved.
        </span>
        <div className="flex items-center gap-2 cursor-pointer">
          <span>Need help?</span>
          <FaQuestionCircle className="text-[#007F5F]" />
        </div>
      </footer>

    </div >
  );
};

export default Dashboard;
