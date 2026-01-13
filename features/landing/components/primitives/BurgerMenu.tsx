'use client';

import LocaleSwitcher from '@features/i18n/components/LocaleSwitcher';
import { HeaderData } from 'features/landing/data/landingData';
import { BurgerMenuIconProps } from 'features/type';
import { AnimatePresence, motion } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect } from 'react';

const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuIconProps) => {
  const locale = useLocale();
  const t = useTranslations('Header');

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
            className="z-[10000] fixed inset-0 flex flex-col items-center bg-white/95 backdrop-blur-md mt-[80px] w-screen overflow-y-auto"
            initial={{ y: '-100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-10 py-12 w-full">
              <nav className="flex flex-col items-center gap-8">
                {HeaderData.map((eachElement) => (
                  <Link
                    key={eachElement.id}
                    href={`/${locale || '/en'}/${eachElement.href}`}
                    className="group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-bold text-gray-900 hover:text-blue-600 text-2xl uppercase tracking-tight transition-colors">
                      {t(eachElement.title.toLowerCase())}
                    </span>
                    <div className="bg-blue-600 mx-auto w-0 group-hover:w-full h-0.5 transition-all duration-300" />
                  </Link>
                ))}
              </nav>

              <div className="bg-gray-200 w-20 h-px" />

              <div className="scale-110">
                <LocaleSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
