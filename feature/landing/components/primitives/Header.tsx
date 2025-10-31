"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import BurgerMenuIcon from "./BurgermenuIcon";
import BurgerMenuLanguageOptions from "./BurgerMenuLanguageOptions";
import LocaleSwitcherSelect from "feature/i18n/components/LocaleSwitcherSelect";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations("Header");

  const HeaderData = [
    { id: "1", title: t("home"), href: "/" },
    { id: "2", title: t("about"), href: "/aboutUs" },
    { id: "3", title: t("guide"), href: "/" },
  ];

  return (
    <div className="flex justify-center bg-[#E0E0E0] w-full">
      <header className="flex flex-col justify-center items-center w-full max-w-[1440px]">
        <div className="z-[201] relative flex bg-[#E0E0E0] px-5 border-[lightgrey] border-b w-full">
          <div className="flex justify-between py-2.5 w-full">
            <Link href={"/"}>
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
                    <Link href={eachElement.href}>
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

              <LocaleSwitcherSelect />
            </div>

            <div className="lg:hidden flex items-center">
              <BurgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>

        {/* <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      </header>
    </div>
  );
};

export default Header;
