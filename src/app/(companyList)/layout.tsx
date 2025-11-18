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

interface LayoutProps {
    children: React.ReactNode;
}

export default function CompanyListLayout({ children }: LayoutProps) {
    const router = useRouter();

    // Sidebar state
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Active menu item
    const [active, setActive] = useState("Dashboard");

    // Menu Items
    const menuItems = [
        { name: "Dashboard", icon: <FiHome /> },
        { name: "Companies", icon: <FiDatabase /> },
        { name: "Sales", icon: <FiShoppingCart /> },
        { name: "Purchase", icon: <FiCreditCard /> },
        { name: "Transactions", icon: <FiRepeat /> },
        { name: "Products", icon: <FiPackage /> },
        { name: "Reports", icon: <FiFileText /> },
        { name: "Business", icon: <FiBriefcase /> },
        { name: "GST", icon: <FiPercent /> },
    ];

    return (
        <main className="min-h-screen bg-border flex flex-col relative p-0">

            {/* ===== NAVBAR ===== */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-border border-b border-border px-0 py-2 flex items-center justify-between">
                <Navbar1 />

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="sm:hidden text-2xl text-[#007F5F]"
                >
                    {sidebarOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Space below fixed navbar */}
            <div className="h-[70px]"></div>

            <div className="flex flex-1">

                {/* ===== SIDEBAR ===== */}
                <aside
                    className={`bg-white border-r border-border w-56 ml-2 h-[calc(10vh-10px)] 
          fixed top-[78px] left-0 z-40 overflow-y-auto transition-transform duration-100
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:sticky sm:top-[60px] sm:h-[calc(100vh)]`}
                >
                    <ul className="py-3 space-y-1">
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
                                className={`flex items-center gap-3 px-5 py-2 text-sm cursor-pointer transition 
                ${active === item.name
                                        ? "border-l-4 border-[#007F5F] bg-[#E6F4F1] text-[#007F5F]"
                                        : "hover:bg-gray-100"
                                    }`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="truncate">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* ===== MAIN CONTENT ===== */}
                <section className="flex-1 p-0 overflow-y-auto pb-0 sm:ml-0">
                    {children}
                </section>
            </div>

            {/* ===== FOOTER ===== */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-border 
              text-sm text-gray-600 px-4 py-3 flex flex-wrap justify-between items-center z-50">

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
