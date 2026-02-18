"use client";

import { HeaderData } from "features/landing/data/landingData";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import BurgerMenuIcon from "./BurgermenuIcon";
import { useState } from "react";
import LocaleSwitcher from "@features/i18n/components/LocaleSwitcher";
import { useLocale, useTranslations } from "next-intl";
import SearchSection from "./Search";

const Header = () => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations("Header");

  return (
    <div className="relative bg-[#fcfcfc] w-full">
      <header className="z-[10003] relative bg-[#fcfcfc] mx-auto px-6 sm:px-12 lg:px-20 w-full max-w-[1440px] min-h-[100px]">
        <div className="flex justify-between items-center h-[80px] sm:h-[100px]">
          <Link href={"/"} className="group">
            <div className="relative group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/Images/headerImages/png/tamarieliLogo.png"
                alt="logo"
                width={56}
                height={56}
                className="sm:w-[64px] sm:h-[64px] object-contain"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              {HeaderData.map((eachElement) => (
                <Link
                  key={eachElement.id}
                  href={`/${locale || "en"}/${eachElement.href}`}
                  className="group relative py-2"
                >
                  <span className="font-bold text-[13px] text-gray-700 group-hover:text-blue-600 uppercase tracking-widest transition-colors duration-300">
                    {t(eachElement.title.toLowerCase())}
                  </span>
                  <span className="bottom-0 left-0 absolute bg-blue-600 w-0 group-hover:w-full h-[2px] transition-all duration-300 ease-in-out" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6 pl-8 border-gray-200 border-l">
              <LocaleSwitcher />
              <Link
                href={`#contact`}
                className="bg-gray-900 hover:bg-blue-600 shadow-sm px-7 py-3 rounded-full font-bold text-[11px] text-white uppercase tracking-[0.1em] active:scale-95 transition-all"
              >
                {t("contact")}
              </Link>
            </div>
            <SearchSection />
          </div>

          {/* MOBILE */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-4">
            <SearchSection />
            <div className="hidden sm:block">
              <LocaleSwitcher />
            </div>
            <div className="bg-gray-100/50 p-2 rounded-xl">
              <BurgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </header>

      <div className="relative w-full h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-60" />
      </div>

      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
