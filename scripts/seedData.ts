import { connectDB } from "@/lib/mongodb";
import { TravelPlace } from "@/models/TravelPlace";
import { travelPlaces } from "@/constants/data";

async function seedDatabase() {
  await connectDB();

  console.log("🧹 Clearing existing data...");
  await TravelPlace.deleteMany({});

  console.log("🌱 Inserting travel places...");
  await TravelPlace.insertMany(travelPlaces);

  console.log("✅ Data inserted successfully!");
  process.exit(0);
}

seedDatabase().catch((err) => {
  console.error("❌ Error seeding database:", err);
  process.exit(1);
});
