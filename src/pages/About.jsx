import React from "react";
import { GlobeAltIcon, StarIcon } from "@heroicons/react/24/outline";
import { Compass } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About <span className="text-indigo-600">WanderAffiliate</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We empower explorers, digital nomads, and vacation lovers by connecting them
          with the best deals in accommodations, tours, and car rentals worldwide.
        </p>
        <img
          src="https://www.familytravel.com.au/wp-content/uploads/2020/02/Tropical_SriLankaFishingBoat_AntonGvozdikovshutterstock_109906475.jpg"
          alt="Tropical Travel"
          className="mt-8 rounded-2xl shadow-lg w-full max-h-[400px] object-cover"
        />
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <img
            src="https://images.pexels.com/photos/12026101/pexels-photo-12026101.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"
            alt="Traveler looking at mountain view"
            className="rounded-2xl shadow-md mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🌍 Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At WanderAffiliate, our mission is simple: to inspire and enable unforgettable
            travel experiences. We partner with top travel brands across the globe to give
            you access to competitive prices, exclusive discounts, and trustworthy services.
          </p>
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/R.fe77a060ecda59e0803d0a34f5ae64cf?rik=zUPRA4hS1NeRcA&pid=ImgRaw&r=0"
            alt="Visionary traveler"
            className="rounded-2xl shadow-md mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🚀 Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We believe travel should be stress-free, affordable, and inspiring. Our vision
            is to become the go-to affiliate hub for travel bookings, where every click
            leads to new memories, every destination feels accessible, and every traveler
            feels confident in their choices.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          ✨ Why Travelers Choose WanderAffiliate
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition">
            <GlobeAltIcon className="mx-auto text-indigo-600 mb-4 h-10 w-10" />
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Trusted Partnerships</h3>
            <p className="text-gray-600">
              We collaborate with world-renowned travel platforms like Booking.com, Expedia,
              and GetYourGuide to bring you only verified and reliable options.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition">
            <StarIcon className="mx-auto text-indigo-600 mb-4 h-10 w-10" />
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Best Price Deals</h3>
            <p className="text-gray-600">
              Our affiliate links ensure you get the same or even better rates than booking
              directly, with exclusive offers you won’t find elsewhere.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition">
            <Compass className="mx-auto text-indigo-600 mb-4 h-10 w-10" />
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Travel Made Simple</h3>
            <p className="text-gray-600">
              No more endless searching. We handpick the best choices in accommodations,
              tours, and rentals so you can focus on enjoying your journey.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            WanderAffiliate was founded by passionate travelers who understood the struggle
            of navigating dozens of booking platforms to find reliable deals. We wanted a
            one-stop space that would simplify decision-making and help others experience
            the world without breaking the bank. Today, WanderAffiliate stands as a trusted
            guide, helping thousands of travelers every month find their perfect stays,
            activities, and rides around the globe.
          </p>
        </div>
        <img
          src="https://enjoytravellife.com/wp-content/uploads/2021/04/happy-family-road-trip-lg.jpg"
          alt="Happy travelers"
          className="rounded-2xl shadow-md"
        />
      </div>

      {/* Call-to-Action */}
      <div className="bg-indigo-50 rounded-2xl p-12 text-center shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Your Next Adventure?
        </h2>
        <p className="text-gray-600 mb-6">
          Explore exclusive deals, discover hidden gems, and book with confidence.
          Let WanderAffiliate be your trusted companion for unforgettable travels.
        </p>
        <a
          href="/destinations"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition"
        >
          🌎 Explore Deals
        </a>
      </div>
    </div>
  );
}
