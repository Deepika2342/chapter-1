import React from "react";

export default function CompanyListLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-[#E0F4EC] flex flex-col p-4">
            {children}
        </main>
    );
}
