import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#F9F9F9] shadow-[0_2px_16px_0_#0000001A]">
      <div
        className="
          max-w-[1440px] mx-auto 
          flex flex-col md:flex-row 
          justify-center md:justify-between 
          items-center px-6 md:px-[124px] py-4 gap-4
        "
      >

        <Image
          src="/Hdlogo.png"
          alt="logo"
          width={100}
          height={55}
          className="object-contain"
        />


        <div className="flex justify-center md:justify-end w-full md:w-[443px] h-[42px] gap-3">
          <input
            type="text"
            placeholder="Search experiences"
            className="
              w-[340px] h-[42px] 
              rounded bg-[#EDEDED] px-3
              text-[14px] leading-[18px] font-normal font-[Inter]
              placeholder:text-[#727272] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[18px]
              focus:outline-none
            "
          />

          <button className="bg-[#FFD643] font-[inter] rounded-lg px-5 text-sm font-medium h-[42px] whitespace-nowrap text-[14px] leading-[18px] text-[#161616] cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
