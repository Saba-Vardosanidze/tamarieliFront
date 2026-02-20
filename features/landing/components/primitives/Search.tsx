'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import SearchFilter from './SearchFilter';
import { useTranslations } from 'next-intl';

export default function SearchSection() {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('SearchFilter');

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
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="hover:bg-gray-100 p-3 rounded-full transition-all cursor-pointer"
      >
        <Search size={22} className="text-[#000000]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-[50] fixed inset-0 bg-black/10 backdrop-blur-sm"
            />

            <motion.div
              ref={searchRef}
              initial={{ y: -100, x: '-50%', opacity: 0 }}
              animate={{ y: 20, x: '-50%', opacity: 1 }}
              exit={{ y: -100, x: '-50%', opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="top-0 left-1/2 z-[60] fixed px-4 w-full max-w-[800px]"
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
                  placeholder={t('searchPlaceholder')}
                  className="px-4 outline-none w-full h-14 text-gray-700 text-lg"
                />
              </div>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 20, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <SearchFilter />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
