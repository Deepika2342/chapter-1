"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Montserrat } from "next/font/google";
import { Eye, EyeOff } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

interface PasswordInputProps {
  id?: string;
  placeholder?: string;
  className?: string;
  height?: string;
  padding?: string;
}

export default function PasswordInput({
  id = "password",
  placeholder = "Password",
  className = "w-full sm:w-[457px]",
  height = "h-[52px]",
  padding = "px-[18px] py-[14px]",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required
        className={`${montserrat.className} ${className} ${height} ${padding} pr-10 font-normal text-[22px] sm:text-[24px] leading-[120%] border border-[#BFBFBF] rounded-[4px]`}
      />

      {showPassword ? (
        <EyeOff
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          size={25}
          onClick={() => setShowPassword(false)}
        />
      ) : (
        <Eye
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          size={25}
          onClick={() => setShowPassword(true)}
        />
      )}
    </div>
  );
}
