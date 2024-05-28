"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const Innovation = () => {
  return (
    <div className="flex max-w-screen-lg mx-auto">
      <div className="flex-col">
        <span className="text-[#424242] font-bold text-[32px]">
          Discover Innovation with Us
        </span>
        <div className=" flex flex-col mt-[20px]">
          <span className="text-[#616161] text-[16px] font-normal">
            We leverage digital solution to transform businesses. Our expert
          </span>
          <span className="text-[#616161] text-[16px] font-normal">
            team delivers solutions that enhance efficiency and future-proof
          </span>
          <span className="text-[#616161] text-[16px] font-normal">
            your operations. Partner with us for cutting-edge results.
          </span>
          <span className="text-[#616161] text-[16px] font-normal mt-[10px]">
            Join us in shaping the future of technology.
          </span>
        </div>
        <div className="flex items-center gap-12 mt-[40px]">
          <Link href="/" className="text-[#424242] font-bold text-[14px]">
            Learn More
          </Link>
          <Button className="bg-[#E71E26]">
            <p className="flex items-center font-bold text-[14px] text-white">
              Get in Touch
            </p>
          </Button>
        </div>
      </div>
      <div className="flex flex-col ml-6">
          <Image
            src="/assets/images/homepage/innovation_group.png"
            alt="Innovation"
            width={686}
            height={538}
          />
      </div>
    </div>
  );
};

export default Innovation;
