"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { menu, services, contact, address } from "@/app/_data/footer-data";

type Props = {};

const Footer = (props: Props) => {
  const handleClickShowMaps = () => {
    window.open(
      "https://maps.google.com/?q=13.7999533,100.5750181",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="w-full">
      <div className="flex-grow bg-[#ffffff] flex justify-center">
        <div className="flex flex-col lg:flex-row mt-12 gap-12 w-full max-w-screen-2xl px-4 lg:px-8">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <Image
              src="/assets/images/etc/zenix-logo.png"
              alt="codinghub"
              width={66}
              height={80}
            />
            <div className="font-medium text-base text-[#424242] mt-2 text-center lg:text-left">
              Accelerate Your Business with
            </div>
            <div className="font-medium text-base text-[#424242] mt-2 text-center lg:text-left">
              Cutting-Edge Technology
            </div>
          </div>
          <div className="flex flex-1 flex-col lg:flex-row gap-12">
            <div className="hidden lg:block">
              <div className="text-base font-medium text-[#E71E26] mb-6">
                Menu
              </div>
              {menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="flex text-sm font-light text-[#616161] cursor-pointer mb-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:block">
              <div className="text-base font-medium text-[#E71E26] mb-6">
                Services
              </div>
              {services.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="flex text-sm font-light text-[#616161] cursor-pointer mb-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              <div className="text-base font-medium text-[#E71E26] mb-6 flex flex-col items-center lg:items-start">
                Contact
              </div>
              {contact.map((item, index) => (
                <a
                  href={item.tel === true ? `tel:${item.text}` : "#"}
                  key={index}
                >
                  <div className="flex gap-2.5 mb-4 justify-center lg:justify-start">
                    <Image src={item.icon} alt="icon" width={18} height={18} />
                    <div className="text-[#616161]">{item.text}</div>
                  </div>
                </a>
              ))}
              <div className="flex justify-center lg:justify-start">
                <Button
                  className="rounded-[8px] bg-[#424242] text-[#FFFFFF] mb-10 font-normal text-sm"
                  onClick={handleClickShowMaps}
                >
                  <div className="flex items-center">
                    <Image
                      src="/assets/icons/Shape.png"
                      alt="card"
                      width={18}
                      height={18}
                    />
                    <span className="ml-2">Map</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
