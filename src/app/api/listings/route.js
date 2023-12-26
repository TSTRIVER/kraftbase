import { NextResponse } from "next/server";

const listings = {
  mumbai: [
    {
      lon: 72.8479,
      lat: 19.0144,
      date: "2023-12-26",
      name: "Hotel Dadar",
      price: 10000,
      rating: 8.8,
      guests: 3,
    },
    {
      lon: 72.95,
      lat: 19.25,
      date: "2023-12-26",
      name: "Thane Villa",
      price: 8000,
      rating: 8.5,
      guests: 5,
    },
    {
      lon: 73.0699,
      lat: 19.0473,
      date: "2023-12-26",
      name: "Kharghar Housing",
      price: 12000,
      rating: 9.2,
      guests: 4,
    },
    {
      lon: 72.9978,
      lat: 19.0745,
      date: "2023-12-26",
      name: "Vashi Boulevard",
      price: 6500,
      rating: 7.8,
      guests: 5,
    },
    {
      lon: 72.8295,
      lat: 19.0596,
      date: "2023-12-26",
      name: "Bandra Bungalow",
      price: 25000,
      rating: 9.8,
      guests: 3,
    },
  ],
  delhi: [
    {
      lon: 77.2167,
      lat: 28.6667,
      date: "2023-12-26",
      name: "Old Delhi",
      price: 5000,
      rating: 7,
      guests: 3,
    },
    {
      lon: 77.21,
      lat: 28.67,
      date: "2023-12-26",
      name: "New Delhi",
      price: 12000,
      rating: 8.9,
      guests: 10,
    },
  ],
  bhopal: [
    {
      lon: 77.4,
      lat: 23.2667,
      date: "2023-12-26",
      name: "Bhopal Darbar",
      price: 4000,
      rating: 8,
      guests: 5,
    },
    {
      lon: 77.43,
      lat: 23.28,
      date: "2023-12-26",
      name: "Sagar Villa",
      price: 13000,
      rating: 9.5,
      guests: 4,
    },
  ],
  kerala: [
    {
      lon: 76.5,
      lat: 10,
      date: "2023-12-26",
      name: "Kerala DamSite",
      price: 20000,
      rating: 9.5,
      guests: 6,
    },
    {
      lon: 76.6,
      lat: 10.25,
      date: "2023-12-26",
      name: "Keral Valley",
      price: 25000,
      rating: 9.8,
      guests: 12,
    },
  ],
};

export async function GET() {
  return NextResponse.json(listings);
}
