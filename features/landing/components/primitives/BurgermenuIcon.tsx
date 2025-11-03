'use client';

import { BurgerMenuIconProps } from 'features/type';
import { motion } from 'motion/react';

const BurgerMenuIcon = ({ isOpen, setIsOpen }: BurgerMenuIconProps) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col justify-between items-center h-[18px] cursor-pointer"
    >
      <motion.div
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="bg-[#000000] rounded-full w-[30px] h-[2px]"
      />
      <motion.div
        animate={{
          x: isOpen ? -20 : 0,
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="bg-[#000000] rounded-full w-[30px] h-[2px]"
      />
      <motion.div
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="bg-[#000000] rounded-full w-[30px] h-[2px]"
      />
    </button>
  );
};

export default BurgerMenuIcon;
