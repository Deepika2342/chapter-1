"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import Group from "@/img/Group.png";
import { useState } from "react";
import Navbar1 from "@/components/navbar1";

const WelcomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <Navbar1 />
            <div className="flex flex-col flex-1 min-h-screen bg-[#E0F4EC]">
                <div className="flex-1 mt-4 bg-white p-0">
                    {/* Header */}
                    <div className="flex items-center justify-between w-full h-[50px] px-4 py-2 border-b-2 border-border bg-white">
                        <div>
                            <h2 className="text-2xl font-bold">Select Company</h2>
                            <p className="text-sm text-[#007F5F] font-extralight">
                                Accounting Books / <span className="font-extralight">Select Company</span>
                            </p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Button className="bg-[#004D40] text-white px-2 py-1 text-sm rounded hover:bg-[#00695C] transition">
                                CREATE COMPANY
                            </Button>
                            <LuMenu
                                className="text-gray-600 text-2xl hover:text-green-700 cursor-pointer"
                                onClick={() => setMenuOpen(!menuOpen)}
                            />
                        </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center text-center p-6">
                    <h1 className="text-[64px] font-bold text-green-700 mb-2">
                        Welcome <span className="text-green-700">!</span>
                    </h1>

                    <p className="text-gray-600 font-light text-[14px] max-w-md mb-4">
                        Unleash the full potential of your numerical data. Explore how
                        our innovative accounting solutions empower you to make
                        well-informed financial decisions with confidence.
                    </p>

                    <p className="text-gray-800 font-light text-[24px] tracking-wide mb-6">
                        YOU NEED TO CREATE YOUR COMPANY FIRST!
                    </p>

                    {/* Image and Button Section */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-full mb-4 relative">
                            <Image
                                src={Group}
                                alt="welcome page"
                                width={0}
                                height={0}
                                className="object-contain max-w-[350px] w-full"
                                />
                        </div>

                        <Button className="w-full max-w-lg sm:max-w-xl bg-[#004D40] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#00695C] transition">
                            NEED HELP?
                        </Button>
                    </div>
                                </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
