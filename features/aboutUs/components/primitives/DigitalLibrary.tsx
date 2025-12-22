"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const DigitalLibrary = () => {
  const t = useTranslations("DigitalLibrary");

  return (
    <div
      className=" relative flex justify-center mx-auto
        w-full
         lg:min-h-[1000px] md:min-h-[500px] min-h-[400px]
        bg-[url('/images/headerImages/png/newAboutUsBg.jpeg')]
        bg-cover bg-center bg-no-repeat"
    >
      <div
        className="
   absolute
          lg:block
         right-0 top-0
          lg:right-0 lg:top-0
  "
      >
        <Image
          src="/images/headerImages/png/ciblus.png"
          alt="logo"
          width={150}
          height={150}
          className="
  
        w-[70px] h-[70px]
            lg:w-[100px] lg:h-[100px]
    "
        />
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-stretch w-full max-w-[1440px] lg:px-0 md:px-6 px-4">
        <div className="flex flex-col justify-center items-center lg:gap-7 md:gap-5 gap-4 mx-auto lg:px-4 md:px-3 px-2 lg:py-5 md:py-8 py-6 w-full text-center">
          <div className="flex flex-col lg:gap-3 md:gap-2 gap-2 w-full">
            <h3 className="font-bold text-[#000000] lg:text-[20px] md:text-[15px] sm:text-[15px] text-[15px]">
              {t("title")}
            </h3>
            <p className="font-bold text-[#000000] lg:text-[20px] md:text-[15px] sm:text-[15px] text-[15px]">
              {t("subtitle")}
            </p>
          </div>

          <ul className="text-[#000000] lg:text-[18px] md:text-[24px] sm:text-[20px] text-[18px] ">
            <li>{t("point1")}</li>
            <li>{t("point2")}</li>
            <li>{t("point3")}</li>
            <li>{t("point4")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalLibrary;
