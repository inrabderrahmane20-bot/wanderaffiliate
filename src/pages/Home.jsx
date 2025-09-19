import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      console.log("Message sent:", { email, message });
      setSubmitted(true);
      setEmail("");
      setMessage("");
    }
  };

  const destinations = [
    {
      name: "Bali, Indonesia",
      image:
        "https://image.urlaubspiraten.de/720/image/upload/v1603282722/mediavault_images/ihjatwhtozn7ljfgtad7.jpg",
      desc: "Tropical paradise with beaches, temples, and vibrant culture.",
    },
    {
      name: "Paris, France",
      image:
        "https://worldinparis.com/wp-content/uploads/2022/01/View-from-the-Pantheon.jpg",
      desc: "The city of lights, romance, art, and fashion.",
    },
    {
      name: "Tokyo, Japan",
      image:
        "https://lp-cms-production.imgix.net/2025-07/shutterstock247901467.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop",
      desc: "Modern meets tradition in the bustling Japanese capital.",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "Top 10 Hidden Gems in Bali 🌴",
      image:
        "https://www.agoda.com/wp-content/uploads/2024/08/Sangeh-Monkey-Forest-featured.jpg",
      desc: "Explore lesser-known spots in Bali that tourists often miss.",
    },
    {
      id: 2,
      title: "A Foodie’s Guide to Paris 🥐",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/6a/36/00/caption.jpg?w=1200&h=700&s=1&cx=4096&cy=2732&chk=v1_1f60470edd252a73c967",
      desc: "From croissants to Michelin stars, taste your way through Paris.",
    },
  ];

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

      {/* Destinations Preview */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Top Destinations</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((d, i) => (
            <div
              key={i}
              onClick={() => navigate(`/destinations?search=${encodeURIComponent(d.name)}`)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition cursor-pointer"
            >
              <img src={d.image} alt={d.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{d.name}</h3>
                <p className="text-gray-600 text-sm">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/destinations"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700"
          >
            View More Destinations →
          </Link>
        </div>
      </div>

      {/* Blog Preview */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition block"
              >
                <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
            >
              View More Blog Posts →
            </Link>
          </div>
        </div>
      </div>

      {/* About Preview */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why WanderAffiliate?</h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="font-bold text-xl mb-3">🌍 Curated Destinations</h3>
            <p className="text-gray-600 text-sm">
              Hand-picked destinations to make your travel unforgettable.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="font-bold text-xl mb-3">📝 Authentic Stories</h3>
            <p className="text-gray-600 text-sm">
              Real travel experiences from passionate explorers.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="font-bold text-xl mb-3">💸 Exclusive Deals</h3>
            <p className="text-gray-600 text-sm">
              Find the best travel platforms and save money on bookings.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            to="/about"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
          >
            Learn More →
          </Link>
        </div>
      </div>

      {/* Contact section */}
      <div id="contact" className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch ✉️</h2>
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
