import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BookIt",
  description: "explore travel experiences, select available slots, and complete bookings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
          <Navbar/>
        <main className="bg-[#F9F9F9] md:pt-[90px] pt-[150px]">
        {children}
        </main>
      </body>
    </html>
  );
}
