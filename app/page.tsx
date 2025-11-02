"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface TimeSlot {
  time: string;
  available: number;
}

interface DateAvailability {
  date: string;
  timeSlots: TimeSlot[];
}

interface TravelPlace {
  _id: string;
  id: number;
  name: string;
  imageUrl: string;
  location: string;
  description: string;
  price: number;
  availability: DateAvailability[];
}

function HomeContent() {
  const [travelPlaces, setTravelPlaces] = useState<TravelPlace[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await fetch("/api/travel-places");
        const data = await res.json();
        setTravelPlaces(data);
      } catch (err) {
        console.error("Failed to load travel places:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  const filteredPlaces = travelPlaces.filter((place) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      place.name.toLowerCase().includes(query) ||
      place.location.toLowerCase().includes(query) ||
      place.description.toLowerCase().includes(query)
    );
  });

  const SkeletonCard = () => (
    <div className="flex flex-col w-full max-w-[400px] md:max-w-[280px] h-[312px] rounded-xl overflow-hidden bg-white animate-pulse">
      <div className="w-full h-[170px] bg-gray-300" />
      <div className="bg-[#f0f0f0] flex flex-col justify-between pb-4 py-3 px-4 flex-1">
        <div className="flex items-center justify-between w-full">
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>
        <div className="w-full h-8 bg-gray-300 rounded"></div>
        <div className="flex w-full h-[30px] justify-between">
          <div className="h-5 w-24 bg-gray-300 rounded"></div>
          <div className="h-[30px] w-[99px] bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-6 md:px-[124px] py-6 justify-items-center">
        {Array.from({ length: 8 }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div>
      {searchQuery && (
        <div className="max-w-[1440px] mx-auto px-6 md:px-[124px] pt-6">
          <p className="text-[#161616] font-[inter] text-[16px] leading-[20px]">
            {filteredPlaces.length} result
            {filteredPlaces.length !== 1 ? "s" : ""} found for "{searchQuery}"
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-6 md:px-[124px] py-6 justify-items-center">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((item) => (
            <div
              key={item._id}
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
                    <span className="font-[inter] font-normal text-[12px] leading-[16px]">
                      From
                    </span>
                    <span className="font-[inter] font-medium text-[20px] leading-[24px] text-[#161616]">
                      ₹{item.price}
                    </span>
                  </span>
                  <Link href={`/experiences/${item._id}`}>
                    <button className="w-[99px] h-[30px] bg-[#ffd643] cursor-pointer rounded-[4px]">
                      <span className="flex font-[inter] font-[500] text-[14px] leading-[18px] justify-center items-center">
                        View Details
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-[#6c6c6c] font-[inter] text-[16px] leading-[24px]">
              No experiences found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


export default function AppPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
