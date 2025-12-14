"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import aboutUsSvg from "../../../../public/Images/headerImages/svg/aboutUsSvg.svg";

const Foreword = () => {
  const t = useTranslations("Foreword");

  return (
    <div className="flex justify-center md:mx-auto w-full lg:min-h-[700px] md:min-h-[500px] min-h-auto">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-stretch lg:py-5 md:py-4 py-3 w-full max-w-[1440px] lg:px-0 md:px-6 px-4">
        {/* <div className="lg:flex hidden flex-col justify-between lg:min-h-[700px]">
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="about-us"
            className="rotate-270"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="about-us"
            className="rotate-180"
          />
        </div> */}

        <div className="flex flex-col justify-center items-center lg:gap-7 md:gap-5 gap-4 mx-auto lg:px-4 md:px-3 px-2 w-full text-center">
          <h3 className="font-bold text-[#7B3F00] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px]">
            {t("title")}
          </h3>

          <ul className="flex flex-col lg:gap-5 md:gap-4 gap-3 text-[#7B3F00] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] list-disc list-inside">
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
          </ul>
        </div>

        {/* <div className="lg:flex hidden flex-col justify-between lg:min-h-[700px]">
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="about-us"
            className="rotate-0"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="about-us"
            className="rotate-90"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Foreword;
