import Navbar1 from "@/components/navbar1";
import React from "react";

export default function CompanyListLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-[#E0F4EC] flex flex-col p-4">
            <Navbar1/>
            {children}
        </main>
    );
}
