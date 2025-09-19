import React from "react";
import { motion } from "framer-motion";
import { GlobeAltIcon, StarIcon } from "@heroicons/react/24/outline";
import { Compass } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-20 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
          About WanderAffiliate
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We empower explorers, digital nomads, and vacation lovers by connecting
          them with the best deals in accommodations, tours, and car rentals
          worldwide 🌍✨.
        </p>
        <motion.img
          src="https://www.familytravel.com.au/wp-content/uploads/2020/02/Tropical_SriLankaFishingBoat_AntonGvozdikovshutterstock_109906475.jpg"
          alt="Tropical Travel"
          className="mt-10 rounded-3xl shadow-2xl w-full max-h-[450px] object-cover hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-16 mb-28 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.pexels.com/photos/12026101/pexels-photo-12026101.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"
            alt="Traveler looking at mountain view"
            className="rounded-3xl shadow-lg mb-6 hover:scale-105 transition-transform"
          />
          <h2 className="text-3xl font-bold text-indigo-600 mb-3">🌍 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At WanderAffiliate, our mission is simple: to inspire and enable
            unforgettable travel experiences. We partner with top travel brands
            across the globe to give you access to competitive prices, exclusive
            discounts, and trustworthy services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://th.bing.com/th/id/R.fe77a060ecda59e0803d0a34f5ae64cf?rik=zUPRA4hS1NeRcA&pid=ImgRaw&r=0"
            alt="Visionary traveler"
            className="rounded-3xl shadow-lg mb-6 hover:scale-105 transition-transform"
          />
          <h2 className="text-3xl font-bold text-pink-500 mb-3">🚀 Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe travel should be stress-free, affordable, and inspiring.
            Our vision is to become the go-to affiliate hub for travel bookings,
            where every click leads to new memories, every destination feels
            accessible, and every traveler feels confident in their choices.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        className="mb-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          ✨ Why Travelers Choose WanderAffiliate
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/80 backdrop-blur rounded-3xl shadow-lg hover:shadow-2xl transition"
          >
            <GlobeAltIcon className="mx-auto text-indigo-600 mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold text-indigo-600 mb-3">
              Trusted Partnerships
            </h3>
            <p className="text-gray-700">
              We collaborate with world-renowned travel platforms like Booking.com,
              Expedia, and GetYourGuide to bring you only verified and reliable
              options 🌟.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/80 backdrop-blur rounded-3xl shadow-lg hover:shadow-2xl transition"
          >
            <StarIcon className="mx-auto text-pink-500 mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold text-pink-500 mb-3">
              Best Price Deals
            </h3>
            <p className="text-gray-700">
              Our affiliate links ensure you get the same or even better rates than
              booking directly 💸 — with exclusive offers you won’t find elsewhere.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/80 backdrop-blur rounded-3xl shadow-lg hover:shadow-2xl transition"
          >
            <Compass className="mx-auto text-purple-500 mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold text-purple-500 mb-3">
              Travel Made Simple
            </h3>
            <p className="text-gray-700">
              No more endless searching 🔎. We handpick the best choices in
              accommodations, tours, and rentals so you can focus on enjoying your
              journey.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-16 mb-28 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">📖 Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            WanderAffiliate was founded by passionate travelers who understood the
            struggle of navigating dozens of booking platforms to find reliable
            deals. We wanted a one-stop space that would simplify decision-making
            and help others experience the world without breaking the bank 💼✈️.
            <br />
            <br />
            Today, WanderAffiliate stands as a trusted guide, helping thousands of
            travelers every month find their perfect stays, activities, and rides
            around the globe 🌎.
          </p>
        </motion.div>

        <motion.img
          src="https://enjoytravellife.com/wp-content/uploads/2021/04/happy-family-road-trip-lg.jpg"
          alt="Happy travelers"
          className="rounded-3xl shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Call-to-Action */}
      <motion.div
        className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-14 text-center shadow-xl text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Start Your Next Adventure? 🌎
        </h2>
        <p className="text-lg mb-8 text-indigo-100 max-w-2xl mx-auto">
          Explore exclusive deals, discover hidden gems, and book with confidence.
          Let <span className="font-bold">WanderAffiliate</span> be your trusted
          companion for unforgettable travels ✨.
        </p>
        <a
          href="/destinations"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-100 transition"
        >
          🚀 Explore Deals
        </a>
      </motion.div>
    </div>
  );
}
