"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import Group from "@/img/Group.png";
import { useEffect, useState } from "react";
import Navbar1 from "@/components/navbar1";
import { useRouter } from "next/navigation";

const WelcomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Disable scrolling when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-[#E0F4EC]">
      {/* Navbar */}
      <Navbar1 />

      {/* Page Content */}
      <div className="flex flex-col flex-1 h-full">
        <div className="flex-1 mt-4 bg-white">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full px-4 sm:px-6 py-2 border-b-2 border-border bg-white">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Select Company
              </h2>
              <p className="text-xs sm:text-sm text-[#007F5F] font-extralight">
                Accounting Books /{" "}
                <span className="font-extralight">Select Company</span>
              </p>
            </div>

            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <Button className="bg-[#004D40] text-white px-2 py-1 text-sm rounded hover:bg-[#00695C] transition w-full sm:w-auto">
                CREATE COMPANY
              </Button>

              {/* Menu Icon */}
              <div className="relative">
                <LuMenu
                  className="text-gray-600 text-2xl hover:text-green-700 cursor-pointer"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </div>
            </div>
          </div>

          {/* Sidebar (Right Side) */}
          <div
            className={`fixed top-[130px] right-0 h-full w-full sm:w-[220px] bg-white shadow-md transition-transform duration-300 ease-in-out z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="flex flex-col p-3 space-y-2 text-left">
              <Button
                className="bg-[#004D40] text-white px-2 py-1 text-sm rounded hover:bg-[#00695C] transition w-full sm:w-auto"
                onClick={() => router.push("/selectCompany")}
              >
                SELECT COMPANY
              </Button>
              <Button className="px-3 py-2 font-semibold text-[#00251A] hover:bg-[#E0F2F1] rounded cursor-pointer">
                USERS
              </Button>
              <Button className="bg-[#E8F5E9] px-3 py-2 font-semibold text-[#00251A] rounded">
                BACK UP
              </Button>
              <Button className="px-3 py-2 font-semibold text-[#00251A] hover:bg-[#E0F2F1] rounded cursor-pointer">
                EXIT
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-green-700 mb-2">
              Welcome <span className="text-green-700">!</span>
            </h1>

            <p className="text-sm sm:text-base md:text-[14px] text-gray-600 font-light max-w-md mb-4">
              Unleash the full potential of your numerical data. Explore how
              our innovative accounting solutions empower you to make
              well-informed financial decisions with confidence.
            </p>

            <p className="text-lg sm:text-xl md:text-[24px] text-gray-800 font-light tracking-wide mb-6">
              YOU NEED TO CREATE YOUR COMPANY FIRST!
            </p>

            {/* Image + Button */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-full mb-4 relative">
                <Image
                  src={Group}
                  alt="welcome page"
                  width={0}
                  height={0}
                  className="object-contain w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px]"
                />
              </div>

              <Button className="w-full sm:w-auto max-w-lg sm:max-w-xl bg-[#004D40] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#00695C] transition">
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