"use client";

import Navbar1 from "@/components/navbar1";
import React, { useState, ReactNode } from "react";
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

interface LayoutProps {
    children: React.ReactNode;
}

export default function CompanyListLayout({ children }: LayoutProps) {
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
        <main className="min-h-screen bg-border flex flex-col relative p-0">

            {/* ===== NAVBAR =====*/}
            <div
                className="fixed top-0 left-0 right-0 z-50 bg-border border-b border-border 
  px-1 py-2 flex items-center justify-between"
            >
                {/* Navbar */}
                <Navbar1 />

                {/* Mobile menu button */}
                <button
                    className="sm:hidden text-[#007F5F] text-5xl"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>


            {/* Add space below fixed navbar */}
            <div className="h-[60px] bg-border border-border"></div>

            <div className="flex flex-1">

                {/* ===== SIDEBAR (STICKY on Desktop, Slide on Mobile) ===== */}
                <aside
                    className={`bg-white border-r border-border ml-2 w-56 h-[calc(100vh-70px)]
  fixed top-[20px] left-0 z-40 overflow-y-auto
  ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
  sm:translate-x-0 sm:sticky sm:top-[70px] sm:h-[calc(100vh-70px)]`}
                >
                    <ul className="py-3 space-y-1">
                        {menuItems.map((item) => (
                            <li
                                key={item.name}
                                onClick={() => {
                                    setActive(item.name);
                                    setSidebarOpen(false);
                                    if (item.name === "selectCompany") router.push("/selectCompany");
                                }}
                                className={`flex items-center gap-3 px-5 py-2 text-sm cursor-pointer transition 
          ${active === item.name ? "border-l-4 border-[#007F5F] bg-[#E6F4F1] text-[#007F5F]" : "hover:bg-gray-100"}`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="truncate">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* ===== MOBILE OVERLAY ===== */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 sm:hidden z-30"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}

                {/* ===== MAIN CONTENT ===== */}
                <section className="flex-1 p-0 overflow-y-auto pb-5">
                    {children}
                </section>
            </div>

            {/* ===== STICKY FOOTER ===== */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-border text-sm text-gray-600 px-4 py-3 flex flex-wrap justify-between items-center z-50">
                <span className="text-center sm:text-left w-full sm:w-auto mb-2 sm:mb-0">
                    © 2024 <span className="font-semibold text-[#007F5F]">Chapter.1</span> — All rights reserved.
                </span>
                <div className="flex items-center gap-2 text-[#007F5F] cursor-pointer">
                    <span>Need help?</span>
                    <FaQuestionCircle />
                </div>
            </footer>

        </main>
    );
}
