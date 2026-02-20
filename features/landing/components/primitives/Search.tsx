'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import SearchFilter from './SearchFilter';
import { useTranslations } from 'next-intl';

export default function SearchSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [debouncedName, setDebouncedName] = useState('');
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const t = useTranslations('SearchFilter');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedName(event.target.value);
    }, 400);
  };

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
              onClick={() => setIsOpen(false)}
              className="z-[50] fixed inset-0 bg-black/10 backdrop-blur-sm"
            />
            <motion.div
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
                    className="text-gray-700"
                    strokeWidth={2.5}
                  />
                </div>
                <input
                  autoFocus
                  type="text"
                  value={projectName}
                  onChange={handleChange}
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
                <SearchFilter
                  projectName={debouncedName}
                  setIsOpen={setIsOpen}
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
