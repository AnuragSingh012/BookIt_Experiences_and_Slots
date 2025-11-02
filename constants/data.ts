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
    name: "Majestic Taj Sunrise Tour",
    imageUrl:
      "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=728",
    location: "Agra, Uttar Pradesh",
    description:
      "Start your morning with the golden glow over the Taj Mahal. Explore the Mughal legacy and capture once-in-a-lifetime moments during this guided sunrise experience.",
    price: 1599,
    availability: [
      {
        date: "Nov 5",
        timeSlots: [
          { time: "05:30 AM", available: 8 },
          { time: "07:00 AM", available: 5 },
          { time: "09:00 AM", available: 4 },
          { time: "03:00 PM", available: 3 },
        ],
      },
      {
        date: "Nov 8",
        timeSlots: [
          { time: "06:00 AM", available: 7 },
          { time: "08:30 AM", available: 6 },
          { time: "10:30 AM", available: 3 },
          { time: "04:00 PM", available: 5 },
        ],
      },
      {
        date: "Nov 11",
        timeSlots: [
          { time: "06:15 AM", available: 6 },
          { time: "09:30 AM", available: 5 },
          { time: "11:45 AM", available: 4 },
          { time: "05:00 PM", available: 4 },
        ],
      },
      {
        date: "Nov 14",
        timeSlots: [
          { time: "05:45 AM", available: 7 },
          { time: "08:00 AM", available: 6 },
          { time: "10:00 AM", available: 5 },
          { time: "04:30 PM", available: 7 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Kerala Backwater Cruise",
    imageUrl:
      "https://images.unsplash.com/photo-1523130923377-84727cf0c825?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    location: "Alleppey, Kerala",
    description:
      "Float through the tranquil backwaters on a traditional houseboat, surrounded by palm trees, serene canals, and village life at its purest.",
    price: 1899,
    availability: [
      {
        date: "Nov 5",
        timeSlots: [
          { time: "08:00 AM", available: 4 },
          { time: "11:00 AM", available: 6 },
          { time: "02:00 PM", available: 5 },
          { time: "06:00 PM", available: 4 },
        ],
      },
      {
        date: "Nov 8",
        timeSlots: [
          { time: "07:30 AM", available: 5 },
          { time: "10:30 AM", available: 4 },
          { time: "01:30 PM", available: 6 },
          { time: "05:30 PM", available: 5 },
        ],
      },
      {
        date: "Nov 11",
        timeSlots: [
          { time: "09:00 AM", available: 8 },
          { time: "12:00 PM", available: 5 },
          { time: "03:00 PM", available: 3 },
          { time: "06:30 PM", available: 2 },
        ],
      },
      {
        date: "Nov 14",
        timeSlots: [
          { time: "07:00 AM", available: 3 },
          { time: "10:00 AM", available: 6 },
          { time: "01:00 PM", available: 5 },
          { time: "04:30 PM", available: 7 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Rajasthan Desert Safari",
    imageUrl:
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    location: "Jaisalmer, Rajasthan",
    description:
      "Ride over golden dunes, enjoy camel safaris, folk dance performances, and an unforgettable night under the desert stars.",
    price: 2099,
    availability: [
      {
        date: "Nov 5",
        timeSlots: [
          { time: "06:30 AM", available: 8 },
          { time: "04:00 PM", available: 6 },
          { time: "06:30 PM", available: 5 },
          { time: "09:00 PM", available: 3 },
        ],
      },
      {
        date: "Nov 8",
        timeSlots: [
          { time: "07:00 AM", available: 5 },
          { time: "03:30 PM", available: 7 },
          { time: "06:00 PM", available: 4 },
          { time: "08:30 PM", available: 3 },
        ],
      },
      {
        date: "Nov 11",
        timeSlots: [
          { time: "05:30 AM", available: 5 },
          { time: "04:00 PM", available: 8 },
          { time: "06:15 PM", available: 4 },
          { time: "08:45 PM", available: 5 },
        ],
      },
      {
        date: "Nov 14",
        timeSlots: [
          { time: "06:45 AM", available: 6 },
          { time: "05:00 PM", available: 4 },
          { time: "07:15 PM", available: 3 },
          { time: "09:00 PM", available: 3 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Manali Mountain Escape",
    imageUrl:
      "https://images.unsplash.com/photo-1542557887-456a7f60fc5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    location: "Manali, Himachal Pradesh",
    description:
      "Explore snow-covered peaks, adventure trails, and cozy mountain cafes with breathtaking views of the Himalayas.",
    price: 1799,
    availability: [
      {
        date: "Nov 5",
        timeSlots: [
          { time: "07:00 AM", available: 5 },
          { time: "10:00 AM", available: 4 },
          { time: "01:30 PM", available: 6 },
          { time: "04:00 PM", available: 4 },
        ],
      },
      {
        date: "Nov 8",
        timeSlots: [
          { time: "06:30 AM", available: 8 },
          { time: "09:00 AM", available: 6 },
          { time: "12:00 PM", available: 5 },
          { time: "03:00 PM", available: 6 },
        ],
      },
      {
        date: "Nov 11",
        timeSlots: [
          { time: "07:30 AM", available: 5 },
          { time: "10:30 AM", available: 6 },
          { time: "01:30 PM", available: 4 },
          { time: "05:00 PM", available: 3 },
        ],
      },
      {
        date: "Nov 14",
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
    name: "Goa Coastal Getaway",
    imageUrl:
      "https://images.unsplash.com/photo-1727499031382-407906c7e208?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    location: "Goa",
    description:
      "Sunbathe on golden beaches, enjoy the lively shacks, and witness magical sunsets on this laid-back coastal retreat.",
    price: 1699,
    availability: [
      {
        date: "Nov 5",
        timeSlots: [
          { time: "09:00 AM", available: 6 },
          { time: "12:00 PM", available: 5 },
          { time: "03:00 PM", available: 6 },
          { time: "07:00 PM", available: 9 },
        ],
      },
      {
        date: "Nov 8",
        timeSlots: [
          { time: "10:00 AM", available: 6 },
          { time: "01:00 PM", available: 3 },
          { time: "04:30 PM", available: 5 },
          { time: "08:00 PM", available: 6 },
        ],
      },
      {
        date: "Nov 11",
        timeSlots: [
          { time: "09:30 AM", available: 4 },
          { time: "12:30 PM", available: 6 },
          { time: "03:30 PM", available: 4 },
          { time: "06:30 PM", available: 8 },
        ],
      },
      {
        date: "Nov 14",
        timeSlots: [
          { time: "10:30 AM", available: 7 },
          { time: "01:30 PM", available: 4 },
          { time: "04:30 PM", available: 5 },
          { time: "07:30 PM", available: 9 },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Varanasi Spiritual Sojourn",
    imageUrl:
      "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    location: "Varanasi, Uttar Pradesh",
    description:
      "Immerse yourself in the spiritual rhythm of the Ganga Aarti, explore ancient ghats, and experience India’s sacred soul.",
    price: 1499,
    availability: [
      {
        date: "Nov 5",
        timeSlots: [
          { time: "05:00 AM", available: 3 },
          { time: "07:30 AM", available: 6 },
          { time: "04:00 PM", available: 5 },
          { time: "07:00 PM", available: 8 },
        ],
      },
      {
        date: "Nov 8",
        timeSlots: [
          { time: "05:30 AM", available: 5 },
          { time: "08:00 AM", available: 7 },
          { time: "04:30 PM", available: 5 },
          { time: "06:30 PM", available: 8 },
        ],
      },
      {
        date: "Nov 11",
        timeSlots: [
          { time: "06:00 AM", available: 5 },
          { time: "09:00 AM", available: 5 },
          { time: "05:00 PM", available: 6 },
          { time: "07:30 PM", available: 4 },
        ],
      },
      {
        date: "Nov 14",
        timeSlots: [
          { time: "05:15 AM", available: 8 },
          { time: "08:30 AM", available: 6 },
          { time: "04:15 PM", available: 5 },
          { time: "06:45 PM", available: 4 },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Darjeeling Tea Valley Retreat",
    imageUrl:
      "https://images.unsplash.com/photo-1659947450356-6a8ca508a986?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    location: "Darjeeling, West Bengal",
    description:
      "Wander through misty tea gardens, taste world-renowned brews, and catch breathtaking Himalayan views from Tiger Hill.",
    price: 1799,
    availability: [
      {
        date: "Nov 5",
        timeSlots: [
          { time: "06:30 AM", available: 5 },
          { time: "09:00 AM", available: 6 },
          { time: "01:00 PM", available: 4 },
          { time: "03:30 PM", available: 7 },
        ],
      },
      {
        date: "Nov 8",
        timeSlots: [
          { time: "07:00 AM", available: 8 },
          { time: "10:30 AM", available: 5 },
          { time: "12:30 PM", available: 6 },
          { time: "04:30 PM", available: 3 },
        ],
      },
      {
        date: "Nov 11",
        timeSlots: [
          { time: "06:45 AM", available: 4 },
          { time: "09:15 AM", available: 5 },
          { time: "01:15 PM", available: 7 },
          { time: "03:45 PM", available: 6 },
        ],
      },
      {
        date: "Nov 14",
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
    name: "Andaman Island Adventure",
    imageUrl:
      "https://images.unsplash.com/photo-1586184059848-ff03a29ddf97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    location: "Andaman & Nicobar Islands",
    description:
      "Dive into turquoise waters, explore coral reefs, and unwind on secluded white-sand beaches in this island paradise.",
    price: 2699,
    availability: [
      {
        date: "Nov 5",
        timeSlots: [
          { time: "08:00 AM", available: 9 },
          { time: "10:30 AM", available: 5 },
          { time: "02:00 PM", available: 6 },
          { time: "05:30 PM", available: 8 },
        ],
      },
      {
        date: "Nov 8",
        timeSlots: [
          { time: "09:00 AM", available: 7 },
          { time: "11:30 AM", available: 4 },
          { time: "03:00 PM", available: 6 },
          { time: "06:00 PM", available: 5 },
        ],
      },
      {
        date: "Nov 11",
        timeSlots: [
          { time: "08:30 AM", available: 6 },
          { time: "10:45 AM", available: 8 },
          { time: "02:15 PM", available: 5 },
          { time: "05:00 PM", available: 3 },
        ],
      },
      {
        date: "Nov 14",
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
