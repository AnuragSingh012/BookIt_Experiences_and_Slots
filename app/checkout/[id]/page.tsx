"use client";
import { useSearchParams, useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CheckoutPage() {
  const [checked, setChecked] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [newTotal, setNewTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const quantity = searchParams.get("quantity");
  const price = searchParams.get("price");
  const total = searchParams.get("total");

  const tax = 59;
  const subtotal = Number(price) * Number(quantity);
  
  const effectiveTotal = newTotal ?? Number(total);

  if (!name || !date || !time || !quantity || !price || !total)
    return <div className="p-8">Invalid booking details.</div>;

  const handlePromoApply = async () => {
    if (!promoCode) return alert("Please enter a promo code.");

    try {
      const res = await fetch("/api/promo/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: promoCode, total: Number(total) }),
      });
      const data = await res.json();
      if (data.success) {
        setDiscount(data.discount);
        setNewTotal(data.newTotal);
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch {
      alert("Something went wrong. Try again.");
    }
  };

  const handlePayment = async () => {
    if (!checked) return alert("Please agree to the terms first.");
    if (!fullName.trim() || !email.trim())
      return alert("Please enter your full name and email.");
    if (!email.includes("@")) return alert("Please enter a valid email.");

    const bookingData = {
      placeId: id,
      name,
      date,
      time,
      quantity: Number(quantity),
      price: Number(price),
      subtotal: subtotal,
      tax: tax,
      total: effectiveTotal,
      promoCode: promoCode || null,
      user: { fullName, email },
    };

    setLoading(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      const result = await res.json();
      if (result.success) {
        router.push(`/confirmation?ref=${result.bookingRef}&name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}`);
      } else {
        alert("❌ Booking failed: " + result.message);
      }
    } catch (error: any) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-[124px] py-6">
      <div className="w-full flex flex-col gap-6">
        {/* Back Nav */}
          <Link href={`/experiences/${id}`}>
        <div className="flex items-center gap-[8px] cursor-pointer">
          <Image src="/arrow.png" alt="arrow" width={20} height={20} />
            <span className="font-[inter] font-medium leading-[18px]">Checkout</span>
        </div>
          </Link>

        <div className="flex flex-col lg:flex-row gap-[24px] w-full">
          {/* FORM */}
          <div className="w-full lg:w-[65%]">
            <div className="max-w-[739px] py-[20px] px-[24px] flex flex-col gap-[16px] bg-[#efefef] rounded-[12px]">
              <div className="flex lg:flex-row flex-col w-full gap-[24px]">
                <div className="flex flex-col gap-[8px] w-full">
                  <label className="text-sm text-[#5b5b5b]">Full name</label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="rounded-[6px] outline-none focus:outline-none focus:ring-0 py-[12px] px-[16px] bg-[#dddddd]"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-[8px] w-full">
                  <label className="text-sm text-[#5b5b5b]">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-[6px] outline-none focus:outline-none focus:ring-0 py-[12px] px-[16px] bg-[#dddddd]"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <p className="text-[12px] text-[#5b5b5b]">Use coupon SAVE100 to get ₹100 off your order!</p>
              {/* Promo */}
              <div className="flex gap-[16px] flex-col sm:flex-row">
                <input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="rounded-[6px] outline-none focus:outline-none focus:ring-0 w-full py-[12px] px-[16px] bg-[#dddddd]"
                  type="text"
                  placeholder="Promo code"
                />
                <button
                  onClick={handlePromoApply}
                  className="w-full sm:w-[80px] h-[42px] cursor-pointer rounded-[8px] flex justify-center items-center bg-[#161616] text-[#f9f9f9]"
                >
                  Apply
                </button>
              </div>

              {/* Terms */}
              <div className="flex items-center space-x-2">
                <input
                  id="agree"
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="w-[12px] h-[12px] accent-[#161616] cursor-pointer"
                />
                <label htmlFor="agree" className="text-[12px] text-[#5b5b5b]">
                  I agree to the terms and safety policy
                </label>
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="w-full lg:w-[35%]">
            <div className="bg-[#efefef] rounded-[12px] p-[24px] flex flex-col gap-[16px] w-full xl:max-w-[387px]">
              <div className="flex justify-between"><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#656565]">Experience</span><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#161616]">{name}</span></div>
              <div className="flex justify-between"><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#656565]">Date</span><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#161616]">{date}</span></div>
              <div className="flex justify-between"><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#656565]">Time</span><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#161616]">{time}</span></div>
              <div className="flex justify-between"><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#656565]">Qty</span><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#161616]">{quantity}</span></div>
              <div className="flex justify-between"><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#656565]">Subtotal</span><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#161616]">₹{subtotal.toLocaleString("en-IN")}</span></div>
              <div className="flex justify-between"><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#656565]">Taxes</span><span className="font-[inter] font-[400] text-[16px] leading-[20px] text-[#161616]">₹{tax.toLocaleString("en-IN")}</span></div>

              {discount > 0 && (
                <div className="flex justify-between text-green-700">
                  <span>Discount</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}

              <hr className="border-t border-gray-300" />
              <div className="flex justify-between font-semibold text-lg">
                <span className="font-[inter] font-[500] text-[20px] leading-[24px] text-[#161616]">Total</span>
                <span className="font-[inter] font-[500] text-[20px] leading-[24px] text-[#161616]">₹{effectiveTotal.toLocaleString("en-IN")}</span>
              </div>

              <button
                onClick={handlePayment}
                disabled={!checked || loading}
                className={`w-full h-[44px] cursor-pointer rounded-[8px] mt-[4px] font-[inter] font-[500] text-[16px] leading-[20px] ${
                  checked ? "bg-[#ffd643] text-[#161616]" : "bg-[#d7d7d7] text-[#7f7f7f] cursor-not-allowed"
                }`}
              >
                {loading ? "Processing..." : "Pay & Confirm"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}