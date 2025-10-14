"use client";

import Image from "next/image";
import Link from "next/link";
import signup from "@/img/Signup.png"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <div className=" w-full h-dvh overflow-hidden  bg-background flex items-center justify-center">
      <div className="  grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl">
        {/* LEFT SIDE */}
          <div className="m-10 mt-15">
            <Image
              src={signup}
              alt="Signup illustration"
              width={400}
              height={300}
              className="mx-auto"
            />
         </div>

        {/* RIGHT SIDE */}
        <div className="p-10 md:p-14 bg-[#F5FFFC]">
          

          <form className="space-y-4">
            {/* <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="border border-gray-300 rounded-md p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#105F62]"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="border border-gray-300 rounded-md p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#105F62]"
              />
            </div> */}
 <div className="grid grid-cols-2 gap-4">
           {/* <div className="grid w-full max-w-sm items-center gap-3"> */}
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    {/* </div> */}
           {/* <div className="grid w-full max-w-sm items-center gap-3"> */}
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    {/* </div> */}
    </div>

      

            <input
              type="email"
              placeholder="Email ID*"
              className="border border-gray-300 rounded-md p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#105F62]"
            />

            <input
              type="tel"
              placeholder="Contact Number*"
              className="border border-gray-300 rounded-md p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#105F62]"
            />

            <input
              type="password"
              placeholder="Password*"
              className="border border-gray-300 rounded-md p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#105F62]"
            />

            <input
              type="password"
              placeholder="Confirm Password*"
              className="border border-gray-300 rounded-md p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#105F62]"
            />

            <button
              type="submit"
              className="w-full bg-[#105F62] hover:bg-[#0B4B4E] text-white font-semibold py-3 rounded-md transition"
            >
              SUBMIT
            </button>

            <p className="text-center text-sm mt-4 text-gray-600">
              Back in to?{" "}
              <Link href="/login" className="text-[#0FAE96] font-medium hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
