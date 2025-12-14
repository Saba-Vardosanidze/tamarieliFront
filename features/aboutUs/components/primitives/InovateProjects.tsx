"use client";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import aboutUs from "../../../../public/Images/headerImages/svg/aboutUsSvg.svg";
import tamarieliLogo from "../../../../public/Images/headerImages/png/tamarieliLogo.png";
import earthoba from "../../../../public/Images/headerImages/png/ertoba.png";
import ciblus from "../../../../public/Images/headerImages/png/ciblus.png";

const InovateProjects = () => {
  const t = useTranslations("InovateProjects");

  return (
    <div className="flex justify-center mx-auto w-full">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-stretch w-full max-w-[1440px] lg:px-0 md:px-6 px-4">
        {/*  
        <div className="lg:flex hidden flex-col justify-between lg:min-h-[700px]">
          <Image
            src={aboutUs}
            width={300}
            height={300}
            alt="Decorative element"
            className="rotate-270"
          />
          <Image
            src={aboutUs}
            width={300}
            height={300}
            alt="Decorative element"
            className="rotate-180"
          />
        </div> */}

        <div className="flex flex-col justify-center items-center lg:gap-7 md:gap-5 gap-4 mx-auto lg:px-4 md:px-3 px-2 lg:py-[20px] md:py-8 py-6 w-full text-center">
          <h3 className="font-bold text-[#7B3F00] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px]">
            {t("title")}
          </h3>

          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-5 md:gap-4 gap-3 w-full">
            <Image
              src={tamarieliLogo}
              width={150}
              height={150}
              alt="tamarieliLogo"
              className="lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] w-[100px] h-[100px]"
            />
            <Image
              src={earthoba}
              width={150}
              height={150}
              alt="earthobaLogo"
              className="lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] w-[100px] h-[100px]"
            />
            <Image
              src={ciblus}
              width={150}
              height={150}
              alt="ciblusLogo"
              className="lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] w-[100px] h-[100px]"
            />
          </div>

          <p className="font-[600] text-[#7B3F00] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px]">
            {t("support")}
          </p>

          <ul className="flex flex-col lg:gap-6 md:gap-4 gap-3 text-[#7B3F00] lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] list-disc list-inside">
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
          </ul>
        </div>

        {/*   
        <div className="lg:flex hidden flex-col justify-between lg:min-h-[700px]">
          <Image
            src={aboutUs}
            width={300}
            height={200}
            alt="Decorative element"
            className="rotate-0"
          />
          <Image
            src={aboutUs}
            width={300}
            height={200}
            alt="Decorative element"
            className="rotate-90"
          />
        </div> */}
      </div>
    </div>
  );
};

export default InovateProjects;
