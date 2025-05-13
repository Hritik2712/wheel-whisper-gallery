
export interface CarSpec {
  name: string;
  value: string | number;
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: string;
  category: "sports" | "luxury" | "classic" | "electric";
  featured?: boolean;
  badge?: string;
  images: string[];
  description: string;
  specs: CarSpec[];
}

export const carCategories = [
  { value: "all", label: "All Cars" },
  { value: "sports", label: "Sports Cars" },
  { value: "luxury", label: "Luxury Cars" },
  { value: "classic", label: "Classic Cars" },
  { value: "electric", label: "Electric Cars" }
];

export const cars: Car[] = [
  {
    id: "c001",
    name: "Model S Plaid",
    brand: "Tesla",
    year: 2023,
    price: "$129,990",
    category: "electric",
    featured: true,
    badge: "New",
    images: [
      "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?q=80&w=1200",
      "https://images.unsplash.com/photo-1617788138017-80ad0e3bb166?q=80&w=1200",
      "https://images.unsplash.com/photo-1619670922021-81d17606b4d5?q=80&w=1200"
    ],
    description: "The Model S Plaid is the highest performing variant of Tesla's flagship sedan, featuring a tri-motor setup that produces over 1,000 horsepower. It's one of the fastest accelerating production cars ever made, reaching 60 mph in less than 2 seconds.",
    specs: [
      { name: "Acceleration", value: "1.99s 0-60 mph" },
      { name: "Top Speed", value: "200 mph" },
      { name: "Range", value: "396 miles" },
      { name: "Power", value: "1,020 hp" },
      { name: "Drivetrain", value: "Tri Motor AWD" }
    ]
  },
  {
    id: "c002",
    name: "911 GT3 RS",
    brand: "Porsche",
    year: 2023,
    price: "$223,800",
    category: "sports",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f557e?q=80&w=1200",
      "https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=1200",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200"
    ],
    description: "The Porsche 911 GT3 RS represents the pinnacle of naturally-aspirated 911 performance. Built for the track but legal for the road, it features motorsport-derived aerodynamics and chassis technology to deliver exceptional handling and driver engagement.",
    specs: [
      { name: "Engine", value: "4.0L Flat-Six" },
      { name: "Horsepower", value: "518 hp" },
      { name: "0-60 mph", value: "3.0 seconds" },
      { name: "Top Speed", value: "184 mph" },
      { name: "Weight", value: "3,196 lbs" }
    ]
  },
  {
    id: "c003",
    name: "Phantom",
    brand: "Rolls-Royce",
    year: 2023,
    price: "$460,000",
    category: "luxury",
    images: [
      "https://images.unsplash.com/photo-1631295868223-63265b40d9cc?q=80&w=1200",
      "https://images.unsplash.com/photo-1621337268984-6b2d2d8fb9d3?q=80&w=1200",
      "https://images.unsplash.com/photo-1589059677953-25d11799de53?q=80&w=1200"
    ],
    description: "The Phantom is Rolls-Royce's flagship model, representing the ultimate in luxury motoring. Hand-built in Goodwood, England, it combines time-honored craftsmanship with cutting-edge technology to create an unparalleled luxury experience.",
    specs: [
      { name: "Engine", value: "6.75L V12 Twin-Turbo" },
      { name: "Horsepower", value: "563 hp" },
      { name: "Torque", value: "664 lb-ft" },
      { name: "Interior", value: "Bespoke leather & wood" },
      { name: "Sound Insulation", value: "130kg (287 lbs)" }
    ]
  },
  {
    id: "c004",
    name: "Countach",
    brand: "Lamborghini",
    year: 1985,
    price: "$500,000+",
    category: "classic",
    badge: "Iconic",
    images: [
      "https://images.unsplash.com/photo-1621135802920-130608dd9754?q=80&w=1200",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=1200",
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200"
    ],
    description: "The Lamborghini Countach is one of the most iconic supercars ever made. With its dramatic wedge shape, scissor doors, and aggressive stance, it defined the supercar look for a generation and remains highly sought after by collectors worldwide.",
    specs: [
      { name: "Engine", value: "5.2L V12" },
      { name: "Power", value: "455 hp (QV model)" },
      { name: "Production", value: "1974-1990" },
      { name: "Designer", value: "Marcello Gandini" },
      { name: "Weight", value: "3,285 lbs" }
    ]
  },
  {
    id: "c005",
    name: "Taycan Turbo S",
    brand: "Porsche",
    year: 2023,
    price: "$187,400",
    category: "electric",
    images: [
      "https://images.unsplash.com/photo-1619454016518-697bc231e7cb?q=80&w=1200",
      "https://images.unsplash.com/photo-1619454016518-497d4b70d9e9?q=80&w=1200",
      "https://images.unsplash.com/photo-1619454016518-54b4421867a3?q=80&w=1200"
    ],
    description: "The Porsche Taycan Turbo S is an all-electric sports car that combines Porsche performance with zero emissions. Its innovative 800-volt architecture allows for extremely fast charging and consistent performance, even during track driving.",
    specs: [
      { name: "Power", value: "Up to 750 hp (overboost)" },
      { name: "0-60 mph", value: "2.6 seconds" },
      { name: "Range", value: "222 miles" },
      { name: "Battery", value: "93.4 kWh Performance Plus" },
      { name: "Charging", value: "5-80% in 22.5 min (270kW)" }
    ]
  },
  {
    id: "c006",
    name: "Continental GT Speed",
    brand: "Bentley",
    year: 2023,
    price: "$274,900",
    category: "luxury",
    images: [
      "https://images.unsplash.com/photo-1622653968902-829e91fac4c6?q=80&w=1200",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200", 
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200"
    ],
    description: "The Bentley Continental GT Speed represents the pinnacle of Bentley's grand touring models. It combines exceptional luxury with breathtaking performance from its enhanced W12 engine, making it the most dynamic road car in Bentley's history.",
    specs: [
      { name: "Engine", value: "6.0L Twin-Turbo W12" },
      { name: "Power", value: "650 hp" },
      { name: "Torque", value: "664 lb-ft" },
      { name: "0-60 mph", value: "3.5 seconds" },
      { name: "Max Speed", value: "208 mph" }
    ]
  },
];
