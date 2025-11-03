'use client';

import LocaleSwitcher from '@features/i18n/components/LocaleSwitcher';
import { HeaderData } from 'features/landing/data/landingData';
import { BurgerMenuIconProps } from 'features/type';
import { AnimatePresence, motion } from 'motion/react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useEffect } from 'react';

const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuIconProps) => {
  const locale = useLocale();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="burger-menu"
            className="z-[10] fixed inset-0 flex justify-center bg-[lightgrey] mt-[50px] w-screen overflow-y-auto"
            initial={{ y: '-100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-center gap-4">
              <div className="flex flex-col justify-center gap-4">
                {HeaderData.map((eachElement) => (
                  <div
                    key={eachElement.id}
                    className="flex justify-center items-center gap-4"
                  >
                    <Link href={`/${locale || '/en'}/${eachElement.href}`}>
                      <ul className="font-[600] text-[#1a1b1f] text-[14px] hover:text-[#606371] cursor-pointer">
                        {eachElement.title}
                      </ul>
                    </Link>
                  </div>
                ))}
              </div>
              <LocaleSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
