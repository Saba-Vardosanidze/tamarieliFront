"use client";

import { useTranslations } from "next-intl";

const Mission = () => {
  const t = useTranslations("Mission");

  return (
    <div className="flex justify-center mx-auto w-full lg:min-h-[700px] md:min-h-[500px] min-h-auto">
      <div
        className=" relative flex justify-center mx-auto
        w-full
        lg:min-h-[700px] md:min-h-[500px] min-h-[400px]
        bg-[url('/images/headerImages/png/about-basic-bg.png')]
        bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-col justify-center items-center lg:gap-7 md:gap-5 gap-4 mx-auto lg:px-4 md:px-3 px-2 w-full text-center lg:py-0 md:py-8 py-6">
          <h3 className="font-bold text-[#7B3F00] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px]">
            {t("title")}
          </h3>

          <ul className="flex flex-col lg:gap-6 md:gap-4 gap-3 text-[#7B3F00] lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] list-disc list-inside">
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
            <li>{t("point4")}</li>
            <li>{t("point5")}</li>
            <li>{t("point6")}</li>
            <li>{t("point7")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mission;
