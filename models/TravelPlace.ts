import mongoose, { Schema, model, models } from "mongoose";

const timeSlotSchema = new Schema({
  time: String,
  available: Number,
});

const dateAvailabilitySchema = new Schema({
  date: String,
  timeSlots: [timeSlotSchema],
});

const travelPlaceSchema = new Schema({
  id: Number,
  name: String,
  imageUrl: String,
  location: String,
  description: String,
  price: Number,
  availability: [dateAvailabilitySchema],
});

export const TravelPlace = models.TravelPlace || model("TravelPlace", travelPlaceSchema);
