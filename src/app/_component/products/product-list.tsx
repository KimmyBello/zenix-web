"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { ProductList } from "@/app/_data/product";
const Product = () => {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto mt-[100px]">
      {ProductList.map((product, index) => {
        return (
          <div className="flex items-center mb-[100px]">
            <div className="flex flex-col mr-4">
              <span className=" font-bold text-[24px] text-[#424242]">
                {product.name}
              </span>
              <p className="whitespace-pre-line leading-relaxed w-[315px] mt-[20px] text-[#616161] font-normal text-[16px]">
                {product.title}
              </p>
              <Button className="bg-[#E71E26] w-[105px] mt-[55px]">
                <p className="flex items-center font-bold text-[14px] text-white">
                  Read More
                </p>
              </Button>
            </div>
            <div
              className="h-[350px] w-[350px] bg-cover rounded-lg"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
