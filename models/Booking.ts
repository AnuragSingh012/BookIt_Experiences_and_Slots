import mongoose, { Schema, model, models } from "mongoose";

const bookingSchema = new Schema({
  bookingRef: {
    type: String,
    required: true,
    unique: true,
  },
  placeId: {
    type: String,
    required: true,
  },
  experienceName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  promoCode: {
    type: String,
    default: null,
  },
  user: {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  status: {
    type: String,
    enum: ['confirmed', 'cancelled'],
    default: 'confirmed',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Booking = models.Booking || model("Booking", bookingSchema);