import mongoose, { Schema, model, models } from "mongoose";

const promoSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  type: {
    type: String,
    enum: ['percent', 'flat'],
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  minTotal: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Promo = models.Promo || model("Promo", promoSchema);