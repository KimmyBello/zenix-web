"use client";
import React from "react";
import Image from "next/image";
import { BrandList } from "@/app/_data/brand";

const WorkWithBrand = () => {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto mb-[90px]">
      <div className="flex max-w-screen-lg mx-auto justify-center mt-[80px]">
        <span className="text-[#424242] font-bold text-[32px] text-center">
          We work with the most innovative brands.
        </span>
      </div>
      <div className="flex justify-center mt-[20px]">
        <p className="text-[#616161] text-[16px] font-normal">
          We&apos;re honored to collaborate with forward-thinking organizations
          on the cutting-edge of digital transformation.
        </p>
      </div>
      <div className="flex gap-[20px]">
        {BrandList.map((brand, index) => (
          <div className="flex-1" key={index}>
            <Image
              src={brand.icon}
              alt={brand.name}
              width={48}
              height={48}
              style={{ marginTop: brand.maginTop }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkWithBrand;
