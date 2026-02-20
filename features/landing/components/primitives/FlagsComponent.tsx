'use client';

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
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
  { value: 'austria', name: 'ავსტრია', code: 'at' },
  { value: 'belgium', name: 'ბელგია', code: 'be' },
  { value: 'bulgaria', name: 'ბულგარეთი', code: 'bg' },
  { value: 'croatia', name: 'ხორვატია', code: 'hr' },
  { value: 'cyprus', name: 'კვიპროსი', code: 'cy' },
  { value: 'czech_republic', name: 'ჩეხეთი', code: 'cz' },
  { value: 'denmark', name: 'დანია', code: 'dk' },
  { value: 'estonia', name: 'ესტონეთი', code: 'ee' },
  { value: 'finland', name: 'ფინეთი', code: 'fi' },
  { value: 'france', name: 'საფრანგეთი', code: 'fr' },
  { value: 'germany', name: 'გერმანია', code: 'de' },
  { value: 'greece', name: 'საბერძნეთი', code: 'gr' },
  { value: 'hungary', name: 'უნგრეთი', code: 'hu' },
  { value: 'ireland', name: 'ირლანდია', code: 'ie' },
  { value: 'italy', name: 'იტალია', code: 'it' },
  { value: 'latvia', name: 'ლატვია', code: 'lv' },
  { value: 'lithuania', name: 'ლიტვა', code: 'lt' },
  { value: 'luxembourg', name: 'ლუქსემბურგი', code: 'lu' },
  { value: 'malta', name: 'მალტა', code: 'mt' },
  { value: 'netherlands', name: 'ნიდერლანდები', code: 'nl' },
  { value: 'poland', name: 'პოლონეთი', code: 'pl' },
  { value: 'portugal', name: 'პორტუგალია', code: 'pt' },
  { value: 'romania', name: 'რუმინეთი', code: 'ro' },
  { value: 'slovakia', name: 'სლოვაკეთი', code: 'sk' },
  { value: 'slovenia', name: 'სლოვენია', code: 'si' },
  { value: 'spain', name: 'ესპანეთი', code: 'es' },
  { value: 'sweden', name: 'შვედეთი', code: 'se' },
  { value: 'england', name: 'ინგლისი', code: 'gb' },
  { value: 'united_states', name: 'ამერიკა', code: 'us' },
  { value: 'ukraine', name: 'უკრაინა', code: 'ua' },
];

type Props = {
  value: Country | null;
  onChange: (value: Country | null) => void;
};

export default function CountrySelect({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const t = useTranslations('CountryList');

  const selectedCountry = COUNTRIES.find((c) => c.value === value) ?? null;

  const filteredCountries = COUNTRIES.filter((c) =>
    t(c.value).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (country: CountryOption) => {
    onChange(selectedCountry?.value === country.value ? null : country.value);
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
          {selectedCountry ? (
            <>
              <span
                className={`fi fi-${selectedCountry.code} w-5 h-3.5 rounded-[1px] shadow-xs`}
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
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => {
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
