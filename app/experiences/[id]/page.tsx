"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ExperienceDetail() {
  const { id } = useParams();
  const router = useRouter();
  
  const [place, setPlace] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const res = await fetch("/api/travel-places");
        const data: any[] = await res.json();
        const foundPlace = data.find((p: any) => p._id === id);
        setPlace(foundPlace || null);
        if (foundPlace?.availability?.[0]?.date) {
          setSelectedDate(foundPlace.availability[0].date);
        }
      } catch (err) {
        console.error("Failed to load travel place:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlace();
  }, [id]);

  const selectedAvailability = place?.availability?.find(
    (item: any) => item.date === selectedDate
  );

  const selectedTimeSlot = selectedAvailability?.timeSlots?.find(
    (slot: any) => slot.time === selectedTime
  );


  const isTimeSlotSoldOut = selectedTimeSlot?.available === 0;
  const maxQuantity = selectedTimeSlot?.available || 1;

  const tax = 59;
  const subtotal = place ? place.price * quantity : 0;
  const total = subtotal + tax;

  if (loading) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 md:px-[124px] py-6 animate-pulse">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-[8px]">
            <div className="w-[20px] h-[20px] bg-gray-300 rounded"></div>
            <div className="w-[80px] h-[16px] bg-gray-300 rounded"></div>
          </div>

          <div className="flex flex-col items-center xl:items-start gap-6 xl:flex-row xl:justify-between">
            <div className="w-full flex flex-col gap-6">
              <div className="w-full max-w-[765px] h-[381px] bg-gray-300 rounded-[12px]"></div>
              <div className="flex flex-col gap-[12px]">
                <div className="w-[300px] h-[24px] bg-gray-300 rounded"></div>
                <div className="w-[600px] h-[16px] bg-gray-200 rounded"></div>
                <div className="w-[400px] h-[16px] bg-gray-200 rounded"></div>
                <div className="w-[500px] h-[16px] bg-gray-200 rounded"></div>
              </div>

              <div className="flex flex-col gap-[8px] mt-[16px]">
                <div className="w-[120px] h-[18px] bg-gray-300 rounded"></div>
                <div className="flex gap-[8px] flex-wrap">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[69px] h-[34px] bg-gray-200 rounded-[4px]"
                    ></div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-[8px] mt-[16px]">
                <div className="w-[100px] h-[18px] bg-gray-300 rounded"></div>
                <div className="flex gap-[8px] flex-wrap">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[85px] h-[34px] bg-gray-200 rounded-[4px]"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-[12px] p-[24px] w-full xl:max-w-[387px] lg:max-w-[765px] xl:w-[387px] flex flex-col gap-[16px]">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-[20px] bg-gray-300 rounded"
                ></div>
              ))}
              <div className="w-full h-[44px] bg-gray-300 rounded-[8px]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!place) {
    return <div className="p-8">Experience not found.</div>;
  }

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time slot before continuing.");
      return;
    }

    if (isTimeSlotSoldOut) {
      alert("This time slot is sold out. Please select another time.");
      return;
    }

    const bookingData = {
      name: place.name,
      price: place.price.toString(),
      quantity: quantity.toString(),
      date: selectedDate,
      time: selectedTime,
      total: total.toString(),
    };

    router.push(
      `/checkout/${place._id}?${new URLSearchParams(bookingData).toString()}`
    );
  };

  const isDateSoldOut = (availability: any) => {
    return availability.timeSlots.every((slot: any) => slot.available === 0);
  };


  return (
    <div className="max-w-[1440px] mb-[100px] mx-auto px-6 md:px-[124px] py-6">
      <div className="flex flex-col gap-6">
        {/* Back Navigation */}
        <div>
          <Link className="flex items-center gap-[8px] cursor-pointer" href="/">
          <Image src="/arrow.png" alt="arrow" width={20} height={20} />
            <span className="font-[inter] font-medium leading-[18px]">
              Details
            </span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center xl:items-start gap-6 xl:flex-row xl:justify-between">
          <div className="w-full flex flex-col gap-6">
            <Image
              src={place.imageUrl}
              alt={place.name}
              width={765}
              height={381}
              className="w-full max-w-[765px] h-[381px] object-cover rounded-[12px]"
            />

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
                  {place.availability?.map((item: any, index: number) => {
                    const dateSoldOut = isDateSoldOut(item);
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (!dateSoldOut) {
                            setSelectedDate(item.date);
                            setSelectedTime("");
                          }
                        }}
                        disabled={dateSoldOut}
                        className={`w-[69px] h-[34px] cursor-pointer rounded-[4px] flex justify-center items-center border-[0.6px] 
                          ${
                            selectedDate === item.date && !dateSoldOut
                              ? "bg-[#ffd643] border-[#ffd643] text-[#161616]"
                              : dateSoldOut
                              ? "border-[#e0e0e0] text-[#bdbdbd] cursor-not-allowed opacity-50"
                              : "border-[#bdbdbd] text-[#838383]"
                          } font-[inter] text-[14px] leading-[18px] font-[400]`}
                      >
                        {item.date}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="w-full flex flex-col gap-[12px]">
                <p className="font-[inter] font-[500] text-[18px] leading-[22px] text-[#161616]">
                  Choose time
                </p>

                {selectedAvailability ? (
                  <div className="flex gap-[12px] flex-wrap">
                    {selectedAvailability.timeSlots.map((slot: any, index: number) => {
                      const isSoldOut = slot.available === 0;
                      return (
                        <button
                          key={index}
                          onClick={() => !isSoldOut && setSelectedTime(slot.time)}
                          disabled={isSoldOut}
                          className={`px-[10px] cursor-pointer h-[34px] rounded-[4px] gap-[6px] flex justify-center items-center border-[0.6px] 
                            ${
                              selectedTime === slot.time && !isSoldOut
                                ? "bg-[#ffd643] border-[#ffd643] text-[#161616]"
                                : isSoldOut
                                ? "border-[#e0e0e0] text-[#838383] bg-[#cccccc] cursor-not-allowed"
                                : "border-[#bdbdbd] text-[#838383]"
                            } font-[inter] text-[14px] leading-[18px] font-[400]`}
                        >
                          {slot.time}
                          <span className={`text-[10px] leading-[12px] font-[500] font-[inter] ${
                            isSoldOut ? "text-[#6a6a6a" : "text-[#ff4c0a]"
                          }`}>
                            {isSoldOut ? "Sold out" : `${slot.available} left`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-[#838383] text-sm">
                    No time slots available.
                  </p>
                )}
              </div>
              <p className="font-[inter] font-[400] text-[12px] leading-[16px] text-[#838383]">
                All times are in IST (GMT +5:30)
              </p>
            </div>

            <div className="w-full flex flex-col gap-[12px]">
              <p className="font-[inter] font-[500] text-[18px] leading-[22px] text-[#161616]">
                About
              </p>
              <div className="w-full bg-[#eeeeee] flex px-[12px] py-[8px]">
                <span className="text-[#838383] text-[12px] leading-[16px] font-[inter] font-[400]">
                  Scenic routes, trained guides, and safety briefing. Minimum
                  age 10.
                </span>
              </div>
            </div>
          </div>

          {/* Details Box */}
          <div className="bg-[#efefef] rounded-[12px] p-[24px] flex flex-col gap-[16px] 
                          w-full xl:max-w-[387px] lg:max-w-[765px] xl:w-[387px] flex-shrink-0">
            <div className="flex justify-between items-center">
              <span className="font-[inter] font-[400] text-[#656565] text-[16px] leading-[20px]">
                Starts at
              </span>
              <span className="font-[inter] font-[400] text-[18px] leading-[22px] text-[#161616]">
                ₹{place.price}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-[inter] font-[400] text-[#656565] text-[16px] leading-[20px]">
                Quantity
              </span>
              <div className="flex gap-[9px] items-center">
                <button
                  className="text-[#161616] border border-[#c9c9c9] h-[16px] w-[16px] flex justify-center items-center text-[12px]"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={isTimeSlotSoldOut}
                >
                  -
                </button>
                <span className="font-[inter] font-[400] text-[12px] leading-[14px] text-[#161616]">
                  {quantity}
                </span>
                <button
                  className="text-[#161616] border border-[#c9c9c9] h-[16px] w-[16px] flex justify-center items-center text-[12px]"
                  onClick={() => setQuantity((q) => Math.min(maxQuantity, q + 1))}
                  disabled={isTimeSlotSoldOut}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-[inter] font-[400] text-[#656565] text-[16px] leading-[20px]">
                Subtotal
              </span>
              <span className="font-[inter] font-[400] text-[14px] leading-[20px] text-[#161616]">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-[inter] font-[400] text-[#656565] text-[16px] leading-[20px]">
                Taxes
              </span>
              <span className="font-[inter] font-[400] text-[18px] leading-[22px] text-[#161616]">
                ₹{tax.toLocaleString("en-IN")}
              </span>
            </div>

            <hr className="w-full h-[1px] bg-[#D9D9D9] border-0 opacity-100" />

            <div className="flex justify-between items-center">
              <span className="font-[inter] font-[500] text-[#161616] text-[20px] leading-[24px]">
                Total
              </span>
              <span className="font-[inter] font-[500] text-[#161616] text-[20px] leading-[24px]">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              className={`font-[inter] font-[500] text-[16px] leading-[20px] w-full h-[44px] rounded-[8px] bg-[#ffd643] mt-[4px] cursor-pointer disabled:bg-[#d7d7d7] disabled:text-[#7f7f7f] disabled:cursor-not-allowed`}
              disabled={!selectedDate || !selectedTime || isTimeSlotSoldOut}
              onClick={handleConfirm}
            >
              {isTimeSlotSoldOut ? "Sold Out" : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}