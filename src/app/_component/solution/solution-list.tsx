"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { SolutionList } from "@/app/_data/solutions";

const SolutionsList = () => {
  return (
    <div className="flex flex-wrap max-w-screen-2xl mx-auto gap-[70px] justify-center mt-[80px]">
      {SolutionList.map((solution, index) => (
        <div className="flex flex-col w-[380px] h-[552px] shadow-2xl items-center p-[20px]" key={index}>
          <Image
            src={solution.image}
            alt="Innovation"
            width={340}
            height={230}
            style={{ borderRadius: "16px" }}
          />
          <p className="text-[20px] text-[#E71E26] font-bold text-center mt-[20px]">
            {solution.fullName}
          </p>
          <p className="text-[20px] text-[#E71E26] font-bold text-center">
            {solution.nickName}
          </p>
          <div className="flex flex-grow mt-[10px]">
            <p className="whitespace-pre-line leading-relaxed text-gray-700 w-[315px] text-center">
              {solution.title}
            </p>
          </div>
          <Button className="bg-[#E71E26] w-full">
            <p className="flex items-center font-bold text-[14px] text-white">
              Contact for detail
            </p>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SolutionsList;
