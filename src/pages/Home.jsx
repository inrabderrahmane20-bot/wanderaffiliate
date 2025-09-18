import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      console.log("Message sent:", { email, message });
      setSubmitted(true);
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            WanderAffiliate 🌍
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200">
            Discover amazing destinations, read travel stories, and get the best deals.
          </p>
        </div>
      </div>

      {/* Main options */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">Start Your Journey</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Destinations */}
          <Link
            to="/destinations"
            className="p-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition transform flex flex-col justify-center items-center"
          >
            <span className="text-2xl font-bold mb-3">🌎 Explore Destinations</span>
            <p className="text-sm text-gray-100">
              Find the most popular and unique places around the world.
            </p>
          </Link>

          {/* Blog */}
          <Link
            to="/blog"
            className="p-10 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition transform flex flex-col justify-center items-center"
          >
            <span className="text-2xl font-bold mb-3">📝 Travel Blog</span>
            <p className="text-sm text-gray-100">
              Read travel tips, guides, and inspiring stories.
            </p>
          </Link>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="p-10 bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition transform flex flex-col justify-center items-center"
          >
            <span className="text-2xl font-bold mb-3">📩 Contact Us</span>
            <p className="text-sm text-gray-100">
              Get in touch with us for any inquiries or collaborations.
            </p>
          </a>
        </div>
      </div>

      {/* Contact section at bottom */}
      <div id="contact" className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Get in Touch ✉️
          </h2>
          {submitted ? (
            <p className="text-green-600 font-medium text-center">
              ✅ Message sent! We’ll reply soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm h-32 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
