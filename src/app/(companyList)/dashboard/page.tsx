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
    { name: "ICICI Bank", balance: "₹750" },
    { name: "Bank of Baroda", balance: "₹350" },
    { name: "IDFC Bank", balance: "₹350" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
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
      <div className="flex-1 grid grid-cols-3 gap-4 p-4 overflow-y-auto">
        {/* Middle Section */}
        <div className="col-span-2 space-y-4">
          {/* Header */}
          <div className="bg-white p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <p className="text-sm text-[#007F5F]">
              Select Company / Klamp Ecommerce / <span className="font-semibold">Dashboard</span>
            </p>
          </div>

          {/* Sales & Purchase */}
          <div className="bg-white p-4 border rounded shadow-sm">
            <div className="flex justify-between items-center border-b pb-2 mb-3">
              <h3 className="font-semibold">Sales & Purchase</h3>
              <button className="flex items-center text-sm border px-2 py-1 rounded">
                <FiCalendar className="mr-1" /> Today
              </button>
            </div>
            <div className="flex justify-between items-center text-sm mb-4">
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded">SALES</button>
                <button className="px-3 py-1 border rounded">PURCHASE</button>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Total Sales</p>
                <p className="text-lg font-bold text-green-700">₹25,00,000</p>
              </div>
            </div>
            <div className="h-48 bg-gray-50 border flex items-center justify-center text-gray-400">
              Chart Placeholder
            </div>
            <div className="flex justify-center mt-3 space-x-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <MdCheckBoxOutlineBlank className="text-gray-500" /> Items Sold
              </div>
              <div className="flex items-center gap-1">
                <MdCheckBoxOutlineBlank className="text-green-700" /> Total Profit
              </div>
            </div>
          </div>

          {/* Profit & Loss */}
          <div className="bg-white p-4 border rounded shadow-sm">
            <h3 className="font-semibold mb-2">PROFIT AND LOSS</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="border rounded p-3">
                <p className="text-gray-500">Total Revenue</p>
                <h4 className="text-green-700 text-lg font-bold mb-2">₹1000</h4>
                <p>Sales Income ₹600</p>
                <p>Service Income ₹200</p>
                <p>Other Income ₹200</p>
              </div>
              <div className="border rounded p-3">
                <p className="text-gray-500">Total Expense</p>
                <h4 className="text-red-600 text-lg font-bold mb-2">₹400</h4>
                <p>Purchase ₹150</p>
                <p>Trading ₹150</p>
                <p>Other ₹100</p>
              </div>
              <div className="border rounded p-3">
                <p className="text-gray-500">Total Income</p>
                <h4 className="text-green-700 text-lg font-bold mb-2">₹600</h4>
                <p>Open Balance ₹150</p>
                <p>Created Invoice ₹150</p>
                <p>Cash Income ₹200</p>
              </div>
            </div>
          </div>

          {/* Cash Balances */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border rounded p-3 shadow-sm">
              <p className="text-sm text-gray-500">Cash Received Balance</p>
              <h4 className="text-green-700 font-bold text-lg">₹1000</h4>
            </div>
            <div className="bg-white border rounded p-3 shadow-sm">
              <p className="text-sm text-gray-500">Cash Payment Balance</p>
              <h4 className="text-red-600 font-bold text-lg">₹800</h4>
            </div>
            <div className="bg-white border rounded p-3 shadow-sm">
              <p className="text-sm text-gray-500">Closing Cash Balance</p>
              <h4 className="text-gray-800 font-bold text-lg">₹200</h4>
            </div>
          </div>

          {/* Accounts Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border rounded p-3 shadow-sm">
              <h4 className="text-sm font-semibold mb-2">Account Receivable</h4>
              <p className="text-gray-500 text-xs">Total Receivable</p>
              <h3 className="text-green-700 font-bold text-lg">₹25,00,000</h3>
              <p className="text-gray-500 text-xs mt-1">Overdue Receivable</p>
              <h3 className="text-red-600 font-bold text-lg">₹10,00,000</h3>
            </div>
            <div className="bg-white border rounded p-3 shadow-sm">
              <h4 className="text-sm font-semibold mb-2">Account Payable</h4>
              <p className="text-gray-500 text-xs">Total Payable</p>
              <h3 className="text-red-600 font-bold text-lg">₹15,00,000</h3>
              <p className="text-gray-500 text-xs mt-1">Overdue Payable</p>
              <h3 className="text-orange-500 font-bold text-lg">₹11,00,000</h3>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Announcement */}
          <div className="bg-white border rounded-none p-3 shadow-sm">
            <h3 className="font-semibold text-sm mb-2">Announcement</h3>
            <p className="text-xs text-gray-600 mb-1">
              Operating activities include generating revenue, paying expenses...
            </p>
            <p className="text-xs text-gray-600 mb-1">
              Investing activities involve long-term asset purchases...
            </p>
            <p className="text-xs text-gray-600 mb-1">
              Financing activities deal with borrowing and equity transactions.
            </p>
          </div>

          {/* Bank Account */}
          <div className="bg-white border rounded-none p-3 shadow-sm">
            <h3 className="font-semibold text-sm mb-2">Bank Account</h3>
            {banks.map((bank, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-[#105F62]/40 pb-3 mb-3 last:border-0"
              >
                {/* Bank Name + Icon */}
                <div className="flex items-center gap-2 text-gray-800 font-medium">
                  <AiOutlineBank className="text-[#105F62] text-lg" />
                  <span>{bank.name}</span>
                </div>

                {/* Balance Section */}
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500">Bank Balance</span>
                  <span className="text-[#105F62] font-semibold text-sm">{bank.balance}</span>
                </div>
              </div>
            ))}

            <button className="w-full mt-4 py-2 border border-border text-white bg-[#105F62] transition rounded-none font-medium text-sm">
              ADD BANK
            </button>
          </div>

          {/* Contact Support */}
          <div className="bg-white border rounded-none p-3 shadow-sm">
            <h3 className="font-semibold text-sm mb-1">Contact Support</h3>
            <p className="text-sm text-gray-500 mb-4">
              We're happy to help! Contact us anytime, anywhere, on any device.
            </p>            <div className="flex justify-around text-sm text-gray-700">
              <BiSolidPhoneCall className="text-[#007F5F] cursor-pointer" />
              Call Us

              <PiEnvelopeSimpleFill className="text-[#007F5F] cursor-pointer" />
              Email ID

              <FaWhatsapp className="text-green-600 cursor-pointer" />
              WhatsApp

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-white border-t text-sm text-gray-600 px-6 py-2 flex justify-between items-center">
        <span>
          © 2024 <span className="font-semibold text-[#007F5F]">Chapter.1</span>. All rights reserved.
        </span>
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#007F5F]">
          <span>Need help?</span>
          <FaQuestionCircle />
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
