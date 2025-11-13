"use client";
import Navbar1 from "@/components/navbar1";
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
    FiMenu,
    FiX,
} from "react-icons/fi";
import { FaQuestionCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";




export default function CompanyListLayout({ children }) {
    const [active, setActive] = useState("Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

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
        <main className="min-h-screen bg-border flex flex-col relative">
            {/* Navbar */}
            <div className="flex items-center justify-between px-0 py-0 bg-white border-b border-border shadow-sm">
                <Navbar1 />
                {/* Hamburger for mobile */}
                <button
                    className="sm:hidden text-[#007F5F] text-2xl"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside
                    className={`fixed sm:static top-0 left-0 h-full sm:h-auto bg-white border-r border-gray-200 shadow-md z-40 transform transition-transform duration-300 w-56
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
                >
                    <ul className="mt-16 sm:mt-2 space-y-1">
                        {menuItems.map((item) => (
                            <li
                                key={item.name}
                                onClick={() => {
                                    setActive(item.name);
                                    setSidebarOpen(false);
                                    if (item.name === "Dashboard") {
                                        router.push("/dashboard");
                                    }
                                }}
                                className={`flex items-center gap-3 px-5 py-2 text-sm cursor-pointer transition ${active === item.name
                                    ? "border-l-4 border-[#007F5F] bg-[#E6F4F1] text-[#007F5F]"
                                    : "border-transparent hover:bg-gray-100"
                                    }`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Overlay for mobile */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 sm:hidden z-30"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}

                {/* Main Content */}
                <section className="flex-1 overflow-y-auto pb-10 pt-0 px-0 sm:px-0">
                    {children}
                </section>
            </div>

            {/* Footer */}
            <footer className="w-full bg-white border-t border-gray-200 text-sm text-gray-600 px-4 py-3 flex flex-wrap justify-between items-center z-50 fixed bottom-0 left-0">
                <span className="text-center sm:text-left w-full sm:w-auto mb-2 sm:mb-0">
                    Copyright © 2024 <span className="font-semibold text-[#007F5F]">Chapter.1</span> — All rights reserved.
                </span>
                <div className="flex items-center gap-2 justify-center sm:justify-end w-full sm:w-auto text-[#007F5F] cursor-pointer hover:text-[#005f45] transition-colors">
                    <span>Need help?</span>
                    <FaQuestionCircle />
                </div>
            </footer>
        </main>
    );
}
