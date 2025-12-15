"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import aboutUsSvg from "../../../../public/Images/headerImages/svg/aboutUsSvg.svg";

const EarthobaPlatform = () => {
  const t = useTranslations("EarthobaPlatform");

  return (
    <div
      className="flex justify-center md:mx-auto w-full lg:min-h-[700px] md:min-h-[500px] min-h-auto  bg-[url('/images/headerImages/png/about-tamarieli.jpeg')]
        bg-cover bg-center bg-no-repeat"
    >
      <div className="flex flex-col lg:flex-row justify-between py-16 sm:py-20 lg:py-[100px] w-full max-w-[1440px] gap-8 lg:gap-12 py-[100px]">
        {/* LEFT DECORATIVE IMAGES – Hidden on mobile, stacked on tablet */}
        {/* <div className="hidden lg:flex flex-col justify-between min-h-[600px] lg:min-h-[700px] flex-shrink-0">
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="left-image-top"
            className="rotate-270 w-full max-w-[250px] lg:max-w-[300px] object-contain"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="left-image-bottom"
            className="rotate-180 w-full max-w-[250px] lg:max-w-[300px] object-contain"
          />
        </div> */}

        <div className="flex flex-col justify-center gap-6 sm:gap-7 text-center w-full py-[40px]">
          <h3 className="font-bold text-[#7B3F00] text-2xl sm:text-3xl lg:text-[32px] leading-tight">
            {t("title")}
          </h3>

          <ul className="flex flex-col gap-4 sm:gap-5 lg:gap-6 text-[#7B3F00] text-lg sm:text-xl lg:text-[24px] list-disc list-inside px-4 sm:px-6">
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
            <li>{t("point4")}</li>
          </ul>

          {/* TWO-COLUMN SECTION – Stacks on mobile/tablet, side-by-side on large tablet+ */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-10 w-full mt-6 sm:mt-8">
            {/* Main Directions */}
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

            {/* Values */}
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

        {/* RIGHT DECORATIVE IMAGES – Hidden on mobile, stacked on tablet */}
        {/* <div className="hidden lg:flex flex-col justify-between min-h-[600px] lg:min-h-[700px] flex-shrink-0">
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="right-image-top"
            className="rotate-0 w-full max-w-[250px] lg:max-w-[300px] object-contain"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="right-image-bottom"
            className="rotate-90 w-full max-w-[250px] lg:max-w-[300px] object-contain"
          />
        </div> */}
      </div>
    </div>
  );
};

export default EarthobaPlatform;
