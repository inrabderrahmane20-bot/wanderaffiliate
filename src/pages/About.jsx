import React from "react";
import { GlobeAltIcon, StarIcon } from "@heroicons/react/24/outline";
import { Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
          About WanderAffiliate
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We empower explorers, digital nomads, and vacation lovers by connecting them
          with the best deals in accommodations, tours, and car rentals worldwide.
        </p>
        <motion.img
          src="https://www.familytravel.com.au/wp-content/uploads/2020/02/Tropical_SriLankaFishingBoat_AntonGvozdikovshutterstock_109906475.jpg"
          alt="Tropical Travel"
          className="mt-10 rounded-3xl shadow-xl w-full max-h-[450px] object-cover border-4 border-indigo-100"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.pexels.com/photos/12026101/pexels-photo-12026101.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"
            alt="Traveler looking at mountain view"
            className="rounded-3xl shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold text-indigo-600 mb-3">🌍 Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At WanderAffiliate, our mission is simple: to inspire and enable unforgettable
            travel experiences. We partner with top travel brands across the globe to give
            you access to competitive prices, exclusive discounts, and trustworthy services.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://th.bing.com/th/id/R.fe77a060ecda59e0803d0a34f5ae64cf?rik=zUPRA4hS1NeRcA&pid=ImgRaw&r=0"
            alt="Visionary traveler"
            className="rounded-3xl shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold text-indigo-600 mb-3">🚀 Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We believe travel should be stress-free, affordable, and inspiring. Our vision
            is to become the go-to affiliate hub for travel bookings, where every click
            leads to new memories, every destination feels accessible, and every traveler
            feels confident in their choices.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-24">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          ✨ Why Travelers Choose{" "}
          <span className="text-indigo-600">WanderAffiliate</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gradient-to-br from-white to-indigo-50 shadow-lg rounded-3xl hover:shadow-2xl transition"
          >
            <GlobeAltIcon className="mx-auto text-indigo-600 mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              Trusted Partnerships
            </h3>
            <p className="text-gray-600">
              We collaborate with world-renowned travel platforms like Booking.com, Expedia,
              and GetYourGuide to bring you only verified and reliable options.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gradient-to-br from-white to-indigo-50 shadow-lg rounded-3xl hover:shadow-2xl transition"
          >
            <StarIcon className="mx-auto text-indigo-600 mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Best Price Deals</h3>
            <p className="text-gray-600">
              Our affiliate links ensure you get the same or even better rates than booking
              directly, with exclusive offers you won’t find elsewhere.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gradient-to-br from-white to-indigo-50 shadow-lg rounded-3xl hover:shadow-2xl transition"
          >
            <Compass className="mx-auto text-indigo-600 mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Travel Made Simple</h3>
            <p className="text-gray-600">
              No more endless searching. We handpick the best choices in accommodations,
              tours, and rentals so you can focus on enjoying your journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">📖 Our Story</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            WanderAffiliate was founded by passionate travelers who understood the struggle
            of navigating dozens of booking platforms to find reliable deals. We wanted a
            one-stop space that would simplify decision-making and help others experience
            the world without breaking the bank. Today, WanderAffiliate stands as a trusted
            guide, helping thousands of travelers every month find their perfect stays,
            activities, and rides around the globe.
          </p>
        </motion.div>
        <motion.img
          src="https://enjoytravellife.com/wp-content/uploads/2021/04/happy-family-road-trip-lg.jpg"
          alt="Happy travelers"
          className="rounded-3xl shadow-xl"
          whileHover={{ scale: 1.03 }}
        />
      </div>

      {/* Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Start Your Next Adventure?
        </h2>
        <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
          Explore exclusive deals, discover hidden gems, and book with confidence.
          Let WanderAffiliate be your trusted companion for unforgettable travels.
        </p>
        <a
          href="/destinations"
          className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-bold shadow-md hover:bg-gray-100 transition"
        >
          🌎 Explore Deals
        </a>
      </motion.div>
    </div>
  );
}
