import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { TravelPlace } from "@/models/TravelPlace";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await connectDB();

    const place = await TravelPlace.findById(id);
    if (!place) {
      return NextResponse.json(
        { error: "Travel place not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(place);
  } catch (error: any) {
    console.error("Error fetching travel place:", error);
    return NextResponse.json(
      { error: "Failed to fetch travel place" },
      { status: 500 }
    );
  }
}
