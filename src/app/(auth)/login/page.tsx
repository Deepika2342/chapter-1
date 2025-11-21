"use client";

import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "@/img/Logo.png";
import { Button } from "@/components/ui/button";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);


  //  Correct API Login Function //
  const authenticateUser = async () => {
    try {
      const response = await axios.post(`https://chapter.1.koffeekodes.in/api/login`, {
        username: email,
        password: password,
      });

      const token = response.data.token;

      localStorage.setItem("token", token);
      alert("Login successful!");

      // Redirect to next page
      router.push("/selectCompany");

    } catch (error: any) {
      console.error("Error during authentication:", error);
      alert("Invalid email or password!");
    }
  };

  // Form Submit
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    authenticateUser(); // calling API here
  };


  return (
    <div className="w-full h-dvh overflow-hidden bg-background flex flex-col">
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Logo */}
        <div className="text-center mb-6 mt-2">
          <Image
            src={logo}
            alt="Chapter Logo"
            width={220}
            height={70}
            quality={100}
            className="object-contain mx-auto"
          />
        </div>

        {/* Login Box */}
        <div className="bg-white w-full max-w-[300px] max-h-[330px] shadow-2xl p-6 text-center shadow-lg-custom">
          {/* Login Heading */}
          <h2 className="font-outfit font-bold text-green-light leading-[100%] tracking-[0%] text-center uppercase">
            LOGIN
          </h2>

          <p className="font-outfit font-light text-[12px] leading-[100%] tracking-[0%] text-center mb-6 bg-darkBg">
            Access to our dashboard
          </p>

          {/* Login Form */}
          <form
            onSubmit={handleLogin}
            className="flex flex-col text-left h-[300px] gap-4 m-auto"
          >
            {/* Email Field */}
            <div>
              <label className="block font-outfit font-normal text-12 leading-[100%] tracking-[0%] lable-green mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="w-full font-outfit border-[1px] border-border p-2 focus:outline-none"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block font-outfit font-normal text-12 leading-[100%] tracking-[0%] text-foreground lable-green mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                  className="w-full font-outfit border-[1px] border-border p-2 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-2 text-gray-500"
                >
                  {showPass ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
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
                className="font-outfit font-normal text-[12px] leading-[100%] tracking-[0%] hover:underline text-dark-green"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="bg-green-btn hover:bg-green-light text-white text-1xl uppercase font-medium rounded-none h-[40px] cursor-pointer"
              style={{ animationDuration: "0ms" }}
            >
              Login
            </Button>
          </form>
        </div>

        {/* Signup Link */}
        <p className="font-outfit font-bold text-[20px] leading-[100%] tracking-[0%] text-center mt-8 mb-7">
          New user?{" "}
          <Link href="/signup">
            <span className="text-green-medium cursor-pointer">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
