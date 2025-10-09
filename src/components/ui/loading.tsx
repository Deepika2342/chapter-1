import Image from "next/image";
import Navbar1 from "../navbar1";

export default function LoadingScreen() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-green-50">
      {/* Navbar */}
      <Navbar1 />

      {/* Centered content */}
      <div className="flex flex-col flex-1 items-center justify-center relative px-4">
        <Image
          className="object-contain"
          src="/logo.png"
          alt="Chapter Logo"
          width={400}
          height={103}
          quality={100}
        />

        <p className="font-outfit font-normal text-[10px] leading-[125%] tracking-[0.6em] uppercase mt-2">
          Syncing your numbers
        </p>

        {/* Footer fixed at bottom */}
        <footer className="absolute bottom-12 text-xs text-#000000;
 text-center w-full">
          Copyright © 2024 Chapter.1, All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
