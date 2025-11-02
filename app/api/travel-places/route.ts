import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { TravelPlace } from "@/models/TravelPlace";

export async function GET() {
  try {
    await connectDB();
    const places = await TravelPlace.find();
    return NextResponse.json(places);
  } catch (error) {
    console.error("Error fetching travel places:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
