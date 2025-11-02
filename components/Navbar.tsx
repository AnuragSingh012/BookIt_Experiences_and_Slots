"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F9F9F9] shadow-[0_2px_16px_0_#0000001A] z-50">
      <div
        className="
          max-w-[1440px] mx-auto 
          flex flex-col md:flex-row 
          justify-center md:justify-between 
          items-center px-6 md:px-[124px] py-4 gap-4
        "
      >
        <Link href="/">
          <Image
            src="/HDlogo.png"
            alt="logo"
            width={100}
            height={55}
            className="object-contain"
          />
        </Link>

        <div className="flex justify-center md:justify-end w-full md:w-[443px] h-[42px] gap-3">
          <input
            type="text"
            placeholder="Search experiences"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="
              w-[340px] h-[42px] 
              rounded bg-[#EDEDED] px-3
              text-[14px] leading-[18px] font-normal font-[Inter]
              placeholder:text-[#727272] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[18px]
              focus:outline-none
            "
          />

          <button 
            onClick={handleSearch}
            className="bg-[#FFD643] font-[inter] rounded-lg px-5 text-sm font-medium h-[42px] whitespace-nowrap text-[14px] leading-[18px] text-[#161616] cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}