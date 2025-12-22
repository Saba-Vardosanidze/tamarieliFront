"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const TamarieliDesc = () => {
  const t = useTranslations("TamarieliDesc");

  return (
    <div className="relative flex justify-center items-center bg-[url('/Images/headerImages/png/newAboutUsBg.jpeg')] bg-cover bg-no-repeat bg-center mx-auto w-full min-h-[400px] md:min-h-[500px] lg:min-h-[1000px]">
      <div className="lg:block top-0 lg:top-[150px] right-4 lg:right-[50px] absolute">
        <Image
          src="/Images/headerImages/png/tamarieliLogo.png"
          alt="logo"
          width={150}
          height={150}
          className="w-[70px] lg:w-[150px] h-[70px] lg:h-[150px]"
        />
      </div>

      <div className="absolute inset-0" />

      <div className="z-[9] relative flex lg:flex-row flex-col justify-between items-center lg:items-stretch px-4 md:px-6 lg:px-0 w-full max-w-[1440px]">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-5 lg:gap-7 mx-auto px-2 md:px-3 lg:px-4 w-full text-center">
          <h3 className="font-bold text-[#000000] text-[15px] sm:text-[15px] md:text-[15px] lg:text-[20px]">
            {t("title")}
          </h3>

          <ul className="text-[#000000] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[18px] list-disc list-inside">
            <li>{t("list.inspiration")}</li>
            <li>{t("list.identity")}</li>
          </ul>

          <p className="mt-3 md:mt-4 lg:mt-5 max-w-[900px] text-[#000000] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[18px] leading-relaxed md:leading-relaxed lg:leading-normal">
            {t("paragraph")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TamarieliDesc;
