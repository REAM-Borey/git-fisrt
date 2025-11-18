"use client";

import { useState } from "react";

export default function TimeSelection() {
  const [selected, setSelected] = useState("");

  const options = [
    { id: "morning", label: "Morning", desc: "learn mmore time that you have many time for work" },
    { id: "afternoon", label: "Afternoon",desc: "learn mmore time that you have many time for work" },
    { id: "full-day", label: "Full Day",desc: "learn mmore time that you have many time for work" },
  ];

  return (
    <div className="flex flex-col mt-5 w-full">
      <p className="text-md font-bold text-gray-900 mb-2">
        shift
      </p>
      <p className="text-gray-500 mb-2">
        Select the plan that best fits your needs:
      </p>

      <div className="flex flex-col md:flex-row gap-5 md:gap-5 mb-2">
        {options.map((option) => (
          <label
            key={option.id}
            htmlFor={option.id}
            className={`relative cursor-pointer bg-white rounded-xl border-2 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 p-4 sm:p-5 md:p-6 text-center shadow-md transition-all duration-200 hover:shadow-lg hover:border-gray-400
              ${
                selected === option.id
                  ? "border-gray-500 bg-blue-50 text-gray-600 shadow-lg"
                  : "border-gray-200 hover:border-gray-400 hover:shadow-lg"
              }`}
          >
            {/* Radio button top-left */}
            <input
              type="radio"
              id={option.id}
              name="session"
              value={option.id}
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className="absolute top-3 left-3 w-5 h-5 accent-gray-600 cursor-pointer"
            />

            {/* Card Content */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-5xl mb-3">{option.icon}</div>
              <h4 className="text-lg font-semibold">{option.label}</h4>
              <p className="text-sm text-gray-500 mt-1">{option.desc}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
