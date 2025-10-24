'use client';

import { HeaderData } from 'feature/landing/data/landingData';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import BurgerMenuIcon from './BurgermenuIcon';
import { useState } from 'react';
import BurgerMenuLanguageOptions from './BurgerMenuLanguageOptions';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="flex flex-col justify-center items-center w-full">
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
          <div className="hidden lg:flex justify-between items-center min-h-[30px]">
            <div className="flex justify-center items-center gap-4">
              {HeaderData.map((eachElement) => (
                <div
                  key={eachElement.id}
                  className="flex justify-center items-center gap-4"
                >
                  <Link href="/">
                    <ul className="font-[600] text-[#1a1b1f] text-[14px] hover:text-[#606371] cursor-pointer">
                      {eachElement.title}
                    </ul>
                  </Link>
                </div>
              ))}
              <div className="hidden lg:flex">
                <BurgerMenuLanguageOptions />
              </div>
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            <BurgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
