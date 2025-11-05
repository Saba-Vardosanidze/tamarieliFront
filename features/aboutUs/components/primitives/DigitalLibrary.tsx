"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const DigitalLibrary = () => {
  const t = useTranslations("DigitalLibrary");

  return (
    <div className="flex justify-center w-full mx-auto">
      <div className="max-w-[1440px] w-full flex justify-between">
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

        <div className="w-full flex flex-col items-center justify-center text-center mx-auto gap-7 px-4 py-5">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-[32px] text-[#7B3F00] font-bold">
              {t("title")}
            </h3>
            <p className="text-[28px] text-[#7B3F00] font-[500]">
              {t("subtitle")}
            </p>
          </div>

          <ul className="text-[24px] text-[#7B3F00] flex flex-col gap-6">
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
            <li>{t("point4")}</li>
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

export default DigitalLibrary;
