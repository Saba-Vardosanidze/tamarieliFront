'use client';
import { useState } from 'react';
import Image from 'next/image';
import { options } from 'feature/landing/data/landingData';

export default function BurgerMenuLanguageOptions() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative">
      <button
        className="flex justify-between items-center p-[10px] border border-[#00000066]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-[8px] cursor-pointer">
          <Image
            src={selected.img}
            alt={selected.label}
            width={24}
            height={16}
          />
          <p className="text-[#000000CC] text-[14px]">{selected.label}</p>
        </div>
      </button>

      {isOpen && (
        <ul className="top-[50px] z-10 absolute flex flex-col justify-between gap-[10px] bg-[#E0E0E0] p-[10px] border border-[#00000066]">
          {options.map((option) => (
            <li
              key={option.id}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              <Image
                src={option.img}
                alt={option.label}
                width={24}
                height={16}
              />
              <p className="text-[#000000CC] text-[14px]">{option.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
