import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";

const DigitalProduct = () => {
  return (
    <div className="flex max-w-screen-lg mx-auto mt-[50px]">
      <div className="flex-1">
        <span className="text-[#424242] font-bold text-[24px]">
          Digital Products
        </span>
        <p className="text-[#616161] text-[16px] font-normal">
          We leverage digital solution to transform businesses. Our expert
        </p>
        <p className="text-[#616161] text-[16px] font-normal">
          designed to elevate your business efficiency and engagement. From
        </p>
        <p className="text-[#616161] text-[16px] font-normal">
          mobile applications to sophisticated software tools, our products
        </p>
        <p className="text-[#616161] text-[16px] font-normal">
          integrate seamlessly into your existing systems to drive growth.
        </p>
        <Button className="bg-[#E71E26] mt-[50px]">
          <p className="flex items-center font-bold text-[14px] text-white">
            Request a Demo
          </p>
        </Button>
      </div>
      <div className="flex-1">
        <Image
          src="/assets/images/homepage/digitalproduct.png"
          alt="image"
          width={414}
          height={300}
        />
      </div>
    </div>
  );
};

export default DigitalProduct;
