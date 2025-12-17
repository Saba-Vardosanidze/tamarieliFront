"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import aboutUsSvg from "../../../../public/Images/headerImages/svg/aboutUsSvg.svg";

const SocialResponsibility = () => {
  const t = useTranslations("SocialResponsibility");

  return (
    <div
      className=" relative flex justify-center mx-auto
        w-full
           lg:min-h-[1320px] md:min-h-[500px] min-h-[400px]
        bg-[url('/images/headerImages/png/about-us-tamarieli.png')]
        bg-cover bg-center bg-no-repeat"
    >
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-stretch w-full max-w-[1440px] lg:px-0 md:px-6 px-4">
        <div className="flex flex-col justify-center items-center lg:gap-7 md:gap-5 gap-4 mx-auto lg:px-4 md:px-3 px-2 w-full text-center lg:py-0 md:py-8 py-6">
          <h3 className="font-bold text-[#000000] lg:text-[56px] md:text-[28px] sm:text-[24px] text-[38px]">
            {t("title")}
          </h3>

          <ul className="text-[#000000] lg:text-[44px] md:text-[24px] sm:text-[20px] text-[18px] list-disc list-inside">
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
            <li>{t("point4")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialResponsibility;
