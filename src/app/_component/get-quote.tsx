import React from "react";
import { Button } from "@nextui-org/button";

const GetQuote = () => {
  return (
    <div className="flex justify-between max-w-screen-2xl mx-auto bg-[#E71E26] h-[128px] rounded-lg p-[30px]">
      <div className="">
        <span className="text-[#FFFFFF] font-bold text-[20px]">
          Ready to Digitally Transform Your Business?
        </span>
        <p className="text-[#FFFFFF] text-[16px] mt-[15px]">
          Our innovative solutions will supercharge your operations and propel
          you into the future.
        </p>
      </div>
      <div className="flex justify-end items-center">
        <Button className="bg-[#ffffff]">
          <p className="flex items-center font-bold text-[14px] text-[#424242]">
            Get a Quote
          </p>
        </Button>
      </div>
    </div>
  );
};

export default GetQuote;
