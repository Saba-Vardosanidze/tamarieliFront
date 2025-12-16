"use client";

import { FooterItems } from "features/landing/data/landingData";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./FooterSocmediaLinks";
import bgRemoved from "../../../../public/Images/headerImages/png/bgremoved.png";
import line from "../../../../public/Images/headerImages/svg/Line.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center md:justify-center items-center bg-[#E0E0E0] mx-auto mt-[90px] py-6 sm:py-8 md:py-10 lg:py-12 w-full">
      <div className="flex lg:flex-row flex-col justify-between gap-8 lg:gap-0 px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-[1280px]">
        <div className="flex flex-col w-full lg:w-auto justify-center">
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
            src={bgRemoved}
            width={500}
            height={300}
            alt="footerImage"
            className="w-full max-w-[522px] h-auto object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 mt-8 lg:mt-12 px-4 sm:px-6 md:px-8 lg:px-10 w-full">
        <div className="w-full max-w-[1440px]">
          <Image
            src={line}
            width={1220}
            height={1}
            alt="divider"
            className="w-full"
          />
        </div>
        <p className="font-light text-[#000000B2] text-[14px] sm:text-[16px] lg:text-[18px] text-center">
          © 2025 TAMARIELI. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
