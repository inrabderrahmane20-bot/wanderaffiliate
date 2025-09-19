import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaAirbnb, FaCar } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";

const BookingModal = ({ isOpen, destination, onClose }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  if (!isOpen || !destination) return null;

  // ✅ Fix off-by-one bug by forcing local noon
  const handleDateChange = (ranges) => {
    const start = new Date(ranges.selection.startDate);
    const end = new Date(ranges.selection.endDate);

    start.setHours(12, 0, 0, 0);
    end.setHours(12, 0, 0, 0);

    setDateRange([
      {
        startDate: start,
        endDate: end,
        key: "selection",
      },
    ]);
  };

  const handleBooking = () => {
    if (!selectedPlatform) {
      alert("Please select a platform first!");
      return;
    }

    // Example platform redirect links
    const startDate = dateRange[0].startDate.toISOString().split("T")[0];
    const endDate = dateRange[0].endDate.toISOString().split("T")[0];

    let url = "#";
    if (selectedPlatform === "airbnb") {
      url = `https://www.airbnb.com/s/${destination.name}/homes?checkin=${startDate}&checkout=${endDate}`;
    } else if (selectedPlatform === "booking") {
      url = `https://www.booking.com/searchresults.html?ss=${destination.name}&checkin=${startDate}&checkout=${endDate}`;
    } else if (selectedPlatform === "europcar") {
      url = `https://www.europcar.com/en/stations?search=${destination.name}&start_date=${startDate}&end_date=${endDate}`;
    }

    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[500px] max-w-[90%]">
        <h2 className="text-xl font-bold mb-4">
          Book your trip to {destination.name}
        </h2>

        {/* ✅ Big platform icons */}
        <div className="flex justify-around mb-6">
          <button
            className={`flex flex-col items-center p-4 rounded-xl border-2 transition ${
              selectedPlatform === "booking"
                ? "border-blue-600 bg-blue-100"
                : "border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedPlatform("booking")}
          >
            <FaHotel className="text-4xl text-blue-600 mb-2" />
            <span className="font-semibold">Booking</span>
          </button>

          <button
            className={`flex flex-col items-center p-4 rounded-xl border-2 transition ${
              selectedPlatform === "airbnb"
                ? "border-red-500 bg-red-100"
                : "border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedPlatform("airbnb")}
          >
            <FaAirbnb className="text-4xl text-red-500 mb-2" />
            <span className="font-semibold">Airbnb</span>
          </button>

          <button
            className={`flex flex-col items-center p-4 rounded-xl border-2 transition ${
              selectedPlatform === "europcar"
                ? "border-green-600 bg-green-100"
                : "border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedPlatform("europcar")}
          >
            <FaCar className="text-4xl text-green-600 mb-2" />
            <span className="font-semibold">Europcar</span>
          </button>
        </div>

        {/* Date picker */}
        <div className="mb-4">
          <DateRange
            ranges={dateRange}
            onChange={handleDateChange}
            moveRangeOnFirstSelection={false}
            rangeColors={["#EF4444"]}
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={handleBooking}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
