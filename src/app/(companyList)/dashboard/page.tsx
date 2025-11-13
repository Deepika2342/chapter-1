"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineBank } from "react-icons/ai";
import { FaWhatsapp, FaQuestionCircle } from "react-icons/fa";
import { PiEnvelopeSimpleFill } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import Chart from "@/img/Chart.png";
import DonutChart from "@/img/DonutChart.png";
import Account from "@/img/Account.png";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Dashboard = () => {
  const banks = [
    { name: "ICICI Bank", balance: "₹350" },
    { name: "Bank of Baroda", balance: "₹350" },
    { name: "IDFC Bank", balance: "₹350" },
  ];

  return (
    <div className="flex flex-col bg-gray-50 text-gray-800 relative pb-20 px-0 sm:px-0">
      {/* ===== Header ===== */}
      <div className="bg-white border-b border-border p-2  rounded-none">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="text-sm text-[#007F5F] mt-1">
          Select Company / Klamp Ecommerce /{" "}
          <span className="hidden sm:inline text-gray-600 text-xs sm:text-sm md:text-base truncate font-semibold">Dashboard</span>
        </p>
      </div>

      {/* ===== Main Grid ===== */}
      <div className="flex flex-col md:flex-row p-2 sm:p-4 gap-6 flex-1">
        {/* ===== Left/Main Section ===== */}
        <div className="flex-1 flex flex-col gap-6">
          {/* ===== Sales & Purchase ===== */}
          <div className="bg-white p-4 border border-border rounded-none shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border pb-2 mb-3">
              <h3 className="font-semibold text-gray-700 mb-2 md:mb-0">
                Sales & Purchase
              </h3>
              <button className="flex items-center text-sm border border-border bg-border px-3 py-1 hover:bg-gray-200 rounded-none">
                Today
                <IoMdArrowDropdown className="ml-1" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm mb-4 gap-4">
              <div className="flex gap-2 w-full md:w-auto justify-between md:justify-start">
                <button className="flex-1 md:flex-none px-3 py-1 border border-border bg-border hover:bg-gray-200 rounded-none">
                  SALES
                </button>
                <button className="flex-1 md:flex-none px-3 py-1 border border-border bg-border hover:bg-gray-200 rounded-none">
                  PURCHASE
                </button>
              </div>
              <div className="text-right w-full md:w-auto">
                <p className="text-gray-500">Total Sales</p>
                <p className="text-lg font-bold text-green-700">₹25,00,000</p>
              </div>
            </div>

            <div className="h-48 bg-gray-50 border flex items-center justify-center">
              <Image
                src={Chart}
                alt="Chart"
                width={950}
                height={850}
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>

            <div className="flex flex-wrap justify-center md:justify-start mt-3 gap-2 text-xs">
              <div className="flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-2 rounded-none">
                <MdCheckBoxOutlineBlank className="text-gray-600 bg-white" />
                <span>Items Sold</span>
              </div>
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded">
                <MdCheckBoxOutlineBlank className="text-green-700 bg-white" />
                <span>Total Profit</span>
              </div>
            </div>
          </div>

          {/* ===== Profit & Loss ===== */}
          <div className="bg-white p-4 rounded-none border border-border shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-700">Profit and Loss</h3>
              <button className="flex items-center text-sm border border-gray-300 bg-border px-3 py-1 hover:bg-gray-200 rounded-none">
                Today
                <IoMdArrowDropdown className="ml-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Revenue */}
              <div className="border border-border rounded p-3">
                <p className="text-gray-500">Total Revenue</p>
                <h4 className="text-green-700 text-lg font-bold mb-2">₹1000</h4>
                <div className="border-b border-gray-300 mb-2"></div>
                <p>Sales Income ₹600</p>
                <p>Service Income ₹200</p>
                <p>Other Income ₹200</p>
                <div className="mt-2 flex justify-center">
                  <Image
                    src={DonutChart}
                    alt="Revenue"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Expense */}
              <div className="border border-border rounded p-3">
                <p className="text-gray-500">Total Expense</p>
                <h4 className="text-red-600 text-lg font-bold mb-2">₹400</h4>
                <div className="border-b border-gray-300 mb-2"></div>
                <p>Purchase ₹150</p>
                <p>Trading ₹150</p>
                <p>Other ₹100</p>
                <div className="mt-2 flex justify-center">
                  <Image
                    src={DonutChart}
                    alt="Expense"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Income */}
              <div className="border border-border rounded p-3">
                <p className="text-gray-500">Total Income</p>
                <h4 className="text-green-700 text-lg font-bold mb-2">₹600</h4>
                <div className="border-b border-gray-300 mb-2"></div>
                <p>Open Balance ₹150</p>
                <p>Created Invoice ₹150</p>
                <p>Cash Income ₹200</p>
              </div>
            </div>
          </div>

          {/* ===== Cash Balances ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Cash Received Balance", value: "₹1000", color: "text-green-700" },
              { title: "Cash Payment Balance", value: "₹800", color: "text-red-600" },
              { title: "Closing Cash Balance", value: "₹200", color: "text-gray-800" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded p-3 shadow-sm text-center sm:text-left"
              >
                <p className="text-sm text-gray-500">{item.title}</p>
                <h4 className={`${item.color} font-bold text-lg`}>{item.value}</h4>
              </div>
            ))}
          </div>

          {/* ===== Accounts Section ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Receivable */}
            <div className="bg-white border border-border p-3 shadow-sm flex flex-col sm:flex-row items-center gap-4">
              <Image
                src={Account}
                alt="Receivable"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-semibold">Account Receivable</h4>
                  <button className="flex items-center text-sm border border-border bg-border px-2 py-1 hover:bg-gray-200 rounded-none">
                    Today <IoMdArrowDropdown className="ml-1" />
                  </button>
                </div>
                <div className="border-b border-gray-300 mb-2"></div>
                <p className="text-gray-500 text-xs">Total Receivable</p>
                <h3 className="text-green-700 font-bold text-lg">₹25,00,000</h3>
                <p className="text-gray-500 text-xs mt-1">Overdue Receivable</p>
                <h3 className="text-red-600 font-bold text-lg">₹10,00,000</h3>
              </div>
            </div>

            {/* Payable */}
            <div className="bg-white border border-border p-3 shadow-sm flex flex-col sm:flex-row items-center gap-4">
              <Image
                src={Account}
                alt="Payable"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-semibold">Account Payable</h4>
                  <button className="flex items-center text-sm border border-border bg-border px-2 py-1 hover:bg-gray-200 rounded-none">
                    Today <IoMdArrowDropdown className="ml-1" />
                  </button>
                </div>
                <div className="border-b border-gray-300 mb-2"></div>
                <p className="text-gray-500 text-xs">Total Payable</p>
                <h3 className="text-red-600 font-bold text-lg">₹15,00,000</h3>
                <p className="text-gray-500 text-xs mt-1">Overdue Payable</p>
                <h3 className="text-orange-500 font-bold text-lg">₹11,00,000</h3>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Right Side Panels ===== */}
        <div className="w-full md:w-80 flex-shrink-0 flex flex-col gap-5 mt-6 md:mt-0">
          {/* Announcement */}
          <div className="bg-white border border-border p-3 rounded-none h-auto max-h-100 overflow-y-auto">
            <h3 className="font-semibold text-sm mb-2 text-black">Announcement</h3>
            {[
              {
                title: "Operating Activities",
                desc: "Operating activities include generating revenue, paying expenses...",
              },
              {
                title: "Investing Activities",
                desc: "Investing activities involve long-term asset purchases...",
              },
              {
                title: "Financing Activities",
                desc: "Financing activities deal with borrowing and equity transactions.",
              },
              {
                title: "Operating Activities",
                desc: "Operating activities include generating revenue, paying expenses...",
              },
              {
                title: "Operating Activities",
                desc: "Operating activities include generating revenue, paying expenses...",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 border border-border p-2 mb-2 last:mb-0 rounded-md"
              >
                <div className="text-sm font-semibold mb-1">{item.title}</div>
                <p className="text-xs text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bank Accounts */}
          <div className="bg-white border border-border p-6 shadow-sm rounded-none">
            <h3 className="font-semibold text-sm mb-2 text-[#0C6663]">
              Bank Account
            </h3>
            {banks.map((bank, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3 last:border-0"
              >
                <div className="flex items-center gap-2 text-gray-800 font-medium">
                  <AiOutlineBank className="text-[#0C6663] text-lg" />
                  <span>{bank.name}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500">Bank Balance</span>
                  <span className="text-[#0C6663] font-semibold text-sm">
                    {bank.balance}
                  </span>
                </div>
              </div>
            ))}
            <button className="w-full mt-4 py-2 border border-gray-300 text-white bg-[#105F62] font-medium text-sm rounded-none">
              ADD BANK
            </button>
          </div>

          {/* Contact Support */}
          <div className="bg-white border border-border p-6 rounded-none">
            <h3 className="font-semibold text-sm mb-1 text-[#0C6663]">
              Contact Support
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              We&apos;re happy to help! Contact us anytime, anywhere, on any device.
            </p>
            <div className="flex flex-wrap justify-around items-center text-sm text-gray-700 gap-2">
              <div className="flex items-center text-sm border border-border bg-border px-2 py-1 hover:bg-gray-200 rounded-none">
                <BiSolidPhoneCall className="text-[#007F5F]" /> Call Us
              </div>
              <div className="flex items-center text-sm border border-border bg-border px-2 py-1 hover:bg-gray-200 rounded-none">
                <PiEnvelopeSimpleFill className="text-[#007F5F]" /> Email
              </div>
              <div className="flex items-center text-sm border border-border bg-border px-2 py-1 hover:bg-gray-200 rounded-none">
                <FaWhatsapp className="text-green-600" /> WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Dashboard;
