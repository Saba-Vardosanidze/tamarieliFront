"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BasicPrinciples = () => {
  const t = useTranslations("BasicPrinciples");

  return (
    <div className="flex justify-center w-full py-10 px-4 sm:px-6 lg:px-0">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row justify-between gap-10">
        {/* Left image column */}
        <div className="flex lg:flex-col justify-between items-center lg:items-start min-h-[400px] lg:min-h-[700px] gap-10 lg:gap-0">
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={300}
            alt="about-us"
            className="rotate-270"
          />
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={300}
            alt="about-us"
            className="rotate-180"
          />
        </div>

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center lg:items-center text-center lg:text-center gap-7">
          <h3 className="text-[28px] sm:text-[32px] md:text-[36px] text-[#7B3F00] font-bold">
            {t("title")}
          </h3>

          <ul className="list-disc list-inside text-[20px] sm:text-[24px] text-[#7B3F00] flex flex-col gap-4 sm:gap-6">
            <li>{t("inclusivity")}</li>
            <li>{t("communication")}</li>
            <li>{t("interaction")}</li>
            <li>{t("culturalExchange")}</li>
          </ul>
        </div>

        {/* Right image column */}
        <div className="flex lg:flex-col justify-between items-center lg:items-end min-h-[400px] lg:min-h-[700px] gap-10 lg:gap-0">
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={200}
            alt="about-us"
            className="rotate-0"
          />
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={200}
            alt="about-us"
            className="rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicPrinciples;
