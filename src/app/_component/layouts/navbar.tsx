"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("Home");

  const links = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Digital Products", url: "/digital-products" },
    { text: "Solutions", url: "/solutions" },
    { text: "Showcase", url: "/showcase" },
    { text: "Contact", url: "/contact" },
  ];

  useEffect(() => {
    // ตั้งค่า currentPage โดยอิงจากเส้นทางปัจจุบัน
    const currentLink = links.find(link => link.url === pathname);
    if (currentLink) {
      setCurrentPage(currentLink.text);
    }
  }, [pathname]);

  return (
    <nav className="w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center rounded-full bg-white shadow-2xl justify-between h-16">
          {links.map((link, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center pl-2 pr-2 h-2/3"
            >
              <Link
                key={index}
                href={link.url}
                onClick={() => setCurrentPage(link.text)}
                className={`${
                  currentPage === link.text
                    ? "bg-red-500 text-white font-bold"
                    : "bg-white text-[#212121]"
                } px-3 py-2 rounded-full text-sm font-medium`}
              >
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
