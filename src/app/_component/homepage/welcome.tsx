"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center h-full bg-gradient-to-t from-[#FFFFFF] to-transparent">
      <div className="mt-[80px]">
        <Image
          src="/assets/images/etc/logo.svg"
          alt="zenix logo"
          width={133}
          height={160}
        />
      </div>
      <p className="text-[#E71E26] text-center font-bold text-[40px] mt-[40px]">
        Accelerate Your Business
      </p>
      <p className="text-[#E71E26] text-center font-bold text-[40px]">
        with Cutting-Edge Technology{" "}
      </p>
      <p className="mb-3 text-base text-[#424242] text-[20px] mt-[20px]">
        Unlock the full potential of your operations with Zenix, where
        innovation meets
      </p>
      <p className="mb-3 text-base text-[#424242] text-[20px]">
        efficiency. Experience transformative solutions tailored to drive growth
        and
      </p>
      <p className="mb-3 text-base text-[#424242] text-[20px]">
        enhance performance in your industry.
      </p>
      <div className="flex items-center justify-center gap-12 mt-[73px]">
        <Link href="/">
          <p className="text-[#424242] font-bold text-[14px]">Show Case</p>
        </Link>
        <Button className="bg-[#E71E26]">
          <p className="flex items-center font-bold text-[14px] text-white">
            Explore Our Solution
          </p>
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
