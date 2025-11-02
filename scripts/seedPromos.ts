import { connectDB } from "../lib/mongodb";
import { Promo } from "../models/Promo";

async function seed() {
  await connectDB();

  const promos = [
    { code: "WELCOME10", type: "percent", value: 10, minTotal: 0, active: true },
    { code: "SAVE100", type: "flat", value: 100, minTotal: 500, active: true },
    { code: "FIRST20", type: "percent", value: 20, minTotal: 1000, active: true },
    { code: "EXPLORER15", type: "percent", value: 15, minTotal: 0, active: true },
    { code: "FLAT200", type: "flat", value: 200, minTotal: 2000, active: true },
  ];

  for (const p of promos) {
    await Promo.findOneAndUpdate({ code: p.code }, p, { upsert: true });
  }
  
  console.log("✅ Seeded promo codes successfully");
  process.exit(0);
}

seed().catch((e) => {
  console.error("❌ Error seeding promos:", e);
  process.exit(1);
});