export interface TimeSlot {
  time: string;
  available: number;
}

export interface DateAvailability {
  date: string;
  timeSlots: TimeSlot[];
}

export interface TravelPlace {
  id: number;
  name: string;
  imageUrl: string;
  location: string;
  description: string;
  price: number;
  availability: DateAvailability[];
}

export const travelPlaces: TravelPlace[] = [
  {
    id: 1,
    name: "Taj Mahal Experience",
    imageUrl:
      "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=728",
    location: "Uttar Pradesh",
    description:
      "Witness the breathtaking beauty of the Taj Mahal at sunrise and explore the grandeur of Mughal architecture.",
    price: 1499,
    availability: [
      {
        date: "Oct 22",
        timeSlots: [
          { time: "05:30 AM", available: 6 },
          { time: "07:00 AM", available: 8 },
          { time: "09:00 AM", available: 4 },
          { time: "03:00 PM", available: 2 },
        ],
      },
      {
        date: "Oct 25",
        timeSlots: [
          { time: "06:00 AM", available: 7 },
          { time: "08:30 AM", available: 3 },
          { time: "10:30 AM", available: 5 },
          { time: "04:00 PM", available: 4 },
        ],
      },
      {
        date: "Oct 28",
        timeSlots: [
          { time: "06:15 AM", available: 5 },
          { time: "09:30 AM", available: 6 },
          { time: "11:45 AM", available: 2 },
          { time: "05:00 PM", available: 3 },
        ],
      },
      {
        date: "Oct 31",
        timeSlots: [
          { time: "05:45 AM", available: 8 },
          { time: "08:00 AM", available: 5 },
          { time: "10:00 AM", available: 6 },
          { time: "04:30 PM", available: 7 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Backwaters of Kerala",
    imageUrl:
      "https://images.unsplash.com/photo-1523130923377-84727cf0c825?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    location: "Kerala",
    description:
      "Sail through tranquil backwaters in a traditional houseboat surrounded by lush green paddy fields and coconut trees.",
    price: 1799,
    availability: [
      {
        date: "Oct 22",
        timeSlots: [
          { time: "08:00 AM", available: 4 },
          { time: "11:00 AM", available: 6 },
          { time: "02:00 PM", available: 3 },
          { time: "06:00 PM", available: 5 },
        ],
      },
      {
        date: "Oct 25",
        timeSlots: [
          { time: "07:30 AM", available: 5 },
          { time: "10:30 AM", available: 4 },
          { time: "01:30 PM", available: 7 },
          { time: "05:30 PM", available: 3 },
        ],
      },
      {
        date: "Oct 28",
        timeSlots: [
          { time: "09:00 AM", available: 8 },
          { time: "12:00 PM", available: 5 },
          { time: "03:00 PM", available: 4 },
          { time: "06:30 PM", available: 2 },
        ],
      },
      {
        date: "Oct 31",
        timeSlots: [
          { time: "07:00 AM", available: 3 },
          { time: "10:00 AM", available: 6 },
          { time: "01:00 PM", available: 5 },
          { time: "04:30 PM", available: 6 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Desert Safari Adventure",
    imageUrl:
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    location: "Rajasthan",
    description:
      "Ride through golden sand dunes, stay in luxury desert camps, and experience Rajasthani culture and folk music.",
    price: 1999,
    availability: [
      {
        date: "Oct 22",
        timeSlots: [
          { time: "06:30 AM", available: 9 },
          { time: "04:00 PM", available: 7 },
          { time: "06:30 PM", available: 5 },
          { time: "09:00 PM", available: 2 },
        ],
      },
      {
        date: "Oct 25",
        timeSlots: [
          { time: "07:00 AM", available: 6 },
          { time: "03:30 PM", available: 8 },
          { time: "06:00 PM", available: 3 },
          { time: "08:30 PM", available: 4 },
        ],
      },
      {
        date: "Oct 28",
        timeSlots: [
          { time: "05:30 AM", available: 4 },
          { time: "04:00 PM", available: 9 },
          { time: "06:15 PM", available: 5 },
          { time: "08:45 PM", available: 6 },
        ],
      },
      {
        date: "Oct 31",
        timeSlots: [
          { time: "06:45 AM", available: 7 },
          { time: "05:00 PM", available: 4 },
          { time: "07:15 PM", available: 3 },
          { time: "09:00 PM", available: 2 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Himalayan Mountain Escape",
    imageUrl:
      "https://images.unsplash.com/photo-1542557887-456a7f60fc5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    location: "Himachal Pradesh",
    description:
      "Enjoy snow-capped peaks, paragliding adventures, and cozy cafes amidst the scenic valleys of Manali.",
    price: 1899,
    availability: [
      {
        date: "Oct 22",
        timeSlots: [
          { time: "07:00 AM", available: 4 },
          { time: "10:00 AM", available: 3 },
          { time: "01:30 PM", available: 6 },
          { time: "04:00 PM", available: 5 },
        ],
      },
      {
        date: "Oct 25",
        timeSlots: [
          { time: "06:30 AM", available: 8 },
          { time: "09:00 AM", available: 5 },
          { time: "12:00 PM", available: 4 },
          { time: "03:00 PM", available: 7 },
        ],
      },
      {
        date: "Oct 28",
        timeSlots: [
          { time: "07:30 AM", available: 6 },
          { time: "10:30 AM", available: 5 },
          { time: "01:30 PM", available: 3 },
          { time: "05:00 PM", available: 2 },
        ],
      },
      {
        date: "Oct 31",
        timeSlots: [
          { time: "08:00 AM", available: 4 },
          { time: "11:00 AM", available: 7 },
          { time: "02:30 PM", available: 6 },
          { time: "05:30 PM", available: 3 },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Goa Beach Getaway",
    imageUrl:
      "https://images.unsplash.com/photo-1727499031382-407906c7e208?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    location: "Goa",
    description:
      "Relax on sandy beaches, enjoy vibrant nightlife, and explore Portuguese heritage in India’s coastal paradise.",
    price: 1599,
    availability: [
      {
        date: "Oct 22",
        timeSlots: [
          { time: "09:00 AM", available: 5 },
          { time: "12:00 PM", available: 4 },
          { time: "03:00 PM", available: 6 },
          { time: "07:00 PM", available: 9 },
        ],
      },
      {
        date: "Oct 25",
        timeSlots: [
          { time: "10:00 AM", available: 6 },
          { time: "01:00 PM", available: 3 },
          { time: "04:30 PM", available: 5 },
          { time: "08:00 PM", available: 7 },
        ],
      },
      {
        date: "Oct 28",
        timeSlots: [
          { time: "09:30 AM", available: 4 },
          { time: "12:30 PM", available: 6 },
          { time: "03:30 PM", available: 5 },
          { time: "06:30 PM", available: 8 },
        ],
      },
      {
        date: "Oct 31",
        timeSlots: [
          { time: "10:30 AM", available: 7 },
          { time: "01:30 PM", available: 4 },
          { time: "04:30 PM", available: 6 },
          { time: "07:30 PM", available: 9 },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Spiritual Varanasi Tour",
    imageUrl:
      "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    location: "Uttar Pradesh",
    description:
      "Experience the sacred Ganga Aarti, ancient temples, and the spiritual essence of one of the world’s oldest cities.",
    price: 1399,
    availability: [
      {
        date: "Oct 22",
        timeSlots: [
          { time: "05:00 AM", available: 3 },
          { time: "07:30 AM", available: 5 },
          { time: "04:00 PM", available: 6 },
          { time: "07:00 PM", available: 9 },
        ],
      },
      {
        date: "Oct 25",
        timeSlots: [
          { time: "05:30 AM", available: 4 },
          { time: "08:00 AM", available: 7 },
          { time: "04:30 PM", available: 5 },
          { time: "06:30 PM", available: 8 },
        ],
      },
      {
        date: "Oct 28",
        timeSlots: [
          { time: "06:00 AM", available: 6 },
          { time: "09:00 AM", available: 5 },
          { time: "05:00 PM", available: 7 },
          { time: "07:30 PM", available: 4 },
        ],
      },
      {
        date: "Oct 31",
        timeSlots: [
          { time: "05:15 AM", available: 8 },
          { time: "08:30 AM", available: 6 },
          { time: "04:15 PM", available: 5 },
          { time: "06:45 PM", available: 3 },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Tea Gardens of Darjeeling",
    imageUrl:
      "https://images.unsplash.com/photo-1659947450356-6a8ca508a986?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    location: "West Bengal",
    description:
      "Sip world-famous tea amidst misty hills, visit the Himalayan Toy Train, and soak in panoramic Kanchenjunga views.",
    price: 1699,
    availability: [
      {
        date: "Oct 22",
        timeSlots: [
          { time: "06:30 AM", available: 5 },
          { time: "09:00 AM", available: 6 },
          { time: "01:00 PM", available: 4 },
          { time: "03:30 PM", available: 7 },
        ],
      },
      {
        date: "Oct 25",
        timeSlots: [
          { time: "07:00 AM", available: 8 },
          { time: "10:30 AM", available: 5 },
          { time: "12:30 PM", available: 6 },
          { time: "04:30 PM", available: 3 },
        ],
      },
      {
        date: "Oct 28",
        timeSlots: [
          { time: "06:45 AM", available: 4 },
          { time: "09:15 AM", available: 5 },
          { time: "01:15 PM", available: 7 },
          { time: "03:45 PM", available: 6 },
        ],
      },
      {
        date: "Oct 31",
        timeSlots: [
          { time: "07:30 AM", available: 3 },
          { time: "10:00 AM", available: 4 },
          { time: "01:30 PM", available: 6 },
          { time: "04:00 PM", available: 5 },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Andaman Island Escape",
    imageUrl:
      "https://images.unsplash.com/photo-1586184059848-ff03a29ddf97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    location: "Andaman & Nicobar",
    description:
      "Explore coral reefs, white-sand beaches, and crystal-clear waters for an unforgettable tropical island adventure.",
    price: 2599,
    availability: [
      {
        date: "Oct 22",
        timeSlots: [
          { time: "08:00 AM", available: 9 },
          { time: "10:30 AM", available: 5 },
          { time: "02:00 PM", available: 6 },
          { time: "05:30 PM", available: 8 },
        ],
      },
      {
        date: "Oct 25",
        timeSlots: [
          { time: "09:00 AM", available: 7 },
          { time: "11:30 AM", available: 4 },
          { time: "03:00 PM", available: 6 },
          { time: "06:00 PM", available: 5 },
        ],
      },
      {
        date: "Oct 28",
        timeSlots: [
          { time: "08:30 AM", available: 6 },
          { time: "10:45 AM", available: 8 },
          { time: "02:15 PM", available: 5 },
          { time: "05:00 PM", available: 3 },
        ],
      },
      {
        date: "Oct 31",
        timeSlots: [
          { time: "09:15 AM", available: 5 },
          { time: "11:45 AM", available: 4 },
          { time: "03:30 PM", available: 6 },
          { time: "06:15 PM", available: 8 },
        ],
      },
    ],
  },
];
