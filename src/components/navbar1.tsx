import { PiCopyFill } from "react-icons/pi";
import { VscChromeClose, VscChromeMinimize } from "react-icons/vsc";

const Navbar1 = () => {
  return (
    <nav className=" bg-white border border-green-200  ">
      <div className="  flex justify-between items-center border border-green-50 ">
        <div className="px-6 py-3">
        {/* Left logo */}
        <h1 className="font-outfit font-normal text-[10px] leading-[17px] tracking-[0.02em] capitalize text-gray-800">
  Chapter01 - V4.1
</h1>
      </div>

       <div>
        {/* Right icons */}
        <div className="flex items-center space-x-3 px-6 py-3 text-black text-xl border-s-2  border-s-green-50  h-full border-#C4EDD7">
         <VscChromeMinimize className="cursor-pointer" />
          <PiCopyFill className="cursor-pointer " />
          <VscChromeClose className="cursor-pointer " />
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
