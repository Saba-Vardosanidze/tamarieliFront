"use client";

import { useState } from "react";
import countries from "world-countries";
import "flag-icons/css/flag-icons.min.css";
import { ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CountrySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Georgia",
    code: "GE",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries
    .filter((c) =>
      c.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <div className="relative w-72 text-black font-sans">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-white rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.12)] transition-all duration-300 focus:outline-none border-none"
      >
        <div className="flex items-center gap-3">
          <span
            className={`fi fi-${selectedCountry.code.toLowerCase()} w-6 h-4 rounded-sm shadow-sm`}
          ></span>
          <span className="font-medium text-gray-700">
            {selectedCountry.name}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-500" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] overflow-hidden border-none"
          >
            <div className="relative p-2 flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-gray-300" />
              <input
                type="text"
                placeholder="Search country..."
                className="w-full p-2 pl-9 text-sm bg-gray-50 border-none rounded-lg outline-none focus:ring-0"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="max-h-60 custom-scrollbar pb-2">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <div
                    key={country.cca2}
                    className={`flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors mx-1 rounded-md ${
                      selectedCountry.code === country.cca2
                        ? "bg-blue-50/50 text-blue-600 font-medium"
                        : "text-gray-600"
                    }`}
                    onClick={() => {
                      setSelectedCountry({
                        name: country.name.common,
                        code: country.cca2,
                      });
                      setIsOpen(false);
                      setSearchTerm("");
                    }}
                  >
                    <span
                      className={`fi fi-${country.cca2.toLowerCase()} w-5 h-3.5 shrink-0 rounded-[1px] shadow-xs`}
                    ></span>
                    <span className="text-sm">{country.name.common}</span>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-sm text-gray-400 italic font-NotoSansGeorgian">
                  ვერ მოიძებნა
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
