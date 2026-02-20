'use client';

import { useState } from 'react';
import { ChevronDown, Search, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '@features/landing/data/landingData';
import { Category } from '../type';
import { useTranslations } from 'next-intl';
import { ProjectCategory } from '@features/landing/api/type';

type Props = {
  value: ProjectCategory | null;
  onChange: (value: ProjectCategory | null) => void;
};

export default function CategorySelect({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const t = useTranslations('Categories');

  const selectedCategory = categories.find((c) => c.value === value) ?? null;

  const filteredCategories = categories.filter((c) =>
    t(c.i18nKey).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (cat: Category) => {
    onChange(selectedCategory?.value === cat.value ? null : cat.value);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative w-full font-sans text-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.12)] p-3 py-3 border-none rounded-xl focus:outline-none w-full transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          {selectedCategory ? (
            <>
              <selectedCategory.icon className="w-4 h-4 text-blue-500" />
              <span className="font-medium text-gray-700 text-sm">
                {t(selectedCategory.i18nKey)}
              </span>
            </>
          ) : (
            <>
              <LayoutGrid className="w-5 h-5 text-gray-400" />
              <span className="font-NotoSansGeorgian text-gray-400 text-sm">
                {t('placeholder')}
              </span>
            </>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-blue-500' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="z-50 absolute bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] mt-2 rounded-xl w-full overflow-hidden"
          >
            <div className="relative flex items-center p-2">
              <Search className="left-4 absolute w-4 h-4 text-gray-300" />
              <input
                type="text"
                placeholder={t('placeholder')}
                className="bg-gray-50 p-2 pl-9 rounded-lg outline-none w-full font-NotoSansGeorgian text-sm"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="pb-2 max-h-64 custom-scrollbar">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory?.id === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => handleSelect(cat)}
                      className={`flex items-center gap-3 px-4 py-3 hover:bg-blue-50/50 cursor-pointer transition-colors mx-1 rounded-md ${
                        isSelected
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-600'
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${
                          isSelected ? 'text-blue-600' : 'text-gray-400'
                        }`}
                      />
                      <span className="font-NotoSansGeorgian text-sm">
                        {t(cat.i18nKey)}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 font-NotoSansGeorgian text-gray-400 text-sm text-center italic">
                  {t('noResults')}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div className="z-40 fixed inset-0" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
