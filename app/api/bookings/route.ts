import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Booking } from '@/models/Booking';
import { TravelPlace } from '@/models/TravelPlace';

function generateBookingRef() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `BK${timestamp}${random}`.toUpperCase();
}

export async function POST(request: Request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { placeId, name, date, time, quantity, price, subtotal, tax, total, promoCode, user } = body;

    if (!placeId || !name || !date || !time || !quantity || !user?.fullName || !user?.email) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const experience = await TravelPlace.findById(placeId);
    
    if (!experience) {
      return NextResponse.json(
        { success: false, message: 'Experience not found' },
        { status: 404 }
      );
    }

    const dateAvailability = experience.availability.find((avail: any) => avail.date === date);
    
    if (!dateAvailability) {
      return NextResponse.json(
        { success: false, message: 'Date not available' },
        { status: 400 }
      );
    }

    const timeSlot = dateAvailability.timeSlots.find((slot: any) => slot.time === time);
    
    if (!timeSlot) {
      return NextResponse.json(
        { success: false, message: 'Time slot not found' },
        { status: 400 }
      );
    }

    if (timeSlot.available < quantity) {
      return NextResponse.json(
        { success: false, message: `Only ${timeSlot.available} slots available` },
        { status: 400 }
      );
    }

    timeSlot.available -= quantity;
    await experience.save();

    const bookingRef = generateBookingRef();

    const booking = await Booking.create({
      bookingRef,
      placeId,
      experienceName: name,
      date,
      time,
      quantity,
      price,
      subtotal,
      tax,
      total,
      promoCode,
      user: {
        fullName: user.fullName,
        email: user.email,
      },
      status: 'confirmed',
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Booking confirmed successfully',
        bookingRef,
        bookingId: booking._id.toString()
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to create booking' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const bookingRef = searchParams.get('ref');
    const email = searchParams.get('email');

    let query: any = {};
    if (bookingRef) {
      query.bookingRef = bookingRef;
    } else if (email) {
      query['user.email'] = email;
    } else {
      return NextResponse.json(
        { success: false, message: 'Please provide booking reference or email' },
        { status: 400 }
      );
    }

    const bookings = await Booking.find(query).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, bookings },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Fetch booking error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}