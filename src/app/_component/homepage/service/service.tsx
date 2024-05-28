"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MenuSertVice } from "@/app/_data/service";
import DigitalProduct from "@/app/_component/homepage/service/digi-product";

const Service = () => {
  const [currentTabs, setCurrentTabs] = useState("Digital Products");

  return (
    <div>
      <div className="flex max-w-screen-lg mx-auto justify-center mt-[80px]">
        <span className="text-[#424242] font-bold text-[32px] text-center">
          We offer many services as a solution
        </span>
      </div>
      <nav>
        <div className="container mx-auto flex justify-center space-x-40 mt-[50px]">
          {MenuSertVice.map((item, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <Image
                src={currentTabs === item.text ? item.current_icon : item.icon}
                alt={item.text}
                width={24}
                height={24}
              />
              <a
                onClick={() => setCurrentTabs(item.text)}
                className={`${
                  currentTabs === item.text
                    ? "text-red-500 font-bold border-b-2 border-red-500"
                    : ""
                } px-2 py-3`}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
      </nav>
      <hr />
      {currentTabs === "Digital Products" && <DigitalProduct />}
    </div>
  );
};

export default Service;
