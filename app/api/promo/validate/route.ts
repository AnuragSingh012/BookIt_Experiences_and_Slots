import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Promo } from '@/models/Promo';

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const { code, total } = body;

    if (!code || !total) {
      return NextResponse.json(
        { success: false, message: 'Promo code and total are required' },
        { status: 400 }
      );
    }

    const promoCode = code.toUpperCase();
    
    const promo = await Promo.findOne({ code: promoCode, active: true });

    if (!promo) {
      return NextResponse.json(
        { success: false, message: 'Invalid or expired promo code' },
        { status: 400 }
      );
    }

    if (total < promo.minTotal) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Minimum purchase of ₹${promo.minTotal} required for this promo code` 
        },
        { status: 400 }
      );
    }

    let discount = 0;
    if (promo.type === 'percent') {
      discount = (total * promo.value) / 100;
    } else if (promo.type === 'flat') {
      discount = Math.min(promo.value, total);
    }

    const newTotal = Math.max(0, total - discount);

    return NextResponse.json(
      {
        success: true,
        message: `Promo code applied! You saved ₹${discount.toFixed(2)}`,
        discount: parseFloat(discount.toFixed(2)),
        newTotal: parseFloat(newTotal.toFixed(2)),
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Promo validation error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to validate promo code' },
      { status: 500 }
    );
  }
}