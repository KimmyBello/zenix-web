"use client";
import React from "react";
import { SolutionList } from "@/app/_data/solutions";

const SulutionCount = () => {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto ">
      <div className="flex justify-center gap-5">
        <div className="p-[30px] shadow-2xl bg-[#ffffff] hover:bg-[#E71E26] w-[197px] h-[150px] group">
          <p className="text-[32px] text-[#E71E26] font-bold group-hover:text-[#ffffff]">
            {SolutionList.length}
          </p>
          <p className="text-[20px] text-[#E71E26] font-bold group-hover:text-[#ffffff]">
            Solutions
          </p>
        </div>
        <div className="p-[30px] shadow-2xl bg-[#ffffff] hover:bg-[#E71E26] w-[197px] h-[150px] group">
          <p className="text-[32px] text-[#E71E26] font-bold group-hover:text-[#ffffff]">
            10
          </p>
          <p className="text-[20px] text-[#E71E26] font-bold group-hover:text-[#ffffff]">
            Clients
          </p>
        </div>
        <div className="p-[30px] shadow-2xl bg-[#ffffff] hover:bg-[#E71E26] w-[197px] h-[150px] group">
          <p className="text-[32px] text-[#E71E26] font-bold group-hover:text-[#ffffff]">
            10
          </p>
          <p className="text-[20px] text-[#E71E26] font-bold group-hover:text-[#ffffff]">
            Partners
          </p>
        </div>
      </div>
    </div>
  );
};

export default SulutionCount;
