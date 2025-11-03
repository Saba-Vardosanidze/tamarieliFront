"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const EarthobaPlatform = () => {
  const t = useTranslations("EarthobaPlatform");

  return (
    <div className="flex justify-center w-full mx-auto">
      <div className="max-w-[1440px] w-full flex justify-between py-[100px]">
        <div className="min-h-[700px] flex flex-col justify-between">
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={300}
            alt="left-image"
            className="rotate-270"
          />
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={300}
            alt="left-image"
            className="rotate-180"
          />
        </div>

        <div className="w-full flex flex-col justify-center text-center mx-auto gap-7">
          <h3 className="text-[32px] text-[#7B3F00] font-bold">{t("title")}</h3>

          <ul className="list-disc list-inside text-[24px] text-[#7B3F00] flex flex-col gap-6">
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
            <li>{t("point4")}</li>
          </ul>

          <div className="w-full flex md:flex-row gap-10">
            <div className="flex-1 flex-col text-left">
              <h4 className="text-[28px] font-bold text-[#7B3F00] mb-4">
                {t("mainDirectionsTitle")}
              </h4>
              <ul className="text-[#7B3F00] list-disc list-inside">
                <li>{t("direction1")}</li>
                <li>{t("direction2")}</li>
                <li>{t("direction3")}</li>
                <li>{t("direction4")}</li>
                <li>{t("direction5")}</li>
                <li>{t("direction6")}</li>
                <li>{t("direction7")}</li>
              </ul>
            </div>

            <div className="flex-1 text-left">
              <h4 className="text-[28px] font-bold mb-4 text-[#7B3F00]">
                {t("valuesTitle")}
              </h4>
              <p className="text-[20px] gap-2 text-[#7B3F00]">
                {t("valuesDescription")}
              </p>
            </div>
          </div>
        </div>

        {/* Right image column */}
        <div className="min-h-[700px] flex flex-col justify-between">
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={200}
            alt="right-image"
            className="rotate-0"
          />
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={200}
            alt="right-image"
            className="rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default EarthobaPlatform;
