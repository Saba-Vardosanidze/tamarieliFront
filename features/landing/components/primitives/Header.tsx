'use client';
import { HeaderData } from 'features/landing/data/landingData';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import BurgerMenuIcon from './BurgermenuIcon';
import { useState } from 'react';
import LocaleSwitcher from '@features/i18n/components/LocaleSwitcher';
import { useLocale, useTranslations } from 'next-intl';

const Header = () => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations('Header');

  return (
    <div className="flex justify-center bg-gradient-to-b from-white to-gray-50 shadow-sm w-full">
      <header className="flex flex-col justify-center items-center w-full max-w-[1440px]">
        <div className="z-[201] relative flex bg-white/80 backdrop-blur-md px-5 border-gray-200 border-b w-full">
          <div className="flex justify-between py-4 w-full">
            <Link href={'/'} className="group">
              <div className="relative rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/Images/headerImages/png/tamarieliLogo.png"
                  alt="logo"
                  width={50}
                  height={50}
                  className="group-hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                />
              </div>
            </Link>

            <div className="hidden lg:flex justify-between items-center gap-8 min-h-[30px]">
              <nav className="flex justify-center items-center gap-8">
                {HeaderData.map((eachElement) => (
                  <div key={eachElement.id} className="group relative">
                    <Link href={`/${locale || '/en'}/${eachElement.href}`}>
                      <span className="relative font-semibold text-gray-800 hover:text-blue-600 text-sm tracking-wide transition-colors duration-300 cursor-pointer">
                        {t(eachElement.title.toLowerCase())}
                        <span className="bottom-0 left-0 absolute bg-blue-600 w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
                      </span>
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="pl-4 border-gray-200 border-l">
                <LocaleSwitcher />
              </div>
            </div>

            <div className="lg:hidden flex items-center">
              <BurgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </div>
  );
};

export default Header;
