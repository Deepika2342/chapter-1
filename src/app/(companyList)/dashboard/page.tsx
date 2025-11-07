"use client";

import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import {
  FiBriefcase,
  FiCreditCard,
  FiDatabase,
  FiFileText,
  FiHome,
  FiPackage,
  FiPercent,
  FiRepeat,
  FiShoppingCart,
} from "react-icons/fi";

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
    { name: "Job Work Reporting", icon: <FiBriefcase /> },
    { name: "GST", icon: <FiPercent /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-border text-black flex flex-col justify-between shadow-lg">
        <div className="flex-1">
          <ul className="mt-4 space-y-1">
            {menuItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-3 px-5 py-2 cursor-pointer border-l-4 transition ${active === item.name
                  ? "border-[#007F5F] bg-[#E6F4F1] text-[#007F5F]"
                  : "border-transparent text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header (Full width, outside sidebar) */}
        <div className="w-full border-b-2 border-border px-6 py-3 bg-white shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
          <p className="text-sm text-[#007F5F] font-light">
            Select Company / Klamp Ecommerce /{" "}
            <span className="font-semibold">Dashboard</span>
          </p>
        </div>

        {/* Footer */}
        <footer className="w-full bg-white border-t border-gray-200 py-3 px-6 flex justify-between items-center text-sm text-gray-700 sticky bottom-0 z-10 shadow-md">
          {/* Left Side */}
          <div>
            © 2024 <span className="font-semibold text-[#0C6663]">Chapter.1</span>. All rights reserved.
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-2 hover:text-[#0C6663] cursor-pointer">
            <span className="font-medium">Need help?</span>        
                <FaQuestionCircle className="text-lg" />

          </div>
        </footer>



      </div>
    </div>


  );
};

export default Dashboard;
