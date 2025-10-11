"use client";

import Link from "next/link";
import Image from "next/image";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import logo from "@/img/Logo.png"

const LoginPage = () => {
  const router = useRouter();
  const [pass, setPass] = useState(false);
  return (
    <div className="w-full h-dvh overflow-hidden bg-background flex flex-col">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="text-center mb-6 mt-2">
          <Image
            src={logo}
            alt="Chapter Logo"
            width={220}
            height={70}
            quality={100}
            className="object-contain mx-auto"
          />
          <p className="font-outfit font-normal text-[7px] leading-[125%] tracking-[0.6em] uppercase mt-2">
            Syncing your numbers
          </p>
        </div>


        {/* Login Box */}
        <div className="bg-white w-full max-w-[300px] max-h-[330px] shadow-2xl p-6 text-center  shadow-lg-custom">
          {/* Login Heading */}
          <h2 className="font-outfit font-bold text-green-light   leading-[100%] tracking-[0%] text-center uppercase">
            {" "}
            LOGIN{" "}
          </h2>

          <p className="font-outfit font-light text-[12px] leading-[100%] tracking-[0%] text-center mb-6 bg-darkBg lable-green">
            Access to our dashboard
          </p>

          {/* Login Form */}
          <form className="flex flex-col  text-left h-[300px] gap-4 m-auto">
            <div>
              {/* Label */}
              <label className="block font-outfit font-normal text-12 leading-[100%] tracking-[0%] lable-green mb-1">
                Email Address
              </label>

              {/* Input */}
              <input
                type="email"
                placeholder=""
                className="w-full font-outfit border-[1px] border-border p-2 focus:outline-none "
              />
            </div>

            <div className="relative">
              <label className="block font-outfit font-normal text-12 leading-[100%] tracking-[0%] text-foreground lable-green mb-1">
                Password
              </label>

              <input
                
                type={pass ? "text" : "password"}
                placeholder=""
               className="w-full font-outfit border-[1px] border-border p-2 focus:outline-none "

             />
              {/* Eye Icon */}
              {pass ? (
                <FaRegEye
                  onClick={() => setPass(!pass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer mt-2"
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setPass(!pass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer mt-2"
                />
              )}
            </div>

            {/* Remember Me + Forgot */}
            <div className="flex items-center justify-between text-sm mt-2">
              <label className="flex items-center gap-2 font-outfit font-normal text-[16.89px] leading-[100%] tracking-[0%]">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-green-light rounded-none"
                />
                Remember me
              </label>

              <Link
                href="#"
                className="font-outfit font-normal text-[12px] leading-[100%] tracking-[0%] hover:underline text:text-shade"
              >
                {" "}
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            {/* Button */}
            <Button
              onClick={() => router.push("/welcome")}
              className=" bg-green-btn hover:bg-green-light text-white text-1xl uppercase font-medium rounded-none h-[40px] cursor-pointer"
              style={{
                animationDuration: "0ms",
              }}
            >
              Login
            </Button>
          </form>
        </div>

        <p className="font-outfit font-bold text-[20px] leading-[100%] tracking-[0%] text-center mt-8 mb-7">
          New user?{" "}
       <Link href="/auth/signup">
            <span className="text-green-medium cursor-pointer ">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
