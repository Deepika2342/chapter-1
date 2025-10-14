
"use client";
import Image from "next/image";
import logo from "@/img/Logo.png"


export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-background relative px-4 overflow-hidden">
      {/* Logo */}
      <Image
        className="object-contain"
        src={logo}
        alt="Chapter Logo"
        width={350}
        height={103}
      />

    {/* Footer fixed at bottom */}
      <footer className="absolute bottom-12 w-full text-center text-[14px] font-outfit font-normal leading-[100%] text-black">
        Copyright © 2024 Chapter.1, All Rights Reserved.
      </footer>
    </div>
  );
}
