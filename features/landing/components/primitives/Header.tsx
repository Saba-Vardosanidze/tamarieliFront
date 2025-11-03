'use client';

import { HeaderData } from 'features/landing/data/landingData';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import BurgerMenuIcon from './BurgermenuIcon';
import { useState } from 'react';
import LocaleSwitcher from '@features/i18n/components/LocaleSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center bg-[#E0E0E0] w-full">
      <header className="flex flex-col justify-center items-center w-full max-w-[1440px]">
        <div className="z-[201] relative flex bg-[#E0E0E0] px-5 border-[lightgrey] border-b w-full">
          <div className="flex justify-between py-2.5 w-full">
            <Link href={'/'}>
              <Image
                src="/images/headerImages/png/siteLogoa.png"
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </Link>
            <div className="hidden lg:flex justify-between items-center gap-4 min-h-[30px]">
              <div className="flex justify-center items-center gap-4">
                {HeaderData.map((eachElement) => (
                  <div
                    key={eachElement.id}
                    className="flex justify-center items-center gap-4"
                  >
                    <Link href={eachElement.href}>
                      <ul className="font-[600] text-[#1a1b1f] text-[14px] hover:text-[#606371] cursor-pointer">
                        {eachElement.title}
                      </ul>
                    </Link>
                  </div>
                ))}
              </div>
              <LocaleSwitcher />
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
