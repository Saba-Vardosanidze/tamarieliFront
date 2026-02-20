'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import 'flag-icons/css/flag-icons.min.css';
import { Country } from '@features/landing/api/type';

type CountryOption = {
  value: Country;
  name: string;
  code: string;
};

const COUNTRIES: CountryOption[] = [
  { value: 'georgia', name: 'საქართველო', code: 'ge' },
  { value: 'france', name: 'საფრანგეთი', code: 'fr' },
];

type Props = {
  value: Country | null;
  onChange: (value: Country | null) => void;
};

export default function CountrySelect({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('CountryList');

  const selectedCountry = COUNTRIES.find((c) => c.value === value) ?? null;

  const handleSelect = (country: CountryOption) => {
    onChange(selectedCountry?.value === country.value ? null : country.value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full font-sans text-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.12)] p-3 py-3 border-none rounded-xl focus:outline-none w-full transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          {selectedCountry ? (
            <>
              <span
                className={`fi fi-${selectedCountry.code} w-6 h-4 rounded-sm shadow-sm`}
              />
              <span className="font-NotoSansGeorgian font-medium text-gray-700 text-sm">
                {t(selectedCountry.value)}
              </span>
            </>
          ) : (
            <span className="font-NotoSansGeorgian text-gray-400 text-sm">
              {t('placeholder')}
            </span>
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
            {COUNTRIES.map((country) => {
              const isSelected = selectedCountry?.value === country.value;
              return (
                <div
                  key={country.value}
                  onClick={() => handleSelect(country)}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-blue-50/50 cursor-pointer transition-colors mx-1 rounded-md ${
                    isSelected
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-600'
                  }`}
                >
                  <span
                    className={`fi fi-${country.code} w-5 h-3.5 rounded-[1px] shadow-xs`}
                  />
                  <span className="font-NotoSansGeorgian text-sm">
                    {t(country.value)}
                  </span>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div className="z-40 fixed inset-0" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
