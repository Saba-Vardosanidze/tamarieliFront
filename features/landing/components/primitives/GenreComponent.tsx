"use client";

import { useState } from "react";
import { ChevronDown, Search, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@features/landing/data/landingData";
import { Category } from "../type";
import { useTranslations } from "next-intl";

export default function CategorySelect() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations("CategorySelect");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="relative w-80 text-black font-sans">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-white rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.12)] transition-all duration-300 focus:outline-none border-none"
      >
        <div className="flex items-center gap-3">
          {selectedCategory ? (
            <>
              <selectedCategory.icon className="w-4 h-4 text-blue-500" />
              <span className="font-medium text-gray-700 text-sm">
                {selectedCategory.name}
              </span>
            </>
          ) : (
            <>
              <LayoutGrid className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-sm font-NotoSansGeorgian">
                {t("placeholder")}
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
                placeholder={t("searchPlaceholder")}
                className="w-full p-2 pl-9 text-sm bg-gray-50 border-none rounded-lg outline-none focus:ring-0 font-NotoSansGeorgian"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="max-h-64 custom-scrollbar pb-2">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat: Category) => {
                  const Icon = cat.icon;
                  return (
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
                        className={`${
                          selectedCategory?.id === cat.id
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-sm font-NotoSansGeorgian">
                        {cat.name}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-sm text-gray-400 italic font-NotoSansGeorgian">
                  {t("noResults")}
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
