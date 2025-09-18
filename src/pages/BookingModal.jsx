import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAirbnb, FaCar } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";

export default function BookingModal({ isOpen, onClose, destination }) {
  const [platform, setPlatform] = useState(null);
  const [dates, setDates] = useState({ start: "", end: "" });

  const handlePlatformSelect = (p) => {
    setPlatform(p); // only one at a time
  };

  const handleConfirm = () => {
    if (!platform || !dates.start || !dates.end) {
      alert("Please select a platform and dates.");
      return;
    }

    let url = "";
    if (platform === "booking") {
      url = `https://www.booking.com/searchresults.html?ss=${destination}&checkin=${dates.start}&checkout=${dates.end}`;
    } else if (platform === "airbnb") {
      url = `https://www.airbnb.com/s/${destination}/homes?checkin=${dates.start}&checkout=${dates.end}`;
    } else if (platform === "europcar") {
      url = `https://www.europcar.com/en/stations?pickup=${destination}&from=${dates.start}&until=${dates.end}`;
    }

    window.open(url, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl p-6 w-[90%] max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              Book {destination}
            </h2>

            <div className="flex justify-around mb-6">
              <button
                className={`flex flex-col items-center p-3 rounded-xl border transition ${
                  platform === "booking"
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white hover:bg-blue-50"
                }`}
                onClick={() => handlePlatformSelect("booking")}
              >
                <FaHotel size={28} />
                <span className="text-sm mt-1">Booking</span>
              </button>

              <button
                className={`flex flex-col items-center p-3 rounded-xl border transition ${
                  platform === "airbnb"
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-white hover:bg-pink-50"
                }`}
                onClick={() => handlePlatformSelect("airbnb")}
              >
                <FaAirbnb size={28} />
                <span className="text-sm mt-1">Airbnb</span>
              </button>

              <button
                className={`flex flex-col items-center p-3 rounded-xl border transition ${
                  platform === "europcar"
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-white hover:bg-green-50"
                }`}
                onClick={() => handlePlatformSelect("europcar")}
              >
                <FaCar size={28} />
                <span className="text-sm mt-1">Europcar</span>
              </button>
            </div>

            <div className="space-y-3">
              <label className="block">
                <span className="text-gray-700">Start date</span>
                <input
                  type="date"
                  className="mt-1 w-full p-2 border rounded-lg"
                  value={dates.start}
                  onChange={(e) =>
                    setDates({ ...dates, start: e.target.value })
                  }
                />
              </label>

              <label className="block">
                <span className="text-gray-700">End date</span>
                <input
                  type="date"
                  className="mt-1 w-full p-2 border rounded-lg"
                  value={dates.end}
                  onChange={(e) =>
                    setDates({ ...dates, end: e.target.value })
                  }
                />
              </label>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Reserve
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
