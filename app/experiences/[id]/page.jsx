"use client";
import { travelPlaces } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ExperienceDetail() {
  const { id } = useParams();
  const place = travelPlaces.find((p) => p.id.toString() === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState(
    place?.availability?.[0]?.date || ""
  );
  const [selectedTime, setSelectedTime] = useState("");

  const selectedAvailability = place?.availability.find(
    (item) => item.date === selectedDate
  );

  const tax = 59;
  const subtotal = place ? place.price * quantity : 0;
  const total = subtotal + tax;

  if (!place) return <div className="p-8">Experience not found.</div>;

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[124px] py-6">
      <div className="flex flex-col gap-6">
        {/* Back Navigation */}
        <div className="flex items-center gap-[8px] cursor-pointer">
          <Image src="/arrow.png" alt="arrow" width={20} height={20} />
          <Link href="/">
            <span className="font-[inter] font-medium leading-[18px]">Details</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center xl:items-start gap-6 xl:flex-row xl:justify-between">
          <div className="w-full flex flex-col gap-6">
            {/* Image */}
            <Image
              src={place.imageUrl}
              alt={place.name}
              width={765}
              height={381}
              className="w-full max-w-[765px] h-[381px] object-cover rounded-[12px]"
            />

            {/* Info Section */}
            <div className="flex flex-col justify-between gap-[16px]">
              <p className="font-[inter] text-[24px] leading-[32px] text-[#161616] font-[500]">
                {place.name}
              </p>
              <p className="max-w-[765px] font-[inter] font-[400] text-[16px] leading-[24px] text-[#6c6c6c]">
                {place.description}
              </p>

              {/* Choose Date */}
              <div className="w-full flex flex-col gap-[12px]">
                <p className="font-[inter] font-[500] text-[18px] leading-[22px] text-[#161616]">
                  Choose date
                </p>
                <div className="flex gap-[16px] flex-wrap">
                  {place.availability?.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedDate(item.date);
                        setSelectedTime("");
                      }}
                      className={`w-[69px] h-[34px] rounded-[4px] flex justify-center items-center border-[0.6px] 
                        ${
                          selectedDate === item.date
                            ? "bg-[#ffd643] border-[#ffd643] text-[#161616]"
                            : "border-[#bdbdbd] text-[#838383]"
                        } font-[inter] text-[14px] leading-[18px] font-[400]`}
                    >
                      {item.date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="w-full flex flex-col gap-[12px]">
                <p className="font-[inter] font-[500] text-[18px] leading-[22px] text-[#161616]">
                  Choose time
                </p>

                {selectedAvailability ? (
                  <div className="flex gap-[12px] flex-wrap">
                    {selectedAvailability.timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`px-[10px] h-[34px] rounded-[4px] gap-[6px] flex justify-center items-center border-[0.6px] 
                          ${
                            selectedTime === slot.time
                              ? "bg-[#ffd643] border-[#ffd643] text-[#161616]"
                              : "border-[#bdbdbd] text-[#838383]"
                          } font-[inter] text-[14px] leading-[18px] font-[400]`}
                      >
                        {slot.time}
                        <span className="text-[10px] leading-[12px] font-[500] font-[inter] text-[#ff4c0a]">{slot.available} left</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#838383] text-sm">No time slots available.</p>
                )}
              </div>
              <p className="font-[inter] font-[400] text-[12px] leading-[16px] text-[#838383]">All times are in IST (GMT +5:30)</p>
            </div>

            <div className="w-full flex flex-col gap-[12px]">
              <p className="font-[inter] font-[500] text-[18px] leading-[22px] text-[#161616]">About</p>
              <div className="w-full h-[32px] bg-[#eeeeee] flex px-[12px] py-[8px]">
                <span className="text-[#838383] text-[12px] leading-[16px] font-[inter] font-[400]">Scenic routes, trained guides, and safety briefing. Minimum age 10.</span>
              </div>
            </div>
          </div>

          {/* Details Box */}
          <div className="bg-[#efefef] rounded-[12px] p-[24px] flex flex-col gap-[16px] 
                          w-full xl:max-w-[387px] lg:max-w-[765px] xl:w-[387px] flex-shrink-0">
            {/* Price */}
            <div className="flex justify-between items-center">
              <span className="font-[inter] font-[400] text-[#656565] text-[16px] leading-[20px]">
                Starts at
              </span>
              <span className="font-[inter] font-[400] text-[18px] leading-[22px] text-[#161616]">
                ₹{place.price}
              </span>
            </div>

            {/* Quantity */}
            <div className="flex justify-between items-center">
              <span className="font-[inter] font-[400] text-[#656565] text-[16px] leading-[20px]">
                Quantity
              </span>
              <div className="flex gap-[9px] items-center">
                <button
                  className="text-[#161616] border border-[#c9c9c9] h-[16px] w-[16px] flex justify-center items-center text-[12px]"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="font-[inter] font-[400] text-[12px] leading-[14px] text-[#161616]">
                  {quantity}
                </span>
                <button
                  className="text-[#161616] border border-[#c9c9c9] h-[16px] w-[16px] flex justify-center items-center text-[12px]"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="font-[inter] font-[400] text-[#656565] text-[16px] leading-[20px]">
                Subtotal
              </span>
              <span className="font-[inter] font-[400] text-[14px] leading-[20px] text-[#161616]">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Taxes */}
            <div className="flex justify-between items-center">
              <span className="font-[inter] font-[400] text-[#656565] text-[16px] leading-[20px]">
                Taxes
              </span>
              <span className="font-[inter] font-[400] text-[18px] leading-[22px] text-[#161616]">
                ₹{tax.toLocaleString("en-IN")}
              </span>
            </div>

            <hr className="w-full h-[1px] bg-[#D9D9D9] border-0 opacity-100" />

            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="font-[inter] font-[500] text-[#161616] text-[20px] leading-[24px]">
                Total
              </span>
              <span className="font-[inter] font-[500] text-[20px] leading-[24px] text-[#161616]">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Confirm Button */}
            <button
              className="w-full h-[44px] rounded-[8px] bg-[#ffd643] mt-[4px] cursor-pointer"
              disabled={!selectedDate || !selectedTime}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
