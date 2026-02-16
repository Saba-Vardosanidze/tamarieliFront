"use client";

import { useState } from "react";
import countries from "world-countries";
import "flag-icons/css/flag-icons.min.css";
import { ChevronDown } from "lucide-react";

export default function CountrySelect() {
  const [isOpen, setIsOpen] = useState(false);
  // Default მდგომარეობა - მაგალითად საქართველო
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Georgia",
    code: "GE",
  });
  const [searchTerm, setSearchTerm] = useState("");

  // ქვეყნების გაფილტვრა
  const filteredCountries = countries
    .filter((c) =>
      c.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <div className="relative w-72 text-black">
      {/* მთავარი ღილაკი (აჩვენებს არჩეულ ქვეყანას) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-white border:none rounded-lg shadow-sm  hover:border-blue-400 transition-all focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <span
            className={`fi fi-${selectedCountry.code.toLowerCase()} w-6 h-4 rounded-sm shadow-sm`}
          ></span>
          <span className="font-medium text-gray-700">
            {selectedCountry.name}
          </span>
        </div>
        {/* ისარი (Arrow icon) */}
        <span
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-0 text-blue-500" : ""}`}
          />
        </span>
      </button>

      {/* Dropdown კონტეინერი */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-xl animate-in fade-in zoom-in duration-150">
          {/* საძიებო ველი სიის შიგნით */}
          <div className="p-2 border-b">
            <input
              type="text"
              placeholder="Search country..."
              className="w-full p-2 text-sm bg-gray-50 border rounded border-none outline-none focus:ring-1 d"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* ქვეყნების სია */}
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div
                  key={country.cca2}
                  className={`flex items-center gap-3 p-3 hover:bg-blue-50 cursor-pointer transition-colors ${
                    selectedCountry.code === country.cca2 ? "bg-blue-50" : ""
                  }`}
                  onClick={() => {
                    setSelectedCountry({
                      name: country.name.common,
                      code: country.cca2,
                    });
                    setIsOpen(false);
                    setSearchTerm(""); // გაასუფთავოს ძებნა დახურვისას
                  }}
                >
                  <span
                    className={`fi fi-${country.cca2.toLowerCase()} w-5 h-4 shrink-0 shadow-sm`}
                  ></span>
                  <span className="text-sm text-gray-700">
                    {country.name.common}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-gray-400 italic">
                შედეგი ვერ მოიძებნა
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overlay დახურვისთვის */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
