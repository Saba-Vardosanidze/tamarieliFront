"use client";

import { FooterItems } from "feature/landing/data/landingData";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./FooterSocmediaLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-[#E0E0E0] mx-auto py-6 sm:py-8 md:py-10 lg:py-12 w-full md:justify-center mt-[60px]">
      <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-[1100px] gap-8 lg:gap-0">
        <div className="flex flex-col w-full lg:w-auto">
          {FooterItems.map((item, index) => (
            <FooterLinks
              key={index}
              contactUs={item.contactUs}
              links={item.links}
            />
          ))}
          <SocialIcons />
        </div>
        <div className="flex lg:justify-end w-full lg:w-[522px] h-auto lg:h-[325px]">
          <Image
            src="/images/headerImages/png/bgremoved.png"
            width={522}
            height={325}
            alt="footerImage"
            className="w-full h-auto object-contain max-w-[522px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 mt-8 lg:mt-12 w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full max-w-[1440px]">
          <Image
            src="/images/headerImages/svg/line.svg"
            width={1220}
            height={1}
            alt="divider"
            className="w-full"
          />
        </div>
        <p className="font-light text-[#000000B2] text-[14px] sm:text-[16px] lg:text-[18px] text-center ">
          © 2025 TAMARIELI. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
