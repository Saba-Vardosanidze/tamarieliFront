"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Foreword = () => {
  const t = useTranslations("Foreword");

  return (
    <div className="flex justify-center w-full min-h-[700px] md:mx-auto">
      <div className="max-w-[1440px] w-full flex justify-between  py-5">
        <div className="min-h-[700px] flex flex-col justify-between">
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

        <div className="w-full flex flex-col items-center justify-center text-center mx-auto gap-7 px-4">
          <h3 className="text-[32px] text-[#7B3F00] font-bold">{t("title")}</h3>

          <ul className="list-disc list-inside text-[28px] text-[#7B3F00] flex flex-col gap-5">
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
          </ul>
        </div>

        <div className="min-h-[700px] flex flex-col justify-between">
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

export default Foreword;
