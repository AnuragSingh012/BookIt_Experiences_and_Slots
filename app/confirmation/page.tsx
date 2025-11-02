"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface BookingData {
  bookingRef: string;
  experienceName: string;
  date: string;
  time: string;
  quantity: number;
  total: number;
  status: string;
  promoCode?: string;
  user: {
    fullName: string;
    email: string;
  };
}

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const bookingRef = searchParams.get("ref");
  const name = searchParams.get("name");
  const email = searchParams.get("email");

  const [booking, setBooking] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (bookingRef) {
      fetchBookingDetails();
    }
  }, [bookingRef]);

  const fetchBookingDetails = async () => {
    try {
      const res = await fetch(`/api/bookings?ref=${bookingRef}`);
      const data = await res.json();
      if (data.success && data.bookings.length > 0) {
        setBooking(data.bookings[0]);
      }
    } catch (error) {
      console.error("Error fetching booking:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-[1440px] h-full flex justify-center items-center mx-auto px-6 md:px-[124px] py-12 text-center">
        <p>Loading booking details...</p>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="max-w-[1440px] h-full mx-auto px-6 md:px-[124px] py-12 text-center">
        <p>Booking not found</p>
        <Link href="/" className="text-blue-600 underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[124px] py-12 flex flex-col justify-center items-center gap-6">
      <Image src="/tick.png" alt="confirm" width={70} height={70} />
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="font-[inter] font-[500] text-[32px] leading-[40px] text-[#161616]">
          Booking Confirmed
        </p>
        <p className="font-[inter] text-[20px] leading-[24px] font-[400] text-[#656565]">
          Ref ID: {booking.bookingRef}
        </p>
      </div>
      <Link
        className="rounded-[4px] px-[16px] py-[8px] bg-[#e3e3e3] text-[16px] leading-[20px] font-[400] font-[inter] text-[#656565]"
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading confirmation...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
