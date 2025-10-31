import Navbar from "@/components/Navbar";
import { travelPlaces } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-6 md:px-[124px] py-6 justify-items-center">
          {travelPlaces.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-full max-w-[400px] md:max-w-[280px] h-[312px] rounded-xl overflow-hidden bg-white"
            >

              <Image
                src={item.imageUrl}
                alt={item.name}
                width={280}
                height={170}
                className="w-full h-[170px] object-cover"
              />

              <div className="bg-[#f0f0f0] flex flex-col justify-between pb-4 py-3 px-4 flex-1">
                <div className="flex items-center justify-between w-full">
                  <p className="font-[inter] font-medium text-[16px] leading-[20px] text-[#161616] truncate pr-2">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-center bg-[#D6D6D6] rounded-[4px] px-2 py-1">
                    <span className="font-[inter] font-medium text-[11px] leading-[16px] text-[#161616] truncate">
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="w-full h-8 overflow-hidden">
                  <span className="block font-[inter] text-[12px] leading-[16px] font-normal line-clamp-2 text-[#6c6c6c]">
                      {item.description}
                  </span>
                </div>
                <div className="flex w-full h-[30px] justify-between">
                    <span className="flex items-center gap-[6px]">
                      <span className="font-[inter] font-normal text-[12px] leading-[16px]">From</span>
                      <span className="font-[inter] font-medium text-[20px] leading-[24px] text-[#161616]">₹{item.price}</span>
                    </span>
                    <Link href={`/experiences/${item.id}`}>
                    <button className="w-[99px] h-[30px] bg-[#ffd643] cursor-pointer rounded-[4px]">
                      <span className="flex font-[inter] font-[500] text-[14px] leading-[18px] justify-center items-center">
                        View Details
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
