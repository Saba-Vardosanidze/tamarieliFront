"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Foreword = () => {
  const t = useTranslations("Foreword");

  return (
    <div
      className="flex justify-center md:mx-auto w-full lg:min-h-[1000px] md:min-h-[1000px] min-h-auto  bg-[url('/images/headerImages/png/about-basic-bg.png')]
        bg-cover bg-center bg-no-repeat"
    >
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-stretch lg:py-5 md:py-4 py-3 w-full max-w-[1440px] lg:px-0 md:px-6 px-4">
        <div className="flex flex-col justify-center items-center lg:gap-7 md:gap-5 gap-4 mx-auto lg:px-4 md:px-3 px-2 w-full text-center">
          <h3 className="font-bold text-[#7B3F00] lg:text-[38px] md:text-[28px] sm:text-[24px] text-[20px]">
            {t("title")}
          </h3>

          <ul className="flex flex-col lg:gap-5 md:gap-4 gap-3 text-[#7B3F00] lg:text-[38px] md:text-[24px] sm:text-[20px] text-[18px] list-disc list-inside">
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Foreword;
