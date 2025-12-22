"use client";

import { useTranslations } from "next-intl";

const Mission = () => {
  const t = useTranslations("Mission");

  return (
    <div
      className="flex justify-center items-center w-full
        min-h-[400px] md:min-h-[500px] lg:min-h-[1000px]
        bg-[url('/Images/headerImages/png/newAboutUsBg.jpeg')]
        bg-cover bg-center bg-no-repeat"
    >
      <div className="flex flex-col justify-center items-center w-full max-w-[1440px] px-4 py-6 md:py-8 lg:py-0 text-center ">
        <h3 className="font-bold text-[#000000] text-[15px] sm:text-[15px] md:text-[15px] lg:text-[20px] mb-6">
          {t("title")}
        </h3>

        <ul className="list-disc list-inside text-[#000000] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[18px] flex flex-col gap-2">
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
  );
};

export default Mission;
