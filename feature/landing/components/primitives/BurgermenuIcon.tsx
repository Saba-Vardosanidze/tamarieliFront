"use client";

import { BurgerMenuIconProps } from "feature/type";
import { motion } from "motion/react";

const BurgerMenuIcon = ({ isOpen, setIsOpen }: BurgerMenuIconProps) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex h-[18px] cursor-pointer flex-col items-center justify-between"
    >
      <motion.div
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="h-[2px] w-[30px] rounded-full bg-[#000000]"
      />
      <motion.div
        animate={{
          x: isOpen ? -20 : 0,
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="h-[2px] w-[30px] rounded-full  bg-[#000000]"
      />
      <motion.div
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="h-[2px] w-[30px] rounded-full  bg-[#000000]"
      />
    </button>
  );
};

export default BurgerMenuIcon;
