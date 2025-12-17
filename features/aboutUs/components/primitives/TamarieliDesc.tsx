"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const TamarieliDesc = () => {
  const t = useTranslations("TamarieliDesc");

  return (
    <div
      className="
        relative flex justify-center items-center mx-auto
        w-full
        lg:min-h-[900px] md:min-h-[500px] min-h-[400px]
        bg-[url('/images/headerImages/png/about-basic-bg.png')]
        bg-cover bg-center bg-no-repeat
      "
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
          src="/images/headerImages/png/tamarieliLogo.png"
          alt="logo"
          width={150}
          height={150}
          className="
            w-[70px] h-[70px]
            lg:w-[150px] lg:h-[150px]
          "
        />
      </div>

      <div className="absolute inset-0" />

      <div className="relative z-10 flex lg:flex-row flex-col justify-between items-center lg:items-stretch w-full max-w-[1440px] lg:px-0 md:px-6 px-4">
        <div className="flex flex-col justify-center items-center lg:gap-7 md:gap-5 gap-4 mx-auto lg:px-4 md:px-3 px-2 w-full text-center">
          <h3 className="font-bold text-[#7B3F00] lg:text-[38px] md:text-[28px] sm:text-[24px] text-[38px]">
            {t("title")}
          </h3>

          <ul className="text-[#7B3F00] lg:text-[34px] md:text-[24px] sm:text-[20px] text-[18px] list-disc list-inside">
            <li>{t("list.inspiration")}</li>
            <li>{t("list.identity")}</li>
          </ul>

          <p className="lg:mt-5 md:mt-4 mt-3 max-w-[900px] text-[#7B3F00] lg:text-[34px] md:text-[24px] sm:text-[20px] text-[18px] lg:leading-normal md:leading-relaxed leading-relaxed">
            {t("paragraph")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TamarieliDesc;
