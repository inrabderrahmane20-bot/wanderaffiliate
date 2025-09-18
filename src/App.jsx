import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import HotDeals from "./pages/HotDeals";
import About from "./pages/About";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="text-lg font-semibold text-gray-800">
                WanderAffiliate
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex md:items-center md:space-x-6">
              <Link to="/" className="text-gray-600 hover:text-indigo-600">
                Home
              </Link>
              <Link
                to="/destinations"
                className="text-gray-600 hover:text-indigo-600"
              >
                Destinations
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-indigo-600">
                Blog
              </Link>
              <Link
                to="/hotdeals"
                className="text-gray-600 hover:text-indigo-600"
              >
                Hot Deals
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-indigo-600">
                About
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-md border text-gray-700 hover:bg-gray-100"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
            <Link to="/" className="block text-gray-700">
              Home
            </Link>
            <Link to="/destinations" className="block text-gray-700">
              Destinations
            </Link>
            <Link to="/blog" className="block text-gray-700">
              Blog
            </Link>
            <Link to="/hotdeals" className="block text-gray-700">
              Hot Deals
            </Link>
            <Link to="/about" className="block text-gray-700">
              About
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} /> 
          <Route path="/hotdeals" element={<HotDeals />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6 mt-8">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          © 2025 WanderAffiliate. Powered by{" "}
          <a
            href="https://www.airbnb.com"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Airbnb
          </a>
          ,{" "}
          <a
            href="https://www.booking.com"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Booking
          </a>
          ,{" "}
          <a
            href="https://www.europcar.com"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Europcar
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
