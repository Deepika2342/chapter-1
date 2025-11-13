"use client";
import Navbar1 from "@/components/navbar1";
import React, { useState } from "react";
import { FiHome, FiDatabase, FiShoppingCart, FiCreditCard, FiRepeat, FiPackage, FiFileText, FiBriefcase, FiPercent } from "react-icons/fi";

export default function CompanyListLayout({ children }) {
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
        <main className="min-h-screen bg-[#E0F4EC] flex flex-col">
            <Navbar1 />

            <div className="flex flex-1 overflow-hidden ">
                {/* Sidebar */}
                <aside className="w-55 bg-white border-r border-border shadow-sm flex flex-col">
                    <ul className="mt-2 space-y-1">
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
                </aside>

                {/* Main Page (Dashboard injected here) */}
                <section className="flex-1 overflow-y-auto ">{children}</section>
            </div>

        </main>
    );
}
