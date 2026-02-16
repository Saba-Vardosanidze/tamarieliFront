"use client";

import { useState } from "react";
import {
  ChevronDown,
  Search,
  LayoutGrid,
  Palette,
  BookOpen,
  Music,
  Film,
  Activity,
  Lightbulb,
  Globe,
  Megaphone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// შენი მოწოდებული მონაცემები
const categories = [
  {
    id: 1,
    name: "კულტურა და ხელოვნება",
    icon: <Palette className="w-4 h-4" />,
  },
  {
    id: 2,
    name: "ლიტერატურა და ბიბლიოთეკა",
    icon: <BookOpen className="w-4 h-4" />,
  },
  { id: 3, name: "მუსიკა და ხმა", icon: <Music className="w-4 h-4" /> },
  {
    id: 4,
    name: "კინო და ვიზუალური ხელოვნება",
    icon: <Film className="w-4 h-4" />,
  },
  { id: 5, name: "ცეკვა და მოძრაობა", icon: <Activity className="w-4 h-4" /> },
  {
    id: 6,
    name: "განათლება და ინოვაცია",
    icon: <Lightbulb className="w-4 h-4" />,
  },
  {
    id: 7,
    name: "დიასპორა და სამოქალაქო პლატფორმები",
    icon: <Globe className="w-4 h-4" />,
  },
  { id: 8, name: "მედია და ხმა", icon: <Megaphone className="w-4 h-4" /> },
];

export default function CategorySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="relative w-80 text-black font-sans">
      {/* მთავარი ღილაკი */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-white rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.12)] transition-all duration-300 focus:outline-none border-none"
      >
        <div className="flex items-center gap-3">
          {selectedCategory ? (
            <>
              <span className="text-blue-500">{selectedCategory.icon}</span>
              <span className="font-medium text-gray-700 text-sm">
                {selectedCategory.name}
              </span>
            </>
          ) : (
            <>
              <LayoutGrid className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-sm font-NotoSansGeorgian">
                აირჩიე სფერო
              </span>
            </>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-500" : ""
          }`}
        />
      </button>

      {/* Dropdown ანიმაციით */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] overflow-hidden border-none"
          >
            {/* ძებნის ველი */}
            <div className="relative p-2 flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-gray-300" />
              <input
                type="text"
                placeholder="ძებნა..."
                className="w-full p-2 pl-9 text-sm bg-gray-50 border-none rounded-lg outline-none focus:ring-0 font-NotoSansGeorgian"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* სია შენი სქროლით */}
            <div className="max-h-64 custom-scrollbar pb-2">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className={`flex items-center gap-3 px-4 py-3 hover:bg-blue-50/50 cursor-pointer transition-colors mx-1 rounded-md ${
                      selectedCategory?.id === cat.id
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-600"
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsOpen(false);
                      setSearchTerm("");
                    }}
                  >
                    <span
                      className={`${selectedCategory?.id === cat.id ? "text-blue-600" : "text-gray-400"}`}
                    >
                      {cat.icon}
                    </span>
                    <span className="text-sm font-NotoSansGeorgian">
                      {cat.name}
                    </span>
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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
