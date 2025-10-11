"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoNotificationsSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import profile from "@/img/profile.png";
import Group from "@/img/Group.png";
import logo from "@/img/Logo.png";

const WelcomePage = () => {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-[#E0F4EC]">

            {/* Navbar */}
            <header className="w-full bg-[#E0F4EC] border-b border-[#C4EDD7] flex justify-between items-center px-6 py-3 shadow-sm">
                {/* Logo */}
                <div className="text-center">
                    <Image
                        src={logo}
                        alt="Chapter Logo"
                        width={150}
                        height={50}
                        quality={100}
                        className="object-contain mx-auto"
                    />
                    <p className="font-outfit font-normal text-[5px] leading-[125%] tracking-[0.6em] uppercase mt-2">
                        Syncing your numbers
                    </p>
                </div>

                {/* Right side: Notification + Profile */}
                <div className="flex items-center space-x-4">
                    {/* Notification Icon */}
                    <button className="text-gray-600 hover:text-green-700 text-2xl relative">
                        <IoNotificationsSharp />
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* Profile Image */}
                    <div className="w-8 h-8 overflow-hidden border border-gray-300">
                        <Image
                            src={profile}
                            alt="Profile"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-cover"
                        />
                    </div>
                </div>
            </header>

            {/* Breadcrumb with button + menu icon */}
            <div className="flex items-center justify-between px-6 py-3 text-sm text-gray-600">
                <div>
                    Accounting Books / <span className="font-medium">Select Company</span>
                </div>

                <div className="flex items-center space-x-2">
                    <Button className="bg-[#004D40] text-white px-2 py-2 text-sm rounded hover:bg-[#00695C] transition">
                        CREATE COMPANY
                    </Button>
                    <LuMenu className="text-gray-600 text-2xl hover:text-green-700 cursor-pointer" />
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center bg-white mx-6 mt-2 mb-3 shadow-lg rounded-lg p-6">
                <h1 className="text-[36px] font-bold text-green-800 mb-2">
                    Welcome <span className="text-green-600">!</span>
                </h1>

                <p className="text-gray-600 text-center max-w-md mb-4">
                    Unleash the full potential of your numerical data. Explore how our
                    innovative accounting solutions empower you to make well-informed
                    financial decisions with confidence.
                </p>

                <p className="text-gray-800 font-semibold tracking-wide mb-6">
                    YOU NEED TO CREATE YOUR COMPANY FIRST!
                </p>

                {/* Image Section */}
                <div className="w-full max-w-lg h-64 mb-6 relative">
                    <Image
                        src={Group}
                        alt="welcome page"
                        fill
                        className="object-contain"
                    />
                </div>

                <Button className="bg-[#004D40] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#00695C] transition">
                    NEED HELP?
                </Button>
            </main>
        </div>
    );
};

export default WelcomePage;
