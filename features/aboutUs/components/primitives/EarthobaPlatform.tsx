"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const EarthobaPlatform = () => {
  const t = useTranslations("EarthobaPlatform");

  return (
    <div
      className=" relative flex justify-center md:mx-auto w-full lg:min-h-[900px] md:min-h-[500px]   bg-[url('/images/headerImages/png/about-basic-bg.png')]
        bg-cover bg-center bg-no-repeat"
    >
      <div
        className="
    absolute

    hidden
    lg:block
   right-4 top-25
    lg:right-[50px] lg:top-[50px]
  "
      >
        <Image
          src="/images/headerImages/png/earthoba.png"
          alt="logo"
          width={150}
          height={150}
          className="
      w-[70px] h-[70px]
      lg:w-[150px] lg:h-[150px]
    "
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between py-16 sm:py-20 lg:py-[100px] w-full max-w-[1440px] gap-8 lg:gap-12 py-[100px]">
        <div className="flex flex-col justify-center gap-6 sm:gap-7 text-center w-full py-[40px]">
          <h3 className="font-bold text-[#7B3F00] text-2xl sm:text-3xl lg:text-[32px] leading-tight flex flex-col ">
            {t("title")}
          </h3>
          <h3 className="font-bold text-[#7B3F00] text-2xl sm:text-3xl lg:text-[32px] leading-tight flex flex-col ">
            {" "}
            {t("title2")}
          </h3>

          <ul className="flex flex-col gap-4 sm:gap-5 lg:gap-6 text-[#7B3F00] text-lg sm:text-xl lg:text-[24px] list-disc list-inside px-4 sm:px-6">
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
            <li>{t("point4")}</li>
          </ul>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-10 w-full mt-6 sm:mt-8">
            <div className="flex-1 text-left">
              <h4 className="mb-3 sm:mb-4 font-bold text-[#7B3F00] text-xl sm:text-2xl lg:text-[28px]">
                {t("mainDirectionsTitle")}
              </h4>
              <ul className="text-[#7B3F00] text-base sm:text-lg lg:text-[20px] list-disc list-inside space-y-1 sm:space-y-2">
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
              <h4 className="mb-3 sm:mb-4 font-bold text-[#7B3F00] text-xl sm:text-2xl lg:text-[28px]">
                {t("valuesTitle")}
              </h4>
              <p className="text-[#7B3F00] text-base sm:text-lg lg:text-[20px] leading-relaxed">
                {t("valuesDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthobaPlatform;
