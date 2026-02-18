"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import SearchFilter from "./SearchFilter";
import { useLocale, useTranslations } from "next-intl";

export default function SearchSection() {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("SearchFilter");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 hover:bg-gray-100 rounded-full transition-all cursor-pointer"
      >
        <Search size={22} className=" text-[#000000] " />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[50]"
            />

            <motion.div
              ref={searchRef}
              initial={{ y: -100, x: "-50%", opacity: 0 }}
              animate={{ y: 20, x: "-50%", opacity: 1 }}
              exit={{ y: -100, x: "-50%", opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 left-1/2 z-[60] w-full max-w-[800px] px-4"
            >
              <div className="relative flex items-center bg-white shadow-2xl border rounded-xl overflow-hidden">
                <div className="pl-5 text-gray-400">
                  <Search
                    size={22}
                    className="text-gray-700 group-hover:text-black"
                    strokeWidth={2.5}
                  />
                </div>

                <input
                  autoFocus
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  className="w-full h-14 px-4 outline-none text-lg text-gray-700"
                />

                <button
                  onClick={() => setIsOpen(false)}
                  className="pr-5 text-gray-400  transition-colors"
                >
                  <X
                    size={22}
                    className=" rounded-full transition-all cursor-pointer"
                  />
                </button>
              </div>
              <SearchFilter />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
